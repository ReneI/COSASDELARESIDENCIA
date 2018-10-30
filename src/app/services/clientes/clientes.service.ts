import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_RAIZ} from '../../config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  TodosLosClientes: Observable<any>;
  constructor(public http: HttpClient) {
   }

   registrar( Usuario) {
    let url = URL_RAIZ + '/api/empleados';
return this.http.post(url, Usuario);
  }

   getAllClientes() {
    let url = URL_RAIZ + '/api/empleados';
    return this.http.get(url);

   }
}
