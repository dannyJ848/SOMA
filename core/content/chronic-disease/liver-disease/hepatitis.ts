/**
 * Hepatitis - Chronic Disease Education
 *
 * Comprehensive patient education about hepatitis,
* inflammation of the liver.
 */

import { EducationalContent } from '../../types';

export const HEPATITIS: EducationalContent = {
  id: 'chronic-disease-hepatitis',
  type: 'condition',
  name: 'Hepatitis',
  alternateNames: ['Liver inflammation', 'Viral hepatitis', 'Autoimmune hepatitis'],

  levels: {
    1: {
      level: 1,
      summary: 'Hepatitis is inflammation of the liver, usually caused by a virus. It can be short-term (acute) or long-term (chronic), and can damage your liver over time.',
      explanation: `**What Is Hepatitis?**

Hepatitis is inflammation of the liver. The liver is a large organ in your upper right abdomen that helps digest food and remove toxins from your body.

**Types of Viral Hepatitis:**


Common Types:
---------------------------------
Hepatitis A:
  - Contaminated food or water
  - Usually short-term illness
  - Does not cause chronic disease

Hepatitis B:
  - Spread through blood, sex, or from mother to baby
  - Can cause chronic liver disease
  - Vaccine available

Hepatitis C:
  - Spread through blood
  - Often becomes chronic
  - Can be cured with medicine
---------------------------------


**How Is It Spread?**

- Hepatitis A: Contaminated food or water
- Hepatitis B: Blood, bodily fluids, mother to baby, sexual contact
- Hepatitis C: Blood contact, rarely sexual contact

**Common Symptoms:**

Symptoms:
---------------------------------
- Yellowing of skin/eyes (jaundice)
- Fatigue and weakness
- Fever
- Dark urine
- Light-colored stools
- Abdominal pain
- Loss of appetite
- Nausea, vomiting
---------------------------------

**Treatment:**

Treatment by Type:
---------------------------------
Hepatitis A:
  - Rest
  - Avoid alcohol
  - Usually clears on its own

Hepatitis B:
  - Antiviral medicines
  - Monitoring by liver specialist

Hepatitis C:
  - Direct-acting antivirals cure >95% of people
  - 8-12 weeks of treatment
  - Once cured, can clear virus from body
---------------------------------

**Prevention:**

Prevention:
---------------------------------
Hepatitis A:
  - Vaccine
  - Wash hands
  - Safe food and water

Hepatitis B:
  - Vaccine series
  - Safe sex practices
  - Avoid needle sharing
  - Screen pregnant women

Hepatitis C:
  - No vaccine (yet)
  - Avoid needle sharing
  - Safe sex practices
  - Screen at-risk people
---------------------------------
`,
      keyTerms: [
        { term: 'jaundice', definition: 'Yellowing of skin and eyes from liver disease' },
        { term: 'antiviral medicines', definition: 'Medicines that fight viruses' },
        { term: 'acute', definition: 'Short-term, lasting days to weeks' },
        { term: 'chronic', definition: 'Long-term, lasting months to years' },
      ],
      analogies: [
        'Hepatitis A is like food poisoning of the liver.',
        'Hepatitis B and C are like slow-moving infections that can silently damage the liver.',
        'The liver is like a chemical factory - hepatitis disrupts production.',
      ],
      examples: [
        'Maria got hepatitis A from contaminated food while traveling and recovered completely.',
        'John had hepatitis C for 20 years and was cured with new antiviral medicines.',
      ],
      patientCounselingPoints: [
        'Hepatitis A and B vaccines prevent most cases of these viruses.',
        'New hepatitis C treatments can cure most people in 8-12 weeks.',
        'Get tested for hepatitis C if you were born between 1945-1965.',
        'Hepatitis B can be passed from mother to baby during birth.',
      ],
    },
    2: {
      level: 2,
      summary: 'Viral hepatitis encompasses inflammation of the liver caused by hepatotropic viruses (A, B, C, D, E), with varying modes of transmission, natural history, and treatment approaches.',
      explanation: `**Hepatitis Overview:**


Viral Hepatitis Types:
-----------------------------------------------------
Hepatitis A (HAV):
  - RNA virus, picornavirus family
  - Fecal-oral transmission
  - Incubation: 15-50 days (avg 28)
  - Acute, self-limited
  - No chronic carrier state

Hepatitis B (HBV):
  - DNA virus, hepadnaviridae family
  - Blood, perinatal, sexual transmission
  - Incubation: 60-150 days (avg 90)
  - Can become chronic
  - Vaccine available since 1982

Hepatitis C (HCV):
  - RNA virus, Flaviviridae family
  - Blood transmission, rarely sexual
  - Incubation: 14-80 days (avg 45)
  - 75-85% become chronic
  - Curable with DAA therapy

Hepatitis D (HDV):
  - Defective RNA virus (requires HBV)
  - Blood transmission
  - Superinfection or coinfection with HBV
  - Worsens HBV disease

Hepatitis E (HEV):
  - RNA virus
  - Fecal-oral transmission
  - Acute, usually self-limited
  - Severe in pregnancy (high mortality)
-----------------------------------------------------


**Clinical Presentation:**


Clinical Syndromes:
-----------------------------------------------------
Acute Viral Hepatitis:
  - Jaundice
  - Fatigue, malaise
  - Right upper quadrant pain
  - Nausea, vomiting
  - Fever (more common in HAV, HEV)
  - Dark urine, light stools
  - Lasts weeks to months

Chronic Viral Hepatitis:
  - Often asymptomatic for years
  - Fatigue
  - Right upper quadrant discomfort
  - Jaundice (late stage)
  - Cirrhosis complications
-----------------------------------------------------


**Diagnosis:**


Laboratory Tests:
-----------------------------------------------------
Liver Enzymes:
  - ALT (liver enzyme): Markedly elevated
  - AST (liver enzyme): Elevated but usually less than ALT
  - ALP, GGT: Elevated in cholestatic disease

Serology:
  - IgM anti-HAV: Acute hepatitis A
  - IgG anti-HAV: Past infection/immunity
  - HBsAg: Current hepatitis B infection
  - Anti-HBc: Past or current HBV
  - Anti-HBs: Immunity to hepatitis B
  - HCV RNA: Current hepatitis C infection
  - Anti-HCV antibody: Past/current HCV
-----------------------------------------------------


**Treatment:**


Treatment by Type:
-----------------------------------------------------
Hepatitis A:
  - Supportive care
  - No specific therapy
  - Rest, avoid alcohol
  - Complete recovery expected

Hepatitis B:
  - Acute: Supportive
  - Chronic: Antivirals
    - Tenofovir
    - Entecavir
    - Others (lamivudine, adefovir, interferon)

Hepatitis C:
  - Direct-acting antivirals (DAAs)
  - Cure rates >95%
  - Regimens:
    - Ledipasvir/sofosbuvir (Harvoni)
    - Glecaprevir/pibrentasvir (Mavyret)
    - Sofosbuvir/velpatasvir (Epclusa)
  - 8-12 weeks typically

Hepatitis D:
  - Treatment of underlying HBV
  - Interferon alpha (if applicable)
-----------------------------------------------------
`,
      keyTerms: [
        { term: 'ALT', definition: 'Alanine aminotransferase; liver enzyme' },
        { term: 'AST', definition: 'Aspartate aminotransferase; liver enzyme' },
        { term: 'HBsAg', definition: 'Hepatitis B surface antigen; indicates current infection' },
        { term: 'DAA', definition: 'Direct-acting antiviral agents for hepatitis C' },
        { term: 'carrier', definition: 'Person with chronic infection who can transmit disease' },
      ],
      analogies: [
        'DAAs are like smart missiles that target specific parts of the hepatitis C virus.',
        'HBsAg is like a flag showing hepatitis B virus is present.',
      ],
      clinicalNotes: 'Hepatitis B can be transmitted from mother to baby - vaccination prevents this. DAA regimens have >95% SVR (sustained virologic response) for hepatitis C.',
      patientCounselingPoints: [
        'Get vaccinated for hepatitis A and B to prevent infection.',
        'Get tested for hepatitis C if born between 1945-1965.',
        'Hepatitis C treatments have minimal side effects and cure most people.',
        'Chronic hepatitis B usually requires long-term antiviral therapy.',
        'Liver cancer screening with ultrasound is important with chronic B or C.',
      ],
    },
    3: {
      level: 3,
      summary: 'Viral hepatitis includes hepatotropic viruses causing acute and chronic liver inflammation, with hepatitis B and C having the greatest global impact due to chronic infection potential and progressive liver disease.',
      explanation: `**Virology:**

*Hepatitis A:*
- Picornavirus, genus Hepatovirus
- Single-stranded RNA virus
- 7.5 kb genome
- One serotype, multiple genotypes

*Hepatitis B:*
- Hepadnavirus
- Partially double-stranded DNA virus
- 3.2 kb genome
- Eight genotypes (A-H)

*Hepatitis C:*
- Flavivirus
- Single-stranded RNA virus
- 9.6 kb genome
- Eight major genotypes

**Natural History:**

*Hepatitis B:*

Outcome Determinants:
------------------------------------------------------------
Perinatal transmission:
  - 90% become chronically infected
  - 90% of chronic infections become carriers
  - 25% will die prematurely from complications

Adult acquisition:
  - 5-10% develop chronic infection
  - 30-50% of carriers develop cirrhosis
  - 5-10% develop HCC

Phases:
  - Immune tolerant: High replication, minimal inflammation
  - Immune clearance: Fluctuating viremia, liver injury
  - Chronic carrier: HBeAg-negative, low viral load
  - HBeAg-negative chronic: Low-level replication, inflammation
  - Reactivation: Reactivation during immunosuppression
-------------------------------------------------------------


*Hepatitis C:*
Natural History:
------------------------------------------------------------
Acute Infection:
  - 15-25% clear spontaneously
  - 75-85% develop chronic infection

Chronic Infection:
  - 20-30% develop cirrhosis over 20-30 years
  - HCC risk: 1-4% per year once cirrhosis present
  - Extrahepatic manifestations common
    - Cryoglobulinemia
    - Porphyria cutanea tarda
    - Glomerulonephritis
-------------------------------------------------------------


**Diagnosis:**


Serologic Markers:
------------------------------------------------------------
Hepatitis A:
  - IgM anti-HAV: Acute infection
  - IgG anti-HAV: Past infection/immunity

Hepatitis B:
  - HBsAg: Current infection
  - Anti-HBc IgM: Acute infection
  - Anti-HBc IgG: Past infection
  - HBeAg: High viral load, high infectivity
  - Anti-HBs: Immunity (vaccine or natural infection)
  - HBV DNA: Viral load

Hepatitis C:
  - Anti-HCV antibody: Exposure (present or past)
  - HCV RNA: Current infection, viral load
  - Genotype: Determines treatment regimen
-------------------------------------------------------------
`,
      keyTerms: [
        { term: 'HBeAg', definition: 'Hepatitis B e antigen; marker of high viral load' },
        { term: 'cryoglobulinemia', definition: 'Disease with abnormal proteins in blood' },
        { term: 'porphyria cutanea tarda', definition: 'Skin condition caused by liver dysfunction' },
        { term: 'SVR', definition: 'Sustained virologic response; undetectable virus 12+ weeks after treatment' },
      ],
      analogies: [
        'Genotype is like the virus family tree - different types respond to different medicines.',
      ],
      clinicalNotes: 'HBV genotype C has higher HCC risk. HCV genotype 3 is more aggressive with faster fibrosis.',
      patientCounselingPoints: [
        'Your hepatitis genotype helps determine which medicines will work best.',
        'Liver cancer screening with ultrasound is important if you have chronic B or C.',
        'Extrahepatic manifestations of hepatitis C can affect skin, kidneys, and joints.',
        'SVR means the virus is undetectable and you are cured.',
      ],
    },
    4: {
      level: 4,
      summary: 'Viral hepatitis management has been revolutionized by direct-acting antiviral therapy for HCV and potent nucleos(t)ide analogues for HBV, enabling cure of most infections and prevention of complications.',
      explanation: `**Modern Therapy:

*Hepatitis C Treatment:*
DAA Regimens by Genotype:
------------------------------------------------------------
Genotype 1a/b:
  - Ledipasvir/sofosbuvir (8-12 weeks)
  - Glecaprevir/pibrentasvir (12 weeks)
  - Sofosbuvir/velpatasvir (12 weeks)

Genotype 2:
  - Sofosbuvir/velpatasvir (12 weeks)
  - Sofosbuvir + ribavirin (12 weeks)

Genotype 3:
  - Sofosbuvir/velpatasvir (12 weeks)
  - Glecaprevir/pibrentasvir (12 weeks)
  - Sofosbuvir + ribavin + daclatasvir (12 weeks)

Genotype 4:
  - Glecaprevir/pibrentasvir (12 weeks)
  - Ledipasvir/sofosbuvir (12 weeks)

Genotype 5/6:
  - Sofosbuvir/velpatasvir (12 weeks)

Retreatment:
  - Sofosbuvir/velpatasvir/voxiloprevir (12 weeks)
  - Sofosbuvir/velpatasvir/ribavirin (24 weeks)

SVR rates: >95% across all genotypes
-------------------------------------------------------------
`,
      keyTerms: [
        { term: 'SVR', definition: 'Sustained virologic response' },
        { term: 'ribavirin', definition: 'Antiviral that boosts interferon response' },
        { term: 'daclatasvir', definition: 'NS5A inhibitor for hepatitis C' },
        { term: 'voxiloprevir', definition: 'NS5A inhibitor for retreatment' },
      ],
      analogies: [
        'Retreatment with VOXELISA is like bringing in a specialist to clean up what the first team missed.',
      ],
      clinicalNotes: 'Pangenotypic regimens (sofosbuvir/velpatasvir) work for all genotypes. Treatment-induced NS5A resistance requires NS5A/PI plus sofosbuvir/velpatasvir/voxiloprevir.',
      patientCounselingPoints: [
        'Pangenotypic medicines treat all genotypes of hepatitis C.',
        'If you were treated before but not cured, retreatment is very successful.',
        'Side effects of new hepatitis C treatments are minimal.',
        'After cure, you still need surveillance for liver cancer.',
      ],
    },
    5: {
      level: 5,
      summary: 'Viral hepatitis management has been transformed by direct-acting antivirals enabling HCV cure and potent nucleos(t)ide analogs achieving functional cure for HBV, with prevention through vaccination strategies.',
      explanation: `**Innovative Therapeutics:**

*Universal HBV Treatment:*
Universal Treatment Recommendations:
------------------------------------------------------------
Who to Treat:
  - Everyone with CHB (HBsAg+ >6 months)
  - Regardless of HBeAg status
  - Regardless of ALT level
  - Regardless of fibrosis stage (except terminal)

Preferred Agents:
  - Tenofovir alafenamide (Vemlidy)
  - Tenofovir disoproxil fumarate (Viread)
  - Entecavir (Baraclude)
------------------------------------------------------------
`,
      keyTerms: [
        { term: 'CHB', definition: 'Chronic hepatitis B' },
        { term: 'functional cure', definition: 'HBsAg loss with or without seroconversion' },
      ],
      clinicalNotes: 'Functional cure (HBsAg loss) occurs in <10% annually with potent therapy. Universal treatment recommended regardless of ALT or fibrosis.',
      patientCounselingPoints: [
        'Everyone with hepatitis B should be considered for treatment.',
        'Some people can clear the virus completely (functional cure).',
        'Monitoring for HCC remains necessary even after viral clearance.',
      ],
    },
  },

  media: [
    {
      id: 'hepatitis-virus-types',
      type: 'diagram',
      filename: 'hepatitis-virus-types.svg',
      title: 'Hepatitis Virus Types',
      description: 'Comparison of hepatitis viruses',
    },
    {
      id: 'hepatitis-transmission',
      type: 'diagram',
      filename: 'hepatitis-transmission-routes.svg',
      title: 'Hepatitis Transmission Routes',
      description: 'How hepatitis viruses spread',
    },
  ],

  citations: [
    {
      id: 'aasld-hepatitis-b-2024',
      type: 'article',
      title: 'AASLD Guidance for Hepatitis B',
      source: 'Hepatology',
    },
    {
      id: 'aasld-hepatitis-c-2024',
      type: 'article',
      title: 'AASLD Guidance for Hepatitis C',
      source: 'Hepatology',
    },
  ],

  crossReferences: [
    { targetId: 'chronic-disease-cirrhosis', targetType: 'condition', relationship: 'child', label: 'Cirrhosis' },
    { targetId: 'chronic-disease-fatty-liver', targetType: 'condition', relationship: 'sibling', label: 'Fatty Liver' },
  ],

  tags: {
    systems: ['hepatic'],
    structures: ['liver'],
    topics: ['hepatitis', 'liver inflammation', 'viral hepatitis'],
    keywords: ['hepatitis', 'viral hepatitis', 'hepatitis B', 'hepatitis C'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family-medicine'] },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
