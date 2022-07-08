import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { Product } from '../product.model';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  productsObs!: Observable<Product[]>;
  products: Product[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
      ];
      this.productsObs = of(this.products);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      
    });
  }
  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
