import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { SwalPartialTargets } from '@toverux/ngx-sweetalert2';
import swal from 'sweetalert2';
import { UsuarioService} from '../services/service.index';
import { usuario} from '../models/usuarios.model';
import { Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
      forma: FormGroup;

    soniguales(campo1: string, campo2: string) {
    return ( grupo : FormGroup) => {

       // @ts-ignore
      let pass1 = grupo.controls[campo1].value;

      // @ts-ignore
      let pass2 = grupo.controls[campo2].value;

        if ( pass1 === pass2 ) {

          return null;
        }
      return {

       soniguales:  true
          };

    };
    }

    // existeUsuario(control: FormControl): Promise <any>|Observable <any> {
    //
    //       let vigil = new Promise((resolve, reject)=>{
    //   //null si todo lo hace bien
    //    // si regresa algo ya existe el usuario
    //
    //       });
    // return null
    // }
  constructor(public router: Router, public _registroService: UsuarioService) {


    }

guardar() {
if (this.forma.invalid) {
  swal(
    'Registro Fallido !',
    'Favor de completar los campos restantes',
    'error'
  );

}

if ( this.forma.valid) {

   // console.log(this.forma.value);
    let user = new usuario( this.forma.value.email, this.forma.value.password);
    console.log(user)
    this._registroService.registrar( user ).subscribe(ok => {
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
    console.log('navegando al login')
  //  this.router.navigate(['/login']);

  }
  }
  ngOnInit(): void {
    this.forma = new FormGroup({

      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email ]),

      password: new FormControl(null, Validators.required),
      password1: new FormControl(null, Validators.required),
      condicionales: new FormControl(false)
    },{ validators: this.soniguales('password', 'password1') } );
    this.forma.setValue({

      nombre: 'test',
      password: 'pass',
      password1: 'pass',

      email: 'correo@gnail.com',
      condicionales: true
    }   );

  }

}
