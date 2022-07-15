import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'
import { LanguageService } from 'src/app/service/language/language.service';
import { MAT_DATE_FORMATS , MAT_DATE_LOCALE , DateAdapter } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS,} from '@angular/material-moment-adapter';
import 'moment/locale/ja';
import 'moment/locale/fr';




export class DynamicGrid {
  name: number = 0;
  amount: number = 0;
  price: number = 0;

}



@Component({
  selector: 'app-invoicedetails',
  templateUrl: './invoicedetails.component.html',
  styleUrls: ['./invoicedetails.component.css'],
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
export class InvoicedetailsComponent implements OnInit , OnDestroy {



  paramId: number = 0
  invoiceObj: any
  allInvoice: any[] = [];
  dataRow: DynamicGrid[] = [];
  newDynamic: DynamicGrid = { name: 0, amount: 0, price: 0 };
  lang: string = ''
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _Location: Location,
    private _LanguageService: LanguageService,
    private translate: TranslateService,
    private _MatSnackBar: MatSnackBar,
    private _Router: Router,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {



  }



  print(){

  //  this.updateinvoice()
    window.print()

  
   
  }



  ngOnInit(): void {

      // الشعور بالتغير في اللغة من اجل الفالديشن
      this._LanguageService.change.subscribe((val) => {
        if (val == 'en') {
          this.translate.use('en')
          this.lang = 'en'
          this._locale = 'fr';
          this._adapter.setLocale(this._locale);
        } else if (val == 'ar') {
          this.translate.use('ar')
          this.lang = 'ar'
          this._locale = 'ar';
          this._adapter.setLocale(this._locale);
        } 
      })
      ////////////////////////////////////////////////


    // id الفاتورة من url
    this.paramId = Number(this._ActivatedRoute.snapshot.paramMap.get('id'))
    //////////////////////////////////////////////////////////////////////

    //////// فلترة واختيار الفاتورة الصحيحة حسب id
    let getData = localStorage.getItem('AllInvoice')
    if (getData != null || getData != undefined) {
      this.allInvoice = JSON.parse(getData)
      this.invoiceObj = this.allInvoice.find(el => el.id == this.paramId)
      this.dataRow = this.invoiceObj?.invoice
    }
    //////////////////////////////////////////////////////////////

    // لو جي من مسار صفحة غلط او مفيش id
    if (getData == null || getData == undefined || isNaN(this.paramId) || this.invoiceObj == undefined) {
      this.openSnackBar('Not Found Invoice', '')
      this._Router.navigate(['invoice/allinvoice'])
      return
    }
    ///////////////////////////////////////////////////////////////


  }



  openSnackBar(message: string, action: string) {
    this._MatSnackBar.open(message, action, { duration: 1500 });
  }

  // اضافة سطر
  addRow() {
    this.newDynamic = { name: 0, amount: 0, price: 0 };
    this.dataRow.push(this.newDynamic);
    return true;
  }
  ///////////////////////////////////////////////////////////////////
  // حذف السطر
  deleteRow(index: any) {
    if (this.dataRow.length == 1) {
      return false;
    } else {
      this.dataRow.splice(index, 1)
      this.invoiceObj.invoice = this.dataRow
   //   console.log(this.invoiceObj.invoice)
    //  this.allInvoice.
     // localStorage.setItem('AllInvoice', JSON.stringify(afterDelete))
      return true;
    }
  }
  ////////////////////////////////////////////////////////////////////
  // توتال الفاتورة كلها
  totalInvoice() {
    return this.invoiceObj?.invoice?.reduce(
      (price: any, item: any) => {
        price += this.getItemTotal(item)
        return price | 0
      }, 0
    )
  }
  /////////////////////////////////////////////////////////////////

  // السعر في الكمية لكل عنصر
  getItemTotal(item: DynamicGrid) {
    return (item.price && item.amount) ? item.price * item.amount : 0;
  }
  /////////////////////////////////////////////////////////////

  updateinvoice() {
    let action
    let client
    let branch
    let date
    let AllName
    let AllPrice
    let AllAmount
    action = this.invoiceObj.action
    client = this.invoiceObj.client
    branch = this.invoiceObj.branch
    date = this.invoiceObj.date
    if (action == 0 || action == null || action == undefined) {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل نوع الحركة', '')
        return
      } else {
        this.openSnackBar('Choose Action Type', '')
        return
      }
    } else if (client == 0 || client == null || client == undefined) {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل اسم العميل', '')
        return
      } else {
        this.openSnackBar('Choose Client Name', '')
        return
      }
    } else if (branch == 0 || branch == null || branch == undefined) {
      if (this.lang == 'ar') {
        this.openSnackBar('اختر المخزن', '')
        return
      } else {
        this.openSnackBar('Choose Store', '')
        return
      }
    } else if (date == 0 || date == null || date == undefined) {
      if (this.lang == 'ar') {
        this.openSnackBar('اختر التاريخ', '')
        return
      } else {
        this.openSnackBar('Choose Date', '')
        return
      }
    }

    for (let i = 0; i < this.invoiceObj.invoice.length; i++) {
      AllName = this.invoiceObj.invoice[i].name
      AllPrice = this.invoiceObj.invoice[i].price
      AllAmount = this.invoiceObj.invoice[i].amount

      if (AllName == 0 || AllName == null || AllName == undefined) {
        if (this.lang == 'ar') {
          this.openSnackBar('اختر اسم المنتج', '')
          return
        } else {
          this.openSnackBar('Check Product Name', '')
          return
        }

      } else if (AllAmount == 0 || AllAmount == null || AllAmount == undefined || isNaN(AllAmount)) {
        if (this.lang == 'ar') {
          this.openSnackBar('ادخل الكمية', '')
          return
        } else {
          this.openSnackBar('Check Product Amount', '')
          return
        }

      } else if (AllPrice == 0 || AllPrice == null || AllPrice == undefined || isNaN(AllPrice)) {
        if (this.lang == 'ar') {
          this.openSnackBar('حدد سعر المنتج', '')
          return
        } else {
          this.openSnackBar('Check Product Price', '')
          return
        }
      }
    }

    this.allInvoice = this.allInvoice.filter((el => {
      if (el.id == this.invoiceObj.id) {
        el.action = this.invoiceObj.action
        el.branch = this.invoiceObj.branch
        el.client = this.invoiceObj.client
        el.date = this.invoiceObj.date
        el.totalInvoice = this.totalInvoice()
        this.dataRow = this.dataRow.map(dA => { return { ...dA, totalPriceItem: dA.price * dA.amount } })
        el.invoice = this.dataRow;
      }
      return true
    }
    ))
    this._Router.navigate(['invoice/allinvoice'])
    // رسالة الاتمام حسب اللغة
    if (this.lang == 'ar') {
      this.openSnackBar('تمت العملية بنجاح', '')
    } else {

      this.openSnackBar('Update Success', '')
    }
    /////////////////////////////////
    localStorage.setItem('AllInvoice', JSON.stringify(this.allInvoice))
  }

  goback() {
    this._Location.back()
  }

  ngOnDestroy(): void {
   // console.log('Invoice Details Destroyed');
  }


}
