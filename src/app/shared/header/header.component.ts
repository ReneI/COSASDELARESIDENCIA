import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService, NavbarService} from '../../services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  Usuario;
   public islogin: boolean = false;
  constructor(private  router: Router, private menu: NavbarService, private login: AuthService,) { }

  ngOnInit(  ) {
    this.checkuser();
    this.Usuario = this.login.getUser();
      
  }
  salir() {
  console.log('saliendo');
      this.router.navigate(['/login']);

        this.login.logout().subscribe(data => {console.log(data);
        }, error => { console.log(error); }  );
      console.log('cerrado');
}
checkuser():void{

  if(this.login.getUser() === null){
   this.islogin = false;
} else {
this.islogin = true;
}


}
}