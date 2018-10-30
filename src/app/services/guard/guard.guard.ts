import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

   constructor(private auth:  AuthService, private router: Router) {


   }
  canActivate(){
    if(this.auth.getUser){
      return true;

    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}
