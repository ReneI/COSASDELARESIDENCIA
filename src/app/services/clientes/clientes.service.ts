import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_RAIZ} from '../../config/config';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  TodosLosClientes: Observable<any>;
  constructor(public http: HttpClient, private token: AuthService) {
   }
   headers: HttpHeaders =  new HttpHeaders({
    "Content-Type" : "application/json"

  });
   registrar( Usuario) {
    let url = URL_RAIZ + '/api/clientes';
return this.http.post(url, Usuario, {headers: this.headers}).map( ma => {
   console.log(ma);
   return ma;
});


  }

   getAllClientes() {
    let token = this.token.getToken();
    let url = URL_RAIZ + '/api/clientes?access_token='+ token;
    console.log(url);
    return this.http.get(url);

   }
   deleteClientes(){

   }
   updateClientes(){
     
   }
}
