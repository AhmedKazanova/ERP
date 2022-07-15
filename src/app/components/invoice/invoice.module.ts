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
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    InvoicedetailsComponent,
    AllinvoiceComponent,
    AddinvoiceComponent,
    InvoicespageComponent,
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    TranslateModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
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
  return new TranslateHttpLoader(http,'../assets/i18n/','.json');
}

