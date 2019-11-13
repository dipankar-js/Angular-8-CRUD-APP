import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;
  user: any;
  uid: any;

  constructor(
    private authService: AuthService,
    private flashMessageService: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(user => {
      console.log(user.uid);
      if (user.uid) {
        this.isLoggedIn = true;
        this.loggedInUser = user.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
  onLogout() {
    this.authService.logout();
    this.flashMessageService.show('You are Logged Out Successfully', {
      cssClass: 'alert-success',
      timeout: 4000
    });
    this.router.navigate(['/login']);
  }
}
