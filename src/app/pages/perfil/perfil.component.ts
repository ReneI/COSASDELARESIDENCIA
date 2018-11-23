import { Component, OnInit } from '@angular/core';
import {AuthService, UsuarioService} from '../../services/service.index';
import swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario;
  usuariotmp;

  imagenSubir: File;
  imagenTemp;

  constructor(private  Usuario: AuthService)  {
    this.usuario = this.Usuario.Usuariodata;
  }


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
ngOnInit() {

    console.log(this.usuario);
  }


}
