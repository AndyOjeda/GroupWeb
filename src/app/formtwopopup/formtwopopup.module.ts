import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { FormtwopopupComponent } from './formtwopopup.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FileUploadModule,
    ToastModule,
    HttpClientModule,
    FormtwopopupComponent
  ],
  exports: [FormtwopopupComponent]
})
export class FormtwopopupModule { }
