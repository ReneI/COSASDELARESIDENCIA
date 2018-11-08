import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menuCuenta: any[] = [
    { usuario: 'Pedro', icono: 'mdi-account-box',
      submenu: [
        { titulo: 'Mi cuenta', url: '/aqui'},
        { titulo: 'Manejo de perfiles', url: '/dasboard'},
        { titulo: 'Cambiar tema', url: '/manual'},
        { titulo: 'Salir', url: '/manual'}
      ] }];


  menuEmpleados: any = [{
    titulo: 'Empleados',
    icono: 'mdi mdi-gauge',
    submenu: [
      { titulo: 'Inicio', url: '/dasboard'},
      { titulo: 'Informacion del sistema', url: '/manual'},
      { titulo: 'Configuracion de estilos', url: '/estilo'}
      ],
    empleados: [{ nombre: 'Jose Perez Roberto', url: '/empleado/:id'},
      { nombre: 'Jose Perez Roberto', url: '/empleado/:id'},
      { nombre: 'Jose Perez Roberto', url: '/empleado/:id'}

    ]

  }];


  Reportes: any[] = [
    { titulo: 'Reportes', icono: 'mdi-account-box',
      submenu: [

        { titulo: 'Reportes', url: '/reportes'},
        { titulo: 'admin', url: '/admin'},
      ] }];


      Clientes: any[] = [
        { titulo: 'Clientes', icono: 'mdi-account-box',
          submenu: [
            { titulo: 'Clientes', url: '/clientes'},
            { titulo: 'Agregar nuevo +', url: '/nuevo'}
          ] }];

  Encuestas: any[] = [
    { titulo: 'Encuestas', icono: 'mdi-account-box', url: '/encuestas' ,
      submenu: [

        { titulo: 'encuestas', url: '/encuestas'},
        { titulo: 'agregar', url: '/dasboard'}
      ] }];

  constructor() { }

}
