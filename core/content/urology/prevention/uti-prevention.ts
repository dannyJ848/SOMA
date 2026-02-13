/**
 * UTI Prevention - Educational Content
 */

import { EducationalContent } from '../../types';

export const utiPrevention: EducationalContent = {
  id: 'prevention-uti-prevention',
  type: 'topic',
  name: 'UTI Prevention',
  alternateNames: ['Preventing Urinary Tract Infections', 'Recurrent UTI Prevention'],

  levels: {
    1: {
      level: 1,
      summary: 'Urinary tract infections can often be prevented through simple lifestyle changes like drinking enough water and practicing good bathroom habits.',
      explanation: `Many UTIs can be prevented with these simple steps:

**Drink Plenty of Water:**
- Aim for 6-8 glasses daily
- Helps flush bacteria out
- Dilutes your urine

**Bathroom Habits:**
- Don't hold urine too long
- Empty bladder completely
- Wipe front to back (women)
- Urinate after sexual activity

**Personal Hygiene:**
- Avoid douches and sprays
- Wear cotton underwear
- Change out of wet swimsuits quickly

**For Women:**
- Urinate before and after sex
- Consider cranberry products
- Ask about topical estrogen if postmenopausal

**When Prevention Isn't Enough:**
- Some people get frequent UTIs despite prevention
- Talk to your doctor about:
  - Low-dose preventive antibiotics
  - Self-start antibiotic treatment
  - Other options`,
      keyTerms: [
        { term: 'prevention', definition: 'Steps to stop UTIs before they happen' },
        { term: 'hydration', definition: 'Drinking enough water' },
        { term: 'recurrent UTI', definition: 'Having multiple UTIs in a short time' },
      ],
      analogies: [
        'Drinking water flushes out bacteria like water washing dirt off a sidewalk.',
      ],
      examples: [
        'Urinating within 30 minutes after sex can significantly reduce UTI risk.',
      ],
    },
    2: {
      level: 2,
      summary: 'UTI prevention strategies include behavioral modifications, non-antimicrobial approaches, and antimicrobial prophylaxis for recurrent infections.',
      explanation: `## Behavioral Strategies

**Hydration:**
- 1.5-2 L fluid intake daily
- Increases voiding frequency
- Dilutes bacterial concentration

**Voiding Habits:**
- Void every 3-4 hours
- Complete emptying
- Avoid constipation (shared pelvic floor)

**Sexual Activity Related:**
- Post-coital voiding
- Avoid spermicides (alter vaginal flora)
- Consider alternative contraception

## Non-Antimicrobial Prevention

**Cranberry Products:**
- Proanthocyanidins (PACs)
- May prevent bacterial adherence
- 36mg PACs daily suggested
- Modest evidence

**Vaginal Estrogen (Postmenopausal):**
- Restores lactobacilli
- Reduces vaginal pH
- Cream, ring, or tablet

**D-Mannose:**
- Sugar that binds E. coli fimbriae
- 2g daily
- Limited clinical data

**Methenamine Hippurate:**
- Converts to formaldehyde in acidic urine
- Non-antibiotic antimicrobial
- Use with vitamin C

## Antimicrobial Prophylaxis

**Continuous:**
- Daily low-dose antibiotic
- Nitrofurantoin 50-100mg nightly
- TMP-SMX half-tab nightly
- 6-12 months duration

**Post-Coital:**
- Single dose after intercourse
- If UTIs are sex-related
- Same medications

**Patient-Initiated:**
- Self-start at symptom onset
- 3-day course available
- For reliable patients`,
      keyTerms: [
        { term: 'prophylaxis', definition: 'Preventive medication taken regularly to avoid infection' },
        { term: 'post-coital', definition: 'After sexual intercourse' },
        { term: 'PACs', definition: 'Proanthocyanidins - active compounds in cranberries' },
      ],
      analogies: [
        'Post-coital prophylaxis is like applying sunscreen after going outside - timing is key.',
      ],
    },
    3: {
      level: 3,
      summary: 'UTI prevention requires understanding of pathogenesis, vaginal microbiome, and evidence-based selection of prevention strategies.',
      explanation: `## Pathogenesis Understanding

**Bacterial Adherence:**
- Type 1 fimbriae bind mannose
- P fimbriae bind uroepithelium
- Biofilm formation

**Defense Mechanisms:**
- Urine flow washout
- Mucosal immunity
- Competitive flora

**Risk Factor Modification:**
- Address modifiable factors first
- Anatomic abnormalities rare
- Focus on behavior and biology

## Vaginal Microbiome

**Healthy Flora:**
- Lactobacillus dominance
- Acidic pH (3.5-4.5)
- Competitive exclusion

**Disrupting Factors:**
- Antibiotics
- Spermicides
- Menopause
- Douching

**Restoration:**
- Vaginal probiotics (limited evidence)
- Topical estrogen (strong evidence)
- Avoid disrupting factors

## Evidence for Interventions

| Intervention | Evidence Level | Effect Size |
|--------------|----------------|-------------|
| Antibiotic prophylaxis | High | 80% reduction |
| Vaginal estrogen | High | 50% reduction |
| Cranberry | Moderate | 30% reduction |
| D-mannose | Low | Variable |
| Methenamine | Moderate | 40-50% reduction |
| Probiotics | Low | Uncertain |

## Special Populations

**Postmenopausal:**
- Vaginal estrogen first-line
- Address atrophy
- May avoid antibiotics

**Catheter-Associated:**
- Minimize catheter use
- Aseptic technique
- No prophylaxis for chronic catheters

**Spinal Cord Injury:**
- Bladder management program
- Avoid chronic prophylaxis
- Treat symptomatic UTIs only

**Pregnancy:**
- Treat asymptomatic bacteriuria
- Short-course therapy
- Safe antibiotic selection`,
      keyTerms: [
        { term: 'competitive exclusion', definition: 'Healthy bacteria preventing pathogen colonization' },
        { term: 'vaginal atrophy', definition: 'Thinning of vaginal tissue after menopause affecting UTI risk' },
        { term: 'asymptomatic bacteriuria', definition: 'Bacteria in urine without symptoms - treat only in pregnancy' },
      ],
      clinicalNotes: 'Vaginal estrogen is underutilized for UTI prevention in postmenopausal women. Consider as first-line before antibiotic prophylaxis.',
    },
    4: {
      level: 4,
      summary: 'Advanced UTI prevention includes immunotherapy, microbiome manipulation, and personalized approaches for refractory recurrent UTIs.',
      explanation: `## Immunotherapy

**Uro-Vaxom:**
- Oral E. coli extract
- Immune stimulation
- 3-month course
- 40-50% reduction in recurrence
- Available in Europe

**Other Vaccines in Development:**
- FimH-based vaccines
- Whole-cell vaccines
- Intranasal delivery
- Clinical trials ongoing

## Microbiome Manipulation

**Vaginal Probiotics:**
- Lactobacillus crispatus
- L. rhamnosus
- Delivery methods: suppository, oral
- Evidence still developing

**Fecal/Vaginal Microbiome Transplant:**
- Experimental
- Restore healthy flora
- Research stage

## Intravesical Therapies

**GAG Replenishment:**
- Hyaluronic acid
- Chondroitin sulfate
- Restore bladder lining
- For recalcitrant cases

**Instillation Protocols:**
- Weekly x 4-6, then monthly
- Combined products available

## Antibiotic Stewardship

**Minimizing Resistance:**
- Shortest effective courses
- Narrow spectrum
- Culture-guided choices
- Rotation strategies

**De-Escalation:**
- Step down from prophylaxis
- Trial off after 6-12 months
- Patient-initiated backup plan

## Evaluation of Recurrence

**When to Investigate:**
- Very frequent infections
- Complicated infections
- Unusual organisms
- Poor response to treatment

**Workup:**
- Cystoscopy
- Imaging (CT urography)
- Urodynamics if voiding dysfunction
- Rule out structural abnormality

## Emerging Research

**Biomarkers:**
- Identify high-risk individuals
- Personalize prevention
- Monitor success

**Genetic Factors:**
- UTI susceptibility genes
- Future targeted prevention`,
      keyTerms: [
        { term: 'Uro-Vaxom', definition: 'Oral immunotherapy using E. coli extract for UTI prevention' },
        { term: 'GAG replenishment', definition: 'Restoring bladder protective layer with glycosaminoglycans' },
        { term: 'antibiotic stewardship', definition: 'Using antibiotics wisely to prevent resistance' },
      ],
      clinicalNotes: 'Uro-Vaxom has good evidence but is not FDA-approved in the US. Consider for patients interested in non-antibiotic options who can access it.',
    },
    5: {
      level: 5,
      summary: 'Expert UTI prevention integrates precision medicine approaches, novel therapeutic targets, and comprehensive care models.',
      explanation: `## Precision Medicine

**Phenotyping:**
- Sexual activity-related
- Postmenopausal atrophy
- Voiding dysfunction
- Anatomic abnormality

**Tailored Prevention:**
- Match intervention to phenotype
- Avoid one-size-fits-all
- Address root cause

## Novel Therapeutic Targets

**Anti-Adhesion Strategies:**
- FimH antagonists
- Mannosides
- Surface modification

**Anti-Biofilm Agents:**
- Disrupt established biofilms
- Combination approaches

**Quorum Sensing Inhibitors:**
- Block bacterial communication
- Prevent virulence expression

## Intracellular Bacteria

**Reservoir Concept:**
- Bacteria persist intracellularly
- Evade antibiotics and immune system
- Source of recurrence

**Targeting Strategies:**
- Antibiotic penetration
- Cell-permeable agents
- Exfoliation promotion

## Care Models

**Specialized Clinics:**
- Recurrent UTI focus
- Multidisciplinary team
- Comprehensive evaluation

**Telehealth Integration:**
- Remote monitoring
- Self-test kits
- Virtual consultations

**Patient Empowerment:**
- Education programs
- Self-management skills
- Support groups

## Quality Metrics

**Outcomes:**
- UTI frequency reduction
- Antibiotic exposure
- Quality of life improvement

**Process:**
- Appropriate investigation
- Evidence-based prevention
- Patient engagement

## Future Directions

**Vaccine Development:**
- Multiple targets
- Mucosal immunity
- Long-lasting protection

**Personalized Probiotics:**
- Individual microbiome analysis
- Targeted restoration
- Synbiotics (pre + probiotics)

**Digital Health:**
- Symptom tracking apps
- Early detection
- Personalized recommendations`,
      keyTerms: [
        { term: 'intracellular bacterial communities', definition: 'Bacteria living inside bladder cells, evading treatment' },
        { term: 'quorum sensing', definition: 'Bacterial communication system that could be therapeutic target' },
        { term: 'synbiotics', definition: 'Combination of probiotics and prebiotics' },
      ],
      clinicalNotes: 'The discovery of intracellular bacterial reservoirs explains why some patients relapse despite appropriate treatment. Research is ongoing to target these reservoirs.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-ruti',
      type: 'article',
      title: 'Recurrent Uncomplicated Urinary Tract Infections in Women',
      source: 'AUA/CUA/SUFU Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'condition-urinary-tract-infections', targetType: 'condition', relationship: 'parent', label: 'UTIs' },
  ],
  tags: {
    systems: ['urinary'],
    topics: ['prevention', 'infection'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default utiPrevention;
