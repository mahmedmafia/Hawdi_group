import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accomodation-service',
  templateUrl: './accomodation-service.component.html',
  styleUrls: ['./accomodation-service.component.scss']
})
export class AccomodationServiceComponent implements OnInit {
  transportationImage = '../../../../assets/images/accomodation-banner.jpg';
  img =  '../../../../assets/images/accomodation-about.jpeg'
  serviceName='accommodation';
  requestCount=15; 
  constructor() { }

  ngOnInit(): void {
  }

}
