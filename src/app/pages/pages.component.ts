import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

// Inician los plugin de jquery envolvido en una funcion javascript pura

declare function initplugings();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(public spin: NgxSpinnerService) { }

  ngOnInit() {
    initplugings();
    this.spinner();
  }
spinner(): void {
  this.spin.show();
  setTimeout(() => {
    this.spin.hide();
  }, 3000);

}
}
