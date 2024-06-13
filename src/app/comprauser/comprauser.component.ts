import { Component } from '@angular/core';
import { NavuserComponent } from "../navuser/navuser.component";
import { SidebarModule } from "../sidebar/sidebar.module";
import { FormtwopopupComponent } from "../formtwopopup/formtwopopup.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-comprauser',
    standalone: true,
    templateUrl: './comprauser.component.html',
    styleUrl: './comprauser.component.css',
    imports: [NavuserComponent, SidebarModule, FormtwopopupComponent, HttpClientModule]
})
export class ComprauserComponent {
    isModalVisible = false;

    openModal() {
      this.isModalVisible = true;
    }
  
    closeModal() {
      this.isModalVisible = false;
    }
}
