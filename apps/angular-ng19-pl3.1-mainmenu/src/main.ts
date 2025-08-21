import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// Patternlib 4 - Prod Mode
// if (environment.loadPlWcInMain) {
//   console.log('Loading Patternlib 4 Web Components in main.ts');
//   import('@liebherr2/plnext');
// }

import('@liebherr2/plnext');
// import '@liebherr2/plnext/components/button/pl-button.js';
// import '@liebherr2/plnext/components/icon/pl-icon.js';
// import '@liebherr2/plnext/components/itemlist/pl-itemlist.js';

// Patternlib 3
import { defineCustomElements } from '@liebherr/patternlib/loader';
defineCustomElements();

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
