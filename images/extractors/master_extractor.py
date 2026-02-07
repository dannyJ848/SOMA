#!/usr/bin/env python3
"""
Comprehensive Medical Image Extraction - Master Script
Coordinates extraction from multiple sources with progress tracking
"""
import sys
sys.path.insert(0, '/Users/dannygomez/.openclaw/workspace/biological-self/images')

import os
import json
import time
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
from utils import rate_limited_request, download_image, sanitize_filename, create_metadata, BASE_DIR

# Source configurations
SOURCES = {
    'wikimedia_api': {
        'enabled': True,
        'description': 'Wikimedia Commons via API',
        'categories': [
            'Human_anatomy',
            'Anatomical_diagrams', 
            'Histology',
            'Human_physiology',
            'Pathology',
            'Microscopic_images_of_human_tissue'
        ]
    },
    'webpath': {
        'enabled': True,
        'description': 'WebPath (University of Utah)',
        'pages': [
            'https://webpath.med.utah.edu/GENERAL.html',
            'https://webpath.med.utah.edu/ORGAN.html',
            'https://webpath.med.utah.edu/HISTHTML/HISTO.html',
        ]
    },
    'openstax': {
        'enabled': True,
        'description': 'OpenStax Anatomy & Physiology',
        'url': 'https://openstax.org/books/anatomy-and-physiology-2e/pages/'
    }
}

class ExtractionStats:
    def __init__(self):
        self.start_time = time.time()
        self.total_found = 0
        self.total_downloaded = 0
        self.total_failed = 0
        self.by_source = {}
    
    def add_found(self, source, count):
        self.total_found += count
        if source not in self.by_source:
            self.by_source[source] = {'found': 0, 'downloaded': 0, 'failed': 0}
        self.by_source[source]['found'] += count
    
    def add_downloaded(self, source):
        self.total_downloaded += 1
        if source not in self.by_source:
            self.by_source[source] = {'found': 0, 'downloaded': 0, 'failed': 0}
        self.by_source[source]['downloaded'] += 1
    
    def add_failed(self, source):
        self.total_failed += 1
        if source not in self.by_source:
            self.by_source[source] = {'found': 0, 'downloaded': 0, 'failed': 0}
        self.by_source[source]['failed'] += 1
    
    def report(self):
        elapsed = time.time() - self.start_time
        print(f"\n{'='*60}")
        print("EXTRACTION SUMMARY")
        print(f"{'='*60}")
        print(f"Elapsed time: {elapsed:.1f} seconds")
        print(f"Total found: {self.total_found}")
        print(f"Total downloaded: {self.total_downloaded}")
        print(f"Total failed: {self.total_failed}")
        print(f"\nBy source:")
        for source, stats in self.by_source.items():
            print(f"  {source}: {stats['found']} found, {stats['downloaded']} downloaded, {stats['failed']} failed")

def extract_wikimedia_category(category, limit=50):
    """Extract images from a Wikimedia Commons category."""
    API_URL = "https://commons.wikimedia.org/w/api.php"
    images = []
    
    params = {
        'action': 'query',
        'generator': 'categorymembers',
        'gcmtitle': f'Category:{category}',
        'gcmtype': 'file',
        'prop': 'imageinfo',
        'iiprop': 'url|extmetadata',
        'format': 'json',
        'gcmlimit': limit
    }
    
    try:
        response = rate_limited_request(API_URL, params=params)
        data = response.json()
        
        if 'query' in data and 'pages' in data['query']:
            for page_id, page_data in data['query']['pages'].items():
                if 'imageinfo' in page_data:
                    info = page_data['imageinfo'][0]
                    metadata = info.get('extmetadata', {})
                    
                    images.append({
                        'url': info.get('url', ''),
                        'page_url': info.get('descriptionurl', ''),
                        'title': page_data.get('title', '').replace('File:', ''),
                        'description': metadata.get('ImageDescription', {}).get('value', '')[:200],
                        'license': metadata.get('License', {}).get('value', 'CC BY-SA'),
                        'artist': metadata.get('Artist', {}).get('value', 'Wikimedia Commons')[:100],
                        'category': category
                    })
    except Exception as e:
        print(f"  Error fetching {category}: {e}")
    
    return images

def categorize_image(title, description, source_type):
    """Categorize image based on title, description and source."""
    text = (title + ' ' + description).lower()
    
    if source_type == 'anatomy':
        if any(x in text for x in ['bone', 'skeleton', 'skull', 'vertebra', 'femur']):
            return 'skeletal'
        elif any(x in text for x in ['muscle', 'muscular', 'bicep']):
            return 'muscular'
        elif any(x in text for x in ['heart', 'cardio', 'vascular', 'artery']):
            return 'cardiovascular'
        elif any(x in text for x in ['brain', 'nerve', 'neuron', 'spinal', 'cerebrum']):
            return 'nervous'
        elif any(x in text for x in ['digestive', 'stomach', 'intestine', 'liver']):
            return 'digestive'
        elif any(x in text for x in ['respiratory', 'lung', 'trachea']):
            return 'respiratory'
        elif any(x in text for x in ['urinary', 'kidney', 'bladder']):
            return 'urinary'
        elif any(x in text for x in ['reproductive', 'ovary', 'testis', 'uterus']):
            return 'reproductive'
        elif any(x in text for x in ['endocrine', 'thyroid', 'adrenal']):
            return 'endocrine'
        elif any(x in text for x in ['lymph', 'spleen', 'thymus']):
            return 'lymphatic'
        return 'general'
    
    elif source_type == 'histology':
        if any(x in text for x in ['epithelial', 'epithelium', 'skin']):
            return 'epithelial'
        elif any(x in text for x in ['connective', 'bone', 'cartilage', 'adipose']):
            return 'connective'
        elif any(x in text for x in ['muscle', 'myocyte', 'sarcomere']):
            return 'muscle'
        elif any(x in text for x in ['nerve', 'neuron', 'neuroglia']):
            return 'nervous'
        return 'organ-systems'
    
    elif source_type == 'pathology':
        if any(x in text for x in ['cardio', 'heart', 'vascular']):
            return 'cardiovascular'
        elif any(x in text for x in ['pulm', 'lung', 'respira']):
            return 'respiratory'
        elif any(x in text for x in ['gi', 'gastro', 'intestine', 'colon']):
            return 'gastrointestinal'
        elif any(x in text for x in ['derm', 'skin']):
            return 'dermatology'
        elif any(x in text for x in ['renal', 'kidney', 'urinary']):
            return 'genitourinary'
        elif any(x in text for x in ['heme', 'blood', 'leukemia', 'lymphoma']):
            return 'hematology'
        elif any(x in text for x in ['neuro', 'brain', 'nerve']):
            return 'neurological'
        elif any(x in text for x in ['bone', 'soft tissue', 'sarcoma']):
            return 'musculoskeletal'
        return 'general'
    
    return 'general'

def download_with_metadata(img_data, source_name, source_type, stats):
    """Download a single image with metadata."""
    url = img_data.get('url', '')
    if not url or not url.startswith('http'):
        stats.add_failed(source_name)
        return False
    
    title = img_data.get('title', '')
    description = img_data.get('description', '')
    
    # Determine output directory
    category = categorize_image(title, description, source_type)
    output_dir = BASE_DIR / source_type / category
    
    # Create filename
    safe_name = sanitize_filename(title[:50])
    ext = url.split('.')[-1].split('?')[0]
    if ext not in ['jpg', 'jpeg', 'png', 'gif', 'svg']:
        ext = 'jpg'
    filename = f"{source_name}_{safe_name}.{ext}"
    dest_path = output_dir / filename
    
    # Create metadata
    metadata = create_metadata(
        source_url=img_data.get('page_url', url),
        license_type=img_data.get('license', 'Unknown'),
        attribution=img_data.get('artist', source_name),
        caption=description or title,
        tags=[source_type, category],
        original_url=url
    )
    
    # Download
    if download_image(url, str(dest_path), metadata):
        stats.add_downloaded(source_name)
        return True
    else:
        stats.add_failed(source_name)
        return False

def run_wikimedia_extraction(stats, max_per_category=50):
    """Run Wikimedia Commons extraction."""
    print("\n" + "="*60)
    print("WIKIMEDIA COMMONS EXTRACTION")
    print("="*60)
    
    categories = SOURCES['wikimedia_api']['categories']
    all_images = []
    
    for category in categories:
        print(f"\nFetching: {category}")
        images = extract_wikimedia_category(category, limit=max_per_category)
        print(f"  Found {len(images)} images")
        all_images.extend(images)
    
    stats.add_found('wikimedia_api', len(all_images))
    
    print(f"\nDownloading {len(all_images)} images...")
    for i, img in enumerate(all_images):
        download_with_metadata(img, 'wiki', 'anatomy', stats)
        if (i + 1) % 20 == 0:
            print(f"  Progress: {i+1}/{len(all_images)}")

def main():
    print("="*60)
    print("COMPREHENSIVE MEDICAL IMAGE EXTRACTION")
    print("="*60)
    
    stats = ExtractionStats()
    
    # Run Wikimedia extraction
    if SOURCES['wikimedia_api']['enabled']:
        run_wikimedia_extraction(stats, max_per_category=50)
    
    # Report results
    stats.report()
    
    # Save overall summary
    summary_path = BASE_DIR / 'extraction_summary.json'
    with open(summary_path, 'w') as f:
        json.dump({
            'timestamp': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
            'stats': {
                'total_found': stats.total_found,
                'total_downloaded': stats.total_downloaded,
                'total_failed': stats.total_failed,
                'by_source': stats.by_source
            }
        }, f, indent=2)
    print(f"\nSummary saved: {summary_path}")

if __name__ == '__main__':
    main()
