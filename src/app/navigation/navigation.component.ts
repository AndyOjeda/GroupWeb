import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AppComponent }  from '../app.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterOutlet, AppComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  constructor(private router: Router) {}

  login(): void {
    this.router.navigateByUrl('/login');
  }

}
