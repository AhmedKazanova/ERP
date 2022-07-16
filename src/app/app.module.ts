import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InterceptorService } from './service/interceptor/interceptor.service';
import { TokenInterceptorService } from './service/interceptor/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule , TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MatProgressBarModule} from '@angular/material/progress-bar'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps:[HttpClient]
      }
  })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}
