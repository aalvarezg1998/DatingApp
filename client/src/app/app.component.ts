import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  private apiUrl: string = 'https://localhost:5001/api/users';
  public title: string = 'The App Dating';
  public users: any;
  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(){
    this.http.get(this.apiUrl).subscribe({
      next: response => this.users = response,
      error: error => console.log(error)
    })
  }
}

/* interface User{
  id: number,
  userName: string
} */
