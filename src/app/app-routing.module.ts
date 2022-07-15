import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { GuardGuard } from './service/guard/guard.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomeComponent, canActivate: [GuardGuard] },
  { path: 'about', title:'About',  component: AboutComponent , canActivate: [GuardGuard] },
  { path: 'login', title:'Login Page', component: LoginComponent },
  { path: 'register',title:'Register Page', component: RegisterComponent },
  {
    path: 'settings',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./components/invoice/invoice.module').then(m => m.InvoiceModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./components/shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'cinema',
    loadChildren: () => import('./components/cinema/cinema.module').then(m => m.CinemaModule)
  },
  { path: '**', title: 'Not Found Page', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
