import { Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from '../footer/footer.component';
import { CarouselModule } from 'primeng/carousel';
import { NavigationComponent } from '../navigation/navigation.component';
import { ApiService } from '../Services/api.service';
import { ProductResponse } from './dto/InicioDTOs';

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

  constructor(private readonly service: ApiService, private router: Router){}
  
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

  navigateToProductInfo(id: number) {
    this.router.navigate(['product/',id]).then(() => {
      window.location.reload()
    })
  }

}
