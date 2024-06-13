import { Component } from '@angular/core';
import { NavuserComponent } from "../navuser/navuser.component";
import { SidebarModule } from "../sidebar/sidebar.module";
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormpopupModule } from '../formpopup/formpopup.module';
import { DeletepopupModule } from "../deletepopup/deletepopup.module";

@Component({
    selector: 'app-tecuser',
    standalone: true,
    templateUrl: './tecuser.component.html',
    styleUrls: ['./tecuser.component.css'],
    imports: [NavuserComponent, SidebarModule, RouterOutlet, FormpopupModule, DeletepopupModule]
})
export class TecuserComponent {
  isModalVisible = false;
  isDeletePopupVisible = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  showDeletePopup() {
    this.isDeletePopupVisible = true;
  }

  closeDeletePopup() {
    this.isDeletePopupVisible = false;
  }

  confirmDelete() {
    this.isDeletePopupVisible = false;
    // Lógica para cerrar sesión
    console.log('Elemento Eliminado');
    // Aquí puedes redirigir al usuario a la página de inicio de sesión o realizar otras acciones necesarias.
  }
}
