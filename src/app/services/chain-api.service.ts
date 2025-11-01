import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BlockHeader {
  height: string;
  hash: string;
  prevHash: string;
  timestamp: string;
  merkleRoot: string;
  proposerFp: string;
}

export interface IdentityStats {
  totalIdentities: number;
  totalEvents: number;
  eventsByType: Record<string, number>;
  lastUpdated: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChainApiService {
  private readonly apiBaseUrl = 'https://chain.swirlock.com';

  constructor(private http: HttpClient) {}

  /**
   * Get the current head of the blockchain
   */
  getChainHead(): Observable<BlockHeader> {
    return this.http.get<BlockHeader>(`${this.apiBaseUrl}/chain/head`);
  }

  /**
   * Get health status of the chain
   */
  getHealth(): Observable<{ status: string }> {
    return this.http.get<{ status: string }>(
      `${this.apiBaseUrl}/chain/health`,
    );
  }

  /**
   * Get identity statistics
   */
  getIdentityStats(): Observable<IdentityStats> {
    return this.http.get<IdentityStats>(`${this.apiBaseUrl}/identity/stats`);
  }

  /**
   * Get events for a specific identity
   */
  getIdentityEvents(identityHash: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiBaseUrl}/identity/${identityHash}/events`,
    );
  }
}
