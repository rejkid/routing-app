import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product!: Product; // Now, the compiler understands that this variable, 
                              // although not defined at compile time, shall be 
                              // defined at run-time, and in time, before it is being used.
  constructor() {
    // this.product = new Product('MYSHOES',
    //   'Black Running Shoes',
    //   '/assets/images/products/black-shoes.jpg',
    //   ['Men', 'Shoes', 'Running Shoes'],
    //   109.99);
  }

  ngOnInit(): void {
  }

}
