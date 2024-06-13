import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-formtwopopup',
  standalone: true,
  imports: [CommonModule, ToastModule, FileUploadModule],
  templateUrl: './formtwopopup.component.html',
  styleUrl: './formtwopopup.component.css',
  providers: [MessageService]
})
export class FormtwopopupComponent {
  @Input() isVisible = false;
  @Output() closeModal = new EventEmitter<void>();
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onClose() {
    this.closeModal.emit();
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}
