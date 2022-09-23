import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=200;
  imageMarge:number=2;
  muestraImg:boolean=false;
  listFilter:string;


  constructor() { }

  muestraImagen():void{
    this.muestraImg=!this.muestraImg;
  }

  products:IProducto[]=[
    {
      "product1":1,
      "productName":'XD',
      "descripcion":'Coso',
      'listFilter':'',
      "createDate":"Mayo 21, 2011",
      "price":13000,
      "rating":10,
      "imageUrl":"https://i.ytimg.com/vi/rElilj5W9m0/hqdefault.jpg"
    },
    {
      "product1":2,
      "productName":'XD2',
      "descripcion":'Coso',
      'listFilter':'',
      "createDate":"Mayo 21, 2011",
      "price":130000,
      "rating":10,
      "imageUrl":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3e78f9b-6b34-4d0f-8655-43cef1cf1c1a/ddg9z56-0e3ba4fb-245d-4f21-a2b3-1cdc6621e720.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QzZTc4ZjliLTZiMzQtNGQwZi04NjU1LTQzY2VmMWNmMWMxYVwvZGRnOXo1Ni0wZTNiYTRmYi0yNDVkLTRmMjEtYTJiMy0xY2RjNjYyMWU3MjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WNaRxzpZPytZ_XosST4loI-2aINp-YoxjMajO9WehJQ"
    },
  ]

  ngOnInit(): void {
  }

}
