#!/usr/bin/env python3
"""
UWA Blue Histology Image Extractor
URL: https://www.lab.anhb.uwa.edu.au/teaching/physiology/
License: Educational use
"""
import sys
sys.path.insert(0, '/Users/dannygomez/.openclaw/workspace/biological-self/images')

import re
import json
from bs4 import BeautifulSoup
from urllib.parse import urljoin
from utils import rate_limited_request, download_image, sanitize_filename, create_metadata, BASE_DIR

BASE_URL = "https://www.lab.anhb.uwa.edu.au/teaching/physiology/"
OUTPUT_DIR = BASE_DIR / "histology"
LICENSE = "Educational Use"
ATTRIBUTION = "University of Western Australia, School of Human Sciences - Blue Histology"

def get_lab_pages():
    """Get list of all lab/topic pages."""
    response = rate_limited_request(BASE_URL)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    pages = []
    for link in soup.find_all('a', href=True):
        href = link['href']
        text = link.get_text(strip=True)
        
        # Look for histology/lab pages
        if any(x in href.lower() for x in ['histology', 'lab', 'topic', 'guide']):
            if href.endswith('.html') or href.endswith('.htm'):
                full_url = urljoin(BASE_URL, href)
                pages.append({'name': text, 'url': full_url})
    
    return pages

def extract_images_from_page(url):
    """Extract images from a lab page."""
    print(f"  Fetching: {url}")
    response = rate_limited_request(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    images = []
    
    # Find all images
    for img in soup.find_all('img'):
        src = img.get('src', '')
        alt = img.get('alt', '')
        
        # Skip navigation and small images
        if any(x in src.lower() for x in ['icon', 'logo', 'button', 'nav', 'bullet']):
            continue
        
        # Get full URL
        full_url = urljoin(url, src)
        
        # Look for high-res version
        parent = img.find_parent('a')
        if parent and parent.get('href'):
            link_href = parent['href']
            if any(x in link_href.lower() for x in ['.jpg', '.jpeg', '.png', '.gif']):
                full_url = urljoin(url, link_href)
        
        # Get caption from nearby text
        caption = alt
        if not caption:
            # Try to find caption in figure or nearby text
            parent_fig = img.find_parent(['figure', 'td', 'div'])
            if parent_fig:
                caption_elem = parent_fig.find(['figcaption', 'caption', 'b', 'strong'])
                if caption_elem:
                    caption = caption_elem.get_text(strip=True)
        
        # Try to get more context from surrounding text
        if not caption:
            next_sibling = img.find_next_sibling()
            if next_sibling:
                caption = next_sibling.get_text(strip=True)[:100]
        
        images.append({
            'url': full_url,
            'caption': caption,
            'alt': alt,
            'thumbnail': src
        })
    
    return images

def categorize_image(caption, alt, page_name):
    """Determine tissue category."""
    text = (caption + ' ' + alt + ' ' + page_name).lower()
    
    if any(x in text for x in ['epithelial', 'epithelium', 'lining', 'surface']):
        return 'epithelial'
    elif any(x in text for x in ['connective', 'bone', 'cartilage', 'adipose', 'fat', 'blood', 'fibroblast', 'collagen']):
        return 'connective'
    elif any(x in text for x in ['muscle', 'myocyte', 'sarcomere', 'striated']):
        return 'muscle'
    elif any(x in text for x in ['nerve', 'neuron', 'neuroglia', 'brain', 'spinal', 'ganglion', 'synapse']):
        return 'nervous'
    else:
        return 'organ-systems'

def extract_magnification(caption):
    """Extract magnification info."""
    if not caption:
        return None
    patterns = [r'(\d+)\s*x', r'magnification[:\s]*(\d+)', r'(\d+)x']
    for pattern in patterns:
        match = re.search(pattern, caption, re.IGNORECASE)
        if match:
            return match.group(1) + 'x'
    return None

def extract_staining(caption):
    """Extract staining type."""
    if not caption:
        return None
    stains = {
        'H&E': ['h&e', 'hematoxylin', 'eosin'],
        'PAS': ['pas', 'periodic acid'],
        'Trichrome': ['trichrome', 'masson'],
        'Silver': ['silver', 'reticulin'],
        'Giemsa': ['giemsa'],
        'Wright': ['wright'],
        'Toluidine': ['toluidine'],
        'Azure': ['azure'],
    }
    caption_lower = caption.lower()
    found = []
    for stain, keywords in stains.items():
        if any(kw in caption_lower for kw in keywords):
            found.append(stain)
    return ', '.join(found) if found else None

def main():
    print("=" * 60)
    print("UWA Blue Histology Extractor")
    print("=" * 60)
    
    # Get lab pages
    print("\n[1] Discovering lab pages...")
    pages = get_lab_pages()
    print(f"  Found {len(pages)} pages")
    
    # Also add known Blue Histology pages
    known_pages = [
        'epithelium.html', 'connective.html', 'blood.html', 'muscle.html',
        'nerve.html', 'cardio.html', 'respiratory.html', 'lymphoid.html',
        'endocrine.html', 'skin.html', 'git.html', 'liver.html',
        'urinary.html', 'female.html', 'male.html', 'sense.html',
        'eye.html', 'bone.html', 'tissue.html'
    ]
    
    for page in known_pages:
        url = urljoin(BASE_URL, page)
        if not any(p['url'] == url for p in pages):
            pages.append({'name': page.replace('.html', '').title(), 'url': url})
    
    print(f"  Total pages to scan: {len(pages)}")
    
    # Extract images from each page
    all_images = []
    for i, page in enumerate(pages):
        print(f"\n[{i+1}/{len(pages)}] Processing: {page['name']}")
        try:
            images = extract_images_from_page(page['url'])
            for img in images:
                img['page_name'] = page['name']
                img['page_url'] = page['url']
            all_images.extend(images)
            print(f"  Found {len(images)} images")
        except Exception as e:
            print(f"  Error: {e}")
    
    print(f"\n[2] Total images found: {len(all_images)}")
    
    # Download images
    print("\n[3] Downloading images...")
    downloaded = 0
    for i, img in enumerate(all_images):
        url = img['url']
        caption = img.get('caption', '') or img.get('alt', '')
        page_name = img.get('page_name', '')
        
        # Skip non-image URLs
        if not any(x in url.lower() for x in ['.jpg', '.jpeg', '.png', '.gif']):
            continue
        
        # Determine category
        category = categorize_image(caption, img.get('alt', ''), page_name)
        
        # Create filename
        safe_name = sanitize_filename((page_name + '_' + caption[:40]) if caption else f"uwa_{i}")
        ext = url.split('.')[-1].split('?')[0]
        if ext not in ['jpg', 'jpeg', 'png', 'gif']:
            ext = 'jpg'
        filename = f"uwa_{safe_name}.{ext}"
        dest_path = OUTPUT_DIR / category / filename
        
        # Create metadata
        metadata = create_metadata(
            source_url=img.get('page_url', url),
            license_type=LICENSE,
            attribution=ATTRIBUTION,
            caption=caption,
            tags=['histology', 'blue-histology', category, page_name.lower()],
            magnification=extract_magnification(caption),
            staining=extract_staining(caption),
            page=page_name,
            original_url=url
        )
        
        # Download
        if download_image(url, str(dest_path), metadata):
            downloaded += 1
            print(f"  ✓ {filename}")
        else:
            print(f"  ✗ {filename}")
    
    print(f"\n[4] Downloaded {downloaded}/{len(all_images)} images")
    print(f"    Location: {OUTPUT_DIR}")
    
    # Save index
    index_path = OUTPUT_DIR / 'uwa_index.json'
    with open(index_path, 'w') as f:
        json.dump({
            'source': 'UWA Blue Histology',
            'url': BASE_URL,
            'license': LICENSE,
            'total_images': len(all_images),
            'downloaded': downloaded,
            'images': all_images
        }, f, indent=2)
    print(f"    Index saved: {index_path}")

if __name__ == '__main__':
    main()
