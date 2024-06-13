import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

import { NavigationComponent } from '../navigation/navigation.component';
import { FormtwopopupComponent } from "../formtwopopup/formtwopopup.component";

@Component({
    selector: 'app-finca-page',
    standalone: true,
    templateUrl: './finca-page.component.html',
    styleUrl: './finca-page.component.css',
    imports: [FooterComponent, NavigationComponent, FormtwopopupComponent]
})
export class FincaPageComponent {

}
