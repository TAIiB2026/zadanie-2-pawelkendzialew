import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductListComponent }
];

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [DatePipe, CurrencyPipe]
})
export class ProductsModule { }