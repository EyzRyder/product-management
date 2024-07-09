import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const routes: Routes = [
  { path: '', redirectTo:'/produtos',pathMatch:'full'},
  { path: 'produtos', component: ProductListComponent },
  { path: 'add-produto', component: ProductFormComponent },
];
