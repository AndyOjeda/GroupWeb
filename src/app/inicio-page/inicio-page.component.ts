import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { NgModel } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [ CardModule, InputTextModule, FooterComponent ],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.css'
})
export class InicioPageComponent {

  value: string | undefined;

}
