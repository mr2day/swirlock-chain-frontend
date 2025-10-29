import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadComponent: () =>
      import('./pages/landing/landing.component').then((m) => m.LandingComponent),
  },
  {
    path: 'audit',
    loadComponent: () =>
      import('./pages/audit/audit.component').then((m) => m.AuditComponent),
  },
  {
    path: 'documentation',
    loadComponent: () =>
      import('./pages/documentation/documentation.component').then(
        (m) => m.DocumentationComponent,
      ),
  },
  {
    path: 'gdpr',
    loadComponent: () =>
      import('./pages/gdpr/gdpr.component').then((m) => m.GdprComponent),
  },
  {
    path: '**',
    redirectTo: 'landing',
  },
];
