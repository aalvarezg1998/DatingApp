import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {User} from './models/User'
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  
  public title: string = 'The App Dating';
  public users: any;
  
  constructor(private http: HttpClient, private accountServices: AccountService){}
  
  ngOnInit(): void {
    this.setCurrentUser();
  }

  public setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountServices.setCurrentUser(user);
  }


}


