import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core'
import { LanguageService } from 'src/app/service/language/language.service';
import { FormControl } from '@angular/forms';
import { MAT_DATE_FORMATS , MAT_DATE_LOCALE , DateAdapter } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS,} from '@angular/material-moment-adapter';
import 'moment/locale/ja';
import 'moment/locale/fr';



declare var $: any

export class DynamicGrid {
  name: number = 0;
  amount: number = 0;
  price: number = 0;
}

export class Invoice {
  id: number = 0;
  totalInvoice: number = 0;
  action: number = 0;
  branch: number = 0;
  client: number = 0
  date: string = '';
  invoice: object[] = [{ name: 0, amount: 0, price: 0, totalPriceItem: 0 }]

}


@Component({
  selector: 'app-addinvoice',
  templateUrl: './addinvoice.component.html',
  styleUrls: ['./addinvoice.component.css'],
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
export class AddinvoiceComponent implements OnInit,OnDestroy {

  id: number = 0
  invoiceArray: DynamicGrid[] = [{ name: 0, amount: 0, price: 0 }];
  newDynamic: DynamicGrid = { name: 0, amount: 0, price: 0 };
  AllInvoice: Invoice[] = []
  pageData: any = { action: 0, client: 0, branch: 0, date:'' }
  lang: string = ''
  minDate = new Date()



  
  constructor(
    private _LanguageService:LanguageService,
    private translate: TranslateService,
    private _Router: Router,
    private _MatSnackBar: MatSnackBar,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string
    
    ) { 
   
    }





    ngOnInit(): void {

      // بداية التاريخ من اليوم
      this.pageData.date = new FormControl(new Date()).value 
      //////////////////////////////////////////////////////



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
      
            //// استقبال الداتا من اللوكال كانه باك اند هنستقبلها بالسيرفيس
            let getData = localStorage.getItem('AllInvoice')
            if (getData != null || getData != undefined) {
              this.AllInvoice = JSON.parse(getData)
                let getID = this.AllInvoice[ this.AllInvoice.length - 1]?.id
              if( getID == undefined || getID == null){
                this.id = 0
              } else {
                this.id = this.AllInvoice[ this.AllInvoice.length - 1]?.id
              }
            
            }
            //////////////////////////////////////////////////


    }


  

 // رسالة كل خطا 
  openSnackBar(message: string, action: string) {
    this._MatSnackBar.open(message, action, { duration: 1500 });
  }
  /////////////////////////////////////////////

  // اضافة سطر
  addRow() {
    this.newDynamic = { name: 0, amount: 0, price: 0 };
    this.invoiceArray.push(this.newDynamic);
    return true;
  }
  ///////////////////////////////////////////////////////////////////

    // حذف السطر استخدمت ال slice علشان مفيش id للصف 
    deleteRow(index: any) {
      if (this.invoiceArray.length == 1) {
        return false;
      } else {
        this.invoiceArray.splice(index, 1);
        return true;
      }
    }
    ////////////////////////////////////////////////////////////////////

// توتال الفاتورة كلها reduce
  totalInvoice() {
    return this.invoiceArray.reduce(
      (price, item) => {
        price += this.getItemTotal(item)
        return price | 0
      }, 0
    )
  }
  /////////////////////////////////////////////////////////////////


    // السعر في الكمية لكل عنصر باصيلها object
    getItemTotal(item: DynamicGrid) {
      return (item.price && item.amount) ? item.price * item.amount : 0;
    }
    /////////////////////////////////////////////////////////////

  // طباعة الفاتورة بعد التحقق من كل العمليات
  print() {
    let action, client, branch, date, AllName, AllPrice, AllAmount
    action = this.pageData.action
    client = this.pageData.client
    branch = this.pageData.branch
    date = this.pageData.date
    /// بيانات اللي فوق الفاتورة
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
    ///////////////////////////////////////////////////

    // بيانات الفاتورة كل row
    for (let i = 0; i < this.invoiceArray.length; i++) {
      AllName = this.invoiceArray[i].name
      AllPrice = this.invoiceArray[i].price
      AllAmount = this.invoiceArray[i].amount
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
    ///////////////////////////////////////////

    // عمليات علي array اني باستخدام map بفتح كل object واضرب كمية في السعر وادمجهم زي ما هم 
    this.invoiceArray = this.invoiceArray.map(dA => { return { ...dA, totalPriceItem: dA.price * dA.amount } });
    this.pageData.invoice = this.invoiceArray
    // بضيف id للفاتورة كانه backend
    this.pageData.id = ++this.id
    // بستدعي داله اجمالي فاتورة بترجع رقم
    this.pageData.totalInvoice = this.totalInvoice()
    // كل فاتورة هي كائن عبارة عن object بضيفة في مصفوفة 
    this.AllInvoice.push(this.pageData);
    localStorage.setItem('AllInvoice', JSON.stringify(this.AllInvoice))
   // console.log(this.AllInvoice)
    // رسالة الاتمام حسب اللغة
    if (this.lang == 'ar') {
      this.openSnackBar('تمت الاضافة بنجاح', '')
    } else {
      this.openSnackBar('Invoice Success', '')
    }
    /////////////////////////////////
    this._Router.navigate(['invoice/allinvoice'])
  }
  ///////////////////////////////////////////////







  ngOnDestroy(): void {
  //  console.log('Add Invoice Destroyed');
  }



}
