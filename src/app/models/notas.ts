export class ToDo {
   id: string;
   titulo: string;
   descripcion: string;
   fecha: Date;
   estado: string;

constructor (
   ) {
       this.titulo = '';
       this.descripcion = '';
       this.fecha = new Date();
       this.estado = 'incompleto';
}
}
