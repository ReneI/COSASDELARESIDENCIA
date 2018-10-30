import { Component, OnInit } from '@angular/core';
// tslint:disable-text-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';
import {retry} from 'rxjs/operators';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})


export class PromesasComponent implements OnInit {

  constructor() {
this.regresaobsrvable().pipe( retry (89)).subscribe(
  numero => console.log('sub', numero ),
  error => console.log('error en obs', error),
  () => console.log('El observador termino'));
  }

  regresaobsrvable(): Observable <any> {
      return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;
        observer.next(contador);

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000 );

    });
  }

  ngOnInit() {
  }

}
