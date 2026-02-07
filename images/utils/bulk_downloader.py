#!/usr/bin/env python3
"""
Bulk Image Downloader using direct HTTP requests
Falls back to wget/curl for efficient bulk operations
"""
import sys
sys.path.insert(0, '/Users/dannygomez/.openclaw/workspace/biological-self/images')

import os
import subprocess
import json
from pathlib import Path
from utils import BASE_DIR

def download_with_wget(url, dest_path):
    """Download using wget with rate limiting."""
    try:
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        result = subprocess.run([
            'wget', '-q', '--limit-rate=100k', '-O', dest_path,
            '--user-agent=MedicalImageBot/1.0 (Educational)',
            '--timeout=30', '--tries=2',
            url
        ], capture_output=True, timeout=60)
        return result.returncode == 0 and os.path.exists(dest_path) and os.path.getsize(dest_path) > 100
    except Exception as e:
        return False

def download_with_curl(url, dest_path):
    """Download using curl with rate limiting."""
    try:
        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        result = subprocess.run([
            'curl', '-s', '-L', '--max-time', '30', '--retry', '2',
            '-A', 'MedicalImageBot/1.0 (Educational)',
            '--rate-limit', '100k',
            '-o', dest_path, url
        ], capture_output=True, timeout=60)
        return result.returncode == 0 and os.path.exists(dest_path) and os.path.getsize(dest_path) > 100
    except Exception as e:
        return False

def smart_download(url, dest_path):
    """Try wget first, then curl."""
    if download_with_wget(url, dest_path):
        return True
    return download_with_curl(url, dest_path)

def save_metadata(dest_path, metadata):
    """Save metadata alongside image."""
    meta_path = dest_path + '.json'
    with open(meta_path, 'w') as f:
        json.dump(metadata, f, indent=2)

# Direct image URLs for sources that allow direct access
DIRECT_SOURCES = {
    'grays_anatomy': {
        'base_url': 'https://archive.org/download/graysanatomy',
        'license': 'Public Domain',
        'attribution': "Gray's Anatomy (Historical) - Public Domain",
        'category': 'anatomy'
    }
}

if __name__ == '__main__':
    print("Bulk downloader ready")
    print("Use smart_download(url, dest_path) to download images")
