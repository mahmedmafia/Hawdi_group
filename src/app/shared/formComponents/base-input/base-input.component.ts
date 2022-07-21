import { Component, OnInit } from '@angular/core';
import { BaseField } from '../../components/baseField';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss']
})
export class BaseInputComponent extends BaseField implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
