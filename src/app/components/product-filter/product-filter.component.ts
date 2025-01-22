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
  categorias: string[];
  productos: IProduct[];
  activo : boolean [];
  productService= inject(ProductServiceService);
  nombres: string[];


  @Output() filtrarProducto = new EventEmitter<any>();
  @Output() ordenarPrecio = new EventEmitter<any>();
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
    this.filtrarProducto.emit(filterform.value); // Emite los filtros al componente padre
    filterform.reset();
  }
  getOrdenarPrecio(orderform :NgForm): void {
    const orden = orderform.value.price; // Obtén el valor del select
    this.ordenarPrecio.emit(orden);// Emite el valor al padre
    console.log("Orden emitida desde el hijo:", orden);
    orderform.reset();
  }

// getDataFilter(filterform: NgForm) {
//   console.log(filterform.value)
//  let filter = filterform.value as IProduct
//   if(filter.name==''&& filter.category==''){
//       this.productService.getByDescription(filter.description)
//   }else if(filter.name==''&& filter.description==''){
//       this.productService.getByCategory(filter.category)
//   }else if(filter.category==''&& filter.description==''){
//       this.productService.getByName(filter.name)
//   }else if(filter.name !==''){
//         this.productService.getByName(filter.name)
//       }if(filter.category !==''){
//         this.productService.getByCategory
//       }if(filter.description !==''){
//         this.productService.getByDescription
//       }
//       console.log(this.productService)
//     return this.productService
//     }
    
  
 /* console.log(this.productService.getByCategory(filter.category))
  console.log(this.productService.getByName(filter.name))
  console.log(this.productService.getByDescription(filter.description))
  filterform.resetForm();
}*/

}
