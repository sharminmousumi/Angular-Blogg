import { Component, OnInit } from '@angular/core';
import {LogInOutService} from '../log-in-out.service';
@Component({
  selector: 'app-logg-in',
  templateUrl: './logg-in.component.html',
  styleUrls: ['./logg-in.component.css']
})
export class LoggInComponent implements OnInit {
  loggIn:boolean=true;
  loggOut:boolean;
  loginoutMessage:string;

  loggInButton(){
    this.loggIn=false;
    this.loggOut=true;
    this.loginoutMessage = "you are Log in ";
    this.LogInOutService.authSend(true);
  }
  loggOutButton(){
    this.loggOut=false;
    this.loggIn=true;
    this.loginoutMessage = "You are log out"
    this.LogInOutService.authSend(false);
  }

  constructor(public LogInOutService:LogInOutService) { }

  ngOnInit(): void {
    this.LogInOutService.obBoolean.subscribe((data)=> {
      this.loggOut=data;});
  }

}
