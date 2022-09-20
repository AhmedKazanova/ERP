/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageService } from 'src/app/shared/service/language/language.service';
import { TranslateService } from '@ngx-translate/core';


export interface User {
  name: string;
  email: string;
  phone: string;
  address: { city: string, postCode: string, country: string };
  password: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit , OnDestroy {
  lang: string = ''
  userFormGroup: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      age: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(18), Validators.max(60)]),
      address: new FormGroup({
        city: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        postCode: new FormControl(null, [Validators.required, Validators.minLength(6)]),
        country: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      }),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)])
    }


  )
  constructor(
    private _Router: Router,
    private _MatSnackBar: MatSnackBar,
    private _LanguageService:LanguageService,
    private translate: TranslateService,
    ) { }


    ngOnInit(): void {

      // لو هو لوجين رجعه لل الصفحة الرئيسية
      let userLogin = localStorage.getItem('UserLogin')
      if(userLogin != null || userLogin != undefined){
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
    /////////////////////////////////////////////////

  /// اختصارات بدل ما اكتب داله كلها
  get name() {
    return this.userFormGroup.get('name')
  }
  get email() {
    return this.userFormGroup.get('email')
  }
  get phone() {
    return this.userFormGroup.get('phone')
  }
  get age() {
    return this.userFormGroup.get('age')
  }
  get country() {
    return this.userFormGroup.get('address')?.get('country')
  }
  get city() {
    return this.userFormGroup.get('address')?.get('city')
  }
  get postCode() {
    return this.userFormGroup.get('address')?.get('postCode')
  }
  get password() {
    return this.userFormGroup.get('password')
  }
  get confirmPassword() {
    return this.userFormGroup.get('confirmPassword')
  }
  //////////////////////////////////////

  // الرسائل
  openSnackBar(message: string, action: string) {
    this._MatSnackBar.open(message, action, { duration: 1500 });
  }
  /////////////////////////////////////////////////

  // التسجيل
  Submit(userFormGroup: FormGroup) {
    // فالديشن علي كل انبوت انه ممسحش القيمة وانه دخل قيمة
    if (this.name?.value == null || this.name?.value == '') {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل الاسم', '')
        return
      } else {
        this.openSnackBar('Enter Name', '')
        return
      }
    } else if (this.email?.value == null || this.email?.value == '') {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل البريد الالكتروني', '')
        return
      } else {
        this.openSnackBar('Enter Email', '')
        return
      }
    } else if (this.phone?.value == null || this.phone?.value == '') {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل الهاتف', '')
        return
      } else {
        this.openSnackBar('Enter Phone', '')
        return
      }
    } else if (this.age?.value == null || this.age?.value == '') {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل العمر', '')
        return
      } else {
        this.openSnackBar('Enter Age', '')
        return
      }
    } else if (this.country?.value == null || this.country?.value == '') {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل الدولة', '')
        return
      } else {
        this.openSnackBar('Enter Country', '')
        return
      }
    } else if (this.city?.value == null || this.city?.value == '') {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل المدينة', '')
        return
      } else {
        this.openSnackBar('Enter City', '')
        return
      }
    } else if (this.postCode?.value == null || this.postCode?.value == '') {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل رقم البريد', '')
        return
      } else {
        this.openSnackBar('Enter PostCode', '')
        return
      }
    } else if (this.password?.value == null || this.password?.value == '') {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل كلمة المرور', '')
        return
      } else {
        this.openSnackBar('Enter Password', '')
        return
      }
    } else if (this.confirmPassword?.value == null || this.confirmPassword?.value == '') {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل كلمة مرور مرة اخري', '')
        return
      } else {
        this.openSnackBar('Enter ConfirmPassword', '')
        return
      }
    } else if (this.password?.value !== this.confirmPassword?.value) {
      if (this.lang == 'ar') {
        this.openSnackBar('كلمتا المرور غير متطابقين', '')
        return
      } else {
        this.openSnackBar('Password Not Matched', '')
        return
      }
    } else if (userFormGroup.valid) {

      localStorage.setItem('userData', JSON.stringify(userFormGroup.value))
      this._Router.navigate(['auth/login'])

        if (this.lang == 'ar') {
          this.openSnackBar('تم التسجيل بنجاح ', '')
          return
        } else {
          this.openSnackBar('Successfully Registered', '')
          return
        }

      ////////////////////////////////////////////////////////////////////////////
    }
  }




  ngOnDestroy(): void {
  //  console.log('Register Destroyed');
  }







}
