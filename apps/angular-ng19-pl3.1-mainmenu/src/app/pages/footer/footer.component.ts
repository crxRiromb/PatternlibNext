import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PatternlibAngularCommonModule, PatternlibAngularFormsModule } from '@liebherr/patternlib-angular';
import { TranslocoModule } from '@ngneat/transloco';
import { FooterService } from '../../services';

@Component({
  selector: 'app-font',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [CommonModule, TranslocoModule, PatternlibAngularCommonModule, PatternlibAngularFormsModule],
})
export class FooterComponent {
  public footerFixed = false;

  constructor(private footerService: FooterService) {}

  public onToggleFooterStyle(): void {
    this.footerFixed = !this.footerFixed;
    this.footerService.updateModeFixed(this.footerFixed);
  }
}
