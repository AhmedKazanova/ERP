import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CinemaApiService } from '../cinemaservice/api/cinema-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/service/error-handler/error-handler.service';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/service/language/language.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoaderService } from 'src/app/service/loader/loader.service';






@Component({
  selector: 'app-cinema-home',
  templateUrl: './cinema-home.component.html',
  styleUrls: ['./cinema-home.component.css']
})
export class CinemaHomeComponent implements OnInit, OnDestroy {

  // لما النت يفصل عند المستخدم 
  isOffline!: boolean 

  @HostListener('window:offline', ['$event'])
  isWindowOffline(event: any) {
    if (event.type == 'offline') {
      if (this.lang == 'ar') {
        // this.sub.unsubscribe()
        this.openSnackBar(`تم قطع الاتصال بالانترنت`, '')
      } else {
        this.openSnackBar(`Please Check Your Network Connect`, '')
      }
    }
  }
  //////////////////////////////////////////////////////


  id: number = 1
  page: number = 1
  totalItems: number = 0; // عدد الصفحات =  2000
  CallingApi: any
  ReturnAll: any;
  sub: Subscription = new Subscription
  ImgSrc: string = 'https://image.tmdb.org/t/p/w500';
  Error: boolean = true;
  lang: string = ''



  constructor(
    private _ErrorHandlerService: ErrorHandlerService,
    private _CinemaApiService: CinemaApiService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
    private _LanguageService: LanguageService,
    private _MatSnackBar: MatSnackBar,
    public _LoaderService: LoaderService
  ) {

  }

  // الرسائل
  openSnackBar(message: string, action: string) {
    this._MatSnackBar.open(message, action, { duration: 1500 });
  }
  ///////////////////////////////////////////









  ngOnInit(): void {



    this._LanguageService.change.subscribe(
      (val) => {
        if (val == 'ar') {
          this.lang = 'ar'
        } else {
          this.lang = 'en'
        }
      }
    )



    this.sub = this._ActivatedRoute.data.subscribe(
      {
        next: (dataresolve: any) => {
          this.CallingApi = dataresolve
          this.ReturnAll = this.CallingApi.dataresolve.results
          this.totalItems = this.CallingApi.dataresolve.total_results - 19750
          this.page = this.CallingApi.dataresolve.page
        },
        error: (error: any) => {
          this._ErrorHandlerService.handleError(error)
        }
      }
    )

    // this._ActivatedRoute.paramMap.subscribe((paramId) => {
    //   this.id = Number(paramId.get('id'))
    //   this.cinemaHome(this.id)

    // })


  }


  // cinemaHome(PageNum:number){
  //   this.CallingApi = this._CinemaApiService.GetAll(PageNum).subscribe(
  //     {
  //       next:(Data:any)=>{
  //         this.ReturnAll = Data.results
  //         this.totalItems = Data.total_results - 19750
  //         this.page = Data.page
  //       },
  //      error:(error:any)=>{
  //         this._ErrorHandlerService.handleError(error)
  //       }
  //     }

  //   )
  // }


  pageChanged(event: any) {
    this._Router.navigate(['cinema/cinema/', event])

  }


  ngOnDestroy() {
    this.sub.unsubscribe()
    //  console.log('Cinema Destroyed')
  }







}
