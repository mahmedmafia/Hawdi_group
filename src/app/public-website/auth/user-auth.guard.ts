import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterModule, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthSerice } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate, CanActivateChild {
  constructor(private authServ: AuthSerice, private router: Router, private _snackBar: MatSnackBar) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.handleUserAuth();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.handleUserAuth();

  }
  handleUserAuth() {
    if (!this.authServ.isUserAuthenticated()) {
      this._snackBar.open('You are not Authenticated','',{duration:3000,horizontalPosition:'right',verticalPosition:'top'});
      this.router.navigate(['/auth/login']);
    }
    return true;
  }
}
