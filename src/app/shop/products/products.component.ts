import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products=["bracelet","teddy","mobile"]
  constructor() { }

  ngOnInit() {
  }
  giftme=function(counter){
    alert("Buy me this!!!: "+this.products[counter]);
  }
}
