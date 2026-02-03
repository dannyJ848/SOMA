/**
 * Migraine - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const migraine: EducationalContent = {
  id: 'condition-migraine',
  type: 'condition',
  name: 'Migraine',
  alternateNames: ['Migraine Headache', 'Vascular Headache'],
  hpoId: 'HP:0002076',

  levels: {
    1: {
      level: 1,
      summary: 'Migraines are severe headaches often with throbbing pain, nausea, and sensitivity to light and sound.',
      explanation: `Migraines are more than just headaches—they can be very disabling and affect your whole life.

**Symptoms:**
- Intense, throbbing head pain (often one-sided)
- Nausea and vomiting
- Sensitivity to light and sound
- Visual disturbances (aura) in some people

**Triggers:** Stress, lack of sleep, certain foods, hormonal changes, weather

**Treatment:**
- Acute: Pain relievers, specific migraine medications (triptans)
- Preventive: Daily medications if frequent migraines`,
      keyTerms: [
        { term: 'migraine', definition: 'A type of severe headache often with nausea and light sensitivity' },
        { term: 'aura', definition: 'Visual or sensory symptoms that can happen before a migraine' },
      ],
      analogies: ['A migraine is like an electrical storm in your brain causing intense pain and sensory overload.'],
      examples: ['A woman who gets throbbing headaches with her period, nausea, and needs to lie in a dark room likely has migraines.'],
    },
    2: {
      level: 2,
      summary: 'Migraine is a primary headache disorder characterized by recurrent episodes of moderate-severe headache with associated symptoms, classified as with or without aura.',
      explanation: `## Diagnosis (ICHD-3)
**Migraine without aura:**
≥5 attacks lasting 4-72 hours with:
- ≥2 of: unilateral, pulsating, moderate-severe, aggravated by activity
- ≥1 of: nausea/vomiting, photophobia and phonophobia

**Migraine with aura:**
- Visual, sensory, or speech symptoms
- Fully reversible
- Develops over ≥5 minutes, lasts <60 minutes

## Treatment
**Acute:**
- NSAIDs, acetaminophen
- Triptans (sumatriptan)
- CGRP antagonists (rimegepant, ubrogepant)
- Antiemetics

**Preventive (if ≥4 headache days/month):**
- Beta-blockers, topiramate, amitriptyline
- CGRP monoclonal antibodies
- Botox for chronic migraine`,
      keyTerms: [
        { term: 'triptan', definition: 'Serotonin receptor agonist for acute migraine treatment' },
        { term: 'CGRP', definition: 'Calcitonin gene-related peptide; key molecule in migraine pathophysiology' },
        { term: 'chronic migraine', definition: '≥15 headache days/month with ≥8 having migraine features' },
      ],
    },
    3: {
      level: 3,
      summary: 'Migraine pathophysiology involves trigeminovascular activation, cortical spreading depression, and CGRP release, with management stratified by frequency and targeting multiple mechanisms.',
      explanation: `## Pathophysiology
- **Cortical spreading depression:** Wave of neuronal depolarization (triggers aura)
- **Trigeminovascular system activation:** Releases CGRP, substance P
- **Neurogenic inflammation:** Sensitization of trigeminal neurons
- **Central sensitization:** Allodynia, cutaneous hypersensitivity

## CGRP-Targeted Therapies

**Monoclonal Antibodies (Prevention):**
- Erenumab (anti-CGRP receptor)
- Fremanezumab, galcanezumab (anti-CGRP ligand)
- Eptinezumab (IV infusion)

**Small Molecules (Acute/Prevention):**
- Rimegepant, ubrogepant (gepants)
- Atogepant (prevention only)

## Chronic Migraine
- ≥15 headache days/month for ≥3 months
- ≥8 days with migraine features
- OnabotulinumtoxinA (Botox) FDA approved
- Address medication overuse headache`,
      keyTerms: [
        { term: 'cortical spreading depression', definition: 'Wave of neuronal activity thought to underlie migraine aura' },
        { term: 'trigeminovascular system', definition: 'Neural pathway involving trigeminal nerve and cerebral blood vessels' },
        { term: 'medication overuse headache', definition: 'Headache worsening from frequent acute medication use' },
      ],
      clinicalNotes: 'CGRP mAbs are well-tolerated with minimal interactions. Avoid opioids and butalbital for migraine—high risk of medication overuse headache.',
    },
    4: {
      level: 4,
      summary: 'Advanced migraine care addresses refractory cases, status migrainosus, special populations (pregnancy, cardiovascular disease), and emerging therapies targeting multiple pathways.',
      explanation: `## Refractory Migraine
**Definition:** Failure of ≥2 preventive classes and ≥3 acute medications

**Options:**
- CGRP mAbs if not tried
- Combination prevention
- Neuromodulation devices
- Inpatient treatment for status migrainosus

## Status Migrainosus
- Migraine lasting >72 hours
- IV fluids, antiemetics
- IV dihydroergotamine (DHE) protocol
- IV dexamethasone
- Nerve blocks

## Special Populations
**Pregnancy:**
- Avoid triptans (limited data, likely safe in practice)
- Acetaminophen, metoclopramide preferred
- Prevention: Propranolol, magnesium

**Cardiovascular Disease:**
- Triptans contraindicated
- Use gepants or NSAIDs
- CGRP mAbs: Caution with recent CV events

## Neuromodulation
- Single-pulse TMS (sTMS)
- Vagus nerve stimulation (nVNS)
- External trigeminal nerve stimulation
- Remote electrical neuromodulation (REN)`,
      keyTerms: [
        { term: 'status migrainosus', definition: 'Debilitating migraine lasting >72 hours' },
        { term: 'neuromodulation', definition: 'Device-based therapies stimulating nerves to treat migraine' },
        { term: 'DHE', definition: 'Dihydroergotamine; ergot derivative for severe migraine treatment' },
      ],
      clinicalNotes: 'Gepants are first migraine-specific acute treatments safe in cardiovascular disease. CGRP mAbs may be continued through pregnancy if benefits outweigh risks (limited data emerging).',
    },
    5: {
      level: 5,
      summary: 'Precision migraine medicine integrates biomarker-guided therapy, novel targets beyond CGRP (PACAP, orexin), digital therapeutics, and understanding of migraine as a complex brain network disorder.',
      explanation: `## Emerging Targets
**PACAP (Pituitary adenylate cyclase-activating peptide):**
- Similar to CGRP in migraine pathophysiology
- PACAP antagonists in development

**Orexin:**
- Sleep-wake regulation
- Orexin receptor antagonists under study

**Nitric Oxide Pathway:**
- sGC inhibitors in early development

## Digital Therapeutics
- Smartphone-based behavioral interventions
- REN devices (remote electrical neuromodulation)
- AI-powered migraine prediction

## Biomarkers
- CGRP levels (limited clinical utility currently)
- Neuroimaging signatures
- Genetic predictors of treatment response

## Network Neuroscience
- Migraine as brain network dysfunction
- Hypothalamic involvement in prodrome
- Brainstem generator hypothesis
- Implications for targeted stimulation`,
      keyTerms: [
        { term: 'PACAP', definition: 'Neuropeptide similar to CGRP, emerging migraine target' },
        { term: 'orexin', definition: 'Neuropeptide regulating sleep-wake; potential migraine target' },
        { term: 'brainstem generator', definition: 'Theory that migraine originates from brainstem nuclei' },
      ],
      clinicalNotes: 'PACAP pathway represents next major therapeutic target after CGRP. Digital therapeutics offer adjunctive options for lifestyle and behavioral management.',
    },
  },

  media: [],
  citations: [{ id: 'ahs-migraine-2021', type: 'article', title: 'American Headache Society Consensus Statement on Acute Treatment', source: 'Headache' }],
  crossReferences: [{ targetId: 'condition-tension-headache', targetType: 'condition', relationship: 'related', label: 'Tension Headache' }],
  tags: { systems: ['neurological'], topics: ['neurology'], keywords: ['migraine', 'headache', 'CGRP', 'triptan'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['neurology'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default migraine;
