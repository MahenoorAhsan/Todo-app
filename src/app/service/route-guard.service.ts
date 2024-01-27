import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService  {

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService, public router : Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.hardcodedAuthenticationService.isUserLoggedIn()){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
