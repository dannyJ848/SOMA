/**
 * Dental Infections - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const dentalInfections: EducationalContent = {
  id: 'topic-dental-infections',
  type: 'topic',
  name: 'Dental Infections',
  nameEs: 'Infecciones Dentales',
  alternateNames: ['Odontogenic Infections', 'Tooth Infections', 'Dental Abscesses'],

  levels: {
    1: {
      level: 1,
      summary: 'Dental infections happen when bacteria get inside a tooth or into the gums. They can cause pain, swelling, and fever. Some dental infections can become serious and need immediate treatment.',
      explanation: `**What Is a Dental Infection?**
When bacteria cause an infection in or around your teeth and gums.

**Common Types:**
1. **Tooth abscess**: Infection at the root of a tooth
2. **Gum abscess**: Infection in the gums
3. **Pericoronitis**: Infection around a wisdom tooth

**Warning Signs:**
- Throbbing tooth pain
- Swelling in the face or gums
- Bad taste in mouth
- Fever
- Difficulty swallowing

**When to Seek Emergency Care:**
- Swelling spreading to face or neck
- Trouble breathing or swallowing
- High fever
- Cannot open mouth

**Treatment:**
- Antibiotics to fight infection
- Drainage of pus
- Root canal or extraction
- Pain medication

**Prevention:**
- Brush twice daily
- Floss every day
- Regular dental checkups
- Treat cavities early
- Do not ignore tooth pain`,
      keyTerms: [
        { term: 'abscess', definition: 'A pocket of pus caused by bacterial infection' },
        { term: 'bacteria', definition: 'Tiny germs that can cause infection' },
        { term: 'swelling', definition: 'Puffiness caused by fluid and inflammation' },
        { term: 'drainage', definition: 'Releasing pus from an infection' },
      ],
      analogies: [
        'An abscess is like a balloon of infection - it needs to be drained to get better.',
        'Bacteria spreading from a tooth is like a small fire that can grow into a big one if not stopped.',
      ],
      examples: [
        'A cavity left untreated becomes infected and causes a painful abscess needing antibiotics.',
        'Swelling from a tooth infection spreads to the neck and requires emergency hospital treatment.',
      ],
    },
    2: {
      level: 2,
      summary: 'Odontogenic infections arise from teeth or supporting structures and can spread through fascial spaces. Treatment combines source control (drainage, extraction) with appropriate antibiotics.',
      explanation: `## Types of Dental Infections

**Periapical Abscess:**
- Infection at root tip
- From pulp necrosis (dead tooth nerve)
- Caused by deep cavity or trauma
- Symptoms: Severe pain, sensitivity to heat

**Periodontal Abscess:**
- Infection in gum tissues
- Associated with gum disease
- Symptoms: Swelling, pus, pain when chewing

**Pericoronitis:**
- Infection around partially erupted tooth
- Common with wisdom teeth
- Symptoms: Pain, swelling, difficulty opening mouth

## Spread of Infection

**Local Spread:**
| Origin | Spread Direction |
|--------|------------------|
| Upper front teeth | Lip, nose area |
| Upper back teeth | Cheek, sinuses |
| Lower front teeth | Chin area |
| Lower back teeth | Jaw, neck |

**Warning Signs of Spread:**
- Fever over 101F
- Swelling extending beyond tooth area
- Difficulty swallowing
- Difficulty breathing
- Cannot open mouth fully

## Treatment Principles

**Source Control:**
| Method | When Used |
|--------|-----------|
| Incision and drainage | Abscess with pus |
| Root canal | Save the tooth |
| Extraction | Tooth cannot be saved |
| Scaling | Periodontal abscess |

**Antibiotics:**
| Type | Use |
|------|-----|
| Amoxicillin | First choice |
| Clindamycin | Penicillin allergy |
| Metronidazole | Added for severe infections |

**Pain Management:**
- Ibuprofen + acetaminophen combination
- Effective for dental pain
- Use as directed

## Prevention

- Regular dental care
- Treat cavities promptly
- Good oral hygiene
- Address gum disease
- Regular cleanings`,
      keyTerms: [
        { term: 'periapical', definition: 'At the tip of the tooth root' },
        { term: 'pericoronitis', definition: 'Infection of gum tissue around partially erupted tooth' },
        { term: 'source control', definition: 'Treating the cause of infection (drainage, extraction)' },
        { term: 'incision and drainage', definition: 'Cutting into abscess to release pus' },
        { term: 'fascial spaces', definition: 'Areas where infection can spread in the head and neck' },
      ],
      analogies: [
        'Source control is like turning off a faucet - antibiotics mop up the water, but you need to stop the source.',
        'Fascial spaces are like highways for infection to travel through the face and neck.',
      ],
    },
    3: {
      level: 3,
      summary: 'Odontogenic infections are polymicrobial, spreading through fascial planes of least resistance. Severity assessment guides outpatient versus inpatient management, with source control being the cornerstone of treatment.',
      explanation: `## Microbiology

**Polymicrobial Nature:**
| Category | Common Organisms |
|----------|------------------|
| Facultative | Streptococcus viridans, S. anginosus |
| Anaerobic | Prevotella, Porphyromonas, Fusobacterium |
| Other | Peptostreptococcus, Actinomyces |

**Virulence Factors:**
- Bacterial synergy
- Enzyme production
- Capsule formation
- Biofilm development

## Fascial Space Anatomy

**Primary Spaces:**
| Space | Associated Teeth |
|-------|------------------|
| Canine | Maxillary canines |
| Buccal | Maxillary/mandibular molars |
| Submandibular | Mandibular molars (below mylohyoid) |
| Sublingual | Mandibular teeth (above mylohyoid) |
| Submental | Mandibular incisors |

**Secondary Spaces:**
| Space | Risk |
|-------|------|
| Masseteric | Trismus |
| Pterygomandibular | Trismus |
| Parapharyngeal | Airway, vessels |
| Retropharyngeal | Mediastinum |
| Infratemporal | Intracranial spread |

## Severity Assessment

**Clinical Indicators:**
| Finding | Significance |
|---------|--------------|
| Temperature >38.5C | Systemic involvement |
| Trismus <20mm | Deep space involvement |
| Dysphagia | Pharyngeal space |
| Dysphonia | Laryngeal involvement |
| Respiratory distress | Airway compromise |
| Bilateral floor swelling | Ludwig's angina |

**Laboratory:**
- WBC elevation
- Elevated CRP
- Possible blood cultures

## Treatment Algorithm

**Outpatient Criteria:**
- Localized swelling
- No fever
- Able to swallow
- Immunocompetent
- Reliable follow-up

**Inpatient Criteria:**
- Fever
- Trismus
- Dysphagia
- Rapid progression
- Immunocompromised
- Unreliable patient

**Antibiotic Selection:**
| Setting | Regimen |
|---------|---------|
| Outpatient mild | Amoxicillin 500mg TID |
| Outpatient moderate | Amoxicillin-clavulanate 875mg BID |
| Penicillin allergy | Clindamycin 300mg QID |
| Inpatient | Ampicillin-sulbactam IV |
| Severe/ICU | Piperacillin-tazobactam + clindamycin |

## Source Control

**Timing:**
- Do not delay for antibiotics to work
- Drainage essential
- Definitive treatment (RCT or extraction) as soon as feasible

**Drainage Techniques:**
- Intraoral incision when possible
- Extraoral for large collections
- Through-and-through for Ludwig's
- Drain placement for continued drainage`,
      keyTerms: [
        { term: 'Ludwig\'s angina', definition: 'Bilateral submandibular/sublingual space infection with airway risk' },
        { term: 'trismus', definition: 'Limited mouth opening from muscle spasm or space involvement' },
        { term: 'polymicrobial', definition: 'Infection caused by multiple bacterial species' },
        { term: 'mylohyoid', definition: 'Muscle determining whether infection spreads above or below' },
        { term: 'CRP', definition: 'C-reactive protein; inflammatory marker' },
      ],
      clinicalNotes: 'Source control is paramount - antibiotics alone will not cure odontogenic infections. Ludwig\'s angina requires immediate surgical consultation and airway management. Trismus indicates deep space involvement requiring imaging and likely surgical drainage.',
    },
    4: {
      level: 4,
      summary: 'Advanced odontogenic infection management integrates imaging for surgical planning, antimicrobial stewardship principles, airway algorithms, and management of life-threatening complications including Ludwig\'s angina, necrotizing fasciitis, and mediastinitis.',
      explanation: `## Advanced Imaging

**CT with Contrast:**
| Finding | Significance |
|---------|--------------|
| Rim enhancement | Abscess (drainable) |
| Diffuse enhancement | Cellulitis |
| Gas | Necrotizing infection |
| Vessel involvement | Thrombosis risk |

**Imaging Indications:**
- Multiple space involvement
- Concern for deep spaces
- Surgical planning
- Poor response to treatment
- Airway assessment

## Life-Threatening Complications

**Ludwig's Angina:**
| Feature | Management |
|---------|------------|
| Bilateral involvement | Aggressive surgical drainage |
| Woody floor of mouth | Secure airway first |
| Elevated tongue | May need surgical airway |
| Drooling | IV antibiotics |
| Stridor | ICU admission |

**Airway Algorithm:**
1. Assess stability
2. Prepare for difficult airway
3. Awake fiberoptic if possible
4. Surgical airway readily available
5. Do not sedate until airway secured

**Necrotizing Fasciitis:**
- Rapid progression
- Tissue necrosis
- Crepitus (gas in tissues)
- Bullae formation
- Requires emergent debridement
- Mortality 20-40%

**Mediastinitis:**
- Infection descending to chest
- From retropharyngeal spread
- High mortality
- Requires thoracic surgery

**Cavernous Sinus Thrombosis:**
- From midface infections
- Orbital symptoms
- Cranial nerve palsies
- Anticoagulation controversial
- IV antibiotics mandatory

## Antimicrobial Stewardship

**Duration Principles:**
| Scenario | Duration |
|----------|----------|
| Simple abscess + drainage | 3-5 days |
| Moderate infection | 5-7 days |
| Severe/hospitalized | 7-14 days |
| Source controlled | Shorter acceptable |

**When to Add Coverage:**
| Concern | Addition |
|---------|----------|
| Anaerobic coverage | Metronidazole |
| MRSA risk | Vancomycin |
| Pseudomonas risk | Piperacillin-tazobactam |
| Fungal (prolonged) | Fluconazole |

## Special Populations

**Immunocompromised:**
| Factor | Modification |
|--------|--------------|
| Neutropenia | Broader coverage, admission |
| Diabetes | Tight glucose control |
| HIV | CD4 count guides management |
| Transplant | Coordinate with team |

**Anticoagulated:**
- Bleeding risk with drainage
- Local measures usually sufficient
- Reversal for life-threatening
- Coordinate with prescriber

## Surgical Principles

**Drainage Approaches:**
| Space | Approach |
|-------|----------|
| Canine | Intraoral vestibular |
| Buccal | Intraoral or extraoral |
| Submandibular | Extraoral submandibular |
| Sublingual | Intraoral floor of mouth |
| Deep neck spaces | External with drains |

**Drain Management:**
- Penrose or closed suction
- Daily assessment
- Remove when output minimal
- Culture if not improving`,
      keyTerms: [
        { term: 'rim enhancement', definition: 'CT finding indicating drainable abscess cavity' },
        { term: 'necrotizing fasciitis', definition: 'Rapidly progressive soft tissue infection with necrosis' },
        { term: 'mediastinitis', definition: 'Infection of mediastinum; life-threatening complication' },
        { term: 'Lemierre syndrome', definition: 'Internal jugular vein thrombophlebitis with septic emboli' },
        { term: 'MRSA', definition: 'Methicillin-resistant Staphylococcus aureus' },
      ],
      clinicalNotes: 'Ludwig\'s angina mortality has decreased from 50% to 8% with modern management, but remains a surgical emergency. CT is essential for surgical planning in deep space infections. Antimicrobial stewardship reduces resistance - source control allows shorter antibiotic courses. Necrotizing fasciitis requires immediate surgical consultation - do not wait for imaging.',
    },
    5: {
      level: 5,
      summary: 'Contemporary odontogenic infection research encompasses microbiome analysis, biomarkers for severity prediction, novel antimicrobials, and precision approaches to prevent and treat these potentially life-threatening infections.',
      explanation: `## Microbiome Research

**Dysbiosis in Infection:**
| Normal | Infection |
|--------|-----------|
| Diverse flora | Reduced diversity |
| Commensal dominant | Pathogen overgrowth |
| Balanced ecosystem | Ecological disruption |

**Emerging Pathogens:**
| Organism | Significance |
|----------|--------------|
| S. anginosus group | Abscess formation |
| Prevotella species | Beta-lactamase production |
| Fusobacterium | Necrotizing potential |
| Aggregatibacter | Aggressive periodontitis |

**Resistance Trends:**
- Penicillin resistance increasing
- Beta-lactamase production common
- Clindamycin resistance variable
- Metronidazole resistance rare

## Biomarkers and Diagnostics

**Severity Prediction:**
| Biomarker | Utility |
|-----------|---------|
| CRP | Inflammation severity |
| Procalcitonin | Bacterial vs viral |
| WBC differential | Immune response |
| Lactate | Tissue perfusion |

**Imaging Advances:**
| Technology | Application |
|------------|-------------|
| CT perfusion | Tissue viability |
| MRI | Soft tissue detail |
| Ultrasound | Bedside assessment |
| PET-CT | Persistent infection |

**Point-of-Care:**
- Rapid pathogen identification
- Resistance detection
- Biomarker panels
- AI-assisted diagnosis

## Novel Therapeutics

**Antimicrobial Advances:**
| Approach | Status |
|----------|--------|
| Novel beta-lactams | Approved |
| Bacteriophage therapy | Clinical trials |
| Antimicrobial peptides | Research |
| Biofilm disruptors | Experimental |

**Adjunctive Therapies:**
| Therapy | Rationale |
|---------|-----------|
| Hyperbaric oxygen | Anaerobe inhibition |
| Immunomodulation | Host response |
| Probiotics | Flora restoration |
| Photodynamic therapy | Local antimicrobial |

## Prevention Strategies

**Risk Assessment:**
| Factor | Intervention |
|--------|--------------|
| Poor oral health | Preventive dentistry |
| Immunocompromise | Close monitoring |
| Diabetes | Glycemic control |
| Smoking | Cessation support |

**Public Health:**
- Access to dental care
- Health literacy
- Early intervention programs
- Provider education

## Quality and Outcomes

**Performance Metrics:**
| Metric | Target |
|--------|--------|
| Time to source control | <24 hours |
| Appropriate antibiotics | First-line when indicated |
| ICU admission rate | Minimize with early treatment |
| Mortality | <5% for managed cases |

**Research Priorities:**
1. Rapid diagnostics for pathogens
2. Biomarkers for severity prediction
3. Optimal antibiotic duration
4. Prevention in high-risk groups
5. Novel anti-biofilm strategies

## Future Directions

**Personalized Medicine:**
\`\`\`
Patient Assessment
        ↓
Risk Stratification
        ↓
Microbiome Analysis
        ↓
Tailored Therapy
        ↓
Precision Monitoring
\`\`\`

**Emerging Technologies:**
| Innovation | Potential |
|------------|-----------|
| AI triage tools | Earlier identification |
| Microbiome manipulation | Infection prevention |
| Gene therapy | Host defense enhancement |
| Nanotechnology | Targeted drug delivery |`,
      keyTerms: [
        { term: 'dysbiosis', definition: 'Imbalance in oral microbiome predisposing to infection' },
        { term: 'procalcitonin', definition: 'Biomarker elevated in bacterial infections' },
        { term: 'bacteriophage', definition: 'Virus targeting specific bacteria; potential therapeutic' },
        { term: 'biofilm', definition: 'Bacterial community in protective matrix; resistant to antibiotics' },
      ],
      clinicalNotes: `Research priorities:
1. Rapid molecular diagnostics may allow targeted therapy
2. Biofilm disruption strategies show promise for chronic infections
3. AI-assisted triage tools may identify severe cases earlier
4. Probiotic restoration of oral flora under investigation
5. Prevention through improved access to dental care remains most effective
6. Antimicrobial stewardship reduces resistance development`,
    },
  },

  media: [{ id: 'fascial-spaces', type: 'diagram', filename: 'fascial-space-anatomy.svg', title: 'Fascial Space Anatomy', description: 'Head and neck fascial spaces and infection spread patterns' }],
  citations: [{ id: 'flynn-infections', type: 'article', title: 'Odontogenic Infections', authors: ['Flynn, T.R.'], source: 'Oral and Maxillofacial Surgery Clinics' }],
  crossReferences: [{ targetId: 'topic-dental-emergencies', targetType: 'topic', relationship: 'parent', label: 'Dental Emergencies' }],
  tags: { systems: ['dental', 'immune'], structures: ['teeth', 'fascial spaces'], topics: ['emergency', 'infection'], keywords: ['abscess', 'Ludwig angina', 'antibiotics', 'drainage'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'emergency medicine'] } },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dentalInfections;
