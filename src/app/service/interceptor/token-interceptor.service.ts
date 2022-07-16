// نحط جواها التوكين 
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';





@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }


    // ان كل ما مستخدم يروح علي راوت معين يبقي معاه توكين الهيدر ان هو ادمن او حاجة ومرة واحدة 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authService = this.injector.get(AuthService)
    const tokenReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService.getToken()} `,
      //  Authorization: 'Bearer asKJjkgJKHGjhgjhGHJgjkhJHvjHhjVjhVVJHvJHVhjVHJvJHVhvJHvkjh '
      }
    })
   return next.handle(tokenReq);
  // return next.handle(req)
  }

  
}
