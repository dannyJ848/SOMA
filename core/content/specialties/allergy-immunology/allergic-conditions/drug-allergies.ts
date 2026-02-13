import type { EducationalContent } from '../../../types';

export const drugAllergies: EducationalContent = {
  id: 'drug-allergies-education',
  type: 'condition',
  name: 'Drug Allergies',
  alternateNames: ['Adverse Drug Reactions', 'Drug Hypersensitivity', 'Medication Allergy'],
  levels: {
    1: {
      level: 1,
      summary: 'Drug allergies are reactions of the immune system to medications, causing symptoms ranging from mild rash to severe life-threatening reactions.',
      explanation: `A drug allergy happens when your immune system mistakenly identifies a medication as harmful and reacts against it. This is different from side effects, which are known reactions that can happen to anyone taking the drug.

Common symptoms of drug allergies include skin rash, hives, itching, swelling, and in severe cases, difficulty breathing or anaphylaxis. Some reactions happen right away after taking a medication, while others may appear days or even weeks later.

The most common drugs that cause allergic reactions include antibiotics like penicillin, sulfa drugs, nonsteroidal anti-inflammatory drugs (NSAIDs) like ibuprofen, and certain seizure medications.

If you have a drug allergy, it is important to tell all your healthcare providers and wear a medical alert bracelet. Many drug allergies can be managed by simply avoiding the medication and using alternatives. In some cases, desensitization procedures can allow someone to temporarily tolerate a necessary medication.`,
      keyTerms: [
        { term: 'drug allergy', definition: 'An immune system reaction to a medication' },
        { term: 'penicillin', definition: 'A common antibiotic that causes allergic reactions in some people' },
        { term: 'anaphylaxis', definition: 'A severe, life-threatening allergic reaction' },
        { term: 'side effect', definition: 'An expected reaction to medication that is not related to the immune system' }
      ],
      analogies: [
        'A drug allergy is like your body sounding an alarm for a false threat - the immune system attacks a harmless medication',
        'Desensitization is like slowly getting used to cold water by entering gradually instead of jumping in'
      ],
      examples: [
        'A person who develops a rash after taking amoxicillin for a sinus infection',
        'Someone who has trouble breathing after taking aspirin'
      ]
    },
    2: {
      level: 2,
      summary: 'Drug allergies are immune-mediated adverse drug reactions distinct from predictable side effects or toxicity, with beta-lactam antibiotics being the most common cause of IgE-mediated drug allergy.',
      explanation: `Adverse drug reactions (ADRs) affect millions of patients annually. Only about 10% of reported drug reactions are true immunologic allergies, but these have significant implications for future drug selection.

Classification of adverse drug reactions:

Type A (augmented/predictable):
- Dose-dependent
- Related to pharmacologic action
- Examples: Bleeding on warfarin, hypoglycemia on insulin
- Not immune-mediated

Type B (bizarre/non-predictable):
- Not dose-dependent
- Unrelated to pharmacologic action
- Includes immune-mediated reactions (true drug allergy)
- Also includes non-immune idiosyncratic reactions

Immunologic classification (Gell and Coombs):

Type I - Immediate/IgE-mediated:
- Onset: Minutes to hours
- Mechanism: Drug-specific IgE on mast cells/basophils
- Manifestations: Urticaria, angioedema, anaphylaxis, bronchospasm
- Examples: Penicillin anaphylaxis, insulin allergy

Type II - Cytotoxic:
- Mechanism: IgG/IgM against drug-cell complex
- Manifestations: Hemolytic anemia, thrombocytopenia, neutropenia
- Examples: Penicillin-induced hemolytic anemia, heparin-induced thrombocytopenia

Type III - Immune complex:
- Mechanism: Drug-antibody complexes deposited in tissues
- Manifestations: Serum sickness, vasculitis, drug fever
- Examples: Penicillin serum sickness, hydralazine-induced lupus

Type IV - Delayed T-cell mediated:
- Onset: Days to weeks
- Mechanism: T-cell activation
- Subtypes based on T-cell involvement:
  - IVa (Th1): Contact dermatitis
  - IVb (Th2): Maculopapular exanthem, DRESS
  - IVc (cytotoxic T-cells): Stevens-Johnson syndrome, TEN
  - IVd (T-cells recruiting neutrophils): Acute generalized pustulosis

Common causative drugs:

Beta-lactam antibiotics:
- Penicillins (penicillin G, amoxicillin, ampicillin)
- Cephalosporins
- Carbapenems
- Most common cause of drug anaphylaxis

Other antibiotics:
- Sulfonamides (TMP-SMX most common)
- Fluoroquinolones
- Vancomycin (red man syndrome - not true allergy)

Other medications:
- NSAIDs (aspirin, ibuprofen)
- Opioids (morphine, codeine - often non-immune histamine release)
- Radiocontrast media
- Local anesthetics (rarely cause true allergy)
- Antiepileptics (carbamazepine, phenytoin)
- Allopurinol
- Chemotherapy agents (platinum agents, taxanes)
- Biologic agents (monoclonal antibodies)
- Heparin

Risk factors:
- Previous drug reaction
- Female gender
- Atopic disease (increases risk of reactions, not specific allergies)
- Certain viral infections (EBV, HIV, CMV increase rash risk)
- Genetic factors (HLA associations)
- Route: Topical > IV > oral
- Intermittent/high-dose exposure vs continuous

Clinical manifestations:

Cutaneous (most common):
- Exanthem (maculopapular rash): 90% of cutaneous reactions
- Urticaria, angioedema
- Fixed drug eruption
- Photosensitivity reactions

Severe cutaneous adverse reactions (SCAR):
- Stevens-Johnson syndrome (SJS)
- Toxic epidermal necrolysis (TEN)
- Drug reaction with eosinophilia and systemic symptoms (DRESS)
- Acute generalized pustular eruption (AGEP)

Systemic:
- Anaphylaxis
- Drug fever
- Serum sickness
- Organ-specific: Hepatitis, nephritis, pneumonitis, cytopenias`,
      keyTerms: [
        { term: 'adverse drug reaction', definition: 'Any harmful or unintended response to a medication' },
        { term: 'beta-lactam', definition: 'Class of antibiotics including penicillins and cephalosporins with shared ring structure' },
        { term: 'exanthem', definition: 'Widespread rash, often maculopapular' },
        { term: 'SCAR', definition: 'Severe cutaneous adverse reactions including SJS, TEN, DRESS' },
        { term: 'DRESS syndrome', definition: 'Drug reaction with eosinophilia and systemic symptoms; severe delayed reaction' }
      ],
      analogies: [
        'Different types of drug reactions are like different alarm systems - some go off immediately, others have a delayed response',
        'Cross-reactivity between penicillins and cephalosporins is like confusing two similar-looking keys'
      ],
      examples: [
        'A patient with throat swelling and low blood pressure 15 minutes after IV penicillin administration',
        'A patient with widespread rash and fever 2 weeks after starting phenytoin - possible DRESS syndrome'
      ]
    },
    3: {
      level: 3,
      summary: 'Drug allergy diagnosis requires detailed history, timing analysis, and selective testing, with drug provocation testing being the gold standard when skin testing is unavailable or negative.',
      explanation: `Accurate diagnosis of drug allergy is essential to avoid unnecessary avoidance of effective medications while ensuring patient safety. The diagnostic approach depends on the suspected mechanism and clinical presentation.

Clinical assessment:

History elements:
- Drug name, dose, route, formulation
- Timing of onset relative to drug exposure
- Description of reaction (morphology, symptoms, severity)
- Treatment required and response
- Prior exposure and reactions
- Re-exposure history
- Concurrent medications and illnesses
- Risk factors (atopy, immunodeficiency)

Timing analysis:
- Immediate (minutes to 1-2 hours): Suggests IgE-mediated
- Accelerated (1-72 hours): May be IgE or T-cell mediated
- Delayed (>72 hours): Typically T-cell mediated

Physical examination:
- Document rash morphology (photos)
- Assess for systemic involvement
- Vital signs if acute

Diagnostic testing:

In vivo testing:

Skin prick testing (SPT):
- For immediate/IgE-mediated reactions
- Commercial reagents available for penicillin (major and minor determinants)
- Can test other drugs at non-irritating concentrations
- Positive: Wheal >=3mm with surrounding erythema
- High negative predictive value for penicillin

Intradermal testing:
- More sensitive than SPT
- Higher risk of systemic reaction
- Used when SPT negative but suspicion high

Patch testing:
- For delayed/T-cell mediated reactions
- Drug applied to skin for 48 hours
- Read at 48 and 96 hours
- Useful for contact dermatitis, some exanthems

In vitro testing:

Serum specific IgE:
- Available for limited drugs (penicilloyl G, penicilloyl V, amoxicillin)
- Lower sensitivity than skin testing
- Useful if skin testing contraindicated

Basophil activation test (BAT):
- Measures drug-induced basophil activation
- Flow cytometry detection of CD63 or CD203c
- Promising but not widely available
- Standardization challenges

Lymphocyte transformation test (LTT):
- Measures T-cell proliferation to drug
- For delayed reactions
- Variable sensitivity/specificity
- Research use primarily

Drug provocation/testing (challenge):

Indications:
- Negative or unavailable skin testing
- Equivocal history
- Need to confirm or exclude allergy
- Pre-operative clearance

Contraindications:
- History of severe cutaneous adverse reaction (SJS, TEN, DRESS)
- Organ-threatening reaction
- Uncontrolled asthma or comorbidities

Protocols:
- Start with low dose (often 1/100 to 1/1000 of therapeutic dose)
- Gradually increase to full dose
- Observe between doses (hours for immediate, days for delayed)
- Medical setting with resuscitation equipment
- Typically single-blind or open (double-blind for subjective symptoms)

Gold standard for diagnosis:
- Negative challenge excludes allergy
- Positive challenge confirms allergy
- Often only way to definitively diagnose

Management approaches:

Avoidance:
- Document allergy clearly in medical record
- Patient education and medical alert identification
- Cross-reactivity assessment for related drugs

Alternative medications:
- Non-cross-reacting antibiotics for infections
- Different drug classes for chronic conditions
- Often the safest approach

Desensitization:
- Induction of temporary tolerance for necessary medications
- Gradual introduction of increasing doses
- Results in temporary tolerance only (must maintain daily dosing)
- Indicated when no alternatives exist
- Examples: Penicillin for syphilis in pregnancy, aspirin for cardiac disease, chemotherapy agents

Special considerations:

Penicillin allergy:
- 10% of US population report penicillin allergy
- 90% are not truly allergic when tested
- Penicillin allergy "delabeling" programs reduce broad-spectrum antibiotic use
- Cephalosporin cross-reactivity lower than historically thought (1-2% with similar side chains)

NSAID reactions:
- Respiratory: Samter triad (asthma, nasal polyps, NSAID sensitivity)
- Urticaria/angioedema: Some with chronic urticaria react to NSAIDs
- Mechanism: COX-1 inhibition, not IgE-mediated
- Desensitization possible for cardiac indications

Radiocontrast media:
- Previously thought IgE-mediated, likely anaphylactoid (non-immune mast cell activation)
- Premedication with steroids and antihistamines for high-risk
- Low-osmolar contrast reduces risk
- Previous reaction does not absolutely contraindicate future use

Local anesthetics:
- True allergy extremely rare
- Most reactions due to anxiety, vasovagal, epinephrine effects
- Skin testing and challenge can confirm safety`,
      keyTerms: [
        { term: 'drug provocation test', definition: 'Supervised administration of drug to confirm or exclude allergy; diagnostic gold standard' },
        { term: 'basophil activation test', definition: 'Flow cytometry test measuring drug-induced basophil activation for immediate reactions' },
        { term: 'desensitization', definition: 'Procedure to induce temporary tolerance to a drug when no alternatives exist' },
        { term: 'major and minor determinants', definition: 'Penicillin breakdown products used for skin testing' },
        { term: 'anaphylactoid', definition: 'Clinically similar to anaphylaxis but non-immune mediated; no IgE involved' }
      ]
    },
    4: {
      level: 4,
      summary: 'Severe drug reactions including SJS/TEN, DRESS, and anaphylaxis require urgent recognition and management, with specific protocols for each condition and long-term follow-up for complications.',
      explanation: `Severe drug reactions represent medical emergencies with significant morbidity and mortality. Recognition, immediate management, and appropriate follow-up are critical.

Stevens-Johnson Syndrome (SJS) and Toxic Epidermal Necrolysis (TEN):

Definition:
- Severe mucocutaneous reactions characterized by epidermal necrosis and detachment
- SJS: <10% body surface area (BSA) detachment
- TEN: >30% BSA detachment
- SJS-TEN overlap: 10-30% BSA

Etiology:
- 80% drug-induced
- Common triggers: Sulfonamides, antiepileptics (aromatic amines), allopurinol, NSAIDs, nevirapine
- Infections: Mycoplasma pneumoniae (especially in children)
- Idiopathic: 20%

Pathophysiology:
- Extensive keratinocyte apoptosis via cytotoxic T-cells and NK cells
- Granulysin, perforin/granzyme pathways
- Fas-Fas ligand interaction
- Genetic predisposition: HLA-B*1502 (carbamazepine in Asians), HLA-B*5801 (allopurinol)

Clinical features:
- Prodrome: Fever, malaise, upper respiratory symptoms (1-3 days)
- Painful rash beginning on trunk, spreading
- Atypical target lesions, purpuric macules
- Epidermal detachment with positive Nikolsky sign
- Mucosal involvement: Oral, ocular, genital (at least 2 sites in SJS/TEN)
- Systemic symptoms: Dehydration, electrolyte imbalance, sepsis

Management:
- Discontinue offending drug immediately
- Burn unit or ICU care
- Supportive care: Fluid resuscitation, electrolyte management, nutrition
- Wound care: Non-adherent dressings, avoid adhesives
- Infection surveillance and treatment
- Pain management
- Eye care: Lubrication, prevention of symblepharon
- No proven benefit for IVIG, steroids, cyclosporine (controversial)

Prognosis:
- SCORTEN score predicts mortality
- SJS mortality: 5%
- TEN mortality: 30%
- Survivors may have long-term complications

Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS):

Definition:
- Severe delayed drug reaction (2-6 weeks after drug initiation)
- Fever, rash, eosinophilia or atypical lymphocytosis, systemic involvement

Causative drugs:
- Antiepileptics (carbamazepine, phenytoin, lamotrigine, phenobarbital)
- Allopurinol
- Sulfonamides
- Minocycline
- Vancomycin
- Abacavir

Clinical features:
- Fever (90%)
- Rash (maculopapular, may become edematous, purpuric)
- Lymphadenopathy
- Hepatitis (most common organ involvement)
- Hematologic abnormalities: Eosinophilia, atypical lymphocytes
- Other organs: Kidneys, lungs, heart, thyroid

Course:
- Prolonged despite drug withdrawal (weeks to months)
- Reactivation of HHV-6 common
- Autoimmune sequelae (thyroiditis, type 1 diabetes)

Management:
- Discontinue offending drug
- Systemic corticosteroids (prednisone 1-2 mg/kg)
- Slow taper over months
- Monitor for viral reactivation
- Long-term follow-up for autoimmune complications

Anaphylaxis management:

Recognition:
- Acute onset with skin/mucosal symptoms AND respiratory compromise or hypotension
- OR two or more systems after exposure
- OR hypotension after known allergen

Immediate treatment:
- Epinephrine IM 0.3-0.5 mg (1:1000) in anterolateral thigh
- Call emergency services
- Position: Supine with legs elevated (unless breathing difficulty)
- Oxygen, IV access, fluids for hypotension
- Repeat epinephrine every 5-15 minutes as needed

Adjunctive therapy (do NOT delay epinephrine):
- H1 antihistamines for urticaria/pruritus
- Beta-agonists for bronchospasm
- H2 blockers
- Corticosteroids (may prevent protracted/biphasic reactions)

Observation:
- Minimum 4-6 hours for mild cases
- 12-24 hours for severe cases or risk factors
- Biphasic reactions occur 1-72 hours after resolution

Long-term management:
- Avoid offending drug
- Medical alert identification
- Education on cross-reactivity
- Epinephrine prescription if IgE-mediated
- Consider desensitization if no alternatives

Prevention strategies:

Pre-medication:
- For radiocontrast media in high-risk patients
- Corticosteroids + antihistamines
- Does not eliminate risk

Test dosing:
- For medications with low reaction risk when necessary
- Start with small fraction of dose
- Observe before full dose

Graded challenge:
- When allergy unlikely but not definitively excluded
- Less cautious than test dosing
- More rapid dose escalation

Pharmacogenomic testing:
- HLA-B*5701 before abacavir
- HLA-B*1502 before carbamazepine in Asians
- HLA-B*5801 before allopurinol in Asians

Documentation:
- Detailed reaction description in medical record
- Specific drug name, not just class
- Date and severity
- Alternative medications tolerated
- Update after testing or challenge`,
      keyTerms: [
        { term: 'SJS', definition: 'Stevens-Johnson syndrome; severe mucocutaneous reaction with <10% skin detachment' },
        { term: 'TEN', definition: 'Toxic epidermal necrolysis; severe reaction with >30% skin detachment' },
        { term: 'DRESS', definition: 'Drug reaction with eosinophilia and systemic symptoms; delayed severe drug reaction' },
        { term: 'SCORTEN', definition: 'Severity-of-illness score for TEN predicting mortality' },
        { term: 'Nikolsky sign', definition: 'Slippage of epidermis with lateral pressure; positive in SJS/TEN' }
      ],
      clinicalNotes: `Clinical pearls for drug allergy:

1. Most "penicillin allergies" are not true allergies - testing and delabeling reduces antibiotic resistance
2. Vancomycin "red man syndrome" is infusion rate-related histamine release, not allergy - slow the infusion
3. NEVER delay epinephrine for drug anaphylaxis - it is life-saving
4. SJS/TEN requires immediate drug cessation and burn unit care

Penicillin allergy evaluation:
- Take detailed history (timing, symptoms, severity)
- Skin testing if available and reaction IgE-mediated
- 90% of labeled penicillin allergies can be removed
- Cephalosporin cross-reactivity overestimated historically
- Use shared side chain chart for cephalosporin selection

Differential diagnosis of rash:
- Viral exanthem (especially with antibiotics for viral illness)
- Bacterial toxin-mediated (scarlet fever, toxic shock)
- Serum sickness-like reaction
- Acute HIV infection
- Kawasaki disease
- Cutaneous small-vessel vasculitis

When to suspect SCAR:
- Fever preceding rash
- Mucosal involvement
- Systemic symptoms
- Recent new medication (2-6 weeks for delayed reactions)
- Facial edema
- Tender skin
- Urgent dermatology consult; do not rechallenge

Desensitization principles:
- Temporary tolerance only
- Must repeat if drug interrupted (>24-48 hours for antibiotics, 2-7 days for aspirin)
- Only for essential medications
- Protocols available for penicillins, sulfonamides, insulin, aspirin, chemotherapy
- Contraindicated after SCAR

Perioperative drug allergy:
- Anaphylaxis during anesthesia often neuromuscular blockers or antibiotics
- Tryptase drawn during/after reaction helpful
- Referral to allergy for testing before next surgery
- Label all potential culprits

Drug allergy in pregnancy:
- Penicillin allergy testing safe
- Desensitization for syphilis treatment
- Most skin tests/challenges safe in pregnancy
- Essential for appropriate antibiotic selection

Pediatric considerations:
- Viral rashes commonly mislabeled as drug allergy
- Amoxicillin rash with EBV not true allergy
- Document morphology carefully
- Rechallenge may clarify if history unclear and drug needed`
    },
    5: {
      level: 5,
      summary: 'Advanced concepts include T-cell mediated drug reaction mechanisms, biomarkers for severe reactions, pharmacogenomics and precision medicine, biologic therapies for refractory reactions, and drug allergy in special populations.',
      explanation: `Contemporary drug allergy research focuses on understanding complex immune mechanisms, developing predictive biomarkers, applying pharmacogenomics, and improving desensitization protocols.

T-cell mediated mechanisms:

Drug antigen presentation:
- Hapten hypothesis: Small drug molecule binds to protein carrier
- Pro-hapten: Drug metabolite is reactive
- p-i concept: Pharmacologic interaction with immune receptors (non-covalent)
- Altered peptide repertoire: Drug modifies antigen processing

T-cell responses:
- Drug-specific CD4+ and CD8+ T-cells
- Cytotoxic T-cells in SJS/TEN via perforin/granzyme B
- Fas-FasL mediated keratinocyte apoptosis
- Cytokine storm in DRESS (IL-5, IL-6, TNF-alpha)

HLA associations:
- Strong associations for specific drug-toxicity pairs
- HLA-B*5701: Abacavir hypersensitivity (100% PPV)
- HLA-B*1502: Carbamazepine SJS/TEN in Han Chinese
- HLA-B*5801: Allopurinol SJS/TEN in Asians
- HLA-B*1301: Dapsone hypersensitivity
- Mechanism: Drug fits into HLA antigen-binding groove, altering peptide presentation

Biomarkers for severe reactions:

For SJS/TEN:
- Granulysin (elevated in blister fluid, serum)
- CCL27, RANTES
- Cytochrome c, soluble FasL
- Limited clinical availability

For DRESS:
- HHV-6 reactivation
- Eosinophil count, atypical lymphocytes
- IL-5, IL-6 levels
- Liver enzymes monitoring

For anaphylaxis:
- Serum tryptase (within 15 minutes to 3 hours)
- Mast cell mediators: Histamine, chromogranin A
- Post-mortem tryptase for fatal reactions

Pharmacogenomics and precision medicine:

Pre-prescription screening:
- HLA-B*5701 before abacavir (standard of care)
- HLA-B*1502/3101 before carbamazepine in at-risk populations
- HLA-B*5801 before allopurinol in Asians
- TPMT/6-MP testing for thiopurines (toxicity, not allergy)

Implementation challenges:
- Cost-effectiveness by ethnicity/prior probability
- Healthcare equity in testing access
- Electronic health record integration
- Provider education

Future applications:
- Expanded HLA screening panels
- Polygenic risk scores
- Metabolism pathway testing

Biologics in drug allergy:

Mechanism-based approaches:

Anti-TNF for SJS/TEN:
- Etanercept used in some centers
- May reduce inflammation and progression
- Controversial; controlled trials needed

Anti-IL-5/IL-5R for DRESS:
- Mepolizumab, benralizumab for eosinophilic component
- Case reports of efficacy
- Not established standard

Omalizumab in drug allergy:
- Prevents anaphylaxis during desensitization
- Used for chemotherapy and antibiotic desensitization
- Reduces breakthrough reactions
- Increases success rates

Desensitization advances:

Rapid desensitization protocols:
- Chemotherapy (platinum agents, taxanes)
- Monoclonal antibodies
- Insulin allergy
- Antibiotics
- Usually completed in hours with IV protocol

Omalizumab-assisted desensitization:
- Reduces reactions during procedure
- May allow desensitization in high-risk patients
- Increasingly used for chemotherapy agents

Maintenance considerations:
- Continuous vs intermittent dosing strategies
- Subcutaneous vs IV administration
- Handling breakthrough reactions

Drug allergy in special populations:

Cystic fibrosis:
- High rates of antibiotic allergy labeling
- Need for repeated antibiotic courses
- Desensitization programs essential
- Often tolerate via test dosing

HIV/AIDS:
- High rates of sulfonamide reactions
- Trimethoprim-sulfamethoxaxole essential for PCP prophylaxis
- Desensitization protocols well-established
- Higher risk of abacavir hypersensitivity

Cancer patients:
- Platinum hypersensitivity common with repeated exposure
- Taxane hypersensitivity (cremophor-related or true allergy)
- Monoclonal antibody reactions
- Desensitization allows continued use of effective therapy
- Pre-medication and prolonged infusion reduce reactions

Cysteinyl leukotriene modulation:
- Aspirin desensitization for cardiac patients
- Takes 2-3 days
- Requires daily maintenance
- Contraindicated in asthma with nasal polyps

Delayed drug reactions:

TEN pathophysiology advances:
- Cytotoxic T-cell mediated keratinocyte death
- Granulysin as effector molecule
- Potential for targeted therapies

Contact dermatitis:
- Patch testing for common sensitizers
- Nickel, fragrance, preservatives, topical antibiotics
- Occupational exposures

Photoallergic reactions:
- Require UV exposure
- Photopatch testing
- Common triggers: Sunscreens, NSAIDs, phenothiazines

Future directions:

In vitro diagnostics:
- Improved basophil activation assays
- T-cell assays (ELISpot, proliferation)
- Mass cytometry for immune profiling
- Drug-responsive T-cell clones

Artificial intelligence:
- Risk prediction models
- Natural language processing for allergy documentation
- Drug interaction prediction
- Personalized risk assessment

Novel therapeutics:
- Targeted cytokine inhibitors
- Tolerance induction protocols
- HLA-blocking peptides
- Improved desensitization with adjuvants

Education and implementation:
- Drug allergy delabeling programs
- Antimicrobial stewardship integration
- Electronic decision support
- Patient-reported outcomes

Research needs:
- Standardized testing protocols
- Validation of new biomarkers
- Cost-effectiveness of pharmacogenomic screening
- Mechanisms of non-IgE reactions
- Long-term outcomes of desensitization`,
      keyTerms: [
        { term: 'pharmacogenomics', definition: 'Study of genetic factors affecting drug response and toxicity' },
        { term: 'hapten', definition: 'Small molecule that becomes immunogenic when bound to carrier protein' },
        { term: 'p-i concept', definition: 'Pharmacologic interaction of drugs with immune receptors without covalent binding' },
        { term: 'drug delabeling', definition: 'Process of removing inaccurate allergy labels through testing and challenge' },
        { term: 'serum tryptase', definition: 'Enzyme released by mast cells; elevated in anaphylaxis' }
      ],
      clinicalNotes: `Advanced clinical considerations:

Penicillin delabeling programs:
- Systematic approach to evaluate reported penicillin allergies
- History-based risk stratification
- Skin testing for appropriate candidates
- Oral challenge for low-risk patients
- Reduces broad-spectrum antibiotic use and C. difficile
- Cost-effective and improves outcomes

Carbapenem allergy:
- Cross-reactivity with penicillin very low (<1%)
- Aztreonam cross-reactivity only with ceftazidime (shared side chain)
- Often safe to use despite penicillin allergy label

Vancomycin infusion reaction:
- Rate-dependent histamine release
- Not IgE-mediated
- Red man syndrome: Flushing, pruritus, hypotension
- Slow infusion (over 2 hours) prevents reactions
- True vancomycin allergy rare

Chemotherapy desensitization:
- Essential for curative cancer therapy
- Standardized protocols for platinum agents, taxanes
- Omalizumab pre-treatment reduces reactions
- 12-step or 16-step protocols over hours
- Can be done as outpatient

Monoclonal antibody reactions:
- Infusion reactions common (cytokine release)
- Often manageable with pre-medication and slowed infusion
- True IgE-mediated allergy less common
- Desensitization possible for essential therapy

SJS/TEN controversies:
- IVIG: Conflicting evidence; some centers use routinely
- Corticosteroids: May increase infection risk; timing controversial
- Cyclosporine: Some benefit shown
- Early transfer to burn center improves outcomes
- SCORTEN for prognosis, not treatment decisions

DRESS monitoring:
- Long-term thyroid monitoring (autoimmune thyroiditis)
- Diabetes screening (autoimmune)
- Viral reactivation surveillance
- Slow steroid taper over months
- High recurrence rate with rechallenge

Drug allergy documentation:
- Be specific: Exact drug, reaction, date, severity
- Avoid broad labels ("sulfa allergy" - specify sulfonamide)
- Update after testing or delabeling
- Include tolerated alternatives
- Communicate to all providers

Global health considerations:
- HLA testing cost-effectiveness varies by ethnicity
- Access to allergy specialists limited in many regions
- Simplified testing algorithms needed
- Drug allergy contributes to antimicrobial resistance globally`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Middleton\'s Allergy: Principles and Practice', authors: ['Burks AW', 'Holgate ST', 'O\'Hehir RE'], source: 'Elsevier', chapter: 'Chapter 78: Drug Allergy' },
    { id: '2', type: 'article', title: 'Drug allergy: A 2022 practice parameter update', authors: ['Khan DA', 'Banerji A', 'Blumenthal KG'], source: 'Journal of Allergy and Clinical Immunology', chapter: '2022' }
  ],
  crossReferences: [
    { targetId: 'anaphylaxis', targetType: 'condition', relationship: 'parent' },
    { targetId: 'drug-allergy', targetType: 'condition', relationship: 'sibling' },
    { targetId: 'penicillin-allergy-testing', targetType: 'concept', relationship: 'related' }
  ],
  tags: {
    systems: ['allergy-immunology', 'pharmacology'],
    topics: ['drug allergy', 'adverse drug reaction', 'anaphylaxis', 'pharmacogenomics'],
    keywords: ['drug allergy', 'penicillin allergy', 'SJS', 'TEN', 'DRESS', 'desensitization'],
    clinicalRelevance: 'critical'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
