import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit , OnDestroy {

  selectFile = null
  imageURL: string = '';
  imgForm:FormGroup = new FormGroup({
      img:new FormControl(null, [Validators.required])
  })
  constructor( private _HttpClient:HttpClient) { 

  }
  ngOnDestroy(): void {
   // console.log('About Destroyed')
  }

  ngOnInit(): void {

  }

//  // Image Preview
//  showPreview(event:any) {

//   const file = (event.target as HTMLInputElement).files[0];

//   this.imgForm.patchValue({
//     avatar: file
//   });
  
//   // File Preview
//   const reader = new FileReader();
//   reader.onload = () => {
//     this.imageURL = reader.result as string;
//   }
//   reader.readAsDataURL(file)
// }

  get img() {
    return this.imgForm.get('img')
  }


  send(){
    console.log(this.imgForm.value)
      // if(this.img?.value == null || this.img?.value == undefined ){
      //   alert('enter img')
      // }
   //   this._HttpClient.post(`https://us-centrall-fb-cloud-functions-demo.cloudfunctions.net/uploadFile`)
  }
}
