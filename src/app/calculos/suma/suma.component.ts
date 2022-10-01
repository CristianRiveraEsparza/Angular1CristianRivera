import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {

    total:number=0;
    numero1:string='';
    numero2:string='';
    operacion:string='';
  constructor() { }

  Sumar(): void{
    switch (this.operacion) {
      case 'Sumar':
        this.total=parseInt(this.numero1)+parseInt(this.numero2);
        break;

        case 'Restar':
          this.total=parseInt(this.numero1)-parseInt(this.numero2);
          break;

          case 'Multiplicar':
            this.total=parseInt(this.numero1)*parseInt(this.numero2);
            break;
    
      default:
        break;
    }
  }

  // resta(){
  //   this.total=parseInt(this.numero1)-parseInt(this.numero2);
  // }

  // multi(){
  //   this.total=parseInt(this.numero1)*parseInt(this.numero2);
  // }

}
