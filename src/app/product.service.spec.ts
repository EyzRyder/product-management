import { TestBed } from '@angular/core/testing';

import { ProductService,Produto } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a product', () => {
    const product:Produto = { nome: 'Test Product', descricao: 'Description', valor: 100, disponivel: true };
    service.add(product);
    expect(service.get().length).toBe(1);
    expect(service.get()[0].nome).toBe('Test Product');
  });

});
