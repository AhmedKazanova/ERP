import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { BuyComponent } from './buy/buy.component';
import { TranslateModule , TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsshopComponent } from './itemsshop/itemsshop.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image'; // <-- import it

@NgModule({
  declarations: [
    BuyComponent,
    ItemsshopComponent,
    
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    MatTableModule,
    MatPaginatorModule,
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
export class ShopModule { }


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}
