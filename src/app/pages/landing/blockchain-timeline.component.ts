import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ChainApiService, BlockHeader, IdentityStats } from '../../services/chain-api.service';

@Component({
  selector: 'app-blockchain-timeline',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './blockchain-timeline.component.html',
  styleUrl: './blockchain-timeline.component.scss',
})
export class BlockchainTimelineComponent implements OnInit {
  blockHead: BlockHeader | null = null;
  stats: IdentityStats | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(private chainApiService: ChainApiService) {}

  ngOnInit(): void {
    this.loadBlockchainData();
  }

  private loadBlockchainData(): void {
    this.isLoading = true;
    this.error = null;

    // Fetch block head
    this.chainApiService.getChainHead().subscribe({
      next: (block) => {
        this.blockHead = block;
      },
      error: (err) => {
        console.error('Error fetching block head:', err);
        this.error = 'Failed to fetch blockchain head. Is the backend running?';
        this.isLoading = false;
      },
    });

    // Fetch identity statistics
    this.chainApiService.getIdentityStats().subscribe({
      next: (stats) => {
        this.stats = stats;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching identity stats:', err);
        if (!this.error) {
          this.error = 'Failed to fetch blockchain statistics.';
        }
        this.isLoading = false;
      },
    });
  }
}
