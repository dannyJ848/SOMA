/**
 * Hepatitis C - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const hepatitisC: EducationalContent = {
  id: 'condition-hepatitis-c',
  type: 'condition',
  name: 'Hepatitis C',
  alternateNames: ['HCV', 'Hep C'],
  hpoId: 'HP:0003187',

  levels: {
    1: {
      level: 1,
      summary: 'Hepatitis C is a liver infection spread through blood. Most people can be cured with new medicines.',
      explanation: `Hepatitis C is a viral infection that damages the liver over time.

**How it spreads:**
- Sharing needles
- Blood transfusions before 1992 (before testing)
- From mother to baby (less common)

**Symptoms:**
- Often no symptoms at first
- Tiredness
- Yellow skin/eyes (jaundice)
- Belly pain

**Treatment:**
- Antiviral pills cure most people
- Treatment takes 8-12 weeks
- Prevents liver damage`,
      keyTerms: [
        { term: 'Hepatitis C', definition: 'Virus that causes liver disease' },
        { term: 'Liver', definition: 'Organ that helps digest food' },
        { term: 'Cure', definition: 'Getting rid of the virus' },
      ],
      analogies: [
        'Think of hepatitis C as unwanted workers damaging your liver. The medicine tells them to stop.',
      ],
      examples: ['A person with hepatitis C takes medicine for 8 weeks and is cured.', 'A nurse gets stuck by a needle and is tested for hepatitis C.'],
      patientCounselingPoints: [
        'Treatment cures hepatitis C in most people',
        'Avoid alcohol to protect your liver',
        'Family members should be tested',
      ],
    },
    2: {
      level: 2,
      summary: 'HCV causes chronic liver disease in 80% of cases. Diagnosed by antibody + RNA. Treat all with DAAs, cure >95%.',
      explanation: `## Transmission
- Percutaneous (needles, drug use)
- Transfusion (before 1992)
- Perinatal (5%)
- Rare: Sexual (MSM with HIV)

## Natural History
- Acute: Jaundice in 20%
- Chronic: 80%, cirrhosis 20% over 20 yrs
- Extrahepatic: Cryoglobulinemia, glomerulonephritis

## Diagnosis
- **Screen:** Ab (EIA)
- **Confirm:** RNA PCR
- **Genotype:** 1-6 (treatment duration)

## Treatment
- Treat all!
- DAA: Sofosbuvir/Velpatasvir 12 wks
- Monitor: RNA at 12 wks post-treatment`,
      keyTerms: [
        { term: 'DAA', definition: 'Direct-acting antiviral pills' },
        { term: 'cirrhosis', definition: 'Liver scarring' },
        { term: 'PCR', definition: 'Lab test detecting viral RNA' },
      ],
      clinicalNotes: 'Pregnancy: defer to postpartum; if urgent, Sofosbuvir/Ledipasvir/ribavirin.',
    },
    3: {
      level: 3,
      summary: 'HCV is a flavivirus with chronic infection in 80% via immune evasion. DAAs cure by inhibiting NS3/4A, NS5A, NS5B.',
      explanation: `## Virology
- Flavivirus, ssRNA
- Genotypes 1-6
- High mutation rate

## Molecular Targets
| Target | Drug Class | Example |
|---------|-----------|---------|
| NS3/4A (protease) | Protease inhibitor | Grazoprevir, Glecaprevir |
| NS5A | Replication complex | Ledipasvir, Velpatasvir |
| NS5B (polymerase) | Polymerase inhibitor | Sofosbuvir |

## Extrahepatic Manifestations
- Cryoglobulinemia (vasculitis)
- Membranoproliferative GN
- Porphyria cutanea tarda

## Algorithms
Genotype 1, 2: Sofosbuvir/Velpatasvir
Genotype 3: Sofosbuvir/Velpatasvir
Decompensated: Sofosbuvir/Velpatasvir +/- Ribavirin`,
      keyTerms: [
        { term: 'NS3/4A', definition: 'Viral protease enzyme' },
        { term: 'NS5A', definition: 'Viral replication complex protein' },
        { term: 'NS5B', definition: 'RNA-dependent RNA polymerase' },
        { term: 'cryoglobulinemia', definition: 'Protein precipitation in cold causing vasculitis' },
      ],
      clinicalNotes: 'DAAs have few side effects. Avoid in pregnancy (teratogenic).',
    },
    4: {
      level: 4,
      summary: 'Special populations: HIV coinfection, CKD, decompensated cirrhosis. Monitor for HCC after cure.',
      explanation: `## Coinfection
**HIV:**
- Treat HCV first if CD4 >350
- Watch drug interactions (ART)
- High cure rates

**CKD:**
- Sofosbuvir safe (dose adjust)
- Avoid Ribavirin

**Decompensated:**
- Child-Pugh B/C
- Avoid protease inhibitors
- Sofosbuvir/Velpatasvir x12

## Post-Cure Monitoring
- HCC risk persists if cirrhosis
- Ultrasound q6mo
- Fibrosis regression possible

## Failure
- NS5A RAVs
- Re-treat with alternative class
- Expert referral`,
      keyTerms: [
        { term: 'RAVs', definition: 'Resistance-associated variants' },
        { term: 'CKD', definition: 'Chronic kidney disease' },
        { term: 'Child-Pugh', definition: 'Score for cirrhosis severity' },
      ],
      clinicalNotes: 'ELBasvir/Grazoprevir safe in CKD. Sofosbuvir needs dose adjust GFR <30.',
    },
    5: {
      level: 5,
      summary: 'Elimination target is 2030. Vaccine and pan-genotypic DAAs are priorities. Research: pan-genotypic, pangenotypic.',
      explanation: `## Elimination
- WHO 2030: 90% Dx, 80% treated
- Micro-elimination (harm reduction)

## Pipeline
**Pan-Genotypic:**
- Single regimen for all genotypes
- Glecaprevir/Pibrentasvir
- Sofosbuvir/Velpatasvir

**Vaccine:**
- Challenges: high variability
- E1/E2 envelope proteins
- T-cell vaccine approach

## Special Cases
**Reinfection:**
- Risk behaviors continue
- Cure is not immunity
- Education essential

**Resistance:**
- NS5A RAVs selected
- Cross-resistance`,
      keyTerms: [
        { term: 'pan-genotypic', definition: 'Treatment effective against all HCV genotypes' },
        { term: 'micro-elimination', definition: 'Targeting high-risk groups to reduce incidence' },
      ],
      clinicalNotes: 'Cure rates >95%. 2030 elimination requires harm reduction, PWID outreach.',
    },
  },

  media: [],
  citations: [
    { id: 'aasld-hcv', type: 'article', title: 'HCV Guidance', source: 'AASLD-IDSA', },
    { id: 'who-hcv', type: 'website', title: 'Hepatitis C', source: 'World Health Organization', url: 'https://www.who.int/news-room/fact-sheets/detail/hepatitis-c', },
  ],
  crossReferences: [
    { targetId: 'condition-hepatitis-b', targetType: 'condition', relationship: 'sibling', label: 'Hepatitis B' },
    { targetId: 'condition-cirrhosis', targetType: 'condition', relationship: 'related', label: 'Cirrhosis' },
    { targetId: 'condition-hiv', targetType: 'condition', relationship: 'related', label: 'HIV coinfection' },
  ],
  tags: { systems: ['digestive', 'infectious'], topics: ['virology', 'gastroenterology'], keywords: ['HCV', 'hepatitis', 'liver', 'DAA', 'sofosbuvir'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hepatitisC;
