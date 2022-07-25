import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-serivce',
  templateUrl: './about-serivce.component.html',
  styleUrls: ['./about-serivce.component.scss'],
})
export class AboutSerivceComponent implements OnInit {
  @Input() imgAbout = '';

  constructor() {}

  ngOnInit(): void {}
}
