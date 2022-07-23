import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-services',
  templateUrl: './client-services.component.html',
  styleUrls: ['./client-services.component.scss']
})
export class ClientServicesComponent implements OnInit {

  services = [
    { id: 1, name: 'Transportation', RequestDate: new Date(2019, 3, 5, 12, 25, 4), status: 'pending' },
    { id: 1, name: 'Transportation', RequestDate: new Date(2019, 3, 5, 12, 25, 4), status: 'pending' },
    { id: 1, name: 'Accomdation', RequestDate: new Date(2019, 3, 5, 12, 25, 4), status: 'confirmed', confirmDate: new Date(2019, 3, 5, 12, 25, 4) },
    { id: 1, name: 'Transportation', RequestDate: new Date(2019, 3, 5, 12, 25, 4), status: 'pending' },
  ];
  requestedServices: any[] = [];
  confirmedServices: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.services.forEach((serv) => {
      switch (serv.status) {
        case 'pending':
          this.requestedServices.push(serv);
          break;
        case 'confirmed':
          this.confirmedServices.push(serv);
      }
    })
  }

}
