import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { Product } from '../models/model';
import { ProductResponse } from '../inicio-page/dto/InicioDTOs';
import { CategoryPlain } from '../DTO/productUserDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { error } from 'console';
import Swal from 'sweetalert2';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-moda-age',
  standalone: true,
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './moda-page.component.html',
  styleUrl: './moda-page.component.css'
})
export class ModaPageComponent {
  productId: number | null = null;
  product: Product | null = null;

  data: ProductResponse[] | null = null;

  //filter
  categoryUser : CategoryPlain[] | null = null;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private router: Router) {}

  ngOnInit() : void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.apiService.getAllProductsByDivision(4).subscribe({
      next: (response: ProductResponse[]) => {
        this.data = response.map(product => {
          return {
            ...product,
            image: `http://localhost:3000/product/${product.id}/image`
          }
        })
      },
      error: (error) => {
        console.log('Product Not Found')
      }
    });

    this.loadCategories()
  }

  navigateProductInfo(product: ProductResponse){
    this.router.navigate(['/product', product.id]);
  }

  loadCategories(){
    this.apiService.getCategoryByDivision(4).subscribe({
      next: (res) => {
        this.categoryUser = res;
      },
      error: (err) => {
        Swal.fire({title: 'Error', text: err.message, icon:'error'})
      }
    });
  }

  loadProductsByCategory(event: Event){
    const selectedElement = event.target as HTMLSelectElement;
    const categoryId = selectedElement.value;
    console.log(categoryId);
    this.apiService.getProductsByCategory(+categoryId).subscribe({
      next: (res) => {
        this.data = res;
      },
      error: (err) => {
        Swal.fire({title: 'Error', text: err.message, icon:'error'})
      }
    })
  }

}
