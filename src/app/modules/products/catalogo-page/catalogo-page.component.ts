import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product-model';
import { ArticuloService } from '../../../services/articulos/articulo.service';
import { catchError, of } from 'rxjs';
import { ArticuloResponse } from '../../../services/articulos/articulo.interface';

@Component({
  selector: 'app-catalogo-page',
  templateUrl: './catalogo-page.component.html',
  styleUrls: ['./catalogo-page.component.scss']
})
export class CatalogoPageComponent implements OnInit {

  productos: Product[] = [
    {nombre: "pizza", descripcion: "sarasa asdsad asd asd sad asd asdasdsadsadasdas asdasdasdsad asd asd asd ", precio: 25.5, tiempoEstimado: 30},
    {nombre: "ensalada", descripcion: "sarasa", precio: 35.5, tiempoEstimado: 30},
    {nombre: "hamburgesa", descripcion: "sarasa", precio: 85.5, tiempoEstimado: 5},
    {nombre: "caneita", descripcion: "sarasa", precio: 65.5, tiempoEstimado: 30},
    {nombre: "pizza", descripcion: "sarasa", precio: 25.5, tiempoEstimado: 30},
    {nombre: "ensalada", descripcion: "sarasa", precio: 64.5, tiempoEstimado: 30},
    {nombre: "hamburgesa", descripcion: "sarasa", precio: 600.2, tiempoEstimado: 30},
    {nombre: "caneita", descripcion: "sarasa", precio: 325.7, tiempoEstimado: 30}
  ]

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.articuloService.getArticulos().pipe(
      catchError(err => {
        return of(err);
      })
    ).subscribe((res: ArticuloResponse) => {
      console.log(res)
    })
  }

}
