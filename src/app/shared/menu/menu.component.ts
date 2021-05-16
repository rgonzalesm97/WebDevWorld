import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  get user(){
    return this.authService.user;
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.validateToke()
        .subscribe(resp => {
          console.log('ok');
        })
  }

  logout(){
    this.authService.logout();
    window.location.reload();
  }

}
