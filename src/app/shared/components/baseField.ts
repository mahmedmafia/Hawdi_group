import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  template: ''
})

export abstract class BaseField {
  @Input() fieldObject: any;
  @Input() formControlRef!: FormControl;
  @Input() fieldErrors: any;
  @Input() fieldErrorName: any;
  @Input() isUpdate: any;
  @Input() showIcon: any;
  @Input() toolTipMsg: any;
  @Input() readonly: any;
}
