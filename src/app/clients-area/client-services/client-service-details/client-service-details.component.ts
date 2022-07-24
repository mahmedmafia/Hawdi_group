import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-service-details',
  templateUrl: './client-service-details.component.html',
  styleUrls: ['./client-service-details.component.scss']
})
export class ClientServiceDetailsComponent implements OnInit {
  servicesArr=new Array(2);
  constructor() { }

  ngOnInit(): void {
  }

}
