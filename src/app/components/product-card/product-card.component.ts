import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {


  @Input() elProducto!: IProduct;
  @Output() eliminarProducto = new EventEmitter<IProduct>();

  eliminar(): void {
    this.eliminarProducto.emit(this.elProducto);
  }

}
