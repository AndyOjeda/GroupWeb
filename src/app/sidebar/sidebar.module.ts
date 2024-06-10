import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  exports: [SidebarComponent] // Esto permite que SidebarComponent sea utilizado en otros módulos
})
export class SidebarModule { }
