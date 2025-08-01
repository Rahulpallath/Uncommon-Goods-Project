import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  showAltImage = false;

  getPriceDisplay(): string {
    if (this.product.min_price === this.product.max_price) {
      return `$${this.product.min_price.toFixed(2)}`;
    } else {
      return `$${this.product.min_price.toFixed(2)} - $${this.product.max_price.toFixed(2)}`;
    }
  }
} 