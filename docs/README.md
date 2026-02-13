# The Biological Self - Complete Documentation

**Version:** 0.1.0
**Last Updated:** January 2026

---

## Overview

The Biological Self is an open-source, privacy-preserving health education application that empowers patients to build a comprehensive model of their health and receive personalized physiological education at whatever depth they choose, without their data ever leaving their device.

### Key Features

- **100% Local Processing** - All data stays on your device, encrypted with AES-256
- **Adaptive Depth Explanations** - From 8th grade to physician-level explanations
- **3D Anatomy Viewer** - Interactive exploration of human anatomy
- **AI-Powered Education** - Local LLM integration via Ollama for personalized health education
- **Multi-Source Data Import** - Support for Apple Health, Whoop, lab results, and more
- **Intent Prediction** - Smart UI that anticipates user needs

---

## Quick Start

### Prerequisites

- Node.js 18+
- Rust (for Tauri desktop app)
- Ollama (for local AI)

### Installation

```bash
# Clone the repository
git clone https://github.com/dannygomez/biological-self.git
cd biological-self

# Install dependencies
npm install

# Start development server (browser mode)
npm run dev

# Start Tauri desktop app
npm run tauri:dev
```

### Building for Production

```bash
# Build web assets
npm run build

# Build Tauri desktop app
npm run tauri:build
```

---

## Documentation Index

### For Users
- [Getting Started Guide](./user/getting-started.md)
- [Feature Overview](./user/features.md)
- [Privacy & Security](./user/privacy.md)

### For Developers
- [Architecture Overview](./architecture/README.md)
- [API Reference](./api/README.md)
- [Component Documentation](./components/README.md)
- [Content System](./content/README.md)
- [Developer Guide](./developer/README.md)

---

## Project Structure

```
biological-self/
├── src/                    # React frontend components
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── components/         # Shared UI components
│   ├── education/          # Education panel components
│   └── ai/                 # AI-related components
├── src-tauri/              # Tauri backend (Rust)
│   └── src/                # Rust source files
├── core/                   # Core TypeScript modules
│   ├── biological-self/    # User health data model
│   ├── intent-prediction/  # User intent prediction system
│   ├── anatomy/            # Anatomical system content
│   ├── physiology/         # Physiology content
│   └── ...                 # Additional modules
├── docs/                   # Documentation (this folder)
└── data/                   # Local encrypted data storage
```

---

## Technology Stack

| Component | Technology |
|-----------|------------|
| Frontend | React 19, TypeScript, Three.js (3D) |
| Desktop | Tauri 2.0 (Rust) |
| AI | Ollama (local LLM), BGE embeddings |
| Database | SQLite (encrypted) |
| Vector Store | LanceDB, ChromaDB |
| Build | Vite 7 |

---

## License

AGPL-3.0 - See [LICENSE](../LICENSE) for details.

This ensures the project remains open source and can never be privatized.
