import { Component, OnChanges, OnInit, SimpleChanges, computed } from '@angular/core';
import { NavuserComponent } from "../navuser/navuser.component";
import { SidebarModule } from "../sidebar/sidebar.module";
import { RouterOutlet } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { CategoryPlain, EMPTY_PRODUCT, ProductUser, RequestProduct } from '../DTO/productUserDTO';
import { ApiService } from '../Services/api.service';
import { AuthService } from '../auth/auth.service';
import Swal from 'sweetalert2';
import { title } from 'process';
import { Product } from '../models/model';

@Component({
    selector: 'app-comprauser',
    standalone: true,
    templateUrl: './comprauser.component.html',
    styleUrls: ['./comprauser.component.css'],
    imports: [
        NavuserComponent,
        SidebarModule,
        HttpClientModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        FileUploadModule,
        BadgeModule,
        ProgressBarModule,
        ToastModule,
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [MessageService]
})
export class ComprauserComponent {
  visible: boolean = false;
  Editvisible: boolean = false;
  Deletevisible: boolean = false;
  index: number = 0;
  selectedProduct: ProductUser = EMPTY_PRODUCT;
  selectedProductIndex: number | null = null;

  files: any[] = [];
  totalSize: number = 0;
  totalSizePercent: number = 0;

  //Fetch Variables
  productsUser: ProductUser[] | null = null;
  categoryUser: CategoryPlain[] | null = null;

  //Form
  productForm!: FormGroup;
  selectedFile: File | null = null;

  items = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' }
  ];

  constructor(
    private config: PrimeNGConfig,
    private messageService: MessageService,
    private apiService: ApiService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      image: new FormControl(null)
    })
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    const id = localStorage.getItem('userId');
    if (id) {
      this.apiService.getProductByUserId(+id, 3).subscribe({
        next: (value) => {
          this.productsUser = value.map(product => {
            const imageUrl = product.image ? `http://localhost:3000/product/${product.id}/image` : 'No Image';
            return {
              ...product,
              image: imageUrl
            };
          });
          console.log(this.productsUser);
        },
        error: (err) => {
          console.log(err);
          Swal.fire({
            title: 'Error',
            text: err.message,
            icon: 'error'
          });
        }
      });
    }
  }

  showDialog() {
    this.fetchCategory();
    this.productForm.patchValue({
      title: '',
      price: '',
      description: '',
      color: '',
      category: ''
    });
    this.visible = true;
  }

  fetchCategory(){
    const id = localStorage.getItem('userId');
    if(id){
      this.apiService.getCategoryByUserIdAndDivision(+id, 3).subscribe({
        next: (res) => {
          this.categoryUser = res;
        },
        error: (err) => {
          console.log(err)
          Swal.fire({
            title: 'Error',
            text: err.message,
            icon: 'error'
          })
        }
      });
    }
  }

  showEditDialog(product: ProductUser, index: number) {
    this.fetchCategory();
    this.productForm.patchValue({
      title: product.title,
      price: product.price,
      description: product.description,
      color: product.colors,
      category: product.category
    });
    //console.log(this.productForm.value)
    this.Editvisible = true;
  }

  showDeleteDialog(product: ProductUser, index: number) {
    this.selectedProduct = product;
    this.selectedProductIndex = index;
    this.Deletevisible = true;
  }

   choose(event: any, callback: () => void) {
    callback();
  }

  onRemoveTemplatingFile(event: any, file: any, removeFileCallback: (event: any, index: number) => void, index: number) {
    removeFileCallback(event, index);
    this.totalSize -= parseInt(this.formatSize(file.size));
    this.totalSizePercent = this.totalSize / 10;
  }

  onClearTemplatingUpload(clear: () => void) {
    clear();
    this.totalSize = 0;
    this.totalSizePercent = 0;
  }

  onTemplatedUpload() {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
  }

  onSelectedFiles(event: any) {
    this.files = event.currentFiles;
    this.files.forEach((file: any) => {
      this.totalSize += parseInt(this.formatSize(file.size));
    });
    this.totalSizePercent = this.totalSize / 10;
  }

  uploadEvent(callback: () => void) {
    callback();
  }

  formatSize(bytes: number): string {
    const k = 1024;
    const dm = 3;
    const sizes = this.config.translation.fileSizeTypes;

    if (!sizes) {
      return "0 B";
    }

    if (bytes === 0) {
      return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
  }

  onNewSubmit(){
    if(this.productForm.valid){

      let formData: FormData = new FormData();

      let image : File | string;
      if(this.files.length !== 0){
        image = this.files[0]
      }else{
        image = 'no dir';
      }

      formData.append('image', image);
      formData.append('title', this.productForm.get('title')?.value);
      formData.append('description', this.productForm.get('description')?.value);
      formData.append('colors', this.productForm.get('color')?.value);
      formData.append('price', this.productForm.get('price')?.value);
      formData.append('categoryId', this.productForm.get('category')?.value);

      console.log(image.toString());
      //POST
      const req : Product = {
        image: image,
        title: this.productForm.get('title')?.value,
        description: this.productForm.get('description')?.value,
        colors: this.productForm.get('color')?.value,
        price: this.productForm.get('price')?.value,
        categoryId: this.productForm.get('category')?.value,
      }
      this.apiService.createProduct(formData).subscribe({
        next: () => {
          this.visible = false;
          this.Editvisible = false;

          Swal.fire({
            title: 'Success',
            text: 'Se ha creado el producto',
            icon: 'success'
          });
          setTimeout(function() {
            location.reload();
          }, 2000);
        },
        error: (err) => {
          Swal.fire({
            title: 'Error',
            text: err.message,
            icon: 'error'
          });
        }
      });
    }
  }

  save(){
    this.Editvisible = false;
    console.log('click guardar')
  }

  onSubmit(product: ProductUser | null){
    console.log('Entra al submit')
    if(this.productForm.valid){

      //mapper
      //PUT
      if(product?.id){
        let image : File | string;
        if(this.files.length !== 0){
          image = this.files[0]
        }else{
          image = product.image;
        }

        let formData : FormData = new FormData();
        formData.append('id', this.productForm.get('id')?.value);
        formData.append('image', image);
        formData.append('title', this.productForm.get('title')?.value);
        formData.append('description', this.productForm.get('description')?.value);
        formData.append('colors', this.productForm.get('color')?.value);
        formData.append('price', this.productForm.get('price')?.value);
        formData.append('categoryId', this.productForm.get('category')?.value);

        const req : Product = {
          id: product.id,
          image: image,
          title: this.productForm.get('title')?.value,
          description: this.productForm.get('description')?.value,
          colors: this.productForm.get('color')?.value,
          price: this.productForm.get('price')?.value,
          categoryId: this.productForm.get('category')?.value,
        }
        this.apiService.updateProduct(product.id, formData).subscribe({
          next: () => {
            this.Editvisible = false;
            Swal.fire({
              title: 'Success',
              text: 'Se ha actualizado el producto',
              icon: 'success'
            });
          },
          error: (err) => {
            Swal.fire({
              title: 'Error',
              text: err.message,
              icon: 'error'
            });
          }
        });
        return;
      }
    }
  }

  cancelAction(){
    this.Editvisible = false;
    this.Deletevisible = false;
  }

  deleteProduct() {
    this.apiService.deleteProduct(this.selectedProduct.id).subscribe({
      next: () => {
        Swal.fire({ title: 'Success', text: 'Producto eliminado correctamente', icon: 'success' });
      },
      error: (err) => {
        Swal.fire({ title: 'Error', text: err.message, icon: 'error' });
      }
    })

    /*if (this.selectedProduct && this.selectedProductIndex !== null) {
      const productId = this.selectedProduct.id;
      this.apiService.deleteProduct(productId).subscribe({
        next: () => {
          this.productsUser?.splice(this.selectedProductIndex!, 1); // Ensure non-null assertion here
          this.selectedProduct = null;
          this.selectedProductIndex = null;
          this.Deletevisible = false;
          Swal.fire({ title: 'Success', text: 'Producto eliminado correctamente', icon: 'success' });
        },
        error: (err) => {
          Swal.fire({ title: 'Error', text: err.message, icon: 'error' });
        }
      });
    }*/
  }

  adjustCardHeights(): void {
    const cards = document.querySelectorAll('.product-card');
    let maxHeight = 0;

    cards.forEach(card => {
      const cardHeight = card.clientHeight;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    cards.forEach(card => {
      (card as HTMLElement).style.height = `${maxHeight}px`;
    });
  }


}
