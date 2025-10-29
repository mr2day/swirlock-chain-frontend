import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar color="accent">
      <div class="footer-content">
        <p>&copy; 2024 Swirlock Chain. All rights reserved.</p>
        <p>
          <a href="https://chain.swirlock.com" target="_blank">
            chain.swirlock.com
          </a>
        </p>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar {
      display: flex;
      justify-content: center;
      margin-top: auto;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1400px;
      padding: 0 20px;
      gap: 40px;
    }

    p {
      margin: 0;
      font-size: 0.875rem;
    }

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `],
})
export class FooterComponent {}
