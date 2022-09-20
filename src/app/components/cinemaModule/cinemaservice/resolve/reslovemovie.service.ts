import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, EMPTY, retry ,  Observable, throwError } from 'rxjs';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler/error-handler.service';
import { CinemaApiService } from '../../cinemaservice/api/cinema-api.service';



@Injectable({
  providedIn: 'root'
})



export class ReslovemovieService {

  constructor(private _CinemaApiService:CinemaApiService , private _ErrorHandlerService:ErrorHandlerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
    const Movie_id = Number(route.paramMap.get('id'))
    return Movie_id ? this._CinemaApiService.GetmoveDetails(Movie_id).pipe(
      retry(2),
      catchError(this._ErrorHandlerService.handleError)
    ):EMPTY
}

}
