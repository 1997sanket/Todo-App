import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if(username === 'root' && password === 'root') {
      
      sessionStorage.setItem('authenticatedUser', username); //TO make the user logged in
      return true;
    }

    return false;
  }


  isUserLoggedIn() {

    let user = sessionStorage.getItem('authenticatedUser');

    if(user === null) return false; //not logged in 

    else return true; //logged in
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
