import { Component } from '@angular/core';
import { NavuserComponent } from "../navuser/navuser.component";
import { SidebarModule } from "../sidebar/sidebar.module";
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-fincauser',
    standalone: true,
    templateUrl: './fincauser.component.html',
    styleUrl: './fincauser.component.css',
    imports: [NavuserComponent, SidebarModule, HttpClientModule, DialogModule, ButtonModule, InputTextModule, FormsModule]
})
export class FincauserComponent {
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
