/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'
import { MAT_DATE_FORMATS , MAT_DATE_LOCALE , DateAdapter } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS,} from '@angular/material-moment-adapter';
import 'moment/locale/ja';
import 'moment/locale/fr';
import { LanguageService } from 'src/app/shared/service/language/language.service';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';



declare var $: any

export class DynamicGrid {
  name: any;
  amount: any;
  price: any;
  discount: any;
  discountVal: any;
  totalPriceItem: any;
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

  @ViewChild('MyTable', {static:false}) MyTable!:ElementRef<any>

  paramId: number = 0
  invoiceObj: any
  allInvoice: any[] = [];
  dataRow: any[] = [];
  newDynamic: DynamicGrid =     {
    name: 0,
    amount: '',
    price: '',
    discount: '',
    discountVal: '',
    totalPriceItem: '',
  };
  lang: string = ''
  expensesArray:any[] = []
  resultExpenses: any = '';


  pdfBody:any[] = []


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

 async   print() {
 await  setTimeout(() => {
  window.print()
 }, 50);
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

     // console.log(this.invoiceObj )
      this.expensesArray = this.invoiceObj.expenses
      if(this.expensesArray.length == 0){
        this.expensesArray = [{ExpName:0,expenses:""}]
      } else {
        this.totalExpenses()
      }
      this.dataRow = this.invoiceObj?.invoice
    }
    //////////////////////////////////////////////////////////////

    // لو جي من مسار صفحة غلط او مفيش id
    // if (getData == null || getData == undefined || isNaN(this.paramId) || this.invoiceObj == undefined) {
    //   this.openSnackBar('Not Found Invoice', '')
    //   this._Router.navigate(['invoice/allinvoice'])
    //   return
    // }
    ///////////////////////////////////////////////////////////////


  }



  openSnackBar(message: string, action: string) {
    this._MatSnackBar.open(message, action, { duration: 1500 });
  }

  // اضافة سطر
  addRow() {
    this.newDynamic =     {
      name: 0,
      amount: '',
      price: '',
      discount: '',
      discountVal: '',
      totalPriceItem: '',
    };
    this.dataRow.push(this.newDynamic);
    return true;
  }
  ///////////////////////////////////////////////////////////////////



  maxVal(i: any ) {

//console.log(this.dataRow[i].discount)
    if (this.dataRow[i].discount > 100) {
      if (this.lang == 'ar') {
        this.openSnackBar('100 اقصي رقم', '');
        this.dataRow[i].discount = "";
        return
      } else {
        this.openSnackBar('Max Number 100', '');
        this.dataRow[i].discount= "";
        return;
      }
    } else if (this.dataRow[i].discount < 0) {
      if (this.lang == 'ar') {
        this.openSnackBar('خطا بالرقم', '');
        this.dataRow[i].discount = '';
        return;
      } else {
        this.openSnackBar('Number Wrong', '');
        this.dataRow[i].discount = '';
        return;
      }
    }
  }



  discountVal(i: any) {
    if ( this.dataRow[i].discount > 0 && this.dataRow[i].discount <= 100) {
      return (
        Number(
          this.dataRow[i].price *
            this.dataRow[i].amount *
            this.dataRow[i].discount
        ) / 100
      );
    } else {
      return '';
    }
  }
  totalRow(i: any) {
    if (
      this.dataRow[i].discount > 0 &&
      this.dataRow[i].discount <= 100
    ) {
      return (
        Number(this.dataRow[i].amount * this.dataRow[i].price) -
        Number(
          this.dataRow[i].price *
            this.dataRow[i].amount *
            this.dataRow[i].discount
        ) /
          100
      );
    } else {
      return (
        Number(this.dataRow[i].amount * this.dataRow[i].price) || ''
      );
    }
  }
  // حذف السطر
  deleteRow(index: any) {
    if (this.dataRow.length == 1) {
      return false;
    } else {
      this.dataRow.splice(index, 1)
      this.invoiceObj.invoice = this.dataRow
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

  // السعر في الكمية لكل عنصر باصيلها object
  getItemTotal(item: DynamicGrid) {
    if (item.price && item.amount && item.discount > 0) {
      return (
        item.price * item.amount -
        (item.price * item.amount * item.discount) / 100
      );
    } else {
      return item.price * item.amount;
    }
  }
  /////////////////////////////////////////////////////////////

  updateinvoice() {
    let action , discount ,client , branch , date , AllName , AllPrice ,AllAmount
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
      discount = this.invoiceObj.invoice[i].discount;
      if (AllName == 0 || AllName == null || AllName == undefined) {
        if (this.lang == 'ar') {
          this.openSnackBar('اختر اسم المنتج', '')
          return
        } else {
          this.openSnackBar('Check Product Name', '')
          return
        }

      } else if (AllAmount <= 0 || AllAmount == null || AllAmount == undefined || isNaN(AllAmount)) {
        if (this.lang == 'ar') {
          this.openSnackBar('ادخل الكمية', '')
          return
        } else {
          this.openSnackBar('Check Product Amount', '')
          return
        }

      } else if (AllPrice <= 0 || AllPrice == null || AllPrice == undefined || isNaN(AllPrice)) {
        if (this.lang == 'ar') {
          this.openSnackBar('حدد سعر المنتج', '')
          return
        } else {
          this.openSnackBar('Check Product Price', '')
          return
        }
      }else if ( discount < 0 || isNaN(discount) || discount == null) {
        if (this.lang == 'ar') {
          console.log(discount)
          this.openSnackBar('خطا بنسبة الخصم', '');
          return;
        } else {
          this.openSnackBar('Check Discount Price', '');
          return;
        }
      }
    }

    this.allInvoice = this.allInvoice.filter((el => {
      if (el.id == this.invoiceObj.id) {
        el.action = this.invoiceObj.action
        el.branch = this.invoiceObj.branch
        el.client = this.invoiceObj.client
        el.date = this.invoiceObj.date
        el.expenses= this.expensesArray.filter( el => { return el.ExpName != 0 && el.expenses != 0})
        el.totalInvoice = this.totalInvoice()
        el.invoice = this.dataRow.map((dA) => {
          return {
            ...dA,
            discountVal: (dA.amount * dA.price * dA.discount) / 100,
            totalPriceItem:
              dA.price * dA.amount - (dA.amount * dA.price * dA.discount) / 100,
          };
        });
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
   // console.log(this.invoiceObj)
   localStorage.setItem('AllInvoice', JSON.stringify(this.allInvoice))
  }

  goback() {
    this._Location.back()
  }
  add_expensesRow (){
    let expenses_obj = {ExpName:0,expenses:""}
    this.expensesArray.push(expenses_obj)
  }

  remove_expensesRow(index:any){
    if (this.expensesArray.length == 1) {
      return false;
    } else {
      this.expensesArray.splice(index, 1);
      return true;
    }
  }

  saveExpenses(){


    let name,expenses


    for(let i =0 ; i < this.expensesArray.length ; i++){

      name = this.expensesArray[i].ExpName
      expenses =this.expensesArray[i].expenses

      if(name == null || name == undefined || name == 0 ){
        if (this.lang == 'ar') {
          this.openSnackBar('ادخل  اسم المصروف', '')
          return
        } else {
          this.openSnackBar('Choose Expenses Type', '')
          return
        }
      }else if(expenses == null || expenses == undefined || expenses <= 0 || isNaN(expenses) ){
        if (this.lang == 'ar') {
          this.openSnackBar('ادخل  قيمة المصروف', '')
          return
        } else {
          this.openSnackBar('Enter Expenses', '')
          return
        }
      }
    }




   // console.log(this.expensesArray)
    this.close_Modal_Expenses()
    this.totalExpenses()

  }

  open_Modal_Expenses(){
    $('#Modal_Expenses').modal('show');
  }



  close_Modal_Expenses(){
      $('#Modal_Expenses').modal('hide');
  }

  val(event: any) {
    let val = event.target.value;
    if (val < 0) {
      event.target.value = '' ;
    }
  }

  // توتال المصاريف كلها reduce
  totalExpenses() {
    return this.expensesArray.reduce((total, item) => {
      total += item.expenses;
      this.resultExpenses = total;
      return this.resultExpenses | 0;
    }, 0);
  }
  /////////////////////////////////////////////////////////////////


  ngOnDestroy(): void {
   // console.log('Invoice Details Destroyed');
  }


}
