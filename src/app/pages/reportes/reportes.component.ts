import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes/reportes.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Clientes} from '../../models/clientes.model';
import '@ckeditor/ckeditor5-build-classic/build/translations/es';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { SwalPartialTargets } from '@toverux/ngx-sweetalert2';
import swal from 'sweetalert2';

// import AWS = require('aws-sdk');


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {


  forma : FormGroup;
  public Editor = ClassicEditor;

  constructor(public _reporte: ReportesService) { }

  public model = {
    editorData: '<p>Hello, world!</p>'
};

  public onReady( editor ) {
      editor.ui.view.editable.element.parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.view.editable.element
      );  
  }
  public config = {
    language: 'es'
};


  ngOnInit() {
    this.forma = new FormGroup({
      descripcion: new FormControl(null, Validators.required),
      informacion: new FormControl(null, Validators.required),

      adjuntos: new FormControl(null, [Validators.required, Validators.email]),
    }, {});
  }




registrar(Datos){
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
     this._reporte.registrar(Datos).subscribe( ee => {
      console.log('registrado en subscribe', ee);
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




/* 
  fileEvent(fileInput: any) {
    const AWSService = AWS;
    const region = '<insert your region here>';
    const bucketName = '<insert your bucket name>';
    const IdentityPoolId = '<insert your identity pool id>';
    const file = fileInput.target.files[0];
  
    AWSService.config.update({
      region: region,
      credentials: new AWSService.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
      })
    });
  
  //adds the S3 service, make sure the api version and bucket are correct
    const s3 = new AWSService.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: bucketName}
    });
  
  //I store this in a variable for retrieval later
    this.image = file.name;
  
    s3.upload({ Key: file.name, Bucket: bucketName, Body: file, ACL: 'public-read'}, function (err, data) {
     if (err) {
       console.log(err, 'there was an error uploading your file');
     }
   });
  } */

}
}