import {NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {PagesComponent} from './pages.component';
import {RegisterComponent} from '../login/register.component';
import {DocumentacionComponent} from './documentacion/documentacion.component';
import {BrowserModule} from '@angular/platform-browser';
import {APP_ROUTES} from '../app.routes';
import { ShareModule } from '../shared/share.module';
import {PAGES_ROUTE} from './pages.routes';


@NgModule({

  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
  ],
  imports: [
    ShareModule,
    APP_ROUTES,
    PAGES_ROUTE
  ]

})
export class PagesModule {}
