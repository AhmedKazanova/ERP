import {HttpErrorResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { LanguageService } from "../language/language.service";
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private _LanguageService:LanguageService , private _MatSnackBar:MatSnackBar){
    

  }




  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        // alert('Server Side Error:' + errorResponse);
        this._MatSnackBar.open('Server Side Error',``)
    } else  {
      this._MatSnackBar.open('Client Side Error',``)
    }
    return  throwError(() => {
      const error = (`please refresh the website again, maybe there are problems with the server`);
      return error;
    });
  }

  
  // الرسائل
  openSnackBar(message: string, action: string) {
    this._MatSnackBar.open(message, action, { duration: 1500 });
  }
  ///////////////////////////////////////////



}
