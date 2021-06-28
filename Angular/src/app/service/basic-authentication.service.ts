import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }

  basicAuthenticate(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })

    return this.http.get<BaiscAuthenticateBean>(`http://localhost:8080/basicAuth`,
      {headers}).pipe(
        map(
          data => { //If successful response store username in session and return the data back to the subscriber
            sessionStorage.setItem('authenticatedUser', username);  //setting username in session storage
            sessionStorage.setItem('token', basicAuthHeaderString); //setting basicAuthToken in session storage
            return data;
          }
        )
      );
  }

  basicJWTAuthenticate(username, password) {


    return this.http.post<any>(`http://localhost:8080/authenticate`,
      {username, password}).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticatedUser', username);  
            sessionStorage.setItem('token', `Bearer ${data.token}`); 
            return data;
          }
        )
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }


}


export class BaiscAuthenticateBean {

  constructor(message : string){}
}