import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { ProductService, Produto } from "../../product.service";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [CommonModule, RouterLink, DropdownComponent],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.scss",
})
export class ProductListComponent implements OnInit {
  public produtos: Produto[] = [];
  public dropdownValues: Map<string, boolean> = new Map<string, boolean>([
    ["Nome", true],
    ["Valor", true],
    ["Status", false],
    ["Descrição", false],
  ]);

  constructor(private produtoService: ProductService) {}

  ngOnInit(): void {
    this.updateProdutos();
  }

  ngDoCheck(): void {
    this.updateProdutos();
  }

  updateProdutos() {
    this.produtos = this.produtoService.get().sort((a, b) => a.valor - b.valor);
  }

  getValues(map: Map<string, boolean>) {
    return Array.from(map.entries());
  }
}
