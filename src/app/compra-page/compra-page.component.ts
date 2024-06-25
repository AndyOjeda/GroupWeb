import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';
import { ProductResponse } from '../inicio-page/dto/InicioDTOs';
import { CategoryPlain } from '../DTO/productUserDTO';
import Swal from 'sweetalert2';

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

    //filter
    categoryUser : CategoryPlain[] | null = null;

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


  //load categories by division
  loadCategories(){
    //tech = 1 || finca = 2 || compra-venta = 3
    this.apiService.getCategoryByDivision(3).subscribe({
      next: (res) => {
        this.categoryUser = res;
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
