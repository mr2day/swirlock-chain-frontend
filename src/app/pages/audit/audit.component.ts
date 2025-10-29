import { Component } from '@angular/core';
import { BlockchainExplorerComponent } from './blockchain-explorer.component';

@Component({
  selector: 'app-audit',
  standalone: true,
  imports: [BlockchainExplorerComponent],
  template: `<app-blockchain-explorer></app-blockchain-explorer>`,
})
export class AuditComponent {}
