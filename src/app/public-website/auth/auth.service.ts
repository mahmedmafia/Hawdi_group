import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthSerice {
  userExample: User = { name: 'sad', phone: '012211212', email: 't@t2.com', userType: 'entity' };
  userSubject = new BehaviorSubject<User | null>(null);

  constructor(private router: Router) { }
  login(token: string, userData: User) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    this.userSubject.next(userData);
    this.router.navigate(['client/profile'], { replaceUrl: true });
  }
  register(userDate: User) {
    localStorage.setItem('registerData', JSON.stringify(userDate));
  }
  getRegisterData() {
    return JSON.parse(localStorage.getItem('registerData')!) as User | null;
  }
  isUserAuthenticated() {
    return localStorage.getItem('token') !=null;
  }
  getUserData() {
    return JSON.parse(localStorage.getItem('user')!) as User || null;
  }
  logout() {
    this.userSubject.next(null);
    localStorage.clear();
    this.router.navigate(['home'], { replaceUrl: true });
  }
}
export interface User {
  phone: string;
  name: string;
  email: string;
  userType: string;
}
