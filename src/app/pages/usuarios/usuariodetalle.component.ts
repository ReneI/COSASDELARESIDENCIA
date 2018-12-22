import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from '../../models/usuarios.model';
import {AuthService, UsuarioService} from '../../services/service.index';
import swal from 'sweetalert2';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-usuariodetalle',
  templateUrl: './usuariodetalle.component.html',
  styleUrls: ['./usuariodetalle.component.css']
})
export class UsuariodetalleComponent implements OnInit {

    usuario: usuario = new usuario('','','','','','','','','');
  constructor(public route : Router, public _route: ActivatedRoute, public  Usuario: AuthService) {

_route.params.subscribe( params => {
  let id = params['id'];
this.obtenerusuario(id); }, error => {
  console.log(error);
},
() => {

  // 'onCompleted' callback.
  // No errors, route to new page here
} );
  }
  id;
usuarioid;
  usuariotmp;

  imagenSubir: File;
  imagenTemp;

   guardar(usuario) {
   
    this.Usuario.actualizarUsuario(usuario).subscribe();
    console.log(usuario);

}

seleccionImage( archivo: File ) {

  if ( !archivo ) {
    this.imagenSubir = null;
    return;
  }

  if ( archivo.type.indexOf('image') < 0 ) {
    swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
    this.imagenSubir = null;
    return;
  }

  this.imagenSubir = archivo;

  let reader = new FileReader();
  let urlImagenTemp = reader.readAsDataURL( archivo );

  reader.onloadend = () => this.imagenTemp = reader.result;

}


cambiarImagen() {

  this.Usuario.cambiarImagen( this.imagenSubir, this.usuario.id );

}

  ngOnInit() {/* 
    this.id =  this._route.snapshot.params.id;
    console.log(this.id);
 this.obtenerusuario(this.id); */


    console.log(this.usuario);
  }

  obtenerusuario(id) {
   this.Usuario.buscarporid(id).subscribe(arg => {
    this.usuario = arg;
    console.log(this.usuario);

   }}

}
