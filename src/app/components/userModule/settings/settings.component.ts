/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/service/language/language.service';


declare var $:any


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit,OnDestroy {


   constructor(
    private _Router:Router ,
    private _LanguageService:LanguageService,
    public translate:TranslateService,

    ) {



  }

  ngOnInit(): void {
                  // الشعور بالتغير في اللغة من اجل الفالديشن
                  this._LanguageService.change.subscribe((val) => {
                    if (val == 'en') {
                      this.translate.use('en')
                    } else if (val == 'ar') {
                      this.translate.use('ar')
                    }
                  })
                  ////////////////////////////////////////////////
  }

    // تعديل البيانات الشخصية
    editeProfile(){
      this._Router.navigate(['settings/editeprofile'])
    }
    ///////////////////////////////////

  // تعديل الباسورد
  changePass(){
    this._Router.navigate(['settings/changepassword'])
  }
/////////////////////////////////

// لوحة التحكم

dashboard(){
  this._Router.navigate(['settings/dashboard'])
}
  ngOnDestroy(): void {
    // console.log('Settings Destroyed')
   }



}
