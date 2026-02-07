# Content Aggregation Infrastructure

This directory contains the infrastructure for aggregating medical educational content from open source repositories.

## Directory Structure

```
biological-self/
├── content/              # Stored content documents
│   ├── anatomy/         # Anatomy content
│   ├── histology/       # Histology content
│   ├── pathology/       # Pathology content
│   └── registry.json    # Content registry index
├── images/              # Downloaded images with attribution
├── src/
│   ├── types/          # TypeScript type definitions
│   │   └── content.ts  # Core content interfaces
│   ├── utils/          # Utility modules
│   │   ├── contentLoader.ts     # Registry & loading
│   │   └── contentExtractor.ts  # Extraction tools
│   ├── attribution/    # Source attribution
│   │   └── sources.json # Open source attributions
│   └── index.ts        # Module exports
├── package.json
└── tsconfig.json
```

## Usage

### Loading Content

```typescript
import { createContentLoader } from './src/index.js';

const loader = await createContentLoader();

// Load all anatomy content
const anatomyContent = await loader.loadByCategory('anatomy');

// Search by title
const results = await loader.search('cardiovascular');

// Get summary
const summary = await getContentSummary();
console.log(summary);
```

### Extracting Content

```typescript
import { 
  createContentBuilder,
  createImageDownloader,
  createContentValidator 
} from './src/index.js';

// Extract and build content
const builder = createContentBuilder();
const validator = createContentValidator();

const content = builder.build(rawContent, options, attribution, images);
const validation = validator.validate(content);
```

## Sources

All content must be properly attributed. See `src/attribution/sources.json` for configured sources.

### Current Sources

- **OpenStax Anatomy & Physiology** - CC BY 4.0
- **OpenStax Histology** - CC BY 4.0
- **UWA Blue Histology** - CC BY-NC 4.0
- **Pathology Outlines** - Custom (pending verification)
- **Open Anatomy Project** - CC BY 4.0

## License

This infrastructure code is MIT licensed. Content extracted from sources retains their original licenses.