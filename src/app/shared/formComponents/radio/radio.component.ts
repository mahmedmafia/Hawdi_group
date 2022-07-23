import { Component, Input, OnInit } from '@angular/core';
import { BaseField } from '../../components/baseField';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent extends BaseField implements OnInit {
  @Input() fill=false;
  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
