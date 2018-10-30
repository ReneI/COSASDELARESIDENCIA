import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../../../services/service.index';

import { SwalPartialTargets } from '@toverux/ngx-sweetalert2';
import swal from 'sweetalert2';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Clientes} from '../../../models/clientes.model';

import { Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class ClienteNuevoComponent implements OnInit {
forma: FormGroup;
  constructor(public _clienteservice: ClientesService) { }




guardar(){
    
if (this.forma.invalid) {
  swal(
    'Registro Fallido !',
    'Favor de completar los campos restantes',
    'error'
  );

}
if(this.forma.valid) {


   // console.log(this.forma.value);
   let user = new Clientes( this.forma.value.nombre, this.forma.value.empresa, this.forma.value.posicion, this.forma.value.telefono );
   console.log(user);
   this._clienteservice.registrar( user ).subscribe(ok => {
       console.log('registrado en subscribe', ok);
     swal(
       'Registro!',
       'Registrado con exito favor de confirmar correo',
       'success'
     );
     },        error => {

     swal(
       'error del sistema!',
       'Contacte al administrador...!',
       'error'
     );
   }
 );

}



}









  ngOnInit() {

    this.forma = new FormGroup({

      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email ]),

      empresa: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      celular: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
    }, {});
    this.forma.setValue({
      telefono:'3344',
      nombre: 'Jose miguel',
      empresa: 'saci',
      celular: '6181119111',

      email: 'correo@gnail.com'
        }   );

  }

}
