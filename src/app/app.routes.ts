import { Routes } from '@angular/router';
import { InicioPageComponent } from './inicio-page/inicio-page.component';
import { TecnologiaPageComponent } from './tecnologia-page/tecnologia-page.component';
import { FincaPageComponent } from './finca-page/finca-page.component';
import { CompraPageComponent } from './compra-page/compra-page.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioPageComponent},
  { path: 'tecnologia', component: TecnologiaPageComponent},
  { path: 'finca', component: FincaPageComponent},
  { path: 'compra', component: CompraPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'user', component: UserComponent},

];
