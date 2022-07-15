import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/service/language/language.service';


declare var $: any


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit, OnDestroy {
  userInfo: any
  lang: any

  userFormGroup: FormGroup = new FormGroup(
    {
      oldpassword: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      newpassword: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    }
  )


  constructor(
    public _MatSnackBar: MatSnackBar,
    public _Router: Router,
    public translate: TranslateService,
    public _LanguageService: LanguageService,
  ) { }

  ngOnInit(): void {


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

    /////////////////////////////////////////////////
    // استقبال الداتا من اللوكال
    let local = localStorage.getItem('userData')
    if (local != null || local != undefined) {
      this.userInfo = JSON.parse(local)
    } else {

      // لو مفيش داتا هيضرب ايرور مش ظاهر 
    }
    ////////////////////////////////////



  }
  /////////////////////////////////////////////////////
  openSnackBar(message: string, action: string) {
    this._MatSnackBar.open(message, action, { duration: 1500 });
  }
  /////////////////////////////////////////////////////
  get oldpassword() {
    return this.userFormGroup.get('oldpassword')
  }
  get newpassword() {
    return this.userFormGroup.get('newpassword')
  }
  get confirmPassword() {
    return this.userFormGroup.get('confirmPassword')
  }
  //////////////////////////////////////////////////////////

  /// تغير كلمة المرور
  changePassword(userFormGroup: FormGroup) {
    if (this.oldpassword?.value == null || this.oldpassword?.value == '') {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل كلمة المرور القديمة', '')
        return
      } else {
        this.openSnackBar('Enter The Old Password', '')
        return
      }
    } else if (this.newpassword?.value == null || this.newpassword?.value == '') {
      if (this.lang == 'ar') {
        this.openSnackBar('ادخل كلمة المرور الجديدة', '')
        return
      } else {
        this.openSnackBar('Enter The New Password', '')
        return
      }
    } else if (this.confirmPassword?.value == null || this.confirmPassword?.value == '') {
      if (this.lang == 'ar') {
        this.openSnackBar(' ادخل كلمة المرور الجديدة مرة اخري', '')
        return
      } else {
        this.openSnackBar('Enter The ConfirmPassword', '')
        return
      }
    } else if (this.newpassword?.value !== this.confirmPassword?.value) {
      if (this.lang == 'ar') {
        this.openSnackBar('كلمتا المرور غير متطابقين', '')
        return
      } else {
        this.openSnackBar('Password Not Matched', '')
        return
      }
    } else {
      this.userInfo.password = userFormGroup.value.newpassword
      this.userInfo.confirmPassword = userFormGroup.value.confirmPassword
      localStorage.setItem('userData', JSON.stringify(this.userInfo))
      if (this.lang == 'ar') {
        this.openSnackBar('تم تغيير كلمة المرور بنجاح', '')
      } else {
        this.openSnackBar('Change Password Success', '')
      }
      this._Router.navigate(['home'])
    }
  }

  ngOnDestroy(): void {
  // console.log('ChangePassword Destroyed')
  }

}
