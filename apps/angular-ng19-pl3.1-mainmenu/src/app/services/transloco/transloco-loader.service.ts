import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    // return this.http.get<Translation>(`assets/i18n/${lang}.json`);
    const filepath = `/i18n/${lang}.json`;
    console.log(`TranslationLoader: load ${filepath}`);
    return this.http.get<Translation>(filepath);
  }
}
