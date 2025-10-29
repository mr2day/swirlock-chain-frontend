import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { BlockchainTimelineComponent } from './blockchain-timeline.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, MatCardModule, BlockchainTimelineComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
