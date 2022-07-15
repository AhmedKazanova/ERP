import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from 'src/app/service/guard/guard.guard';

import { BuyComponent } from './buy/buy.component';
import { ItemsshopComponent } from './itemsshop/itemsshop.component';

const routes: Routes = [
  {path:'',redirectTo:'shop',pathMatch:'full'},
  {path:'shop',title:'Shop' ,component:BuyComponent , canActivate:[GuardGuard]},
  {path:'additems',title:'Add Items' ,component:ItemsshopComponent ,canActivate:[GuardGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
