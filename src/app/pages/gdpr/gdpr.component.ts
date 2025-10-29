import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-gdpr',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule],
  template: `
    <div class="gdpr-container">
      <h1>GDPR Compliance & Data Retention</h1>

      <mat-card class="intro-card">
        <h2>Our Commitment to Privacy</h2>
        <p>
          Swirlock Chain is designed with GDPR and data protection in mind. We
          provide privacy-preserving blockchain technology that maintains
          immutability while respecting users' right to be forgotten.
        </p>
      </mat-card>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <h3>Right to be Forgotten (Article 17)</h3>
        </mat-expansion-panel-header>
        <div class="panel-content">
          <p>
            Swirlock Chain implements a unique one-way architecture that allows
            deletion of personal data while maintaining blockchain integrity:
          </p>
          <ul>
            <li>
              Personal data is stored in a deletable database layer
            </li>
            <li>
              Blockchain stores only cryptographic commitments (Merkle roots)
            </li>
            <li>
              Data can be deleted without affecting blockchain integrity
            </li>
            <li>
              Blockchain proves data existed without revealing personal
              information
            </li>
          </ul>
        </div>
      </mat-expansion-panel>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <h3>Data Retention Policy</h3>
        </mat-expansion-panel-header>
        <div class="panel-content">
          <p>
            Data retention is determined by the Identity Provider (IDP) using
            Swirlock Chain. By default:
          </p>
          <ul>
            <li>
              Active user data: Retained as long as the account is active
            </li>
            <li>
              Deleted user data: Removed upon user request (right to be
              forgotten)
            </li>
            <li>
              Audit records: Maintained for compliance purposes on blockchain
            </li>
            <li>
              Blockchain records: Immutable and permanent for integrity
            </li>
          </ul>
        </div>
      </mat-expansion-panel>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <h3>Lawful Basis for Processing</h3>
        </mat-expansion-panel-header>
        <div class="panel-content">
          <p>
            Swirlock Chain processes personal data under the following lawful
            bases:
          </p>
          <ul>
            <li>
              <strong>Contract (Article 6(1)(b)):</strong> Processing necessary
              for authentication and identity management services
            </li>
            <li>
              <strong>Compliance (Article 6(1)(c)):</strong> Maintaining audit
              trails for regulatory compliance
            </li>
            <li>
              <strong>Legitimate Interests (Article 6(1)(f)):</strong> Security
              and fraud prevention
            </li>
            <li>
              <strong>Consent (Article 6(1)(a)):</strong> When explicitly
              granted by the user
            </li>
          </ul>
        </div>
      </mat-expansion-panel>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <h3>Data Subject Rights</h3>
        </mat-expansion-panel-header>
        <div class="panel-content">
          <p>You have the following rights under GDPR:</p>
          <ul>
            <li>
              <strong>Right of Access:</strong> Request what data we hold about
              you
            </li>
            <li>
              <strong>Right to Rectification:</strong> Correct inaccurate data
            </li>
            <li>
              <strong>Right to Erasure (Right to be Forgotten):</strong> Delete
              your personal data
            </li>
            <li>
              <strong>Right to Restrict Processing:</strong> Limit how we use
              your data
            </li>
            <li>
              <strong>Right to Data Portability:</strong> Export your data in a
              standard format
            </li>
            <li>
              <strong>Right to Object:</strong> Object to certain processing
            </li>
            <li>
              <strong>Rights related to automated processing:</strong> Request
              human review of automated decisions
            </li>
          </ul>
        </div>
      </mat-expansion-panel>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <h3>Data Protection Measures</h3>
        </mat-expansion-panel-header>
        <div class="panel-content">
          <p>
            Swirlock Chain implements industry-leading security measures:
          </p>
          <ul>
            <li>
              <strong>Encryption:</strong> TLS 1.3 for data in transit
            </li>
            <li>
              <strong>Database Encryption:</strong> At-rest encryption for all
              stored data
            </li>
            <li>
              <strong>Cryptographic Signatures:</strong> Ed25519 for event
              authentication
            </li>
            <li>
              <strong>Access Control:</strong> API key and role-based access
              control
            </li>
            <li>
              <strong>Audit Logging:</strong> Complete audit trail of all
              operations
            </li>
            <li>
              <strong>Regular Security Updates:</strong> Continuous monitoring
              and patching
            </li>
          </ul>
        </div>
      </mat-expansion-panel>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <h3>Cookie Policy</h3>
        </mat-expansion-panel-header>
        <div class="panel-content">
          <p>
            Swirlock Chain uses minimal cookies for essential functionality:
          </p>
          <ul>
            <li>
              <strong>Session Cookies:</strong> Required for authenticated access
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Optional, used to improve the
              service
            </li>
          </ul>
          <p>You can disable cookies in your browser settings.</p>
        </div>
      </mat-expansion-panel>

      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <h3>Contact & Data Protection Officer</h3>
        </mat-expansion-panel-header>
        <div class="panel-content">
          <p>For privacy-related questions, please contact:</p>
          <p>
            <strong>Privacy Team</strong><br />
            Email: privacy@swirlock.com<br />
            Website: https://chain.swirlock.com
          </p>
        </div>
      </mat-expansion-panel>
    </div>
  `,
  styles: [`
    .gdpr-container {
      padding: 40px 20px;
      max-width: 1400px;
      margin: 0 auto;

      h1 {
        margin-top: 0;
      }
    }

    .intro-card {
      padding: 30px;
      margin-bottom: 30px;

      h2 {
        margin-top: 0;
      }
    }

    mat-expansion-panel {
      margin-bottom: 20px;

      h3 {
        margin: 0;
        font-size: 1.1rem;
      }
    }

    .panel-content {
      padding: 20px 0;

      ul {
        list-style-position: inside;
        padding-left: 20px;

        li {
          margin-bottom: 12px;
        }
      }
    }
  `],
})
export class GdprComponent {}
