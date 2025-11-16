import { Component, computed, inject, input, signal,effect  } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ProductCart } from '../../components/product-cart/product-cart';
import {MatSidenavContainer, MatSidenavContent, MatSidenav,} from '@angular/material/sidenav'
import { MatNavList, MatListItem, MatListItemTitle } from '@angular/material/list'
import { RouterLink } from '@angular/router';
import { EcommerceStore } from '../../ecommerce-store';
import { ToggleWishlistButton } from "../../components/toggle-wishlist-button/toggle-wishlist-button";
 

@Component({
  selector: 'app-products-grid',
  imports: [CommonModule, ProductCart, MatSidenavContainer, MatSidenavContent, MatSidenav, MatNavList, MatListItem, MatListItemTitle, RouterLink, TitleCasePipe, ToggleWishlistButton],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export default class ProductsGrid {

  category = input<string>('all');

 store = inject(EcommerceStore);

  categories = signal<string[]>(['all','Helmets','Jackets','Gloves','Boots','Maintenance','Electronics','Luggage','Guards','Rain Gear','Accessories'])

  constructor(){
    // run every time the input signal changes
    effect(() => {
      // this.category() will re-run the effect when it changes
      this.store.setCategory(this.category());
    });
  }
}
