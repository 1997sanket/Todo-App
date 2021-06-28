import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HelloWorldBean } from 'src/app/model/hello-world-bean';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http : HttpClient) { }

  public getWelcomeMessage() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello');
  }
}
