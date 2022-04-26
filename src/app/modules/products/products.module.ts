import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoPageComponent } from './catalogo-page/catalogo-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    CatalogoPageComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
