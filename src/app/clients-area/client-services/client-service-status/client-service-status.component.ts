import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-service-status',
  templateUrl: './client-service-status.component.html',
  styleUrls: ['./client-service-status.component.scss']
})
export class ClientServiceStatusComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClickBack(){
    this.router.navigate(['/client/services'],{replaceUrl:true});
  }
}
