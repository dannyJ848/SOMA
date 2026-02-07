# Medical Content Aggregation Plan

## Open Source Medical Textbook Sources

### 1. OpenStax (Primary Source)
**URL:** https://openstax.org/subjects/science
**License:** Creative Commons Attribution (CC BY)

**Available Books:**
- Anatomy & Physiology (2e) - 1400+ pages
- Biology 2e
- Concepts of Biology
- Microbiology

**Content Includes:**
- Detailed anatomical descriptions
- Physiological processes
- Clinical connections
- Review questions
- High-resolution diagrams

### 2. LibreTexts (Secondary Source)
**URL:** https://med.libretexts.org/
**License:** CC BY-SA, CC BY-NC

**Libraries:**
- Anatomy & Physiology
- Pathology
- Histology
- Medical Microbiology
- Immunology
- Pharmacology

### 3. NIH/NCBI Open Access
**URL:** https://www.ncbi.nlm.nih.gov/books/
**License:** Public domain, varies by book

**Key Resources:**
- Anatomy & Physiology (Boundless)
- Atlas of Human Anatomy
- Pathology textbooks
- Histology guides

### 4. Wikimedia Commons / Wikipedia
**URL:** https://commons.wikimedia.org/
**License:** CC BY-SA, Public Domain

**Content:**
- Medical illustrations
- Histology images
- Anatomical diagrams
- Pathology specimens

### 5. Wayne State University Digital Histology
**URL:** https://www.lab.anhb.uwa.edu.au/teaching/physiology/
**License:** Educational use

**Content:**
- Histology slide images
- Tissue descriptions
- Microscopic anatomy

### 6. University of Michigan Histology
**URL:** http://histology.medicine.umich.edu/
**License:** CC BY-NC

**Content:**
- Full histology course
- High-res slide images
- Clinical correlations

### 7. Stanford Pathology
**URL:** https://webpath.med.utah.edu/
**License:** Educational

**Content:**
- Pathology specimens
- Disease descriptions
- Clinical cases

## Content Structure Plan

### Phase 1: Core Anatomy (Head → Toes)
For each body region, extract:
1. **Gross Anatomy** - Structure descriptions
2. **Histology** - Tissue composition
3. **Physiology** - Function
4. **Pathology** - Common diseases
5. **Clinical** - Clinical correlations

### Phase 2: Systems Integration
- Cardiovascular system
- Respiratory system
- Digestive system
- Nervous system
- Endocrine system
- Urinary system
- Reproductive system
- Musculoskeletal system

### Phase 3: Advanced Content
- Embryology
- Neuroanatomy
- Histopathology
- Clinical procedures

## Data Schema

```typescript
interface MedicalContent {
  regionId: string;           // links to BODY_REGIONS
  systemId: string;           // links to body systems
  
  // Content by complexity level (1-6)
  content: {
    level1: ContentBlock;     // Patient-friendly
    level2: ContentBlock;     // Basic science
    level3: ContentBlock;     // Pre-clinical
    level4: ContentBlock;     // Clinical
    level5: ContentBlock;     // Advanced
    level6: ContentBlock;     // Specialist
  };
  
  // Media
  media: {
    illustrations: ImageRef[];
    histology: ImageRef[];
    pathology: ImageRef[];
    diagrams: ImageRef[];
    videos: VideoRef[];
  };
  
  // Source attribution
  sources: SourceRef[];
  
  // Relationships
  relatedRegions: string[];
  relatedModules: string[];
}

interface ContentBlock {
  title: string;
  description: string;
  keyPoints: string[];
  clinicalNotes?: string;
  anatomyPoints?: string[];
}

interface ImageRef {
  id: string;
  url: string;
  caption: string;
  source: string;
  license: string;
  attribution: string;
}
```

## Implementation Plan

### Step 1: Set Up Content Pipeline
1. Create content extraction scripts
2. Set up local storage for images
3. Create content validation system
4. Build attribution tracking

### Step 2: Extract by Region
Priority order (most clinically relevant):
1. Heart (cardiology)
2. Lungs (pulmonology)
3. Brain (neurology)
4. Liver (gastroenterology)
5. Kidneys (nephrology)
6. Skeleton (orthopedics)
7. Skin (dermatology)
8. Eyes (ophthalmology)

### Step 3: Build Content Viewer
1. Create region detail view
2. Add histology viewer
3. Add pathology comparison
4. Add clinical case studies

## File Structure

```
biological-self/
├── content/
│   ├── anatomy/
│   │   ├── head/
│   │   ├── neck/
│   │   ├── thorax/
│   │   ├── abdomen/
│   │   ├── pelvis/
│   │   ├── upper-limbs/
│   │   └── lower-limbs/
│   ├── histology/
│   │   ├── epithelial/
│   │   ├── connective/
│   │   ├── muscle/
│   │   └── nervous/
│   ├── pathology/
│   │   ├── cardiovascular/
│   │   ├── respiratory/
│   │   ├── gastrointestinal/
│   │   └── ...
│   └── sources.json
├── images/
│   ├── anatomy/
│   ├── histology/
│   └── pathology/
└── src/content/
    ├── loader.ts
    ├── registry.ts
    └── types.ts
```

## Integration Points

### Frontend
- Region click → Load content by regionId
- Complexity selector → Switch content level
- Media gallery → Show images/videos
- Related modules → Link to educational modules

### Backend
- Content API endpoints
- Image serving
- Search functionality
- User progress tracking

## Legal Considerations

All content must:
- ✅ Have CC BY, CC BY-SA, or public domain license
- ✅ Include proper attribution
- ✅ Link to original sources
- ✅ Not violate copyright
- ✅ Respect NC (non-commercial) restrictions where applicable

## Next Actions

1. Download OpenStax Anatomy & Physiology (EPUB/PDF)
2. Extract text and images by chapter
3. Map content to body regions
4. Build content loader
5. Create histology image scraper
6. Wire to frontend
