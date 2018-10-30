import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import { SettingsService} from '../../services/settings/settings.service';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocaricon();
  }

  // Para guardar el tema y llamar al servio en el localStore
cambiarColor(color: string, link: any) {

   this.icon(link);
   // le envio el tema a seleccionar
   this._ajustes.aplicarTema( color );

}


// Para cambiar el icono del que se seleciono
icon(link: any) {

  let sel: any = document.getElementsByClassName('working');
   for (const ref of sel ) {
    ref.classList.remove('working');
   }
   link.classList.add('working');

}

  colocaricon() {

    let sel: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;
    console.log(tema);
    for (const ref of sel ) {

      if (ref.getAttribute('data-theme') === tema) {
      ref.classList.add('working');
      break;
      }
    }

  }

}
