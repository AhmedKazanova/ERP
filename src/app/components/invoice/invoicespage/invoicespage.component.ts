import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/service/language/language.service';


@Component({
  selector: 'app-invoicespage',
  templateUrl: './invoicespage.component.html',
  styleUrls: ['./invoicespage.component.css']
})
export class InvoicespageComponent implements OnInit, OnDestroy {

  constructor(
    private _Router: Router,
    public translate: TranslateService,
    public _LanguageService: LanguageService) {


    // الشعور باللغة
    this._LanguageService.change.subscribe((val) => {
      if (val != null || val != undefined) {
        this.translate.use(val)
      }
    })
    ////////////////////////////////////////////////////////////////

  }


  ngOnInit(): void {
  }




  allInvoice() {
    this._Router.navigate(['invoice/allinvoice'])
  }

  addInvoice() {
    this._Router.navigate(['invoice/addinvoice'])
  }


  ngOnDestroy(): void {
    //console.log('Invoice Page Destroyed');
  }


}
