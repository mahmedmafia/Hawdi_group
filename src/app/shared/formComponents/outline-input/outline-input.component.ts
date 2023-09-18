import { Component, Input, OnInit } from '@angular/core';
import { BaseField } from '../../components/baseField';

@Component({
  selector: 'app-outline-input',
  templateUrl: './outline-input.component.html',
  styleUrls: ['./outline-input.component.scss']
})
export class OutlineInputComponent extends BaseField implements OnInit {
  @Input() placeErrorBottom:boolean=false;
  @Input() textCenter=false;
  showPassword=false;
  isInputPassword=false;
  constructor() {
    super();
  }

  ngOnInit(): void {
    if(this.textCenter){
      this.placeErrorBottom=true;
    }
    this.isInputPassword=this.fieldObject.fieldType=='password';
  }
  onEyeClick(){
    this.showPassword=!this.showPassword;
    this.fieldObject.fieldType=this.showPassword? 'text':'password';
  }
}

