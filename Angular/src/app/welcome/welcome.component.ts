import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean } from '../model/hello-world-bean';
import { WelcomeDataService } from '../sevice/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  msg;


  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }


  getWelcomeMessage() {
    this.service.getWelcomeMessage().subscribe(
      data => this.handleSuccessfulMsg(data),
      error => this.handleError(error)
    )
  }

  handleSuccessfulMsg(data : HelloWorldBean) {
    this.msg = data.msg;
    //console.log(data);
  }

  handleError(error) {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.msg = error.error.message;
  }




}
