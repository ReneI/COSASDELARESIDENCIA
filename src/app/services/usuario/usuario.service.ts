import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { usuario} from '../../models/usuarios.model';
import { URL_RAIZ} from '../../config/config';
import {Observable} from 'rxjs';
import { AuthService } from '../auth/auth.service';

import {map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

      TodosLosUsuarios: Observable<any>;
      UltimosUsuarios: Observable<any>;
  headers: HttpHeaders =  new HttpHeaders({
    "Content-Type" : "application/json"

  });

  constructor(public  http: HttpClient, public auth: AuthService) { }
      //  obj = this.auth.getUser().id;

  registrar( Usuario: usuario) {
    let url = URL_RAIZ + '/api/empleados';
    return this.http.post(url, Usuario);

  }

  getUsuario(id: string) {
       const url = `URL_RAIZ +'/api/empleados/'+${id}`;
       return this.http.get(url);
  }
  updateUsuario(Usuario) {
    // console.log(this.obj)
  let i = {
     id: Usuario

  }
    const url = `${URL_RAIZ}/api/empleados/update?where=${[i]}&access_token=${this.auth.getToken()}`;
return this.http.post(url, Usuario, { headers: this.headers});
  }


}
