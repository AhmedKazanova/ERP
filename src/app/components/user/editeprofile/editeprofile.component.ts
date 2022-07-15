import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/service/language/language.service';


declare var $: any

@Component({
  selector: 'app-editeprofile',
  templateUrl: './editeprofile.component.html',
  styleUrls: ['./editeprofile.component.css']
})
export class EditeprofileComponent implements OnInit, OnDestroy {
  userInfo: any
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
      })
    }
  )

  constructor(
    public _MatSnackBar: MatSnackBar,
    public _Router: Router,
    public _LanguageService: LanguageService,
    public translate: TranslateService,
  ) {



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


  ngOnInit(): void {


    /// استقبال الداتا من اللوكال
    let local = localStorage.getItem('userData')
    if (local != null || local != undefined) {
      this.userInfo = JSON.parse(local)
    } else {

      // لو مفيش بيانات هيضرب ايرور مش ظاهر
    }
    ////////////////////////////

    // بايند للداتا جاهزة
    this.userFormGroup.patchValue({
      name: this.userInfo.name,
      email: this.userInfo.email,
      phone: this.userInfo.phone,
      age: this.userInfo.age,
      address: {
        country: this.userInfo.address.country,
        city: this.userInfo.address.city,
        postCode: this.userInfo.address.postCode
      }
    })
    ///////////////////////////////////////


  }


  /// اختصارات بدل ما اكتب دالة كلها
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
  //////////////////////////////////////

  // دالة رسالة الخطا
  openSnackBar(message: string, action: string) {
    this._MatSnackBar.open(message, action, { duration: 1500 });
  }
  ////////////////////////////////


  // تعديل البيانات
  update(userFormGroup: FormGroup) {

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
    } else if (userFormGroup.valid) {

      this.userInfo.name = userFormGroup.value.name
      this.userInfo.email = userFormGroup.value.email
      this.userInfo.phone = userFormGroup.value.phone
      this.userInfo.age = userFormGroup.value.age
      this.userInfo.address.country = userFormGroup.value.address.country
      this.userInfo.address.city = userFormGroup.value.address.city
      this.userInfo.address.postCode = userFormGroup.value.address.postCode

      localStorage.setItem('userData', JSON.stringify(this.userInfo))

      if (this.lang == 'ar') {
        this.openSnackBar('تم التحديث بنجاح', '')
      } else {
        this.openSnackBar('Update Success', '')
      }
      this._Router.navigate(['home'])

    }

  }

  ngOnDestroy(): void {
    //console.log('Edite Profile Destroyed')
  }

}
