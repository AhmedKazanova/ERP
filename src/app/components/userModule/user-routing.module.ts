import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from 'src/app/shared/service/guard/guard.guard';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditeprofileComponent } from './editeprofile/editeprofile.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'',redirectTo:'settings',pathMatch:'full'},
  {path:'settings',title:'Settings' ,component:SettingsComponent ,canActivate:[GuardGuard]},
  {path:'editeprofile',title:'Edite Profile' ,component:EditeprofileComponent ,canActivate:[GuardGuard]},
  {path:'changepassword',title:'Change Password' ,component:ChangepasswordComponent ,canActivate:[GuardGuard]},
  {path:'dashboard',title:'Dashboard' ,component:DashboardComponent ,canActivate:[GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
