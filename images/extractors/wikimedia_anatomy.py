#!/usr/bin/env python3
"""
Wikimedia Commons Anatomy Image Extractor
URL: https://commons.wikimedia.org/wiki/Category:Human_anatomy
License: CC BY-SA / Public Domain
"""
import sys
sys.path.insert(0, '/Users/dannygomez/.openclaw/workspace/biological-self/images')

import re
import json
from bs4 import BeautifulSoup
from urllib.parse import urljoin, quote
from utils import rate_limited_request, download_image, sanitize_filename, create_metadata, BASE_DIR

BASE_URL = "https://commons.wikimedia.org"
CATEGORY_URL = "https://commons.wikimedia.org/wiki/Category:Human_anatomy"
OUTPUT_DIR = BASE_DIR / "anatomy"

def get_subcategories(category_url):
    """Get all subcategories from a category page."""
    print(f"  Fetching subcategories from: {category_url}")
    response = rate_limited_request(category_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    subcategories = []
    
    # Find subcategories section
    subcat_section = soup.find('div', {'id': 'mw-subcategories'})
    if subcat_section:
        for link in subcat_section.find_all('a', href=True):
            href = link['href']
            if href.startswith('/wiki/Category:'):
                full_url = urljoin(BASE_URL, href)
                name = link.get_text(strip=True)
                subcategories.append({'name': name, 'url': full_url})
    
    return subcategories

def get_images_from_category(category_url, max_images=100):
    """Get images from a category page."""
    print(f"  Fetching images from: {category_url}")
    response = rate_limited_request(category_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    images = []
    
    # Find files section
    files_section = soup.find('div', {'id': 'mw-category-media'})
    if files_section:
        for link in files_section.find_all('a', href=True):
            href = link['href']
            if href.startswith('/wiki/File:'):
                full_url = urljoin(BASE_URL, href)
                # Get the image details page
                img_data = extract_image_details(full_url)
                if img_data:
                    images.append(img_data)
                
                if len(images) >= max_images:
                    break
    
    return images

def extract_image_details(file_page_url):
    """Extract image details from file page."""
    try:
        response = rate_limited_request(file_page_url)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Get title
        title_elem = soup.find('h1', {'id': 'firstHeading'})
        title = title_elem.get_text(strip=True).replace('File:', '') if title_elem else ''
        
        # Find the main image
        img_container = soup.find('div', {'class': 'fullImageLink'})
        if not img_container:
            img_container = soup.find('div', {'id': 'file'})
        
        if img_container:
            img = img_container.find('img')
            if img:
                src = img.get('src', '')
                # Get full resolution URL
                if src.startswith('//'):
                    src = 'https:' + src
                elif src.startswith('/'):
                    src = BASE_URL + src
                
                # Get description
                desc_elem = soup.find('div', {'class': 'description'})
                description = desc_elem.get_text(strip=True) if desc_elem else ''
                
                # Get license
                license_elem = soup.find('span', {'class': 'licensetpl_short'})
                license_text = license_elem.get_text(strip=True) if license_elem else ''
                
                # Get attribution
                attr_elem = soup.find('td', {'class': 'licensetpl_attr'})
                attribution = attr_elem.get_text(strip=True) if attr_elem else ''
                
                return {
                    'url': src,
                    'title': title,
                    'description': description,
                    'license': license_text,
                    'attribution': attribution,
                    'source_page': file_page_url
                }
    except Exception as e:
        print(f"    Error extracting {file_page_url}: {e}")
    
    return None

def categorize_anatomy(title, description):
    """Determine anatomy category."""
    text = (title + ' ' + description).lower()
    
    categories = []
    
    if any(x in text for x in ['bone', 'skeleton', 'skull', 'vertebra', 'rib', 'pelvis']):
        categories.append('skeletal')
    if any(x in text for x in ['muscle', 'muscular', 'bicep', 'tricep', 'quadricep']):
        categories.append('muscular')
    if any(x in text for x in ['heart', 'cardio', 'vascular', 'artery', 'vein', 'blood vessel']):
        categories.append('cardiovascular')
    if any(x in text for x in ['brain', 'nerve', 'neuron', 'spinal', 'nervous', 'cns']):
        categories.append('nervous')
    if any(x in text for x in ['stomach', 'intestine', 'liver', 'pancreas', 'digest', 'gastro']):
        categories.append('digestive')
    if any(x in text for x in ['lung', 'respiratory', 'trachea', 'bronchus', 'breathing']):
        categories.append('respiratory')
    if any(x in text for x in ['kidney', 'urinary', 'bladder', 'ureter', 'renal']):
        categories.append('urinary')
    if any(x in text for x in ['reproductive', 'ovary', 'testis', 'uterus', 'prostate', 'penis', 'vagina']):
        categories.append('reproductive')
    if any(x in text for x in ['endocrine', 'thyroid', 'adrenal', 'pituitary', 'hormone']):
        categories.append('endocrine')
    if any(x in text for x in ['lymph', 'lymphatic', 'spleen', 'thymus', 'immune']):
        categories.append('lymphatic')
    
    return categories if categories else ['general']

def main():
    print("=" * 60)
    print("Wikimedia Commons Anatomy Extractor")
    print("=" * 60)
    
    # Get subcategories
    print("\n[1] Discovering categories...")
    categories = get_subcategories(CATEGORY_URL)
    print(f"  Found {len(categories)} subcategories")
    
    # Also add main category
    all_categories = [{'name': 'Human anatomy', 'url': CATEGORY_URL}] + categories[:20]  # Limit subcategories
    
    # Extract images from each category
    print("\n[2] Extracting images...")
    all_images = []
    for cat in all_categories:
        print(f"\n  Category: {cat['name']}")
        try:
            images = get_images_from_category(cat['url'], max_images=50)
            for img in images:
                img['category'] = cat['name']
            all_images.extend(images)
            print(f"    Found {len(images)} images")
        except Exception as e:
            print(f"    Error: {e}")
    
    print(f"\n  Total images found: {len(all_images)}")
    
    # Download images
    print("\n[3] Downloading images...")
    downloaded = 0
    for i, img in enumerate(all_images):
        url = img['url']
        title = img.get('title', '')
        
        # Skip if no URL
        if not url or not url.startswith('http'):
            continue
        
        # Determine categories
        categories = categorize_anatomy(title, img.get('description', ''))
        primary_category = categories[0]
        
        # Create filename
        safe_name = sanitize_filename(title[:60] if title else f"wiki_{i}")
        ext = 'jpg'
        if '.' in url.split('/')[-1]:
            ext = url.split('.')[-1].split('?')[0]
            if ext not in ['jpg', 'jpeg', 'png', 'gif', 'svg']:
                ext = 'jpg'
        filename = f"wiki_{safe_name}.{ext}"
        dest_path = OUTPUT_DIR / primary_category / filename
        
        # Create metadata
        metadata = create_metadata(
            source_url=img.get('source_page', url),
            license_type=img.get('license', 'CC BY-SA / Public Domain'),
            attribution=img.get('attribution', 'Wikimedia Commons'),
            caption=img.get('description', title),
            tags=['anatomy'] + categories,
            category=img.get('category', ''),
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
    index_path = OUTPUT_DIR / 'wikimedia_index.json'
    with open(index_path, 'w') as f:
        json.dump({
            'source': 'Wikimedia Commons Anatomy',
            'url': CATEGORY_URL,
            'license': 'CC BY-SA / Public Domain',
            'total_images': len(all_images),
            'downloaded': downloaded,
            'images': all_images
        }, f, indent=2)
    print(f"    Index saved: {index_path}")

if __name__ == '__main__':
    main()
