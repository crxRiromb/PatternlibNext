import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FooterService {
  footerModeFixedSignal = signal(false);

  updateModeFixed(fixed: boolean) {
    this.footerModeFixedSignal.set(fixed);
  }
}
