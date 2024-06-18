import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { ClosePopUpModule } from '../closepopup/closepopup.module';
import { DialogModule } from 'primeng/dialog';  // Importa el módulo de diálogo

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    ClosePopUpModule,
    DialogModule  // Añade el módulo de diálogo a los imports
  ],
  exports: [SidebarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Añade esto si es necesario
})
export class SidebarModule { }
