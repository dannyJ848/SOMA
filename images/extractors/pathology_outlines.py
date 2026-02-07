#!/usr/bin/env python3
"""
Pathology Outlines Image Extractor
URL: https://www.pathologyoutlines.com/
License: CC BY (with attribution)
"""
import sys
sys.path.insert(0, '/Users/dannygomez/.openclaw/workspace/biological-self/images')

import re
import json
from bs4 import BeautifulSoup
from urllib.parse import urljoin
from utils import rate_limited_request, download_image, sanitize_filename, create_metadata, BASE_DIR

BASE_URL = "https://www.pathologyoutlines.com"
OUTPUT_DIR = BASE_DIR / "pathology"
LICENSE = "CC BY"
ATTRIBUTION = "PathologyOutlines.com, Inc."

# Known major sections in Pathology Outlines
SECTIONS = [
    '/topic/',  # Main topics
]

def discover_topics():
    """Discover pathology topics from the main page."""
    print(f"  Fetching main page: {BASE_URL}")
    response = rate_limited_request(BASE_URL)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    topics = []
    
    # Find all topic links
    for link in soup.find_all('a', href=True):
        href = link['href']
        text = link.get_text(strip=True)
        
        # Look for topic pages
        if '/topic/' in href or '/page/' in href:
            full_url = urljoin(BASE_URL, href)
            if full_url not in [t['url'] for t in topics]:
                topics.append({'name': text, 'url': full_url})
    
    return topics

def extract_images_from_topic_page(url):
    """Extract images from a pathology topic page."""
    response = rate_limited_request(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    images = []
    
    # PathologyOutlines images are often in figures or with specific classes
    for img in soup.find_all('img'):
        src = img.get('src', '')
        alt = img.get('alt', '')
        
        # Skip navigation and icons
        if any(x in src.lower() for x in ['icon', 'logo', 'button', 'nav', 'spacer', 'banner']):
            continue
        
        # Get full URL
        full_url = urljoin(url, src)
        
        # Look for high-res version in parent link
        parent = img.find_parent('a')
        if parent and parent.get('href'):
            link_href = parent['href']
            if any(x in link_href.lower() for x in ['.jpg', '.jpeg', '.png']):
                full_url = urljoin(url, link_href)
        
        # Get caption
        caption = alt
        if not caption:
            # Look for figure caption
            figure = img.find_parent('figure')
            if figure:
                figcaption = figure.find('figcaption')
                if figcaption:
                    caption = figcaption.get_text(strip=True)
        
        # Look for case/diagnosis info in nearby text
        diagnosis = ''
        for elem in img.find_all_next(['p', 'div', 'span'], limit=3):
            text = elem.get_text(strip=True)
            if text and len(text) < 500:
                diagnosis = text
                break
        
        images.append({
            'url': full_url,
            'alt': alt,
            'caption': caption,
            'diagnosis_info': diagnosis[:200]
        })
    
    return images

def categorize_pathology(url, caption, alt):
    """Determine pathology category from URL and text."""
    text = (url + ' ' + caption + ' ' + alt).lower()
    
    if any(x in text for x in ['cardio', 'heart', 'vascular']):
        return 'cardiovascular'
    elif any(x in text for x in ['pulm', 'lung', 'respira']):
        return 'respiratory'
    elif any(x in text for x in ['gi', 'gastro', 'intestine', 'colon', 'stomach', 'liver']):
        return 'gastrointestinal'
    elif any(x in text for x in ['derm', 'skin', 'melanoma']):
        return 'dermatology'
    elif any(x in text for x in ['renal', 'kidney', 'urinary', 'bladder']):
        return 'genitourinary'
    elif any(x in text for x in ['heme', 'blood', 'leukemia', 'lymphoma', 'bone marrow']):
        return 'hematology'
    elif any(x in text for x in ['neuro', 'brain', 'nerve', 'cns']):
        return 'neurological'
    elif any(x in text for x in ['bone', 'soft tissue', 'sarcoma']):
        return 'musculoskeletal'
    elif any(x in text for x in ['gyn', 'female', 'ovary', 'uterus', 'cervix']):
        return 'gynecological'
    elif any(x in text for x in ['breast', 'mammary']):
        return 'breast'
    elif any(x in text for x in ['endo', 'thyroid', 'adrenal']):
        return 'endocrine'
    else:
        return 'general'

def main():
    print("=" * 60)
    print("Pathology Outlines Extractor")
    print("=" * 60)
    
    # Discover topics
    print("\n[1] Discovering topics...")
    topics = discover_topics()
    print(f"  Found {len(topics)} topics")
    
    # Limit topics for initial run
    topics = topics[:100]
    
    # Extract images from each topic
    print("\n[2] Extracting images...")
    all_images = []
    for i, topic in enumerate(topics):
        print(f"  [{i+1}/{len(topics)}] {topic['name'][:50]}")
        try:
            images = extract_images_from_topic_page(topic['url'])
            for img in images:
                img['topic'] = topic['name']
                img['topic_url'] = topic['url']
            all_images.extend(images)
            if images:
                print(f"    Found {len(images)} images")
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
        topic = img.get('topic', '')
        
        # Skip non-image URLs
        if not any(x in url.lower() for x in ['.jpg', '.jpeg', '.png', '.gif']):
            continue
        
        # Determine category
        category = categorize_pathology(img.get('topic_url', ''), caption, alt)
        
        # Create filename
        safe_name = sanitize_filename((topic[:20] + '_' + caption[:30]) if caption else alt[:40] if alt else f"po_{i}")
        ext = url.split('.')[-1].split('?')[0]
        if ext not in ['jpg', 'jpeg', 'png', 'gif']:
            ext = 'jpg'
        filename = f"po_{safe_name}.{ext}"
        dest_path = OUTPUT_DIR / category / filename
        
        # Create metadata
        metadata = create_metadata(
            source_url=img.get('topic_url', url),
            license_type=LICENSE,
            attribution=ATTRIBUTION,
            caption=caption or alt,
            tags=['pathology', category],
            topic=topic,
            diagnosis_info=img.get('diagnosis_info', ''),
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
    index_path = OUTPUT_DIR / 'pathology_outlines_index.json'
    with open(index_path, 'w') as f:
        json.dump({
            'source': 'Pathology Outlines',
            'url': BASE_URL,
            'license': LICENSE,
            'total_images': len(all_images),
            'downloaded': downloaded,
            'images': all_images
        }, f, indent=2)
    print(f"    Index saved: {index_path}")

if __name__ == '__main__':
    main()
