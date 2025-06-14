import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Authentication {

  constructor() {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Example: Check if token exists
  }

  login(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
  }
}