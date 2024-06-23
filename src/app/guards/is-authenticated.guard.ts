import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthStatus } from '../auth/interfaces/authstatus.enum';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);

  if(authService.authStatus() === AuthStatus.isAuthenticated) return true;

  const router = inject(Router);
  router.navigate(['inicio']);
  
  return false;
};
