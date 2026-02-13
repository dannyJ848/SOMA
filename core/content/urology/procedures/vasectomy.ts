/**
 * Vasectomy - Educational Content
 */

import { EducationalContent } from '../../types';

export const vasectomy: EducationalContent = {
  id: 'procedure-vasectomy',
  type: 'topic',
  name: 'Vasectomy',
  alternateNames: ['Male Sterilization', 'Vas Deferens Ligation'],

  levels: {
    1: {
      level: 1,
      summary: 'Vasectomy is a simple procedure that prevents pregnancy by cutting the tubes that carry sperm, making it the most effective form of male birth control.',
      explanation: `A vasectomy is a permanent form of birth control for men who are sure they don't want more children.

**How It Works:**
- The vas deferens (tubes carrying sperm) are cut
- Sperm can no longer mix with semen
- You still ejaculate normally, just without sperm

**The Procedure:**
- Done in the office with local numbing
- Takes about 15-30 minutes
- Small opening in the scrotum
- Recovery is quick (few days)

**Important Facts:**
- Very effective (>99%)
- Does NOT affect sex drive or erections
- Does NOT work immediately - takes 2-3 months
- Need follow-up test to confirm it worked
- Should be considered permanent

**After the Procedure:**
- Ice and rest for 48 hours
- Wear supportive underwear
- Avoid heavy activity for 1 week
- Use other birth control until tested`,
      keyTerms: [
        { term: 'vasectomy', definition: 'Procedure cutting the tubes that carry sperm' },
        { term: 'vas deferens', definition: 'Tubes that carry sperm from testicles' },
        { term: 'sterilization', definition: 'Permanent birth control' },
      ],
      analogies: [
        'A vasectomy is like cutting a road - traffic (sperm) can no longer pass through.',
      ],
      examples: [
        'A man must use other birth control for about 3 months after vasectomy until a semen test confirms no sperm.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vasectomy involves interruption of the vas deferens, achieved through various techniques, and requires post-vasectomy semen analysis to confirm success.',
      explanation: `## Techniques

**Conventional (Incisional):**
- Small incisions in scrotum
- Each vas isolated and divided
- Tissue layers closed

**No-Scalpel Vasectomy (NSV):**
- Single midline puncture
- Special instruments
- Less bleeding, faster healing
- Current standard

## Vas Occlusion Methods

**Excision with Fascial Interposition:**
- Remove segment of vas
- Bury one end in fascia
- Lowest failure rate

**Cautery:**
- Thermal destruction of lumen
- Often combined with excision

**Clips:**
- Less effective alone
- Usually with excision

## Post-Vasectomy Semen Analysis

**Timing:**
- Wait 8-16 weeks (or 20 ejaculations)
- At least one sample required
- Some recommend two samples

**Success Criteria:**
- Azoospermia (no sperm), OR
- Rare non-motile sperm (<100,000/mL)

## Failure Rates

**Early Failure:**
- Spontaneous recanalization
- 0.2-0.4% with modern technique

**Late Failure:**
- Very rare (1 in 2,000)
- Recanalization after negative PVSA

## Counseling Points

- Permanence
- Not immediately effective
- Need for PVSA
- Failure rates
- Alternative options
- Reversal considerations`,
      keyTerms: [
        { term: 'no-scalpel vasectomy', definition: 'Technique using puncture instead of incision' },
        { term: 'fascial interposition', definition: 'Placing tissue barrier between vas ends to prevent rejoining' },
        { term: 'PVSA', definition: 'Post-vasectomy semen analysis confirming success' },
      ],
      analogies: [
        'Fascial interposition is like putting a wall between the two ends of a cut road.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vasectomy technique optimization includes no-scalpel approach, fascial interposition, and mucosal fulguration to minimize failure rates.',
      explanation: `## No-Scalpel Technique

**Instruments:**
- Ring forceps (Li technique)
- Pointed forceps
- Dissecting forceps

**Steps:**
1. Locate vas through scrotal skin
2. Fix with ringed forceps
3. Puncture skin with pointed forceps
4. Deliver vas through puncture
5. Occlude and divide
6. Return vas, repeat opposite side

**Advantages:**
- Single midline puncture
- Less bleeding
- Faster recovery
- Lower hematoma rate

## Occlusion Technique

**Best Evidence (AUA):**
- Excise 1-2 cm segment
- Mucosal fulguration
- Fascial interposition
- Failure rate <0.5%

**Mucosal Fulguration:**
- Cauterize lumen
- Destroys epithelium
- Prevents recanalization

## Anesthesia

**Local Infiltration:**
- 1% lidocaine without epinephrine
- Spermatic cord block
- Vasal block
- No-needle jet injection option

**Sedation:**
- Oral anxiolytic (optional)
- Rarely needs deeper sedation

## Special Considerations

**Previous Scrotal Surgery:**
- May be more difficult
- Consider imaging
- Prepare for conventional approach

**Undescended Testis History:**
- Variable vas location
- May need exploration

**Single Testis:**
- Not a contraindication
- Standard counseling

## Complications

| Complication | Rate |
|--------------|------|
| Hematoma | 1-2% |
| Infection | 1-2% |
| Sperm granuloma | 1-3% |
| Chronic pain | 1-2% |
| Failure | 0.2-0.5% |`,
      keyTerms: [
        { term: 'sperm granuloma', definition: 'Inflammatory nodule from sperm leakage at vasectomy site' },
        { term: 'mucosal fulguration', definition: 'Cauterizing the inner lining of the vas' },
        { term: 'vasal block', definition: 'Local anesthesia injected around the vas deferens' },
      ],
      clinicalNotes: 'Combine mucosal fulguration with fascial interposition for lowest failure rates. Clips alone are associated with higher failure.',
    },
    4: {
      level: 4,
      summary: 'Advanced vasectomy considerations include post-vasectomy pain syndrome, reversal techniques, and medicolegal aspects.',
      explanation: `## Post-Vasectomy Pain Syndrome

**Definition:**
- Chronic scrotal pain >3 months
- Occurs in 1-2% of men

**Etiology:**
- Sperm granuloma
- Epididymal congestion
- Nerve entrapment
- Psychological factors

**Management:**
1. Conservative: NSAIDs, heat, time
2. Nerve blocks
3. Epididymectomy
4. Vasectomy reversal
5. Orchiectomy (last resort)

## Vasectomy Reversal

**Vasovasostomy:**
- Reconnect vas to vas
- Success depends on interval
- <3 years: 97% patency, 76% pregnancy
- >15 years: 71% patency, 30% pregnancy

**Vasoepididymostomy:**
- Connect vas to epididymis
- When no sperm in vasal fluid
- Lower success rates
- More technically demanding

**Factors Affecting Success:**
- Time since vasectomy
- Age of female partner
- Presence of sperm granuloma
- Surgeon experience

## Medicolegal Considerations

**Informed Consent:**
- Permanence (not guaranteed)
- Failure rates
- Not immediately effective
- PVSA requirement
- Alternative options
- Reversal success rates

**Documentation:**
- Written consent
- Counseling documented
- Specimen handling
- PVSA results

## Failed Vasectomy

**Evaluation:**
- Confirm original procedure
- Repeat semen analysis
- Physical examination

**Options:**
- Repeat vasectomy
- Ensure PVSA compliance was followed

## Training

**Competency:**
- Supervised cases
- Simulation available
- Technique refinement`,
      keyTerms: [
        { term: 'vasovasostomy', definition: 'Microsurgical reconnection of vas deferens for reversal' },
        { term: 'post-vasectomy pain syndrome', definition: 'Chronic orchialgia following vasectomy' },
        { term: 'epididymectomy', definition: 'Removal of epididymis for refractory pain' },
      ],
      clinicalNotes: 'Vasoepididymostomy is required in 30-50% of reversals, especially when obstruction interval is long. Counsel about lower success rates.',
    },
    5: {
      level: 5,
      summary: 'Expert vasectomy practice encompasses reversibility optimization, novel approaches, and global family planning perspectives.',
      explanation: `## Microsurgical Reversal

**Vasovasostomy Technique:**
- Operating microscope
- 9-0 or 10-0 nylon sutures
- Two-layer anastomosis
- Mucosal approximation critical

**Decision for Procedure:**
- Intraoperative vasal fluid analysis
- Copious sperm: VV
- Sperm heads only: VE likely needed
- No sperm: Definitely VE

**Vasoepididymostomy:**
- End-to-side technique
- Intussusception method
- Single tubule identification
- 60-85% patency

## Fertility Considerations

**Sperm Banking:**
- Offer before vasectomy
- Allows future options
- Low cost

**At Time of Reversal:**
- Simultaneous sperm retrieval
- Cryopreserve for IVF backup

**IVF with Sperm Retrieval:**
- Alternative to reversal
- Success depends on female factors
- Cost comparison important

## Novel Approaches

**RISUG/Vasalgel:**
- Injectable polymer
- Blocks sperm
- Potentially reversible
- Clinical trials ongoing

**Vas Clips (Investigational):**
- Removable clips
- Restore fertility by removal
- Not yet proven safe/effective

## Global Perspectives

**Family Planning:**
- Vasectomy underutilized globally
- Cultural barriers
- Access issues

**Training Programs:**
- NSV training initiatives
- WHO promotion
- Outreach programs

## Quality Assurance

**PVSA Tracking:**
- Automated reminders
- Follow-up systems
- Low compliance rates

**Outcome Tracking:**
- Failure rates
- Complication rates
- Patient satisfaction

## Shared Decision Making

**Decision Aids:**
- Written materials
- Video education
- Balanced information

**Counseling Elements:**
- Life circumstances may change
- Reversal not guaranteed
- Comparison with female sterilization
- Long-acting alternatives`,
      keyTerms: [
        { term: 'RISUG', definition: 'Reversible inhibition of sperm under guidance - injectable male contraceptive in development' },
        { term: 'intussusception vasoepididymostomy', definition: 'Technique pulling epididymal tubule into vasal lumen' },
        { term: 'decision aid', definition: 'Tool to help patients make informed choices' },
      ],
      clinicalNotes: 'RISUG/Vasalgel represents a potential paradigm shift in male contraception. Clinical trials are ongoing; not yet available for clinical use.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-vasectomy',
      type: 'article',
      title: 'Vasectomy',
      source: 'AUA Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'structure-male-reproductive-anatomy', targetType: 'structure', relationship: 'related', label: 'Male Anatomy' },
  ],
  tags: {
    systems: ['male reproductive'],
    topics: ['procedures', 'contraception'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vasectomy;
