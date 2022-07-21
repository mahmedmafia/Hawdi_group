import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transportation-service',
  templateUrl: './transportation-service.component.html',
  styleUrls: ['./transportation-service.component.scss']
})
export class TransportationServiceComponent implements OnInit {
  transportationImage = '../../../../assets/jinx.jpg';
  serviceName='Tranportation';
  requestCount=45;
  constructor() { }

  ngOnInit(): void {
  }

}
