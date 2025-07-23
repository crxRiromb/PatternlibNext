import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { PatternlibAngularCommonModule, PatternlibAngularFormsModule } from '@liebherr/patternlib-angular';
import { provideTransloco } from '@ngneat/transloco';
import { APP_ROUTES } from './app.routes';
import { TranslocoHttpLoader } from './services';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(APP_ROUTES),
    provideHttpClient(withInterceptorsFromDi()),
    provideTransloco({
      config: {
        availableLangs: ['en', 'de', 'zh', 'ja'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),

    importProvidersFrom(PatternlibAngularCommonModule, PatternlibAngularFormsModule, RouterModule),
  ],
};
