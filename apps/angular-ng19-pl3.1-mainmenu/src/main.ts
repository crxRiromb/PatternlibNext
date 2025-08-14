import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { defineCustomElements } from '@liebherr/patternlib/loader';

defineCustomElements();

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
