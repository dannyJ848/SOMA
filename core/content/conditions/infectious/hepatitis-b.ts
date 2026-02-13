/**
 * Hepatitis B - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const hepatitisB: EducationalContent = {
  id: 'condition-hepatitis-b',
  type: 'condition',
  name: 'Hepatitis B',
  nameEs: 'Hepatitis B',
  alternateNames: ['HBV', 'Hep B', 'Serum Hepatitis'],
  hpoId: 'HP:0003185',

  levels: {
    1: {
      level: 1,
      summary: 'Hepatitis B is a liver infection from a virus that spreads through blood and bodily fluids. A vaccine can prevent it.',
      explanation: `Hepatitis B is a viral infection that affects the liver. It spreads through contact with infected blood or bodily fluids.

**How it spreads:**
- From mother to baby at birth
- Sharing needles
- Unprotected sex
- Contact with infected blood

**Prevention:**
- Vaccine (3-shot series)
- Not sharing needles
- Safe sex practices

**Treatment:**
- Many people clear it naturally
- Some need antiviral medicine
- Can lead to liver problems if untreated

**Who needs vaccine:**
- All infants
- Healthcare workers
- People with liver disease`,
      keyTerms: [
        { term: 'Hepatitis B', definition: 'A virus that causes liver inflammation' },
        { term: 'Liver', definition: 'Organ that filters blood and helps digestion' },
        { term: 'Vaccine', definition: 'Medicine that prevents disease' },
      ],
      analogies: [
        'The liver is like a filter. Hepatitis is like debris clogging the filter.',
      ],
      examples: ['A baby born to a mother with hepatitis B gets the vaccine and medicine to prevent infection.', 'A healthcare worker gets vaccinated before working with patients.'],
      patientCounselingPoints: [
        'The hepatitis B vaccine is safe and effective',
        'If you have hepatitis B, avoid alcohol to protect your liver',
        'Family members should be tested',
      ],
    },
    2: {
      level: 2,
      summary: 'HBV causes acute and chronic liver infection. Screen with HBsAg. Treat chronic disease with oral antivirals; vaccine prevents infection.',
      explanation: `## Transmission
- Perinatal (most common worldwide)
- Sexual contact
- Percutaneous (needles)
- Rare: Transfusions

## Phases
- **Acute:** Jaundice, fatigue, RUQ pain
- **Chronic:** >6 months, increased HCC risk

## Lab Findings
- **HBsAg+:** Active infection
- **Anti-HBc IgM+:** Acute infection
- **Anti-HBs+:** Immunity/Recovery
- **HBeAg+:** High viral replication

## Treatment
- **Acute:** Supportive care (rarely severe)
- **Chronic:** Tenofovir, Entecavir, TAF
- **Vaccine:** 3 dose series, effective in >95%`,
      keyTerms: [
        { term: 'HBsAg', definition: 'Hepatitis B surface antigen; present in infection' },
        { term: 'chronic', definition: 'Infection lasting >6 months' },
        { term: 'HCC', definition: 'Liver cancer' },
      ],
      clinicalNotes: 'Screen high-risk (born in endemic area, MSM, dialysis, incarcerated). Vaccinate if not immune.',
    },
    3: {
      level: 3,
      summary: 'HBV is a double-stranded DNA hepadnavirus causing liver injury via immune-mediated cytotoxicity. Treatment: oral agents suppress replication.',
      explanation: `## Virology
- dsDNA virus, hepadnaviridae
- Replicates via RNA intermediate (reverse transcription)
- Genotype A-H

## Serology (window period)
| Marker | Infection | Resolving | Chronic | Vaccinated |
|--------|-----------|-----------|----------|------------|
| HBsAg | + | -> - | + | - |
| Anti-HBc IgM | + | -> - | - | - |
| Anti-HBc IgG | - | + | + | - |
| Anti-HBs | - | + | - | + |

## Pathogenesis
- Immune-mediated damage (not directly cytopathic)
- Integration into host genome
- Increased HCC risk

## Treatment
**Nucleos(t)ide Analogs:**
- Tenofovir (TDF/TAF)
- Entecavir (first-line)
- Lamivudine (high resistance)
- Adefovir (second-line)

**Pegylated IFN-alpha** (less used)`,
      keyTerms: [
        { term: 'reverse transcription', definition: 'Creating DNA from RNA template' },
        { term: 'genotype', definition: 'Genetic variant of HBV' },
        { term: 'serology', definition: 'Blood test for antibodies/antigens' },
        { term: 'hepatocellular carcinoma', definition: 'Liver cancer' },
      ],
      clinicalNotes: 'Treat if: HBV DNA >2,000 IU/mL and elevated ALT, or cirrhosis regardless of labs.',
    },
    4: {
      level: 4,
      summary: 'Chronic HBV management includes monitoring for HCC, treating with NA therapy, and preventing transmission in pregnancy.',
      explanation: `## Monitoring Chronic HBV
- **ALT every 3-6 months
- **HCC screening:** Ultrasound ± AFP q6mo (Asian men >40, women >50, cirrhosis, FHx)
- **Fibrosis:** Non-invasive markers, FibroScan

## Resistance Testing
- Entecavir: M204V/I, L180M
- Tenofovir: A194T (rare)

## Pregnancy
- High MTCT: 10-30% HBeAg+ to 90% HBeAg-
- Tenofovir in 3rd trimester if VL >200,000
- Vaccine/ HBIG for neonate

## Coinfection
- HIV: Treat both
- HDV: Requires interferon
- HCV: Treat HCV; watch HBV flare`,
      keyTerms: [
        { term: 'AFP', definition: 'Alpha-fetoprotein, tumor marker for HCC' },
        { term: 'MTCT', definition: 'Mother-to-child transmission' },
        { term: 'HDV', definition: 'Hepatitis D, requires HBV coinfection' },
        { term: 'ALT', definition: 'Alanine aminotransferase, liver enzyme' },
      ],
      clinicalNotes: 'Nucleos(t)ide analogs have minimal resistance but can cause lactic acidosis. Monitor for osteoporosis/renal with TDF.',
    },
    5: {
      level: 5,
      summary: 'Novel HBV therapies target entry inhibitors, capsid assembly, and siRNA, while curative strategies aim at cccDNA elimination.',
      explanation: `## New Agents
**Entry Inhibitors:**
- Myrcludex B (NTCP inhibitor)
- Blocking viral attachment

**Capsid Assembly Modulators:**
- Core protein inhibitors
- Disrupts nucleocapsid formation

**siRNA:**
- VIR-2218 (RNA interference)
- Reduces HBsAg and DNA

## Cure Strategy
**cccDNA Persistence:**
- Covalently closed circular DNA in hepatocyte nucleus
- Current meds suppress but don't eliminate
- Cure strategies: Immune activation, gene editing

## Elimination
- 2030 WHO elimination target
- Birth dose vaccine >90%
- PMTCT <1%`,
      keyTerms: [
        { term: 'cccDNA', definition: 'Covalently closed circular DNA, persists in nucleus' },
        { term: 'NTCP', definition: 'Na taurocholate cotransporting polypeptide, HBV receptor' },
        { term: 'siRNA', definition: 'Small interfering RNA that silences gene expression' },
        { term: 'PMTCT', definition: 'Prevention of mother-to-child transmission' },
      ],
      clinicalNotes: 'Functional cure (HBsAg loss) achieved in <10% with finite NA + interferon. TLR agonists in trials.',
    },
  },

  media: [],
  citations: [
    { id: 'aasld-hbv', type: 'article', title: 'Hepatitis B Guidance', source: 'AASLD', },
    { id: 'who-hepb', type: 'website', title: 'Hepatitis B', source: 'World Health Organization', url: 'https://www.who.int/news-room/fact-sheets/detail/hepatitis-b', },
  ],
  crossReferences: [
    { targetId: 'condition-hepatitis-c', targetType: 'condition', relationship: 'sibling', label: 'Hepatitis C' },
    { targetId: 'condition-cirrhosis', targetType: 'condition', relationship: 'related', label: 'Cirrhosis' },
    { targetId: 'condition-hcc', targetType: 'condition', relationship: 'related', label: 'Hepatocellular carcinoma' },
  ],
  tags: { systems: ['digestive', 'infectious'], topics: ['virology', 'hepatology'], keywords: ['HBV', 'hepatitis', 'liver', 'vaccine'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hepatitisB;
