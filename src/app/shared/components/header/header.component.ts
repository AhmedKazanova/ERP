import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'
import { AuthService } from '../../service/auth/auth.service';
import { LanguageService } from '../../service/language/language.service';
import { LoaderService } from '../../service/loader/loader.service';

declare var $:any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lang: boolean = true
  currentLang: string = localStorage.getItem("Langue") || 'en'
  isLogin: boolean = false
  openmenu: boolean = false


  constructor(
    private _Router: Router,
    private translate: TranslateService,
    private _LanguageService: LanguageService,
    private _AuthService: AuthService,
    public _LoaderService:LoaderService
  ) { }


  ngOnInit(): void {


    /// مارجين للسيكشن الرئيسي علشان يبقي تحت ناف بار
    let paddingTop = $('#headerX').outerHeight(true) - 20
    $('#MainX').animate({ paddingTop: `${paddingTop}px` }, 1);
    ////////////////////////////////////////////////////

    // اخر لغة كان مستخدم شغال بيها متخزنة في اللوكال
    this.translate.use(this.currentLang)
    /////////////////////////////////////////////////

    // الاقسام حسب اللوجين
    this._AuthService.currentUser.subscribe(
      (data) => {
        if (data == null || data == undefined) {
          this.isLogin = true
        } else {
          this.isLogin = true
        }
      }
    )
    ///////////////////////////////////////////////////


    /// لوجيك علشان زرار يفهم هو عملية الجية اية
    if (this.currentLang == 'en') {
      this.lang = false
      $('.direction').removeClass('RTL').addClass('LTR')
      $('#Langue').html('AR')
      $('html').attr('lang','en')
    } else if (this.currentLang == 'ar') {
      this.lang = true
      $('html').attr('lang','ar')
      $('.direction').removeClass('LTR').addClass('RTL')
      $('#Langue').html('EN')
    }
    ///////////////////////////////////////////////////////



  }


  /// داله تغير اللغة وتاثيرها علي كل البروجيكت
  ChangeLang() {
    if (this.lang == true) {
      localStorage.setItem('Langue', 'en')
      $('.direction').removeClass('RTL').addClass('LTR')
      this.translate.use('en')
      $('#Langue').html('AR')
      $('html').attr('lang','en')
    } else {
      localStorage.setItem('Langue', 'ar')
      $('.direction').removeClass('LTR').addClass('RTL')
      this.translate.use('ar')
      $('html').attr('lang','ar')
      $('#Langue').html('EN')
    }
    // تبديل متغير اللغة
    this.lang = !this.lang

    // تشغل دالة لللي بتجيب لغة من لوكال
    this._LanguageService.changeLang()
  }
  /// فتح المنيو بار
  menuBar() {

    this.openmenu = !this.openmenu

    if (this.openmenu == true) {
      $('#navbarX').addClass('active')
      $('#menu-btn').removeClass('fa-bars').addClass('fa-times')
    } else {
      $('#menu-btn').removeClass('fa-times').addClass('fa-bars')
      $('#navbarX').removeClass('active')
    }

  }
  //////////////////////////////////////////////////////

  // اغلاقة منيو بار
  closeMenu() {
    $('#menu-btn').removeClass('fa-times').addClass('fa-bars')
    $('#navbarX').removeClass('active')
    this.openmenu = false
  }
  ////////////////////////////////

  // تسجيل الخروج
  logout() {
    localStorage.removeItem('UserLogin')
    this._AuthService.currentUser.next(null)
    this._Router.navigate(['auth/login'])
  }
  //////////////////////////////////////////

}
