import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Articulo } from '../../../services/articulos/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  actualizacionCarrito: Subject<boolean> = new Subject();

  constructor() { }

  agregarArticulo(articulo: Articulo) {
    let carritoStorage: {cantidad: number, articulo: Articulo}[] = JSON.parse(localStorage.getItem('carrito') || '[]');
    let articuloEnCarrito: boolean = false;
    carritoStorage.forEach(item => {
      if(item.articulo._id === articulo._id){
        item.cantidad++;
        articuloEnCarrito = true;
      }
    })
    if(!articuloEnCarrito){
      carritoStorage.push({cantidad: 1, articulo: articulo})
    }
    localStorage.setItem('carrito', JSON.stringify(carritoStorage));
    this.actualizacionCarrito.next(true);
  }

  actualizarCarrito(articulos: Articulo[]) {
    localStorage.setItem('carrito', JSON.stringify(articulos));
    this.actualizacionCarrito.next(true);
  }

  getCarrito(){
    return JSON.parse(localStorage.getItem('carrito') || '[]');
  }

  vaciarCarrito() {
    localStorage.setItem('carrito', JSON.stringify([]));
    this.actualizacionCarrito.next(true);
  }

}
