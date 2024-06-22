import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';
import { ProductResponse } from '../inicio-page/dto/InicioDTOs';

@Component({
  selector: 'app-compra-page',
  standalone: true,
  providers: [ApiService],
  imports: [ FooterComponent, NavigationComponent],
  templateUrl: './compra-page.component.html',
  styleUrl: './compra-page.component.css'

})
export class CompraPageComponent implements OnInit {

  data: ProductResponse[] | null = null;

  constructor(private apiService: ApiService, private router: Router){}

  ngOnInit(): void {
    this.apiService.getAllProductsByDivision(3).subscribe({
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

  navigateToProductInfo(product: ProductResponse){
    this.router.navigate(['/product', product.id])
  }

}
