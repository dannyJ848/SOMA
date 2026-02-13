#!/usr/bin/env python3
"""
WebPath (University of Utah) Image Extractor
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
ATTRIBUTION = "WebPath®, Mercer University School of Medicine, Savannah, Georgia"

# Known WebPath sections
WEBPATH_SECTIONS = [
    '/ curriculum.html',
    '/GIHTML/GITOC.html',
    '/RENALHTML/RENTOC.html',
    '/HEMEHTML/HEMETOC.html',
    '/DERMHTML/DERMTOC.html',
    '/ENDOHTML/ENDOTOC.html',
    '/NEUROHTML/NEUROTOC.html',
    '/BREASTHTML/BREASTTOC.html',
    '/GYNHTML/GYNTOC.html',
    '/BONEHTML/BONETOC.html',
    '/CVHTML/CVTOC.html',
    '/PULMHTML/PULMTOC.html',
    '/EXAM/exam.html',
]

def discover_pages():
    """Discover all case and image pages."""
    all_pages = []
    
    for section in WEBPATH_SECTIONS:
        url = urljoin(BASE_URL, section)
        print(f"  Scanning: {url}")
        try:
            response = rate_limited_request(url)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Find all links to case pages
            for link in soup.find_all('a', href=True):
                href = link['href']
                text = link.get_text(strip=True)
                
                # Look for case/image pages
                if any(x in href.lower() for x in ['.html', '.htm', 'case', 'image']):
                    full_url = urljoin(url, href)
                    all_pages.append({
                        'name': text,
                        'url': full_url,
                        'section': section.split('/')[-1].replace('TOC.html', '').replace('.html', '')
                    })
        except Exception as e:
            print(f"    Error scanning {url}: {e}")
    
    return all_pages

def extract_images_from_page(url):
    """Extract images from a WebPath page."""
    response = rate_limited_request(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    images = []
    
    for img in soup.find_all('img'):
        src = img.get('src', '')
        alt = img.get('alt', '')
        
        # Skip navigation and small icons
        if any(x in src.lower() for x in ['icon', 'logo', 'button', 'nav', 'bullet', 'spacer']):
            continue
        
        # Get full URL
        full_url = urljoin(url, src)
        
        # Try to find high-res version through parent link
        parent = img.find_parent('a')
        if parent and parent.get('href'):
            link_href = parent['href']
            if any(x in link_href.lower() for x in ['.jpg', '.jpeg', '.png', '.gif']):
                full_url = urljoin(url, link_href)
        
        # Get caption from surrounding text
        caption = alt
        if not caption:
            # Look for figure caption
            fig = img.find_parent('figure') or img.find_parent('center') or img.find_parent('p')
            if fig:
                caption_elem = fig.find_next_sibling() or fig.find('figcaption')
                if caption_elem:
                    caption = caption_elem.get_text(strip=True)
        
        # Get context from page text
        if not caption:
            # Look for nearby bold/strong text
            for elem in img.find_all_previous(['b', 'strong', 'h1', 'h2', 'h3'], limit=3):
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

def categorize_pathology(caption, section):
    """Determine pathology category."""
    text = (caption + ' ' + section).lower()
    
    if any(x in text for x in ['cardio', 'heart', 'vascular', 'blood vessel', 'artery', 'vein']):
        return 'cardiovascular'
    elif any(x in text for x in ['pulm', 'lung', 'respiratory', 'breath', 'airway']):
        return 'respiratory'
    elif any(x in text for x in ['gi', 'gastro', 'intestine', 'colon', 'stomach', 'liver', 'pancreas', 'esophagus']):
        return 'gastrointestinal'
    elif any(x in text for x in ['derm', 'skin', 'melanoma', 'epidermis']):
        return 'dermatology'
    elif any(x in text for x in ['renal', 'kidney', 'urinary', 'bladder', 'nephro']):
        return 'genitourinary'
    elif any(x in text for x in ['heme', 'blood', 'leukemia', 'lymphoma', 'anemia', 'bone marrow']):
        return 'hematology'
    elif any(x in text for x in ['neuro', 'brain', 'nerve', 'spinal', 'cns']):
        return 'neurological'
    elif any(x in text for x in ['bone', 'joint', 'muscle', 'sarcoma', 'ortho']):
        return 'musculoskeletal'
    elif any(x in text for x in ['gyn', 'female', 'ovary', 'uterus', 'cervix']):
        return 'gynecological'
    elif any(x in text for x in ['breast', 'mammary']):
        return 'breast'
    elif any(x in text for x in ['endo', 'thyroid', 'adrenal', 'pituitary']):
        return 'endocrine'
    else:
        return 'general'

def main():
    print("=" * 60)
    print("WebPath (University of Utah) Extractor")
    print("=" * 60)
    
    # Discover pages
    print("\n[1] Discovering pages...")
    pages = discover_pages()
    print(f"  Found {len(pages)} pages")
    
    # Extract images from each page
    print("\n[2] Extracting images...")
    all_images = []
    for i, page in enumerate(pages[:50]):  # Limit to first 50 pages initially
        print(f"  [{i+1}/{min(len(pages), 50)}] {page['name'][:50]}")
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
    for i, img in enumerate(all_images):
        url = img['url']
        caption = img.get('caption', '')
        section = img.get('section', '')
        
        # Skip non-images
        if not any(x in url.lower() for x in ['.jpg', '.jpeg', '.png', '.gif']):
            continue
        
        # Determine category
        category = categorize_pathology(caption, section)
        
        # Create filename
        safe_name = sanitize_filename((section + '_' + caption[:30]) if caption else f"webpath_{i}")
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
            tags=['pathology', category, section],
            section=section,
            original_url=url
        )
        
        # Download
        if download_image(url, str(dest_path), metadata):
            downloaded += 1
            print(f"    ✓ {filename}")
    
    print(f"\n[4] Downloaded {downloaded}/{len(all_images)} images")
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
            'images': all_images
        }, f, indent=2)
    print(f"    Index saved: {index_path}")

if __name__ == '__main__':
    main()
