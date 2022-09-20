import { Component, OnDestroy, OnInit } from '@angular/core';

declare var $: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  textOne: string = "Welcome I'm Glad That You Are Visiting MyWeb Hope To Help You Grow Your Business"
  textTwo: string = "Wish You An Enjoyable Experience"
  html: string = ''
  html2: string = ''
  text1: any
  text2: any
  constructor() {

  }

  ngOnInit(): void {



    setTimeout(() => {
      $('#intro').css('zIndex', 3).css({ position: 'absolute' })
      $('#intro-loop').css('zIndex', 5).css({ position: 'relative' })
    }, 6100);



    /// texOne 1
    let count = 0
    this.text1 = setInterval(() => {
      this.html += this.textOne[count]
      $('#textOne').html(this.html)
      count++
      if (count == this.textOne.length) {
        clearInterval(this.text1)
        // textTwo
        // علشان تضمن ان الاول خلص
        let count2 = 0
        this.text2 = setInterval(() => {
          this.html2 += this.textTwo[count2]
          $('#textTwo').html(this.html2)
          count2++
          if (count2 == this.textTwo.length) {
            clearInterval(this.text2)
          }
        }, 100)
        /////////////////////////////////////////
      }
    }, 100)
    ////////////////////////////////////////////////////







  }


  

  ngOnDestroy(): void {
    clearInterval(this.text1)
    clearInterval(this.text2)
  //  console.log('Home Destroyed');
  }



}
