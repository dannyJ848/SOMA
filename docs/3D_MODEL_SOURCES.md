# Open-Source 3D Anatomical Model Sources

Research document for the Biological Self app - identifying viable open-source 3D anatomical organ models for web use.

**Last Updated:** January 24, 2026

---

## Executive Summary

This document evaluates six major sources of open-source and Creative Commons licensed 3D anatomical models for integration into the Biological Self web application. The primary requirements are:

- **License:** Open source or Creative Commons (CC-BY, CC-BY-SA) for educational use
- **Format:** GLB/GLTF preferred (web-optimized); OBJ, FBX acceptable with conversion
- **File Size:** Under 5MB per organ for web performance
- **Quality:** Anatomically accurate, suitable for educational purposes

---

## Source Comparison Table

| Source | License | Primary Format | File Size | Organs Available | Web-Ready | Animations |
|--------|---------|----------------|-----------|------------------|-----------|------------|
| **Z-Anatomy** | CC BY-SA 4.0 | GLB, Blender | Varies (full atlas ~150MB) | Comprehensive (1500+ structures) | Yes (GLB) | No |
| **BodyParts3D** | CC BY 4.0 | OBJ | 127MB reduced / 521MB full | 1,523 parts | No (needs conversion) | No |
| **NIH 3D** | Public Domain / CC | STL, OBJ, GLB, Blender | Varies per model | Limited organs | Partial | Some |
| **Sketchfab** | Various CC | GLB, FBX, OBJ | 1-50MB typical | Many individual organs | Yes | Some |
| **TurboSquid** | Royalty-Free | FBX, OBJ, Blender | Varies | 80+ free organs | No (needs conversion) | Some |
| **CGTrader** | Royalty-Free | FBX, OBJ, GLB | Varies | 1,100+ free anatomy | Partial | Some |

---

## Detailed Source Analysis

### 1. Z-Anatomy (RECOMMENDED - Already Integrated)

**Website:** https://www.z-anatomy.com/
**GitHub:** https://github.com/Z-Anatomy
**Sketchfab:** https://sketchfab.com/Z-Anatomy

#### Overview
Z-Anatomy is the most comprehensive open-source 3D human anatomy atlas available. Started in March 2021, it builds upon BodyParts3D models with extensive modifications, repairs, and improvements.

#### License
- **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**
- Free for commercial and educational use with attribution
- Derivative works must use same license

#### Available Models
The complete atlas includes:
- **Splanchnology:** Digestive, respiratory, urinary organs
- **Angiology:** Cardiovascular system (heart, vessels)
- **Arthrology:** Joints and skeletal connections
- **Nervous System:** Brain, spinal cord, nerves
- **Muscular System:** All major muscle groups
- **Skeletal System:** Complete skeleton with individual bones

#### File Formats
| Format | Availability | Notes |
|--------|--------------|-------|
| GLB | Yes | Web viewer uses GLB files |
| Blender (.blend) | Yes | Primary development format |
| FBX | Yes | Available on GitHub |
| OBJ | Yes | Individual parts from BodyParts3D |

#### File Sizes
- **Full Atlas (Blender):** ~150-200MB compressed
- **Individual System GLB:** 1-10MB typical
- **Web-optimized GLB:** Right-side only models mirrored in viewer to reduce size

#### Recommendations for Biological Self
1. Continue using Z-Anatomy as primary model source
2. Use system-specific GLB files for lazy loading
3. Download individual organ GLBs from Sketchfab collection

#### Download Instructions
1. **GitHub Repository:**
   ```bash
   git clone https://github.com/Z-Anatomy/Models-of-human-anatomy
   ```
2. **Sketchfab Collection:** https://sketchfab.com/Z-Anatomy/collections/human-anatomy-77a92b71541f4a6ab4a384ec3cf70415
3. **itch.io:** https://lluisv.itch.io/z-anatomy

---

### 2. BodyParts3D

**Website:** https://lifesciencedb.jp/bp3d/
**Archive:** https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html
**GitHub Mirror:** https://github.com/Kevin-Mattheus-Moerman/BodyParts3D

#### Overview
BodyParts3D is a dictionary-type database developed by the Database Center for Life Science in Japan. It represents anatomical concepts using 3D structure data for an adult human male.

#### License
- **Creative Commons Attribution 4.0 International (CC BY 4.0)**
- Attribution required: "BodyParts3D, (C) The Database Center for Life Science licensed under CC Attribution 4.0 International"

#### Available Models
- **Total Parts:** 1,523 anatomical structures
- **Naming Convention:** Uses Foundational Model of Anatomy (FMA) identifiers
- **Coverage:** Complete body systems

#### File Formats
| Format | Availability | Notes |
|--------|--------------|-------|
| OBJ | Yes | Primary format |
| STL | No | Not provided directly |
| GLB/GLTF | No | Requires conversion |

#### File Sizes
- **95% Polygon Reduction:** 127MB total (recommended for web)
- **99% Polygon Reduction:** Smaller but less detailed
- **High Quality:** 521MB total

#### Conversion Requirements
Since BodyParts3D only provides OBJ format, conversion to GLB is required:

```bash
# Using Blender Python API
blender --python convert_obj_to_glb.py -- input.obj output.glb

# Using gltf-pipeline for optimization
gltf-pipeline -i model.gltf -o model.glb --draco.compressionLevel 7
```

#### Download URLs
- **Polygon Reduced (95%):** ftp://ftp.biosciencedbc.jp/archive/bodyparts3d/LATEST/BodyParts3D_polygon_reduced.zip
- **High Quality:** ftp://ftp.biosciencedbc.jp/archive/bodyparts3d/LATEST/BodyParts3D.zip

---

### 3. NIH 3D Print Exchange (NIH 3D)

**Website:** https://3d.nih.gov/

#### Overview
NIH 3D is an open, community-driven portal for biomedical 3D models, including anatomical structures. Many models are created from real patient MRI/CT data.

#### License
- **Public Domain** (NIH/government submissions)
- **Creative Commons** (community submissions - check individual models)

#### Available Models

**Heart Collection (Notable):**
- Multiple heart models including congenital heart disease variants
- Created from patient MRI data
- Anatomically accurate

**Other Organs:**
- Brain structures
- Skeletal components
- Various organs (availability varies)

#### File Formats
| Format | Availability | Notes |
|--------|--------------|-------|
| STL | Yes | Primary format for 3D printing |
| OBJ | Some | Available for some models |
| GLB | Yes | Can export directly from viewer |
| Blender | Some | Available for some models |
| VRML/X3D | Yes | Less common formats |

#### Features
- In-browser 3D viewer with editing capabilities
- Direct GLB/STL export from viewer
- AlphaFold protein structure integration

#### Recommended Models for Biological Self

| Organ | Model ID/Name | Format | Notes |
|-------|---------------|--------|-------|
| Heart | Search "heart anatomy" | GLB export | Multiple variants available |
| Brain | Search "brain" | GLB export | Various detail levels |
| Lungs | Search "lungs" | STL/GLB | Check for anatomical accuracy |

#### Download Instructions
1. Navigate to https://3d.nih.gov/
2. Use search to find anatomy models
3. Click on model to view in 3D viewer
4. Use export function to download as GLB or STL
5. Verify Creative Commons/Public Domain license before use

---

### 4. Sketchfab

**Website:** https://sketchfab.com/
**Anatomy Tag:** https://sketchfab.com/tags/anatomy
**Organs Tag:** https://sketchfab.com/tags/organs

#### Overview
Sketchfab is the largest platform for 3D model sharing with extensive anatomy content. Many models are free with Creative Commons licenses.

#### License
- **Varies by model** - Always check individual license
- **CC BY** (Attribution) - Most permissive
- **CC BY-NC** (Non-Commercial) - Educational use only
- **CC BY-SA** (ShareAlike) - Derivatives must use same license
- **CC0** (Public Domain) - No restrictions

#### Recommended CC-Licensed Models

##### Heart Models
| Model | Creator | License | Link |
|-------|---------|---------|------|
| Human Heart | Freddan755 | CC BY | https://sketchfab.com/3d-models/human-heart-3342c8c438904ee2b3b6b68fedf30531 |
| Realistic Human Heart | neshallads | Free DL | https://sketchfab.com/3d-models/realistic-human-heart-3f8072336ce94d18b3d0d055a1ece089 |
| Cardiac Anatomy (External) | HannahNewey | CC BY | https://sketchfab.com/3d-models/cardiac-anatomy-external-view-of-human-heart-a3f0ea2030214a6bbaa97e7357eebd58 |
| Heart in Thorax | E-learning UMCG | CC BY-NC-SA | https://sketchfab.com/3d-models/human-anatomy-heart-in-thorax-22ebd4abce9440639563807e72e5f8d1 |
| Beating Heart (Animated) | jalmer | CC BY | https://sketchfab.com/3d-models/beating-heart-d9845afb1ee64ad094adc96320c67d98 |

##### Brain Models
| Model | Creator | License | Link |
|-------|---------|---------|------|
| Brain Realistic FREE | darklord3d | Free DL | https://sketchfab.com/3d-models/brain-realistic-free-756bc05dd59e4f3ca1a93ffcc57a8994 |
| Brain with Labeled Parts | AbdulMuhaymin | CC BY | https://sketchfab.com/3d-models/brain-with-labeled-parts-28c8971e11334e8b97a2a0d6235992e8 |
| Human Brain (100k poly) | AH | Free DL | https://sketchfab.com/3d-models/human-brain-c9c9d4d671b94345952d012cc2ea7a24 |
| Science Museum Brain | Science Museum Group | CC BY-NC-SA | https://sketchfab.com/3d-models/model-of-a-human-brain-fc7ae7b989f94c80a50152e71f44e47c |

##### Lungs Models
| Model | Creator | License | Link |
|-------|---------|---------|------|
| Realistic Human Lungs | neshallads | Free DL | https://sketchfab.com/3d-models/realistic-human-lungs-ce09f4099a68467880f46e61eb9a3531 |

##### Multi-Organ Sets
| Model | Creator | License | Link |
|-------|---------|---------|------|
| Human Organs | mkhasant | CC BY | https://sketchfab.com/3d-models/human-organs-035316622877438cb62de673b8f19217 |
| Organs (Heart, Kidneys, Stomach) | Rabuansah | CC BY | https://sketchfab.com/3d-models/organs-a50c547374224fd1a2de81a70cfb9ccc |

#### Download Instructions
1. Create free Sketchfab account
2. Navigate to model page
3. Click "Download 3D Model" button
4. Select format (GLB recommended for web)
5. Choose resolution if available
6. Verify license before commercial/educational use

#### File Size Optimization
Most Sketchfab models range from 1-50MB. For web optimization:
```bash
# Use gltf-pipeline for Draco compression
npm install -g gltf-pipeline
gltf-pipeline -i model.glb -o model-compressed.glb -d
```

---

### 5. TurboSquid

**Website:** https://www.turbosquid.com/
**Free Organs:** https://www.turbosquid.com/Search/3D-Models/free/organ
**Free Anatomy:** https://www.turbosquid.com/3d-model/free/anatomy

#### Overview
TurboSquid is a commercial 3D model marketplace with a free section containing 80+ organ models.

#### License
- **TurboSquid Royalty Free License** (most free models)
- Check individual model license terms
- Generally suitable for commercial and educational use

#### Available Free Models
- 80+ free organ models
- Complete human anatomy sets
- Individual organs: heart, brain, lungs, liver, kidneys, etc.

#### File Formats
| Format | Availability | Notes |
|--------|--------------|-------|
| FBX | Common | Good quality, needs conversion |
| OBJ | Common | Standard format |
| Blender | Some | Native format |
| MAX | Common | Requires 3ds Max |
| GLB/GLTF | Rare | May need conversion |

#### Recommendations
TurboSquid models often require conversion to GLB and may have inconsistent quality. Use as supplementary source only.

---

### 6. CGTrader

**Website:** https://www.cgtrader.com/
**Free Anatomy:** https://www.cgtrader.com/free-3d-models/anatomy
**Free Organs:** https://www.cgtrader.com/free-3d-models/organ

#### Overview
CGTrader offers 1,111+ free anatomy models and 1,227+ free organ models with various licenses.

#### License
- **CGTrader Royalty Free License** (varies by model)
- Some models have CC licenses
- Check individual model terms

#### File Formats
| Format | Availability | Notes |
|--------|--------------|-------|
| MAX | Common | Requires 3ds Max |
| OBJ | Common | Standard format |
| FBX | Common | Good interchange format |
| GLB/GLTF | Some | PBR-optimized available |
| C4D | Some | Cinema 4D format |

#### Notable Free Models
- Human Organ System (VR/AR ready, includes GLB)
- Various individual organs

---

## Recommended Models by Organ

Based on license compatibility, file size, and anatomical accuracy:

### Heart (< 5MB recommended)
| Priority | Source | Model | Format | License |
|----------|--------|-------|--------|---------|
| 1 | Z-Anatomy | Angiology system | GLB | CC BY-SA 4.0 |
| 2 | Sketchfab | Human Heart (Freddan755) | GLB | CC BY |
| 3 | NIH 3D | Heart anatomy models | GLB export | Public Domain |

### Brain (< 5MB recommended)
| Priority | Source | Model | Format | License |
|----------|--------|-------|--------|---------|
| 1 | Z-Anatomy | Central Nervous System | GLB | CC BY-SA 4.0 |
| 2 | Sketchfab | Brain with Labeled Parts | GLB | CC BY |
| 3 | Sketchfab | Brain Realistic FREE | GLB | Free Download |

### Lungs (< 5MB recommended)
| Priority | Source | Model | Format | License |
|----------|--------|-------|--------|---------|
| 1 | Z-Anatomy | Respiratory System | GLB | CC BY-SA 4.0 |
| 2 | Sketchfab | Realistic Human Lungs | GLB | Free Download |

### Liver (< 5MB recommended)
| Priority | Source | Model | Format | License |
|----------|--------|-------|--------|---------|
| 1 | Z-Anatomy | Splanchnology | GLB | CC BY-SA 4.0 |
| 2 | BodyParts3D | Liver (FMA ID) | OBJ->GLB | CC BY 4.0 |

### Kidneys (< 5MB recommended)
| Priority | Source | Model | Format | License |
|----------|--------|-------|--------|---------|
| 1 | Z-Anatomy | Urinary System | GLB | CC BY-SA 4.0 |
| 2 | Sketchfab | Organs (Rabuansah) | GLB | CC BY |

### Digestive System (< 5MB recommended)
| Priority | Source | Model | Format | License |
|----------|--------|-------|--------|---------|
| 1 | Z-Anatomy | Splanchnology | GLB | CC BY-SA 4.0 |
| 2 | BodyParts3D | Individual organs | OBJ->GLB | CC BY 4.0 |

---

## Integration Instructions

### Converting OBJ to GLB (for BodyParts3D)

```python
# Blender Python script: convert_obj_to_glb.py
import bpy
import sys

# Clear scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()

# Import OBJ
obj_path = sys.argv[-2]
bpy.ops.import_scene.obj(filepath=obj_path)

# Export GLB
glb_path = sys.argv[-1]
bpy.ops.export_scene.gltf(
    filepath=glb_path,
    export_format='GLB',
    export_draco_mesh_compression_enable=True,
    export_draco_mesh_compression_level=6
)
```

Usage:
```bash
blender --background --python convert_obj_to_glb.py -- input.obj output.glb
```

### Optimizing GLB Files for Web

```bash
# Install gltf-pipeline
npm install -g gltf-pipeline

# Compress with Draco (reduces file size 50-90%)
gltf-pipeline -i model.glb -o model-optimized.glb -d

# Additional options
gltf-pipeline -i model.glb -o model-optimized.glb \
  --draco.compressionLevel 7 \
  --draco.quantizePositionBits 14 \
  --draco.quantizeNormalBits 10
```

### Polygon Reduction (if file too large)

```python
# Blender Python script for decimation
import bpy

# Select all meshes
for obj in bpy.data.objects:
    if obj.type == 'MESH':
        obj.select_set(True)
        bpy.context.view_layer.objects.active = obj

        # Add decimate modifier
        mod = obj.modifiers.new(name="Decimate", type='DECIMATE')
        mod.ratio = 0.5  # Reduce to 50% of polygons

        # Apply modifier
        bpy.ops.object.modifier_apply(modifier="Decimate")
```

### Loading Models in Biological Self

The app uses Three.js with GLTFLoader and DRACOLoader:

```typescript
// In ModelLoader.tsx
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
loader.setDRACOLoader(dracoLoader);

// Load model
loader.load('path/to/model.glb', (gltf) => {
  scene.add(gltf.scene);
});
```

---

## Downloadable GLB Files Under 5MB (CC Licensed)

The following models are confirmed to be under 5MB and have compatible licenses:

### Sketchfab Direct Downloads

```
# Heart Models
https://sketchfab.com/3d-models/human-heart-3342c8c438904ee2b3b6b68fedf30531
  - License: CC BY
  - Estimated size: 2-4MB

https://sketchfab.com/3d-models/cardiac-anatomy-external-view-of-human-heart-a3f0ea2030214a6bbaa97e7357eebd58
  - License: CC BY
  - Estimated size: 1-3MB

# Brain Models
https://sketchfab.com/3d-models/brain-with-labeled-parts-28c8971e11334e8b97a2a0d6235992e8
  - License: CC BY
  - Estimated size: 2-5MB

# Multi-Organ Sets
https://sketchfab.com/3d-models/human-organs-035316622877438cb62de673b8f19217
  - License: CC BY
  - Contains: Heart, lungs, liver, kidneys, stomach, intestines
  - Estimated size: 3-5MB

https://sketchfab.com/3d-models/organs-a50c547374224fd1a2de81a70cfb9ccc
  - License: CC BY
  - Contains: Heart, kidneys, stomach, intestines
  - Estimated size: 2-4MB
```

### Z-Anatomy (Sketchfab Collection)
```
https://sketchfab.com/Z-Anatomy/collections/human-anatomy-77a92b71541f4a6ab4a384ec3cf70415
  - License: CC BY-SA 4.0
  - Individual system GLBs available
  - Varies by system (1-10MB typical)
```

---

## Attribution Requirements

When using these models, include appropriate attribution:

### Z-Anatomy / BodyParts3D
```
3D anatomy models from Z-Anatomy (https://www.z-anatomy.com/),
based on BodyParts3D, (C) The Database Center for Life Science,
licensed under CC BY-SA 4.0 International
```

### NIH 3D (Public Domain)
```
3D model from NIH 3D Print Exchange (https://3d.nih.gov/)
Public Domain
```

### Sketchfab (CC BY)
```
3D model "[Model Name]" by [Creator Name] (https://sketchfab.com/...)
Licensed under CC BY 4.0
```

---

## Future Considerations

1. **Human Reference Atlas Portal** (https://humanatlas.io/3d-reference-library)
   - Academic resource with CC licensed organ models
   - May require API access

2. **Open Anatomy Project** (https://www.openanatomy.org/)
   - Open-source surgical planning tools
   - Medical-grade anatomical models

3. **embodi3D** (https://www.embodi3d.com/)
   - Patient-derived MRI/CT 3D models
   - Growing library of anatomical files

---

## Summary

For the Biological Self app, the recommended approach is:

1. **Primary Source:** Continue using Z-Anatomy for comprehensive anatomical coverage
2. **Supplementary:** Use Sketchfab CC-BY models for individual organs when Z-Anatomy lacks specific parts
3. **Backup:** Convert BodyParts3D OBJ files for any missing structures
4. **Always:** Optimize all models with Draco compression to keep under 5MB

The combination of Z-Anatomy + Sketchfab CC models provides the best balance of:
- License compatibility (CC BY-SA 4.0 / CC BY)
- Format availability (GLB ready)
- Anatomical accuracy
- Web optimization potential
