import {stringify} from 'querystring';

export class usuario {
    constructor(
      public email: string,
      public password: string,
      public nombre?: string,
      public img?: string,
      public rfc?: string,
      public nss?: number,
      public departamento?: string,
      public posicion?: string,
      public _id?: string ){


    }

}
