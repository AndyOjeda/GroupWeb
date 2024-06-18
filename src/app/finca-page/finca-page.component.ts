import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';



@Component({
    selector: 'app-finca-page',
    standalone: true,
    templateUrl: './finca-page.component.html',
    styleUrl: './finca-page.component.css',
    imports: [FooterComponent, NavigationComponent]
})
export class FincaPageComponent {

}
