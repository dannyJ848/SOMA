# Medical Image Extraction Report

## Date: 2026-02-07

## Summary

This project extracted open-source medical images from various educational sources.
Due to website availability and structure changes, not all sources could be fully accessed.

## Successfully Extracted Images

### Wikimedia Commons Anatomy
- **Source**: https://commons.wikimedia.org/wiki/Category:Human_anatomy
- **License**: CC BY-SA / Public Domain
- **Images Downloaded**: 5 (partial extraction)
- **Location**: `biological-self/images/anatomy/general/`
- **Status**: API accessible, extraction functional but slow due to rate limiting

### WebPath (Partial)
- **Source**: https://webpath.med.utah.edu/
- **License**: Educational Use (attribution required)
- **Images Downloaded**: 1 (index created)
- **Location**: `biological-self/images/pathology/general/`
- **Status**: Site structure required revision

## Sources Attempted But Not Fully Accessible

1. **University of Michigan Histology** (http://histology.medicine.umich.edu/)
   - License: CC BY-NC
   - Status: Site redirects to Dropbox for manual; virtual microscopy requires special access
   - Note: The site primarily links to SecondLook™ resources and a downloadable PDF manual

2. **UWA Blue Histology** (https://www.lab.anhb.uwa.edu.au/)
   - License: Educational
   - Status: URL not accessible (DNS resolution failed)
   - Note: Site may have moved or been restructured

3. **University of Florida Histology** (https://histology.med.ufl.edu/)
   - License: CC BY-NC-SA
   - Status: URL not accessible (DNS resolution failed)
   - Note: Site may have been moved or restructured

4. **Pathology Outlines** (https://www.pathologyoutlines.com/)
   - License: CC BY
   - Status: Site accessible but image extraction requires JavaScript rendering
   - Note: Modern React-based site requires browser automation

5. **LibreTexts Pathology** (https://med.libretexts.org/)
   - License: CC BY-NC-SA
   - Status: URL structure changed from expected format
   - Note: Main site accessible but /Bookshelves/Pathology path not found

6. **OpenStax Anatomy & Physiology** (https://openstax.org/)
   - License: CC BY
   - Status: Site accessible but requires JavaScript for content
   - Note: Modern SPA architecture

7. **Open Anatomy Project** (https://www.openanatomy.org/)
   - License: CC BY / Public Domain
   - Status: Not yet attempted (prioritized lower)

8. **Gray's Anatomy (Historical)** (https://archive.org/)
   - License: Public Domain
   - Status: Not yet attempted
   - Note: Archive.org has bulk download options available

## Directory Structure Created

```
biological-self/images/
├── anatomy/
│   ├── cardiovascular/
│   ├── digestive/
│   ├── endocrine/
│   ├── general/          ← Wikimedia images
│   ├── lymphatic/
│   ├── muscular/
│   ├── nervous/
│   ├── reproductive/
│   ├── respiratory/
│   ├── skeletal/
│   └── urinary/
├── histology/
│   ├── connective/
│   ├── epithelial/
│   ├── muscle/
│   ├── nervous/
│   └── organ-systems/
├── pathology/
│   ├── breast/
│   ├── cardiovascular/
│   ├── dermatology/
│   ├── endocrine/
│   ├── gastrointestinal/
│   ├── general/          ← WebPath image
│   ├── genitourinary/
│   ├── gynecological/
│   ├── hematology/
│   ├── musculoskeletal/
│   ├── neurological/
│   └── respiratory/
├── extractors/           ← Python extraction scripts
├── utils/               ← Shared utilities
└── README.md
```

## Extraction Scripts Created

1. `extractors/michigan_histology.py` - University of Michigan Histology
2. `extractors/uwa_histology.py` - UWA Blue Histology
3. `extractors/webpath.py` - WebPath (original)
4. `extractors/webpath_v2.py` - WebPath (revised)
5. `extractors/wikimedia_anatomy.py` - Wikimedia Commons (HTML scraping)
6. `extractors/wikimedia_api.py` - Wikimedia Commons (API)
7. `extractors/openstax_anatomy.py` - OpenStax Anatomy
8. `extractors/pathology_outlines.py` - Pathology Outlines
9. `extractors/master_extractor.py` - Coordinated extraction

## Technical Approach Used

- Python 3 with BeautifulSoup4 for HTML parsing
- Requests library with 1-second rate limiting
- JSON metadata files alongside each image
- Automatic categorization based on image content
- Error handling for network issues

## Recommendations for Future Extraction

1. **Use Browser Automation**: For JavaScript-heavy sites (OpenStax, Pathology Outlines), use Playwright or Selenium
2. **Archive.org Integration**: Gray's Anatomy images can be bulk downloaded from archive.org
3. **Contact Site Admins**: Some sites (UWA, Florida) may have moved; contacting for updated URLs
4. **API-first Approach**: Wikimedia Commons API works well for anatomy images
5. **Consider Alternative Sources**:
   - NIH Visible Human Project
   - DICOM sample datasets
   - Public health image libraries (CDC, WHO)

## Image Metadata Format

Each downloaded image has an accompanying `.json` file with:
- `source_url`: Original webpage URL
- `license`: License type
- `attribution`: Attribution text
- `caption`: Image description
- `tags`: Categorization tags
- `original_url`: Direct image URL
- `extracted_at`: Timestamp

## Current Counts

- Total images downloaded: 5
- Total metadata files: 8 (including indices)
- Sources successfully accessed: 2
- Sources attempted: 6
