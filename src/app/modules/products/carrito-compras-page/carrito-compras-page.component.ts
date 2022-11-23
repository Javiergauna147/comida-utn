import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/services/articulos/articulo.interface';
import { Domicilio } from 'src/app/services/usuarios/usuario.interface';
import { UsuarioService } from '../../../services/usuarios/usuario.service';

@Component({
  selector: 'app-carrito-compras-page',
  templateUrl: './carrito-compras-page.component.html',
  styleUrls: ['./carrito-compras-page.component.scss']
})
export class CarritoComprasPageComponent implements OnInit {

  carritoCompra: {cantidad: number, articulo: Articulo}[];

  domicilioSelected: Domicilio;

  domicilios: Domicilio[] = this.usuarioService.obtenerUsuario().domicilios;

  constructor(private usuarioService: UsuarioService) {
    this.carritoCompra = JSON.parse(localStorage.getItem('carrito') || '[]')
    console.log("domicilios disponibles");
    console.log(this.domicilios);
  }

  ngOnInit(): void {
  }
  
  crearPedido() {
    console.log(this.domicilioSelected);
  }

}
