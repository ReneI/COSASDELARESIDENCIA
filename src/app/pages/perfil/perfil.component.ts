import { Component, OnInit } from '@angular/core';
import {AuthService, UsuarioService} from '../../services/service.index';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  editableText = 'myText';
  id: string;

  constructor(private  Usuario: UsuarioService) { }
  obj;
usuario = {
    email: '',
   posicion: '',
  nombre: '',
  telefono: '',
  rfc: '',
  nss: ''
};
usuariotemp: string[];
  ngOnInit() {

    console.log(this.usuario.email);
  }

  saveEditable(valor) {
    console.log(valor);
      this.Usuario.updateUsuario({puesto: valor}).subscribe(data => console.log(data));
     console.log('http.service: ');
    console.log('http.service: ');
  }
  // modificarpuesto(valor) {
  //   this.usuario.posicion = valor;
  //   console.log(this.usuario);
  //   console.log(valor);
  //   this.Usuario.updateUsuario(this.id, this.usuario).subscribe(data => data);
  //   console.log('http.service: ');
  // }
}
