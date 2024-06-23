import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthStatus } from '../auth/interfaces/authstatus.enum';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  
  if(localStorage.getItem('token')){
    return true;
  }
  const router = inject(Router);
  router.navigate(['inicio']);
  return false;

  /*const authService = inject(AuthService);
  console.log(authService.authStatus())
  if(authService.authStatus() === AuthStatus.isAuthenticated) return true;

  // if(authService.authStatus() === AuthStatus.checking) return false;

  const router = inject(Router);
  router.navigate(['inicio']);
  
  return false;*/
};
