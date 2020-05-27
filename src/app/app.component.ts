import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/basicUser.model';
import { LoginService } from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;

    constructor(
        private router: Router,
        private loginService: LoginService
    ) {
        this.loginService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.loginService.logout();
        this.router.navigate(['/login']);
    }
}
