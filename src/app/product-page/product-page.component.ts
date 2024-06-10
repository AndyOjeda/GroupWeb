import { Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { NgModel } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from '../footer/footer.component';
import { CarouselModule } from 'primeng/carousel';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ CardModule, InputTextModule, FooterComponent, CarouselModule, NavigationComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
  encapsulation: ViewEncapsulation.Emulated  // Esto es por defecto
})
export class ProductPageComponent {

}
