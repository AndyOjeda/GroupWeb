import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-formpopup',
  templateUrl: './formpopup.component.html',
  styleUrls: ['./formpopup.component.css'],
  providers: [MessageService]
})
export class FormpopupComponent {
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
