import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoPageComponent } from './catalogo-page/catalogo-page.component';
import { CarritoComprasPageComponent } from './carrito-compras-page/carrito-compras-page.component';

const routes: Routes = [
  {
    path:"",
    children: [
        { path: "catalogo", component: CatalogoPageComponent },
        { path: "carrito", component: CarritoComprasPageComponent },
        { path: "**", redirectTo: "catalogo" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
