import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountServices: AccountService, private toast: ToastrService){}

  canActivate(): Observable<boolean> {
    return this.accountServices.currentUser$.pipe(
      map(user =>{
        if (user) return true;
        this.toast.error('Debe logearse para acceder a esta pagina')
      })
    )
  }
  
}
