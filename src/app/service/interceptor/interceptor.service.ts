import {Injectable} from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import { AuthService } from '../auth/auth.service';
import { ErrorHandlerService } from "../error-handler/error-handler.service";


@Injectable()


export class InterceptorService implements HttpInterceptor {


  constructor(
    private authService: AuthService,
    private router: Router,
    private _MatSnackBar: MatSnackBar,
    private _ErrorHandlerService:ErrorHandlerService)
{}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        this._ErrorHandlerService.handleError(error)
        // if(error.status == 0 ){
        //   console.log('request faild')
        // }
        this.openSnackBar(`${JSON.parse(error)}`,'')
        return of(error)
      }
    ))
    
  }

    // الرسائل
    openSnackBar(message: string, action: string) {
      this._MatSnackBar.open(message, action, { duration: 1500 });
    }
    ///////////////////////////////////////////


}


