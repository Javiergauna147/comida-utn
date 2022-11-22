import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/services/articulos/articulo.interface';

@Component({
  selector: 'app-carrito-compras-page',
  templateUrl: './carrito-compras-page.component.html',
  styleUrls: ['./carrito-compras-page.component.scss']
})
export class CarritoComprasPageComponent implements OnInit {

  carritoCompra: {cantidad: number, articulo: Articulo}[];

  constructor() {
    this.carritoCompra = JSON.parse(localStorage.getItem('carrito') || '[]')
  }
  ngOnInit(): void {
  }

}
