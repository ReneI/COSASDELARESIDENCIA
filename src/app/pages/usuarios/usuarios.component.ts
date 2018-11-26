import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/service.index';
import { Subscription } from 'rxjs/Subscription';
declare var swal: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  usuarios;
  desde: number = 0;

  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public _usuarioService: AuthService,
  ) { }

  ngOnInit() {
    console.log('cargando usuarios');
this.cargarusuarios();

  }
    cargarusuarios() {
      this.cargando = true;
    this._usuarioService.cargarUsuarios(this.desde)
              .subscribe( res => {
                this.cargando = false;
      console.log(res);
      this.usuarios = res;
      this.totalRegistros= res.length;

      });

    }
    cargasDesde(valor: number) {
      const desde = this.desde + valor;
            console.log('desdeAntes:', desde);
            this.desde += valor;
            this.cargarusuarios();
            console.log('desde:', this.desde);
    }

    buscar(valor: string) {

      if(valor.length<=0){
        this.cargarusuarios();
return;
      }
      this.cargando = true;
      console.log(valor);
      this._usuarioService.buscar(valor)
      .subscribe( res => {
        this.cargando = false;

console.log(res);
this.usuarios = res;
    });

  }

  borrar(usuario){
    if(usuario.rol === 'User') {
      console.log('no puede hacer eso');
      return;
    }
    console.log(usuario);
    this._usuarioService.borrarUsuario(usuario.id).subscribe(res =>{

    });
  }


}