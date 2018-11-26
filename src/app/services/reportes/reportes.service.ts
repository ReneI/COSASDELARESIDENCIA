import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { URL_RAIZ} from '../../config/config';
import { usuario } from '../../models/usuarios.model';
import {isNullOrUndefined} from 'util';
import swal from 'sweetalert2';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {SubirArchivosService} from '../archivos/subir-archivos.service';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {



  constructor(public usuarioservice: AuthService, public http: HttpClient, public _subirArchivoService: SubirArchivosService) {
        this.usuarioservice.getUser();
  

}


registrarreporte(fecha){
  const  url = `${URL_RAIZ}/api/empleados?filter={"where":{"fecha": "${fecha}"}}`;
  return this.http.get( url ).subscribe({
    
  })
  }

  private handleError(err: HttpErrorResponse) {
    if( err.status == 500 ) {

        return Observable.throw(new Error(<YOUR USERFRIENDLY MESSAGE>));

    } else if( err.status == 400 ) {

        return Observable.throw(new Error(<YOUR MESSAGE>));
    }

    // you can also catch all errors of a group like this
    else if( err.status < 500 && err.status >= 400 ) {

        return Observable.throw(new Error(<CLIENT ERROR MESSAGE>));
    }
}

}
regristrarreporte

}