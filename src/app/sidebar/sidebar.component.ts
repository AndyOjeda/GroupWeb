import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isCollapsed = false;
  Deletevisible: boolean = false;
  visible: boolean = false;


  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  showDeleteDialog() {  
    this.Deletevisible = true;
  }

  showDialog() {
    this.visible = true;
  }
}