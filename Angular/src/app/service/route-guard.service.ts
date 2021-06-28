import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardcodedAuthenticationService : HardcodedAuthenticationService,
              private router : Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

      if(this.hardcodedAuthenticationService.isUserLoggedIn()) return true; 

      else {
        
        console.log('in route guard')
        this.router.navigate(['login']);  //if user is not logged in and he tries to access a forbidden url, then redirect him to login page
        return false;
        
      };
  }
}
