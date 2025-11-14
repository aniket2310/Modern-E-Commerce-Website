import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product';
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-product-cart',
  imports: [MatAnchor,MatIcon],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.scss',
})
export class ProductCart {

  product = input.required<Product>();

  addToCartClicked = output<Product>();

}
