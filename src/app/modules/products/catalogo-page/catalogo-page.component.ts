import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../../services/articulos/articulo.service';
import { catchError, of } from 'rxjs';
import { Articulo, ArticuloResponse } from '../../../services/articulos/articulo.interface';

@Component({
  selector: 'app-catalogo-page',
  templateUrl: './catalogo-page.component.html',
  styleUrls: ['./catalogo-page.component.scss']
})
export class CatalogoPageComponent implements OnInit {

  articulos: Articulo[] = [];

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.articuloService.getArticulos().pipe(
      catchError(err => {
        return of(err);
      })
    ).subscribe((res: ArticuloResponse) => {
      this.articulos = res.items;
    })
  }

}
