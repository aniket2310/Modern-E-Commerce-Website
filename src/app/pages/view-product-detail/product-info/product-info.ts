import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../../models/product';
import { TitleCasePipe } from '@angular/common';
import { StockStatus } from "../stock-status/stock-status";
import { QtySelector } from "../../../components/qty-selector/qty-selector";
import { MatButton, MatIconButton } from "@angular/material/button";
import { EcommerceStore } from '../../../ecommerce-store';
import { MatIcon } from '@angular/material/icon';
import { ToggleWishlistButton } from "../../../components/toggle-wishlist-button/toggle-wishlist-button";
import { StarRating } from "../../../components/star-rating/star-rating";

@Component({
  selector: 'app-product-info',
  imports: [TitleCasePipe, StockStatus, QtySelector, MatButton, MatIcon, ToggleWishlistButton, MatIconButton, StarRating, ],
  templateUrl: './product-info.html',
  styleUrl: './product-info.scss',
})
export class ProductInfo {

  product =input.required<Product>();
  store = inject(EcommerceStore);
  quantity = signal(1);
}
