import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/services/articulos/articulo.interface';
import { Domicilio } from 'src/app/services/usuarios/usuario.interface';
import { UsuarioService } from '../../../services/usuarios/usuario.service';
import { PedidoService } from '../../../services/pedidos/pedido.service';
import { CarritoComprasService } from './carrito-compras.service';

@Component({
  selector: 'app-carrito-compras-page',
  templateUrl: './carrito-compras-page.component.html',
  styleUrls: ['./carrito-compras-page.component.scss']
})
export class CarritoComprasPageComponent implements OnInit {

  carritoCompra: {cantidad: number, articulo: Articulo}[];

  domicilioSelected: Domicilio;
  domicilios: Domicilio[] = this.usuarioService.obtenerUsuario().domicilios;

  constructor(private usuarioService: UsuarioService, private pedidoService: PedidoService, private carritoComprasService: CarritoComprasService) {
    this.carritoCompra = carritoComprasService.getCarrito();
  }

  ngOnInit(): void {
  }
  
  crearPedido() {
    this.pedidoService.crearPedido({domocilio: this.domicilioSelected, detalle: this.carritoCompra}).subscribe((resp: any) => {
      // this.carritoComprasService.vaciarCarrito();
    })
  }
}
