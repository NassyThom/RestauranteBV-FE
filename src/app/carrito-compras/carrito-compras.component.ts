import { Component, Input, OnInit } from '@angular/core';
import { Platillo } from '../models/platillo.moldel';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css'],
})
export class CarritoComprasComponent implements OnInit {
  constructor() {}
  @Input() platillo?: Platillo[];
  @Input() total?: number;

  ngOnInit(): void {}
}
