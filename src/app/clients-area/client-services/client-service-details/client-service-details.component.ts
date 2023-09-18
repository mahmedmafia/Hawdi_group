import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-service-details',
  templateUrl: './client-service-details.component.html',
  styleUrls: ['./client-service-details.component.scss']
})
export class ClientServiceDetailsComponent implements OnInit {
  servicesArr=new Array(2);
  @Input() pageBackLink='/client/services';
  @Input() pageTitle='My Service';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  backToServicesPage(){

    this.router.navigate([this.pageBackLink]);
  }
}
