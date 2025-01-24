import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IProduct } from '../../interfaces/iproduct';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit{

  @Output() filtrarProductos = new EventEmitter<any>();
  @Output() ordenarPrecio = new EventEmitter<any>();

  categorias: string[];
  productos: IProduct[];
  activo : boolean [];
  productService= inject(ProductServiceService);
  nombres: string[];



  constructor(){
    this.productos=[];
    this.categorias=[];
    this.activo=[];
    this.nombres=[];

  

  }

  ngOnInit(): void{

    this.productos= this.productService.getAllProducts()
    this.categorias=this.productService.getCategoria()
    this.activo=this.productService.getActivo()
    this.nombres=this.productService.getNombre()
  }

  getDataFilter(filterform: NgForm): void {
    
    let filtros= filterform.value
    console.log('Filtros enviados:', filtros)
    this.filtrarProductos.emit(filtros); // Emite los filtros al componente padre
    filterform.reset();
  }
  getOrdenarPrecio(orderform :NgForm): void {
    const orden = orderform.value.price; // Obtén el valor del select
    this.ordenarPrecio.emit(orden);// Emite el valor al padre
    console.log("Orden emitida desde el hijo:", orden);
    orderform.reset();
  }




}
