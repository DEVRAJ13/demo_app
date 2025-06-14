import { Component, inject } from '@angular/core';
import { Authentication } from '../../services/authentication'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private authService = inject(Authentication);
  private router = inject(Router);


  login() {
    this.authService.login('dummy-token'); // Normally, get this from an API
    this.router.navigate(['/home']);
  }

}
