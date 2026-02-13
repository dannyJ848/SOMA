# Medical Image Extraction Scripts

This directory contains Python scripts for extracting open-source medical images from various educational sources.

## Directory Structure
- `extractors/` - Individual extractor scripts for each source
- `utils/` - Shared utilities for downloading, metadata handling
- `data/` - Metadata JSON files

## Usage
Each extractor can be run independently:
```bash
python extractors/michigan_histology.py
python extractors/uwa_blue_histology.py
```

## Rate Limiting
All scripts respect a 1-second delay between requests.

## Sources
1. University of Michigan Histology (CC BY-NC)
2. UWA Blue Histology (Educational)
3. University of Florida Histology (CC BY-NC-SA)
4. Pathology Outlines (CC BY)
5. WebPath (Educational)
6. LibreTexts Pathology (CC BY-NC-SA)
7. OpenStax Anatomy (CC BY)
8. Open Anatomy Project (CC BY/PD)
9. Wikimedia Commons (CC BY-SA/PD)
10. Gray's Anatomy (Public Domain)
