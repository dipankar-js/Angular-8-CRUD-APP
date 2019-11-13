import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessageService: FlashMessagesService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.authService
      .login(this.email, this.password)
      .then(res => {
        console.log('Logged in');
        this.flashMessageService.show('You are Logged in', {
          cssClass: 'alert-success',
          timeout: 4000
        });
        this.router.navigate(['/']);
      })
      .catch(err => {
        console.log('Logged failed');
        this.flashMessageService.show(err.message, {
          cssClass: 'alert-danger',
          timeout: 4000
        });
        this.router.navigate(['/login']);
      });
  }
}
