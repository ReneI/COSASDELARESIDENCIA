import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService, NavbarService} from '../../services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private  router: Router, private menu: NavbarService, private login: AuthService) { }

  ngOnInit() {
  }
      salir(): void {
        // this.router.navigate(['/login']);

        this.login.logout().subscribe(data => {console.log(data);
        }, error => { console.log(error);} );
      console.log('cerrado');
}

}
