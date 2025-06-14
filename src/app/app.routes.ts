import { Routes } from '@angular/router';
import { authenticationGuard } from './services/authentication-guard';

export const routes: Routes = [
     {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
    canActivate: [authenticationGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then(m => m.Login)
  }
];
