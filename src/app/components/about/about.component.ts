import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit , OnDestroy {

  count:number = 0

  constructor( ) { 

  }
  ngOnDestroy(): void {
   // console.log('About Destroyed')
  }

  ngOnInit(): void {

  }




}
