import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ApiService } from '../Services/api.service';
import { Product } from '../models/model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tecnologia-page',
  standalone: true,
  imports: [CardModule, FooterComponent, NavigationComponent],
  templateUrl: './tecnologia-page.component.html',
  styleUrl: './tecnologia-page.component.css'
})
export class TecnologiaPageComponent {

  productId: number | null = null;
  product: Product | null = null;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private router: Router) { }

  ngOnInit(): void {
    // Verificar si route.snapshot.paramMap es nulo antes de obtener el ID del producto
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productId = +id;

      // Cargar la información detallada del producto
      this.apiService.getProduct(this.productId).subscribe(data => {
        this.product = data;
      });
    }
  }

  showProductInfo(product: Product) {
    // Navegar a la página del producto y pasar el ID del producto como parámetro
    this.router.navigate(['/product', product.id]);
  }

}
