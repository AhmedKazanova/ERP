import {Injectable} from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import {Observable, of, throwError, timer} from "rxjs";
import {catchError, finalize, retry} from "rxjs/operators";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import { AuthService } from '../auth/auth.service';
import { ErrorHandlerService } from "../error-handler/error-handler.service";
import { LoaderService } from "../loader/loader.service";


@Injectable()


export class InterceptorService implements HttpInterceptor {


  constructor(
    private authService: AuthService,
    private router: Router,
    private _MatSnackBar: MatSnackBar,
    private _ErrorHandlerService:ErrorHandlerService,
    private _LoaderService:LoaderService
    )
{}



intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   this._LoaderService.isLoading.next(true)

   return next.handle(req).pipe(
    retry(2),
     catchError((error) => {
       this._ErrorHandlerService.handleError(error)
       this._LoaderService.isLoading.next(false)
      // this.openSnackBar(`${JSON.parse(error)}`,'')
       return of(error)
     }
   ),finalize(()=>{
    setTimeout(() => {
      this._LoaderService.isLoading.next(false)
    }, 400);
   })
     )
   
 }

    // الرسائل
    openSnackBar(message: string, action: string) {
      this._MatSnackBar.open(message, action, { duration: 1500 });
    }
    ///////////////////////////////////////////


}


