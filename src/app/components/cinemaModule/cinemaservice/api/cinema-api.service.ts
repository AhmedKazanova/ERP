import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { ErrorHandlerService } from 'src/app/shared/service/error-handler/error-handler.service';




@Injectable({
   providedIn: 'root'
})

export class CinemaApiService {

   constructor(private _HttpClient: HttpClient, private _ErrorHandlerService: ErrorHandlerService) { }

   GetAll(PageNumber: number): Observable<any> {
      return this._HttpClient.get(`https://api.themoviedb.org/3/trending/all/week?api_key=f8eeaa0f08e0e19cd33afb0e48afb235&page=${PageNumber}`)
         .pipe(
            retry(2),
            catchError(this._ErrorHandlerService.handleError)
         )

   }

   GetmoveDetails(Movie_id: number): Observable<any> {
      return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${Movie_id}?api_key=f8eeaa0f08e0e19cd33afb0e48afb235&language=en-US`)
         .pipe(
            retry(2),
            catchError(this._ErrorHandlerService.handleError)
         )
   }
   GettvDetails(tv_id: number): Observable<any> {
      return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=f8eeaa0f08e0e19cd33afb0e48afb235&language=en-US`)
         .pipe(
            retry(2),
            catchError(this._ErrorHandlerService.handleError)
         )
   }


}
