import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {
  
  //   constructor() { }
  
  //   ngOnInit(): void {
  //   }
  
  //   total:number=0;
  //   maxBoletos:number=7;
  //   des:number=0;
  //   error:string;
  
  //   comprador;
  //   nombre;
  //   boletos;
  //   tarjetaSi;
  //   tarjetaNo;
  
  //   procesar(){
  //       if(this.comprador==1){
  //           this.maxBoletos=7;
  //           if(this.boletos<=2)
  //         {
  //           if(this.tarjetaSi){
  //             this.total=this.total-(this.total*0.10);
  //           }
  //         }
  //         else if(this.boletos>=3 && this.boletos<=5)
  //         {
  //           this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
  //           if(this.tarjetaSi){
  //             this.total=this.total-(this.total*0.10);
  //           }
  //         }
  //         else if(this.boletos>=6 && this.boletos<=7){
  //           this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
  //           if(this.tarjetaSi){
  //             this.total=this.total-(this.total*0.10);
  //           }
  //         }
  //       }
  
  
  //       if(this.comprador==2){
  //         this.maxBoletos=7*2;
  //         if(this.boletos<=2)
  //       {
  //         if(this.tarjetaSi){
  //           this.total=this.total-(this.total*0.10);
  //         }
  //       }
  //       else if(this.boletos>=3 && this.boletos<=5)
  //       {
  //         this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
  //         if(this.tarjetaSi){
  //           this.total=this.total-(this.total*0.10);
  //         }
  //       }
  //       else if(this.boletos>=6 && this.boletos<=14){
  //         this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
  //         if(this.tarjetaSi){
  //           this.total=this.total-(this.total*0.10);
  //         }
  //       }
  //     }
  
  
  //     if(this.comprador==3){
  //       this.maxBoletos=7*3;
  //       if(this.boletos<=2)
  //     {
  //       if(this.tarjetaSi){
  //         this.total=this.total-(this.total*0.10);
  //       }
  //     }
  //     else if(this.boletos>=3 && this.boletos<=5)
  //     {
  //       this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
  //       if(this.tarjetaSi){
  //         this.total=this.total-(this.total*0.10);
  //       }
  //     }
  //     else if(this.boletos>=6 && this.boletos<=21){
  //       this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
  //       if(this.tarjetaSi){
  //         this.total=this.total-(this.total*0.10);
  //       }
  //     }
  //   }
  
  
  //   if(this.comprador==4){
  //     this.maxBoletos=7*4;
  //     if(this.boletos<=2)
  //   {
  //     if(this.tarjetaSi){
  //       this.total=this.total-(this.total*0.10);
  //     }
  //   }
  //   else if(this.boletos>=3 && this.boletos<=5)
  //   {
  //     this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
  //     if(this.tarjetaSi){
  //       this.total=this.total-(this.total*0.10);
  //     }
  //   }
  //   else if(this.boletos>=6 && this.boletos<=28){
  //     this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
  //     if(this.tarjetaSi){
  //       this.total=this.total-(this.total*0.10);
  //     }
  //   }
  // }
  
  
  // if(this.comprador==5){
  //   this.maxBoletos=7*5;
  //   if(this.boletos<=2)
  // {
  //   if(this.tarjetaSi){
  //     this.total=this.total-(this.total*0.10);
  //   }
  // }
  // else if(this.boletos>=3 && this.boletos<=5)
  // {
  //   this.total=(this.boletos*12)- ((this.boletos*12)*0.10);
  //   if(this.tarjetaSi){
  //     this.total=this.total-(this.total*0.10);
  //   }
  // }
  // else if(this.boletos>=6 && this.boletos<=35){
  //   this.total=(this.boletos*12)- ((this.boletos*12)*0.15);
  //   if(this.tarjetaSi){
  //     this.total=this.total-(this.total*0.10);
  //   }
  // }
  // }
  // else{
  //   this.error=(`Error no se puede mas de 5 compradores`);
  // }
          
  //     }
    
  
  
  





  nombre:string;
  compradores:number;
  boletos:number=12;
  numeroB;
  tSi;
  tNo;
  descuento:number;
  descuento2:number;
  totalPago:string[]=[];
  
  constructor() { 
    this.totalPago =[];
  }

  ngOnInit(): void {
  }

  Proceso():void{

    this.descuento=this.boletos*this.numeroB*0.15;
    this.descuento2=this.boletos*this.numeroB*0.10;
    
    if (this.tSi) {
    
      if (this.numeroB>5) {
        this.totalPago[0]=`${this.boletos*this.numeroB-this.descuento-this.descuento2}`;
      }
      if (this.numeroB=5) {
        this.totalPago[0]=`${this.boletos*this.numeroB-this.descuento2-this.descuento2}`;
      }
      if (this.numeroB=4) {
        this.totalPago[0]=`${this.boletos*this.numeroB-this.descuento2-this.descuento2}`;
      }
      if (this.numeroB=3) {
        this.totalPago[0]=`${this.boletos*this.numeroB-this.descuento2-this.descuento2}`;
      }
      if (this.numeroB<=2) {
        this.totalPago[0]=`${this.boletos*this.numeroB-this.descuento2}`;
      }

    }

    if (this.tNo) {
    
      if (this.numeroB>5) {
        this.totalPago[0]=`${this.boletos*this.numeroB-this.descuento}`;
      }
      if (this.numeroB=5) {
        this.totalPago[0]=`${this.boletos*this.numeroB-this.descuento2}`;
      }
      if (this.numeroB=4) {
        this.totalPago[0]=`${this.boletos*this.numeroB-this.descuento2}`;
      }
      if (this.numeroB=3) {
        this.totalPago[0]=`${this.boletos*this.numeroB-this.descuento2}`;
      }
      if (this.numeroB<=2) {
        this.totalPago[0]=`${this.boletos*this.numeroB}`;
      }

    }

    
  }


}
