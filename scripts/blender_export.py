"""
Blender script to export Z-Anatomy models to GLTF/GLB format.
Run with: blender --background --python blender_export.py
"""

import bpy
import os
import sys
import json
import zipfile
import tempfile
import shutil
from pathlib import Path

# Configuration
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
ASSETS_DIR = PROJECT_ROOT / "assets"
SOURCE_ZIP = ASSETS_DIR / "z-anatomy-source" / "Z-Anatomy.zip"
OUTPUT_DIR = ASSETS_DIR / "models"

print("=" * 60)
print("Z-Anatomy to GLTF Exporter")
print("=" * 60)
print(f"Source: {SOURCE_ZIP}")
print(f"Output: {OUTPUT_DIR}")
print()

# Create output directories
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
for subdir in ['skeletal', 'muscular', 'cardiovascular', 'nervous', 'digestive',
               'respiratory', 'urinary', 'reproductive', 'lymphatic', 'integumentary', 'organs']:
    (OUTPUT_DIR / subdir).mkdir(exist_ok=True)

# Extract ZIP to temp directory
temp_dir = Path(tempfile.mkdtemp())
print(f"Extracting to: {temp_dir}")

try:
    with zipfile.ZipFile(SOURCE_ZIP, 'r') as zip_ref:
        zip_ref.extractall(temp_dir)
    print("Extraction complete")
except Exception as e:
    print(f"ERROR extracting ZIP: {e}")
    sys.exit(1)

# Find the .blend file
blend_files = list(temp_dir.rglob("*.blend"))
if not blend_files:
    print("ERROR: No .blend file found")
    print("Contents:", list(temp_dir.rglob("*")))
    sys.exit(1)

blend_file = blend_files[0]
print(f"Found: {blend_file}")
print(f"Size: {blend_file.stat().st_size / 1024 / 1024:.1f} MB")

# Open the blend file
print("\nOpening blend file...")
bpy.ops.wm.open_mainfile(filepath=str(blend_file))
print("Blend file loaded")

# System mapping based on collection/object names
SYSTEM_KEYWORDS = {
    'skeletal': ['bone', 'skeletal', 'skeleton', 'skull', 'vertebr', 'rib', 'pelvi', 'femur', 'tibia', 'humer', 'radius', 'ulna', 'carpal', 'tarsal', 'phalanx', 'clavicle', 'scapula', 'patella', 'mandible', 'maxilla'],
    'muscular': ['muscle', 'muscular', 'tendon', 'bicep', 'tricep', 'deltoid', 'pectoral', 'abdomin', 'quadricep', 'hamstring', 'gastrocnem', 'gluteus'],
    'cardiovascular': ['heart', 'artery', 'arter', 'vein', 'vena', 'aorta', 'cardiac', 'cardio', 'vascular', 'blood vessel', 'pulmonary', 'coronary', 'carotid', 'jugular', 'subclavian', 'brachial', 'femoral', 'iliac'],
    'nervous': ['nerve', 'nervous', 'brain', 'cerebr', 'spinal', 'neuron', 'gangli', 'plexus', 'cortex', 'cerebellum', 'medulla', 'pons', 'thalamus', 'hypothalamus', 'hippocampus'],
    'digestive': ['digest', 'stomach', 'intestin', 'colon', 'liver', 'pancreas', 'gallbladder', 'esophag', 'pharynx', 'rectum', 'appendix', 'duodenum', 'jejunum', 'ileum', 'cecum'],
    'respiratory': ['lung', 'respir', 'trachea', 'bronch', 'larynx', 'pharynx', 'diaphragm', 'alveol', 'pleura', 'nasal'],
    'urinary': ['kidney', 'urinary', 'bladder', 'ureter', 'urethra', 'renal', 'nephron', 'adrenal'],
    'reproductive': ['reproduct', 'ovary', 'uterus', 'testis', 'teste', 'prostate', 'penis', 'vagina', 'fallopian', 'scrotum', 'epididym'],
    'lymphatic': ['lymph', 'spleen', 'thymus', 'tonsil', 'lymphatic', 'lymphoid'],
    'integumentary': ['skin', 'integument', 'dermis', 'epidermis', 'hair', 'nail', 'subcutaneous'],
}

def classify_object(name):
    """Classify an object into a body system based on its name."""
    name_lower = name.lower()
    for system, keywords in SYSTEM_KEYWORDS.items():
        for keyword in keywords:
            if keyword in name_lower:
                return system
    return 'organs'  # Default to organs for unclassified

# Get all mesh objects
all_objects = [obj for obj in bpy.data.objects if obj.type == 'MESH']
print(f"\nFound {len(all_objects)} mesh objects")

# Get all collections
all_collections = list(bpy.data.collections)
print(f"Found {len(all_collections)} collections")

# Track exports
exported = []
errors = []

# Export settings for Blender 5.0+
# API changed - use new parameter names
export_settings = {
    'export_format': 'GLB',
    'export_draco_mesh_compression_enable': True,
    'export_draco_mesh_compression_level': 6,
    'export_texcoords': True,
    'export_normals': True,
    'export_materials': 'EXPORT',
    'use_selection': True,
}

# First, try exporting by collection
print("\n--- Exporting Collections ---")
for collection in all_collections:
    if collection.name in ['Collection', 'Scene Collection', 'Master Collection']:
        continue

    # Get all mesh objects in this collection
    meshes = [obj for obj in collection.all_objects if obj.type == 'MESH']
    if not meshes:
        continue

    # Classify the collection
    system = classify_object(collection.name)
    output_folder = OUTPUT_DIR / system

    # Clean name for filename
    clean_name = collection.name.replace(" ", "_").replace("/", "-").replace("\\", "-")
    clean_name = "".join(c for c in clean_name if c.isalnum() or c in "_-")
    output_path = output_folder / f"{clean_name}.glb"

    print(f"  {collection.name} ({len(meshes)} meshes) -> {system}/")

    # Select objects
    bpy.ops.object.select_all(action='DESELECT')
    for obj in meshes:
        obj.select_set(True)

    if not bpy.context.selected_objects:
        continue

    # Set active object (required for export)
    bpy.context.view_layer.objects.active = meshes[0]

    try:
        bpy.ops.export_scene.gltf(
            filepath=str(output_path),
            **export_settings
        )
        size_mb = output_path.stat().st_size / (1024 * 1024)
        exported.append({
            "name": collection.name,
            "file": str(output_path.relative_to(PROJECT_ROOT)),
            "system": system,
            "meshCount": len(meshes),
            "sizeMB": round(size_mb, 2)
        })
        print(f"    -> Exported: {size_mb:.2f} MB")
    except Exception as e:
        errors.append({"name": collection.name, "error": str(e)})
        print(f"    -> ERROR: {e}")

# If no collections were exported, export all objects as one file per system
if len(exported) == 0:
    print("\n--- No collections found, exporting by object classification ---")

    # Group objects by system
    objects_by_system = {}
    for obj in all_objects:
        system = classify_object(obj.name)
        if system not in objects_by_system:
            objects_by_system[system] = []
        objects_by_system[system].append(obj)

    for system, objects in objects_by_system.items():
        if not objects:
            continue

        output_path = OUTPUT_DIR / system / f"{system}_all.glb"
        print(f"  {system}: {len(objects)} objects")

        bpy.ops.object.select_all(action='DESELECT')
        for obj in objects:
            obj.select_set(True)

        bpy.context.view_layer.objects.active = objects[0]

        try:
            bpy.ops.export_scene.gltf(
                filepath=str(output_path),
                **export_settings
            )
            size_mb = output_path.stat().st_size / (1024 * 1024)
            exported.append({
                "name": f"{system}_all",
                "file": str(output_path.relative_to(PROJECT_ROOT)),
                "system": system,
                "meshCount": len(objects),
                "sizeMB": round(size_mb, 2)
            })
            print(f"    -> Exported: {size_mb:.2f} MB")
        except Exception as e:
            errors.append({"name": system, "error": str(e)})
            print(f"    -> ERROR: {e}")

# Also export the complete model
print("\n--- Exporting Complete Model ---")
bpy.ops.object.select_all(action='SELECT')
complete_path = OUTPUT_DIR / "complete_anatomy.glb"
try:
    bpy.ops.export_scene.gltf(
        filepath=str(complete_path),
        export_format='GLB',
        export_draco_mesh_compression_enable=True,
        export_draco_mesh_compression_level=6,
        export_apply_modifiers=True,
        use_selection=True,
    )
    size_mb = complete_path.stat().st_size / (1024 * 1024)
    exported.append({
        "name": "complete_anatomy",
        "file": str(complete_path.relative_to(PROJECT_ROOT)),
        "system": "all",
        "meshCount": len(all_objects),
        "sizeMB": round(size_mb, 2)
    })
    print(f"  -> Exported complete model: {size_mb:.2f} MB")
except Exception as e:
    errors.append({"name": "complete_anatomy", "error": str(e)})
    print(f"  -> ERROR: {e}")

# Write manifest
manifest = {
    "source": "Z-Anatomy",
    "sourceUrl": "https://www.z-anatomy.com",
    "license": "CC BY-SA 4.0",
    "blenderVersion": bpy.app.version_string,
    "exportDate": __import__('datetime').datetime.now().isoformat(),
    "models": exported,
    "errors": errors,
    "totalModels": len(exported),
    "totalSizeMB": round(sum(m["sizeMB"] for m in exported), 2),
}

manifest_path = OUTPUT_DIR / "manifest.json"
with open(manifest_path, 'w') as f:
    json.dump(manifest, f, indent=2)

print("\n" + "=" * 60)
print(f"Export complete!")
print(f"  Models: {len(exported)}")
print(f"  Errors: {len(errors)}")
print(f"  Total size: {manifest['totalSizeMB']:.2f} MB")
print(f"  Manifest: {manifest_path}")
print("=" * 60)

# Cleanup
shutil.rmtree(temp_dir)
print("Temporary files cleaned up")
