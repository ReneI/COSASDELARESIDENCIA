import { Clientes } from './../../models/clientes.model';
import { ClientesService } from './../../services/service.index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  

  public clientes;



  constructor(public obtener: ClientesService) {

   }
   listadoClientes(){
    this.obtener.getAllClientes().subscribe( (ok) => { this.clientes = ok;console.log(ok);

    });

   }
  ngOnInit() {
    this.listadoClientes();
    console.log(this.clientes);
  }

}
