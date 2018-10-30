import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @Input() leyenda: string = '';
  @Input() porcentaje: number = 50;
  @Output() incre: EventEmitter<number> = new EventEmitter();
  constructor() {
    console.log(this.leyenda);
    console.log(this.porcentaje);
  }
  incrementar(valor: number) {
    if (this.porcentaje === 100 && valor === 5 ) {

        this.porcentaje = 100;
        return;
    }
    if (this.porcentaje === 0 && valor === -5 ) { return this.porcentaje = 0; }
       this.porcentaje += valor ;

    this.incre.emit(this.porcentaje);


    }
    Onchanges(newValue: number){
      this.incre.emit(this.porcentaje);

      let p: any = document.getElementsByName('nombre')[0];
      console.log(p.value);
      p.value = Number(this.porcentaje);

    }

  ngOnInit() {

    console.log(this.porcentaje);
  }

}
