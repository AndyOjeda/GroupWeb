import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isCollapsed = false;
  Deletevisible: boolean = false;
  visible: boolean = false;

  constructor(private router: Router){

  }


  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  showDeleteDialog() {  
    this.Deletevisible = true;
  }

  showDialog() {
    this.visible = true;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['inicio'])
  }
}