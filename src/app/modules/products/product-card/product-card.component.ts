import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../../../services/articulos/articulo.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() producto: Articulo;

  constructor() { }

  ngOnInit(): void {
  }

}
