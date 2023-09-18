import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseField } from '../../components/baseField';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent extends BaseField implements OnInit {
  @Input() fill = false;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  radioChanged(e: any) {
    this.onChange.emit(this.formControlRef.value);
  }

}
