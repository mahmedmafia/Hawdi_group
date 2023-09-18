import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  backGroundImage='../../../assets/images/business-handshake-on-grey-background-rwwgm2k-2ml.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
