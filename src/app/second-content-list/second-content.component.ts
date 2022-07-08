import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-second-content',
  templateUrl: './second-content.component.html',
  styleUrls: ['./second-content.component.css']
})
export class SecondContentComponent implements OnInit {
/**
   * @input productList - the Product[] passed to us
   */
 @Input()
  productList: Product[] = [];
/**
   * @property currentProduct - local state containing
   *             the currently selected `Product`
   */
 private currentProduct: Product | undefined;
 /**
   * @output onProductSelected - outputs the current
   *          Product whenever a new Product is selected
   */
  @Output() onProductSelected: EventEmitter<Product>;
  
  constructor() { 
    this.onProductSelected = new EventEmitter<Product>();
  }

  ngOnInit(): void {
  }
  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }
  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
