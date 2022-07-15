import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class LanguageService {
  change = new BehaviorSubject (null)
  currentLang:any

  constructor() { 
    this.changeLang()
  }

  changeLang(){
    this.currentLang = localStorage.getItem("Langue") 
   if(this.currentLang !== null && this.currentLang !== undefined ){
      this.change.next(this.currentLang)
   }

  }


}
