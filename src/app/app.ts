import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGridComponent } from './components/product-grid/product-grid.component';

@Component({
  selector: 'app-root',
  imports: [ProductGridComponent, CommonModule],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('Uncommon Goods Project');
}
