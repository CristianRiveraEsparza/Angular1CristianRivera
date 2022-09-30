import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

 
  num1:number;
  tablaRes:string[]=[];

  constructor() { 
    this.tablaRes =[];
  }

  tablaMult():void{
    for(let i=1; i<11; ++i){
      this.tablaRes[i]=`${this.num1} x ${i} = ${i*this.num1}`+"\n";
    }
  }


}
