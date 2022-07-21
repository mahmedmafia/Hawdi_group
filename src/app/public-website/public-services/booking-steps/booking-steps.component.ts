import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-steps',
  templateUrl: './booking-steps.component.html',
  styleUrls: ['./booking-steps.component.scss']
})
export class BookingStepsComponent implements OnInit {
  fakeStepsArr=new Array(5);
  stepsLength:number|null=null;
  constructor() { }

  ngOnInit(): void {
    this.stepsLength=this.fakeStepsArr.length;
  }

}
