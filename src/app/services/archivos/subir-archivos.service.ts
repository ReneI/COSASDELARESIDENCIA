import { Injectable } from '@angular/core';
import { URL_RAIZ} from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivosService {

  constructor() { }



  subirArchivoPerfil( archivo: File, id: string ) {

    return new Promise( (resolve, reject ) => {

      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      formData.append( 'file', archivo, archivo.name );

      xhr.onreadystatechange = function() {

        if ( xhr.readyState === 4 ) {

          if ( xhr.status === 200 ) {
            console.log( 'Imagen subida' );
            resolve( JSON.parse( xhr.response ) );
          } else {
            console.log( 'Fallo la subida' );
            reject( xhr.response );
          }

        }
      };
      // http://localhost:3000/api/empleados/5be5d489c0c9bd2d38a673f9/upload-frog?access_token=fUQPAKCfFi0Igv5AW76dGppMss5twVGsjstkXc6dmunwqz66cqFBJtIrJuDNG7Qh

      let usuarioactual = localStorage.getItem("accessToken");

      let url = `${URL_RAIZ}/api/empleados/${id}/upload-frog?access_token=${usuarioactual}`;

      xhr.open('POST', url, true );
      xhr.send( formData );

    });




  }

}
