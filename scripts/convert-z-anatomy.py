#!/usr/bin/env python3
"""
Z-Anatomy to GLTF Converter

This script converts Z-Anatomy Blender models to optimized GLTF/GLB format
with Draco compression for use in Three.js.

Usage:
  blender --background --python convert-z-anatomy.py

Or run directly (requires Blender in PATH):
  python3 convert-z-anatomy.py
"""

import os
import sys
import subprocess
from pathlib import Path

# Get project paths
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
ASSETS_DIR = PROJECT_ROOT / "assets"
SOURCE_DIR = ASSETS_DIR / "z-anatomy-source"
OUTPUT_DIR = ASSETS_DIR / "models"

# System mappings - Z-Anatomy collection names to our folder structure
SYSTEM_MAPPINGS = {
    "Skeletal": "skeletal",
    "Skeleton": "skeletal",
    "Bones": "skeletal",
    "Muscular": "muscular",
    "Muscles": "muscular",
    "Cardiovascular": "cardiovascular",
    "Arteries": "cardiovascular",
    "Veins": "cardiovascular",
    "Heart": "cardiovascular",
    "Nervous": "nervous",
    "Nerves": "nervous",
    "Brain": "nervous",
    "Digestive": "digestive",
    "GI": "digestive",
    "Respiratory": "respiratory",
    "Lungs": "respiratory",
    "Urinary": "urinary",
    "Kidneys": "urinary",
    "Reproductive": "reproductive",
    "Lymphatic": "lymphatic",
    "Integumentary": "integumentary",
    "Skin": "integumentary",
    "Organs": "organs",
}

def check_blender():
    """Check if Blender is available."""
    try:
        result = subprocess.run(
            ["blender", "--version"],
            capture_output=True,
            text=True
        )
        print(f"Found Blender: {result.stdout.strip().split(chr(10))[0]}")
        return True
    except FileNotFoundError:
        print("ERROR: Blender not found in PATH")
        print("Please install Blender from https://www.blender.org/download/")
        print("Or on macOS: brew install --cask blender")
        return False

def run_blender_export():
    """Run Blender with the export script."""
    blender_script = '''
import bpy
import os
import json
from pathlib import Path

# Configuration
OUTPUT_DIR = Path("{output_dir}")
SOURCE_ZIP = Path("{source_zip}")

print(f"Output directory: {{OUTPUT_DIR}}")
print(f"Source ZIP: {{SOURCE_ZIP}}")

# Install Z-Anatomy as application template
# First, we need to extract and load the .blend file from the ZIP

import zipfile
import tempfile

# Create temp directory for extraction
temp_dir = Path(tempfile.mkdtemp())
print(f"Extracting to: {{temp_dir}}")

# Extract the ZIP
with zipfile.ZipFile(SOURCE_ZIP, 'r') as zip_ref:
    zip_ref.extractall(temp_dir)

# Find the .blend file
blend_files = list(temp_dir.rglob("*.blend"))
if not blend_files:
    print("ERROR: No .blend file found in Z-Anatomy.zip")
    print("Contents:", list(temp_dir.rglob("*")))
    sys.exit(1)

blend_file = blend_files[0]
print(f"Found blend file: {{blend_file}}")

# Open the blend file
bpy.ops.wm.open_mainfile(filepath=str(blend_file))

# Get all collections
collections = bpy.data.collections
print(f"Found {{len(collections)}} collections")

# Export settings for GLTF with Draco compression
export_settings = {{
    'export_format': 'GLB',
    'export_draco_mesh_compression_enable': True,
    'export_draco_mesh_compression_level': 6,
    'export_apply_modifiers': True,
    'export_texcoords': True,
    'export_normals': True,
    'export_materials': 'EXPORT',
}}

# Track exported models
exported = []

# Export each top-level collection as a separate GLB
for collection in collections:
    if collection.name.startswith("Collection"):
        continue  # Skip default collection

    # Determine output folder based on collection name
    output_folder = OUTPUT_DIR
    for key, folder in {system_mappings}.items():
        if key.lower() in collection.name.lower():
            output_folder = OUTPUT_DIR / folder
            break

    output_folder.mkdir(parents=True, exist_ok=True)

    # Clean name for filename
    clean_name = collection.name.replace(" ", "_").replace("/", "-")
    output_path = output_folder / f"{{clean_name}}.glb"

    print(f"Exporting: {{collection.name}} -> {{output_path}}")

    # Select all objects in collection
    bpy.ops.object.select_all(action='DESELECT')
    for obj in collection.all_objects:
        obj.select_set(True)

    if not bpy.context.selected_objects:
        print(f"  Skipping {{collection.name}} - no objects")
        continue

    # Export
    try:
        bpy.ops.export_scene.gltf(
            filepath=str(output_path),
            use_selection=True,
            **export_settings
        )

        # Get file size
        size_mb = output_path.stat().st_size / (1024 * 1024)
        exported.append({{
            "name": collection.name,
            "file": str(output_path.relative_to(OUTPUT_DIR.parent.parent)),
            "size_mb": round(size_mb, 2)
        }})
        print(f"  Exported: {{size_mb:.2f}} MB")
    except Exception as e:
        print(f"  ERROR exporting {{collection.name}}: {{e}}")

# Write manifest
manifest_path = OUTPUT_DIR / "manifest.json"
with open(manifest_path, 'w') as f:
    json.dump({{
        "source": "Z-Anatomy",
        "license": "CC BY-SA 4.0",
        "models": exported,
        "total_models": len(exported),
        "total_size_mb": sum(m["size_mb"] for m in exported)
    }}, f, indent=2)

print(f"\\nExported {{len(exported)}} models")
print(f"Manifest written to: {{manifest_path}}")

# Cleanup temp directory
import shutil
shutil.rmtree(temp_dir)
'''.format(
        output_dir=str(OUTPUT_DIR),
        source_zip=str(SOURCE_DIR / "Z-Anatomy.zip"),
        system_mappings=repr(SYSTEM_MAPPINGS)
    )

    # Write the Blender script to a temp file
    script_path = SCRIPT_DIR / "_blender_export.py"
    with open(script_path, 'w') as f:
        f.write(blender_script)

    print("Running Blender export...")
    result = subprocess.run(
        ["blender", "--background", "--python", str(script_path)],
        capture_output=False
    )

    # Cleanup
    script_path.unlink()

    return result.returncode == 0

def main():
    print("=== Z-Anatomy to GLTF Converter ===")
    print(f"Source: {SOURCE_DIR}")
    print(f"Output: {OUTPUT_DIR}")
    print()

    # Check for source file
    source_zip = SOURCE_DIR / "Z-Anatomy.zip"
    if not source_zip.exists():
        print(f"ERROR: Source file not found: {source_zip}")
        print("Please run download-z-anatomy.sh first")
        return 1

    print(f"Found source: {source_zip}")
    print(f"Size: {source_zip.stat().st_size / (1024*1024):.2f} MB")
    print()

    # Check Blender
    if not check_blender():
        return 1

    print()

    # Run export
    if run_blender_export():
        print("\n=== Export Complete ===")
        print(f"Models exported to: {OUTPUT_DIR}")
        return 0
    else:
        print("\n=== Export Failed ===")
        return 1

if __name__ == "__main__":
    sys.exit(main())
