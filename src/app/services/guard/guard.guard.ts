import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

   constructor(public auth:  AuthService, public router: Router) {


   }
  canActivate() {
    if(this.auth.getUser) {
      console.log('si logeado');
      return true;
    } else {
      console.log('no logeado');
      
      this.router.navigate(['/login']);
      return false;
    }

  }
}
