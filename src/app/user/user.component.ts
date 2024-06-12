import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NavuserComponent } from "../navuser/navuser.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';



@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [ButtonModule, NavuserComponent, SidebarModule, RouterOutlet],
})
export class UserComponent {
  sidebarVisible: boolean = false;
}