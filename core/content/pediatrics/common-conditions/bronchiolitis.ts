/**
 * Bronchiolitis
 *
 * Educational content on bronchiolitis covering RSV virology, AAP management
 * guidelines, supportive care evidence, nirsevimab and maternal RSV vaccine,
 * phenotypes, and long-term asthma risk.
 */

import { EducationalContent } from '../../types';

export const BRONCHIOLITIS: EducationalContent = {
  id: 'pediatrics-bronchiolitis',
  type: 'condition',
  name: 'Bronchiolitis',
  nameEs: 'Bronquiolitis',
  alternateNames: ['RSV bronchiolitis', 'Infant wheezing', 'Viral lower respiratory infection'],

  levels: {
    1: {
      level: 1,
      summary:
        'Bronchiolitis is a common chest infection in babies caused by a virus. It starts like a cold but can make breathing difficult, especially in infants under 6 months.',
      explanation: `Bronchiolitis is a lung infection that mostly affects babies and young children, especially during the winter months. The most common cause is a virus called RSV.

**How It Starts**
- Begins like a regular cold (runny nose, mild cough, low fever)
- After 2-3 days, breathing becomes harder
- You may notice wheezing (a whistling sound when breathing out)
- Fast breathing and difficulty feeding are common

**Signs to Watch For**
- Breathing faster than normal
- Ribs or belly muscles showing with each breath
- Flaring of the nostrils
- Grunting sounds
- Pauses in breathing (apnea) in very young babies
- Trouble feeding or drinking less than half of normal

**Treatment**
- Most babies get better at home with supportive care
- Use a bulb syringe or saline drops to clear the nose
- Offer small, frequent feeds to stay hydrated
- Keep the baby upright during feeds
- There is no medicine that speeds recovery (no antibiotics, no cough medicine)
- Some babies need to go to the hospital for oxygen or IV fluids

**When to Go to the Hospital**
- Fast, labored breathing that is not improving
- Baby not drinking or very few wet diapers
- Blue or gray color around lips or fingertips
- Pauses in breathing
- Baby seems very tired or hard to wake up

**Prevention**
- Wash hands frequently
- Avoid close contact with sick people
- Ask your doctor about nirsevimab (a medicine given to protect babies from RSV)
- Keep babies away from cigarette smoke`,
      keyTerms: [
        { term: 'bronchiolitis', definition: 'A lung infection in babies caused by a virus that makes the tiny airways swell and fill with mucus' },
        { term: 'RSV', definition: 'Respiratory Syncytial Virus; the most common cause of bronchiolitis in babies' },
        { term: 'wheezing', definition: 'A whistling or squeaky sound when breathing, caused by narrow airways' },
      ],
      analogies: [
        'Bronchiolitis is like a traffic jam in tiny roads. The small airways in a baby\'s lungs get clogged with mucus, making it hard for air to flow.',
        'RSV in a baby\'s lungs is like mud in a garden hose. The tiny tubes get blocked and air cannot flow through easily.',
      ],
      patientCounselingPoints: [
        'Most babies recover at home in 1-2 weeks. The worst days are usually days 3-5.',
        'There is no medicine that cures bronchiolitis. Focus on keeping the nose clear and your baby hydrated.',
        'Watch breathing closely. If it gets faster or harder, or your baby stops eating, seek medical care.',
        'Ask your doctor about nirsevimab, a shot that can help protect your baby from RSV.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Bronchiolitis is primarily caused by RSV, affects infants most severely, and is managed with supportive care per AAP guidelines. Bronchodilators and steroids are not recommended.',
      explanation: `**Epidemiology**
- Peak age: 2-6 months (most hospitalizations <12 months)
- RSV causes 50-80% of cases
- Other viruses: rhinovirus, metapneumovirus, adenovirus, parainfluenza
- Season: November-March (Northern hemisphere)
- Leading cause of infant hospitalization in the US

**Clinical Course**
| Day | Typical Progression |
|-----|-------------------|
| 1-2 | URI symptoms (rhinorrhea, cough, low-grade fever) |
| 3-5 | Peak severity: wheezing, tachypnea, increased work of breathing |
| 5-7 | Gradual improvement |
| 7-14 | Resolution (cough may persist 2-3 weeks) |

**AAP Management Guidelines (2014, updated)**
| Intervention | Recommendation | Evidence |
|-------------|---------------|---------|
| Nasal suctioning | Recommended | Improves feeding and comfort |
| Supplemental O2 | If SpO2 <90% | BIDS trial supports lower threshold |
| IV/NG fluids | If unable to feed | Prevents dehydration |
| Albuterol | NOT recommended | Multiple RCTs negative |
| Systemic corticosteroids | NOT recommended | No benefit in bronchiolitis |
| Antibiotics | NOT recommended | Unless bacterial superinfection |
| Chest physiotherapy | NOT recommended | No benefit |
| Hypertonic saline (3%) | May benefit inpatients | Reduces LOS by ~1 day; not for ED |

**Admission Criteria**
- SpO2 persistently <90-92%
- Significant respiratory distress (retractions, nasal flaring, grunting)
- Inadequate oral intake (<50% of normal feeds)
- Apnea (especially concerning in young infants and ex-preterm)
- Age <12 weeks
- Significant prematurity, BPD, or hemodynamically significant CHD

**RSV Prevention**
| Agent | Mechanism | Population |
|-------|-----------|-----------|
| Nirsevimab (Beyfortus) | Long-acting anti-RSV monoclonal antibody (single dose) | All infants entering first RSV season |
| Palivizumab (Synagis) | Monthly anti-RSV mAb (5 monthly doses) | High-risk preterm (<29 wk), BPD, CHD |
| RSVpreF maternal vaccine (Abrysvo) | Maternal vaccination for passive transplacental Ab | Pregnant persons 32-36 weeks GA |

**Risk Factors for Severe Disease**
- Prematurity (especially <32 weeks)
- Age <12 weeks
- Bronchopulmonary dysplasia (BPD)
- Hemodynamically significant congenital heart disease
- Immunodeficiency
- Neuromuscular disease
- Down syndrome`,
      keyTerms: [
        { term: 'RSV', definition: 'Respiratory Syncytial Virus; single-stranded RNA paramyxovirus causing 50-80% of bronchiolitis; leading cause of infant hospitalization' },
        { term: 'nirsevimab', definition: 'Long-acting monoclonal antibody against RSV (Beyfortus); single IM dose provides passive immunity for all infants entering their first RSV season' },
        { term: 'palivizumab', definition: 'Monthly anti-RSV monoclonal antibody (Synagis) for high-risk preterm infants, BPD, and hemodynamically significant CHD; 5 doses per RSV season' },
        { term: 'high-flow nasal cannula', definition: 'Humidified heated oxygen delivery providing mild CPAP effect; increasingly used for moderate-severe bronchiolitis before intubation' },
        { term: 'apnea', definition: 'Pauses in breathing lasting >20 seconds or shorter pauses with bradycardia/desaturation; most concerning in young infants and ex-preterm babies' },
      ],
      analogies: [
        'Bronchiolitis treatment is like helping someone through a bad cold: keep them comfortable, hydrated, and breathing until the virus runs its course.',
        'Nirsevimab is like a bulletproof vest for babies against RSV. One shot provides protection for the whole RSV season.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Bronchiolitis pathophysiology involves viral-mediated small airway obstruction. Evidence supports minimal intervention. HFNC is increasingly used for respiratory support.',
      explanation: `**Pathophysiology**
- RSV infects ciliated epithelial cells of small airways (bronchioles)
- Epithelial necrosis and sloughing
- Inflammatory cell infiltration (neutrophils, lymphocytes, macrophages)
- Submucosal edema and peribronchiolar inflammation
- Mucus hypersecretion
- Small airway obstruction: air trapping, atelectasis, V/Q mismatch
- Disproportionate effect in infants due to smaller airway caliber

**Evidence Against Common Interventions**
| Intervention | Key Trial/Evidence | Result |
|-------------|-------------------|--------|
| Albuterol | Cochrane 2014 (30 RCTs) | No benefit on admission, SpO2, or duration |
| Epinephrine | Skjerven 2013 (NEJM) | No benefit over saline |
| Systemic steroids | Corneli 2007 (NEJM) | No benefit; large well-designed trial |
| Dex + epinephrine combination | Plint 2009 (NEJM) | Possible synergy; NOT replicated; not standard |
| Hypertonic saline (3%) | Zhang 2017 (Cochrane) | Reduces inpatient LOS by 0.5-1 day; ED benefit unclear |
| Chest physiotherapy | Roqué i Figuls 2016 (Cochrane) | No benefit |
| Antibiotics | No benefit unless documented bacterial co-infection |

**High-Flow Nasal Cannula (HFNC)**
| Parameter | Detail |
|-----------|--------|
| Flow rate | 2 L/kg/min (max usually 20-25 L/min) |
| Mechanism | Humidified heated O2; washout of dead space; mild CPAP effect (2-5 cm H2O) |
| Evidence | PARIS trial (Franklin, NEJM 2018): Early HFNC did NOT reduce time to weaning vs standard O2, but reduced escalation to ICU |
| Use | Increasingly first-line for moderate bronchiolitis; may reduce intubation |
| Weaning | When FiO2 <30% and clinically improving; reduce flow before FiO2 |

**SpO2 Threshold Debate**
| Threshold | Evidence | Implication |
|-----------|---------|------------|
| <90% (AAP 2014) | BIDS trial: safe; reduces LOS | Standard recommendation |
| <92% | Common practice before BIDS | More conservative; may prolong hospitalization |
| Intermittent desaturations | Common during sleep | Do not require intervention if self-resolving |
| Continuous monitoring vs spot checks | POSA trial: Intermittent monitoring reduces LOS | Continuous monitoring leads to overtreatment |

**Viral Coinfection and Testing**
- Multiplex PCR detects coinfections in 20-30% of cases
- Clinical significance of coinfection debated
- Routine viral testing NOT recommended (does not change management in most cases)
- Testing may be useful for: Cohorting inpatients, epidemiologic surveillance, immunocompromised patients

**Feeding Support**
| Severity | Strategy |
|----------|---------|
| Mild | Frequent small oral feeds; upright positioning |
| Moderate | NG tube feeding if oral intake <50% normal |
| Severe | IV fluids (2/3 maintenance; hyponatremia risk with SIADH) |
| HFNC | Oral feeds can continue on HFNC <2 L/kg/min in many protocols |`,
      keyTerms: [
        { term: 'V/Q mismatch', definition: 'Ventilation-perfusion mismatch; areas of lung with obstructed airways (low ventilation) but preserved blood flow, causing hypoxemia in bronchiolitis' },
        { term: 'PARIS trial', definition: 'RCT (Franklin, NEJM 2018) of early HFNC in bronchiolitis; did not reduce time to weaning but reduced escalation of care' },
        { term: 'BIDS trial', definition: 'Bronchiolitis in Infants Discharged Study demonstrating safety of SpO2 target >=90% vs >=94%; lower threshold reduced length of stay' },
        { term: 'dead space washout', definition: 'HFNC mechanism: high gas flow flushes CO2 from nasopharyngeal dead space, improving ventilatory efficiency' },
        { term: 'SIADH', definition: 'Syndrome of Inappropriate ADH; can occur in bronchiolitis causing hyponatremia; use isotonic maintenance fluids or 2/3 maintenance to mitigate' },
      ],
      clinicalNotes:
        'The evidence is clear: bronchodilators and steroids do not work in bronchiolitis. Avoid these interventions. HFNC is increasingly used as first-line respiratory support. Intermittent SpO2 monitoring may reduce LOS by avoiding treatment of transient, clinically insignificant desaturations. RSV testing is not needed to guide management in most cases.',
    },
    4: {
      level: 4,
      summary:
        'Advanced bronchiolitis management encompasses RSV immunology, bronchiolitis phenotypes predicting long-term outcomes, prevention advances, and precision medicine approaches.',
      explanation: `**RSV Immunology**
- RSV NS1 and NS2 proteins inhibit type I and III interferon signaling
- Impaired Th1 response promotes eosinophilic/Th2 airway inflammation
- Neonatal immune immaturity: reduced TLR signaling, impaired NK cell function
- IgA and IgG (transplacental) provide partial protection; wanes by 2-4 months
- Reinfection occurs throughout life; immunity is incomplete

**Bronchiolitis Phenotypes and Asthma Risk**
| Phenotype | Virus | Features | Long-term Asthma Risk |
|-----------|-------|----------|----------------------|
| RSV-predominant | RSV | Classic; younger infant; non-atopic | Moderate (OR 2-3 at age 5-7) |
| Rhinovirus (RV)-predominant | RV (especially RV-C) | Older infant; atopic features; IgE elevation | High (OR 4-10) |
| Mixed viral | Multiple | Variable | Variable |
| Severe-early | Any | Hospitalized <3 months | Highest risk for recurrent wheezing |

*Mechanisms linking bronchiolitis to asthma:*
- Airway epithelial remodeling during acute infection
- Altered immune programming (Th2 skewing)
- Epithelial barrier dysfunction persisting post-infection
- Genetic susceptibility (ORMDL3/GSDMB locus at 17q21 for RV-associated asthma)

**Prevention Revolution**
| Agent | Mechanism | Efficacy | Coverage |
|-------|-----------|---------|----------|
| Nirsevimab | Anti-RSV F protein mAb (extended half-life) | 75% reduction in RSV LRTI | All infants <8 months entering RSV season; 8-19 months if high-risk |
| Palivizumab | Anti-RSV F protein mAb (monthly) | 45-55% reduction in RSV hospitalization | High-risk only (cost: ~$5,000-7,000/season) |
| RSVpreF (Abrysvo) maternal | Prefusion F protein vaccine | 69% reduction in severe RSV LRTI (first 6 months) | Pregnant persons 32-36 weeks GA |

*Implementation Considerations:*
- Nirsevimab vs maternal vaccine: Complementary, not competitive
- Nirsevimab: Direct protection; does not depend on maternal vaccination
- Maternal vaccine: Protects from birth; but less effective if maternal antibodies wane before RSV season
- Cost-effectiveness analyses ongoing; nirsevimab cost ~$495/dose

**Nasopharyngeal Microbiome and Severity**
| Microbiome Profile | Association |
|-------------------|-------------|
| Moraxella-dominant | Higher hospitalization risk |
| Haemophilus-dominant | Increased LOS |
| Streptococcus-dominant | Worse disease severity |
| Corynebacterium/Dolosigranulum-dominant | Protective; milder disease |

**Emerging Therapeutics**
| Agent | Mechanism | Status |
|-------|-----------|--------|
| Presatovir | RSV fusion inhibitor | Phase 2 |
| Ziresovir (AK0529) | RSV fusion inhibitor | Phase 3 (China) |
| EDP-938 | RSV N protein replication inhibitor | Phase 2 |
| Rilematovir | RSV N-protein inhibitor | Phase 2 |
| Ensifentrine | Dual PDE3/4 inhibitor | Research for post-bronchiolitis wheezing |`,
      keyTerms: [
        { term: 'NS1/NS2', definition: 'RSV non-structural proteins that inhibit type I and III interferon signaling, enabling viral immune evasion and promoting Th2-skewed inflammation' },
        { term: 'ORMDL3', definition: 'Gene at 17q21 locus associated with childhood asthma susceptibility; particularly relevant to rhinovirus-triggered wheezing phenotype' },
        { term: 'prefusion F protein', definition: 'Metastable conformation of RSV fusion protein before cell entry; primary target for nirsevimab and maternal RSV vaccine; elicits most potent neutralizing antibodies' },
        { term: 'nasopharyngeal microbiome', definition: 'Microbial community composition of the nasopharynx predicting bronchiolitis severity; Moraxella-dominant profiles associated with worse outcomes' },
        { term: 'RV-C', definition: 'Rhinovirus species C; strongest viral predictor of childhood asthma when causing bronchiolitis in infancy; enters cells via CDHR3 receptor' },
      ],
      clinicalNotes:
        'Rhinovirus bronchiolitis in an atopic infant is the strongest early predictor of childhood asthma. The RSV prevention landscape has been transformed with nirsevimab and maternal vaccination. Nasopharyngeal microbiome profiling may eventually guide risk stratification. Antiviral candidates for RSV are advancing but none yet approved for infants.',
    },
    5: {
      level: 5,
      summary:
        'Expert bronchiolitis management integrates RSV molecular virology, immune-metabolic profiling, precision prevention, global burden, and translational research on the bronchiolitis-asthma link.',
      explanation: `**RSV Molecular Virology**
| Component | Function | Therapeutic Target |
|-----------|---------|-------------------|
| F protein | Membrane fusion; prefusion and postfusion conformations | Nirsevimab, palivizumab, vaccines |
| G protein | Attachment to cell surface; CX3C fractalkine motif | CX3CR1 interaction; vaccine target |
| NS1/NS2 | IFN antagonism | Potential antiviral target |
| N protein | Nucleocapsid; replication complex | EDP-938, rilematovir |
| L protein | RNA-dependent RNA polymerase | Potential antiviral target |
| SH protein | Viroporin; ion channel | Under investigation |

**Immune-Metabolic Profiling**
| Profile | Characteristics | Prediction |
|---------|-----------------|-----------|
| Neutrophilic (IL-8 high) | Neutrophil influx, oxidative stress | Severe acute disease |
| Type 2 (IL-4, IL-13, IgE) | Eosinophil activation | Higher asthma risk |
| Interferon-low | Impaired IFN-lambda response | Prolonged shedding, severe disease |
| Regulatory (IL-10 high) | Immune modulation | Milder disease |

*Metabolomic Signatures:*
- Sphingolipid pathway alterations predict severity
- Amino acid profiles (arginine depletion) correlate with worse outcomes
- Lipid mediator imbalance (elevated leukotrienes, reduced lipoxins) in severe disease

**Global RSV Burden**
| Metric | Value |
|--------|-------|
| Annual RSV LRTI episodes (children <5) | ~33 million globally |
| Hospitalizations | ~3.6 million |
| Deaths | ~100,000-200,000 (>95% in LMICs) |
| US hospitalizations (infants) | ~58,000-80,000/year |
| Cost per RSV hospitalization (US) | ~$8,000-12,000 |

**Precision Prevention Framework**
| Risk Level | Strategy |
|-----------|---------|
| All infants | Nirsevimab before/during first RSV season |
| Born during RSV season | Nirsevimab at birth or maternal vaccine |
| High-risk (ex-preterm, BPD, CHD) | Nirsevimab preferred; palivizumab if unavailable |
| Immunocompromised | Nirsevimab + enhanced supportive care protocols |
| LMICs | Maternal vaccine (cold chain feasible); nirsevimab cost prohibitive currently |

**Bronchiolitis-Asthma Translational Research**
| Finding | Implication |
|---------|------------|
| RSV bronchiolitis alters airway epithelial methylation | Epigenetic reprogramming may drive long-term remodeling |
| IL-33 release from damaged epithelium | Alarmin-driven Th2 response connecting acute infection to chronic disease |
| TSLP upregulation post-RSV | Epithelial-immune axis activation |
| MicroRNA profiles differ by phenotype | Potential biomarkers for asthma risk prediction |
| Prevention studies (nirsevimab, palivizumab) | If RSV prevention reduces later asthma, supports causal link |

**Future Directions**
| Research Area | Status |
|--------------|--------|
| RSV live-attenuated intranasal vaccine (infant) | Phase 1-2 |
| Broadly neutralizing anti-RSV mAbs | Next-generation candidates |
| Host-directed therapy (IFN-lambda) | Preclinical |
| Point-of-care RSV rapid testing | Available; implementation variable |
| AI-based severity prediction | Using vital signs + demographics; under development |
| RSV prevention and asthma reduction | Long-term follow-up of nirsevimab cohorts planned |`,
      keyTerms: [
        { term: 'IL-33', definition: 'Alarmin cytokine released from damaged airway epithelium; activates innate lymphoid cells (ILC2s) and drives Th2 inflammation; key link between viral bronchiolitis and asthma development' },
        { term: 'TSLP', definition: 'Thymic Stromal Lymphopoietin; epithelial-derived cytokine upregulated after RSV infection promoting Th2 immunity; therapeutic target (tezepelumab) in asthma' },
        { term: 'CX3C motif', definition: 'Fractalkine receptor-binding domain on RSV G protein; mediates viral attachment via CX3CR1 on airway epithelial cells; potential vaccine target' },
        { term: 'lipoxin', definition: 'Anti-inflammatory lipid mediator; reduced lipoxin production during severe bronchiolitis contributes to excessive inflammation; potential therapeutic target' },
      ],
      clinicalNotes: `**Expert Integration:**
- The IL-33/TSLP epithelial alarmin pathway is the most promising mechanistic link between RSV bronchiolitis and subsequent asthma.
- Long-term follow-up of nirsevimab cohorts will answer whether RSV prevention reduces later asthma risk (causal vs. association).
- Metabolomic profiling at presentation may predict severity and guide resource allocation.
- Global RSV mortality is concentrated in LMICs where access to nirsevimab is limited; maternal vaccination may be the more scalable intervention.
- AI severity prediction models incorporating vital signs, age, and viral testing may optimize triage and resource utilization.`,
    },
  },

  media: [
    { id: 'bronchiolitis-cxr', type: 'image', filename: 'bronchiolitis-chest-xray.jpg', title: 'Bronchiolitis CXR', description: 'Hyperinflation and peribronchial thickening on chest X-ray' },
    { id: 'rsv-prevention-diagram', type: 'diagram', filename: 'rsv-prevention-strategies.svg', title: 'RSV Prevention', description: 'Overview of nirsevimab, palivizumab, and maternal vaccine strategies' },
  ],

  citations: [
    { id: 'aap-bronchiolitis-2014', type: 'article', title: 'Clinical Practice Guideline: Bronchiolitis', authors: ['Ralston, S.L.', 'Lieberthal, A.S.'], source: 'Pediatrics', url: 'https://doi.org/10.1542/peds.2014-2742' },
    { id: 'paris-trial', type: 'article', title: 'A Randomized Trial of High-Flow Oxygen Therapy in Infants with Bronchiolitis', authors: ['Franklin, D.', 'Babl, F.E.'], source: 'NEJM', url: 'https://doi.org/10.1056/NEJMoa1714855' },
    { id: 'nelson-bronchiolitis', type: 'textbook', title: 'Nelson Textbook of Pediatrics', authors: ['Kliegman, R.M.'], source: 'Elsevier', chapter: 'Bronchiolitis', license: 'Proprietary' },
  ],

  crossReferences: [
    { targetId: 'pediatrics-croup', targetType: 'condition', relationship: 'sibling', label: 'Croup' },
    { targetId: 'pediatrics-immunization-schedule', targetType: 'topic', relationship: 'related', label: 'Immunization Schedule' },
  ],

  tags: {
    systems: ['respiratory', 'immune'],
    topics: ['pediatrics', 'infectious disease', 'pulmonology', 'emergency medicine'],
    keywords: ['bronchiolitis', 'RSV', 'nirsevimab', 'palivizumab', 'wheezing', 'HFNC', 'infant', 'respiratory distress', 'asthma risk'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'emergency medicine', 'family medicine'] },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
