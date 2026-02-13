import { EducationalContent } from '../../types';

export const amoxicillinGuideContent: EducationalContent = {
  id: 'topic-medication-amoxicillin',
  type: 'topic',
  name: 'Amoxicillin Guide',
  nameEs: 'Guia de Amoxicilina',
  levels: {
    level1: {
      title: 'Amoxicillin: Fighting Bacterial Infections',
      titleEs: 'Amoxicilina: Combatiendo Infecciones Bacterianas',
      content: `
Amoxicillin is an antibiotic — a medicine that kills bacteria. Bacteria are tiny germs that can cause
infections in different parts of your body, like your ears, throat, lungs, skin, and urinary tract.
Amoxicillin helps your body fight these infections so you can feel better.

**How to Take Amoxicillin**
- Take it exactly as your doctor told you, usually 2 or 3 times a day.
- You can take it with or without food. Taking it with food may help if it upsets your stomach.
- Finish ALL of the medicine, even if you start feeling better after a few days. Stopping early
  can let the bacteria come back stronger.
- If you miss a dose, take it as soon as you remember. If it is almost time for your next dose,
  skip the missed one.

**What Amoxicillin Treats**
- Ear infections (otitis media).
- Strep throat and tonsillitis.
- Sinus infections.
- Bronchitis and pneumonia.
- Urinary tract infections.
- Skin infections.
- Dental infections.

**Common Side Effects**
- Diarrhea — this is very common with antibiotics.
- Nausea or upset stomach.
- A rash — if you get a rash, tell your doctor. It could be an allergy.
- Yeast infections (more common in women).

**Important Warnings — Allergies**
- Tell your doctor if you are allergic to penicillin or any antibiotic. Amoxicillin is a type of
  penicillin, and people with penicillin allergy should not take it.
- Signs of a serious allergic reaction: hives, swelling of face or throat, trouble breathing,
  dizziness. Call 911 right away.
- A mild rash does not always mean you are allergic. Your doctor can help you figure this out.

**Tips for Success**
- Take your antibiotic at evenly spaced times (for example, every 8 hours for 3 times a day).
- Store liquid amoxicillin in the refrigerator and shake well before each dose.
- Do not share your antibiotic with anyone else.
- Antibiotics do NOT work against viruses like the common cold or flu.
      `,
      patientCounselingPoints: [
        'Finish the entire course of amoxicillin even if you feel better — stopping early can cause the infection to return.',
        'Tell your doctor about any allergies to penicillin or other antibiotics before taking amoxicillin.',
        'Call 911 if you have trouble breathing, hives, or face/throat swelling after taking amoxicillin.',
        'Store liquid amoxicillin in the refrigerator. Discard any leftover liquid after 14 days.',
        'Antibiotics only work against bacteria, not viruses. Do not save leftover antibiotics for future illnesses.',
        'Eating yogurt or taking probiotics may help prevent diarrhea while on antibiotics.'
      ],
      keyTerms: [
        { term: 'Antibiotic', definition: 'A medicine that kills bacteria or stops them from growing. Amoxicillin is one type of antibiotic.' },
        { term: 'Bacteria', definition: 'Tiny living things that can cause infections. Not all bacteria are harmful, but some can make you sick.' },
        { term: 'Penicillin Allergy', definition: 'When your body reacts badly to penicillin-type medicines. Tell your doctor before taking amoxicillin.' },
        { term: 'Antibiotic Resistance', definition: 'When bacteria learn to survive antibiotics. Finishing your full course helps prevent this.' },
        { term: 'Allergic Reaction', definition: 'When your immune system overreacts to the medicine. Can range from a mild rash to severe breathing problems.' }
      ]
    },
    level2: {
      title: 'Understanding Amoxicillin: A Penicillin-Type Antibiotic',
      titleEs: 'Entendiendo la Amoxicilina: Un Antibiotico Tipo Penicilina',
      content: `
Amoxicillin is one of the most commonly prescribed antibiotics worldwide. It belongs to the penicillin
family and is effective against a wide range of common bacteria. It is available as capsules, tablets,
chewable tablets, and liquid suspension.

**How Amoxicillin Works**
Bacteria are surrounded by a protective wall called the cell wall. Amoxicillin works by preventing
bacteria from building and maintaining this wall. Without a strong cell wall, bacteria cannot survive:
1. Bacteria need to constantly rebuild their cell walls as they grow and divide.
2. Amoxicillin blocks the enzymes (called PBPs — penicillin-binding proteins) that build the wall.
3. Without a functioning wall, the bacteria weaken and burst open.
4. Your immune system can then clean up the remaining bacteria.

**Dosing Information**
- Adults (most infections): 500 mg every 8 hours or 875 mg every 12 hours.
- Children: Dose based on weight, typically 25-45 mg/kg/day divided into doses.
- Duration: Usually 7-10 days, depending on the type of infection.
- H. pylori (stomach ulcer bacteria): 1000 mg twice daily combined with other medications.

**Why Completing the Course Is Critical**
When you take amoxicillin, it kills the weakest bacteria first. The strongest bacteria survive
longer and need more doses to be eliminated. If you stop early:
- The remaining bacteria are the strongest, most resistant ones.
- They can multiply and cause a new infection that is harder to treat.
- This contributes to antibiotic resistance — a major global health problem.

**Allergies and Cross-Reactivity**
- True penicillin allergy occurs in about 1-2% of the population.
- However, up to 10% of people report a penicillin allergy, and many of these are not true allergies.
- Cross-reactivity with cephalosporins (another antibiotic family) is about 1-2%, much lower
  than previously thought.
- If you have a history of severe penicillin allergy (anaphylaxis), do NOT take amoxicillin.
- If you had a mild rash years ago, your doctor may consider penicillin allergy testing.

**Amoxicillin vs. Amoxicillin/Clavulanate (Augmentin)**
Some bacteria produce an enzyme called beta-lactamase that destroys amoxicillin. Augmentin
combines amoxicillin with clavulanate (a beta-lactamase inhibitor) to overcome this resistance:
- Augmentin is used when plain amoxicillin might not work (resistant infections).
- Augmentin causes more diarrhea than amoxicillin alone.
- Your doctor chooses between them based on the type and location of infection.

**When Amoxicillin Will NOT Work**
- Viral infections (cold, flu, most sore throats, COVID-19).
- Infections caused by bacteria naturally resistant to amoxicillin (e.g., MRSA).
- Infections where amoxicillin cannot reach (some deep abscesses).
      `,
      patientCounselingPoints: [
        'Complete the full prescribed course — even if you feel better after 2-3 days, the strongest bacteria need the full course to be eliminated.',
        'Many reported penicillin allergies are not true allergies. If your allergy was a childhood rash, ask about allergy testing.',
        'Store liquid amoxicillin in the refrigerator and shake well before measuring each dose.',
        'Space your doses evenly throughout the day for best results (e.g., every 8 hours for three times daily).',
        'Amoxicillin may reduce the effectiveness of birth control pills — use backup contraception during treatment.',
        'Probiotics or yogurt during and after the antibiotic course may help restore healthy gut bacteria.'
      ],
      keyTerms: [
        { term: 'Penicillin-Binding Proteins (PBPs)', definition: 'Bacterial enzymes that build the cell wall. Amoxicillin blocks these proteins, causing bacteria to die.' },
        { term: 'Beta-Lactamase', definition: 'An enzyme some bacteria produce that destroys amoxicillin. Clavulanate (in Augmentin) blocks this enzyme.' },
        { term: 'Antibiotic Resistance', definition: 'When bacteria evolve to survive antibiotics. Completing your full course helps prevent this global health threat.' },
        { term: 'Anaphylaxis', definition: 'A severe, life-threatening allergic reaction causing breathing difficulty and low blood pressure. Requires immediate 911 call.' },
        { term: 'Cross-Reactivity', definition: 'When allergy to one drug (penicillin) causes reaction to a related drug (cephalosporin). The actual risk is lower than once believed.' },
        { term: 'Augmentin', definition: 'A combination of amoxicillin plus clavulanate, used when bacteria may be resistant to plain amoxicillin.' }
      ]
    },
    level3: {
      title: 'Amoxicillin Pharmacology and Antimicrobial Therapy',
      titleEs: 'Farmacologia de la Amoxicilina y Terapia Antimicrobiana',
      content: `
Amoxicillin is a semi-synthetic aminopenicillin with an expanded gram-negative spectrum compared to
natural penicillins. Its favorable oral bioavailability, safety profile, and broad spectrum make it
one of the most prescribed antibiotics globally.

**Mechanism of Action**
Amoxicillin inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs),
specifically transpeptidases (PBP1a, PBP1b, PBP3):
- Prevents cross-linking of peptidoglycan polymers in the cell wall.
- Activates bacterial autolytic enzymes, accelerating cell lysis.
- Bactericidal (kills bacteria) rather than bacteriostatic (merely inhibits growth).
- Time-dependent killing: efficacy depends on duration above MIC (minimum inhibitory concentration)
  rather than peak concentration. Optimal when free drug concentration exceeds MIC for >40-50% of
  the dosing interval.

**Pharmacokinetics**
- **Absorption**: 70-90% oral bioavailability (superior to ampicillin at 40-50%), not significantly
  affected by food.
- **Distribution**: Good penetration into middle ear fluid, sinus secretions, bronchial secretions,
  and tonsillar tissue. Poor CSF penetration (unless meninges are inflamed).
- **Protein binding**: ~20%.
- **Metabolism**: Minimal hepatic metabolism (~30% to penicilloic acid).
- **Elimination**: Primarily renal (60-70% unchanged in urine). Half-life: 1-1.5 hours (extended in
  renal impairment). Dose adjustment needed for CrCl < 30 mL/min.

**Spectrum of Activity**
- **Gram-positive**: Streptococcus pyogenes, Streptococcus pneumoniae (non-resistant), Enterococcus
  faecalis, Listeria monocytogenes.
- **Gram-negative**: Haemophilus influenzae (non-beta-lactamase producing), Escherichia coli
  (non-resistant), Helicobacter pylori, Proteus mirabilis.
- **Anaerobes**: Some oral anaerobes; less effective against Bacteroides fragilis.
- **NOT effective**: MRSA, Pseudomonas, Klebsiella (intrinsically resistant), beta-lactamase
  producing organisms.

**Resistance Mechanisms**
1. **Beta-lactamase production**: The most common mechanism. Bacterial enzymes hydrolyze the
   beta-lactam ring. Addressed by adding clavulanate (Augmentin).
2. **PBP alterations**: Modified PBPs with reduced amoxicillin affinity. Mechanism in MRSA and
   penicillin-resistant pneumococcus.
3. **Efflux pumps**: Active export of amoxicillin from the bacterial cell.
4. **Porin mutations**: Reduced outer membrane permeability in gram-negative bacteria.

**Clinical Applications — Evidence-Based**
1. **Acute otitis media**: First-line therapy. High-dose (80-90 mg/kg/day) for resistant pneumococcus.
2. **Streptococcal pharyngitis**: First-line for Group A strep. 10-day course prevents rheumatic fever.
3. **Community-acquired pneumonia**: First-line for outpatient, non-severe CAP (high-dose: 1g TID).
4. **H. pylori eradication**: Component of triple and quadruple therapy regimens.
5. **Dental prophylaxis**: 2g single dose pre-procedure for endocarditis prophylaxis.
6. **Lyme disease**: First-line treatment (500 mg TID for 14-21 days).
7. **UTI**: Used when susceptibilities confirm activity; not empiric first-line due to resistance.

**Penicillin Allergy — Clinical Approach**
- 90% of patients labeled "penicillin allergic" can safely tolerate penicillins after evaluation.
- Risk stratification: severe reactions (anaphylaxis, Stevens-Johnson) vs. minor (childhood rash).
- Penicillin skin testing: negative predictive value >97%. Recommended before avoiding all beta-lactams.
- De-labeling programs: Improve antibiotic stewardship by enabling first-line therapy.
      `,
      keyTerms: [
        { term: 'Time-Dependent Killing', definition: 'Amoxicillin efficacy depends on maintaining drug concentrations above MIC for >40-50% of the dosing interval, rather than achieving high peak levels.' },
        { term: 'Peptidoglycan', definition: 'The structural polymer of bacterial cell walls. Amoxicillin prevents its cross-linking, leading to cell wall weakness and bacterial death.' },
        { term: 'Minimum Inhibitory Concentration (MIC)', definition: 'The lowest drug concentration that prevents visible bacterial growth. Used to determine susceptibility and guide dosing.' },
        { term: 'Beta-Lactam Ring', definition: 'The core chemical structure of penicillins. Beta-lactamase enzymes destroy this ring, causing resistance.' },
        { term: 'Penicillin Skin Testing', definition: 'A diagnostic test with >97% negative predictive value for ruling out true penicillin allergy. Recommended before permanently avoiding beta-lactams.' },
        { term: 'Antibiotic Stewardship', definition: 'Programs to optimize antibiotic use, reduce resistance, and improve outcomes. Penicillin allergy de-labeling is a key component.' }
      ]
    },
    level4: {
      title: 'Advanced Amoxicillin Therapeutics and Antimicrobial Stewardship',
      titleEs: 'Terapeutica Avanzada de Amoxicilina y Administracion Antimicrobiana',
      content: `
This section addresses pharmacokinetic/pharmacodynamic optimization, resistance patterns, and
the role of amoxicillin within contemporary antimicrobial stewardship frameworks.

**PK/PD Optimization**
Amoxicillin exhibits time-dependent bactericidal activity:
- **Target**: Free drug concentration > MIC for >40-50% of the dosing interval (fT>MIC).
- **Standard dosing** (500 mg q8h): Achieves adequate fT>MIC for susceptible organisms (MIC <= 2 mcg/mL).
- **High-dose strategies** (1g q8h or 875 mg q12h): Required when targeting organisms with higher
  MICs (e.g., intermediate penicillin-resistant S. pneumoniae).
- **Pediatric high-dose** (80-90 mg/kg/day): Achieves adequate middle ear concentrations against
  resistant pneumococcus; guideline-recommended for AOM in high-risk populations.

**Resistance Surveillance**
Amoxicillin resistance patterns vary significantly by region and pathogen:
- **S. pneumoniae**: Penicillin non-susceptibility rates 20-40% in many regions, driven by PBP
  alterations. Overcome by high-dose amoxicillin for non-meningeal infections.
- **H. influenzae**: Beta-lactamase production rates 15-40% globally. Amoxicillin/clavulanate
  recommended when prevalence is high.
- **E. coli**: Ampicillin/amoxicillin resistance rates 40-60% in community-acquired UTI. Not
  recommended for empiric UTI therapy without susceptibility data.
- **Group A Streptococcus**: No documented resistance to penicillin/amoxicillin to date.

**Penicillin Allergy Assessment — Advanced**
Comprehensive allergy evaluation protocol:
1. **History**: Characterize reaction (timing, severity, symptoms, year of occurrence).
2. **Risk stratification**:
   - Low risk: Remote childhood rash, family history only, isolated GI symptoms.
   - Moderate risk: Urticaria, pruritus within hours of dose (>10 years ago).
   - High risk: Anaphylaxis, Stevens-Johnson, DRESS, interstitial nephritis.
3. **Testing**: Skin prick test followed by intradermal testing (major/minor determinants).
4. **Oral challenge**: Graded oral amoxicillin challenge for negative skin test results.
5. **De-labeling**: Remove allergy from medical record after negative testing/challenge.

**Amoxicillin in Special Populations**
- **Pregnancy** (Category B): Safe; first-line for many infections including UTI and dental infections.
- **Pediatrics**: Excellent safety profile. Liquid formulations available. Weight-based dosing essential.
- **Renal impairment**: CrCl 10-30 mL/min: 250-500 mg q12h. CrCl < 10: 250-500 mg q24h.
  Hemodialysis: Supplemental dose post-dialysis.
- **Elderly**: Adjust for renal function; no age-specific dose adjustment otherwise.

**Antimicrobial Stewardship Considerations**
- Amoxicillin is a "narrow-spectrum" choice within broad-spectrum alternatives — preferred when
  appropriate to minimize collateral damage to microbiome.
- Avoid prescribing for viral infections (most URIs, acute bronchitis in healthy adults, viral pharyngitis).
- Duration optimization: Shorter courses (5-7 days) increasingly supported for many infections
  (AOM, sinusitis, CAP) compared to traditional 10-14 day courses.
- Delayed prescribing strategies: Providing a prescription with instructions to fill only if symptoms
  worsen or do not improve in 48-72 hours.

**Drug Interactions and Considerations**
- **Oral contraceptives**: Historical concern, but modern evidence suggests clinically significant
  interaction is unlikely. Backup contraception still commonly recommended.
- **Warfarin**: May increase INR; monitor during and after amoxicillin course.
- **Methotrexate**: Reduced renal clearance of methotrexate; monitor for toxicity.
- **Allopurinol**: Increased risk of maculopapular rash (not true allergy).
- **Probenecid**: Reduces renal secretion of amoxicillin, increasing levels (sometimes used therapeutically).
      `,
      clinicalNotes: [
        'High-dose amoxicillin (80-90 mg/kg/day in children, 1g TID in adults) overcomes intermediate pneumococcal resistance for non-meningeal infections.',
        'Up to 90% of patients with a penicillin allergy label can safely tolerate penicillins after formal evaluation — de-labeling improves stewardship.',
        'Shorter antibiotic courses (5-7 days) are increasingly supported by evidence for many common infections, reducing resistance pressure.',
        'E. coli resistance to amoxicillin is 40-60% in community settings — not recommended for empiric UTI therapy without culture data.',
        'Group A Streptococcus has never developed resistance to penicillin/amoxicillin, maintaining first-line status for streptococcal pharyngitis.',
        'Delayed prescribing strategies for self-limiting infections reduce unnecessary antibiotic use by 30-50%.'
      ],
      keyTerms: [
        { term: 'fT>MIC', definition: 'The fraction of the dosing interval during which free drug concentration exceeds the minimum inhibitory concentration — the key PK/PD target for beta-lactams.' },
        { term: 'Penicillin Allergy De-labeling', definition: 'The process of formally evaluating and removing inaccurate penicillin allergy labels from medical records, enabling first-line antibiotic therapy.' },
        { term: 'DRESS Syndrome', definition: 'Drug Reaction with Eosinophilia and Systemic Symptoms — a severe, potentially life-threatening drug hypersensitivity reaction.' },
        { term: 'Delayed Prescribing', definition: 'A stewardship strategy providing prescriptions with instructions to fill only if symptoms do not improve, reducing unnecessary antibiotic use.' },
        { term: 'Collateral Damage', definition: 'The ecological impact of antibiotics on the normal microbiome, selecting for resistant organisms. Narrow-spectrum agents like amoxicillin cause less damage.' },
        { term: 'Graded Oral Challenge', definition: 'A supervised test-dose protocol to confirm or rule out drug allergy, typically using 1/10 then full dose with observation.' }
      ]
    },
    level5: {
      title: 'Amoxicillin: Expert Antimicrobial Pharmacotherapy Review',
      titleEs: 'Amoxicilina: Revision Experta de Farmacoterapia Antimicrobiana',
      content: `
This expert review examines amoxicillin molecular pharmacology, resistance mechanisms,
pharmacogenomics, and its role in addressing global antimicrobial resistance.

**Molecular Target: Transpeptidase Inhibition**
Amoxicillin targets bacterial DD-transpeptidases (PBPs) that catalyze the final cross-linking
step of peptidoglycan biosynthesis:
- The beta-lactam ring mimics the D-Ala-D-Ala terminus of peptidoglycan precursors.
- Covalent acylation of the active-site serine residue of PBPs irreversibly inactivates the enzyme.
- Different PBP targets produce different morphological effects: PBP3 inhibition causes
  filamentation, PBP1a/1b inhibition causes rapid lysis.
- The aminopenicillin side chain (alpha-amino group) confers improved gram-negative penetration
  through outer membrane porins (OmpF) compared to penicillin G.

**Resistance: Molecular Mechanisms in Depth**
1. **Class A beta-lactamases (TEM-1, SHV-1)**: The most prevalent resistance mechanism. Hydrolyze
   the beta-lactam ring. Inhibited by clavulanate, sulbactam, tazobactam.
2. **Extended-spectrum beta-lactamases (ESBLs)**: TEM/SHV variants and CTX-M enzymes conferring
   resistance to amoxicillin/clavulanate in some strains. Growing concern globally.
3. **PBP mosaics**: In S. pneumoniae, horizontal gene transfer from viridans streptococci creates
   mosaic PBPs with reduced beta-lactam affinity. Overcome by high-dose therapy for non-meningeal
   infections where CLSI breakpoints allow.
4. **AmpC beta-lactamases**: Chromosomal (Enterobacter, Citrobacter, Serratia) or plasmid-mediated.
   Not inhibited by clavulanate. Intrinsic resistance in these organisms.

**Pharmacogenomic Considerations**
- **HLA-B*57:01**: Not directly relevant to amoxicillin but important for general drug hypersensitivity.
- **HLA-DRB1*15:01**: Associated with amoxicillin-clavulanate hepatotoxicity (cholestatic pattern).
  Risk: 0.3-1.7 per 10,000 prescriptions; higher in elderly, male, prolonged courses.
- **IgE-mediated allergy genetics**: Complex polygenic susceptibility involving immune response
  genes and IgE regulatory loci.

**Global Resistance and Stewardship**
Amoxicillin resistance represents a microcosm of the global AMR crisis:
- WHO classifies AMR as a top-10 global health threat.
- Amoxicillin is on the WHO Access group of essential antibiotics — recommended as first-line
  for common infections to preserve Watch and Reserve group antibiotics.
- The AWaRe (Access, Watch, Reserve) classification framework targets >60% of antibiotic use
  from the Access group to minimize resistance selection.
- Community antibiograms should guide empiric amoxicillin use; resistance patterns vary significantly
  by geography, age group, and clinical setting.

**Microbiome Impact**
Amoxicillin disrupts the gut microbiome with potential long-term consequences:
- Reduces Bacteroidetes and Bifidobacterium; enriches Enterobacteriaceae.
- Recovery to baseline composition takes 4-8 weeks after a standard course.
- Repeated antibiotic exposure in childhood is epidemiologically linked to increased risk of
  obesity, atopy, and inflammatory bowel disease — though causality is not fully established.
- Probiotic co-administration (Saccharomyces boulardii, Lactobacillus rhamnosus GG) reduces
  antibiotic-associated diarrhea by ~50% in RCTs.

**Emerging Approaches**
1. **Precision dosing**: Model-informed precision dosing using population PK models and Bayesian
   estimation to individualize amoxicillin regimens, particularly in critically ill patients
   and those with altered pharmacokinetics.
2. **Oral step-down**: OPAT (Outpatient Parenteral Antibiotic Therapy) to high-dose oral
   amoxicillin for bone and joint infections, supported by OVIVA trial data.
3. **Microbiome-sparing strategies**: Development of targeted beta-lactamase enzymes (ribaxamase/
   SYN-004) administered orally to degrade excess amoxicillin in the GI tract, protecting
   the colonic microbiome while maintaining systemic antibiotic activity.
      `,
      clinicalNotes: [
        'The aminopenicillin side chain improves gram-negative penetration through outer membrane porins, explaining expanded spectrum vs. penicillin G.',
        'HLA-DRB1*15:01 is associated with amoxicillin-clavulanate cholestatic hepatotoxicity — risk increases with prolonged courses and in elderly male patients.',
        'WHO AWaRe classification positions amoxicillin as a key Access group antibiotic — maintaining its effectiveness is a global stewardship priority.',
        'Microbiome recovery after amoxicillin takes 4-8 weeks. Repeated courses may have cumulative effects on microbial diversity.',
        'Microbiome-sparing strategies (SYN-004/ribaxamase) represent a novel approach to preserving colonic flora during systemic beta-lactam therapy.',
        'The OVIVA trial supports oral step-down to high-dose amoxicillin for bone and joint infections, challenging the traditional IV-only paradigm.'
      ],
      keyTerms: [
        { term: 'DD-Transpeptidase', definition: 'The bacterial enzyme (PBP) catalyzing peptidoglycan cross-linking — the molecular target of amoxicillin and all beta-lactam antibiotics.' },
        { term: 'CTX-M ESBL', definition: 'A globally disseminated extended-spectrum beta-lactamase family conferring resistance to penicillins and cephalosporins, often including amoxicillin/clavulanate.' },
        { term: 'AWaRe Classification', definition: 'WHO Access/Watch/Reserve antibiotic categorization framework. Amoxicillin is an Access group antibiotic recommended for first-line use.' },
        { term: 'Mosaic PBPs', definition: 'Penicillin-binding proteins with segments from multiple bacterial species, created by horizontal gene transfer, conferring reduced beta-lactam binding.' },
        { term: 'Ribaxamase (SYN-004)', definition: 'An oral beta-lactamase enzyme designed to degrade excess amoxicillin in the GI tract, protecting the colonic microbiome during systemic therapy.' },
        { term: 'OVIVA Trial', definition: 'Landmark trial demonstrating non-inferiority of oral antibiotic step-down (including high-dose amoxicillin) vs. IV therapy for bone and joint infections.' }
      ]
    }
  },
  media: [],
  citations: [
    {
      source: 'MedlinePlus',
      title: 'Amoxicillin',
      url: 'https://medlineplus.gov/druginfo/meds/a685001.html',
      accessedDate: new Date().toISOString()
    },
    {
      source: 'FDA',
      title: 'Amoxicillin Capsules Drug Label',
      url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2008/050542s024,050754s012,050760s009,050761s009lbl.pdf',
      accessedDate: new Date().toISOString()
    }
  ],
  crossReferences: [
    { id: 'topic-medication-azithromycin', type: 'topic', relationship: 'related' },
    { id: 'topic-condition-bacterial-infections', type: 'topic', relationship: 'parent' }
  ],
  tags: ['amoxicillin', 'antibiotic', 'penicillin', 'bacterial-infection', 'antimicrobial', 'beta-lactam', 'antibiotic-resistance'],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
