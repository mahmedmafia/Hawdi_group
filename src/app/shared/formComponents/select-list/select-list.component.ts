import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseField } from '../../components/baseField';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent extends BaseField implements OnInit {
  selectedInput = null;
  @Input() isDefaultLabelOption: boolean = false;
  constructor() {
    super();
  }

  ngOnInit(): void {
    if (!this.isUpdate) {
      if (this.fieldObject.defaultValue) {
        this.selectedInput = this.fieldObject.defaultValue;
      }
      if (!this.isDefaultLabelOption) {
        this.selectedInput = this.fieldObject.fieldValues[0].value;
      }
    }else{
      this.selectedInput=this.formControlRef.value;
    }
  }
  @Output() selectedTypeEvent = new EventEmitter<string>();

  sendSelectedType(value: any) {
    this.selectedTypeEvent.emit(value);
  }
}
