import { NgModule } from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {HeaderComponent} from './header/header.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import {APP_ROUTES} from '../app.routes';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES


  ],
exports: [
   HeaderComponent,
  BreadcrumbsComponent,
  SidebarComponent,
  NopagefoundComponent
]
})
export class ShareModule { }
