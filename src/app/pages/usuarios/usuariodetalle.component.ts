import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { usuario } from '../../models/usuarios.model';

@Component({
  selector: 'app-usuariodetalle',
  templateUrl: './usuariodetalle.component.html',
  styleUrls: ['./usuariodetalle.component.css']
})
export class UsuariodetalleComponent implements OnInit {

    usuario;
  constructor(public _route: ActivatedRoute) {

   }

  ngOnInit() {
    const queryParams = this._route.snapshot.queryParams;
    const routeParams = this._route.snapshot.params;

    /* 

    let id = +this._route.snapshot.params['id'];
    this.obtenerusuario(id); */

    console.log(queryParams);
  }

  obtenerusuario(id){


  }

}
