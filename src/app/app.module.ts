import { NgModule } from '@angular/core';

import { APP_ROUTES } from './app.routes';
// Modulos
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DocumentacionComponent

  ],
  imports: [
    PagesModule,
    BrowserModule,
    APP_ROUTES

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
