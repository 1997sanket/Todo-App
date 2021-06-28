import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

/*
  Remember, we also need to add Interceptor in app.module.ts providers[]
*/

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  //This method is called before sending every request to the server
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // let username = 'root';
    // let password = 'root';

    //Creating header for basicAuth
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);  //Because we have enabled Basic Spring authentication

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    //If token and username exists in session storage then only call this method
    if (basicAuthHeaderString && username) {
      //Cloning request object and adding the header
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })


    }


    //Calling the next method in request chain
    return next.handle(request);
  }
}
