

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseClientServiceTable } from '../BaseClientServiceTable';


@Component({
  selector: 'app-requested-services-table',
  templateUrl: './requested-services-table.component.html',
  styleUrls: ['./requested-services-table.component.scss']
})
export class RequestedServicesTableComponent extends BaseClientServiceTable implements OnInit {

  displayedColumns = [
    'No', 'Service', 'Request Time', 'Request Date', 'Details', 'Edit Request', 'Delete Request', 'Confirm Request'
  ];
  // displayData: any = {
  //   'No': 'id',
  //   'Service': 'name',
  //   'Request Time': 'RequestDate',
  //   'Request Date': 'RequestDate',
  //   'Details': 'eye',
  //   'Edit Request': 'edit',
  //   'Delete Request': 'trash',
  //   'Confirm Request': 'Confirm',
  // }
  // displayDatTypes: any = {
  //   'No': 'text',
  //   'Service': 'text',
  //   'Request Time': 'time',
  //   'Request Date': 'date',
  //   'Details': 'action-icon',
  //   'Edit Request': 'action-icon',
  //   'Delete Request': 'action-icon',
  //   'Confirm Request': 'button',
  // }
  constructor( router:Router, activeRoute:ActivatedRoute) {
    super(router,activeRoute);
  }

  ngOnInit(): void {
  }

}
