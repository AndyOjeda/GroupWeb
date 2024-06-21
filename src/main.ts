/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { ApiService } from './app/Services/api.service';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ApiService,
    provideHttpClient(withFetch()),
    importProvidersFrom(BrowserAnimationsModule),
    ...appConfig.providers || []
  ]
})
.catch((err) => console.error(err));
