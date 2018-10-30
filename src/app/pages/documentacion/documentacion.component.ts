import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent implements OnInit {

  constructor(private parametro: ActivatedRoute) {
    this.parametro.params.subscribe( parametros => {
      console.log('El parametro');
        console.log(parametros);
    });

  }

  ngOnInit() {
  }

}
