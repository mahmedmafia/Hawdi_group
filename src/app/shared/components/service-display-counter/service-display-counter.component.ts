import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-display-counter',
  templateUrl: './service-display-counter.component.html',
  styleUrls: ['./service-display-counter.component.scss']
})
export class ServiceDisplayCounterComponent implements OnInit {
  @Input() serviceName:null |string = null;
  @Input() countNumber=0;
  constructor() { }

  ngOnInit(): void {
  }

}
