import { EducationalContent } from '../../types';

export const biologicsContent: EducationalContent = {
  id: 'topic-biologics',
  type: 'topic',
  name: 'Biologic Therapies in Rheumatology',
  alternateNames: ['Biologic DMARDs', 'bDMARDs', 'Biological agents', 'Targeted therapies'],

  levels: {
    1: {
      level: 1,
      summary: 'Biologic medications are advanced drugs made from living cells that target specific parts of the immune system to treat autoimmune diseases like rheumatoid arthritis, psoriatic arthritis, and lupus.',
      explanation: `Biologics are a newer type of medication that works differently from traditional drugs. They're made from living cells and designed to block specific parts of the immune system that cause inflammation.

**What makes biologics different:**
- Made from living cells (proteins, antibodies)
- Target specific immune system molecules
- Given by injection or infusion
- More precise than traditional medications

**How they work:**
Instead of suppressing the whole immune system, biologics target specific molecules:
- TNF blockers (most common)
- IL-6 blockers
- B cell targeted
- T cell targeted
- And others

**Common biologic medications:**

*TNF inhibitors:*
- Adalimumab (Humira)
- Etanercept (Enbrel)
- Infliximab (Remicade)
- Certolizumab (Cimzia)
- Golimumab (Simponi)

*Other biologics:*
- Rituximab (Rituxan) - B cells
- Tocilizumab (Actemra) - IL-6
- Abatacept (Orencia) - T cells

**When biologics are used:**
- When other treatments haven't worked well enough
- Sometimes as first-line for severe disease
- Often combined with methotrexate

**Important considerations:**
- Increase infection risk
- Screen for tuberculosis before starting
- Not safe during pregnancy (most)
- Can be expensive (biosimilars help)
- Given by injection or IV infusion

**What to expect:**
- Many people see significant improvement
- Usually takes a few weeks to months
- May need to try different ones
- Regular monitoring required`,
      keyTerms: [
        { term: 'biologic', definition: 'A medication made from living cells that targets specific parts of the immune system' },
        { term: 'TNF inhibitor', definition: 'A biologic that blocks tumor necrosis factor, a chemical that causes inflammation' },
        { term: 'biosimilar', definition: 'A copy of a biologic medication that works the same way and costs less' },
        { term: 'infusion', definition: 'Getting medication through an IV, usually at a clinic' },
      ],
      analogies: [
        'Biologics are like smart bombs that target specific enemies, while traditional drugs are like carpet bombing.',
        'Think of biologics as blocking specific doors in the immune system instead of closing the whole building.',
      ],
      examples: [
        'A person with rheumatoid arthritis who didn\'t respond to methotrexate starts a TNF blocker and sees dramatic improvement',
        'Someone gets an infusion of rituximab every six months to control their disease',
        'A patient switches to a biosimilar to reduce their medication costs',
      ],
    },
    2: {
      level: 2,
      summary: 'Biologic DMARDs are engineered proteins targeting specific immune mediators including TNF-alpha, IL-6, B cells, and T cell co-stimulation, used when conventional DMARDs fail or in combination therapy for inflammatory arthritis and autoimmune diseases.',
      explanation: `Biologic DMARDs (bDMARDs) revolutionized rheumatology by enabling targeted immunotherapy. They are proteins (typically antibodies) designed to block specific inflammatory pathways.

**Classification by Target:**

1. **TNF Inhibitors:**
   - Most commonly used biologics
   - Five approved agents

   | Drug | Type | Route | Frequency |
   |------|------|-------|-----------|
   | Adalimumab | Monoclonal Ab | SC | q2 weeks |
   | Etanercept | Receptor fusion | SC | Weekly |
   | Infliximab | Chimeric Ab | IV | q8 weeks |
   | Certolizumab | PEGylated Fab | SC | q2-4 weeks |
   | Golimumab | Monoclonal Ab | SC/IV | Monthly |

2. **IL-6 Pathway:**
   - Tocilizumab (anti-IL-6R)
   - Sarilumab (anti-IL-6R)
   - Can be used as monotherapy

3. **B Cell Targeted:**
   - Rituximab (anti-CD20)
   - Depletes B cells
   - Used after TNFi failure or with specific indications

4. **T Cell Co-stimulation:**
   - Abatacept (CTLA4-Ig)
   - Blocks CD80/CD86-CD28 interaction
   - Reduces T cell activation

5. **IL-17 Pathway:**
   - Secukinumab, ixekizumab (anti-IL-17A)
   - Brodalumab (anti-IL-17R)
   - Used in PsA, SpA, psoriasis

6. **IL-12/23 Pathway:**
   - Ustekinumab (anti-IL-12/23 p40)
   - Guselkumab, risankizumab (anti-IL-23)
   - Used in PsA, psoriasis

**Indications by Disease:**

*Rheumatoid Arthritis:*
- TNFi, tocilizumab, abatacept, rituximab
- Usually with methotrexate

*Psoriatic Arthritis:*
- TNFi, IL-17i, IL-12/23i
- JAK inhibitors also approved

*Ankylosing Spondylitis:*
- TNFi, IL-17i
- NSAIDs first-line

*SLE:*
- Belimumab (anti-BAFF)
- Anifrolumab (anti-IFNAR)

**Pre-Treatment Screening:**
- Tuberculosis (latent and active)
- Hepatitis B and C
- HIV
- Vaccinations (before starting)
- Baseline labs

**Adverse Effects:**
- Infections (bacterial, TB reactivation, opportunistic)
- Injection site reactions
- Infusion reactions
- Rare: Demyelinating disease, heart failure worsening, malignancy concern (debated)

**Biosimilars:**
- Copies of original biologics
- Rigorous approval process
- Similar efficacy and safety
- Cost savings
- Available for many TNFi

**Treatment Strategies:**
- Usually combined with methotrexate
- Can use after csDMARD failure
- May switch between mechanisms
- Consider when to taper in remission`,
      keyTerms: [
        { term: 'TNF-alpha', definition: 'Tumor necrosis factor alpha; key inflammatory cytokine targeted by multiple biologics' },
        { term: 'IL-6', definition: 'Interleukin-6; cytokine involved in inflammation, fever, and acute phase response' },
        { term: 'CTLA4-Ig', definition: 'Fusion protein (abatacept) that blocks T cell co-stimulation via CD28' },
        { term: 'anti-CD20', definition: 'Antibodies targeting CD20 on B cells, causing B cell depletion (rituximab)' },
        { term: 'chimeric antibody', definition: 'Antibody with mouse variable regions and human constant regions (infliximab)' },
      ],
      analogies: [
        'TNF inhibitors are like putting out a specific fire, while traditional drugs turn off all the lights in the house.',
        'Biologics are like precision-guided missiles compared to conventional DMARDs which are more like shotguns.',
      ],
    },
    3: {
      level: 3,
      summary: 'Biologic DMARDs target specific cytokines (TNF, IL-6, IL-17, IL-23), cell surface molecules (CD20, CD80/86), or signaling pathways (BAFF, IFNAR) through monoclonal antibodies or fusion proteins, with selection guided by disease phenotype, comorbidities, and treatment history.',
      explanation: `**Mechanisms in Detail:**

1. **TNF Inhibitors:**

   *TNF Biology:*
   - Produced by macrophages, T cells
   - Activates NF-kappaB
   - Induces inflammation, matrix destruction
   - Membrane-bound and soluble forms

   *Agent-Specific Differences:*

   | Agent | Structure | Binds Membrane TNF | LTα Binding | Fc Function |
   |-------|-----------|-------------------|-------------|-------------|
   | Infliximab | Chimeric IgG1 | Yes | No | Yes (ADCC) |
   | Adalimumab | Human IgG1 | Yes | No | Yes |
   | Etanercept | p75-Fc fusion | No | Yes | Minimal |
   | Certolizumab | PEGylated Fab | Yes | No | No |
   | Golimumab | Human IgG1 | Yes | No | Yes |

   *Clinical Implications:*
   - Certolizumab: No Fc = safe in pregnancy
   - Monoclonal Abs may be better for granulomatous disease
   - Etanercept less effective in IBD, uveitis

2. **IL-6 Pathway Inhibition:**

   *IL-6 Effects:*
   - Acute phase response (CRP, ESR)
   - B cell differentiation
   - T cell polarization (Th17)
   - Hepatocyte signaling

   *Tocilizumab/Sarilumab:*
   - Block IL-6 receptor
   - Suppress CRP (can mask infection)
   - Cause lipid elevation
   - Effective as monotherapy (unique among biologics)

   *Safety Considerations:*
   - GI perforation risk (especially with diverticulitis)
   - Neutropenia
   - Liver function monitoring
   - Don't rely on CRP for infection detection

3. **B Cell Depletion (Rituximab):**

   *Mechanism:*
   - Anti-CD20 monoclonal antibody
   - Depletes CD20+ B cells
   - Spares plasma cells (CD20-)
   - Autoantibody reduction delayed

   *Indications:*
   - RF/ACPA positive RA (best responders)
   - ANCA-associated vasculitis
   - SLE (off-label)
   - After TNFi failure

   *Dosing:*
   - 1000 mg IV x2 doses (2 weeks apart)
   - Repeat q6 months (or when B cells return)

4. **T Cell Co-stimulation (Abatacept):**

   *Mechanism:*
   - CTLA4-Ig fusion protein
   - Binds CD80/CD86 on APC
   - Prevents CD28 co-stimulation
   - Reduces T cell activation

   *Clinical Features:*
   - Slower onset but durable
   - Safe in heart failure
   - May be first-line option
   - IV or SC formulation

5. **IL-17 Inhibitors:**

   *IL-17 in Disease:*
   - Key in SpA, PsA, psoriasis
   - Enthesitis, new bone formation
   - Less important in RA

   *Agents:*
   - Secukinumab: Anti-IL-17A
   - Ixekizumab: Anti-IL-17A
   - Brodalumab: Anti-IL-17RA

   *Cautions:*
   - Candida infections increased
   - May worsen IBD (not for patients with IBD)
   - Depression monitoring (brodalumab)

**Treatment Selection Algorithm:**

*First Biologic Choice (RA):*
- TNFi most experience, biosimilars available
- IL-6i if monotherapy needed
- Abatacept if safety concerns
- Consider comorbidities

*After First Biologic Failure:*
- Primary failure: Switch mechanism
- Secondary failure: May switch within class or mechanism
- Rituximab: Best for seropositive patients

**Biosimilars:**

*Approval Requirements:*
- Analytical similarity
- Functional studies
- PK/PD studies
- Clinical efficacy/safety studies
- No clinical difference ("interchangeable")

*Available Biosimilars:*
- Infliximab: Multiple
- Adalimumab: Multiple
- Etanercept: Multiple
- Rituximab: Multiple

*Switching Considerations:*
- Generally safe to switch
- Cost savings significant
- NOR-SWITCH trial reassuring
- Patient education important

**Monitoring:**

*Before Starting:*
- TB screen (QuantiFERON or PPD)
- Hepatitis B/C serology
- Baseline CBC, CMP
- Vaccinations (no live vaccines on therapy)

*During Treatment:*
- Infection monitoring
- LFTs (especially IL-6i)
- Lipids (IL-6i)
- Disease activity assessment`,
      keyTerms: [
        { term: 'ADCC', definition: 'Antibody-dependent cellular cytotoxicity; mechanism by which some biologics kill target cells via Fc receptor engagement' },
        { term: 'PEGylation', definition: 'Attachment of polyethylene glycol to extend drug half-life; used in certolizumab' },
        { term: 'NOR-SWITCH', definition: 'Trial demonstrating non-inferiority of switching from originator to biosimilar infliximab' },
        { term: 'interchangeable biosimilar', definition: 'FDA designation allowing pharmacist substitution without prescriber approval' },
        { term: 'immunogenicity', definition: 'Development of anti-drug antibodies that can reduce efficacy; minimized by MTX co-administration' },
      ],
      clinicalNotes: 'Certolizumab (PEGylated Fab) is the preferred TNF inhibitor in pregnancy - no Fc region, minimal placental transfer. IL-6 inhibitors suppress CRP even during infection - clinical assessment paramount. Etanercept is less effective for IBD and granulomatous diseases. Rituximab most effective in seropositive (RF+/ACPA+) RA.',
    },
    4: {
      level: 4,
      summary: 'Biologic DMARDs exemplify targeted immunotherapy with distinct mechanisms including cytokine neutralization, receptor blockade, cellular depletion, and signal modulation, while pharmacokinetics, immunogenicity, and safety profiles guide personalized selection, sequencing, and the integration of biosimilars.',
      explanation: `**Advanced Pharmacology:**

1. **Immunogenicity:**

   *Anti-Drug Antibodies (ADA):*
   - Common with protein therapeutics
   - Can cause loss of efficacy
   - May cause adverse reactions
   - Risk varies by agent

   *Factors Affecting Immunogenicity:*
   - Drug structure (chimeric > human)
   - Concomitant MTX (reduces ADA)
   - Route (SC may be higher than IV for some)
   - Dose and frequency

   *Mitigation Strategies:*
   - MTX co-administration
   - Regular dosing (avoid drug holidays)
   - Induction dosing (infliximab)
   - Monitoring drug levels

2. **Pharmacokinetics:**

   *TNFi Comparison:*

   | Agent | Half-life | MTX Effect | Comments |
   |-------|-----------|------------|----------|
   | Infliximab | 8-10 days | Increases levels | Dose-dependent clearance |
   | Adalimumab | 2 weeks | Reduces clearance | Linear PK |
   | Etanercept | 4 days | Minimal effect | Unique mechanism |
   | Certolizumab | 2 weeks | Minimal effect | No Fc |
   | Golimumab | 2 weeks | Increases levels | Long half-life |

   *Therapeutic Drug Monitoring (TDM):*
   - Trough levels correlate with response
   - May guide dose optimization
   - ADA detection predicts loss of response
   - Not yet standard practice (IBD more established)

3. **Safety Deep Dive:**

   *Infections:*
   - TB reactivation (all TNFi, highest with antibodies)
   - Hepatitis B reactivation
   - Opportunistic infections (PML, histoplasma, listeria)
   - Risk factors: Age, comorbidities, high-dose steroids

   *Malignancy:*
   - Theoretical concern (TNF in tumor surveillance)
   - Registry data largely reassuring
   - Possible increased lymphoma (confounded by disease)
   - NMSC increase (especially with MTX)

   *Cardiovascular:*
   - Paradoxical heart failure worsening (TNFi)
   - Avoid TNFi in moderate-severe CHF
   - Abatacept, tocilizumab may be safer

   *Demyelinating Disease:*
   - Associated with TNFi
   - MS-like syndromes reported
   - Avoid in known MS

4. **JAK Inhibitors (tsDMARDs):**

   *Mechanism:*
   - Small molecule inhibitors
   - Target Janus kinases (JAK1, JAK2, JAK3, TYK2)
   - Block cytokine signaling (IL-6, IFN, others)

   *Agents:*
   - Tofacitinib: JAK1/3 > JAK2
   - Baricitinib: JAK1/2
   - Upadacitinib: JAK1 selective
   - Filgotinib: JAK1 selective

   *Advantages:*
   - Oral administration
   - Rapid onset
   - Effective as monotherapy
   - No immunogenicity

   *Safety Concerns (ORAL Surveillance):*
   - Increased VTE risk
   - Cardiovascular events (vs TNFi)
   - Malignancy signal
   - Herpes zoster (vaccinate first)
   - FDA boxed warning

5. **Special Populations:**

   *Pregnancy:*
   - Certolizumab: Preferred (no placental transfer)
   - TNFi: Stop third trimester if possible
   - Rituximab: B cell depletion in infant
   - JAKi: Contraindicated

   *Malignancy History:*
   - Case-by-case assessment
   - Rituximab, abatacept often preferred
   - TNFi relatively contraindicated with lymphoma history
   - Shared decision with oncology

   *Hepatitis B:*
   - Vaccinate if negative
   - Prophylaxis if HBsAg+ or anti-HBc+ (rituximab)
   - Monitor HBV DNA
   - Entecavir/tenofovir prophylaxis

   *Latent TB:*
   - Treat before starting biologic
   - Wait 1-2 months for isoniazid
   - Can start immediately with rifampin (4 months)

**Sequencing and Switching:**

*Primary Non-Response:*
- Switch mechanism (TNFi → non-TNFi)
- Consider diagnosis, adherence
- May not be good biologic candidate

*Secondary Loss of Response:*
- Check drug levels/ADA if available
- Can try different TNFi
- Consider mechanism switch

*Cycling vs. Swapping:*
- Limited evidence
- Generally switch mechanisms after 1-2 TNFi failures
- Rituximab after TNFi failure (seropositive)
- JAKi as alternative to biologic switch`,
      keyTerms: [
        { term: 'anti-drug antibodies (ADA)', definition: 'Immune response to biologic therapy that can reduce drug levels and efficacy' },
        { term: 'therapeutic drug monitoring', definition: 'Measuring drug levels and ADA to optimize dosing and predict response' },
        { term: 'ORAL Surveillance', definition: 'Trial showing increased CV events and VTE with tofacitinib vs TNFi in RA patients with CV risk factors' },
        { term: 'primary non-response', definition: 'Never achieving meaningful response to biologic therapy' },
        { term: 'secondary loss of response', definition: 'Initial response to biologic followed by loss of efficacy over time' },
      ],
      clinicalNotes: 'Methotrexate reduces immunogenicity and improves efficacy of most biologics. JAK inhibitors carry FDA boxed warning for CV events, VTE, and malignancy - use TNFi first in patients with CV risk factors. Certolizumab preferred in pregnancy (no Fc, minimal transfer). Monitor for HBV reactivation especially with rituximab. Consider vaccination before starting any biologic.',
    },
    5: {
      level: 5,
      summary: 'Contemporary biologic therapy integrates precision medicine approaches with biomarker-guided selection, therapeutic drug monitoring, and understanding of mechanism-specific effects, while emerging therapies expand the targeted armamentarium and biosimilar adoption transforms access and cost considerations.',
      explanation: `**Precision Medicine Approaches:**

1. **Biomarker-Guided Selection:**

   *Predictors of Response:*

   | Biomarker | Agent | Association |
   |-----------|-------|-------------|
   | RF/ACPA+ | Rituximab | Better response |
   | High CRP | TNFi | Better response |
   | Synovial pathotype | Various | Under investigation |
   | IFN signature | Anifrolumab | Better response (SLE) |

   *Emerging Markers:*
   - Synovial biopsy phenotypes
   - Gene expression profiles
   - Serum cytokine panels
   - Microbiome signatures

2. **Therapeutic Drug Monitoring:**

   *Implementation:*
   - More established in IBD
   - Growing evidence in RA
   - Proactive (optimize all) vs reactive (loss of response)
   - INGEBIO trial: TDM reduced costs, maintained efficacy

   *Target Troughs:*
   - Infliximab: >3-5 mcg/mL
   - Adalimumab: >5-8 mcg/mL
   - Varies by indication and source

   *Algorithm:*
   1. Adequate level + ADA-: Increase dose or switch mechanism
   2. Low level + ADA-: Increase dose
   3. Low level + ADA+: Switch (same class or different)
   4. Adequate level + ADA+: Switch mechanism

3. **Emerging Biologics:**

   *SLE:*
   - Belimumab: Anti-BAFF, approved
   - Anifrolumab: Anti-IFNAR, approved
   - Obinutuzumab: Anti-CD20, lupus nephritis
   - Dapirolizumab: Anti-CD40L, in trials

   *New Targets:*
   - Anti-GM-CSF: In development for RA
   - Bimekizumab: Dual IL-17A/F inhibitor
   - TYK2 inhibitors: Deucravacitinib (approved psoriasis)
   - CD19 CAR-T: Remarkable SLE results

4. **Biosimilar Evolution:**

   *Economic Impact:*
   - 30-70% cost reduction
   - Improved access globally
   - Redirected healthcare spending
   - Competition driving innovation

   *Interchangeability:*
   - FDA interchangeable designation
   - State laws vary
   - Adalimumab biosimilars (multiple)
   - Rituximab biosimilars

   *Switching Studies:*
   - NOR-SWITCH: Non-inferior
   - DANBIO registry: Safe
   - Patient perception important
   - Nocebo effect consideration

5. **Tapering and Discontinuation:**

   *Tapering Strategies:*
   - Spacing (extend interval)
   - Dose reduction
   - Discontinuation with monitoring

   *Evidence:*
   - POET trial: ~50% maintain remission off TNFi
   - STRASS: Spacing strategy feasible
   - Risk factors for flare: ACPA+, high disease activity

   *Algorithm:*
   1. Sustained remission 6-12 months
   2. Taper biologic (space or reduce)
   3. If flare: Resume (usually responds)
   4. If stable: Consider csDMARD taper

6. **Next-Generation Biologics:**

   *Bispecific Antibodies:*
   - Target two epitopes/antigens
   - Potential for synergistic effects
   - In development for rheumatic diseases

   *Nanobodies:*
   - Single-domain antibody fragments
   - Small size, unique properties
   - Ozoralizumab (anti-TNF nanobody) approved in Japan

   *CAR-T Therapy:*
   - CD19 CAR-T in refractory SLE
   - Remarkable early results (drug-free remission)
   - Trials expanding
   - Cost and logistics challenges

7. **Global Access:**

   *Challenges:*
   - Cost remains prohibitive in many regions
   - Biosimilars help but not sufficient
   - Cold chain requirements
   - Infrastructure needs

   *Solutions:*
   - Biosimilar competition
   - Tiered pricing
   - Local manufacturing
   - Novel formulations

**Treatment Algorithm Integration:**

*RA 2024:*
1. csDMARD (MTX) first
2. If inadequate: Add biologic or JAKi
3. TNFi preferred if CV risk (ORAL Surveillance)
4. Can switch mechanism if first fails
5. Consider tapering in sustained remission

*PsA:*
1. NSAIDs/local therapy first
2. csDMARD (peripheral arthritis)
3. TNFi, IL-17i, or IL-12/23i
4. JAKi option
5. Consider skin/joint balance

*AxSpA:*
1. NSAIDs first-line
2. csDMARDs not effective (peripheral okay)
3. TNFi or IL-17i
4. No biologics for NSAID responders typically

**Future Directions:**

*Digital Health:*
- Remote disease monitoring
- Wearable devices for activity
- AI for treatment prediction
- Virtual trials

*Precision Medicine:*
- Multi-omics profiling
- Synovial biopsy-guided therapy
- Real-world data integration
- Learning health systems`,
      keyTerms: [
        { term: 'synovial pathotype', definition: 'Histological classification of synovium (fibroid, myeloid, lymphoid) that may predict treatment response' },
        { term: 'INGEBIO', definition: 'Trial showing TDM-guided management non-inferior to standard care with cost savings' },
        { term: 'nanobody', definition: 'Single-domain antibody fragment with unique properties; ozoralizumab is an anti-TNF nanobody' },
        { term: 'nocebo effect', definition: 'Negative expectations causing adverse effects; relevant in biosimilar switching' },
        { term: 'POET trial', definition: 'Trial of TNF inhibitor discontinuation in RA remission; ~50% remained in low disease activity' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- TNF inhibitors: First-line biologic for most indications
- Certolizumab: Preferred in pregnancy (no Fc, no placental transfer)
- Methotrexate reduces immunogenicity - combine with biologics
- JAK inhibitors: Oral, convenient, but FDA boxed warning (CV, VTE, malignancy)
- Use TNFi over JAKi in patients with CV risk factors (ORAL Surveillance)
- Rituximab: Best in seropositive RA, ANCA vasculitis
- IL-6 inhibitors suppress CRP - can mask infection
- TB screening mandatory before all biologics
- Biosimilars are safe and effective - encourage for cost savings
- Consider tapering after 6-12 months sustained remission
- Secondary loss of response: Check drug levels/ADA if available`,
    },
  },

  media: [
    {
      id: 'biologic-targets',
      type: 'diagram',
      filename: 'biologic-targets-diagram.svg',
      title: 'Biologic DMARD Targets',
      description: 'Diagram showing cytokine and cellular targets of different biologics',
    },
    {
      id: 'biologic-selection',
      type: 'diagram',
      filename: 'biologic-selection-algorithm.svg',
      title: 'Biologic Selection Algorithm',
      description: 'Flowchart for selecting biologics based on disease and patient factors',
    },
  ],
  citations: [
    {
      id: 'smolen-2020',
      type: 'article',
      title: 'EULAR recommendations for the management of rheumatoid arthritis with synthetic and biological disease-modifying antirheumatic drugs: 2019 update',
      authors: ['Smolen JS', 'Landewe RBM', 'Bijlsma JWJ', 'et al.'],
      source: 'Annals of the Rheumatic Diseases',
      url: 'https://doi.org/10.1136/annrheumdis-2019-216655',
    },
    {
      id: 'ytterberg-2022',
      type: 'article',
      title: 'Cardiovascular and Cancer Risk with Tofacitinib in Rheumatoid Arthritis (ORAL Surveillance)',
      authors: ['Ytterberg SR', 'Bhatt DL', 'Mikuls TR', 'et al.'],
      source: 'NEJM',
      url: 'https://doi.org/10.1056/NEJMoa2109927',
    },
  ],
  crossReferences: [
    { targetId: 'topic-dmards', targetType: 'topic', relationship: 'sibling', label: 'Conventional DMARDs' },
    { targetId: 'condition-rheumatoid-arthritis', targetType: 'condition', relationship: 'related', label: 'Rheumatoid Arthritis' },
    { targetId: 'condition-ankylosing-spondylitis', targetType: 'condition', relationship: 'related', label: 'Ankylosing Spondylitis' },
  ],
  tags: {
    systems: ['immune', 'musculoskeletal'],
    topics: ['rheumatology', 'pharmacology', 'therapeutics', 'immunology'],
    keywords: ['biologics', 'TNF inhibitors', 'rituximab', 'tocilizumab', 'abatacept', 'JAK inhibitors', 'biosimilars'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default biologicsContent;
