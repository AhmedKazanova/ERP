import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/service/language/language.service';



export class StoreData {
  id:number = 0;
 name:string = '';
 price:number = 0;
quantity:number = 0;
  img:string = '';
 device:number = 0
}

export class Device {
  id:number = 0;
  name:string = ''
}

export class SaleDevice {
  totalSale:number = 0
  allItems:object[] = [{id:0,name:'',price:0,quantity:0,device:0,img:''}]
}



@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit , OnDestroy {
  lang: string = ''
  isSend:boolean = false
  productSelect:StoreData[] = [];  
  productList:StoreData[] = []
  device:Device[] = [ {id:0,name:'All'} , {id:1,name:'Mobile'} , {id:2,name:'TV'} , {id:3 , name:'TAPLET'}]
  dataPage:SaleDevice = { totalSale: 0  , allItems: [] }
  PurchasesItem:any[] = []

  constructor(
    private _MatSnackBar: MatSnackBar,
    private _LanguageService:LanguageService,
    private translate:TranslateService,
    private _Router:Router) {
  
    

    // كل داتا
    this.productList =  [
      {id:100 , name:'IPhone 12' , price:4250 , quantity:0 , device :1 ,  img:'https://picsum.photos/200/300'},
      {id:104 , name:'OPPO F9'  , price:6300 , quantity:0 , device :1, img:'https://picsum.photos/200/300'},
      {id:100 , name:'Sumsung a52'  , price:6730 , quantity:0 , device :1, img:'https://picsum.photos/200/300'},
      {id:99,   name:'Huawei Nova 9'  , price:9800 , quantity:0 , device :1, img:'https://picsum.photos/200/300'},
      {id:110 , name:'TV TOSHIBA'  , price:7690 , quantity:0 , device :2, img:'https://picsum.photos/200/300'},
      {id:111 , name:'TV TORNADO'  , price:6540 , quantity:0 , device :2, img:'https://picsum.photos/200/300'},
      {id:112 , name:'TV SHARP'  , price:3450 , quantity:0 , device :2, img:'https://picsum.photos/200/300'},
      {id:98 , name:'TV Sumsung'  , price:8750 , quantity:0 , device :2, img:'https://picsum.photos/200/300'},
      {id:114 , name:'TAP LENOVO'  , price:3200 , quantity:0 , device :3, img:'https://picsum.photos/200/300'},
      {id:115 , name:'TAP Huawei'  , price:4300 , quantity:0 , device :3, img:'https://picsum.photos/200/300'},
      {id:116 , name:'TAP Samsung'  , price:4320 , quantity:0 , device :3, img:'https://picsum.photos/200/300'},
      {id:116 , name:'TAP Apple'  , price:7000 , quantity:0 , device :3, img:'https://picsum.photos/200/300'}
    ] 
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // هنا علشان افلتر عليها براحتي
    this.productSelect = this.productList
    /////////////////////////////////////

   }


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
  }

    // رسالة كل خطا 
    openSnackBar(message: string, action: string) {
      this._MatSnackBar.open(message, action, { duration: 1500 });
    }
    /////////////////////////////////////////////

// دالة الفلتر والتغير في اقسام 
filterProduct(event?:any):any{
  //console.log( this.totalInvoice() )
  if(event.target.value == 0 ){
   this.productSelect = this.productList
  } else {
     this.productSelect = this.productList.filter( e => e.device == event.target.value )
  }
 }
///////////////////////////////////////////////////////

// زيادة ال preformace حسب كل تغير في array  ngfor
trackHero(index:any, StoreData:StoreData){
  return StoreData ? StoreData.id : undefined;
}
/////////////////////////////////////

  // زرار زيادة الكمية
  eventUP(i:any):any{
    let count = this.productSelect[i].quantity++
    if( 0 > count || isNaN(count) || count < -1) {
      if(this.lang = 'en'){
        this.openSnackBar('There Error Amount', '')
      } else {
        this.openSnackBar('خطا بالكمية', '')
      }
      return this.productSelect[i].quantity = 0
    }
  }
///////////////////////////////////////////////

// زرار تقليل الكمية
  eventDown(i:any):any{
  let count =  --this.productSelect[i].quantity
    if( 0 > count  || isNaN(count) || count <= -1  ) {
      if(this.lang = 'en'){
        this.openSnackBar('There Error Amount', '')
      } else {
        this.openSnackBar('خطا بالكمية', '')
      }
      return this.productSelect[i].quantity = 0
    }
  }
///////////////////////////////////////////////

// اجمالي الفاتورة كلها حسب كل تغير في العناصر
totalInvoice(){
  return this.productList.reduce(
    (price,item)=>{
      price += this.getItemTotal(item)
      return price | 0
    },0
  )
}
//////////////////////////////////////////////////

/// اجمالي كل item * amount
getItemTotal(item: StoreData) {
  return (item.quantity && item.price) ? item.price * item.quantity : 0;
}
//////////////////////////////////////////////////

/////////// لو اظهر السهم و قلل عن 0
val(e:any,i:any){
  console.log(e.target.value)
  if(e.target.value < 0 || isNaN(e.target.value) || e.target.value == ''   ){
    if(this.lang == 'en'){
      this.openSnackBar('There Error Amount', '')
    } else {
      this.openSnackBar('خطا بالكمية', '')
    }
    e.target.value = 0
    this.productSelect[i].quantity = 0
  }
}
//////////////////////////////////////////////////



Submit(){

  if( this.productList.filter( e => e.quantity != 0 ).length == 0 ){
 
   if(this.lang == 'en'){
     this.openSnackBar(' There is an error', '')
     return
   } else {
     this.openSnackBar(' هناك خطا بالعملية', '')
     return
   }
     } else {

       this.dataPage.allItems = this.productList.filter( e => e.quantity != 0 )
       this.PurchasesItem = this.dataPage.allItems
       this.dataPage.totalSale = this.totalInvoice()
       
     }

     setTimeout(() => {
      window.print()
    }, 1);
 
     
 }
 //////////////////////////////////////////////////

 additems(){
  this._Router.navigate(['shop/additems'])
 }

  ngOnDestroy(): void {
   // console.log('Home Destroyed')
  }

}
