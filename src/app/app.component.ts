import { Component, computed, effect } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthStatus } from './auth/interfaces/authstatus.enum';
import { AuthService } from './auth/auth.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet, HttpClientModule],
  providers:[AuthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';

  constructor(private authService: AuthService, private router: Router){}

  /*public finishedAuthCheck = computed<boolean>(() => {
    
    if(this.authService.authStatus() === AuthStatus.checking){
      return false;
    }

    return true;
  });

  public authStatusChangedEffect = effect(() => {
    
    switch(this.authService.authStatus()){
      case AuthStatus.checking:
        return;

      case AuthStatus.isAuthenticated:
        this.router.navigate(['user']);
        return;
      
      case AuthStatus.notAuthenticated:
        this.router.navigate(['/login']);
        return;
    }

  });*/
}
