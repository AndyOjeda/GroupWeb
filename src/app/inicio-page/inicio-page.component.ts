import { Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { NgModel } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from '../footer/footer.component';
import { CarouselModule } from 'primeng/carousel';

import { NavigationComponent } from '../navigation/navigation.component';
import { ApiService } from '../Services/api.service';
import { ProductResponse } from './dto/InicioDTOs';
import { error } from 'console';

@Component({
  selector: 'app-inicio-page',
  standalone: true,
  providers: [ApiService],
  imports: [ CardModule, InputTextModule, FooterComponent, CarouselModule, NavigationComponent],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css',
  encapsulation: ViewEncapsulation.Emulated  // Esto es por defecto

})
export class InicioPageComponent implements OnInit{

  @Input() data: ProductResponse[] | null = null;

  constructor(private readonly service: ApiService){}
  
  ngOnInit(): void {
    this.service.getProductsByDivision().subscribe({
      next: (response: ProductResponse[]) => {
        this.data = response.map(product => {
          return {
            ...product,
            image: `http://localhost:3000/product/${product.id}/image`
          }
        })
      },
      error: (error) => {
        console.log('Products Not Found')
      }
    });

    
  }

  value: string | undefined;

  abrirCorreo() {
    window.open('mailto:Group_ms@outlook.com');
  }

}
