#!/usr/bin/env python3
"""
WebPath (University of Utah) Image Extractor - Revised
URL: https://webpath.med.utah.edu/
License: Educational use (requires attribution)
"""
import sys
sys.path.insert(0, '/Users/dannygomez/.openclaw/workspace/biological-self/images')

import re
import json
from bs4 import BeautifulSoup
from urllib.parse import urljoin
from utils import rate_limited_request, download_image, sanitize_filename, create_metadata, BASE_DIR

BASE_URL = "https://webpath.med.utah.edu"
OUTPUT_DIR = BASE_DIR / "pathology"
LICENSE = "Educational Use - Attribution Required"
ATTRIBUTION = "WebPath®, Edward C. Klatt MD, Mercer University School of Medicine"

# Main sections based on actual website structure
MAIN_PAGES = [
    '/GENERAL.html',
    '/ORGAN.html',
    '/HISTHTML/HISTO.html',
    '/EXAM/EXAMIDX.html',
    '/LABS/LABMENU.html',
    '/TUTORIAL/TUTORIAL.html',
]

def discover_pages():
    """Discover all case pages from the main sections."""
    all_pages = []
    
    for page in MAIN_PAGES:
        url = f"{BASE_URL}{page}"
        print(f"  Scanning: {url}")
        try:
            response = rate_limited_request(url)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Find all links
            for link in soup.find_all('a', href=True):
                href = link['href']
                text = link.get_text(strip=True)
                
                # Skip navigation/empty links
                if not text or len(text) < 2:
                    continue
                    
                # Look for HTML pages (not images)
                if href.endswith('.html') or href.endswith('.htm'):
                    full_url = urljoin(url, href)
                    # Skip self-links
                    if full_url != url:
                        all_pages.append({
                            'name': text,
                            'url': full_url,
                            'section': page.split('/')[-1].replace('.html', '')
                        })
        except Exception as e:
            print(f"    Error scanning {url}: {e}")
    
    # Remove duplicates
    seen = set()
    unique_pages = []
    for p in all_pages:
        if p['url'] not in seen:
            seen.add(p['url'])
            unique_pages.append(p)
    
    return unique_pages

def extract_images_from_page(url):
    """Extract images from a WebPath page."""
    response = rate_limited_request(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    images = []
    
    for img in soup.find_all('img'):
        src = img.get('src', '')
        alt = img.get('alt', '')
        
        # Skip navigation, icons, and small images
        skip_patterns = ['icon', 'logo', 'button', 'nav', 'spacer', 'banner', 'menu', 'gif']
        if any(x in src.lower() for x in skip_patterns):
            continue
        
        # Skip very small images (likely icons)
        width = img.get('width', '')
        height = img.get('height', '')
        if width and height:
            try:
                if int(width.replace('px', '')) < 50 or int(height.replace('px', '')) < 50:
                    continue
            except:
                pass
        
        # Get full URL
        full_url = urljoin(url, src)
        
        # Get caption - look for nearby text
        caption = alt
        if not caption:
            # Look for text after the image
            parent = img.find_parent(['p', 'td', 'div'])
            if parent:
                text = parent.get_text(strip=True)
                if text and len(text) < 500:
                    caption = text
        
        # Look for bold text before the image
        if not caption:
            for elem in img.find_all_previous(['b', 'strong'], limit=2):
                text = elem.get_text(strip=True)
                if text and len(text) < 200:
                    caption = text
                    break
        
        images.append({
            'url': full_url,
            'caption': caption[:200] if caption else '',
            'alt': alt
        })
    
    return images

def categorize_pathology(url, caption):
    """Determine pathology category from URL and caption."""
    text = (url + ' ' + caption).lower()
    
    if any(x in text for x in ['cvhtml', 'cardio', 'heart', 'vascular']):
        return 'cardiovascular'
    elif any(x in text for x in ['pulmhtml', 'lung', 'respira']):
        return 'respiratory'
    elif any(x in text for x in ['gihtml', 'gastro', 'intestine', 'colon', 'stomach', 'liver']):
        return 'gastrointestinal'
    elif any(x in text for x in ['dermhtml', 'skin', 'melanoma']):
        return 'dermatology'
    elif any(x in text for x in ['renalhtml', 'kidney', 'urinary', 'bladder']):
        return 'genitourinary'
    elif any(x in text for x in ['hemehtml', 'blood', 'leukemia', 'lymphoma', 'bone marrow']):
        return 'hematology'
    elif any(x in text for x in ['neurohtml', 'brain', 'nerve', 'cns']):
        return 'neurological'
    elif any(x in text for x in ['bonehtml', 'soft tissue', 'sarcoma']):
        return 'musculoskeletal'
    elif any(x in text for x in ['gynhtml', 'female', 'ovary', 'uterus']):
        return 'gynecological'
    elif any(x in text for x in ['breasthtml', 'mammary']):
        return 'breast'
    elif any(x in text for x in ['endohtml', 'thyroid', 'adrenal']):
        return 'endocrine'
    elif any(x in text for x in ['histhtml', 'histology']):
        return 'histology'
    else:
        return 'general'

def main():
    print("=" * 60)
    print("WebPath (University of Utah) Extractor - Revised")
    print("=" * 60)
    
    # Discover pages
    print("\n[1] Discovering pages...")
    pages = discover_pages()
    print(f"  Found {len(pages)} unique pages")
    
    # Limit pages for testing
    pages = pages[:100]
    
    # Extract images from each page
    print("\n[2] Extracting images...")
    all_images = []
    for i, page in enumerate(pages):
        if i % 10 == 0:
            print(f"  [{i+1}/{len(pages)}] {page['name'][:50]}...")
        try:
            images = extract_images_from_page(page['url'])
            for img in images:
                img['page_name'] = page['name']
                img['page_url'] = page['url']
                img['section'] = page['section']
            all_images.extend(images)
        except Exception as e:
            print(f"    Error: {e}")
    
    print(f"\n  Total images found: {len(all_images)}")
    
    # Download images
    print("\n[3] Downloading images...")
    downloaded = 0
    skipped = 0
    
    for i, img in enumerate(all_images):
        url = img['url']
        caption = img.get('caption', '')
        
        # Skip navigation images
        if any(x in url.lower() for x in ['gifs/', 'button', 'menu', 'icon']):
            skipped += 1
            continue
        
        # Only download actual image files
        if not any(x in url.lower() for x in ['.jpg', '.jpeg', '.png', '.gif']):
            skipped += 1
            continue
        
        # Determine category
        category = categorize_pathology(img.get('page_url', ''), caption)
        
        # Create filename
        safe_name = sanitize_filename(caption[:40] if caption else f"webpath_{i}")
        ext = url.split('.')[-1].split('?')[0]
        if ext not in ['jpg', 'jpeg', 'png', 'gif']:
            ext = 'jpg'
        filename = f"webpath_{safe_name}.{ext}"
        dest_path = OUTPUT_DIR / category / filename
        
        # Create metadata
        metadata = create_metadata(
            source_url=img.get('page_url', url),
            license_type=LICENSE,
            attribution=ATTRIBUTION,
            caption=caption,
            tags=['pathology', category],
            section=img.get('section', ''),
            original_url=url
        )
        
        # Download
        if download_image(url, str(dest_path), metadata):
            downloaded += 1
            if downloaded % 10 == 0:
                print(f"    Downloaded {downloaded}...")
    
    print(f"\n[4] Downloaded {downloaded} images (skipped {skipped})")
    print(f"    Location: {OUTPUT_DIR}")
    
    # Save index
    index_path = OUTPUT_DIR / 'webpath_index.json'
    with open(index_path, 'w') as f:
        json.dump({
            'source': 'WebPath (University of Utah)',
            'url': BASE_URL,
            'license': LICENSE,
            'total_images': len(all_images),
            'downloaded': downloaded,
            'skipped': skipped,
            'images': all_images
        }, f, indent=2)
    print(f"    Index saved: {index_path}")

if __name__ == '__main__':
    main()
