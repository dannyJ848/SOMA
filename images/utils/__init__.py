"""
Utility functions for medical image extraction.
"""
import os
import time
import json
import hashlib
import requests
from urllib.parse import urlparse, unquote
from pathlib import Path

# Rate limiting - 1 second between requests
_last_request_time = 0

def rate_limited_request(url, **kwargs):
    """Make a rate-limited HTTP request."""
    global _last_request_time
    elapsed = time.time() - _last_request_time
    if elapsed < 1.0:
        time.sleep(1.0 - elapsed)
    
    headers = kwargs.pop('headers', {})
    headers.setdefault('User-Agent', 'MedicalImageBot/1.0 (Educational/Research Purpose)')
    
    response = requests.get(url, headers=headers, timeout=30, **kwargs)
    _last_request_time = time.time()
    return response

def download_image(url, dest_path, metadata=None):
    """Download an image and save with metadata."""
    try:
        response = rate_limited_request(url)
        response.raise_for_status()
        
        # Create directory if needed
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        
        # Save image
        with open(dest_path, 'wb') as f:
            f.write(response.content)
        
        # Save metadata alongside
        if metadata:
            meta_path = dest_path + '.json'
            with open(meta_path, 'w') as f:
                json.dump(metadata, f, indent=2)
        
        return True
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return False

def sanitize_filename(filename):
    """Create a safe filename from a string."""
    # Remove or replace unsafe characters
    unsafe = '<>:"/\\|?*'
    for char in unsafe:
        filename = filename.replace(char, '_')
    return filename[:255]  # Limit length

def create_metadata(source_url, license_type, attribution, caption, tags, **extra):
    """Create a standardized metadata dictionary."""
    return {
        'source_url': source_url,
        'license': license_type,
        'attribution': attribution,
        'caption': caption,
        'tags': tags,
        'extracted_at': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
        **extra
    }

def get_file_hash(filepath):
    """Get MD5 hash of a file for integrity checking."""
    md5 = hashlib.md5()
    with open(filepath, 'rb') as f:
        for chunk in iter(lambda: f.read(8192), b''):
            md5.update(chunk)
    return md5.hexdigest()

BASE_DIR = Path('/Users/dannygomez/.openclaw/workspace/biological-self/images')
