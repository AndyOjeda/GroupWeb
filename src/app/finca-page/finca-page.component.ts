import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProductResponse } from '../inicio-page/dto/InicioDTOs';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';



@Component({
    selector: 'app-finca-page',
    standalone: true,
    providers: [ApiService],
    templateUrl: './finca-page.component.html',
    styleUrl: './finca-page.component.css',
    imports: [FooterComponent, NavigationComponent]
})
export class FincaPageComponent implements OnInit {

    data: ProductResponse[] | null = null;

    constructor(private apiService: ApiService, private router: Router) { }

    ngOnInit(): void {
      this.apiService.getAllProductsByDivision(2).subscribe({
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
