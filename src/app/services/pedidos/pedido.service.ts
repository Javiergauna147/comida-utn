import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../articulos/articulo.interface';
import { Domicilio } from '../usuarios/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private urlPedido: string = environment.API_BASE_ENDPOINT + '/pedido';

  constructor( private http: HttpClient ) { }

  crearPedido(body: {domocilio: Domicilio, detalle: {cantidad: number, articulo: Articulo}[]}): Observable<any> {
    return this.http.post<any>(`${this.urlPedido}/crear`, body);
  }

}
