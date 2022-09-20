import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './shared/components/about/about.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { GuardGuard } from './shared/service/guard/guard.guard';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomeComponent, canActivate: [GuardGuard] },
  { path: 'about', title:'About',  component: AboutComponent , canActivate: [GuardGuard] },
  {
    path: 'auth',
    loadChildren: () => import('./components/authModule/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./components/userModule/user.module').then(m => m.UserModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./components/invoiceModule/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./components/shopModule/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'cinema',
    loadChildren: () => import('./components/cinemaModule/cinema.module').then(m => m.CinemaModule)
  },
  { path: '**', title: 'Not Found Page', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
