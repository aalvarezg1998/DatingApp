import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  apiUrl: string = 'https://localhost:5001/api';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();  

  constructor( private http: HttpClient) { }

  public login(model: any)
  {
    return this.http.post(`${this.apiUrl}/account/login`,model).pipe(
      map((resp: User) =>{
        const user = resp;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    )
  }

  public registerUser(model: any){
    return this.http.post(`${this.apiUrl}/account/register`,model).pipe(
      map((user: User)=>{
        if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user); 
        }
        return user;
      })
    );
  }

  public setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  public  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
