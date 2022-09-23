import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {

    total:number=0;
    numero1;
    numero2;
  constructor() { }

  sumar(){
    this.total=parseInt(this.numero1)+parseInt(this.numero2);
  }

  resta(){
    this.total=parseInt(this.numero1)-parseInt(this.numero2);
  }

  multi(){
    this.total=parseInt(this.numero1)*parseInt(this.numero2);
  }

}
