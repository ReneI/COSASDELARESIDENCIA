import { NgModule } from '@angular/core';

import { APP_ROUTES } from './app.routes';
// Modulos
import { PagesModule } from './pages/pages.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';
import {BrowserModule} from '@angular/platform-browser';
// temporal
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {  } from './components/encuesta/encuesta.component';
// Servicios
import { ServiceModule } from './services/service.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncuestaPublicaComponent } from './encuesta/encuestapublica/encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DocumentacionComponent,
    EncuestaPublicaComponent
  ],
  imports: [ SweetAlert2Module.forRoot({
    buttonsStyling: false,
    customClass: 'modal-content',
    confirmButtonClass: 'btn btn-primary',
    cancelButtonClass: 'btn'
  }),
    PagesModule,
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ServiceModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
