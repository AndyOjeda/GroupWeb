import { Component } from '@angular/core';
import { NavuserComponent } from "../navuser/navuser.component";
import { SidebarModule } from "../sidebar/sidebar.module";

@Component({
    selector: 'app-fincauser',
    standalone: true,
    templateUrl: './fincauser.component.html',
    styleUrl: './fincauser.component.css',
    imports: [NavuserComponent, SidebarModule]
})
export class FincauserComponent {

}
