import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
}
