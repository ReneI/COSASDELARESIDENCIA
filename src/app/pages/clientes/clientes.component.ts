import { Clientes } from './../../models/clientes.model';
import { ClientesService } from './../../services/service.index';
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'empresa',  'telefono', 'acciones'];
  public clientes;
  dataSource = new MatTableDataSource(this.clientes);
  constructor(public obtener: ClientesService) {}
  listData: MatTableDataSource<any>;
     @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;
  searchKey: string;
   listadoClientes() {
    this.obtener.getAllClientes().subscribe( (ok) => { this.clientes = ok;
      this.listData = new MatTableDataSource(this.clientes);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;

      console.log(ok);

    });

   }
  ngOnInit() {
    this.listadoClientes();
    console.log('estos son mios', this.clientes);
    this.listData.filterPredicate = (data, filter) => {
      return this.displayedColumns.some(ele => {
        return ele !== 'actions' && data[ele].toLowerCase().indexOf(filter) !== -1;
      });
};
    
  }
  
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
}

}
