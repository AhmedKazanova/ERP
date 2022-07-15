import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaRoutingModule } from './cinema-routing.module';
import { CinemaHomeComponent } from './cinema-home/cinema-home.component';
import { NgbPaginationModule , NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule  , HTTP_INTERCEPTORS} from '@angular/common/http';
import { TranslateModule , TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image'; // <-- import it



@NgModule({
  declarations: [
    CinemaHomeComponent,
    MoviedetailsComponent,
    TvdetailsComponent
  ],
  imports: [
    CommonModule,
    CinemaRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    LazyLoadImageModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps:[HttpClient]
      }
  })

  ],
  providers:[{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }]
})
export class CinemaModule { }


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'../assets/i18n/','.json');
}


