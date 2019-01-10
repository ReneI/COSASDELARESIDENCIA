import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../../../services/service.index';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Customer } from './customer';

import { SwalPartialTargets } from '@toverux/ngx-sweetalert2';
import swal from 'sweetalert2';
import { Clientes} from '../../../models/clientes.model';

import { Router} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class ClienteNuevoComponent implements OnInit {

  customerForm: FormGroup;
  //  customer = new Customer();
  
    constructor(private fb: FormBuilder) { }
  
  
    get contacto(): FormArray {
      return <FormArray>this.customerForm.get('contacto');
  
    }
  
  
    ngOnInit() {
  this.customerForm = this.fb.group({
    empresa:['',[Validators.required]],
      rfc:['',Validators.maxLength(20)],
      telefono:'',
      emailem:['',[Validators.required,Validators.email]] ,
  direccionem:'',
    enviarpublicidad:true,
    direccionsi:true,
  contacto: this.fb.array([this.contactos()])
  
  
  });
  
  
  const addressGroup = this.fb.group({
    nombre:'jorge',
    apellido:'roberto',
    email:'roberto.m@gmail.com',
    tipodedireccion: 'work',
    direccion1: 'Mermaid Quay',
    direccion2: '',
    ciudad: 'Cardiff Bay',
    estado: 'CA',
    zip: '340900'
  });
  this.customerForm.setControl('contacto', this.fb.array([addressGroup]));
    }
    contactos(): FormGroup {
      return this.fb.group({
  
    nombre:['',[Validators.required,Validators.minLength(3)]],
    apellido:['',[Validators.required,Validators.minLength(10)]],
    email:['',[Validators.required,Validators.email]] ,
        tipodedireccion:'',
        direccion1:'',
        direccion2:'',
        ciudad:['Durango',[Validators.required]],
        estado:'Durango',
        zip: ''
      });
    }
    eliminarContacto(i): void{
      console.log(i)
      this.contacto.removeAt(i);
    }
  
    agregarcontacto(): void{
  
      this.contacto.push(this.contactos());
  
    }
    save(customerForm: NgForm) {
      console.log(customerForm.form);
      console.log('Saved: ' + JSON.stringify(customerForm.value));
    }



/* forma: FormGroup;
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
   let user = new Clientes( this.forma.value.nombre, 
    this.forma.value.empresa, this.forma.value.posicion, 
    this.forma.value.correo, this.forma.value.telefono,this.forma.value.celular, this.forma.value.direccion );
   console.log(user);
   this._clienteservice.registrar( user ).subscribe(ok => {
       console.log('registrado en subscribe', ok);
     swal(
       'Registro existoso!',
       'Cliente Registrado con exito',
       'success'
     );
     this.forma.reset();
     },        error => {
       console.log(error);

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
      email: new FormControl(null, [Validators.required, Validators.email]),

      empresa: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      celular: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      cp: new FormControl(null, Validators.required)
    }, {});
    this.forma.setValue({
      telefono: '3344',
      nombre: 'Jose miguel',
      empresa: 'saci',
      celular: '6181119111',
      direccion: 'pesgaso',
       email: 'correo@gnail.com',
       cp: '4042'
    });

  } */

// }
