import { Component } from '@angular/core';
import { NavuserComponent } from "../navuser/navuser.component";
import { SidebarModule } from "../sidebar/sidebar.module";
import { RouterOutlet } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-tecuser',
  standalone: true,
  templateUrl: './tecuser.component.html',
  styleUrls: ['./tecuser.component.css'],
  imports: [
    NavuserComponent, SidebarModule, RouterOutlet, DialogModule, ButtonModule,
    InputTextModule, FormsModule, FileUploadModule, BadgeModule, ProgressBarModule,
    ToastModule, HttpClientModule, CommonModule
  ],
  providers: [MessageService]
})
export class TecuserComponent {
  visible: boolean = false;
  Editvisible: boolean = false;
  Deletevisible: boolean = false;
  index: number = 0;

  files: any[] = [];
  totalSize: number = 0;
  totalSizePercent: number = 0;

  items = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' }
  ];

  constructor(private config: PrimeNGConfig, private messageService: MessageService) {}

  showDialog() {
    this.visible = true;
  }

  showEditDialog() {
    this.Editvisible = true;
  }

  showDeleteDialog() {
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
}
