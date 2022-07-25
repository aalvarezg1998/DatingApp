import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() registerCancel = new EventEmitter();
  model: any = {};

  constructor(private accountservice: AccountService, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountservice.registerUser(this.model).subscribe( resp => {
      console.log(resp)
      this.cancel()
    }, error =>{
      console.warn(error);
      this.toast.error(error.error);
    });
  }

  cancel(){
    this.registerCancel.emit(false);
  }



}
