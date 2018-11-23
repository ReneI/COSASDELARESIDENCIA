import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import { AuthService} from '../services/service.index';

import swal from 'sweetalert2';
import {usuario} from '../models/usuarios.model';

declare function initplugings();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  recuerdame:boolean=false;
  forma: FormGroup;
  error: boolean = false;
       correo: string = 'hola';

      datos: Object = {
         nombre: '' ,
         password: ''

      };
  constructor(public router: Router, private login: AuthService) { }

public user: usuario = {

   email:  '',
  password: ''};
  ingresar() {

    console.log(this.forma.value.correo);
   //Evaluar si el form es llenado correctamente
    if (this.forma.valid) {
      console.log(this.user);
      // console.log(this.forma.value);
      // this.router.navigate(['/dashboard']);
      console.log('Bienvenido');
      return this.login.login(this.forma.value.correo,this.forma.value.recuerdame , this.forma.value.password).subscribe(data =>

      {
        let token = data.id;
        this.login.setToken(token);
        this.login.setUser(data.user);
        console.log(data);
          this.router.navigate(['/dashboard']); } ,
        error => { console.log(error); this.error = true; }
        );
    }
    }

  ngOnInit() {
    this.email = localStorage.getItem('email') || '';
    if(this.email.length>0){
        this.recuerdame =true;
    }

    if (this.login.getToken()) {
      this.router.navigate(['/dashboard']);
   }
    initplugings();
    this.forma = new FormGroup({
        correo: new FormControl(null, [ Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6) ]),
      recuerdame: new FormControl(null)

    }
    );
  }

}
