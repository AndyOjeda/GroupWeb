import { Component, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { NgModel } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from '../footer/footer.component';
import { CarouselModule } from 'primeng/carousel';
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
    selector: 'app-inicio-page',
    standalone: true,
    templateUrl: './inicio-page.component.html',
    styleUrl: './inicio-page.component.css',
    encapsulation: ViewEncapsulation.Emulated // Esto es por defecto
    ,
    imports: [CardModule, InputTextModule, FooterComponent, NavigationComponent]
})
export class InicioPageComponent {

  value: string | undefined;

}
