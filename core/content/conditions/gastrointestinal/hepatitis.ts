/**
 * Viral Hepatitis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const viralHepatitis: EducationalContent = {
  id: 'condition-viral-hepatitis',
  type: 'condition',
  name: 'Viral Hepatitis',
  nameEs: 'Hepatitis Viral',
  alternateNames: ['Hepatitis A', 'Hepatitis B', 'Hepatitis C', 'HAV', 'HBV', 'HCV'],
  hpoId: 'HP:0001392',

  levels: {
    1: {
      level: 1,
      summary: 'Viral hepatitis is inflammation of the liver caused by viruses that spread through contaminated food, blood, or body fluids.',
      explanation: `Hepatitis is a medical term for inflammation of the liver. Viral hepatitis is caused by different viruses that attack the liver.

**Main types:**
- **Hepatitis A:** From contaminated food or water
- **Hepatitis B:** From blood or body fluids
- **Hepatitis C:** From blood (usually from sharing needles)

**How they spread:**
- **Hepatitis A:** Contaminated food, water, poor hygiene
- **Hepatitis B:** Contact with infected blood, sexual contact, mother to baby
- **Hepatitis C:** Contact with infected blood (sharing needles, rarely transfusions)

**Symptoms:**
- Yellow skin and eyes (jaundice)
- Feeling very tired
- Nausea, vomiting, abdominal pain
- Dark urine, pale stools
- Some people have no symptoms

**Prevention:**
- **Vaccines:** Available for hepatitis A and B
- **Handwashing:** Prevents hepatitis A
- **Safe practices:** Avoid sharing needles, practice safe sex

**Treatment:**
- Hepatitis A: No specific treatment, body usually clears it
- Hepatitis B: Antiviral medications can help
- Hepatitis C: Can now be cured with antiviral medications`,
      keyTerms: [
        { term: 'hepatitis', definition: 'Inflammation of the liver, often caused by a virus' },
        { term: 'jaundice', definition: 'Yellowing of skin and eyes from liver problems' },
        { term: 'vaccine', definition: 'A shot that teaches your body to fight a specific disease' },
      ],
      analogies: ['The liver is like a factory. Viral hepatitis is like workers going on strike—the factory cannot do its job properly.'],
      examples: ['Someone traveling to a country with poor sanitation might get hepatitis A from contaminated water or food.'],
    },
    2: {
      level: 2,
      summary: 'Viral hepatitis A, B, and C have distinct transmission routes, clinical courses, and management strategies ranging from supportive care to curative antiviral therapy.',
      explanation: `## Hepatitis A (HAV)
**Transmission:** Fecal-oral route (contaminated food/water)
**Incubation:** 15-50 days (average 28 days)
**Clinical:** Acute, never chronic
**Diagnosis:** Anti-HAV IgM positive
**Treatment:** Supportive care only
**Prevention:** Vaccine (2-dose series)

## Hepatitis B (HBV)
**Transmission:** Blood, body fluids, perinatal
**Incubation:** 60-150 days
**Clinical:** Acute can become chronic (90% infants, 5-10% adults)
**Diagnosis:**
- Acute: HBsAg+, Anti-HBc IgM+
- Chronic: HBsAg+ >6 months
- Resolved: HBsAg-, Anti-HBs+, Anti-HBc+
**Treatment:** Entecavir, tenofovir
**Prevention:** Vaccine (3-dose series)

## Hepatitis C (HCV)
**Transmission:** Blood (percutaneous exposure)
**Incubation:** 14-180 days (average 45 days)
**Clinical:** Acute (mostly asymptomatic), 75-85% become chronic
**Diagnosis:** HCV antibody (if positive, confirm with HCV RNA)
**Treatment:** DAAs (direct-acting antivirals) - curative
**Prevention:** No vaccine; harm reduction

## Comparison

| Feature | Hep A | Hep B | Hep C |
|---------|-------|-------|-------|
| Chronic? | No | Yes (5-10% adults) | Yes (75-85%) |
| Vaccine? | Yes | Yes | No |
| Blood-borne? | No | Yes | Yes |
| Curable? | Supportive only | Suppressive | Yes (95%+) |`,
      keyTerms: [
        { term: 'HBsAg', definition: 'Hepatitis B surface antigen; indicates current infection' },
        { term: 'DAAs', definition: 'Direct-acting antivirals; drugs that cure hepatitis C' },
        { term: 'perinatal', definition: 'Around the time of birth; from mother to baby' },
      ],
    },
    3: {
      level: 3,
      summary: 'Viral hepatitis management requires understanding of viral replication, natural history, appropriate screening, and antiviral therapy with curative (HCV) or suppressive (HBV) treatment goals.',
      explanation: `## Hepatitis A Clinical Course
- Self-limited acute hepatitis
- No chronic carrier state
- Rare fulminant hepatic failure (<1%)
- Complete recovery expected
- Lifelong immunity after infection

## Hepatitis B Natural History
**Acute infection:**
- 70% asymptomatic
- 1% fulminant
- Chronic: 90% of infants, 30% children <5, 5-10% adults

**Chronic infection phases:**
1. Immune tolerant: HBeAg+, high viral load, minimal inflammation
2. Immune active: HBeAg+ or -, elevated ALT, liver damage
3. Inactive carrier: HBeAg-, low viral load, normal ALT
4. Reactivation: Replication with liver damage

**Treatment indications:**
- ALT >2x ULN with significant fibrosis
- Cirrhosis (regardless of ALT)
- Reactivation prevention during immunosuppression

**Monitoring:**
- ALT every 3-6 months
- HBeAg, Anti-HBe
- HBV DNA viral load
- Fibrosis staging

## Hepatitis C Natural History
**Acute:** 20-30% symptomatic, jaundice
**Chronic:** 75-85% develop chronic infection
**Progression:** 20-30% develop cirrhosis over 20-30 years
**Extrahepatic:** Cryoglobulinemia, glomerulonephritis, porphyria cutanea tarda

**Genotypes:** 1-6 (affects treatment duration, outcomes)

**Treatment (DAA era):**
- Pan-genotypic regimens available
- Sofosbuvir/velpatasvir
- Glecaprevir/pibrentasvir
- 8-12 weeks for most patients
- >95% cure rates (SVR12)`,
      keyTerms: [
        { term: 'HBeAg', definition: 'Hepatitis B e-antigen; marker of active viral replication' },
        { term: 'SVR12', definition: 'Sustained virologic response 12 weeks after treatment; cure for HCV' },
        { term: 'cryoglobulinemia', definition: 'Protein deposits in blood vessels causing inflammation from HCV' },
      ],
      clinicalNotes: 'Screen baby boomers (born 1945-1965) for HCV once. Screen high-risk for HBV and HCV. All pregnant women screened for HBV; deliver vaccine/immune globulin to exposed newborns.',
    },
    4: {
      level: 4,
      summary: 'Viral hepatitis management includes prevention through vaccination and harm reduction, screening of at-risk populations, antiviral therapy with monitoring for resistance and complications, and assessment for liver transplant.',
      explanation: `## Hepatitis B Treatment

**First-line agents:**
- Entecavir: High barrier to resistance
- Tenofovir alafenamide (TAF): Preferred for bone/kidney risk
- Tenofovir disoproxil fumarate (TDF): Alternative

**Treatment endpoints:**
- HBeAg-positive: HBeAg seroconversion, HBV DNA undetectable
- HBeAg-negative: HBV DNA undetectable, ALT normalization
- HBsAg loss: Functional cure (rare)

**Monitoring during treatment:**
- HBV DNA at 12 weeks (confirm response)
- Renal function (TDF/TAF)
- Bone density (TDF)
- Resistance testing if virologic failure

**Duration:**
- HBeAg+: Treat until seroconversion + 12 months consolidation
- HBeAg-: Indefinite (most patients)
- Cirrhosis: Indefinite

## Hepatitis C Treatment

**Pan-genotypic regimens:**
- Sofosbuvir/velpatasvir (SOF/VEL): 12 weeks
- Glecaprevir/pibrentasvir (GLE/PIB): 8 weeks (non-cirrhotic, treatment-naive)

**Genotype-specific considerations:**
- GT3 with cirrhosis: SOF/VEL + ribavirin 12 weeks
- Decompensated cirrhosis: SOF/VEL + ribavirin

**Contraindications/countraindications:**
- SOF/VEL: Avoid with amiodarone
- GLE/PIB: Avoid in decompensated cirrhosis

**Special populations:**
- Pregnancy: TDF for HBV; defer HCV treatment until postpartum
- Renal disease: Elbasvir/grazoprevir, GLE/PIB
- HIV coinfection: Treat concurrently (watch for drug interactions)

## Reactivation Prophylaxis
**Indications for HBV prophylaxis:**
- Anti-HBc+ patients receiving:
  - B-cell depleting agents (rituximab)
  - High-dose steroids (>20mg prednisone equivalent)
  - Anthracycline chemotherapy
  - CAR-T therapy

**Prophylaxis:** Entecavir or TDF/TAF started before immunosuppression and continued for 6-12 months after`,
      keyTerms: [
        { term: 'functional cure', definition: 'HBsAg loss with or without seroconversion; rare but optimal outcome' },
        { term: 'virologic failure', definition: 'Detectable HBV DNA despite adherence; may indicate resistance' },
        { term: 'HBV reactivation', definition: 'HBV replication flare during immunosuppression' },
      ],
      clinicalNotes: 'HBV-HDV coinfection requires testing for HDV (hepatitis D) if HBsAg+. HDV accelerates liver disease. If HCV treated first, HBV may reactivate—need HBV suppression.',
    },
    5: {
      level: 5,
      summary: 'Advanced viral hepatitis care incorporates cure strategies for HCV, functional cure approaches for HBV, novel therapeutics including entry inhibitors and capsid assembly modulators, and comprehensive management of extrahepatic manifestations.',
      explanation: `## HBV Functional Cure Strategies

**Current strategies:**
- Long-term NA therapy (maintains suppression)
- Limited functional cure (HBsAg loss <1%/year)

**Emerging approaches:**
- Entry inhibitors: Bulevirtide (NTCP inhibitor)
- Capsid assembly modulators: JNJ-6379, ABI-H0731
- RNA interference: VIR-2218 (siRNA targeting HBV transcripts)
- Therapeutic vaccines: GS-4774, HBsAg-ARC
- Immune modulators: TLR agonists, checkpoint inhibitors

**Combination therapy trials:**
- NA + siRNA (reduce HBsAg)
- NA + therapeutic vaccine (boost immune response)
- Finite treatment approaches (vs indefinite NA)

## HCV Beyond Cure

**Eradication strategies:**
- Micro-elimination: Targeted populations
- Macro-elimination: Country-level programs
- Vaccine development (challenging due to viral diversity)

**Management after SVR:**
- Continue HCC surveillance if:
  - Advanced fibrosis at baseline
  - Ongoing risk factors (alcohol, metabolic syndrome)
- Risk of HCC decreases but not eliminated

**Extrahepatic manifestations:**
- Cryoglobulinemic vasculitis: May improve with SVR
- Lymphoma risk: Decreases after SVR
- Insulin resistance/diabetes: May improve

## Hepatitis D (Delta)
- Requires HBV for replication
- Most severe form of chronic viral hepatitis
- Treatment: Bulevirtide (approved in Europe)
- Consider HBV cure strategies to eliminate HDV

## Emerging Diagnostics
- Point-of-care RNA testing
- Fibrosis assessment (elastography, serum markers)
- Multi-omics for disease stratification
- Biomarkers for treatment response

## Global Health Perspective
- WHO elimination targets: 90% reduction in new infections, 65% reduction in mortality by 2030
- Birth dose vaccine for HBV
- Harm reduction (needle exchange, safe injection)
- DAAs for HCV in resource-limited settings`,
      keyTerms: [
        { term: 'NTCP inhibitor', definition: 'Drug blocking HBV/HDV entry into hepatocytes' },
        { term: 'bulevirtide', definition: 'Entry inhibitor for HBV/HDV; approved for HDV in Europe' },
        { term: 'siRNA', definition: 'Small interfering RNA; therapeutic that degrades HBV RNA transcripts' },
      ],
      clinicalNotes: 'HBV functional cure remains elusive. Current focus: finite combination therapy trials. For HCV, challenge now is testing and treatment access, not therapeutic efficacy.',
    },
  },

  media: [],
  citations: [
    { id: 'aasld-hepb-2023', type: 'article', title: 'AASLD Guidance for Hepatitis B', source: 'Hepatology' },
    { id: 'aasld-hepc-2023', type: 'article', title: 'AASLD Guidance for Hepatitis C', source: 'Hepatology' },
    { id: 'cdc-hep-2024', type: 'article', title: 'CDC Recommendations for Hepatitis Screening', source: 'Morbidity and Mortality Weekly Report' },
  ],
  crossReferences: [
    { targetId: 'condition-cirrhosis', targetType: 'condition', relationship: 'related', label: 'Cirrhosis' },
    { targetId: 'condition-hcc', targetType: 'condition', relationship: 'related', label: 'Hepatocellular Carcinoma' },
  ],
  tags: { systems: ['gastrointestinal'], topics: ['gastroenterology', 'hepatology', 'infectious-disease'], keywords: ['hepatitis', 'HAV', 'HBV', 'HCV', 'viral'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default viralHepatitis;
