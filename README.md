# Swirlock Chain Frontend

An Angular 20 frontend application for the Swirlock Chain blockchain, providing a user interface for identity management, blockchain exploration, and audit trail verification.

## Overview

Swirlock Chain is a Proof-of-Authority blockchain designed for passwordless identity management. This frontend provides:

- **Landing Page**: Real-time blockchain statistics and visualization
- **Audit Page**: Comprehensive blockchain explorer for full chain verification
- **GDPR Page**: Information about data privacy and the "right to be forgotten"
- **Documentation Page**: Technical documentation about identity events and blockchain operations

## Features

### 🔐 Identity Management
- View identity creation and management events
- Track credential lifecycle (added, rotated, revoked)
- Verify credential operations through cryptographic signatures

### 🔍 Blockchain Explorer
Search by identity hash to view complete audit trails with:
- Human-readable event explanations
- Cryptographic hash verification
- Event timestamps and metadata
- Expandable event panels with full details

### 📊 Statistics & Monitoring
- Real-time block height and chain statistics
- Total identities and events on the blockchain
- Event type breakdown and distribution
- Current block header information (hash, merkle root, timestamp)

### 🛡️ Security Features
- Ed25519 digital signature verification
- Merkle tree commitment to all transactions
- Immutable blockchain records
- GDPR-compliant data deletion architecture

## Technology Stack

- **Framework**: Angular 20 (Standalone Components)
- **Styling**: SCSS with component-scoped styles
- **UI Library**: Angular Material Design
- **HTTP Client**: Angular HttpClient for API communication
- **Language**: TypeScript with strict type checking
- **Build**: Angular CLI with production optimization

## Project Structure

```
src/
├── app/
│   ├── layout/                 # Shared layout components
│   │   ├── header.component.*
│   │   └── footer.component.*
│   ├── pages/                  # Page components
│   │   ├── landing/           # Landing page with blockchain timeline
│   │   ├── audit/             # Audit page with blockchain explorer
│   │   ├── documentation/     # Technical documentation
│   │   └── gdpr/              # Privacy and data deletion info
│   ├── services/              # API and business logic
│   │   └── chain-api.service.ts
│   ├── app.routes.ts          # Route configuration
│   └── app.component.*        # Root component
├── styles/                    # Global styles
└── assets/                    # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Angular CLI 20+

### Installation

```bash
# Clone the repository
git clone https://github.com/mr2day/swirlock-chain-frontend.git
cd swirlock-chain-frontend

# Install dependencies
npm install
```

### Development Server

Start the development server:

```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload whenever you modify source files.

### Building for Production

```bash
npm run build
```

Build artifacts are stored in the `dist/` directory with production optimization enabled.

## API Integration

The frontend communicates with the Swirlock Chain backend deployed on Google Cloud Run:

**Base URL**: `https://swirlock-chain-backend-604848171249.europe-west1.run.app`

### Endpoints Used

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/chain/head` | GET | Get current blockchain head |
| `/chain/health` | GET | Health check |
| `/identity/stats` | GET | Get blockchain statistics |
| `/identity/{hash}/events` | GET | Get all events for an identity |

### Response Types

```typescript
interface BlockHeader {
  height: number;
  hash: string;
  prevHash: string;
  timestamp: number;
  merkleRoot: string;
}

interface IdentityStats {
  totalIdentities: number;
  totalEvents: number;
  eventTypeCounts: Record<string, number>;
}

interface IdentityEventsResponse {
  identityHash: string;
  eventCount: number;
  events: IdentityEvent[];
}

interface IdentityEvent {
  eventType: string;
  version: number;
  timestamp: number;
  currentHash: string;
  previousHash?: string;
  metadata?: any;
}
```

## Identity Event Types

The blockchain tracks five types of identity events:

| Event Type | Description |
|------------|-------------|
| `IDENTITY_CREATED` | A new identity was registered on the blockchain |
| `CREDENTIAL_ADDED` | A new credential (passkey, biometric) was added |
| `CREDENTIAL_ROTATED` | An existing credential was rotated for security |
| `CREDENTIAL_REVOKED` | A credential was revoked or disabled |
| `IDENTITY_DELETED` | Identity deleted from database (GDPR right to be forgotten) |

## Pages

### Landing Page (`/`)
- Real-time blockchain timeline with current statistics
- Feature cards linking to other pages (documentation, GDPR, audit)
- Block header information and identity statistics
- Responsive design for mobile and desktop

### Audit Page (`/audit`)
- Comprehensive blockchain explorer
- Search functionality for identity hashes
- Event details with expandable panels
- Chain overview showing current block information
- Statistics breakdown by event type
- Human-readable explanations for all blockchain data

### Documentation Page (`/documentation`)
- Technical overview of Swirlock Chain
- Explanation of Proof-of-Authority consensus
- Identity event system documentation
- Credential management workflows
- GDPR architecture details

### GDPR Page (`/gdpr`)
- Privacy policy and data handling practices
- Right to be forgotten implementation
- Blockchain immutability explanation
- One-way deletion architecture
- User data request procedures

## Development Guidelines

### Component Structure

All components use external templates and SCSS files:

```typescript
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
  standalone: true,
  imports: [CommonModule, MaterialModules, ...],
})
export class ExampleComponent {}
```

### Styling

- Use component-scoped SCSS for all styles
- Follow Material Design guidelines
- Implement responsive design with mobile breakpoints
- Avoid inline styles

### API Communication

Use the `ChainApiService` for all backend communication:

```typescript
constructor(private chainApiService: ChainApiService) {}

getBlockHead() {
  this.chainApiService.getChainHead().subscribe({
    next: (data) => { /* handle data */ },
    error: (error) => { /* handle error */ },
  });
}
```

## Deployment

The frontend can be deployed to any static hosting service:

### Google Cloud Storage + Cloud CDN
1. Build: `npm run build`
2. Upload `dist/` contents to Cloud Storage bucket
3. Configure Cloud CDN for caching and distribution

### Vercel / Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist/swirlock-chain-frontend`

## Troubleshooting

### Build Errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Angular cache: `ng cache clean`
- Check Node version: `node --version` (requires 18+)

### API Connection Issues
- Verify backend is running on Cloud Run
- Check network connectivity and CORS headers
- Review browser console for detailed error messages
- Ensure API key is properly configured on backend

### Styling Issues
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Verify SCSS compilation with `npm run build`
- Check Material theme is properly imported

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make changes following the development guidelines
3. Test thoroughly on desktop and mobile
4. Commit with descriptive messages
5. Push to GitHub and create a pull request

## License

© 2025 Swirlock Engineering. All rights reserved.

## Related Projects

- **Swirlock Chain Backend**: NestJS backend with blockchain implementation
  - Repository: [swirlock-chain-backend](https://github.com/mr2day/swirlock-chain-backend)
- **Swirlock IDP**: Passwordless identity provider
  - Repository: [swirlock-idp-backend](https://github.com/mr2day/swirlock-idp-backend)

## Support

For issues, questions, or feature requests, please open an issue on GitHub.

---

**Latest Update**: Blockchain explorer implementation with full chain verification capabilities
