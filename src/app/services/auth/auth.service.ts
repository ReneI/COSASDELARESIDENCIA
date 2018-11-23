import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { URL_RAIZ} from '../../config/config';
import { usuario} from '../../models/usuarios.model';
import {isNullOrUndefined} from 'util';
import swal from 'sweetalert2';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {SubirArchivosService} from '../archivos/subir-archivos.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


Usuariodata;


  constructor(public http: HttpClient, public _subirArchivoService: SubirArchivosService) {
  this.getUser();

  }
  headers: HttpHeaders =  new HttpHeaders({
    "Content-Type" : "application/json"

  });
  login(email: string, recordar: boolean = false, password: string): Observable<any> {

  if (recordar) {
    localStorage.setItem('email', email);
    console.log('guardar recuerdame');
  } else{
    localStorage.removeItem('email');
  }
    const url = `${URL_RAIZ}/api/empleados/login?include=user`;

    return this.http.post(url,{ email, password},{ headers: this.headers}).pipe(
      map(data => data));
  }

  setUser(user):void {

    let us = JSON.stringify(user);
    this.Usuariodata = user;
    localStorage.setItem('usuario', us);

  }
  setToken(token):void{
    localStorage.setItem('accessToken',token);
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }
  getUser(){
    let usuarioactual = localStorage.getItem('usuario');
    if(!isNullOrUndefined(usuarioactual)){
      let user = JSON.parse(usuarioactual);
      this.Usuariodata = user;
      return user;
    }else {
      return null;
    }

  }
  logout() {
     let usuarioactual = localStorage.getItem("accessToken");
     const  url = `${URL_RAIZ}/api/empleados/logout?access_token=${usuarioactual}`;
     console.log(url)
  localStorage.removeItem('usuario');
     localStorage.removeItem('accessToken');
this.Usuariodata = null;
    return this.http.post( url, { header: this.headers});

  }


  cambiarImagen( archivo: File, id: string ) {
    const usuarioactual = localStorage.getItem("accessToken");

    const  url = `${URL_RAIZ}/api/empleados/${this.Usuariodata}/upload-frog?access_token=${usuarioactual}`;

 //   http://localhost:3000/api/empleados/5be5d489c0c9bd2d38a673f9/upload-frog?access_token=fUQPAKCfFi0Igv5AW76dGppMss5twVGsjstkXc6dmunwqz66cqFBJtIrJuDNG7Qh

    this._subirArchivoService.subirArchivoPerfil( archivo, id )
          .then( (resp: any) => {

            this.Usuariodata.img = resp.usuario.img;
            swal( 'Imagen Actualizada', this.Usuariodata.nombre, 'success' );
            this.setUser( this.Usuariodata);

          })
          .catch( resp => {
            console.log( resp );
          }) ;

  }




actualizarUsuario( usuari: any ) {
  let usuarioactual = localStorage.getItem("accessToken");
  let url = `${URL_RAIZ}/api/empleados/upsertWithWhere?where={"id":"${this.Usuariodata.id}"}&access_token=${usuarioactual}`;
console.log(url);
  return this.http.post( url, usuari )
              .map( (resp: any) => {
                console.log(resp);
             console.log(resp.usuari);
                let usuario = resp.nombre;
                console.log('res', resp);

             this.setUser(resp);

                if ( usuari.id === this.Usuariodata.id ) {
                  console.log('res', resp);
                }

                swal('Usuario actualizado', usuari.nombre, 'success' );

                return true;
              })
              .catch( err => {
                swal({
                  type: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                  footer: '<a href>Why do I have this issue?</a>'
                });
                                return Observable.throw( err );
              });

}


  borrarUsuario(_id: any) {

  }

  cargarUsuarios(desde: number = 0 ) {
    // api/empleados?filter=%7B%22skip%22%3A%224%22%7D
    const  url = `${URL_RAIZ}/api/empleados?filter={"skip":"${desde}"}`;
   return this.http.get( url )

  }
}
