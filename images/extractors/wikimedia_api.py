#!/usr/bin/env python3
"""
Wikimedia Commons Anatomy Image Extractor - API Version
Uses Wikimedia API for efficient image retrieval
URL: https://commons.wikimedia.org/wiki/Category:Human_anatomy
License: CC BY-SA / Public Domain
"""
import sys
sys.path.insert(0, '/Users/dannygomez/.openclaw/workspace/biological-self/images')

import json
from utils import rate_limited_request, download_image, sanitize_filename, create_metadata, BASE_DIR

OUTPUT_DIR = BASE_DIR / "anatomy"
LICENSE = "CC BY-SA / Public Domain"
ATTRIBUTION = "Wikimedia Commons"

# Wikimedia Commons API endpoint
API_URL = "https://commons.wikimedia.org/w/api.php"

def fetch_category_images(category, limit=100):
    """Fetch images from a category using the Wikimedia API."""
    images = []
    continue_token = None
    
    while len(images) < limit:
        params = {
            'action': 'query',
            'generator': 'categorymembers',
            'gcmtitle': f'Category:{category}',
            'gcmtype': 'file',
            'prop': 'imageinfo',
            'iiprop': 'url|extmetadata',
            'format': 'json',
            'gcmlimit': min(50, limit - len(images))
        }
        
        if continue_token:
            params['gcmcontinue'] = continue_token
        
        try:
            response = rate_limited_request(API_URL, params=params)
            data = response.json()
            
            if 'query' in data and 'pages' in data['query']:
                for page_id, page_data in data['query']['pages'].items():
                    if 'imageinfo' in page_data:
                        info = page_data['imageinfo'][0]
                        url = info.get('url', '')
                        descriptionurl = info.get('descriptionurl', '')
                        
                        # Get metadata
                        metadata = info.get('extmetadata', {})
                        description = metadata.get('ImageDescription', {}).get('value', '')
                        license_name = metadata.get('License', {}).get('value', '')
                        artist = metadata.get('Artist', {}).get('value', '')
                        
                        images.append({
                            'url': url,
                            'page_url': descriptionurl,
                            'title': page_data.get('title', '').replace('File:', ''),
                            'description': description,
                            'license': license_name,
                            'artist': artist,
                            'category': category
                        })
            
            # Check for continuation
            if 'continue' in data and 'gcmcontinue' in data['continue']:
                continue_token = data['continue']['gcmcontinue']
            else:
                break
                
        except Exception as e:
            print(f"    API error: {e}")
            break
    
    return images

def categorize_anatomy(title, description):
    """Determine anatomy category."""
    text = (title + ' ' + description).lower()
    
    categories = []
    
    if any(x in text for x in ['bone', 'skeleton', 'skull', 'vertebra', 'rib', 'pelvis', 'femur', 'tibia']):
        categories.append('skeletal')
    if any(x in text for x in ['muscle', 'muscular', 'bicep', 'tricep', 'quadricep', 'deltoid']):
        categories.append('muscular')
    if any(x in text for x in ['heart', 'cardio', 'vascular', 'artery', 'vein', 'aorta']):
        categories.append('cardiovascular')
    if any(x in text for x in ['brain', 'nerve', 'neuron', 'spinal', 'cerebrum', 'cerebellum']):
        categories.append('nervous')
    if any(x in text for x in ['stomach', 'intestine', 'liver', 'pancreas', 'digest', 'gastro', 'esophagus']):
        categories.append('digestive')
    if any(x in text for x in ['lung', 'respiratory', 'trachea', 'bronchus', 'breathing', 'pulmonary']):
        categories.append('respiratory')
    if any(x in text for x in ['kidney', 'urinary', 'bladder', 'ureter', 'renal']):
        categories.append('urinary')
    if any(x in text for x in ['reproductive', 'ovary', 'testis', 'uterus', 'prostate', 'penis', 'vagina', 'ovum', 'sperm']):
        categories.append('reproductive')
    if any(x in text for x in ['endocrine', 'thyroid', 'adrenal', 'pituitary', 'hormone']):
        categories.append('endocrine')
    if any(x in text for x in ['lymph', 'lymphatic', 'spleen', 'thymus', 'immune']):
        categories.append('lymphatic')
    
    return categories if categories else ['general']

def main():
    print("=" * 60)
    print("Wikimedia Commons Anatomy Extractor - API Version")
    print("=" * 60)
    
    # Categories to search
    categories = [
        'Human_anatomy',
        'Anatomical_diagrams',
        'Histology',
        'Human_physiology',
    ]
    
    all_images = []
    
    # Fetch images from each category
    print("\n[1] Fetching images from Wikimedia Commons...")
    for category in categories:
        print(f"  Category: {category}")
        try:
            images = fetch_category_images(category, limit=100)
            all_images.extend(images)
            print(f"    Found {len(images)} images")
        except Exception as e:
            print(f"    Error: {e}")
    
    print(f"\n  Total images found: {len(all_images)}")
    
    # Download images
    print("\n[2] Downloading images...")
    downloaded = 0
    failed = 0
    
    for i, img in enumerate(all_images):
        url = img['url']
        title = img.get('title', '')
        
        if not url:
            failed += 1
            continue
        
        # Determine categories
        categories = categorize_anatomy(title, img.get('description', ''))
        primary_category = categories[0]
        
        # Create filename
        safe_name = sanitize_filename(title[:60])
        ext = url.split('.')[-1].split('?')[0]
        if ext not in ['jpg', 'jpeg', 'png', 'gif', 'svg']:
            ext = 'jpg'
        filename = f"wiki_{safe_name}.{ext}"
        dest_path = OUTPUT_DIR / primary_category / filename
        
        # Create metadata
        metadata = create_metadata(
            source_url=img.get('page_url', url),
            license_type=img.get('license', LICENSE),
            attribution=img.get('artist', ATTRIBUTION),
            caption=img.get('description', title),
            tags=['anatomy'] + categories,
            category=img.get('category', ''),
            original_url=url
        )
        
        # Download
        if download_image(url, str(dest_path), metadata):
            downloaded += 1
            if downloaded % 20 == 0:
                print(f"    Downloaded {downloaded}/{len(all_images)}...")
        else:
            failed += 1
    
    print(f"\n[3] Downloaded {downloaded} images, failed {failed}")
    print(f"    Location: {OUTPUT_DIR}")
    
    # Save index
    index_path = OUTPUT_DIR / 'wikimedia_api_index.json'
    with open(index_path, 'w') as f:
        json.dump({
            'source': 'Wikimedia Commons Anatomy (API)',
            'license': LICENSE,
            'total_images': len(all_images),
            'downloaded': downloaded,
            'failed': failed,
            'images': all_images
        }, f, indent=2)
    print(f"    Index saved: {index_path}")

if __name__ == '__main__':
    main()
