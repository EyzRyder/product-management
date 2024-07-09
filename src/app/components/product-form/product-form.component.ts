import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService, Produto } from "../../product.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-product-form",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: "./product-form.component.html",
  styleUrl: "./product-form.component.scss",
})
export class ProductFormComponent {
  productForm: FormGroup;
  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.productForm = this.fb.group({
      nome: ["", [Validators.required, Validators.minLength(3)]],
      descricao: ["", [Validators.required, Validators.minLength(5)]],
      valor: ["", [Validators.required, Validators.min(0)]],
      disponivel: ["", [Validators.required]],
    });
  }

  get f() {
    return this.productForm.controls;
  }

  onSubmit() {
console.log(this.productForm.controls)
    if (this.productForm.invalid) {
      return;
    }
    const formValue = this.productForm.value;
    const produto: Produto = {
      nome: formValue.nome,
      valor: Number(formValue.valor),
      descricao: formValue.descricao,
      disponivel: formValue.disponivel == "true" ? true : false,
    };
    this.productService.add(produto);
    this.router.navigate(["/produtos"]);
  }

}
