import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(public accountServices: AccountService, private route: Router, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  public login(){
    this.accountServices.login(this.model)
        .subscribe(resp => {
          this.route.navigateByUrl('/members');
        },error =>{
          console.log(error);
          this.toast.error(error.error);
        })
  }

  public logout()
  {
    this.accountServices.logout();
    this.route.navigateByUrl('/');
  }
  }
