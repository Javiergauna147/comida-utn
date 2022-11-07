import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticuloResponse } from './articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private urlArticulo: string = environment.API_BASE_ENDPOINT + '/articulo-manufacturado';

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<ArticuloResponse>{
    return this.http.get<ArticuloResponse>(`${this.urlArticulo}/get-articulos`)
  }
}
