import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PatternlibAngularCommonModule, PatternlibAngularFormsModule } from '@liebherr/patternlib-angular';
import { TranslocoModule } from '@ngneat/transloco';
import { PLButtonAngular, PLIconAngular } from '@liebherr2/angularnext';

@Component({
  selector: 'app-pl4integration',
  standalone: true,
  templateUrl: './pl4integration.component.html',
  styleUrl: './pl4integration.component.scss',
  imports: [CommonModule, TranslocoModule, PatternlibAngularCommonModule, PatternlibAngularFormsModule, PLButtonAngular, PLIconAngular],
})
export class PL4IntegrationComponent {

  public onClickButton3(): void {
    alert('Button 3 clicked!');
  }

  public onClickButton4(): void {
    alert('Button 4 clicked!');
  }
}
