import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductServiceService } from '../../services/product-service.service';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductFilterComponent } from "../product-filter/product-filter.component";
import { ProductFormComponent } from "../product-form/product-form.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, ProductFilterComponent, ProductFormComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productos: IProduct[];



  //Inyectamos servicio
  productService = inject(ProductServiceService);


  constructor(){
    this.productos=[];

  }
  //con llamada a Api, si puede ir en constructor, asincrono, con promesa, sino, aqui en OnInit
  ngOnInit(){
    
    this.productos=this.productService.getAllProducts();


  }
  eliminarProducto(producto: IProduct): void {
    this.productos = this.productos.filter((p) => p._id !== producto._id);

  }
  filtrarProductos(filtros: any): void {
    console.log('Filtros recibidos', filtros)
    this.productos = this.productService.filtrarProductos(filtros)
    console.log('Productos filtrados', this.productos)
  }
  
  ordenarProductos(orden: string): void {
    
    this.productos=this.productService.ordenarProductos(this.productos, orden);
  }

}
