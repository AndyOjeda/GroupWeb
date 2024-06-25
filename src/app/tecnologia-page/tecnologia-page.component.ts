import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ApiService } from '../Services/api.service';
import { Product } from '../models/model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductResponse } from '../inicio-page/dto/InicioDTOs';
import { CategoryPlain } from '../DTO/productUserDTO';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tecnologia-page',
  standalone: true,
  providers: [ApiService],
  imports: [CardModule, FooterComponent, NavigationComponent],
  templateUrl: './tecnologia-page.component.html',
  styleUrl: './tecnologia-page.component.css'
})
export class TecnologiaPageComponent {

  productId: number | null = null;
  product: Product | null = null;

  data: ProductResponse[] | null = null;

  //filter
  categoryUser : CategoryPlain[] | null = null;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private router: Router) { }

  ngOnInit(): void {
    // Verificar si route.snapshot.paramMap es nulo antes de obtener el ID del producto
    const id = this.route.snapshot.paramMap.get('id');
    /*if (id !== null) {
      this.productId = +id;

      // Cargar la información detallada del producto
      this.apiService.getProduct(this.productId).subscribe(data => {
        this.product = {
          ...data,
          image: `http://localhost:3000/product/${data.id}/image`
        };
      });
    }*/

    //My Version
    this.apiService.getAllProductsByDivision(1).subscribe({
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

    this.loadCategories()
  }

  navigateProductInfo(product: ProductResponse){
    this.router.navigate(['/product', product.id])
  }

  //load categories by division
  loadCategories(){
    //tech = 1 || finca = 2 || compra-venta = 3
    this.apiService.getCategoryByDivision(1).subscribe({
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
  

  /*showProductInfo(product: Product) {
    // Navegar a la página del producto y pasar el ID del producto como parámetro
    this.router.navigate(['/product', product.id]);
  }*/

}
