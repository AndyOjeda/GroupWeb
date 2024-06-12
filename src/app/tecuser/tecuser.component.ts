import { Component } from '@angular/core';
import { NavuserComponent } from "../navuser/navuser.component";
import { SidebarModule } from "../sidebar/sidebar.module";
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormpopupModule } from '../formpopup/formpopup.module';

@Component({
  selector: 'app-tecuser',
  standalone: true,
  templateUrl: './tecuser.component.html',
  styleUrls: ['./tecuser.component.css'],
  imports: [NavuserComponent, SidebarModule, RouterOutlet, FormpopupModule]
})
export class TecuserComponent {
  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
