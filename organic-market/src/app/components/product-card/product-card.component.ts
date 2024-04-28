import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { IProduct } from '../../interfaces/product.interface';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  @Input() product?: IProduct;
  @Input() teste?: string;
  @Output() addProductToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  

  constructor() {
    // console.log(this.book);
    // console.log(this.teste);
  }

  ngOnInit() {
    // console.log(this.book);
    // console.log(this.teste);
  }

  addToShoppingCart() {
    
      this.addProductToCart.emit();
    
  }
}



