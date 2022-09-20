import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { TranslateModule , TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoicedetailsComponent } from './invoicedetails/invoicedetails.component';
import { AllinvoiceComponent } from './allinvoice/allinvoice.component';
import { AddinvoiceComponent } from './addinvoice/addinvoice.component';
import { InvoicespageComponent } from './invoicespage/invoicespage.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';


@NgModule({
  declarations: [
    InvoicedetailsComponent,
    AllinvoiceComponent,
    AddinvoiceComponent,
    InvoicespageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    InvoiceRoutingModule,
    TranslateModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
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
export class InvoiceModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

