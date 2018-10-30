import {stringify} from 'querystring';

export class reporte {

  constructor(
    // noinspection JSAnnotator
    public reporteNombre:  string,
    public nombreEmpleado: string,
    public entrada: string,
    public documento: Array<string>,
    public semana: number

  )
{


  }

}
