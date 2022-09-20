/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageService } from 'src/app/shared/service/language/language.service';
import { TranslateService } from '@ngx-translate/core';



export class UserInfo {
  email: string = '';
  password: string = ''
  name: string = ''

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  userInfo: UserInfo = { email: '', password: '', name: '' }
  lang: string = ''

  userFormGrouplogin: FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)])
    }
  )


  constructor(
    public _Router: Router,
    public _MatSnackBar: MatSnackBar,
    private _LanguageService: LanguageService,
    private translate: TranslateService,

  ) { }

  ngOnInit(): void {

    //  التحقق من داتا اللي سجل بيها
    let getUserData = localStorage.getItem('userData')
    if (getUserData != null || getUserData != undefined) {
      this.userInfo = JSON.parse(getUserData)
    }
    //////////////////////////////////////////////////

    // لو هو لوجين رجعه للصفحة الرئيسية
    let userLogin = localStorage.getItem('UserLogin')
    if (userLogin != null || userLogin != undefined) {
      this._Router.navigate(['home'])
    }
    ///////////////////////////////////////////////

    // معرفة اللغة للفالديشن
    this._LanguageService.change.subscribe((val) => {
      if (val == 'en') {
        this.lang = 'en'
        this.translate.use('en')
      } else if (val == 'ar') {
        this.lang = 'ar'
        this.translate.use('ar')
      }
    })
    ////////////////////////////////////////

  }

  // الرسائل
  openSnackBar(message: string, action: string) {
    this._MatSnackBar.open(message, action, { duration: 1500 });
  }
  ///////////////////////////////////////////



  // اختصارات بدل مكتب الداله كلها
  get email() {
    return this.userFormGrouplogin.get('email')
  }
  get password() {
    return this.userFormGrouplogin.get('password')
  }
  ///////////////////////////////////////////////

  /// تسجيل الدخول
  login(userFormGrouplogin: FormGroup) {
    // فالديشن لو مدخل حاجة
    if (this.email?.value == null || this.email?.value == '') {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل البريد الالكتروني', '')
        return
      } else {
        this.openSnackBar('Enter The Email', '')
        return
      }
    } else if (this.password?.value == null || this.password?.value == '') {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل كلمة المرور', '')
        return
      } else {
        this.openSnackBar('Enter The Password', '')
        return
      }
    }
    if (this.userInfo.email?.toLowerCase() == this.email?.value.toLowerCase() && Number(this.userInfo?.password) == Number(this.password?.value) && userFormGrouplogin?.valid == true) {
      this._Router.navigate(['home'])
      localStorage.setItem('UserLogin', JSON.stringify('trueX'))

      if (this.lang == 'ar') {
        this.openSnackBar(` ${this.userInfo.name} مرحباً بك`, '')
      } else {
        this.openSnackBar(`Welcome ${this.userInfo.name}`, '')
      }

    }


  }
  ////////////////////////////////////////////////

  // الخروج من كمبوننت
  ngOnDestroy(): void {
  //  console.log('Login Destroyed')
  }
  ///////////////////////////




}
