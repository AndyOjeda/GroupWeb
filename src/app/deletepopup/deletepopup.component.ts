import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletepopup',
  templateUrl: './deletepopup.component.html',
  styleUrl: './deletepopup.component.css'
})
export class DeletepopupComponent {
  @Input() isVisible: boolean = true;
  @Output() DeletePopupEvent = new EventEmitter<void>();
  @Output() confirmDeleteEvent = new EventEmitter<void>();

  DeletePopup() {
    this.isVisible = false;
    this.DeletePopupEvent.emit();
  }

  confirmDelete() {
    this.isVisible = false;
    this.confirmDeleteEvent.emit();
    console.log('Sesión cerrada');
  }
}
