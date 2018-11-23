import { Component, OnInit } from '@angular/core';
import {AuthService, UsuarioService} from '../../services/service.index';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario;
  usuariotmp;

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
ngOnInit() {

    console.log(this.usuario);
  }



/* 
  saveEditable(valor) {
    console.log(valor);
      this.Usuario.updateUsuario({puesto: valor}).subscribe(data => console.log(data));
     console.log('http.service: ');
    console.log('http.service: ');
  } */
  // modificarpuesto(valor) {
  //   this.usuario.posicion = valor;
  //   console.log(this.usuario);
  //   console.log(valor);
  //   this.Usuario.updateUsuario(this.id, this.usuario).subscribe(data => data);
  //   console.log('http.service: ');
  // }
}
