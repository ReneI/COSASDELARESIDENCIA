import { Component, OnInit } from '@angular/core';
import { interpolateParams} from '@angular/animations/browser/src/util';
import {ActivationEnd, Router} from '@angular/router';
import { filter, map} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
      titulo: string;
  constructor(private router: Router, private  title: Title) {

 this.getData().subscribe( ee => {
      console.log(ee);
      this.titulo = ee.titulo;
    this.title.setTitle(this.titulo);
    });



  }
  ngOnInit() {
  }
  getData() {

    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),

      map( (evento: ActivationEnd) => evento.snapshot.data ) );

}

}
