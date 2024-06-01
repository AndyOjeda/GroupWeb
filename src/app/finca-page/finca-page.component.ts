import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-finca-page',
  standalone: true,
  imports: [ FooterComponent],
  templateUrl: './finca-page.component.html',
  styleUrl: './finca-page.component.css'
})
export class FincaPageComponent {

}
