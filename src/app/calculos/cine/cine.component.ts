import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {

  nombre:string;
  compradores:number;
  boletos:12000;
  numeroB:number;
  descuento:number;
  totalPago:string[]=[];
  
  constructor() { 
    this.totalPago =[];
  }

  ngOnInit(): void {
  }

  Proceso():void{

    this.descuento=this.boletos*this.numeroB/0.15;
    
    if (this.numeroB>5) {
      this.totalPago[0]=`${this.boletos*this.numeroB-this.descuento}`;
    }
  }


}
