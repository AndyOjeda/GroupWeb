import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tecnologia-page',
  standalone: true,
  imports: [CardModule, FooterComponent],
  templateUrl: './tecnologia-page.component.html',
  styleUrl: './tecnologia-page.component.css'
})
export class TecnologiaPageComponent {

}
