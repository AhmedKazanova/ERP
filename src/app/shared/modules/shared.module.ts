import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenInterceptorService } from '../service/interceptor/token-interceptor.service';
import { InterceptorService } from '../service/interceptor/interceptor.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule  } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from '../components/home/home.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { AboutComponent } from '../components/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { DialogBoxComponent } from '../components/dialog-box/dialog-box.component';


const Modules = [
  FormsModule ,
  CommonModule ,
  BrowserModule ,
  MaterialModule ,
  RouterModule ,
  HttpClientModule ,
  ReactiveFormsModule ,
  BrowserAnimationsModule ,
  TranslateModule.forRoot({
    defaultLanguage: 'en',
    loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps:[HttpClient]
    }
})
]

const Components = [
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  NotfoundComponent,
  AboutComponent,
  DialogBoxComponent
]




@NgModule({
  declarations: [ Components ],
  imports: [ Modules ],
  exports:[  Components , Modules],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},
  ],
})
export class SharedModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

