import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HelloWorldBean } from 'src/app/model/hello-world-bean';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  public getWelcomeMessage() {
    // let basicAuthHeaderString = this.createBasicAuthHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });


    return this.http.get<HelloWorldBean>('http://localhost:8080/hello' /*, { headers } */ ); //Sending header to http call
  }

  createBasicAuthHeader() {
    let username = 'root';
    let password = 'root';

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);  //Because we have enabled Basic Spring authentication

    return basicAuthHeaderString;
  }
}
