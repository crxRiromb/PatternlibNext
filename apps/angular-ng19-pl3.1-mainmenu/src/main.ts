import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Patternlib 4
import '@liebherr2/plnext';

// Patternlib 3
import { defineCustomElements } from '@liebherr/patternlib/loader';
defineCustomElements();

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
