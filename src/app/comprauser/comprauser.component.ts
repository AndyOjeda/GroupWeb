import { Component } from '@angular/core';
import { NavuserComponent } from "../navuser/navuser.component";
import { SidebarModule } from "../sidebar/sidebar.module";

@Component({
    selector: 'app-comprauser',
    standalone: true,
    templateUrl: './comprauser.component.html',
    styleUrl: './comprauser.component.css',
    imports: [NavuserComponent, SidebarModule]
})
export class ComprauserComponent {

}
