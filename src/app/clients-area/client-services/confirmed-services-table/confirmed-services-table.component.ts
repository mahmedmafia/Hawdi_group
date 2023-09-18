import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseClientServiceTable } from '../BaseClientServiceTable';

@Component({
  selector: 'app-confirmed-services-table',
  templateUrl: './confirmed-services-table.component.html',
  styleUrls: ['./confirmed-services-table.component.scss']
})
export class ConfirmedServicesTableComponent extends BaseClientServiceTable implements OnInit {
  displayedColumns = [
    'No', 'Service', 'Request Time', 'Request Date', 'Details', 'Request Status'
  ];
  constructor( router: Router,  private activeRoute: ActivatedRoute) {
    super(router, activeRoute);
  }

  ngOnInit(): void {
  }
  onNavigateToStatus(id:number){
    this.router.navigate(['status/'+id],{relativeTo:this.activeRoute});
  }
}
