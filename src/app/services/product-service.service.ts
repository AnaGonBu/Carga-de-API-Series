import { Injectable } from '@angular/core';
import { PRODUCTOS } from '../db/products.db';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  
  private arrProductos : IProduct[];
  private categorias : string [];
  private activo : boolean [];
  private nombres: string [];


  constructor() {
    
    this.arrProductos=PRODUCTOS;
    this.categorias= [];
    this.activo=[];
    this.nombres =[];
    console.log('Datos originales:', this.arrProductos);
// fetch( "https://jsonblob.com/api/1329500703332425728")
//  .then(response => response.json())
//  .then(arrProductos => {
//    console.log('Productos obtenidos:', arrProductos);
//  })
//  .catch(error => console.error('Error al obtener los productos:', error));
}
// constructor() {
//   //Obtenemos mediante el fecth los datos de la API
//   fetch("https://jsonblob.com/api/1329500703332425728")
//   .then(response => response.json())
//   .then(productos => {
//       productos.forEach((prod: any) => {
//         let producto = prod as ISerie;
//         this.arrProductos.push(producto);
//       });


  getAllProducts():IProduct[]{

    return this.arrProductos;
  }

  getByName(name: string= ''):IProduct[] | undefined{

    return this.arrProductos.filter(producto => producto.name.toLowerCase()== name);
  }

  getByDescription(desc : string):IProduct[] |undefined{

    return this.arrProductos.filter(producto => producto.description.toLowerCase().includes(desc.toLowerCase()));
  }
  getByPrice(precio: number):IProduct []{

    return this.arrProductos.filter(producto => producto.price === precio);
  }
  getByCategory(categoria:string =''):IProduct [] | undefined[]{
    
  return  this.arrProductos.filter((producto) => producto.category.toLowerCase().includes(categoria));
      
  }
  getByActive(estado:boolean):IProduct [] | undefined []{

    return this.arrProductos.filter(producto => producto.active == estado);
  }

  //Selecciono valores unicos de categoria
  getCategoria(): string[] {
    const categoriasSet = new Set<string>();
    this.arrProductos.forEach((producto) => categoriasSet.add(producto.category));
    this.categorias = Array.from(categoriasSet);
    return this.categorias;
  }
  //Selecciono valores unicos de activo
  getActivo(): boolean[] {
    const activoSet = new Set<boolean>();
    this.arrProductos.forEach((producto) => activoSet.add(producto.active));
    this.activo = Array.from(activoSet);
    return this.activo;
  }
  //selecciono valores unicos de nombre
  getNombre(): string[] {
    const excluidas = ['mujer', 'hombre', 'niño'];
    const nombresSet = new Set<string>();
    this.arrProductos.forEach((producto)=> {const palabras=  producto.name.toLowerCase().split(' ').slice(0,1).map((palabra)=>palabra.trim());
    palabras.forEach((palabra)=>{
      if(!excluidas.includes(palabra)){
        nombresSet.add(palabra)
        this.nombres=Array.from(nombresSet)
      }
    });
  });
  return this.nombres;
}
filtrarProductos(filtros: any): IProduct[] {
  console.log('Filtros en el servicio:', filtros);
  console.log(Object.keys(filtros).length)
  if (Object.keys(filtros).length === 1) {
    if (filtros.name) {
      return this.arrProductos.filter(
        (producto) => producto.name.toLowerCase() === filtros.name.toLowerCase()
      );
      console.log(this.arrProductos.filter((producto) => producto.name.toLowerCase() === filtros.nombre.toLowerCase()))
    } else if (filtros.active !== undefined) {
      return this.arrProductos.filter(
        (producto) => producto.active === filtros.active
      );
    } else if (filtros.category) {
      return this.arrProductos.filter(
        (producto) => producto.category.toLowerCase().includes(filtros.category.toLowerCase())
      );
    }
  }
  // Si no hay filtros o hay más de uno, devuelve todos los productos
  return this.arrProductos;
}
    
ordenarProductos(productos: IProduct[], orden: string): IProduct[] {

  return productos.sort((a, b) => {
    if (a.price === b.price) {
      return 0; // Si los precios son iguales, no cambiar el orden
    }
    return orden === 'asc' ? a.price - b.price : b.price - a.price;
  });
}




}
