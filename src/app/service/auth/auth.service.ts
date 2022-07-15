import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'http://localhost:3000/user'
  private _loginUrl = 'http://localhost:3000/user'

  currentUser = new BehaviorSubject (null)


  constructor(private _HttpClient:HttpClient) {
   
   }

  registerUser(user:any):Observable<any>{

    return this._HttpClient.post<any>(this._registerUrl,user)

  }

  loginUser(user:any):Observable<any>{

    return this._HttpClient.post<any>(this._loginUrl,user)

  }


  getToken():boolean{
    let userInfo = localStorage.getItem('UserLogin')
    if(userInfo == null || userInfo == undefined){
      return false
    } else {
      this.currentUser.next(JSON.parse(userInfo))
      return true
    }
  }



}
