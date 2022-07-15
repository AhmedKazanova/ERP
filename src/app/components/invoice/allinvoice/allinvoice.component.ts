import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/service/language/language.service';
import { MAT_DATE_FORMATS , MAT_DATE_LOCALE , DateAdapter } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS,} from '@angular/material-moment-adapter';
import 'moment/locale/ja';
import 'moment/locale/fr';


export interface UsersData {
  id: number;
  ActionType: string;
  Client: string
  Branch: string;
  Date: string
  totalInvoice: number

}



@Component({
  selector: 'app-allinvoice',
  templateUrl: './allinvoice.component.html',
  styleUrls: ['./allinvoice.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class AllinvoiceComponent implements OnInit, OnDestroy {

  allInvoice:any[] = []
  lang: string = ''

  constructor(
    private _Router: Router,
    private dialog: MatDialog,
    private _MatSnackBar: MatSnackBar,
    private _LanguageService: LanguageService,
    private translate: TranslateService,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {

    this.getDateFormatString()
    this.french()


   }


   french() {
    this._locale = 'fr';
    this._adapter.setLocale(this._locale);
  }

  getDateFormatString(): string {
    if (this._locale === 'ja-JP') {
      return 'DD/MM/YYYY';
    } else if (this._locale === 'fr') {
      return 'DD/MM/YYYY';
    }
    return '';
  }



  // الرسائل
  openSnackBar(message: string, action: string) {
    this._MatSnackBar.open(message, action, { duration: 1500 });
  }
  /////////////////////////////////////////////

  ngOnInit(): void {

    // الشعور بالتغير في اللغة من اجل الفالديشن
    this._LanguageService.change.subscribe((val) => {
      if (val == 'en') {
        this.translate.use('en')
        this.lang = 'en'
      } else if (val == 'ar') {
        this.translate.use('ar')
        this.lang = 'ar'
      }
    })
    ////////////////////////////////////////////////


    // جلب الداتا من لوكال
    let getData = localStorage.getItem('AllInvoice')
    
    if (getData != null || getData != undefined) {
      this.allInvoice = JSON.parse(getData)
     // console.log(this.allInvoice)
    } 

    if (this.allInvoice.length <= 0 || getData == null || getData == undefined) {
  
      if (this.lang == 'en') {
        this.openSnackBar('Not Found Invoice', '')
        return
      } else {
        this.openSnackBar('لا يوجد فواتير', '')
        return
      }

    }
    /////////////////////////////////////

  }

  // open dialog
  openDialog(action: any, obj: any) {
    obj.movement = action
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: obj,
    });
    //////////////////////////////////////


    // dialog  هاااااااااام 
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Delete') {
        delete result.data.movement
        this.DeleteInvoice(result.data);
      }
    });
  }
  /////////////////////////////////////////////////////////

  // حذف الفاتورة
  DeleteInvoice(invoiceObj: any) {
    this.allInvoice = this.allInvoice.filter((value) => { return value.id != invoiceObj.id; })
    localStorage.setItem('AllInvoice', JSON.stringify(this.allInvoice))
  }
  //////////////////////////////////////////////////////////////////////////  

  addProduct() {
    this._Router.navigate(['invoice/addinvoice'])
  }

  ngOnDestroy(): void {
  //  console.log('All Invoice Destroyed');
  }


}
