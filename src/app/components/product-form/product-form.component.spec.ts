import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductFormComponent } from './product-form.component';
import { ProductService, Produto } from "../../product.service";

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;
  let productService: ProductService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductFormComponent,
        RouterTestingModule
      ],
      providers: [
        ProductService,
        { provide: ActivatedRoute, useValue: { snapshot: {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.productForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    const name = component.productForm.controls['nome'];
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();

    name.setValue('a');
    expect(name.hasError('minlength')).toBeTruthy();

    name.setValue('Valid Name');
    expect(name.hasError('minlength')).toBeFalsy();
  });

  it('should add product and navigate', () => {
    spyOn(productService, 'add').and.callThrough();
    spyOn(router, 'navigate');

    component.productForm.controls['nome'].setValue('Product Test');
    component.productForm.controls['descricao'].setValue('Product Description');
    component.productForm.controls['valor'].setValue(200);
    component.productForm.controls['disponivel'].setValue('true');

    component.onSubmit();

    expect(productService.add).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/produtos']);
  });
});
