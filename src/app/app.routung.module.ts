import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(module => module.UsersModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./modules/products/products.module').then(module => module.ProductsModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }