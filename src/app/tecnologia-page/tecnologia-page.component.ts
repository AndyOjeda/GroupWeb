import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';


@Component({
  selector: 'app-tecnologia-page',
  standalone: true,
  imports: [CardModule, FooterComponent, NavigationComponent],
  templateUrl: './tecnologia-page.component.html',
  styleUrl: './tecnologia-page.component.css'
})
export class TecnologiaPageComponent {

  constructor( private router: Router ) { }

  product(){
    this.router.navigate(['/product']);
  }
}
