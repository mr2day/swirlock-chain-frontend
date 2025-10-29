import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  ChainApiService,
  BlockHeader,
  IdentityStats,
} from '../../services/chain-api.service';

interface IdentityEvent {
  identityHash: string;
  eventType: string;
  previousHash?: string;
  currentHash: string;
  version: string;
  metadata?: string;
  timestamp: string;
}

interface IdentityEventsResponse {
  identityHash: string;
  eventCount: number;
  events: IdentityEvent[];
}

@Component({
  selector: 'app-blockchain-explorer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
  ],
  templateUrl: './blockchain-explorer.component.html',
  styleUrl: './blockchain-explorer.component.scss',
})
export class BlockchainExplorerComponent implements OnInit {
  searchHash = '';
  chainHead: BlockHeader | null = null;
  chainStats: IdentityStats | null = null;
  searchResults: IdentityEventsResponse | null = null;
  isLoading = false;
  error: string | null = null;

  eventTypeStats: Array<{ type: string; count: number }> = [];

  constructor(private chainApiService: ChainApiService) {}

  ngOnInit(): void {
    this.loadChainData();
  }

  private loadChainData(): void {
    this.isLoading = true;

    // Fetch block head
    this.chainApiService.getChainHead().subscribe({
      next: (block) => {
        this.chainHead = block;
      },
      error: (err) => {
        console.error('Error fetching block head:', err);
        this.error = 'Failed to fetch blockchain head';
        this.isLoading = false;
      },
    });

    // Fetch chain stats
    this.chainApiService.getIdentityStats().subscribe({
      next: (stats) => {
        this.chainStats = stats;
        this.buildEventTypeStats();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching stats:', err);
        this.error = 'Failed to fetch blockchain statistics';
        this.isLoading = false;
      },
    });
  }

  searchIdentity(): void {
    if (!this.searchHash.trim()) {
      this.error = 'Please enter an identity hash';
      return;
    }

    this.isLoading = true;
    this.error = null;
    this.searchResults = null;

    this.chainApiService.getIdentityEvents(this.searchHash).subscribe({
      next: (response: IdentityEventsResponse) => {
        this.searchResults = response;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error searching identity:', err);
        this.error =
          'Identity not found or error fetching events. Please check the hash.';
        this.isLoading = false;
      },
    });
  }

  clearSearch(): void {
    this.searchHash = '';
    this.searchResults = null;
    this.error = null;
    this.loadChainData();
  }

  clearError(): void {
    this.error = null;
  }

  getEventExplanation(eventType: string): string {
    const explanations: Record<string, string> = {
      IDENTITY_CREATED:
        'A new identity was created on the blockchain. This marks the beginning of an identity lifecycle.',
      CREDENTIAL_ADDED:
        'A new credential (such as a public key or authentication factor) was added to this identity.',
      CREDENTIAL_ROTATED:
        'An existing credential was rotated or replaced with a new one for security reasons.',
      CREDENTIAL_REVOKED:
        'A credential was revoked and is no longer valid for this identity.',
      IDENTITY_DELETED:
        'The identity was deleted from the database (GDPR right-to-be-forgotten). The blockchain maintains proof of deletion without revealing details.',
    };

    return (
      explanations[eventType] ||
      'An event was recorded on the blockchain for this identity.'
    );
  }

  private buildEventTypeStats(): void {
    if (!this.chainStats || !this.chainStats.eventsByType) {
      return;
    }

    this.eventTypeStats = Object.entries(
      this.chainStats.eventsByType,
    ).map(([type, count]) => ({
      type,
      count: count as number,
    }));
  }
}
