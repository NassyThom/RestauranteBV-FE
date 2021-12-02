import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { PlatilloComponent } from './platillo/platillo.component';

const routes: Routes = [
 
   {
    path: "main",
    component: MainComponent,
   },
   {
    path: "menu",
    component: MenuComponent
   },
   {
    path: "contact",
    component: ContactComponent
   },
   {
    path: "platillo/:id",
    component: PlatilloComponent,
   },
   {
    path: "carrito/",
    component: CarritoComprasComponent,
   },
   {
    path: "**",
    component: MainComponent
   }
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
