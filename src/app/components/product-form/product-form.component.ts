import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProduct } from '../../interfaces/iproduct';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  categorias: string[];
  productos: IProduct[];
  activo : boolean [];
  productService = inject(ProductServiceService);
  nombres: string[];
  modelForm: FormGroup;

  constructor(){

    this.productos=[];
    this.categorias=[];
    this.activo=[];
    this.nombres=[];
    this.modelForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    category: new FormControl(this.categorias[0] || '',[Validators.required]),
    price: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    active: new FormControl(this.activo[0] || '', [Validators.required]),
    image: new FormControl(null, [Validators.required,Validators.pattern(/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/)]),
    
    },[])
  }

  ngOnInit(): void{

    this.productos= this.productService.getAllProducts()
    this.categorias=this.productService.getCategoria()
    this.activo=this.productService.getActivo()
    this.nombres=this.productService.getNombre()
  }
  checkControl(formControlName: string, validador: string): boolean | undefined {
    return this.modelForm.get(formControlName)?.hasError(validador)
    && this.modelForm.get(formControlName)?.touched
  }

  generateId(): string {
    // Genera una cadena hexadecimal de 24 caracteres
    const idRandom = Array.from({ length: 24 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join('');
  
    return idRandom;
  }
  
  
  getDataForm() {
  let producto : IProduct =this.modelForm.value as IProduct;
  let id = this.generateId()
  producto._id= id
  this.productos.unshift(producto);
//console.log(this.modelForm.value);
  this.modelForm.reset()
}


}
