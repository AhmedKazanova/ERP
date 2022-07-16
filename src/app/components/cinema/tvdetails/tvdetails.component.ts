import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CinemaApiService } from '../cinemaservice/api/cinema-api.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ErrorHandlerService } from 'src/app/service/error-handler/error-handler.service';
import { LanguageService } from 'src/app/service/language/language.service';
import { Subscription } from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar";



@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.css']
})
export class TvdetailsComponent implements OnInit, OnDestroy {
  id: any = ''
  CallingApi: Subscription = new Subscription
  ImgSrc: string = 'https://image.tmdb.org/t/p/w500';
  TvDetail: any = {}
  TvPageMovie: any = ''
  production_companies: string = ''
  lang:string = ''

      // لما النت يفصل عند المستخدم 
      isOffline:boolean = false
      @HostListener('window:offline',['$event'])
      isWindowOffline(event:any){
        if(event.type == 'offline'){
          if(this.lang =='ar'){
         //   alert('تم قطع الاتصال بالانترنت')
            this.openSnackBar(`تم قطع الاتصال بالانترنت`,'')
    
          }else{
         //   alert('Please Check Your Network Connect')
            this.openSnackBar(`Please Check Your Network Connect`,'')
          }
        }
      }
      //////////////////////////////////////////////////////

      

  constructor(
    private _ErrorHandlerService: ErrorHandlerService,
    private translate: TranslateService,
    private _ActivatedRoute: ActivatedRoute,
    private _CinemaApiService: CinemaApiService,
    private _LanguageService: LanguageService,
    private _MatSnackBar:MatSnackBar) { }


          // الرسائل
          openSnackBar(message: string, action: string) {
            this._MatSnackBar.open(message, action, { duration: 1500 });
          }
          ///////////////////////////////////////////
          

  ngOnInit(): void {

    // this.id = this._ActivatedRoute.snapshot.params['id']
    // this.CallingApi = this._CinemaApiService.GettvDetails(this.id).subscribe(
    //   {
    //     next:(Data:any) => {

    //       this.TvDetail = Data
    //       this.production_companies = this.TvDetail.production_companies[0].name
    
    //     },
    //     error:(error:any) => {
    //       this._ErrorHandlerService.handleError(error)
    //     }
    //   }
    //   )



    this._ActivatedRoute.data.subscribe(
     {
     next: (dataresolve)=>{
        this.TvDetail = dataresolve['dataresolve']
       this.production_companies = this.TvDetail.production_companies[0].name
     },
     error: (error)=>{
      this._ErrorHandlerService.handleError(error)
    }
     }
    )


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



  ngOnDestroy(): void {
    this.CallingApi.unsubscribe()
  //  console.log('Tv Details Destroyed')
  }
}
