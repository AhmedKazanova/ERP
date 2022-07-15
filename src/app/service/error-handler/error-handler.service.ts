import {HttpErrorResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { LanguageService } from "../language/language.service";
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  lang:string = ''
  constructor(private _LanguageService:LanguageService , private _MatSnackBar:MatSnackBar){
    this._LanguageService.change.subscribe(
      (val)=>{
        if(val =='ar'){
          this.lang = 'ar'
        }else {
          this.lang = 'en'
        }
      }
    )
  }
  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
   //   alert('Client Side Error : ' + errorResponse.error.message);
      this.openSnackBar('Client Side Error','')
    } else  {
      this.openSnackBar('Server Side Error','')
   //   alert('Server Side Error : ' + errorResponse);
    }
   // return throwError('please refresh the website again, maybe there are problems with the server!!');
 return  throwError(() => {
    const error = (`please refresh the website again, maybe there are problems with the server`);
    this.openSnackBar('Please Refresh The Website Again','')
    return error;
  });
  }



  
  // الرسائل
  openSnackBar(message: string, action: string) {
    this._MatSnackBar.open(message, action, { duration: 1500 });
  }
  ///////////////////////////////////////////



}
