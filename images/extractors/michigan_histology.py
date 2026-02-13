#!/usr/bin/env python3
"""
University of Michigan Histology Image Extractor
URL: http://histology.medicine.umich.edu/
License: CC BY-NC (Attribution-NonCommercial)
"""
import sys
sys.path.insert(0, '/Users/dannygomez/.openclaw/workspace/biological-self/images')

import re
import json
from bs4 import BeautifulSoup
from utils import rate_limited_request, download_image, sanitize_filename, create_metadata, BASE_DIR

BASE_URL = "http://histology.medicine.umich.edu"
OUTPUT_DIR = BASE_DIR / "histology"
LICENSE = "CC BY-NC"
ATTRIBUTION = "University of Michigan Medical School, Histology and Virtual Microscopy Learning Resources"

def get_main_categories():
    """Get list of main histology categories."""
    response = rate_limited_request(BASE_URL)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    categories = []
    # Look for navigation/menu items
    for link in soup.find_all('a', href=True):
        href = link['href']
        if '/histology/' in href or 'slide' in href.lower():
            full_url = href if href.startswith('http') else f"{BASE_URL}{href}"
            text = link.get_text(strip=True)
            if text and len(text) > 2:
                categories.append({'name': text, 'url': full_url})
    
    return categories

def extract_slides_from_page(url):
    """Extract slide images from a category page."""
    print(f"  Fetching: {url}")
    response = rate_limited_request(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    slides = []
    
    # Look for image tags with slide-related patterns
    for img in soup.find_all('img'):
        src = img.get('src', '')
        alt = img.get('alt', '')
        
        # Skip icons and small images
        if any(x in src.lower() for x in ['icon', 'logo', 'button', 'nav']):
            continue
        
        # Look for full-size image links
        parent = img.find_parent('a')
        if parent and parent.get('href'):
            full_url = parent['href']
            if not full_url.startswith('http'):
                full_url = f"{BASE_URL}{full_url}" if full_url.startswith('/') else f"{BASE_URL}/{full_url}"
        else:
            # Use src directly
            full_url = src if src.startswith('http') else f"{BASE_URL}{src}" if src.startswith('/') else f"{BASE_URL}/{src}"
        
        if full_url and ('.jpg' in full_url.lower() or '.jpeg' in full_url.lower() or '.png' in full_url.lower()):
            slides.append({
                'url': full_url,
                'caption': alt,
                'thumbnail': src
            })
    
    # Also look for zoomify or other viewer links
    for link in soup.find_all('a', href=True):
        href = link['href']
        if any(x in href.lower() for x in ['zoomify', 'slide', 'image', 'jpg', 'jpeg']):
            full_url = href if href.startswith('http') else f"{BASE_URL}{href}" if href.startswith('/') else f"{BASE_URL}/{href}"
            if full_url not in [s['url'] for s in slides]:
                slides.append({
                    'url': full_url,
                    'caption': link.get_text(strip=True),
                    'thumbnail': None
                })
    
    return slides

def categorize_slide(caption):
    """Determine the category folder based on caption."""
    caption_lower = caption.lower()
    
    if any(x in caption_lower for x in ['epithelial', 'epithelium', 'skin', 'lining']):
        return 'epithelial'
    elif any(x in caption_lower for x in ['connective', 'bone', 'cartilage', 'adipose', 'blood', 'fibrous']):
        return 'connective'
    elif any(x in caption_lower for x in ['muscle', 'skeletal', 'cardiac', 'smooth']):
        return 'muscle'
    elif any(x in caption_lower for x in ['nerve', 'neuron', 'brain', 'spinal', 'neural', 'nervous']):
        return 'nervous'
    else:
        return 'organ-systems'

def extract_magnification(caption):
    """Try to extract magnification from caption."""
    patterns = [
        r'(\d+)x',
        r'(\d+)\s*x\s*',
        r'magnification[:\s]*(\d+)',
    ]
    for pattern in patterns:
        match = re.search(pattern, caption, re.IGNORECASE)
        if match:
            return match.group(1) + 'x'
    return None

def extract_staining(caption):
    """Try to extract staining type from caption."""
    stains = ['H&E', 'hematoxylin', 'eosin', 'PAS', 'trichrome', 'silver', 'Giemsa', 'Wright', 'Gram', 'acid-fast']
    caption_lower = caption.lower()
    found_stains = []
    for stain in stains:
        if stain.lower() in caption_lower:
            found_stains.append(stain)
    return ', '.join(found_stains) if found_stains else None

def main():
    print("=" * 60)
    print("University of Michigan Histology Extractor")
    print("=" * 60)
    
    # Get main page and find slide links
    print("\n[1] Fetching main page...")
    response = rate_limited_request(BASE_URL)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Find all links to slide pages
    slide_links = set()
    for link in soup.find_all('a', href=True):
        href = link['href']
        # Look for slide-related URLs
        if any(pattern in href.lower() for pattern in ['/histology/', 'slide', 'atlas', 'lab']):
            if not href.startswith('http'):
                href = f"{BASE_URL}{href}" if href.startswith('/') else f"{BASE_URL}/{href}"
            slide_links.add(href)
    
    print(f"  Found {len(slide_links)} potential slide pages")
    
    # Extract slides from each page
    all_slides = []
    for i, url in enumerate(sorted(slide_links)):
        print(f"\n[{i+1}/{len(slide_links)}] Processing: {url}")
        try:
            slides = extract_slides_from_page(url)
            for slide in slides:
                slide['source_page'] = url
            all_slides.extend(slides)
            print(f"  Found {len(slides)} images")
        except Exception as e:
            print(f"  Error: {e}")
    
    print(f"\n[2] Total images found: {len(all_slides)}")
    
    # Download images
    print("\n[3] Downloading images...")
    downloaded = 0
    for i, slide in enumerate(all_slides):
        url = slide['url']
        caption = slide.get('caption', '')
        
        # Determine category
        category = categorize_slide(caption)
        
        # Create filename
        safe_name = sanitize_filename(caption[:50] if caption else f"slide_{i}")
        ext = url.split('.')[-1].split('?')[0]
        if ext not in ['jpg', 'jpeg', 'png', 'gif']:
            ext = 'jpg'
        filename = f"{safe_name}.{ext}"
        dest_path = OUTPUT_DIR / category / filename
        
        # Create metadata
        metadata = create_metadata(
            source_url=slide.get('source_page', url),
            license_type=LICENSE,
            attribution=ATTRIBUTION,
            caption=caption,
            tags=['histology', category],
            magnification=extract_magnification(caption),
            staining=extract_staining(caption),
            original_url=url
        )
        
        # Download
        if download_image(url, str(dest_path), metadata):
            downloaded += 1
            print(f"  ✓ {filename}")
        else:
            print(f"  ✗ {filename}")
    
    print(f"\n[4] Downloaded {downloaded}/{len(all_slides)} images")
    print(f"    Location: {OUTPUT_DIR}")
    
    # Save index
    index_path = OUTPUT_DIR / 'michigan_index.json'
    with open(index_path, 'w') as f:
        json.dump({
            'source': 'University of Michigan Histology',
            'url': BASE_URL,
            'license': LICENSE,
            'total_slides': len(all_slides),
            'downloaded': downloaded,
            'slides': all_slides
        }, f, indent=2)
    print(f"    Index saved: {index_path}")

if __name__ == '__main__':
    main()
