import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormpopupComponent } from './formpopup.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [FormpopupComponent],
  imports: [
    CommonModule,
    FileUploadModule,
    ToastModule,
    HttpClientModule
  ],
  exports: [FormpopupComponent]
})
export class FormpopupModule { }
