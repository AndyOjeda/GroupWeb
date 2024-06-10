import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
    selector: 'app-compra-page',
    standalone: true,
    templateUrl: './compra-page.component.html',
    styleUrl: './compra-page.component.css',
    imports: [FooterComponent, NavigationComponent]
})
export class CompraPageComponent {

}
