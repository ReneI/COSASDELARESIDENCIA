import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsService, SharedService, SidebarService, MensajesService, NavbarService, TodoService} from './service.index';
import { ActivatedRoute} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import {UsuarioService} from '../components/usuario/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule

  ],
  declarations: [],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    MensajesService,
    UsuarioService,
    NavbarService,
    TodoService
  ]
})
export class ServiceModule {


}
