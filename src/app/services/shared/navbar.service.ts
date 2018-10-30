import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {

  menuCuenta: any[] = [
    { usuario: 'Pedro', icono: 'mdi-account-box', img: '',
      submenu: [
        { titulo: 'Mi cuenta', icono : 'ti-user' ,url: '/aqui'},
        { titulo: 'Mensajes', icono : 'ti-email' ,url: '/aqui'},
        { titulo: 'Roles', icono: 'ti-wallet', url: '/dasboard'},
        { titulo: 'Configuracion', icono: 'ti-settings', url: '/manual'},
        { titulo: 'Salir', icono: 'fa fa-power-off', url: '/manual'}
      ] }];

  constructor() { }

}
