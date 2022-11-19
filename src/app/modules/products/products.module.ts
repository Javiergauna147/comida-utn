import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoPageComponent } from './catalogo-page/catalogo-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { CarritoComprasPageComponent } from './carrito-compras-page/carrito-compras-page.component';



@NgModule({
  declarations: [
    CatalogoPageComponent,
    ProductCardComponent,
    CarritoComprasPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
