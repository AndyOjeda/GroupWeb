import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProductResponse } from '../inicio-page/dto/InicioDTOs';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { CategoryPlain } from '../DTO/productUserDTO';
import Swal from 'sweetalert2';



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

      //filter
  categoryUser : CategoryPlain[] | null = null;

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
      this.loadCategories();
    }

    navigateToProductInfo(product: ProductResponse){
      this.router.navigate(['/product', product.id])
    }

      //load categories by division
  loadCategories(){
    //tech = 1 || finca = 2 || compra-venta = 3
    this.apiService.getCategoryByDivision(2).subscribe({
      next: (res) => {
        this.categoryUser = res;
        console.log(this.categoryUser)
      },
      error: (err) => {
        Swal.fire({title: 'Error', text: err.message, icon:'error'})
      }
    });
  }



    loadProductsByCategory(event: Event){
      //console.log(event.target);
      const selectedElement = event.target as HTMLSelectElement;
      const categoryId = selectedElement.value
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
