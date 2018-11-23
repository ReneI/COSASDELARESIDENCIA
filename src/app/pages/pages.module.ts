import { CommonModule } from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {APP_ROUTES} from '../app.routes';
import { ShareModule } from '../shared/share.module';
import {PAGES_ROUTE} from './pages.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IncrementadorComponent} from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { SurveyEditorComponent } from '../components/encuesta-editor/encuesta-editor.component';
import { PromesasComponent } from './promesas/promesas.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { ReportesComponent } from './reportes/reportes.component';
import {NotaComponent} from '../components/nota/nota.component';
import {NotasFormsComponent} from '../components/notas-forms/notas-forms.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {PagesComponent} from './pages.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DetalleComponent } from './clientes/detalle/detalle.component';
import { ClientesComponent} from './clientes/clientes.component';
import { ClienteNuevoComponent } from './clientes/nuevo/clientenuevo.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DataTableComponent } from '../data-table/data-table.component';
import { UsuariosComponent } from './perfil/usuarios/usuarios.component';
import {DemoMaterialModule} from './materia.module';
import {MatNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarioComponent } from '../components/calendario/calendario.component';

/* panel de reportes
 */
import {CalendarDateFormatter, CalendarModule, DateAdapter, MOMENT, CalendarMomentDateFormatter } from 'angular-calendar';
import { PanelreportesComponent } from './reportes/panelreportes/panelreportes.component';
import { registerLocaleData } from '@angular/common';
import moment from 'moment-timezone';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';

// imagen de perfil
import {PipesModule} from '../pipes/pipes.module';


export function momentAdapterFactory() {
  return adapterFactory(moment);
}

@NgModule({

  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccoutSettingsComponent,
    SurveyEditorComponent,
    PromesasComponent,
    EncuestasComponent,
    ReportesComponent,
    NotaComponent,
    NotasFormsComponent,
    PagesComponent,
    PerfilComponent,
    DetalleComponent,
    ClientesComponent,
    ClienteNuevoComponent,
    DataTableComponent,
    UsuariosComponent,
    PanelreportesComponent,
    CalendarioComponent


  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [CommonModule,
    MatNativeDateModule,
    ShareModule,
    APP_ROUTES,
    PAGES_ROUTE,
    BrowserAnimationsModule,
    FormsModule,
    PipesModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
NgxSpinnerModule,
DemoMaterialModule,
CalendarModule.forRoot(
  {
    provide: DateAdapter,
    useFactory: momentAdapterFactory
  },
  {
    dateFormatter: {
      provide: CalendarDateFormatter,
      useClass: CalendarMomentDateFormatter
    }
  }
)
  ],
  providers: [
    {
      provide: MOMENT,
      useValue: moment
    },
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ]

})
export class PagesModule {}
