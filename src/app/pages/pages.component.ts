import { Component, OnInit } from '@angular/core';

// Inician los plugin de jquery envolvido en una funcion javascript pura

declare function initplugings();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initplugings();
  }

}
