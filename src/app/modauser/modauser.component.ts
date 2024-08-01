import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CategoryPlain, EMPTY_PRODUCT, ProductUser } from '../DTO/productUserDTO';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ApiService } from '../Services/api.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { NavuserComponent } from '../navuser/navuser.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { RouterOutlet } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Category, Product } from '../models/model';

@Component({
  selector: 'app-modauser',
  standalone: true,
  imports: [
    NavuserComponent, SidebarModule, RouterOutlet, DialogModule, ButtonModule,
    InputTextModule, FormsModule, FileUploadModule, BadgeModule, ProgressBarModule,
    ToastModule, HttpClientModule, CommonModule, ReactiveFormsModule
  ],
  providers: [MessageService],
  templateUrl: './modauser.component.html',
  styleUrl: './modauser.component.css'
})
export class ModauserComponent implements OnInit, OnChanges{
  
  visible: boolean = false;
  Editvisible: boolean = false;
  Deletevisible: boolean = false;
  categoryDialogVisible: boolean = false;
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
  categoryForm!: FormGroup;
  selectedFile: File | null = null;

  divisions: string[] = ['Tecnologia', 'Finca Raiz', 'Compra-Venta', 'Moda'];
  currentUser: string = localStorage.getItem('userId') || '';

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
    });
    this.categoryForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      division: new FormControl('', [Validators.required]),
    });
    this.loadProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
  
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    const id = localStorage.getItem('userId');
    if (id) {
      this.apiService.getProductByUserId(+id, 4).subscribe({
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

  showCategoryDialog() {
    this.categoryDialogVisible = true;
  }

  fetchCategory(){
    const id = localStorage.getItem('userId');
    if(id){
      this.apiService.getCategoryByUserIdAndDivision(+id, 4).subscribe({
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

  showDeleteDialog(product: ProductUser) {
    this.selectedProduct = product;
    console.log(product)
    //this.selectedProduct = product;
    //this.selectedProductIndex = index;
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
        colors: this.productForm.get('colors')?.value,
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

        console.log(this.productForm.value);

        let formData : FormData = new FormData();
        formData.append('image', image);
        formData.append('title', this.productForm.get('title')?.value);
        formData.append('description', this.productForm.get('description')?.value);
        formData.append('colors', this.productForm.get('color')?.value);
        formData.append('price', this.productForm.get('price')?.value);
        formData.append('categoryId', this.productForm.get('category')?.value);

        const req : Product = {
          //id: product.id,
          image: image,
          title: this.productForm.get('title')?.value,
          description: this.productForm.get('description')?.value,
          colors: this.productForm.get('color')?.value,
          price: this.productForm.get('price')?.value,
          categoryId: this.productForm.get('category')?.value,
        }
        console.log(req)
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
    console.log(this.selectedProduct);
    this.apiService.deleteProduct(this.selectedProduct.id).subscribe({
      next: () => {
        Swal.fire({
          title: 'Success',
          text: 'Se ha eliminado el producto',
          icon: 'success'
        })
      },
      error: (err) => {
        Swal.fire({
          title: 'Error',
          text: err.message,
          icon: 'error'
        })
      }
    });
  }

  onCategorySubmit() {
    if (this.categoryForm.valid) { 
      const divisionId = (this.divisions.indexOf(this.categoryForm.get('division')?.value)) + 1
      const newCategory : Category = {
        name: this.categoryForm.get('name')?.value,
        divisionId: divisionId,
        userId: +localStorage.getItem('userId')!
      }
      
      //POST
      this.apiService.createCategory(newCategory).subscribe({
        next: () => {
          Swal.fire({
            title: 'Success',
            text: 'Se ha creado la categoría',
            icon: 'success'
          });
          this.categoryDialogVisible = false;
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
      })

    }
  }

}
