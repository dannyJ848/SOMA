/**
 * Cellulitis
 *
 * Acute bacterial skin/soft-tissue infection, diagnosis vs mimics,
 * purulent vs non-purulent management, and necrotizing fasciitis red flags.
 */

import { EducationalContent } from '../../types';

export const cellulitisContent: EducationalContent = {
  id: 'derm-infectious-cellulitis',
  type: 'condition',
  name: 'Cellulitis',
  nameEs: 'Celulitis Infecciosa',
  alternateNames: ['Erysipelas', 'Skin and Soft Tissue Infection', 'SSTI'],

  levels: {
    1: {
      level: 1,
      summary: 'Cellulitis is a common skin infection caused by bacteria. The skin becomes red, swollen, warm, and painful, usually on the legs.',
      explanation: `## What Is Cellulitis?\n\nCellulitis is an infection of the deeper layers of skin. Bacteria get in through a cut, scrape, insect bite, or crack in the skin.\n\n## Signs\n- Red, warm, swollen area that spreads\n- Pain and tenderness\n- Sometimes fever and chills\n- Usually affects one leg\n\n## When to See a Doctor\n- The redness is spreading quickly\n- You have a fever\n- The area is very painful\n- Red streaks coming from the area\n\n## Treatment\n- Antibiotics (pills or IV for severe cases)\n- Rest and elevate the affected limb\n- Keep the area clean`,
      keyTerms: [
        { term: 'Cellulitis', definition: 'A bacterial infection of the deeper skin layers causing redness and swelling' },
        { term: 'Antibiotics', definition: 'Medicines that fight bacterial infections' },
      ],
      analogies: ['Cellulitis is like a fire spreading under the skin surface; antibiotics are the water to put it out.'],
      examples: ['A man with a cut on his shin develops spreading redness, warmth, and swelling up the leg'],
      patientCounselingPoints: ['Keep wounds clean and covered.', 'See a doctor right away if redness spreads or you develop a fever.', 'Finish all prescribed antibiotics.'],
    },
    2: {
      level: 2,
      summary: 'Cellulitis is a non-purulent skin and soft tissue infection typically caused by Streptococcus pyogenes or S. aureus. Erysipelas is a superficial variant. Treatment depends on purulence and severity.',
      explanation: `## Microbiology\n- Non-purulent: Group A Streptococcus (most common), other beta-hemolytic strep\n- Purulent (abscess): S. aureus, including MRSA\n- Special settings: animal bites (Pasteurella), water exposure (Vibrio, Aeromonas), diabetic foot (polymicrobial)\n\n## Cellulitis vs Erysipelas\n- Cellulitis: deeper dermis/subcutaneous, indistinct borders, no elevated edge\n- Erysipelas: superficial dermis/lymphatics, sharply demarcated raised border, "peau d'orange"\n\n## Risk Factors\n- Skin breaks, tinea pedis, edema, lymphedema\n- Obesity, diabetes, venous insufficiency\n- Prior cellulitis (30% recurrence rate)\n\n## Treatment (IDSA Guidelines)\n- Non-purulent mild: oral cephalexin or dicloxacillin\n- Non-purulent moderate: IV cefazolin or nafcillin\n- Purulent: I&D +/- TMP-SMX or doxycycline (MRSA coverage)\n- Severe: vancomycin + piperacillin-tazobactam`,
      keyTerms: [
        { term: 'Erysipelas', definition: 'Superficial cellulitis with sharply demarcated, raised borders' },
        { term: 'MRSA', definition: 'Methicillin-resistant Staphylococcus aureus requiring alternative antibiotics' },
        { term: 'Purulent', definition: 'Containing pus; suggests S. aureus, often MRSA' },
        { term: 'I&D', definition: 'Incision and drainage, primary treatment for skin abscesses' },
      ],
      analogies: ['Erysipelas is like a fire on the surface with a clear border; cellulitis spreads deeper with fuzzy edges.'],
      examples: ['A diabetic patient with tinea pedis develops non-purulent cellulitis of the lower leg, treated with oral cephalexin'],
      clinicalNotes: 'Bilateral leg redness is almost never cellulitis; consider stasis dermatitis. Mark the border of redness with a pen to track progression.',
    },
    3: {
      level: 3,
      summary: 'Distinguishing true cellulitis from mimics (stasis dermatitis, DVT, contact dermatitis) reduces unnecessary antibiotic use. LRINEC score helps identify necrotizing fasciitis, a surgical emergency.',
      explanation: `## Cellulitis Mimics ("Pseudocellulitis")\n- Stasis dermatitis: bilateral, chronic, pruritic, hemosiderin staining\n- DVT: unilateral swelling, calf tenderness; confirm with ultrasound\n- Contact dermatitis: pruritic, vesicular, exposure history\n- Gout/septic arthritis: periarticular erythema\n- Lipodermatosclerosis: "inverted champagne bottle" leg\n- Up to 30% of cellulitis admissions are misdiagnosed\n\n## Necrotizing Fasciitis Red Flags\n- Pain out of proportion to exam findings\n- Rapid progression (hours)\n- Crepitus, bullae, ecchymosis, skin necrosis\n- Systemic toxicity (sepsis, shock)\n- Surgical emergency: do not delay OR for imaging\n\n## LRINEC Score\n- CRP, WBC, hemoglobin, sodium, creatinine, glucose\n- Score >= 6: concerning for necrotizing soft tissue infection\n- Sensitivity ~80%, specificity ~95%\n\n## Special Populations\n- Immunocompromised: broader differential, atypical organisms\n- Periorbital vs orbital cellulitis: CT orbit for proptosis, ophthalmoplegia, vision change\n- Diabetic foot: polymicrobial, probe-to-bone test for osteomyelitis\n\n## Prevention of Recurrence\n- Treat tinea pedis\n- Compression stockings for edema\n- Prophylactic penicillin V for recurrent episodes (PATCH I/II trials)`,
      keyTerms: [
        { term: 'Pseudocellulitis', definition: 'Conditions mimicking cellulitis, especially stasis dermatitis, causing unnecessary antibiotic use' },
        { term: 'Necrotizing fasciitis', definition: 'Life-threatening deep soft-tissue infection requiring emergent surgical debridement' },
        { term: 'LRINEC score', definition: 'Laboratory Risk Indicator for Necrotizing Fasciitis; score >= 6 is concerning' },
        { term: 'Crepitus', definition: 'Crackling sensation on palpation indicating subcutaneous gas from anaerobic infection' },
      ],
      analogies: ['Necrotizing fasciitis is like a fire in the walls of a house: it looks modest from outside but is devastating inside.'],
      examples: ['A patient admitted for bilateral leg cellulitis is rediagnosed with stasis dermatitis after dermatology consult, antibiotics stopped'],
      clinicalNotes: 'Pain out of proportion is the most sensitive early sign of necrotizing fasciitis. Never delay surgery for imaging. The LRINEC score should raise suspicion but not replace clinical judgment.',
    },
    4: {
      level: 4,
      summary: 'Advanced cellulitis management involves understanding type I vs type II necrotizing fasciitis microbiology, immunologic basis of streptococcal virulence factors, and emerging diagnostics (point-of-care ultrasound, procalcitonin).',
      explanation: `## Necrotizing Fasciitis Classification\n- Type I: polymicrobial (aerobes + anaerobes), diabetics, postoperative; Fournier gangrene\n- Type II: monomicrobial, Group A Strep (most common), S. aureus; previously healthy patients\n- Type III: Vibrio vulnificus (saltwater/raw oysters), Aeromonas (freshwater), Clostridium (gas gangrene)\n\n## Streptococcal Virulence\n- M protein: antiphagocytic, molecular mimicry\n- Streptococcal pyrogenic exotoxins (SpeA, SpeB): superantigens -> toxic shock\n- Streptolysin O/S: tissue destruction\n- Hyaluronidase and streptokinase: tissue spread\n\n## Diagnostics\n- Blood cultures: positive in <5% of uncomplicated cellulitis\n- Point-of-care ultrasound: cobblestoning (edema), abscess detection, fascial thickening\n- CT with contrast: fascial gas, fluid tracking, extent of necrosis\n- MRI: most sensitive for deep fascial involvement (if time allows)\n- Procalcitonin: elevated in true bacterial SSTI, lower in mimics\n\n## MRSA Decolonization\n- Intranasal mupirocin + chlorhexidine body washes x 5 days\n- Reduces recurrence by ~30%\n- Household decolonization for recurrent MRSA SSTI\n\n## Antibiotic Stewardship\n- Cellulitis is the #1 indication for unnecessary antibiotics in hospitals\n- Duration: 5 days usually sufficient (non-severe, responding)\n- CRP/procalcitonin can guide de-escalation`,
      keyTerms: [
        { term: 'Fournier gangrene', definition: 'Necrotizing fasciitis of the perineum/genitalia, typically type I polymicrobial' },
        { term: 'M protein', definition: 'Streptococcal surface virulence factor conferring antiphagocytic activity' },
        { term: 'Superantigen', definition: 'Toxin that nonspecifically activates T cells causing cytokine storm and shock' },
        { term: 'Cobblestoning', definition: 'Ultrasound finding of subcutaneous edema between fat lobules in cellulitis' },
      ],
      analogies: ['A superantigen is like pulling every fire alarm in a building at once, causing an overwhelming immune response.'],
      examples: ['A fisherman develops rapidly progressive pain and bullae on his hand after handling raw oysters; Vibrio vulnificus nec fasc confirmed at surgery'],
      clinicalNotes: '5-day antibiotic courses are non-inferior to 10-day for uncomplicated cellulitis. Point-of-care ultrasound adds value in detecting occult abscesses missed on clinical exam.',
    },
    5: {
      level: 5,
      summary: 'Current research in SSTI includes phage therapy for MRSA, AI-assisted cellulitis vs mimic differentiation, novel antibiotics (delafloxacin, omadacycline, lefamulin), and understanding the skin microbiome role in infection susceptibility.',
      explanation: `## Novel Antibiotics for Resistant SSTI\n- Delafloxacin: fluoroquinolone with enhanced gram-positive (MRSA) activity at acidic pH (abscess environment)\n- Omadacycline: aminomethylcycline; oral and IV; covers MRSA, resistant to tetracycline efflux\n- Lefamulin: pleuromutilin; unique mechanism (50S ribosome); MRSA activity\n- Dalbavancin: long-acting lipoglycopeptide; single dose covers 2 weeks\n\n## Phage Therapy\n- Bacteriophages targeting MRSA biofilms\n- Compassionate-use cases showing wound clearance\n- Personalized phage cocktails matched to patient isolate\n- Regulatory framework evolving (FDA individual-patient IND)\n\n## AI-Assisted Diagnosis\n- Machine learning models differentiating cellulitis from stasis dermatitis using clinical photos\n- Sensitivity ~85%, specificity ~80% in initial studies\n- Integration with POCUS data for multimodal diagnosis\n\n## Microbiome and Infection\n- Commensal S. epidermidis produces antimicrobial peptides inhibiting S. aureus\n- Disrupted microbiome diversity predisposes to recurrent SSTI\n- Probiotic topical formulations under investigation\n\n## Biomarkers\n- sST2 (soluble suppression of tumorigenicity 2): elevated in necrotizing SSTI\n- Presepsin: early sepsis marker outperforming procalcitonin in some studies\n- CRP kinetics (velocity of rise) distinguish cellulitis from mimics`,
      keyTerms: [
        { term: 'Dalbavancin', definition: 'Long-acting lipoglycopeptide allowing single-dose SSTI treatment with 2-week coverage' },
        { term: 'Bacteriophage therapy', definition: 'Use of viruses that specifically infect and kill bacteria, including MRSA biofilms' },
        { term: 'sST2', definition: 'Soluble ST2 biomarker elevated in necrotizing soft tissue infections' },
        { term: 'Delafloxacin', definition: 'Fluoroquinolone with enhanced activity at acidic pH, effective in abscess environments' },
      ],
      analogies: ['Dalbavancin is like a long-lasting antibiotic depot: one injection covers two weeks, replacing daily dosing.'],
      examples: ['A patient with recurrent MRSA abscesses failing decolonization is treated with a personalized phage cocktail under compassionate-use IND'],
      clinicalNotes: 'Dalbavancin enables outpatient management of SSTI that would traditionally require IV therapy. AI-cellulitis tools show promise but require validation across diverse skin tones. Phage therapy remains investigational but is gaining traction for multidrug-resistant infections.',
    },
  },

  media: [],
  citations: [
    { id: 'cell-ref-1', type: 'article', title: 'IDSA Practice Guidelines for Skin and Soft Tissue Infections (2014)', source: 'Clinical Infectious Diseases', url: 'https://doi.org/10.1093/cid/ciu296' },
    { id: 'cell-ref-2', type: 'article', title: 'PATCH I and II trials: prophylactic penicillin for recurrent cellulitis', source: 'NEJM', url: 'https://doi.org/10.1056/NEJMoa1401066' },
  ],
  crossReferences: [
    { targetId: 'derm-infectious-fungal', targetType: 'condition', relationship: 'sibling', label: 'Fungal Skin Infections' },
    { targetId: 'dermatology-skin-infections', targetType: 'topic', relationship: 'parent', label: 'Skin Infections' },
  ],
  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['dermatology', 'infectious-disease', 'cellulitis', 'SSTI', 'emergency-medicine'],
    keywords: ['cellulitis', 'erysipelas', 'MRSA', 'necrotizing fasciitis', 'Group A Strep', 'antibiotics'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['medicine', 'surgery', 'dermatology'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
