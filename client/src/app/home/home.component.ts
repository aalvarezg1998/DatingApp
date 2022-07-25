import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  registerMode: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  register(){
    this.registerMode = true;
  }

  cancelarRegister(event: boolean){
    this.registerMode = event;
  }



}
