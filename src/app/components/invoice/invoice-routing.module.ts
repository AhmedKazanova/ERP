import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from 'src/app/service/guard/guard.guard';
import { AddinvoiceComponent } from './addinvoice/addinvoice.component';
import { AllinvoiceComponent } from './allinvoice/allinvoice.component';
import { InvoicedetailsComponent } from './invoicedetails/invoicedetails.component';
import { InvoicespageComponent } from './invoicespage/invoicespage.component';



const routes: Routes = [
  {path:'',redirectTo:'invoice',pathMatch:'full'},
  {path:'invoice',title:'Invoice Page' ,component:InvoicespageComponent ,canActivate:[GuardGuard]},
  {path:'allinvoice',title:'All Invoice' ,component:AllinvoiceComponent ,canActivate:[GuardGuard]},
  {path:'invoicedetails/:id',title:'invoice Details' ,component:InvoicedetailsComponent ,canActivate:[GuardGuard]},
  {path:'addinvoice',title:'Add Invoice' ,component:AddinvoiceComponent , canActivate:[GuardGuard]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
