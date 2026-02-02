# Medical Image Sources Guide

Complete guide for sourcing medical images for the SOMA encyclopedia.
All images must be **CC BY licensed** or **Public Domain** for offline use.

## 📊 Image Inventory Summary

| Category | Count | Format | Source |
|----------|-------|--------|--------|
| Anatomical Diagrams | 10 | SVG | OpenStax A&P |
| Histology | 9 | JPG | UMich/CDC |
| Medical Imaging | 7 | JPG/SVG | Radiopaedia/OpenStax |
| Pathology | 5 | JPG | NCI/CDC |
| Clinical Photos | 4 | JPG | CDC/NIH |
| **Total Planned** | **35** | **Mixed** | **CC BY / PD** |

---

## 📚 Primary Sources

### 1. OpenStax Anatomy & Physiology
**License:** CC BY 4.0  
**URL:** https://openstax.org/books/anatomy-and-physiology/pages/index  
**Best for:** Anatomical diagrams, illustrations, charts

#### How to Download:
1. Visit https://openstax.org/books/anatomy-and-physiology/pages/index
2. Click "Download for free" → "Book PDF"
3. Extract images from PDF or use the online figure viewer
4. Or use direct figure access: https://openstax.org/books/anatomy-and-physiology/pages/1-introduction

#### Available Images to Download:
- **Cardiovascular:**
  - `Figure 19.5` - Heart anatomy (anterior view)
  - `Figure 19.11` - Cardiac conduction system
  - `Figure 19.12` - Coronary circulation
  
- **Nervous:**
  - `Figure 12.4` - Neuron structure
  - `Figure 13.3` - Brain sagittal section
  - `Figure 12.10` - Action potential graph
  
- **Respiratory:**
  - `Figure 22.2` - Respiratory system overview
  - `Figure 22.13` - Alveolar structure
  
- **Digestive:**
  - `Figure 23.2` - GI tract overview
  
- **Urinary:**
  - `Figure 25.3` - Nephron structure
  
- **Musculoskeletal:**
  - `Figure 6.3` - Bone structure
  
- **Integumentary:**
  - `Figure 5.2` - Skin layers
  
- **ECG/EKG:**
  - `Figure 19.18` - Normal ECG tracing
  - `Figure 19.19` - ECG interpretation

---

### 2. University of Michigan Medical School Histology
**License:** CC BY-NC  (Non-commercial use OK for educational app)  
**URL:** https://histology.medicine.umich.edu/  
**Best for:** Histology slides, microscopic tissue images

#### How to Download:
1. Visit https://histology.medicine.umich.edu/
2. Navigate to tissue/system of interest
3. Right-click on high-res image → "Save image as"
4. Note the magnification level (typically 100x, 200x, 400x)

#### Recommended Downloads:
- **Cardiac muscle** - 400x, H&E stain
- **Neural tissue (motor neurons)** - 400x, H&E stain
- **Lung/alveoli** - 400x, H&E stain
- **Liver lobule** - 200x, H&E stain
- **Kidney cortex** - 100x, H&E stain
- **Skin cross-section** - 100x, H&E stain
- **Compact bone** - 200x, ground section
- **Skeletal muscle** - 400x, H&E stain

---

### 3. CDC Public Health Image Library (PHIL)
**License:** Public Domain (most images)  
**URL:** https://phil.cdc.gov/  
**Best for:** Clinical photos, pathology, blood smears

#### How to Download:
1. Visit https://phil.cdc.gov/
2. Search for condition/topic
3. Click "Download" (select highest resolution)
4. Verify license: "Public Domain" (not "Copyright Restricted")

#### Recommended Downloads:
- **Blood smear** - Peripheral blood with Wright stain
- **Pneumonia** - Gross lung specimen
- **Eczema** - Atopic dermatitis clinical photo
- **Psoriasis** - Plaque psoriasis clinical photo
- **Jaundice** - Scleral icterus clinical photo
- **Digital clubbing** - Finger clubbing clinical photo

---

### 4. Radiopaedia
**License:** CC BY-NC-SA 3.0  
**URL:** https://radiopaedia.org/  
**Best for:** Medical imaging (X-ray, CT, MRI, Ultrasound)

#### How to Download:
1. Visit https://radiopaedia.org/
2. Search for imaging case
3. Click image → "Download" or right-click → "Save image as"
4. Attribution: "Case courtesy of Radiopaedia.org, rID: XXXXX"

#### Recommended Downloads:
- **Normal chest X-ray** - PA view
- **Pneumonia chest X-ray** - Right lower lobe consolidation
- **Normal chest CT** - Axial view at carina
- **Normal brain MRI** - T1-weighted axial
- **Acute stroke CT** - Hypodensity in MCA territory

---

### 5. NCI Visuals Online
**License:** Public Domain  
**URL:** https://visualsonline.cancer.gov/  
**Best for:** Pathology, cancer-related images

#### How to Download:
1. Visit https://visualsonline.cancer.gov/
2. Search for condition
3. Click "Download Image" (select appropriate resolution)

#### Recommended Downloads:
- **Coronary atherosclerosis** - Gross specimen
- **Lung cancer** - Squamous cell carcinoma

---

### 6. NIH National Eye Institute
**License:** Public Domain  
**URL:** https://www.nei.nih.gov/  
**Best for:** Ophthalmology images

#### Recommended Downloads:
- **Diabetic retinopathy** - Fundoscopic image

---

### 7. Pathology Outlines
**License:** Various (contact for permission)  
**URL:** https://www.pathologyoutlines.com/  
**Best for:** Pathology specimens

#### Recommended (request permission):
- **Healed myocardial infarction** - Heart specimen with scar

---

## 🗂️ Directory Structure

```
public/assets/images/
├── anatomy/
│   ├── cardiovascular/    # Heart diagrams, coronary arteries
│   ├── nervous/           # Brain, neuron diagrams
│   ├── respiratory/       # Lung, alveoli diagrams
│   ├── digestive/         # GI tract, organs
│   ├── urinary/           # Kidney, nephron
│   ├── musculoskeletal/   # Bone, muscle diagrams
│   ├── integumentary/     # Skin layers
│   ├── lymphatic/         # Lymph nodes, vessels
│   ├── endocrine/         # Glands, hormones
│   ├── reproductive/      # Male/female anatomy
│   └── hematologic/       # Blood cells
├── histology/             # Microscopic tissue images
├── imaging/               # X-ray, CT, MRI, ECG
├── pathology/             # Gross pathology specimens
└── clinical/              # Clinical photos, physical exam
```

---

## ✅ Download Checklist

### Anatomical Diagrams (SVG from OpenStax)
- [ ] heart-anterior.svg
- [ ] conduction-system.svg
- [ ] coronary-arteries.svg
- [ ] neuron-structure.svg
- [ ] brain-sagittal.svg
- [ ] action-potential-phases.svg
- [ ] respiratory-system.svg
- [ ] alveolus-cross-section.svg
- [ ] gi-tract-overview.svg
- [ ] nephron-structure.svg
- [ ] bone-structure.svg
- [ ] skin-layers.svg

### Histology (JPG from UMich/CDC)
- [ ] cardiac-muscle-400x.jpg
- [ ] neuron-motor-400x.jpg
- [ ] lung-alveoli-400x.jpg
- [ ] liver-lobule-200x.jpg
- [ ] kidney-cortex-100x.jpg
- [ ] skin-cross-section-100x.jpg
- [ ] bone-compact-200x.jpg
- [ ] skeletal-muscle-cross-400x.jpg
- [ ] blood-smear-wright-1000x.jpg

### Medical Imaging (JPG from Radiopaedia)
- [ ] chest-xray-normal.jpg
- [ ] chest-xray-pneumonia.jpg
- [ ] ct-chest-normal-axial.jpg
- [ ] brain-mri-t1-normal.jpg
- [ ] brain-ct-stroke.jpg

### ECG (SVG from OpenStax)
- [ ] ecg-normal-sinus.svg
- [ ] ecg-stemi-anterior.svg

### Pathology (JPG from NCI/CDC)
- [ ] coronary-atherosclerosis.jpg
- [ ] mi-healed-scar.jpg
- [ ] lung-cancer-squamous.jpg
- [ ] pneumonia-lobar.jpg
- [ ] diabetic-retinopathy.jpg

### Clinical (JPG from CDC)
- [ ] eczema-infant.jpg
- [ ] psoriasis-plaque.jpg
- [ ] jaundice-scleral.jpg
- [ ] digital-clubbing.jpg

---

## 📋 Attribution Template

For each image file, create a corresponding `.txt` file with attribution:

**Example: `heart-anterior.txt`**
```
Title: Heart Anatomy - Anterior View
Source: OpenStax Anatomy & Physiology
URL: https://openstax.org/books/anatomy-and-physiology/pages/19-1-heart-anatomy
License: CC BY 4.0
Authors: OpenStax College
Accessed: 2026-02-02

Changes: None / Resized / Converted to SVG
```

---

## 🔧 Technical Requirements

### Image Specifications

| Type | Format | Max Size | Notes |
|------|--------|----------|-------|
| Diagrams | SVG | 500KB | Vector, scalable |
| Histology | JPG | 2MB | 80% quality, progressive |
| Imaging | JPG | 3MB | DICOM converted |
| Pathology | JPG | 2MB | 80% quality |
| Clinical | JPG | 1MB | 80% quality |

### SVG Optimization
```bash
# Install svgo globally
npm install -g svgo

# Optimize SVG files
svgo input.svg -o output.svg --pretty
```

### Image Compression
```bash
# Using ImageMagick
convert input.jpg -quality 80 -strip output.jpg

# Using cwebp for WebP (optional)
cwebp -q 80 input.jpg -o output.webp
```

---

## 🚫 Sources to AVOID

These sources require licenses/subscriptions or have restricted use:
- Gray's Anatomy (copyright)
- Netter Atlas (copyright)
- Robbins Pathology (copyright)
- UpToDate images (copyright)
- Most journal figures (copyright)
- Wikipedia images without verification

---

## 📞 Contact for Permissions

For sources requiring permission:
- **Pathology Outlines:** contact@pathologyoutlines.com
- **Radiopaedia:** info@radiopaedia.org

---

## 🔄 Maintenance

- Review image licenses annually
- Update attribution if sources change URLs
- Verify all images display correctly in app
- Add new images as encyclopedia entries expand

---

## 📖 References

1. OpenStax Anatomy & Physiology (CC BY 4.0)
2. University of Michigan Medical School Histology (CC BY-NC)
3. CDC Public Health Image Library (Public Domain)
4. Radiopaedia (CC BY-NC-SA 3.0)
5. NCI Visuals Online (Public Domain)
6. NIH National Eye Institute (Public Domain)
