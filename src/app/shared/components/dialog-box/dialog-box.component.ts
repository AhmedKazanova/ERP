import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core'
import { LanguageService } from 'src/app/shared/service/language/language.service';



export interface UsersData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  movement?:string;
  local_data:any;
  

  constructor(
    private translate: TranslateService,
    private _LanguageService:LanguageService,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
   // console.log(data);
    this.local_data = {...data};
    this.movement = this.local_data.movement;
  }


  doAction(){
    this.dialogRef.close({ event:this.movement , data:this.local_data  });
  }

  closeDialog(){
    delete this.local_data.movement
    this.dialogRef.close({event:'Cancel'});
  }


  
  ngOnInit(): void {
          // الشعور بالتغير في اللغة من اجل الفالديشن
          this._LanguageService.change.subscribe((val) => {
            if (val == 'en') {
              this.translate.use('en')
            } else if (val == 'ar') {
              this.translate.use('ar')
            }
          })
          ////////////////////////////////////////////////
  }

  

}
