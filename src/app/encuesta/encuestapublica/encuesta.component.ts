import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaPublicaComponent implements OnInit {
  
  hola(){
  
}
  constructor(private router: Router) {     console.log('paginaencuesta');
}

  ngOnInit() {
  }

}
