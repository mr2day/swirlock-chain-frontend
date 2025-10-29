import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  template: `
    <div class="landing-container">
      <section class="hero">
        <h1>Swirlock Chain</h1>
        <p>Immutable Audit Trail for Identity Management</p>
        <button mat-raised-button color="primary">
          Get Started
        </button>
      </section>

      <section class="features">
        <mat-card class="feature-card">
          <h3>Immutable Records</h3>
          <p>Cryptographically sealed records of all identity events</p>
        </mat-card>

        <mat-card class="feature-card">
          <h3>GDPR Compliant</h3>
          <p>Right-to-be-forgotten with blockchain audit trail</p>
        </mat-card>

        <mat-card class="feature-card">
          <h3>Transparent Verification</h3>
          <p>Publicly verifiable proof of identity events</p>
        </mat-card>
      </section>

      <section class="blockchain-visualization">
        <h2>Blockchain Visualization</h2>
        <p>Coming soon: Interactive visualization of blockchain blocks</p>
      </section>
    </div>
  `,
  styles: [`
    .landing-container {
      padding: 40px 20px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .hero {
      text-align: center;
      padding: 80px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 8px;
      margin-bottom: 60px;

      h1 {
        font-size: 3rem;
        margin: 0 0 20px 0;
      }

      p {
        font-size: 1.25rem;
        margin: 0 0 30px 0;
      }
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-bottom: 60px;
    }

    .feature-card {
      padding: 30px;

      h3 {
        margin-top: 0;
      }
    }

    .blockchain-visualization {
      text-align: center;
      padding: 60px 20px;
      background: #f5f5f5;
      border-radius: 8px;

      h2 {
        margin-top: 0;
      }
    }
  `],
})
export class LandingComponent {}
