import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isCollapsed = false;
  isLogoutPopupVisible = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  showLogoutPopup() {
    this.isLogoutPopupVisible = true;
  }

  closeLogoutPopup() {
    this.isLogoutPopupVisible = false;
  }

  confirmLogout() {
    this.isLogoutPopupVisible = false;
    // Lógica para cerrar sesión
    console.log('Sesión cerrada');
    // Aquí puedes redirigir al usuario a la página de inicio de sesión o realizar otras acciones necesarias.
  }
}
