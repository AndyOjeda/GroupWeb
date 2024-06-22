import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from '../footer/footer.component';
import { CarouselModule } from 'primeng/carousel';
import { NavigationComponent } from '../navigation/navigation.component';
import { GalleriaModule } from 'primeng/galleria';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../Services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/model';
import { ProductResponse } from '../inicio-page/dto/InicioDTOs';

@Component({
  selector: 'app-product-page',
  standalone: true,
  providers: [ApiService],
  imports: [
    CardModule,
    InputTextModule,
    FooterComponent,
    CarouselModule,
    NavigationComponent,
    GalleriaModule,
    HttpClientModule
  ],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductPageComponent implements OnInit {
  images: any[] = [];
  productId: number | null = null;
  product: Product | null = null;

  dataDetail: ProductResponse | null = null;

  dataInterest: ProductResponse[] | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

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

  ngOnInit(): void {
    // Obtener el ID del producto de la ruta
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        //this.productId = +id;

        this.apiService.getProduct(+id).subscribe({
          next: (response: ProductResponse) => {
            this.dataDetail = response;
            this.dataDetail.image = `http://localhost:3000/product/${this.dataDetail.id}/image`
          },
          error: (error) => {
            console.log('Product Not Found')
          }
        })

        this.apiService.getProductsByCategory(this.dataDetail!.category.id).subscribe({
          next: (response: ProductResponse[]) => {
            this.dataInterest = response.map(product => {
              return {
                ...product,
                image: `http://localhost:3000/product/${product.id}/image`
              }
            })
            const index = this.dataInterest.findIndex(prod => prod.id === this.dataDetail!.id)
            this.dataInterest.splice(index, 1)
            console.log(this.dataInterest)
          },
          error: (error) => {
            console.log('Products Not Found')
          }
        });
      }
    });
  }
}
