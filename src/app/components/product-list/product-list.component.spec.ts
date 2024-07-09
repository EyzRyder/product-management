import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductListComponent } from './product-list.component';
import { ProductService, Produto } from "../../product.service";


describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductListComponent,
        RouterTestingModule
               ],
      providers: [
        ProductService,
        { provide: ActivatedRoute, useValue: { snapshot: {} } },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get and sort products by price', () => {
    const product1: Produto = { nome: 'Product 1', descricao: 'Description', valor: 100, disponivel: true };
    const product2: Produto = { nome: 'Product 2', descricao: 'Description', valor: 50, disponivel: false };
    productService.add(product1);
    productService.add(product2);

    component.ngOnInit();

    expect(component.produtos.length).toBe(2);
    expect(component.produtos[0].valor).toBe(50);
    expect(component.produtos[1].valor).toBe(100);
  });


});
