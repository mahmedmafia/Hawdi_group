import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BaseField } from '../../components/baseField';


@Component({
  selector: 'app-date-now',
  templateUrl: './date-now.component.html',
  styleUrls: ['./date-now.component.scss']
})
export class DateNowComponent extends BaseField implements OnInit {
  Datenow = moment.utc();
  DateOfToday = moment(new Date()).format('YYYY-MM-DD')!;
  // this.Datenow.format('YYYY-MM-DD').toString() ||
  DateName: string = '';
  @Input() maxDate=null;
  constructor() {
    super();
  }

  ngOnInit() {

  }

  updateDate(event: any) {
    if(!event.value) return;
    const d = new Date(event.value);
    const m = moment(d).add(-d.getTimezoneOffset(), 'm').toISOString();
    this.formControlRef.setValue(m);
  }
}
