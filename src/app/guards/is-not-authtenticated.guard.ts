import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthStatus } from '../auth/interfaces/authstatus.enum';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router)
  if(localStorage.getItem('token')){
    router.navigate(['user']);
    return false;
  }
  

  return true;

  /*const authService = inject(AuthService);
  const router =  inject(Router)

  if(authService.authStatus() === AuthStatus.isAuthenticated) {
    router.navigate(['user'])
  }
  
  return true;*/
};