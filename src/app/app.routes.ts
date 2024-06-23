import { Routes } from '@angular/router';
import { InicioPageComponent } from './inicio-page/inicio-page.component';
import { TecnologiaPageComponent } from './tecnologia-page/tecnologia-page.component';
import { FincaPageComponent } from './finca-page/finca-page.component';
import { CompraPageComponent } from './compra-page/compra-page.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { TecuserComponent } from './tecuser/tecuser.component';
import { FincauserComponent } from './fincauser/fincauser.component';
import { ComprauserComponent } from './comprauser/comprauser.component';
import { isAuthenticatedGuard } from './guards/is-authenticated.guard';
import { isNotAuthenticatedGuard } from './guards/is-not-authtenticated.guard';



export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioPageComponent},
  { path: 'tecnologia', component: TecnologiaPageComponent},
  { path: 'finca', component: FincaPageComponent},
  { path: 'compra', component: CompraPageComponent},
  { path: 'login', component: LoginComponent, canActivate: [isNotAuthenticatedGuard]},
  { path: 'user', component: UserComponent, canActivate: [isAuthenticatedGuard]},
  { path: 'product/:id', component: ProductPageComponent},
  { path: 'tecuser', component: TecuserComponent, canActivate: [isAuthenticatedGuard]},
  { path: 'fincauser', component: FincauserComponent, canActivate: [isAuthenticatedGuard]},
  { path: 'comprauser', component: ComprauserComponent, canActivate: [isAuthenticatedGuard]}

];
