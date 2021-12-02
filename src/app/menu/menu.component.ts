import { Component, OnInit } from '@angular/core';


import { MenuService } from '../services/menu.service';
import { ResponseDataPaged } from '../models/HttpResponse/response-data-paged';
import { ResponseWithoutPagination } from '../models/HttpResponse/response-without-pagination.model';
import { Menu } from '../models/menu.model';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [];
  
  constructor(
    private menuService: MenuService,
    
    
  ) { }

  ngOnInit(): void {
    this.setPage();
  }

  setPage(){
    
    var res=this.menuService.getMenu()
    .subscribe((resp: ResponseWithoutPagination<Menu>) => {
      if (resp.data) {
       this.menus= resp.data.content;
       console.log("this.menus: ",this.menus)
      } else {
        console.log("no content");
      }
    });
  }

}
