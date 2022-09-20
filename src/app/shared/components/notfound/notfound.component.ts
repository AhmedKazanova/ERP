/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit , OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
 //   console.log('NotFound Destroyed');
  }

  ngOnInit(): void {
  }

}
