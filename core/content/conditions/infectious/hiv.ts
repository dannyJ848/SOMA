/**
 * HIV/AIDS - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const hiv: EducationalContent = {
  id: 'condition-hiv',
  type: 'condition',
  name: 'HIV/AIDS',
  alternateNames: ['Human Immunodeficiency Virus', 'Acquired Immunodeficiency Syndrome', 'HIV Infection'],
  hpoId: 'HP:0000593',

  levels: {
    1: {
      level: 1,
      summary: "HIV is a virus that attacks the body's defense system, making it harder to fight infections. Modern medicines can control the virus so people live healthy lives.",
      explanation: `HIV (Human Immunodeficiency Virus) is a virus that attacks the immune system, specifically white blood cells that fight infection. Without treatment, HIV can lead to AIDS (Acquired Immunodeficiency Syndrome), the most severe phase of HIV infection.

**How it spreads:**
- Unprotected sex with someone who has HIV
- Sharing needles
- From mother to baby during pregnancy, birth, or breastfeeding

**Prevention:**
- Use condoms during sex
- Take PrEP medicine if at high risk
- Don't share needles

**Treatment:**
- Antiretroviral therapy (ART) helps control the virus
- People on treatment can live long, healthy lives
- The medicine can lower the virus so it's undetectable and untransmittable`,
      keyTerms: [
        { term: 'HIV', definition: 'Human Immunodeficiency Virus - a virus that attacks immune cells' },
        { term: 'AIDS', definition: 'Acquired Immunodeficiency Syndrome - advanced HIV infection' },
        { term: 'Immune System', definition: 'The body defense system against germs' },
        { term: 'PrEP', definition: 'Medicine to prevent getting HIV' },
      ],
      analogies: [
        'HIV weakens your immune system like a storm that damages the walls of a fortress, letting invaders enter.',
      ],
      examples: [
        'A person diagnosed with HIV takes daily medication and lives a normal, healthy life with an undetectable viral load.',
      ],
      patientCounselingPoints: [
        'Taking HIV medication every day as prescribed keeps the virus under control',
        'People with HIV on effective treatment cannot pass the virus to partners through sex',
        'Regular checkups keep you healthy',
      ],
    },
    2: {
      level: 2,
      summary: 'HIV attacks CD4 T cells, weakening immunity. Diagnosed via antibody/antigen tests. ART is life-saving therapy that suppresses viral replication.',
      explanation: `## What HIV Does
HIV targets CD4+ T lymphocytes, key immune cells that coordinate the immune response. As CD4 counts decline, opportunistic infections occur.

**Stages:**
1. **Acute HIV:** 2-4 weeks after infection - flu-like illness
2. **Clinical latency:** May be asymptomatic for years
3. **AIDS:** CD4 <200 or AIDS-defining illness

## Diagnosis
- 4th generation Ag/Ab test (p24 antigen + antibodies)
- Confirmatory Western blot or differentiation assay
- CD4 count and viral load

## Transmission
- Sexual contact (highest risk with anal/rectal)
- Blood exposure (needles, transfusions)
- Perinatal (without treatment: 15-45% transmission, <1% with treatment)

## Prevention
- Condoms
- PrEP (pre-exposure prophylaxis)
- PEP (post-exposure - start within 72 hours)
- Treatment as prevention (U=U)`,
      keyTerms: [
        { term: 'CD4 cells', definition: 'White blood cells that HIV attacks and destroys' },
        { term: 'viral load', definition: 'Amount of HIV virus in the blood' },
        { term: 'antiretroviral therapy (ART)', definition: 'Medications that stop HIV from multiplying' },
        { term: 'U=U', definition: 'Undetectable = Untransmittable; effectively no risk of sexual transmission' },
      ],
      clinicalNotes: 'All persons with HIV should start ART regardless of CD4 count (START trial).',
    },
    3: {
      level: 3,
      summary: 'HIV is a retrovirus that integrates into host genome via reverse transcriptase. HAART targets multiple steps: entry, reverse transcription, integration, protease cleavage.',
      explanation: `## Virology
- **Family:** Retroviridae, lentivirus
- **RNA virus** that reverse transcribes to DNA
- Integrates into host genome
- Two types: HIV-1 (worldwide), HIV-2 (West Africa)

## Pathogenesis
- gp120 binds CD4 and CCR5/CXCR4 co-receptors
- Reverse transcription → proviral DNA → integration
- Latent reservoirs established early (lymph nodes, CNS)
- Chronic immune activation → CD4 depletion

## Antiretroviral Classes
| Class | Mechanism | Example |
|--------|-----------|---------|
| NRTI | Reverse transcriptase inhibitor | Tenofovir, Emtricitabine |
| NNRTI | Non-nucleoside RT inhibitor | Efavirenz, Doravirine |
| PI | Protease inhibitor | Darunavir, Atazanavir |
| INSTI | Integrase inhibitor | Dolutegravir, Bictegravir |
| Entry | CCR5 antagonist | Maraviroc |

## Opportunistic Infections
- **Pneumocystis pneumonia** (CD4 <200)
- **Toxoplasmosis** (CD4 <100)
- **MAC** (CD4 <50)
- **CMV, HSV, TB**`,
      keyTerms: [
        { term: 'HAART', definition: 'Highly active antiretroviral therapy' },
        { term: 'reverse transcriptase', definition: 'Enzyme that converts viral RNA to DNA' },
        { term: 'protease', definition: 'Enzyme that cleaves viral proteins into functional units' },
        { term: 'integrase', definition: 'Enzyme that inserts viral DNA into host genome' },
        { term: 'latent reservoir', definition: 'HIV-infected cells that are not producing virus, invisible to immune system' },
      ],
      clinicalNotes: 'Current first-line: Bictegravir/Emtricitabine/Tenofovir alafenamide (BIC/FTC/TAF) or Dolutegravir/Abacavir/Lamivudine (DTG/ABC/3TC).',
    },
    4: {
      level: 4,
      summary: 'Management includes CD4/viral load monitoring, OI prophylaxis based on CD4 thresholds, and managing comorbidities like cardiovascular disease.',
      explanation: `## Monitoring
- **Viral load:** Check at baseline, 2-8 weeks after ART start, then q3-4 months
- **CD4:** Every 3-6 months until >500
- **Resistance testing:** Before ART or if virologic failure

## Opportunistic Infection Prophylaxis
| CD4 Count | Prophylaxis |
|------------|--------------|
| <200 | Pneumocystis prophylaxis (TMP-SMX) |
| <100 | Toxoplasma prophylaxis (if IgG+) |
| <50 | MAC prophylaxis (azithromycin) |

## IRIS (Immune Reconstitution Inflammatory Syndrome)
- Occurs after starting ART with low CD4
- Unmasking: OI becomes apparent as immune recovers
- Paradoxical: Worsening of known OI
- Treat OI, continue ART, may need steroids

## Comorbidities
- Increased cardiovascular risk
- Neurocognitive impairment (HAND)
- Bone mineral density loss
- Higher cancer risk (Kaposi sarcoma, NHL)`,
      keyTerms: [
        { term: 'IRIS', definition: 'Immune Reconstitution Inflammatory Syndrome - inflammation after starting ART' },
        { term: 'virologic failure', definition: 'HIV RNA >200 copies/mL after 24 weeks of ART' },
        { term: 'HAND', definition: 'HIV-associated neurocognitive disorder' },
        { term: 'OI', definition: 'Opportunistic Infection - infections that occur with weak immune system' },
      ],
      clinicalNotes: 'Never stop ART due to IRIS unless life-threatening. Manage with steroids and OI treatment.',
    },
    5: {
      level: 5,
      summary: 'HIV research focuses on latency reversal agents, broadly neutralizing antibodies, and long-acting formulations for cure research and prevention.',
      explanation: `## Cure Research
**"Shock and Kill" Strategy:**
- Latency reversing agents (HDAC inhibitors, bryostatin)
- Enhanced immune clearance (vaccines, bNAbs)
- Challenges: Reservoir size, distribution

**bNAbs (Broadly Neutralizing Antibodies):**
- VRC01, 3BNC117 - passive immunization
- Target: Engineered immunity (e.g., CCR5 knockout)

## Long-Acting ART
- Cabotegravir/Rilpivirine (monthly/bimonthly)
- Improves adherence
- Promising for PrEP

## PrEP Evolution
- On-demand PrEP (2-1-1 dosing)
- Cabotegravir PrEP (injectable)
- Multipurpose tech (contraceptive + PrEP)

## Novel Targets
- Maturation inhibitors (GSK353273)
- Capsid inhibitors (GS-6207)
- TLR agonists

## Special Populations
- Perinatal: Universal ART in pregnancy (Option B+)
- Acute infection: Start ART immediately (preserves immunity)
- Coinfection: HBV, HCV coinfection treatment`,
      keyTerms: [
        { term: 'bNAbs', definition: 'Broadly neutralizing antibodies that target multiple HIV strains' },
        { term: 'latency reversal', definition: 'Activating dormant HIV in reservoirs to expose to immune system' },
        { term: 'Option B+', definition: 'Treat all HIV+ pregnant women for life, regardless of CD4' },
        { term: 'maturation inhibitors', definition: 'Block viral maturation step in viral life cycle' },
      ],
      clinicalNotes: 'The "Mississippi baby" and "Berlin patient" offer proof of concept for cure but remain exceptional cases. ART remains life-long therapy.',
    },
  },

  media: [],
  citations: [
    { id: 'dhhs-hiv', type: 'article', title: 'Guidelines for the Use of Antiretroviral Agents', source: 'DHHS', },
    { id: 'who-hiv', type: 'website', title: 'HIV Fact Sheets', source: 'World Health Organization', url: 'https://www.who.int/health-topics/hiv-aids', },
  ],
  crossReferences: [
    { targetId: 'condition-hepatitis-b', targetType: 'condition', relationship: 'related', label: 'Hepatitis B (coinfection)' },
    { targetId: 'condition-hepatitis-c', targetType: 'condition', relationship: 'related', label: 'Hepatitis C (coinfection)' },
    { targetId: 'condition-pneumocystis', targetType: 'condition', relationship: 'related', label: 'Pneumocystis pneumonia' },
  ],
  tags: { systems: ['immune', 'infectious'], topics: ['virology', 'immunology', 'public health'], keywords: ['HIV', 'AIDS', 'antiretroviral', 'opportunistic infection'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hiv;
