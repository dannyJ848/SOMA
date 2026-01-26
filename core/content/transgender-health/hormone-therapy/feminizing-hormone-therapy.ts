import { EducationalContent } from '../../types';

export const feminizingHormoneTherapyContent: EducationalContent = {
  id: 'topic-feminizing-hormone-therapy',
  type: 'topic',
  name: 'Feminizing Hormone Therapy',
  alternateNames: ['Estrogen Therapy', 'Feminizing HRT', 'MTF Hormone Therapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Feminizing hormones help transgender women and some non-binary people develop more feminine physical features.',
      explanation: `Feminizing hormone therapy uses medicines to help the body develop more feminine features. This is one option for transgender women and some non-binary people who want these changes.

**What Changes Happen:**
- Breast growth
- Softer skin
- Body shape becomes more curvy
- Less body hair (may not go away completely)
- Emotions may change

**What Doesn't Change:**
- Voice (stays the same without voice training)
- Bone structure
- Height

**Important Things to Know:**
- Changes take time (months to years)
- Some changes are permanent (like breast growth)
- A doctor monitors your health with blood tests
- You can stop if you decide it's not right for you`,
      keyTerms: [
        { term: 'estrogen', definition: 'A hormone that causes feminine body changes', pronunciation: 'ES-tro-jen' },
        { term: 'hormone', definition: 'Chemical messengers in your body that cause changes' },
        { term: 'feminizing', definition: 'Causing body changes toward more feminine features' },
      ],
      analogies: [
        'Hormone therapy is like changing the instructions your body follows to develop.',
      ],
      examples: [
        'A transgender woman might notice softer skin within a few months, and breast growth starting around 3-6 months.',
      ],
    },
    2: {
      level: 2,
      summary: 'Feminizing hormone therapy uses estrogen and anti-androgens to induce physical changes including breast development, fat redistribution, and reduced body hair.',
      explanation: `Feminizing hormone therapy is a medical treatment that produces feminine secondary sex characteristics.

**Medications Used:**

*Estrogen:*
- Estradiol is the primary medication
- Forms: Pills, patches, injections
- Works by directly causing feminine changes

*Anti-Androgens:*
- Block or reduce testosterone effects
- Common options: Spironolactone, bicalutamide
- Help estrogen work more effectively

**Physical Changes:**

*Early Changes (1-6 months):*
- Breast budding begins
- Skin softens
- Decreased oiliness/acne
- Body odor changes
- Decreased libido often

*Later Changes (6-24+ months):*
- Continued breast growth
- Fat redistribution (hips, thighs, buttocks)
- Decreased muscle mass
- Reduced body hair (slower, finer)
- Testicular atrophy

**What Doesn't Change:**
- Voice pitch (voice training can help)
- Skeletal structure
- Facial hair (requires electrolysis/laser)
- Height

**Health Monitoring:**
- Regular blood tests (hormone levels, liver, metabolic)
- Blood pressure checks
- Discussion of any side effects`,
      keyTerms: [
        { term: 'estradiol', definition: 'The main form of estrogen used in feminizing therapy', pronunciation: 'es-tra-DY-ol' },
        { term: 'anti-androgen', definition: 'Medication that blocks testosterone effects' },
        { term: 'spironolactone', definition: 'Common anti-androgen medication, also a diuretic', pronunciation: 'spy-ro-no-LAK-tone' },
        { term: 'secondary sex characteristics', definition: 'Physical features that develop during puberty' },
      ],
    },
    3: {
      level: 3,
      summary: 'Feminizing hormone therapy involves estradiol and anti-androgens to suppress testosterone and induce estrogenic effects, with treatment protocols guided by Endocrine Society and WPATH guidelines.',
      explanation: `Feminizing hormone therapy follows established clinical guidelines with individualized dosing based on patient goals and response.

**Hormone Regimens:**

*Estrogen:*
- Estradiol (17-beta estradiol) preferred
- Routes:
  - Oral: 2-8 mg daily (higher VTE risk)
  - Transdermal: 0.1-0.4 mg patches twice weekly
  - Injectable: Valerate or cypionate 5-20 mg every 2 weeks or weekly
- Target serum estradiol: 100-200 pg/mL

*Anti-Androgens:*
- Spironolactone: 100-300 mg daily (potassium monitoring)
- Bicalutamide: 50 mg daily (liver monitoring)
- GnRH agonists: Complete suppression (expensive)
- Cyproterone acetate: Used outside US (liver risk)
- Target testosterone: <50 ng/dL

**Timeline of Changes:**

| Change | Onset | Maximum Effect |
|--------|-------|----------------|
| Breast growth | 3-6 months | 2-3 years |
| Skin softening | 3-6 months | Unknown |
| Fat redistribution | 3-6 months | 2-5 years |
| Decreased muscle | 3-6 months | 1-2 years |
| Body hair decrease | 6-12 months | >3 years |
| Testicular atrophy | 3-6 months | 2-3 years |
| Decreased libido | 1-3 months | 1-2 years |

**Monitoring Protocol:**
- Baseline: CBC, CMP, lipids, prolactin, estradiol, testosterone
- Follow-up labs: 3 months, 6 months, then annually
- More frequent if abnormalities

**Risks:**
- VTE (higher with oral, age, smoking)
- Elevated prolactin
- Cardiovascular considerations
- Infertility (often reversible early, less so over time)`,
      keyTerms: [
        { term: 'VTE', definition: 'Venous thromboembolism; blood clots in veins', pronunciation: 'V-T-E' },
        { term: 'GnRH agonist', definition: 'Medication that suppresses sex hormone production from pituitary', pronunciation: 'G-N-R-H' },
        { term: 'prolactin', definition: 'Pituitary hormone; may elevate with estrogen, rarely forms tumors' },
        { term: 'cyproterone acetate', definition: 'Anti-androgen used in many countries, not available in US' },
      ],
      clinicalNotes: 'Prefer transdermal or injectable estrogen for patients >40 or with VTE risk factors. Spironolactone may cause hyperkalemia; monitor potassium.',
    },
    4: {
      level: 4,
      summary: 'Feminizing hormone therapy requires individualized regimen selection, risk stratification for VTE and other complications, monitoring protocols per Endocrine Society guidelines, and management of treatment-related considerations.',
      explanation: `Feminizing hormone therapy management requires attention to medication selection, dosing, monitoring, and risk mitigation.

**Pharmacology:**

*Estradiol:*
- Mechanism: Binds estrogen receptors, induces feminine secondary sex characteristics
- Oral: Hepatic first-pass increases VTE risk, SHBG production
- Transdermal: Avoids first-pass, preferred for higher-risk patients
- Injectable: Reliable absorption, peak/trough considerations
- Sublingual: Avoids some first-pass, variable absorption

*Anti-Androgens:*
- Spironolactone: Androgen receptor antagonist, inhibits synthesis
  - Also: Potassium-sparing diuretic effects
  - Monitoring: Potassium, renal function
- Bicalutamide: Pure androgen receptor antagonist
  - Does not lower testosterone levels
  - Rare hepatotoxicity (monitor LFTs)
- Finasteride/dutasteride: 5-alpha reductase inhibitors
  - Block DHT formation
  - Limited role as monotherapy

**Risk Management:**

*VTE Risk:*
- Base rate ~2x increased
- Risk factors: Age >40, BMI >30, smoking, immobility, thrombophilia, surgery
- Mitigation: Non-oral estrogen, lower doses, smoking cessation
- Perioperative: Consider holding 2-4 weeks before major surgery

*Cardiovascular:*
- Estrogen effects on lipids (may improve HDL)
- Blood pressure monitoring (spironolactone may lower)
- Long-term CV risk data evolving

*Prolactin:*
- Mild elevation common
- Symptomatic prolactinoma rare
- Monitor annually; MRI if >100 ng/mL or symptoms

*Bone Health:*
- Adequate estrogen is bone-protective
- Concern if poor compliance or low levels
- DEXA if risk factors

**Special Populations:**
- Older adults: Lower starting doses, non-oral routes
- HIV+: Drug interactions possible
- Post-orchiectomy: Anti-androgen usually discontinued; lower estrogen may suffice`,
      keyTerms: [
        { term: 'SHBG', definition: 'Sex hormone-binding globulin; increases with oral estrogen' },
        { term: 'DHT', definition: 'Dihydrotestosterone; potent androgen, involved in hair loss' },
        { term: 'thrombophilia', definition: 'Inherited tendency toward blood clots' },
        { term: 'DEXA', definition: 'Dual-energy X-ray absorptiometry; bone density test' },
      ],
      clinicalNotes: 'Individualize based on risk factors. Transdermal preferred for older patients or those with VTE risks. Post-orchiectomy, reassess medication needs.',
    },
    5: {
      level: 5,
      summary: 'Feminizing hormone therapy requires comprehensive understanding of pharmacokinetics, risk-benefit optimization, monitoring per Endocrine Society guidelines, and management of specific clinical scenarios including perioperative care and special populations.',
      explanation: `Expert-level management of feminizing hormone therapy integrates pharmacology, risk stratification, and evidence-based protocols.

**Advanced Pharmacology:**

*Estradiol Formulations:*
- Oral estradiol:
  - Bioavailability ~5%
  - First-pass produces estrone (E1) > estradiol (E2)
  - E1:E2 ratio elevated (clinical significance debated)
  - Increases hepatic proteins: SHBG, clotting factors (VTE risk)

- Transdermal:
  - Bypasses hepatic first-pass
  - More physiologic E2:E1 ratio
  - Lower VTE risk (preferred for high-risk patients)
  - Patch vs. gel: Patch more reliable, gel may have adherence advantages

- Injectable:
  - IM or SubQ dosing
  - Estradiol valerate or cypionate
  - Peak/trough varies by frequency (weekly vs. biweekly)
  - Some prefer for reliable feminization

*Anti-Androgen Selection:*
- Spironolactone:
  - Also MR antagonist, GC effect
  - Monitor K+ (2-3x/year, more if renal impairment)
  - May cause breast tenderness, polyuria
  - Dose: 50-200 mg BID

- Bicalutamide:
  - Pure AR antagonist, no hormonal suppression
  - Testosterone and estradiol may rise
  - Hepatotoxicity rare but serious
  - Consider as second-line or if spiro intolerant

- GnRH agonists (leuprolide, goserelin):
  - Complete suppression of gonadal function
  - Initial flare, then suppression
  - Expensive, may require prior authorization

**Evidence-Based Monitoring:**

*Endocrine Society (2017):*
- Labs every 3 months for first year, then annually
- Serum estradiol, testosterone, metabolic panel
- Prolactin at baseline and annually

*Goals:*
- Estradiol: 100-200 pg/mL (some target higher)
- Testosterone: <50 ng/dL
- Prolactin: <100 ng/mL (relative)

**Clinical Scenarios:**

*Poor Response:*
- Verify compliance and absorption
- Check levels (trough for injectables)
- Consider route change
- Optimize anti-androgen dosing
- Rule out malabsorption

*Perioperative Management:*
- VTE risk elevated with estrogen
- Guidelines vary: Hold 2-4 weeks before major surgery
- Consider VTE prophylaxis
- Restart once mobile post-op

*Post-Orchiectomy:*
- Testosterone source removed
- Discontinue anti-androgen
- Estrogen dose may be reduced
- Monitor for adequate levels

*Fertility:*
- Discuss preservation before starting hormones
- Sperm quality decreases over time
- May be reversible if stopped early
- Freezing before therapy is most reliable

**Long-Term Considerations:**
- Cardiovascular risk: Ongoing research
- Breast cancer: Monitor clinically, screening per natal female guidelines often appropriate
- Bone health: Adequate estrogen protective
- Prolactinoma: Rare but monitor`,
      keyTerms: [
        { term: 'first-pass metabolism', definition: 'Drug metabolism in liver before reaching systemic circulation' },
        { term: 'estrone', definition: 'Weaker estrogen (E1) produced from oral estradiol first-pass metabolism' },
        { term: 'MR antagonist', definition: 'Mineralocorticoid receptor antagonist effect of spironolactone' },
        { term: 'flare reaction', definition: 'Initial increase in hormones when starting GnRH agonist before suppression' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- Transdermal/injectable preferred for VTE risk
- Monitor potassium on spironolactone
- Check trough levels for injectable estradiol
- Discuss fertility before initiation
- Perioperative estrogen hold: 2-4 weeks for major surgery
- Post-orchiectomy: Stop anti-androgens, may lower estrogen
- Breast development highly variable; set realistic expectations
- Voice and facial hair not affected; refer for voice therapy, electrolysis`,
    },
  },

  media: [],
  citations: [
    {
      id: 'hembree-2017',
      type: 'article',
      title: 'Endocrine Treatment of Gender-Dysphoric/Gender-Incongruent Persons',
      authors: ['Hembree WC', 'et al.'],
      source: 'Journal of Clinical Endocrinology & Metabolism',
      url: 'https://doi.org/10.1210/jc.2017-01658',
      license: 'Copyright Endocrine Society',
    },
  ],
  crossReferences: [
    { targetId: 'topic-monitoring-and-safety', targetType: 'topic', relationship: 'related', label: 'Monitoring and Safety' },
    { targetId: 'topic-masculinizing-hormone-therapy', targetType: 'topic', relationship: 'related', label: 'Masculinizing Hormone Therapy' },
  ],
  tags: {
    systems: ['endocrine', 'reproductive'],
    topics: ['hormone therapy', 'transgender health', 'feminizing'],
    keywords: ['estrogen', 'HRT', 'feminizing', 'anti-androgen'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default feminizingHormoneTherapyContent;
