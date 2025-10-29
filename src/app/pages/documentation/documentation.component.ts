import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-documentation',
  standalone: true,
  imports: [MatCardModule, MatTabsModule],
  template: `
    <div class="documentation-container">
      <h1>API Documentation & Integration Guide</h1>

      <mat-tab-group>
        <mat-tab label="Getting Started">
          <div class="tab-content">
            <h2>Getting Started with Swirlock Chain</h2>
            <p>
              This guide will help you integrate Swirlock Chain with your IDP.
            </p>
            <h3>Prerequisites</h3>
            <ul>
              <li>Registered client account</li>
              <li>API key for authentication</li>
              <li>HTTPS connectivity</li>
            </ul>
          </div>
        </mat-tab>

        <mat-tab label="API Reference">
          <div class="tab-content">
            <h2>REST API Endpoints</h2>
            <p>Coming soon: Complete API reference with examples</p>
          </div>
        </mat-tab>

        <mat-tab label="Integration Examples">
          <div class="tab-content">
            <h2>Integration Examples</h2>
            <p>Coming soon: Code samples in multiple languages</p>
          </div>
        </mat-tab>

        <mat-tab label="Best Practices">
          <div class="tab-content">
            <h2>Best Practices</h2>
            <p>Coming soon: Best practices for integrating with the chain</p>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    .documentation-container {
      padding: 40px 20px;
      max-width: 1400px;
      margin: 0 auto;

      h1 {
        margin-top: 0;
      }
    }

    .tab-content {
      padding: 30px 20px;

      h2 {
        margin-top: 0;
      }
    }

    ul {
      list-style-position: inside;
    }
  `],
})
export class DocumentationComponent {}
