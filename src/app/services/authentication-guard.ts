import { CanActivateFn, Router } from '@angular/router';
import { Authentication } from '../services/authentication';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = (route, state) => {
 let authService = inject(Authentication);
  let router = inject(Router);
  // Check if the user is authenticated
  console.log(authService.isAuthenticated())
  if (authService.isAuthenticated()) {
    return true; // User is authenticated, allow access
  } else {
    // User is not authenticated, redirect to the home page or another route
    router.navigate(['/login']); // Adjust the route as needed
    return false;
  }
};
