import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSerice, User } from 'src/app/public-website/auth/auth.service';

@Component({
  selector: 'app-header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrls: ['./header-nav-bar.component.scss']
})
export class HeaderNavBarComponent implements OnInit {
  user: User | null = null;
  isUserAuthenticated: boolean = false;
  constructor(private authServ: AuthSerice,private router:Router,private scroller: ViewportScroller) { }

  ngOnInit(): void {
    this.authServ.userSubject.subscribe(res => {
      this.user = res;
      this.isUserAuthenticated = res != null;
    })
  }
  onLogOut(){
    this.authServ.logout();
  }

  navigateToScrollHome(section:string){
    this.router.navigate(['/home', { section:section }])
  }
}
