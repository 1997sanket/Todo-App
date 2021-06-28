import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'root';
  password = '';
  invalidLogin = false;

  //Dependency injected in constructor can be used as an instance member
  constructor(private router : Router,
              private hardcodedAuthenticationService : HardcodedAuthenticationService,
              private basicAuthService : BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);  //Navigate to Welcome page
    } else this.invalidLogin = true;
  }


  handleBasicAuthLogin() {
    this.basicAuthService.basicAuthenticate(this.username, this.password). subscribe(
      data => {
        console.log(data);
        this.invalidLogin = false;
        this.router.navigate(['welcome', this.username]);  //Navigate to Welcome page
      },

      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }


  handleJWTAuthLogin() {

    this.basicAuthService.basicJWTAuthenticate(this.username, this.password). subscribe(
      data => {
        console.log(data);
        this.invalidLogin = false;
        this.router.navigate(['welcome', this.username]);  //Navigate to Welcome page
      },

      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }

}