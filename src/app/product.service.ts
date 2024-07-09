import { Injectable } from "@angular/core";

export interface Produto {
  nome: string;
  descricao: string;
  valor: number;
  disponivel: boolean;
}

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private produtos: Produto[] = [];

  constructor() {}

  add(produto: Produto): void {
    this.produtos.push(produto);
  }

  remove(index: number): Produto | null {
    if (index > -1 && index < this.produtos.length) {
      return this.produtos.splice(index, 1)[0];
    }
    console.error("Error: index out of bounds");
    return null;
  }

  get(): Produto[] {
    return this.produtos;
  }

  getByIndex(index: number): Produto | null {
    if (index < 0 || index >= this.produtos.length) {
      console.error("Error: index out of bounds");
      return null;
    }
    return this.produtos[index];
  }
}
