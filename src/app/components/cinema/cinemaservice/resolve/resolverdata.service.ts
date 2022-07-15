import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, EMPTY, retry ,  Observable, throwError } from 'rxjs';
import { ErrorHandlerService } from 'src/app/service/error-handler/error-handler.service';
import { CinemaApiService } from '../../cinemaservice/api/cinema-api.service';


@Injectable({
  providedIn: 'root'
})


export class ResolverdataService  implements Resolve<any> {
  PageNumber:any
  
  constructor(private _CinemaApiService:CinemaApiService , private _ErrorHandlerService:ErrorHandlerService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
      const PageNumber = Number(route.paramMap.get('id'))
      return PageNumber ? this._CinemaApiService.GetAll(PageNumber).pipe(
        retry(2),
        catchError(this._ErrorHandlerService.handleError)
      ):EMPTY
  }
  

}
