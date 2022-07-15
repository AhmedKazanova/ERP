import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditeprofileComponent } from './editeprofile/editeprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SettingsComponent } from './settings/settings.component';
import { TranslateModule , TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';





@NgModule({
  declarations: [
    EditeprofileComponent,
    ChangepasswordComponent,
    SettingsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    UserRoutingModule,
    FormsModule,
    MatSnackBarModule,
    NgChartsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps:[HttpClient]
      }
  })
  ]
})
export class UserModule { }


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}
