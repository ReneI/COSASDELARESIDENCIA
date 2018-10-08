import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-tabset-orientation',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  currentOrientation = 'horizontal';


  constructor() {

   }

  ngOnInit() {
  }

}
