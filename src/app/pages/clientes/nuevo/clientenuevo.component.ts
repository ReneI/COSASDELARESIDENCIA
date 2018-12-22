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

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { 'match': true };
}

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { 'range': true };
    }
    return null;
  };
}

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class ClienteNuevoComponent implements OnInit {

  customerForm: FormGroup;
  customer = new Customer();
  emailMessage: string;

  private validationMessages = {
    required: ' email',
    email: 'email'
  };

  get addresses(): FormArray {
    return <FormArray>this.customerForm.get('addresses');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      empresa: ['', [Validators.required, Validators.minLength(3)]],

      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }, { validator: emailMatcher }),
      phone: '',
      notification: 'email',
      rating: [null, ratingRange(1, 5)],
      sendCatalog: true,
      addresses: this.fb.array([this.buildAddress()])
    });

    this.customerForm.get('notification').valueChanges.subscribe(
      value => this.setNotification(value)
    );

    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setMessage(emailControl)
    );
  }

  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      street1: ['', Validators.required],
      street2: '',
      city: '',
      state: '',
      zip: ''
    });
  }

  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Jack',
      lastName: 'Harkness',
      emailGroup: { email: 'jack@torchwood.com', confirmEmail: 'jack@torchwood.com' }
    });
    const addressGroup = this.fb.group({
      addressType: 'work',
      street1: 'Mermaid Quay',
      street2: '',
      city: 'Cardiff Bay',
      state: 'CA',
      zip: ''
    });
    this.customerForm.setControl('addresses', this.fb.array([addressGroup]));
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    console.log(this.validationMessages);
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.emailMessage += this.validationMessages[key]).join(' ');
    }
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

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
