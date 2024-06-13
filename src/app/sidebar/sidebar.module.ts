import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { ClosePopUpModule } from '../closepopup/closepopup.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, ClosePopUpModule],
  exports: [SidebarComponent]
})
export class SidebarModule { }
