import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PatternlibAngularCommonModule, PatternlibAngularFormsModule } from '@liebherr/patternlib-angular';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, TranslocoModule, PatternlibAngularCommonModule, PatternlibAngularFormsModule],
})
export class HomeComponent {}
