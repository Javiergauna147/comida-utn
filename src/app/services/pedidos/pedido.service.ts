import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private urlPedido: string = environment.API_BASE_ENDPOINT + '/pedido';

  constructor( private http: HttpClient ) { }

  crearPedido() {


  }

}
