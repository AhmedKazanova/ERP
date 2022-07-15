import { Component,  OnDestroy, OnInit , ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogBoxComponent } from '../../invoice/dialog-box/dialog-box.component';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/service/language/language.service';





export interface UsersData {
  name: string;
  id: number;
  salary:number
}
const ELEMENT_DATA: UsersData[] = [{id: 1, name: 'Ahmed Adel',salary:5000},];


@Component({
  selector: 'app-itemsshop',
  templateUrl: './itemsshop.component.html',
  styleUrls: ['./itemsshop.component.css']
})


export class ItemsshopComponent implements OnInit {
  SqlID:number = 1
  objDelete:any
  objReturn:any
  displayedColumns: string[] = ['id', 'name', 'salary' , 'action'];
  dataDelete:UsersData[] = []
  dataSource = ELEMENT_DATA;
  lang:string = ''

  @ViewChild('paginator') paginator?:MatPaginator;
  @ViewChild('TableOneSort', {static: true}) tableOneSort?: MatTable<any>;

  constructor(
    private _Router:Router ,
    public translate:TranslateService ,
     private dialog: MatDialog,
     private _LanguageService:LanguageService

     ) {


   }


     // open dialog
  openDialog(movement:any,obj:any) {
    obj.movement = movement;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '85%',
      data:obj
    });
  // dialog  هاااااااااام 
  dialogRef.afterClosed().subscribe(result => {
    if(result.event == 'Add'){
      this.addRowData(result.data);
    }else if(result.event == 'Update'){
      this.updateRowData(result.data);
    }else if(result.event == 'Delete'){
      this.DeleteRowData(result.data);
    } 
  });
  
  }
//////////////////////////////////////

// add row
addRowData(row_obj:any){
  let IDSQL = ++this.SqlID;
 this.dataSource.push({ id:IDSQL, name:row_obj.name,salary:row_obj.salary})
 this.dataSource.sort(function(a, b) {return (a.id - b.id);})
  localStorage.setItem('dataSource',JSON.stringify(this.dataSource))
  this.tableOneSort?.renderRows();
}

// update
updateRowData(row_obj:any){
  this.dataSource = this.dataSource.filter((value,key)=>{
    if(value.id == row_obj.id){
      value.name = row_obj.name;
      value.salary = row_obj.salary;
    }
    return true;
  });
  this.dataSource.sort(function(a, b) {return (a.id - b.id);})
}
///////////////////////////////////////////////////

//delete for ever
DeleteRowData(row_obj:any){
this.dataSource = this.dataSource.filter((value)=>{return value.id != row_obj.id;})
this.dataSource.sort(function(a, b) {return (a.id - b.id);})
localStorage.setItem('dataSource',JSON.stringify(this.dataSource))
}
///////////////////////////////////////////////////

ShowAllInvoice(){
  this._Router.navigate(['order/product'])
}

ngOnDestroy(): void {
 // console.log('Items Shop Destroyed')
}

  ngOnInit(): void {

              // الشعور بالتغير في اللغة من اجل الفالديشن
              this._LanguageService.change.subscribe((val) => {
                if (val == 'en') {
                  this.translate.use('en')
                  this.lang = 'en'
                } else if (val == 'ar') {
                  this.translate.use('ar')
                  this.lang = 'ar'
                }
              })
              ////////////////////////////////////////////////

              let localdataSource = localStorage.getItem('dataSource')
              if( localdataSource != null || localdataSource != undefined  ) {
                this.dataSource = JSON.parse(localdataSource  )
                this.dataSource.sort(function(a, b) {return (a.id - b.id);})
                this.SqlID = this.dataSource[this.dataSource.length - 1].id 
              } else {
                  this.dataSource = ELEMENT_DATA
                  this.SqlID = 1
              }
  }

}
