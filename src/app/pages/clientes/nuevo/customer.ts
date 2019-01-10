export class Customer {


    constructor( 
        public empresa = '',
         public rfc:string,
         public direccionem?: string,
         public nombre = '',
         public apellido = '',
         public email = '',
         public enviarpublicidad = true,
         public tipodedireccion = 'home',
         public direccion1?: string,
         public direccion2?: string,
         public ciudad?: string,
         public estado = '',
         public zip?: string) { }
     
     

}