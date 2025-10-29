import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <div class="toolbar-content">
        <div class="logo">
          <h1>Swirlock Chain</h1>
        </div>

        <nav class="nav-links">
          <a
            mat-button
            routerLink="/landing"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            Landing
          </a>
          <a
            mat-button
            routerLink="/audit"
            routerLinkActive="active"
          >
            Audit
          </a>
          <a
            mat-button
            routerLink="/documentation"
            routerLinkActive="active"
          >
            Documentation
          </a>
          <a
            mat-button
            routerLink="/gdpr"
            routerLinkActive="active"
          >
            GDPR & Privacy
          </a>
        </nav>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar {
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .toolbar-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .logo h1 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 500;
    }

    .nav-links {
      display: flex;
      gap: 20px;
      align-items: center;
    }

    a[mat-button] {
      text-transform: uppercase;
      font-size: 0.875rem;
      font-weight: 500;
    }

    a.active {
      border-bottom: 2px solid white;
      border-radius: 0;
    }
  `],
})
export class HeaderComponent {}
