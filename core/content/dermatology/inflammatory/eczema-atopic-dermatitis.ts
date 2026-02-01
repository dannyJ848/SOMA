/**
 * Eczema / Atopic Dermatitis (In-Depth)
 *
 * Type 2 inflammatory dermatosis with skin barrier dysfunction,
 * Th2/IL-4/IL-13 axis, filaggrin mutations, and modern biologic/JAK therapy.
 */

import { EducationalContent } from '../../types';

export const eczemaAtopicDermatitisContent: EducationalContent = {
  id: 'derm-inflammatory-eczema-ad',
  type: 'condition',
  name: 'Eczema / Atopic Dermatitis',
  nameEs: 'Eccema / Dermatitis Atopica',
  alternateNames: ['AD', 'Atopic Eczema', 'Infantile Eczema'],

  levels: {
    1: {
      level: 1,
      summary: 'Eczema is a chronic condition that makes skin dry, itchy, and red. It often starts in childhood and is linked to allergies and asthma.',
      explanation: `## What Is Eczema?\n\nEczema (atopic dermatitis) causes dry, itchy, inflamed skin. It is very common in babies and children but can affect adults too.\n\n## Where Does It Appear?\n- Babies: cheeks, scalp, outer arms and legs\n- Older children and adults: inside of elbows, behind knees, hands, neck\n\n## What Causes It?\n- Runs in families\n- The skin's protective barrier does not work well\n- The immune system overreacts to irritants\n\n## How to Manage It\n- Moisturize daily with thick creams\n- Avoid harsh soaps and fragrances\n- Do not scratch (keep nails short)\n- See a doctor if it does not improve`,
      keyTerms: [
        { term: 'Eczema', definition: 'A condition making skin dry, itchy, and red' },
        { term: 'Skin barrier', definition: 'The outer layer of skin that keeps moisture in and irritants out' },
        { term: 'Flare-up', definition: 'A period when symptoms suddenly get worse' },
      ],
      analogies: ['The skin barrier is like a brick wall; in eczema the mortar is cracked, letting moisture escape and irritants enter.'],
      examples: ['A baby with red, weepy patches on both cheeks', 'A teenager who scratches behind the knees until the skin thickens'],
      patientCounselingPoints: ['Apply moisturizer right after bathing.', 'Use fragrance-free products.', 'Keep a diary of flare triggers.'],
    },
    2: {
      level: 2,
      summary: 'Atopic dermatitis is a chronic Th2-mediated inflammatory skin disease characterized by barrier dysfunction, pruritus, and the atopic march linking it to asthma and allergic rhinitis.',
      explanation: `## Pathogenesis Basics\n- Defective skin barrier lets allergens in and water out\n- Immune system shifts toward Type 2 (Th2) inflammation\n- Key cytokines: IL-4, IL-13 (inflammation), IL-31 (itch)\n\n## The Atopic March\n1. Atopic dermatitis (infancy)\n2. Food allergy\n3. Asthma\n4. Allergic rhinitis\n\n## Diagnosis (Hanifin & Rajka criteria)\n- Pruritus (required)\n- Typical distribution for age\n- Chronic or relapsing course\n- Personal/family atopic history\n\n## Treatment Ladder\n1. Emollients and trigger avoidance\n2. Topical corticosteroids (low-to-mid potency)\n3. Topical calcineurin inhibitors (tacrolimus, pimecrolimus)\n4. Phototherapy (narrowband UVB)\n5. Systemic: dupilumab, JAK inhibitors, cyclosporine`,
      keyTerms: [
        { term: 'Atopic march', definition: 'Progression from eczema to food allergy, asthma, and rhinitis' },
        { term: 'Calcineurin inhibitor', definition: 'Steroid-sparing topical cream for sensitive areas' },
        { term: 'Pruritus', definition: 'Medical term for itching' },
        { term: 'TEWL', definition: 'Transepidermal water loss, a measure of barrier function' },
      ],
      analogies: ['The atopic march is like falling dominoes: fixing the first (eczema) may prevent the rest.'],
      examples: ['A child with flexural eczema and egg allergy who later develops wheezing'],
      clinicalNotes: 'Topical calcineurin inhibitors avoid steroid atrophy on the face and eyelids. Bleach baths (0.005% sodium hypochlorite) reduce S. aureus colonization.',
    },
    3: {
      level: 3,
      summary: 'AD pathophysiology involves filaggrin-related barrier defects, Th2/Th22 cytokine networks, S. aureus superinfection risk, and scoring systems (EASI, SCORAD) that guide stepwise therapy escalation.',
      explanation: `## Barrier Dysfunction\n- Filaggrin (FLG) mutations in ~30% of European AD patients\n- Reduced ceramides and natural moisturizing factor (NMF)\n- Increased TEWL correlates with severity\n\n## Immune Dysregulation\n- Acute: Th2 dominant (IL-4, IL-13, IL-31)\n- Chronic: Th1/Th22 component (IFN-gamma, IL-22 -> lichenification)\n- Elevated serum IgE and eosinophils\n\n## Severity Scoring\n- EASI (0-72): area + erythema, induration, excoriation, lichenification\n- SCORAD (0-103): adds subjective itch/sleep\n- IGA 0-4 scale\n\n## Complications\n- Eczema herpeticum (disseminated HSV): dermatologic emergency\n- S. aureus colonization >90%; impetiginization\n- Eczema vaccinatum (historical: smallpox vaccine)\n\n## Phototherapy\n- Narrowband UVB 311 nm, 2-3x/week\n- Reduces Th2 cytokines and Langerhans cell antigen presentation`,
      keyTerms: [
        { term: 'Filaggrin', definition: 'Structural protein of the stratum corneum; loss-of-function mutations are the strongest genetic risk for AD' },
        { term: 'EASI', definition: 'Eczema Area and Severity Index, standard clinical trial outcome measure' },
        { term: 'Eczema herpeticum', definition: 'Widespread HSV infection on eczematous skin requiring urgent antiviral therapy' },
        { term: 'Lichenification', definition: 'Thickened, leathery skin from chronic scratching' },
      ],
      analogies: ['Filaggrin is the mortar between the bricks of the skin barrier; without it, the wall is porous.'],
      examples: ['A child with worsening eczema and clustered vesicles on an erythematous base is diagnosed with eczema herpeticum and started on IV acyclovir'],
      clinicalNotes: 'EASI 75 (75% improvement) is the standard primary endpoint in clinical trials. Always culture punched-out erosions to rule out eczema herpeticum.',
    },
    4: {
      level: 4,
      summary: 'AD involves JAK-STAT signaling downstream of IL-4/IL-13 receptors, S. aureus biofilm-mediated immune evasion, and a modern treatment paradigm with dupilumab, tralokinumab, and oral JAK1 inhibitors (upadacitinib, abrocitinib).',
      explanation: `## JAK-STAT Signaling\n- IL-4 -> JAK1/JAK3 -> STAT6\n- IL-13 -> JAK1/TYK2 -> STAT6\n- IL-31 (itch) -> JAK1/JAK2 -> STAT3\n- STAT6 drives IgE class-switching, barrier gene downregulation\n\n## Microbiome\n- S. aureus colonization: delta-toxin degranulates mast cells\n- Biofilm formation resists topical antibiotics\n- Microbial diversity inversely correlates with flare severity\n\n## Biologic Therapies\n- Dupilumab (anti-IL-4Ralpha): blocks IL-4 + IL-13; EASI 75 ~40% week 16; conjunctivitis 8-25%\n- Tralokinumab (anti-IL-13): IGA 0/1 ~25-33%\n- Lebrikizumab (anti-IL-13): every-4-week dosing advantage\n\n## Oral JAK Inhibitors\n- Upadacitinib 15-30 mg: EASI 75 ~70%; superior to dupilumab (Heads Up)\n- Abrocitinib 100-200 mg: rapid itch relief within days\n- Boxed warning: VTE, serious infections, malignancy\n\n## Topical JAK\n- Ruxolitinib cream 1.5%: mild-moderate AD, JAK1/2`,
      keyTerms: [
        { term: 'JAK-STAT', definition: 'Intracellular signaling cascade mediating cytokine effects; therapeutic target in AD' },
        { term: 'Dupilumab', definition: 'Anti-IL-4Ralpha mAb blocking IL-4/IL-13; first biologic for AD' },
        { term: 'Upadacitinib', definition: 'Oral JAK1 inhibitor; showed superiority over dupilumab in Heads Up trial' },
        { term: 'Delta-toxin', definition: 'S. aureus toxin that degranulates mast cells, worsening itch and inflammation' },
      ],
      analogies: ['JAK-STAT is a relay telephone: the cytokine calls JAK, JAK connects to STAT, STAT delivers the message to the nucleus.'],
      examples: ['A patient failing dupilumab is switched to upadacitinib 30 mg with itch improvement within 48 hours'],
      clinicalNotes: 'JAK inhibitors carry a boxed warning extrapolated from tofacitinib RA data (ORAL Surveillance). Herpes zoster vaccination is recommended before starting JAK inhibitors. Monitor CBC, lipids, and LFTs.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge AD research includes OX40/OX40L blockade (rocatinlimab, amlitelimab), anti-IL-31RA (nemolizumab), AhR agonism (tapinarof), microbiome transplants, and neuroimmune crosstalk targeting TRPV1/TSLP/IL-33 alarmin pathways.',
      explanation: `## Pipeline Biologics\n- Nemolizumab (anti-IL-31RA): dramatic pruritus reduction within 1 week; approved for prurigo nodularis\n- Rocatinlimab (anti-OX40): depletes pathogenic T cells; sustained improvement after discontinuation\n- Amlitelimab (anti-OX40L): non-depleting, blocks T-cell costimulation\n\n## Novel Small Molecules\n- Tapinarof 1% cream (AhR agonist): phase 3 in AD; downregulates Th2 cytokines and restores barrier proteins\n- Difamilast (PDE4 inhibitor): approved in Japan, superior to crisaborole in trials\n\n## Neuroimmune Axis\n- TSLP and IL-33 (epithelial alarmins) initiate Th2 cascade\n- Tezepelumab (anti-TSLP): asthma-approved, AD trials ongoing\n- Itepekimab (anti-IL-33): phase 2 in AD\n- Sensory neuron TRPV1/TRPA1 channels amplify itch via substance P, CGRP\n\n## Microbiome Therapeutics\n- Roseomonas mucosa transplant: phase 2 showed clinical improvement\n- Staphylococcus hominis A9 lantibiotics kill S. aureus selectively\n- Phage therapy targeting S. aureus biofilms under investigation\n\n## Precision Medicine\n- Endotyping: Asian AD has more Th17/Th22; pediatric AD more Th2/Th9\n- Biomarkers: TARC/CCL17 correlates with disease activity\n- Potential to match therapy to cytokine endotype`,
      keyTerms: [
        { term: 'OX40/OX40L', definition: 'T-cell costimulatory pathway; blockade may produce sustained remission in AD' },
        { term: 'Nemolizumab', definition: 'Anti-IL-31RA antibody targeting the itch cytokine pathway' },
        { term: 'TSLP', definition: 'Thymic stromal lymphopoietin, epithelial alarmin initiating the Th2 cascade' },
        { term: 'TARC/CCL17', definition: 'Serum biomarker correlating with AD disease activity' },
      ],
      analogies: ['Alarmins (TSLP, IL-33) are the fire alarm in the skin that triggers the entire Th2 inflammatory response downstream.'],
      examples: ['A patient refractory to dupilumab and upadacitinib enrolls in a rocatinlimab trial and achieves sustained EASI 90 even after washout'],
      clinicalNotes: 'OX40-targeting agents may provide a disease-modifying effect by eliminating pathogenic memory T cells, potentially enabling treatment-free remission. Endotype-guided therapy is the future direction.',
    },
  },

  media: [],
  citations: [
    { id: 'eczema-ad-ref-1', type: 'textbook', title: 'Dermatology (Bolognia)', authors: ['Bolognia, J.', 'Schaffer, J.', 'Cerroni, L.'], source: 'Elsevier', chapter: 'Atopic Dermatitis' },
    { id: 'eczema-ad-ref-2', type: 'article', title: 'Dupilumab in moderate-to-severe atopic dermatitis (LIBERTY AD SOLO)', source: 'NEJM', url: 'https://doi.org/10.1056/NEJMoa1610020' },
  ],
  crossReferences: [
    { targetId: 'derm-inflammatory-psoriasis', targetType: 'condition', relationship: 'sibling', label: 'Psoriasis' },
    { targetId: 'dermatology-inflammatory-skin', targetType: 'topic', relationship: 'parent', label: 'Inflammatory Skin Conditions' },
  ],
  tags: {
    systems: ['integumentary', 'immune'],
    topics: ['dermatology', 'atopic-dermatitis', 'eczema', 'biologics', 'immunology'],
    keywords: ['dupilumab', 'JAK inhibitor', 'filaggrin', 'Th2', 'IL-4', 'IL-13', 'pruritus'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['dermatology', 'medicine', 'pediatrics'] },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
