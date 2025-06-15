import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./common/header/header";
import { Authentication } from './services/authentication';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'MyAppV2025';
  private authService = inject(Authentication);
  public authStatus: boolean;

  constructor() {
     console.log("main app component", this.authService.isAuthenticated());
     this.authStatus = this.authService.isAuthenticated();
  }
}
