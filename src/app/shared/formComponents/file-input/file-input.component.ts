import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseField } from '../../components/baseField';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent extends BaseField implements OnInit {
  myFiles:any[]=[];
  @ViewChild('fileInput') fileInput!:ElementRef;
  constructor() {
    super();
  }

  ngOnInit(): void {
    for(let val of this.formControlRef.value){
      this.myFiles.push({name:val});

    }
    // this.formControlRef.setValue(null);
  }


  onFileChange(event:any) {
      this.myFiles.splice(0);
        for (var i = 0; i < event.target.files.length; i++) {
            this.myFiles.push(event.target.files[i]);
        }
  }
  deleteFile(i:number){
   this.myFiles.splice(i,1);
  }
}
