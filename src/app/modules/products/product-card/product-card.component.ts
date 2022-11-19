import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../../../services/articulos/articulo.interface';
import { CarritoComprasService } from '../carrito-compras-page/carrito-compras.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() articulo: Articulo;

  constructor( private carritoComprasService: CarritoComprasService ) { }

  ngOnInit(): void {
  }

  agregarProductoAlCarrito(){
    this.carritoComprasService.agregarArticulo(this.articulo);
  }

}
