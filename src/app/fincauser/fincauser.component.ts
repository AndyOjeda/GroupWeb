import { Component } from '@angular/core';
import { NavuserComponent } from "../navuser/navuser.component";
import { SidebarModule } from "../sidebar/sidebar.module";
import { FormtwopopupComponent } from "../formtwopopup/formtwopopup.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-fincauser',
    standalone: true,
    templateUrl: './fincauser.component.html',
    styleUrl: './fincauser.component.css',
    imports: [NavuserComponent, SidebarModule, FormtwopopupComponent, HttpClientModule]
})
export class FincauserComponent {
    isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
