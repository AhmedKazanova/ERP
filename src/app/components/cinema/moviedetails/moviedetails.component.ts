import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ErrorHandlerService } from 'src/app/service/error-handler/error-handler.service';
import { LanguageService } from 'src/app/service/language/language.service';
import { CinemaApiService } from '../cinemaservice/api/cinema-api.service';
import {MatSnackBar} from "@angular/material/snack-bar";



@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit, OnDestroy {
  id: any = ''
  CallingApi:Subscription = new Subscription
  ImgSrc: string = 'https://image.tmdb.org/t/p/w500';
  MovieDetail: any = {}
  HomePageMovie: any = ''
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
    private _CinemaApiService: CinemaApiService,
    private _ActivatedRoute: ActivatedRoute,
    private _LanguageService: LanguageService,
    private _MatSnackBar:MatSnackBar) { }

      // الرسائل
      openSnackBar(message: string, action: string) {
        this._MatSnackBar.open(message, action, { duration: 1500 });
      }
      ///////////////////////////////////////////


  ngOnInit(): void {

    // this.id = this._ActivatedRoute.snapshot.params['id']
    // this.CallingApi = this._CinemaApiService.GetmoveDetails(this.id).subscribe(
    //   {
    //     next: (Data:any) => {
    //       this.MovieDetail = Data
    //       this.production_companies = this.MovieDetail.production_companies[0].name
    //     },
    //     error:(error:any) => {
    //       this._ErrorHandlerService.handleError(error)
    //     }
    //   }
    //  )

    this.CallingApi = this._ActivatedRoute.data.subscribe(
      (dataresolve)=>{
        this.MovieDetail = dataresolve['dataresolve']
        this.production_companies = this.MovieDetail.production_companies[0].name
      },
      (error)=>{
        this._ErrorHandlerService.handleError(error)
      }
    )

    // الشعور بالتغير في اللغة من اجل الفالديشن
    this._LanguageService.change.subscribe((val) => {
      if (val == 'en') {
        this.lang = 'en'
        this.translate.use('en')
      } else if (val == 'ar') {
        this.lang = 'ar'
        this.translate.use('ar')
      }
    })
    ////////////////////////////////////////////////


  }

  ngOnDestroy(): void {
    this.CallingApi.unsubscribe()
  //  console.log('Movie Details Destroyed');
  }

}
