import { Component } from '@angular/core';
import { NavuserComponent } from "../navuser/navuser.component";
import { SidebarModule } from "../sidebar/sidebar.module";
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-tecuser',
    standalone: true,
    templateUrl: './tecuser.component.html',
    styleUrls: ['./tecuser.component.css'],
    imports: [NavuserComponent, SidebarModule, RouterOutlet, DialogModule, ButtonModule, InputTextModule, FormsModule]
})
export class TecuserComponent {
  visible: boolean = false;
  Editvisible: boolean = false;
  Deletevisible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  showEditDialog() {
    this.Editvisible = true;  
  }

  showDeleteDialog() {  
    this.Deletevisible = true;
   }
}
