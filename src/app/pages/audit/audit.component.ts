import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-audit',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <div class="audit-container">
      <h1>Blockchain Audit</h1>
      <p>
        Publicly audit the blockchain to verify identity events and ensure
        compliance
      </p>

      <mat-card class="search-card">
        <mat-form-field>
          <mat-label>Search by Identity Hash</mat-label>
          <input matInput placeholder="Enter identity hash" />
        </mat-form-field>
        <button mat-raised-button color="primary">Search</button>
      </mat-card>

      <mat-card class="results-card">
        <h2>Blockchain Blocks</h2>
        <p>Block visualization and data will appear here</p>
      </mat-card>
    </div>
  `,
  styles: [`
    .audit-container {
      padding: 40px 20px;
      max-width: 1400px;
      margin: 0 auto;

      h1 {
        margin-top: 0;
      }
    }

    .search-card {
      padding: 30px;
      margin-bottom: 30px;
      display: flex;
      gap: 20px;
      align-items: flex-end;

      mat-form-field {
        flex: 1;
        min-width: 300px;
      }
    }

    .results-card {
      padding: 30px;

      h2 {
        margin-top: 0;
      }
    }
  `],
})
export class AuditComponent {}
