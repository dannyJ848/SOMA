/**
 * Upper Endoscopy (EGD) - Comprehensive Educational Content
 *
 * Covers esophagogastroduodenoscopy including indications, technique,
 * findings, therapeutic interventions, and complications.
 */

import { EducationalContent } from '../../../types';

export const upperEndoscopy: EducationalContent = {
  id: 'procedure-upper-endoscopy',
  type: 'topic',
  name: 'Upper Endoscopy (EGD)',
  alternateNames: [
    'Esophagogastroduodenoscopy',
    'EGD',
    'Upper GI Endoscopy',
    'Gastroscopy',
    'OGD',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Upper endoscopy is a test where a doctor uses a thin, flexible tube with a camera to look inside your throat, stomach, and the first part of your small intestine.',
      explanation: `**What is Upper Endoscopy?**

Upper endoscopy is a way for doctors to look inside your upper digestive system. They use a special tool called an endoscope - it's a thin, flexible tube about as thick as your finger. The tube has a tiny camera and light on the end.

**Why is it done?**

Doctors use this test to:
- Find out why you're having stomach pain, trouble swallowing, or heartburn
- Look for ulcers (sores) in your stomach
- Check for bleeding in your stomach
- Take small tissue samples (biopsies) to test for problems
- Treat certain problems (stop bleeding, remove things that are stuck)

**How is it done?**

1. **Before the test**: You can't eat or drink for several hours before (usually overnight). This keeps your stomach empty so the doctor can see clearly.

2. **During the test**:
   - You'll get medicine to make you relaxed and sleepy
   - The doctor gently puts the endoscope through your mouth and down your throat
   - You won't be able to feel it because of the medicine
   - The test usually takes about 10-20 minutes

3. **After the test**:
   - You'll rest until the medicine wears off
   - Your throat might be a little sore
   - Someone needs to drive you home because of the medicine

**Does it hurt?**

Most people don't feel anything because of the medicine that makes you sleepy. Afterward, your throat might feel scratchy, but this goes away quickly.

**Is it safe?**

Yes, upper endoscopy is very safe. Problems are rare.`,
      keyTerms: [
        { term: 'endoscope', definition: 'A thin, flexible tube with a camera used to look inside your body', pronunciation: 'EN-doh-scope' },
        { term: 'biopsy', definition: 'Taking a tiny piece of tissue to test for problems', pronunciation: 'BY-op-see' },
        { term: 'sedation', definition: 'Medicine that makes you relaxed and sleepy during a procedure' },
        { term: 'EGD', definition: 'Short name for upper endoscopy; stands for esophagogastroduodenoscopy', pronunciation: 'E-G-D' },
      ],
      analogies: [
        'An endoscope is like a tiny camera on a flexible cable that can bend and turn to see around corners inside your body.',
        'Getting sedation for the procedure is like taking a power nap - you won\'t remember much and you\'ll wake up when it\'s over.',
      ],
      examples: [
        'A person with bad heartburn might get an upper endoscopy to check if the acid has damaged their food pipe.',
        'If someone accidentally swallows a coin, doctors can use an endoscope to take it out.',
      ],
    },
    2: {
      level: 2,
      summary: 'Upper endoscopy (EGD) is a diagnostic and therapeutic procedure that visualizes the esophagus, stomach, and duodenum. It is used to evaluate symptoms, obtain biopsies, and perform interventions like hemostasis and foreign body removal.',
      explanation: `## Overview

Esophagogastroduodenoscopy (EGD), commonly called upper endoscopy, uses a flexible endoscope to examine the upper gastrointestinal tract. It is one of the most common procedures in gastroenterology.

## Indications

**Diagnostic:**
- Dysphagia (difficulty swallowing)
- GERD symptoms not responding to treatment
- Nausea, vomiting, abdominal pain
- Evaluation of anemia or iron deficiency
- Screening for Barrett's esophagus
- Surveillance of known abnormalities
- Celiac disease (biopsy)

**Therapeutic:**
- Control of GI bleeding
- Dilation of strictures
- Foreign body removal
- Placement of feeding tubes
- Treatment of Barrett's esophagus
- Polypectomy

## The Endoscope

The standard upper endoscope is about 9-10 mm in diameter and includes:
- High-definition camera
- Light source
- Working channel for instruments
- Water/air insufflation
- Suction capability

## Procedure

**Preparation:**
- NPO (nothing by mouth) for 6-8 hours
- Review medications (may need to hold blood thinners)
- Informed consent

**Sedation Options:**
- Moderate sedation: Midazolam + fentanyl (most common)
- Monitored anesthesia care (MAC): Propofol (for complex cases)
- Unsedated: Topical anesthesia only (common in some countries)

**Technique:**
1. Patient positioned in left lateral decubitus
2. Bite block placed to protect teeth and scope
3. Scope inserted through mouth
4. Systematic examination: esophagus → stomach → duodenum
5. Retroflexion in stomach to view cardia/fundus
6. Biopsies taken as indicated
7. Therapeutic interventions performed if needed

## Common Findings

**Esophagus:**
- Esophagitis (erosions, inflammation)
- Barrett's esophagus (salmon-colored mucosa)
- Strictures
- Varices
- Tumors

**Stomach:**
- Gastritis (erythema, erosions)
- Ulcers
- Polyps
- Tumors
- Varices

**Duodenum:**
- Ulcers
- Duodenitis
- Celiac disease changes (scalloping, fissuring)
- Ampullary abnormalities

## After the Procedure

- Recovery from sedation (30-60 minutes)
- Sore throat common (resolves in 1-2 days)
- Can usually eat within hours
- Results discussed; biopsy results in days
- Watch for complications (rare): bleeding, perforation, aspiration`,
      keyTerms: [
        { term: 'esophagogastroduodenoscopy', definition: 'Full name for upper endoscopy; examination of esophagus, stomach, and duodenum', pronunciation: 'eh-SOF-ah-go-GAS-tro-doo-ah-DEN-ah-skoh-pee' },
        { term: 'retroflexion', definition: 'Bending the endoscope back on itself to view areas not seen with forward view' },
        { term: 'stricture', definition: 'Narrowing of a portion of the GI tract' },
        { term: 'working channel', definition: 'Tube within the endoscope through which instruments are passed' },
        { term: 'NPO', definition: 'Nothing by mouth (Latin: nil per os); fasting before procedure' },
        { term: 'moderate sedation', definition: 'Drug-induced state where patient can respond but may not remember the procedure' },
      ],
      analogies: [
        'The endoscope works like a periscope on a submarine - it lets the doctor see around corners and into areas they couldn\'t otherwise view.',
        'Retroflexion is like looking over your shoulder - the scope bends back to see what\'s behind it.',
      ],
    },
    3: {
      level: 3,
      summary: 'EGD technique requires systematic visualization of all mucosal surfaces, appropriate biopsy protocols, and recognition of normal variants versus pathology. Therapeutic EGD encompasses hemostasis, dilation, stenting, and ablation techniques.',
      explanation: `## Technical Considerations

### Endoscope Specifications

**Standard Diagnostic Scope:**
- Outer diameter: 9.0-9.9 mm
- Working channel: 2.8 mm
- Field of view: 140°
- Depth of field: 3-100 mm

**Therapeutic/Dual-Channel Scope:**
- Outer diameter: 11-12 mm
- Working channel(s): 3.2-3.8 mm (or dual 2.8 mm)
- Used for complex hemostasis, resection

**Ultrathin Scopes:**
- Outer diameter: 5-6 mm
- For transnasal access, pediatrics, strictures

### Systematic Examination Protocol

**Esophagus:**
1. Identify Z-line (squamocolumnar junction)
2. Note distance from incisors (normal GEJ: 38-40 cm)
3. Evaluate for Barrett's (Prague C&M classification)
4. Inspect for varices (Sarin classification)
5. Assess hiatal hernia size

**Stomach:**
1. Evaluate cardia in antegrade view
2. Survey lesser and greater curvatures
3. Examine antrum and pylorus
4. Retroflexion: fundus, cardia, incisura
5. Assess gastric folds, note any masses

**Duodenum:**
1. Duodenal bulb: anterior, posterior walls
2. Second portion: ampulla visualization
3. Note any scalloping, fissuring (celiac)

### Biopsy Protocols

**Barrett's Esophagus:**
- Seattle protocol: 4-quadrant biopsies every 2 cm
- Any nodular/irregular areas: targeted biopsies

**Celiac Disease:**
- 1-2 biopsies from duodenal bulb
- 4+ biopsies from distal duodenum
- Increased IELs may be patchy

**Gastric Intestinal Metaplasia:**
- Sydney protocol: 5 biopsies (2 antrum, 2 corpus, 1 incisura)

**H. pylori:**
- Antrum and corpus if on PPI
- Rapid urease test or histology

## Therapeutic Interventions

### Hemostasis Techniques

**Injection Therapy:**
- Epinephrine 1:10,000 (tamponade effect)
- Always combined with second modality

**Thermal Coagulation:**
- Multipolar/bipolar probe
- Heater probe
- Argon plasma coagulation (APC)

**Mechanical:**
- Through-the-scope clips
- Over-the-scope clips (OTSC)
- Band ligation (varices)

**Topical:**
- Hemostatic spray (TC-325, Hemospray)

### Dilation

**Indications:**
- Peptic strictures
- Schatzki ring
- Esophageal webs
- Anastomotic strictures
- Eosinophilic esophagitis (cautious)

**Techniques:**
- Bougie dilators (Maloney, Savary)
- Through-the-scope balloons
- Rule of 3: Don't dilate >3 sizes in one session

### Stent Placement

**Self-Expanding Metal Stents (SEMS):**
- Malignant obstruction (palliation)
- Covered vs. uncovered
- Fully covered SEMS for benign disease (removable)

**Indications:**
- Esophageal cancer
- Extrinsic compression
- Tracheoesophageal fistula
- Refractory benign strictures
- Perforations (covered SEMS)

### Mucosal Ablation

**Radiofrequency Ablation (RFA):**
- Barrett's esophagus with dysplasia
- HALO 360 (circumferential) or HALO 90 (focal)
- Multiple sessions required

**Cryotherapy:**
- Spray or balloon-based
- Alternative to RFA
- May be useful in RFA failures

### Foreign Body Removal

**Common Objects:**
- Food impactions (most common)
- Coins, button batteries (pediatric)
- Fish/chicken bones
- Sharp objects

**Tools:**
- Retrieval net (Roth net)
- Retrieval forceps (rat tooth, alligator)
- Snares
- Overtubes (for sharp objects)

**Button Batteries:**
- Emergency removal required
- Tissue damage begins within 2 hours
- Mucosal injury, perforation, fistula risk

## Complications

**Rate:** Overall 0.1-0.2% for diagnostic, higher for therapeutic

| Complication | Incidence | Risk Factors |
|-------------|-----------|--------------|
| Perforation | 0.03-0.1% | Dilation, strictures, therapeutic |
| Bleeding | 0.1-0.5% | Biopsy, polypectomy, hemostasis |
| Aspiration | 0.05-0.1% | Poor preparation, altered consciousness |
| Sedation-related | 0.1-0.3% | Cardiopulmonary comorbidities |
| Infection | Rare | EUS-FNA, stricture dilation |`,
      keyTerms: [
        { term: 'Prague classification', definition: 'System for describing Barrett\'s esophagus extent: C (circumferential) and M (maximum) length in cm' },
        { term: 'Seattle protocol', definition: 'Biopsy protocol for Barrett\'s surveillance: 4-quadrant biopsies every 2 cm' },
        { term: 'over-the-scope clip (OTSC)', definition: 'Large nitinol clip for closure of defects, fistulas, or refractory bleeding sites' },
        { term: 'argon plasma coagulation (APC)', definition: 'Non-contact thermal therapy using ionized argon gas to coagulate tissue' },
        { term: 'rule of 3', definition: 'Dilation safety principle: do not dilate more than 3 successive sizes in a single session' },
        { term: 'overtube', definition: 'Protective sheath allowing safe passage of sharp objects or multiple scope passes' },
      ],
      clinicalNotes: 'Button batteries in the esophagus are a true emergency - tissue necrosis begins within 2 hours. Food impactions in the setting of eosinophilic esophagitis require gentle approach and always biopsy after removal. Document Z-line position at every EGD to track Barrett\'s or hiatal hernia changes.',
    },
    4: {
      level: 4,
      summary: 'Advanced EGD encompasses complex therapeutic interventions including endoscopic mucosal resection, submucosal dissection, third-space endoscopy, and management of complications. Quality metrics drive optimal outcomes.',
      explanation: `## Advanced Resection Techniques

### Endoscopic Mucosal Resection (EMR)

**Principle:**
- Lift and snare technique for superficial lesions
- Removes mucosa and superficial submucosa
- Appropriate for lesions without submucosal invasion

**Techniques:**
- Inject-and-cut (saline lift)
- Cap-assisted EMR
- Band-assisted EMR (Duette)
- Underwater EMR (no injection)

**Indications:**
- Barrett's with nodular dysplasia
- Superficial esophageal cancer (T1a)
- Gastric polyps
- Early gastric cancer (selected)
- Flat colonic lesions

**Specimen Handling:**
- Pin to cork/paraffin before fixation
- Orientation for pathologist
- Assess lateral and deep margins

### Endoscopic Submucosal Dissection (ESD)

**Principle:**
- En bloc resection regardless of lesion size
- Direct dissection through submucosa
- Superior histological assessment

**Advantages over EMR:**
- Higher en bloc resection rate
- Lower local recurrence
- Better for larger lesions (>2 cm)

**Indications:**
- Early esophageal/gastric cancer
- Large colorectal lesions
- Subepithelial tumors

**Technique:**
1. Marking around lesion
2. Submucosal injection (glycerol, hyaluronic acid)
3. Circumferential mucosal incision
4. Submucosal dissection with electrosurgical knife
5. En bloc removal

**Knives:**
- Insulated-tip (IT) knife
- Dual knife
- Flex knife
- Hook knife
- Triangle-tip knife

### Third-Space Endoscopy

**Per-Oral Endoscopic Myotomy (POEM):**
- For achalasia and esophageal spasm disorders
- Submucosal tunnel → myotomy → closure

**Technique:**
1. Mucosal incision (12 cm proximal to GEJ)
2. Submucosal tunnel creation
3. Selective circular muscle myotomy
4. Extend 2-3 cm onto gastric cardia
5. Close mucosal entry with clips

**Outcomes:**
- Efficacy comparable to Heller myotomy
- Lower morbidity than surgery
- GERD is common sequela (requires PPI)

**Gastric POEM (G-POEM):**
- For refractory gastroparesis
- Pyloric myotomy via submucosal tunnel

**Submucosal Tunneling Endoscopic Resection (STER):**
- For subepithelial tumors originating from muscularis propria
- GISTs, leiomyomas

## Complex Therapeutic Situations

### Refractory Strictures

**Definition:**
- Anatomic stricture not adequately dilated to 14 mm after 5 sessions at 2-week intervals
- Inability to maintain lumen for 4 weeks after achieving 14 mm

**Management Approach:**
1. Optimize dilation technique
2. Intralesional steroid injection (triamcinolone 10-40 mg)
3. Incisional therapy (radial incisions)
4. Self-expanding stents (fully covered SEMS, biodegradable)
5. Stricturoplasty/surgical resection

### Perforations

**Recognition:**
- Subcutaneous emphysema
- Chest/abdominal pain
- Free air on imaging
- May be subtle (contained)

**Endoscopic Management:**
- Through-the-scope clips
- Over-the-scope clips (OTSC)
- Covered self-expanding stents
- Endoscopic suturing
- Tissue sealants

**Surgical Indications:**
- Large perforations
- Failed endoscopic closure
- Hemodynamic instability
- Peritonitis

### Tracheoesophageal Fistula

**Etiology:**
- Malignancy (most common)
- Prolonged intubation
- Post-surgical
- Foreign body

**Endoscopic Treatment:**
- Covered esophageal stent
- May need tracheal stent if trachea involved
- Fistula plugs, tissue adhesives

### Zenker's Diverticulum

**Endoscopic Technique:**
- Zenker's septum division
- Flexible endoscopic approach: cap-assisted, scissor knife
- Rigid endoscopic stapler diverticulotomy

**Complications:**
- Perforation
- Mediastinitis
- Recurrence (10-20%)

## Quality Metrics

### ASGE Performance Measures

**Process Measures:**
- Photo-documentation of landmarks (Z-line, pylorus, D2)
- Retroflexion performed and documented
- Barrett's surveillance per protocol
- Celiac disease: ≥4 duodenal biopsies

**Outcome Measures:**
- Complication rates
- Complete Barrett's eradication rate
- Hemostasis success rate
- Perforation rate <0.1% (diagnostic)

### Quality in Barrett's Management

**Baseline EGD:**
- Prague C&M classification
- Landmark photo-documentation
- Biopsy all visible lesions PLUS Seattle protocol

**Surveillance:**
- Adherence to interval guidelines
- Mucosal abnormality recognition rate
- Dysplasia detection rate

### Documentation Standards

**Required Elements:**
- Indication
- Sedation type and medications
- Scope type and serial number
- Extent of examination
- Findings (normal and abnormal)
- Interventions performed
- Specimens collected
- Complications
- Recommendations`,
      keyTerms: [
        { term: 'endoscopic mucosal resection (EMR)', definition: 'Resection of mucosa/superficial submucosa using snare after submucosal injection lift' },
        { term: 'endoscopic submucosal dissection (ESD)', definition: 'En bloc resection through direct submucosal dissection; allows larger lesion removal' },
        { term: 'POEM', definition: 'Per-oral endoscopic myotomy; endoscopic treatment for achalasia via submucosal tunnel' },
        { term: 'third-space endoscopy', definition: 'Procedures utilizing the submucosal space as a working tunnel (POEM, G-POEM, STER)' },
        { term: 'refractory stricture', definition: 'Stricture not achieving/maintaining 14 mm diameter after 5 dilation sessions at 2-week intervals' },
        { term: 'R0 resection', definition: 'Complete resection with negative lateral and deep margins' },
      ],
      clinicalNotes: 'ESD training requires structured curriculum and high case volume - current recommendation is 30+ supervised cases before independent practice. POEM has largely replaced Heller myotomy for achalasia at experienced centers. For perforations recognized during procedure, immediate endoscopic closure is often feasible and avoids surgery.',
    },
    5: {
      level: 5,
      summary: 'Contemporary EGD practice integrates advanced imaging modalities, artificial intelligence-assisted detection, novel therapeutic technologies, and evidence-based quality improvement initiatives to optimize patient outcomes.',
      explanation: `## Advanced Imaging Modalities

### Narrow Band Imaging (NBI)

**Technology:**
- Optical filters narrow light to 415 nm (blue) and 540 nm (green)
- Enhances mucosal and vascular patterns
- No dyes required

**Applications:**
- Barrett's surveillance: Identifies intestinal metaplasia, dysplasia
- Squamous neoplasia detection
- Gastric intestinal metaplasia
- H. pylori gastritis assessment

**Classification Systems:**
- Barrett's: BING (Barrett's International NBI Group)
- Esophageal squamous: IPCL (intrapapillary capillary loops)

### Confocal Laser Endomicroscopy (CLE)

**Technology:**
- In vivo microscopy during endoscopy
- 1000x magnification
- Requires IV fluorescein

**Applications:**
- Real-time histology prediction
- Barrett's dysplasia (targeted biopsies)
- Indeterminate strictures
- Pancreatic cysts (needle-based)

### Volumetric Laser Endomicroscopy (VLE)

**Technology:**
- Optical coherence tomography (OCT)
- Subsurface imaging (3 mm depth)
- Balloon-based circumferential scanning

**Applications:**
- Barrett's surveillance
- Subsurface Barrett's detection
- Layered abnormalities (buried glands)

### Autofluorescence Imaging (AFI)

**Technology:**
- Detects natural tissue fluorescence
- Neoplastic tissue appears different color
- High sensitivity, lower specificity

## Artificial Intelligence in Endoscopy

### Computer-Aided Detection (CADe)

**Current Applications:**
- Real-time polyp detection (colonoscopy)
- Barrett's neoplasia detection (emerging)
- Gastric cancer detection (Japan/Asia)
- Quality metric monitoring

**Technology:**
- Deep learning neural networks
- Trained on annotated image datasets
- Real-time video analysis

### Computer-Aided Diagnosis (CADx)

**Applications:**
- Polyp characterization (adenoma vs. hyperplastic)
- Barrett's dysplasia prediction
- H. pylori detection from images

**Current Evidence:**
- Multiple CADe systems FDA-cleared for colonoscopy
- Upper GI applications in development
- Augments rather than replaces endoscopist judgment

### Quality Metrics Automation

- Automated photo-documentation
- Landmark recognition
- Procedure time monitoring
- Withdrawal time analysis

## Novel Therapeutic Technologies

### Endoscopic Suturing

**Devices:**
- OverStitch (Apollo Endosurgery)
- Full-thickness suturing capability

**Applications:**
- Defect closure (post-EMR/ESD, fistulas)
- Stent anchoring
- Revisional bariatric procedures
- Gastroplasty for weight loss

### Anti-Reflux Mucosectomy (ARMS)

**Technique:**
- Crescent-shaped EMR of cardia mucosa
- Resultant scar tightens LES
- Alternative to fundoplication

**Patient Selection:**
- PPI-responsive GERD
- No large hiatal hernia
- Not widely adopted

### Full-Thickness Resection Device (FTRD)

**Technology:**
- Over-the-scope device
- Captures full-thickness tissue
- Built-in OTSC for closure

**Applications:**
- Lesions not amenable to EMR/ESD
- Subepithelial tumors
- Non-lifting lesions
- Limited to <3 cm

### Endoscopic Ultrasound (EUS) Integration

**EUS-Guided Interventions:**
- Celiac plexus neurolysis
- Pancreatic pseudocyst drainage
- Biliary drainage
- Gallbladder drainage
- Tumor ablation (radiofrequency, ethanol)

## Special Populations

### Anticoagulation Management

**ASGE Guidelines (2016 update):**

| Procedure Risk | Examples | INR Target |
|---------------|----------|------------|
| Low | Diagnostic EGD, biopsy | Continue warfarin |
| High | EMR, ESD, dilation, polypectomy | Hold warfarin |

**DOACs:**
- Low-risk: May continue or hold 24-48 hrs
- High-risk: Hold 48-72 hours
- Resume when hemostasis secure

### Pregnancy

**Indications:**
- GI bleeding
- Severe refractory nausea/vomiting
- Biliary disease

**Considerations:**
- Defer elective procedures until postpartum
- Left lateral position (avoid vena cava compression)
- Minimize sedation exposure
- Fetal monitoring as appropriate

### Bariatric Anatomy

**Roux-en-Y Gastric Bypass:**
- Gastric pouch access: Standard EGD
- Gastric remnant/biliopancreatic limb: Device-assisted enteroscopy, EUS-directed transgastric ERCP, or surgical access

**Sleeve Gastrectomy:**
- Standard EGD feasible
- Watch for staple line leaks, strictures

## Research Frontiers

### Molecular Imaging

- Fluorescently-labeled antibodies/peptides
- Target-specific detection (EGF receptor, HER2)
- Earlier detection of dysplasia/cancer

### Therapeutic Endoscopy Evolution

- Natural orifice transluminal endoscopic surgery (NOTES)
- Endoscopic full-thickness resection refinements
- Biodegradable stent development
- Targeted drug delivery

### Microbiome Sampling

- GI tract microbiome analysis
- Relationship to pathology
- Potential therapeutic targets

## Outcomes and Evidence

### Barrett's Eradication

**Complete Eradication of Intestinal Metaplasia (CE-IM):**
- RFA + EMR: 90-95% in expert centers
- Recurrence rate: 5-10% annually (requires surveillance)

**Durability:**
- Long-term studies show maintained eradication
- Risk reduction for progression to cancer

### POEM Outcomes

**Efficacy:**
- Clinical success (Eckardt ≤3): 90-95%
- Durable response at 5 years: 80-90%
- GERD incidence: 20-50% (reflux esophagitis)

**vs. Heller Myotomy:**
- Similar efficacy
- Less invasive
- Higher GERD rate

### EMR vs. ESD

**En bloc Resection Rates:**
- EMR: 70-80% (decreases with size)
- ESD: >95% regardless of size

**Recurrence:**
- EMR: 10-20% for lesions >2 cm
- ESD: <2%

**Complications:**
- EMR: Lower perforation rate
- ESD: More time, technical skill required`,
      keyTerms: [
        { term: 'narrow band imaging (NBI)', definition: 'Optical enhancement technique using filtered light wavelengths to highlight mucosal/vascular patterns' },
        { term: 'confocal laser endomicroscopy (CLE)', definition: 'Real-time in vivo microscopy during endoscopy providing cellular-level imaging' },
        { term: 'volumetric laser endomicroscopy (VLE)', definition: 'OCT-based subsurface imaging for Barrett\'s evaluation' },
        { term: 'computer-aided detection (CADe)', definition: 'AI systems that identify and highlight potential lesions in real-time during endoscopy' },
        { term: 'OverStitch', definition: 'Endoscopic suturing device enabling full-thickness tissue approximation' },
        { term: 'NOTES', definition: 'Natural orifice transluminal endoscopic surgery; surgical procedures via natural orifices without external incisions' },
        { term: 'complete eradication of intestinal metaplasia (CE-IM)', definition: 'Treatment goal in Barrett\'s: absence of intestinal metaplasia on post-treatment biopsies' },
      ],
      clinicalNotes: `Practice-changing concepts:
1. NBI should be routinely used for Barrett's surveillance - reduces sampling error vs. white light alone
2. AI-assisted detection is reality in colonoscopy and emerging in upper endoscopy - will augment quality
3. POEM is now first-line for achalasia at experienced centers; long-term GERD management is key consideration
4. ESD has superior oncologic outcomes for larger lesions but requires significant training investment
5. Anticoagulation management is nuanced - truly low-risk procedures (diagnostic + biopsy) may not require holding
6. Full-thickness resection devices expand therapeutic options for challenging lesions
7. Continuous quality improvement with metrics monitoring is standard of care
8. Advanced imaging (NBI, VLE) improves dysplasia detection but requires learning curve for interpretation`,
    },
  },

  media: [
    {
      id: 'egd-anatomy',
      type: 'diagram',
      filename: 'upper-gi-endoscopy-anatomy.svg',
      title: 'Upper GI Endoscopy Anatomy',
      description: 'Anatomical landmarks visualized during EGD',
    },
    {
      id: 'endoscope-diagram',
      type: 'diagram',
      filename: 'endoscope-components.svg',
      title: 'Endoscope Components',
      description: 'Diagram showing parts of a flexible endoscope',
    },
    {
      id: 'hemostasis-techniques',
      type: 'image',
      filename: 'endoscopic-hemostasis.jpg',
      title: 'Endoscopic Hemostasis',
      description: 'Images of various hemostasis techniques: clips, thermal, injection',
    },
  ],

  citations: [
    {
      id: 'asge-egd-role',
      type: 'article',
      title: 'The Role of Endoscopy in the Management of GERD',
      source: 'Gastrointestinal Endoscopy',
    },
    {
      id: 'asge-quality-egd',
      type: 'article',
      title: 'Quality Indicators for EGD',
      authors: ['ASGE Standards of Practice Committee'],
      source: 'Gastrointestinal Endoscopy',
    },
    {
      id: 'barrett-management',
      type: 'article',
      title: 'ACG Clinical Guideline: Diagnosis and Management of Barrett\'s Esophagus',
      source: 'American Journal of Gastroenterology',
    },
  ],

  crossReferences: [
    { targetId: 'condition-gerd-peptic-ulcer', targetType: 'condition', relationship: 'related', label: 'GERD and Peptic Ulcer' },
    { targetId: 'condition-gi-bleeding', targetType: 'condition', relationship: 'related', label: 'GI Bleeding' },
    { targetId: 'condition-celiac-malabsorption', targetType: 'condition', relationship: 'related', label: 'Celiac Disease' },
    { targetId: 'procedure-colonoscopy', targetType: 'topic', relationship: 'see-also', label: 'Colonoscopy' },
  ],

  tags: {
    systems: ['digestive', 'gastrointestinal'],
    topics: ['gastroenterology', 'procedures', 'endoscopy'],
    keywords: ['EGD', 'endoscopy', 'esophagogastroduodenoscopy', 'biopsy', 'hemostasis', 'Barrett'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default upperEndoscopy;
