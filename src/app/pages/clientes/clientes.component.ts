import { Clientes } from './../../models/clientes.model';
import { ClientesService } from './../../services/service.index';
import { Component, OnInit } from '@angular/core'; 
import { MatTableDataSource, MatSort } from '@angular/material';

import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  
  displayedColumns: string[] = ['nombre', 'empresa',  'telefono'];
  public clientes;
  dataSource = this.clientes;
  constructor(public obtener: ClientesService) {

   }
   listadoClientes() {
    this.obtener.getAllClientes().subscribe( (ok) => { this.clientes = ok; console.log(ok);

    });

   }
  ngOnInit() {
    this.listadoClientes();
    console.log(this.clientes);
  }

}
