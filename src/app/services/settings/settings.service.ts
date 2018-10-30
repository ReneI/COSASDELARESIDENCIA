import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
   // tema es solamente el color
   // temaUrl es lo ya concatenado
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default'

  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    console.log('GUARDADO..');
  }

  cargarAjustes() {
    console.log('CHECANDO SU TEMA');
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));

      this.aplicarTema( this.ajustes.tema);
      console.log('TEMA ALMACENACENADO YA');


    } else {
      console.log('USANDO EL TEMA DEFECTO');
    }
  }

  aplicarTema(color: string) {
    const urlcss = `assets/css/colors/${color}.css`;
    // TEMA ID DEL INDEX PARA CAMBIAR LA HOJA DE ESTILOS
    this._document.getElementById('tema').setAttribute('href', urlcss );
    this.ajustes.tema = color;
    this.ajustes.temaUrl = urlcss;
    this.guardarAjustes();


  }
}

interface Ajustes  {
  temaUrl: string;
  tema: string; }


