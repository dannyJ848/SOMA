#!/usr/bin/env python3
"""
OpenStax Anatomy & Physiology Image Extractor
URL: https://openstax.org/details/books/anatomy-and-physiology-2e
License: CC BY
"""
import sys
sys.path.insert(0, '/Users/dannygomez/.openclaw/workspace/biological-self/images')

import re
import json
from bs4 import BeautifulSoup
from urllib.parse import urljoin
from utils import rate_limited_request, download_image, sanitize_filename, create_metadata, BASE_DIR

BASE_URL = "https://openstax.org"
BOOK_URL = "https://openstax.org/details/books/anatomy-and-physiology-2e"
OUTPUT_DIR = BASE_DIR / "anatomy"
LICENSE = "CC BY"
ATTRIBUTION = "OpenStax Anatomy and Physiology 2e"

def get_chapter_links():
    """Get all chapter links from the book page."""
    print(f"  Fetching book page: {BOOK_URL}")
    response = rate_limited_request(BOOK_URL)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    chapters = []
    
    # Look for chapter links
    for link in soup.find_all('a', href=True):
        href = link['href']
        text = link.get_text(strip=True)
        
        # OpenStax anatomy book chapter links typically contain 'anatomy-and-physiology'
        if 'anatomy-and-physiology' in href and ('pages' in href or 'chapter' in href):
            full_url = urljoin(BASE_URL, href)
            chapters.append({'name': text, 'url': full_url})
    
    # Also try to find TOC
    toc_links = soup.find_all('a', href=re.compile(r'(/contents/|/pages/)'))
    for link in toc_links:
        href = link['href']
        text = link.get_text(strip=True)
        if text and len(text) > 3:
            full_url = urljoin(BASE_URL, href)
            if full_url not in [c['url'] for c in chapters]:
                chapters.append({'name': text, 'url': full_url})
    
    return chapters

def extract_images_from_page(url):
    """Extract images from an OpenStax page."""
    response = rate_limited_request(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    images = []
    
    # OpenStax images are typically in figure tags
    for figure in soup.find_all('figure'):
        img = figure.find('img')
        if img:
            src = img.get('data-src') or img.get('src', '')
            alt = img.get('alt', '')
            
            # Get full URL
            if src.startswith('//'):
                src = 'https:' + src
            elif src.startswith('/'):
                src = urljoin(BASE_URL, src)
            
            # Get caption from figure
            caption = ''
            figcaption = figure.find('figcaption')
            if figcaption:
                caption = figcaption.get_text(strip=True)
            
            # Get figure number
            figure_num = ''
            title_elem = figure.find(['h3', 'h4', 'h5', 'strong', 'b'])
            if title_elem:
                figure_num = title_elem.get_text(strip=True)
            
            images.append({
                'url': src,
                'alt': alt,
                'caption': caption,
                'figure_number': figure_num
            })
    
    # Also look for standalone images
    for img in soup.find_all('img'):
        src = img.get('data-src') or img.get('src', '')
        alt = img.get('alt', '')
        
        # Skip small icons and logos
        if any(x in src.lower() for x in ['logo', 'icon', 'button', 'avatar']):
            continue
        
        if src:
            if src.startswith('//'):
                src = 'https:' + src
            elif src.startswith('/'):
                src = urljoin(BASE_URL, src)
            
            # Check if we already have this image
            if not any(i['url'] == src for i in images):
                images.append({
                    'url': src,
                    'alt': alt,
                    'caption': '',
                    'figure_number': ''
                })
    
    return images

def categorize_anatomy(caption, alt):
    """Determine anatomy category."""
    text = (caption + ' ' + alt).lower()
    
    if any(x in text for x in ['bone', 'skeleton', 'skull', 'vertebrae', 'rib cage', 'pelvis']):
        return 'skeletal'
    elif any(x in text for x in ['muscle', 'muscular', 'skeletal muscle', 'smooth muscle']):
        return 'muscular'
    elif any(x in text for x in ['heart', 'cardio', 'vascular', 'blood vessel', 'artery', 'vein']):
        return 'cardiovascular'
    elif any(x in text for x in ['brain', 'nerve', 'neuron', 'spinal cord', 'nervous']):
        return 'nervous'
    elif any(x in text for x in ['digestive', 'stomach', 'intestine', 'liver', 'pancreas', 'gastro']):
        return 'digestive'
    elif any(x in text for x in ['respiratory', 'lung', 'trachea', 'bronchus', 'breathing']):
        return 'respiratory'
    elif any(x in text for x in ['urinary', 'kidney', 'bladder', 'ureter', 'renal']):
        return 'urinary'
    elif any(x in text for x in ['reproductive', 'ovary', 'testis', 'uterus', 'prostate']):
        return 'reproductive'
    elif any(x in text for x in ['endocrine', 'thyroid', 'adrenal', 'pituitary', 'hormone']):
        return 'endocrine'
    elif any(x in text for x in ['lymphatic', 'lymph', 'spleen', 'thymus', 'immune']):
        return 'lymphatic'
    else:
        return 'general'

def main():
    print("=" * 60)
    print("OpenStax Anatomy & Physiology Extractor")
    print("=" * 60)
    
    # Get chapter links
    print("\n[1] Discovering chapters...")
    chapters = get_chapter_links()
    print(f"  Found {len(chapters)} chapters")
    
    # Extract images from each chapter
    print("\n[2] Extracting images...")
    all_images = []
    for i, chapter in enumerate(chapters[:30]):  # Limit chapters
        print(f"  [{i+1}/{min(len(chapters), 30)}] {chapter['name'][:50]}")
        try:
            images = extract_images_from_page(chapter['url'])
            for img in images:
                img['chapter'] = chapter['name']
                img['chapter_url'] = chapter['url']
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
        alt = img.get('alt', '')
        
        # Skip non-image URLs
        if not url.startswith('http'):
            continue
        
        # Determine category
        category = categorize_anatomy(caption, alt)
        
        # Create filename
        safe_name = sanitize_filename((img.get('figure_number', '') + '_' + caption[:30]) if caption else alt[:40] if alt else f"openstax_{i}")
        ext = 'jpg'
        if '.' in url.split('/')[-1]:
            ext_candidate = url.split('.')[-1].split('?')[0]
            if ext_candidate in ['jpg', 'jpeg', 'png', 'gif', 'svg']:
                ext = ext_candidate
        filename = f"openstax_{safe_name}.{ext}"
        dest_path = OUTPUT_DIR / category / filename
        
        # Create metadata
        metadata = create_metadata(
            source_url=img.get('chapter_url', url),
            license_type=LICENSE,
            attribution=ATTRIBUTION,
            caption=caption or alt,
            tags=['anatomy', category],
            chapter=img.get('chapter', ''),
            figure_number=img.get('figure_number', ''),
            original_url=url
        )
        
        # Download
        if download_image(url, str(dest_path), metadata):
            downloaded += 1
            print(f"    ✓ {filename}")
        else:
            print(f"    ✗ {filename}")
    
    print(f"\n[4] Downloaded {downloaded}/{len(all_images)} images")
    print(f"    Location: {OUTPUT_DIR}")
    
    # Save index
    index_path = OUTPUT_DIR / 'openstax_index.json'
    with open(index_path, 'w') as f:
        json.dump({
            'source': 'OpenStax Anatomy and Physiology 2e',
            'url': BOOK_URL,
            'license': LICENSE,
            'total_images': len(all_images),
            'downloaded': downloaded,
            'images': all_images
        }, f, indent=2)
    print(f"    Index saved: {index_path}")

if __name__ == '__main__':
    main()
