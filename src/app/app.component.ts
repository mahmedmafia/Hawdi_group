import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSerice } from './public-website/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hwadi-FrontEnd';
  constructor(private authServ: AuthSerice, private router: Router) {
    if (this.authServ.isUserAuthenticated()) {
      // console.log('fucl');
      // this.authServ.login(JSON.stringify(localStorage.getItem('token')), this.authServ.getUserData())
      this.authServ.userSubject.next(this.authServ.getUserData());
    }
  }
}
