import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-gdpr',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule],
  templateUrl: './gdpr.component.html',
  styleUrl: './gdpr.component.scss',
})
export class GdprComponent {}
