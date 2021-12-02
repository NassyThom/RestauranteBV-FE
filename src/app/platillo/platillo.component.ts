import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ResponseWithoutPagination } from '../models/HttpResponse/response-without-pagination.model';

import { Platillo } from '../models/platillo.moldel';
import { PlatilloService } from '../services/platillo.service';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css'],
})
export class PlatilloComponent implements OnInit {
  platillos: Platillo[] = [];

  selectedPlatillo?: Platillo[] = [];

  public id: string;
  public total: number = 0;

  constructor(
    private platilloService: PlatilloService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.setPage(this.id);
  }

  setPage(idmenu: string) {
    var res = this.platilloService
      .getPlatillo(idmenu)
      .subscribe((resp: ResponseWithoutPagination<Platillo>) => {
        if (resp.data) {
          this.platillos = resp.data.content;
        } else {
          console.log('no content');
        }
      });
  }
  setPlatillo(platillo: Platillo): void {
    //Validar si existe eliminarlo
    var element = this.selectedPlatillo.filter((f) => f.id === platillo.id);
    if (element.length <= 0) {
      this.selectedPlatillo.push(platillo);
    } else {
      for (var i = 0; i < this.selectedPlatillo.length; i++) {
        if (this.selectedPlatillo[i].id == platillo.id) {
          this.total = 0;
          this.selectedPlatillo.splice(i, 1);
          break;
        }
      }
    }
    this.getTotal();
  }

  getTotal() {
    if (this.selectedPlatillo.length > 0)
      for (var i = 0; i < this.selectedPlatillo.length; i++) {
        this.total += this.selectedPlatillo[i].precio;
      }
  }
}
