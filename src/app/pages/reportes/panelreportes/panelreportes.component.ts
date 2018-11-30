/* import { CalendarioComponent } from './../../../components/calendario/calendario.component';
import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
// As an alternative to rrule there is also rSchedule
// See https://github.com/mattlewis92/angular-calendar/issues/711#issuecomment-418537158 for more info
import RRule from 'rrule';
import moment from 'moment-timezone';
import {
  CalendarDayViewBeforeRenderEvent,
  CalendarEvent,
  CalendarMonthViewBeforeRenderEvent,
  CalendarView,
  CalendarWeekViewBeforeRenderEvent
} from 'angular-calendar';
import { colors } from './colors';
import { ViewPeriod } from 'calendar-utils';

interface RecurringEvent {
  title: string;
  color: any;
  rrule?: {
    freq: any;
    bymonth?: number;
    bymonthday?: number;
    byweekday?: any;
  };
}

// we set the timezone to UTC to avoid issues with DST changes
// see https://github.com/mattlewis92/angular-calendar/issues/717 for more info
moment.tz.setDefault('Utc');
@Component({ 
  selector: 'app-calendario',
 templateUrl: './panelreportes.component.html',
 changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./panelreportes.component.css'] })

export class PanelreportesComponent {
  view = CalendarView.Month;

  events: CalendarEvent[] = [];

  clickedDate: Date;
  viewDate = moment().toDate();

  recurringEvents: RecurringEvent[] = [
    {
      title: 'Recurs on the 5th of each month',
      color: colors.yellow,
      rrule: {
        freq: RRule.MONTHLY,
        bymonthday: 5
      }
    },
    {
      title: 'Recurs yearly on the 10th of the current month',
      color: colors.blue,
      rrule: {
        freq: RRule.YEARLY,
        bymonth: moment().month() + 1,
        bymonthday: 10
      }
    },
    {
      title: 'Recurs weekly on mondays',
      color: colors.red,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.MO]
      }
    }
  ];

  calendarEvents: CalendarEvent[] = [];

  viewPeriod: ViewPeriod;

  constructor(private cdr: ChangeDetectorRef) {}

  updateCalendarEvents(
    viewRender:
      | CalendarMonthViewBeforeRenderEvent
      | CalendarWeekViewBeforeRenderEvent
      | CalendarDayViewBeforeRenderEvent
  ): void {
    if (
      !this.viewPeriod ||
      !moment(this.viewPeriod.start).isSame(viewRender.period.start) ||
      !moment(this.viewPeriod.end).isSame(viewRender.period.end)
    ) {
      this.viewPeriod = viewRender.period;
      this.calendarEvents = [];

      this.recurringEvents.forEach(event => {
        const rule: RRule = new RRule({
          ...event.rrule,
          dtstart: moment(viewRender.period.start)
            .startOf('day')
            .toDate(),
          until: moment(viewRender.period.end)
            .endOf('day')
            .toDate()
        });
        const { title, color } = event;

        rule.all().forEach(date => {
          this.calendarEvents.push({
            title,
            color,
            start: moment(date).toDate()
          });
        });
      });
      this.cdr.detectChanges();
    }
  }

  dayHeaderClicked(evn){
   console.log(evn);
    this.viewDate = evn.day.date; // finally get the clicked date value } 

}

}
 */





import { Component, ChangeDetectionStrategy, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  DAYS_OF_WEEK } from 'angular-calendar';
import { CalendarEvent } from 'angular-calendar';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format
} from 'date-fns';
import { Observable } from 'rxjs';
import { colors } from './colors';
import RRule from 'rrule';
import moment from 'moment-timezone';
interface Film {
  id: number;
  title: string;
  release_date: string;
  //fecha
}

interface RecurringEvent {
  title: string;
  color: any;
  rrule?: {
    freq: any;
    bymonth?: number;
    bymonthday?: number;
    byweekday?: any;
  };
}
function getTimezoneOffsetString(date: Date): string {
  const timezoneOffset = date.getTimezoneOffset();
  const hoursOffset = String(
    Math.floor(Math.abs(timezoneOffset / 60))
  ).padStart(2, '0');
  const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
  const direction = timezoneOffset > 0 ? '-' : '+';
  return `T00:00:00${direction}${hoursOffset}${minutesOffset}`;
}
moment.tz.setDefault('Utc');
@Component({
  selector: 'mwl-demo-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './panelreportes.component.html',

})
export class PanelreportesComponent implements OnInit {
  view: string = 'month';

  viewDate: Date = new Date();
 fechaselect;
  events$: Observable<Array<CalendarEvent<{ film: Film }>>>;
  clickedDate: Date;

  activeDayIsOpen: boolean = false;
  
  
  excludeDays: number[] = [0, 6];

  weekStartsOn = DAYS_OF_WEEK.SUNDAY;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  recurringEvents: RecurringEvent[] = [
    {
      title: 'Recurs on the 5th of each month',
      color: colors.yellow,
      rrule: {
        freq: RRule.MONTHLY,
        bymonthday: 5
      }
    },
    {
      title: 'Recurs yearly on the 10th of the current month',
      color: colors.blue,
      rrule: {
        freq: RRule.YEARLY,
        bymonth: moment().month() + 1,
        bymonthday: 10
      }
    },
    {
      title: 'Recurs weekly on mondays',
      color: colors.red,
      rrule: {
        freq: RRule.WEEKLY,
        byweekday: [RRule.MO]
      }
    }
  ];

  
  fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay
    }[this.view];

    const params = new HttpParams()
      .set(
        'primary_release_date.gte',
        format(getStart(this.viewDate), 'YYYY-MM-DD')
      )
      .set(
        'primary_release_date.lte',
        format(getEnd(this.viewDate), 'YYYY-MM-DD')
      )
      .set('api_key', '0ec33936a68018857d727958dca1424f');

    this.events$ = this.http
      .get('https://api.themoviedb.org/3/discover/movie', { params })
      .pipe(
        map(({ results }: { results: Film[] }) => {
          return results.map((film: Film) => {
            return {
              title: film.title,
              start: new Date(
                film.release_date + getTimezoneOffsetString(this.viewDate)
              ),
              color: colors.yellow,
              allDay: true,
              meta: {
                film
              }
            };
          });
        })
      );
  }

  dayClicked({
    date,
    events
                  }: {
    date: Date;
    events: Array<CalendarEvent<{ film: Film }>>;
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventClicked(event: CalendarEvent<{ film: Film }>): void {
    window.open(
      `https://www.themoviedb.org/movie/${event.meta.film.id}`,
      '_blank'
    );
  }
}
