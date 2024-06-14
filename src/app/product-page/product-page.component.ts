import { Component, OnInit,  ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { NgModel } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from '../footer/footer.component';
import { CarouselModule } from 'primeng/carousel';
import { NavigationComponent } from '../navigation/navigation.component';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from '../photo.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ CardModule, InputTextModule, FooterComponent, CarouselModule, NavigationComponent, GalleriaModule, HttpClientModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
  encapsulation: ViewEncapsulation.Emulated  // Esto es por defecto
})
export class ProductPageComponent implements OnInit {
  images: any[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getImages().subscribe((images: any[]) => {
      this.images = images;
    });
  }
}

