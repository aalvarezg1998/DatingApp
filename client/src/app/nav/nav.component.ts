import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  model: any = {};
  currentUser$: Observable<User>;

  constructor(public accountServices: AccountService) { }

  ngOnInit(): void {
  }

  public login(){
    this.accountServices.login(this.model)
        .subscribe(resp => {
          console.log(resp);
        },error =>{
          console.log(error);
          
        })
  }

  public logout()
  {
    this.accountServices.logout();
  }
  }
