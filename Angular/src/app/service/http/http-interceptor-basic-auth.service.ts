import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Remember, we also need to add Interceptor in app.module.ts providers[]
*/

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  //This method is called before sending every request to the server
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let username = 'root';
    let password = 'root';

    //Creating header for basicAuth
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);  //Because we have enabled Basic Spring authentication

    //Cloning request object and adding the header
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    })

    //Calling the next method in request chain
    return next.handle(request);
  }
}
