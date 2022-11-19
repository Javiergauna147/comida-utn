import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Articulo } from '../../../services/articulos/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  actualizacionCarrito: Subject<boolean> = new Subject();

  constructor() { }

  agregarArticulo(articulo: Articulo) {
    let carritoStorage: Articulo[] = JSON.parse(localStorage.getItem('carrito') || '[]');
    carritoStorage.push(articulo);
    localStorage.setItem('carrito', JSON.stringify(carritoStorage));
    this.actualizacionCarrito.next(true);
  }
}
