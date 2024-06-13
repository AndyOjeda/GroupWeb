import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-pop-up',
  templateUrl: './closepopup.component.html',
  styleUrls: ['./closepopup.component.css']
  
})
export class ClosePopUpComponent {
  @Input() isVisible: boolean = true;
  @Output() closePopupEvent = new EventEmitter<void>();
  @Output() confirmLogoutEvent = new EventEmitter<void>();

  constructor(private router: Router) {} // Aquí se inyecta el Router

  closePopup() {
    this.isVisible = false;
    this.closePopupEvent.emit();
  }

  confirmLogout() {
    this.isVisible = false;
    this.router.navigateByUrl('/inicio');
    console.log('Sesión cerrada');
  }
}