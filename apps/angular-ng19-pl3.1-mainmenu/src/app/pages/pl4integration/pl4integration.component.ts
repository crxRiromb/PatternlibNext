import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PatternlibAngularCommonModule, PatternlibAngularFormsModule } from '@liebherr/patternlib-angular';
import { TranslocoModule } from '@ngneat/transloco';
import { PLButtonAngular, PLIconAngular, PlItemlistAngular } from '@liebherr2/angularnext';

@Component({
  selector: 'app-pl4integration',
  standalone: true,
  templateUrl: './pl4integration.component.html',
  styleUrl: './pl4integration.component.scss',
  imports: [
    CommonModule,
    TranslocoModule,
    PatternlibAngularCommonModule,
    PatternlibAngularFormsModule,
    PLButtonAngular,
    PLIconAngular,
    PlItemlistAngular,
  ],
})
export class PL4IntegrationComponent {
  public exampleData = [
    { key: '1', value: 'Erster Listeneintrag' },
    { key: '2', value: 'Zweiter Listeneintrag' },
    { key: '3', value: 'Dritter Listeneintrag' },
  ];

  public onButtonV3Clicked(): void {
    console.log('Button 3 clicked!');
  }

  public onButtonV4Clicked(): void {
    console.log('Button 4 clicked!');
  }
}
