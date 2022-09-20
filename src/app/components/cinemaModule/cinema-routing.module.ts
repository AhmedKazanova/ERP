import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaHomeComponent } from './cinema-home/cinema-home.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { ResolverdataService } from './cinemaservice/resolve/resolverdata.service';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { ReslovemovieService } from './cinemaservice/resolve/reslovemovie.service';
import { ReslovetvService } from './cinemaservice/resolve/reslovetv.service';
import { GuardGuard } from 'src/app/shared/service/guard/guard.guard';


const routes: Routes = [
  {path:'',redirectTo:'cinemahome/1',pathMatch:'full' },
  {path:'cinemahome/:id',title:'Cinema Home' ,component:CinemaHomeComponent ,canActivate:[GuardGuard] ,resolve:{dataresolve:ResolverdataService}},
  {path:'moviedetails/:id',title:'Movie Details' ,component:MoviedetailsComponent,canActivate:[GuardGuard],resolve:{dataresolve:ReslovemovieService}},
  {path:'tvdetails/:id',title:'TV Details' ,component:TvdetailsComponent ,canActivate:[GuardGuard] ,resolve:{dataresolve:ReslovetvService}},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CinemaRoutingModule { }
