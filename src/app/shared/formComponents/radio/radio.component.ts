import { Component, OnInit } from '@angular/core';
import { BaseField } from '../../components/baseField';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent extends BaseField implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
