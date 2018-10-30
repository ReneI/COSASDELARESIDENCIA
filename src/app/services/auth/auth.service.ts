import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { URL_RAIZ} from '../../config/config';
import { usuario} from '../../models/usuarios.model';
import {isNullOrUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) {}
  headers: HttpHeaders =  new HttpHeaders({
    "Content-Type" : "application/json"

  });
  login(email: string, password: string): Observable<any> {
    const url = `${URL_RAIZ}/api/empleados/login?include=user`;

    return this.http.post(url,{ email, password},{ headers: this.headers}).pipe(
      map(data => data));
  }

  setUser(user):void {
    let us = JSON.stringify(user);
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

    return this.http.post( url, { header: this.headers});

  }
}
