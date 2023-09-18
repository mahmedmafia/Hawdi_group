import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transportation-service',
  templateUrl: './transportation-service.component.html',
  styleUrls: ['./transportation-service.component.scss']
})
export class TransportationServiceComponent implements OnInit {
  transportationImage = '../../../../assets/images/transportation-banner.jpg';
  serviceName='transportation';
  requestCount=45; 
  img =  '../../../../assets/images/green-car.jpeg'

  constructor() { }

  ngOnInit(): void {
  }

}
