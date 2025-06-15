import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatDialogModule, MatMenuModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})


export class Header {
  private router = inject(Router);
  constructor() {}

    doLogout() {
    this.router.navigate(['/login']);
    localStorage.clear();
      //  window.location.reload();
  }

}
