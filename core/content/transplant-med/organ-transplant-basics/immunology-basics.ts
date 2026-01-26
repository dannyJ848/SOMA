import { EducationalContent } from '../../types';

export const immunologyBasics: EducationalContent = {
  id: 'immunology-basics',
  type: 'concept',
  name: 'Transplant Immunology Basics',
  alternateNames: ['Transplant Rejection', 'Organ Rejection', 'Transplant Immune Response'],

  levels: {
    1: {
      level: 1,
      summary: 'The immune system protects the body but can also attack transplanted organs. This is called rejection, and it is prevented with special medications.',
      explanation: `When someone receives an organ transplant, their body's immune system may recognize the new organ as foreign and try to attack it. This attack is called rejection.

**The Immune System and Transplants**

*Your Immune System's Job:*
- Protect your body from foreign invaders like bacteria and viruses
- Recognize what belongs to you and what doesn't
- Attack anything that seems foreign

*What Happens After Transplant:*
- The immune system may see the new organ as foreign
- It sends special cells and antibodies to attack it
- This can damage or destroy the transplanted organ

**Types of Rejection**

*Hyperacute Rejection*
- Happens within minutes to hours
- Very rare today
- Caused by pre-existing antibodies

*Acute Rejection*
- Happens within weeks to months
- Most common type
- Can usually be treated

*Chronic Rejection*
- Happens over months to years
- Gradual loss of organ function
- Harder to reverse

**Anti-Rejection Medications**

*Immunosuppressants:*
- Weaken the immune system
- Prevent it from attacking the new organ
- Must be taken for life
- Include medications like tacrolimus, prednisone, mycophenolate

*Taking medications correctly:*
- Same time every day
- Never skip doses
- Regular blood tests
- Watch for side effects

**Signs of Rejection**

- Fever
- Pain over the transplanted organ
- Decreased organ function
- Feeling unwell
- Swelling

**Key Points:**
- Rejection can occur at any time
- Taking medications exactly as prescribed is crucial
- Regular follow-up appointments are important
- Most rejection can be treated if caught early`,
      keyTerms: [
        { term: 'Immune System', definition: 'The body\'s defense system against infection and foreign substances' },
        { term: 'Rejection', definition: 'When the immune system attacks and damages the transplanted organ' },
        { term: 'Immunosuppressants', definition: 'Medications that weaken the immune system to prevent rejection' },
        { term: 'Antibody', definition: 'Protein made by the immune system that attacks foreign substances' },
        { term: 'Biopsy', definition: 'Taking a small sample of tissue to check for rejection under a microscope' }
      ],
      analogies: [
        'The immune system is like a security guard that mistakes the new organ for an intruder.',
        'Anti-rejection medications are like peacekeepers that stop the security guard from attacking.',
      ],
      examples: [
        'A kidney transplant recipient misses doses of medication and develops fever and decreased kidney function - signs of rejection.',
        'Someone with a new heart has regular biopsies to check for rejection before symptoms appear.',
      ],
    },
    2: {
      level: 2,
      summary: 'Rejection is classified by timing (hyperacute, acute, chronic) and mechanism (antibody-mediated vs. cell-mediated), with specific treatments for each type.',
      explanation: `Understanding transplant rejection requires knowing the immune system components involved and the different patterns of rejection.

**The Immune System Components in Transplantation**

*T Cells:*
- Directly attack foreign cells
- Coordinate immune responses
- Key players in acute rejection
- Memory T cells remember previous exposures

*B Cells and Antibodies:*
- B cells make antibodies
- Antibodies circulate in blood
- Can bind to donor organs
- Cause antibody-mediated rejection

**Types of Rejection by Timing**

*Hyperacute Rejection*
- Time: Minutes to hours after blood flow restored
- Cause: Pre-existing antibodies to donor
- Mechanism: Antibodies bind immediately to blood vessels
- Result: Clotting, organ destruction
- Prevention: Crossmatch testing before transplant
- Treatment: Cannot be reversed - organ lost

*Acute Rejection*
- Time: Days to months after transplant
- Cause: T cell activation against donor organ
- Mechanism: T cells infiltrate and damage organ
- Presentation: May have no symptoms or fever, pain, decreased function
- Treatment: High-dose steroids, antibody therapy
- Reversibility: Usually treatable if caught early

*Chronic Rejection*
- Time: Months to years after transplant
- Cause: Ongoing low-grade immune response
- Mechanism: Scarring and blood vessel narrowing
- Presentation: Gradual loss of organ function
- Treatment: Difficult to reverse
- Prevention: Good medication adherence

**Diagnosing Rejection**

*Biopsy:*
- Gold standard for diagnosis
- Small sample of organ tissue
- Examined under microscope
- Graded by severity

*Blood Tests:*
- Organ function tests (creatinine, liver enzymes)
- Donor-specific antibody levels
- Immune cell activation markers

*Imaging:*
- Ultrasound for blood flow
- CT for structural changes
- Specialized scans for function

**Treatment Approaches**

*For mild rejection:*
- Increase oral prednisone
- Adjust current medications
- Close monitoring

*For moderate/severe rejection:*
- IV steroids (methylprednisolone)
- Antibody therapies (thymoglobulin)
- Plasmapheresis for antibody-mediated rejection
- Hospitalization for monitoring

**Prevention Strategies**

*Medications:*
- Tacrolimus or cyclosporine (calcineurin inhibitors)
- Mycophenolate or azathioprine (antimetabolites)
- Prednisone (steroid)

*Monitoring:*
- Regular clinic visits
- Blood level monitoring
- Protocol biopsies (some centers)
- Patient education about symptoms

**Special Situations**

*Non-adherence:*
- Not taking medications
- Leading cause of late rejection
- Can usually be reversed if caught early
- Education is crucial

*Sensitization:*
- Previous transplants, pregnancies, transfusions
- Develop antibodies to HLA
- Higher rejection risk
- Needs special matching`,
      keyTerms: [
        { term: 'Hyperacute Rejection', definition: 'Immediate rejection caused by pre-existing antibodies, occurring within minutes to hours' },
        { term: 'Acute Rejection', definition: 'Rejection occurring days to months after transplant, often treatable with medications' },
        { term: 'Chronic Rejection', definition: 'Gradual loss of organ function over years due to slow immune damage' },
        { term: 'T Cells', definition: 'Type of white blood cell that directly attacks foreign cells and coordinates immune responses' },
        { term: 'Biopsy', definition: 'Taking a small sample of tissue to check for rejection under a microscope' }
      ],
      analogies: [
        'Hyperacute rejection is like instant food poisoning - the body reacts immediately and violently.',
        'Chronic rejection is like rust slowly eating away at metal - gradual damage that\'s hard to reverse.',
      ],
      examples: [
        'A patient who has had multiple pregnancies may have antibodies that cause hyperacute rejection if not tested beforehand.',
        'A liver transplant recipient feeling tired and having elevated liver enzymes may have acute rejection.',
      ],
    },
    3: {
      level: 3,
      summary: 'HLA molecules are the primary targets of rejection, with direct and indirect allorecognition pathways driving acute and chronic rejection respectively.',
      explanation: `The immunology of transplant rejection centers on recognition of foreign HLA molecules by the recipient's immune system.

**The Major Histocompatibility Complex (MHC)**

*MHC in Humans = HLA (Human Leukocyte Antigens)*
- Cell surface proteins that present antigens to T cells
- Highly polymorphic (many variations in population)
- Main target of transplant rejection
- Located on chromosome 6

*Types of HLA:*
- **Class I**: HLA-A, HLA-B, HLA-C (found on all nucleated cells)
- **Class II**: HLA-DR, HLA-DQ, HLA-DP (found on antigen-presenting cells)
- Both important in transplantation

*Role in normal immune function:*
- Present peptides to T cells
- Allow immune system to distinguish self from non-self
- Critical for immune response to infections

**Allorecognition Pathways**

*Direct Allorecognition:*
- Recipient T cells recognize intact donor HLA
- Donor antigen-presenting cells (APCs) present to recipient T cells
- Dominant in early acute rejection
- Short-lived (donor APCs disappear)

*Indirect Allorecognition:*
- Recipient T cells recognize processed donor antigens
- Recipient APCs process and present donor HLA peptides
- Dominant in chronic rejection
- Long-lived (recipient's own APCs)

*Semi-direct Allorecognition:*
- Recipient acquires donor APCs (trogocytosis)
- Combines features of direct and indirect
- Contributes to both acute and chronic rejection

**T Cell Activation in Transplantation**

*Signal 1: T Cell Receptor (TCR) Engagement*
- TCR recognizes foreign HLA
- Must be specific mismatch
- Provides antigen specificity

*Signal 2: Co-stimulation*
- Required for full T cell activation
- CD28 on T cell binds B7 on APC
- Without co-stimulation: T cell becomes anergic
- Therapeutic target (belatacept blocks CD28-B7)

*Signal 3: Cytokines*
- IL-2 promotes T cell proliferation
- IL-12 promotes Th1 differentiation
- Type I interferons enhance activation

**CD4+ vs. CD8+ T Cells**

*CD4+ Helper T Cells:*
- Recognize HLA Class II
- Help B cells make antibodies
- Help CD8+ T cells
- Produce cytokines that drive inflammation

*CD8+ Cytotoxic T Cells:*
- Recognize HLA Class I
- Directly kill donor cells
- Release perforin and granzymes
- Key effector of acute rejection

**Antibody-Mediated Rejection (AMR)**

*Donor-Specific Antibodies (DSA):*
- Antibodies against donor HLA
- Can exist before transplant (sensitization)
- Can develop after transplant (de novo)
- Cause hyperacute, acute, or chronic rejection

*Mechanisms of injury:*
- Complement activation (C4d deposition)
- Antibody-dependent cellular cytotoxicity
- Endothelial cell activation
- Inflammation and thrombosis

*Diagnosis:*
- C4d staining on biopsy
- Detectable DSA in blood
- Tissue injury patterns
- Exclusion of other causes

*Treatment:*
- Plasmapheresis (remove antibodies)
- IVIG (neutralize antibodies)
- Rituximab (destroy B cells)
- Bortezomib (destroy plasma cells)

**Memory T Cells**

*Why they matter:*
- Faster, stronger response
- Resistant to immunosuppression
- From prior exposures:
  - Pregnancy
  - Blood transfusion
  - Previous transplant
  - Infections (cross-reactive)

*Impact on transplantation:*
- Higher rejection risk
- More severe rejection
- Harder to treat
- Need for more immunosuppression

**Immune Tolerance**

*Definition:*
- Specific non-responsiveness to donor organ
- Without global immunosuppression
- The "holy grail" of transplant

*Mechanisms:*
- Deletion of alloreactive T cells
- Regulatory T cells (Tregs) suppress response
- Anergy (unresponsiveness) in remaining T cells
- Chimerism (donor and recipient cells coexist)

*Clinical examples:*
- Some liver transplant recipients off medications
- Kidney transplant recipients after combined kidney-marrow transplant`,
      keyTerms: [
        { term: 'MHC', definition: 'Major Histocompatibility Complex - cell surface molecules that present antigens to T cells' },
        { term: 'HLA', definition: 'Human Leukocyte Antigen - the human MHC molecules that are the main target of rejection' },
        { term: 'Allorecognition', definition: 'Recognition of foreign HLA molecules by recipient immune cells' },
        { term: 'APC', definition: 'Antigen Presenting Cell - immune cell that presents antigens to T cells' },
        { term: 'DSA', definition: 'Donor Specific Antibodies - antibodies produced by the recipient that target donor HLA' }
      ],
      clinicalNotes: 'Direct allorecognition dominates early acute rejection; indirect pathway drives chronic rejection. AMR requires C4d staining and DSA detection for diagnosis. Memory T cells from pregnancy/transfusion increase rejection risk. Liver more tolerogenic than other organs.',
    },
    4: {
      level: 4,
      summary: 'Costimulatory blockade, cytokine networks, complement activation, and regulatory T cells are key therapeutic targets in managing rejection and promoting tolerance.',
      explanation: `Advanced understanding of transplant immunology reveals multiple therapeutic targets for preventing rejection and promoting tolerance.

**Costimulatory Pathways as Therapeutic Targets**

*CD28-B7 Pathway:*
- Critical for T cell activation
- B7 (CD80/86) on APCs binds CD28 on T cells
- Belatacept (CTLA4-Ig) blocks this pathway
- First co-stimulation blocker approved
- Advantages: No nephrotoxicity
- Risks: Higher early acute rejection, PTLD risk

*CD40-CD154 (CD40L) Pathway:*
- Important for T cell-B cell interaction
- CD40 on APCs, CD154 on T cells
- Blocking antibodies in development
- Promising in animal studies
- May promote tolerance

*ICOS-ICOSL Pathway:*
- Inducible co-stimulator
- Important for Tfh cell function
- Target for antibody suppression
- Research ongoing

**Cytokine Networks in Transplantation**

*IL-2 and IL-2 Receptor:*
- Critical for T cell proliferation
- Target: IL-2 receptor (CD25)
- Basiliximab and daclizumab (anti-CD25)
- Used for induction therapy
- Prevent early T cell activation

*TNF-alpha:*
- Pro-inflammatory cytokine
- Key mediator of rejection
- Targeted by infliximab, etanercept
- Used for steroid-resistant rejection

*IL-6:*
- Promotes B cell differentiation
- Drives inflammation
- Targeted by tocilizumab
- Used for antibody-mediated rejection
- May help treat chronic rejection

*IL-17:*
- Produced by Th17 cells
- Important for neutrophil recruitment
- Role in chronic rejection
- Therapeutic target under investigation

**Complement System in Transplantation**

*Complement Activation Pathways:*
- Classical: Activated by antibodies
- Lectin: Activated by mannose residues
- Alternative: Spontaneous activation
- All converge on C3 convertase

*Complement in AMR:*
- Antibody binding triggers classical pathway
- C4d is deposited in tissue (diagnostic marker)
- Membrane attack complex (MAC) causes cell lysis
- C3a and C5a are anaphylatoxins (cause inflammation)

*Therapeutic inhibition:*
- Eculizumab (anti-C5): Blocks MAC formation
- Used for AMR prevention in sensitized patients
- Expensive but effective

*Other complement targets:*
- C1 inhibitors: Prevent classical pathway
- C3 inhibitors: Block all pathways
- Factor D inhibitors: Block alternative pathway

**Regulatory T Cells (Tregs)**

*Phenotype:*
- CD4+ CD25+ FOXP3+
- FOXP3 is master transcription factor
- Suppressive function

*Mechanisms of suppression:*
- IL-10 and TGF-beta production
- CTLA-4 mediated inhibition
- Metabolic disruption of effector T cells
- Modulation of APC function

*Therapeutic potential:*
- Adoptive transfer of expanded Tregs
- Low-dose IL-2 promotes Treg growth
- Tregs promoting tolerance in clinical trials
- May allow immunosuppression withdrawal

*Challenges:*
- Isolation and expansion
- Stability of Treg phenotype
- Risk of over-suppression
- Manufacturing for clinical use

**T Cell Exhaustion and Tolerance**

*Exhaustion:*
- Chronic antigen stimulation
- Progressive loss of function
- Express inhibitory receptors (PD-1, LAG-3, TIM-3)
- May be beneficial in transplantation

*Therapeutic implications:*
- PD-1/PD-L1 blockade (checkpoint inhibitors)
- Can cause transplant rejection in cancer patients
- Understanding exhaustion may aid tolerance

**B Cell Biology in Transplantation**

*B cell activation:*
- T cell-dependent (requires CD4+ help)
- T cell-independent (TI-2 antigens)
- Germinal center formation
- Plasma cell differentiation

*Memory B cells and plasma cells:*
- Long-lived plasma cells in bone marrow
- Resistant to conventional immunosuppression
- Produce antibodies for years
- Require special approaches (bortezomib)

*T follicular helper cells (Tfh):*
- Specialized CD4+ T cells
- Help B cells in germinal centers
- Promote antibody production
- Therapeutic target for AMR

**Innate Immune System**

*NK cells in transplantation:*
- Missing self recognition (donor HLA mismatch)
- Can contribute to rejection
- Interact with antibodies (ADCC)
- Role in tolerance (licensing)

*Macrophages:*
- Important for chronic rejection
- Produce inflammatory cytokines
- Promote fibrosis
- Target for anti-fibrotic therapies

*Dendritic cells:*
- Bridge innate and adaptive immunity
- Migrate to lymph nodes
- Present antigen to T cells
- Can be tolerogenic or immunogenic

**Danger Signals and Innate Immunity**

*DAMPs (Damage-Associated Molecular Patterns):*
- Released from damaged cells
- HMGB1, ATP, DNA, heat shock proteins
- Activate innate immunity via TLRs
- Important in ischemia-reperfusion injury

*Impact on transplantation:*
- DAMPs from brain-dead donor
- Promote inflammation
- Enhance adaptive immune response
- Target for therapeutic intervention`,
      keyTerms: [
        { term: 'CD8+ T Cells', definition: 'Cytotoxic T lymphocytes that directly kill target cells expressing foreign HLA' },
        { term: 'CD4+ T Cells', definition: 'Helper T cells that coordinate immune responses and help B cells and CD8+ T cells' },
        { term: 'Co-stimulation', definition: 'Second signal required for T cell activation beyond T cell receptor engagement' },
        { term: 'Regulatory T Cells', definition: 'Specialized T cells that suppress immune responses and maintain tolerance' },
        { term: 'C4d', definition: 'Complement split product deposited in tissue, a marker of antibody-mediated rejection' }
      ],
      clinicalNotes: 'Belatacept blocks CD28-B7 co-stimulation; no nephrotoxicity but higher PTLD risk. Eculizumab blocks C5 for AMR prevention. FOXP3+ Tregs promote tolerance. Checkpoint inhibitors (PD-1 blockers) can cause transplant rejection. Long-lived plasma cells resist standard immunosuppression.',
    },
    5: {
      level: 5,
      summary: 'DAMPs, mixed chimerism, plasma cell biology, and biomarkers like dd-cfDNA inform emerging tolerance induction strategies and personalized immunosuppression.',
      explanation: `Transplant immunology at the molecular level reveals opportunities for tolerance induction and personalized medicine.

**Ischemia-Reperfusion Injury and Innate Activation**

*DAMPs (Damage-Associated Molecular Patterns):*
- HMGB1: Nuclear protein released during necrosis
- ATP: Extracellular ATP acts as danger signal
- Heat shock proteins: Induced by cellular stress
- DNA: Both host and mitochondrial

*Pattern Recognition Receptors:*
- TLR2, TLR4: Recognize DAMPs, activate NF-κB
- NLRP3 inflammasome: Activated by ATP, produces IL-1β
- RAGE: Receptor for advanced glycation end-products

*Downstream effects:*
- NF-κB activation → pro-inflammatory cytokines
- APC maturation → enhanced T cell activation
- Endothelial activation → leukocyte recruitment
- Amplifies adaptive immune response

*Therapeutic implications:*
- TLR inhibitors in development
- Anti-HMGB1 antibodies
- NLRP3 inhibitors
- Ischemic pre-conditioning

**Plasma Cell Biology and Persistence**

*Long-lived plasma cells:*
- Reside in survival niches (bone marrow)
- Express CD138, BLIMP-1
- Secrete antibodies for years
- Resistant to conventional immunosuppression
- Survival signals: APRIL, BAFF, IL-6, CXCL12

*Targeting plasma cells:*
- Bortezomib: Proteasome inhibitor, induces ER stress
- Daratumumab: Anti-CD38 antibody
- Anti-BCMA therapies
- APRIL/BAFF blockade

*Clinical applications:*
- Desensitization protocols
- Treatment of AMR
- Reduction of DSA levels

**Memory T Cell Biology**

*Tissue-resident memory T cells (TRM):*
- Reside in tissues (including grafts)
- Express CD69, CD103
- Provide rapid local response
- Do not recirculate
- Contribute to chronic rejection

*Stem cell memory T cells (TSCM):*
- Self-renewing
- Multipotent
- Long-lived
- Resistant to depletion
- May drive late rejection

*Therapeutic targeting:*
- Depleting antibodies (anti-CD3, anti-CD52)
- Can't eliminate all memory T cells
- Targeting survival pathways (JAK/STAT)

**Mixed Chimerism and Tolerance**

*Mechanisms:*
- Donor hematopoietic stem cells engraft
- Donor and recipient immune cells coexist
- Central deletion of donor-reactive T cells
- Peripheral tolerance mechanisms

*Clinical protocols:*
- Combined kidney and bone marrow transplant
- Non-myeloablative conditioning
- Donor-specific transfusion
- Some patients off immunosuppression

*Challenges:*
- Graft-vs-host disease risk
- Engraftment failure
- Need for HLA matching
- Complex protocols

**T Cell Receptor (TCR) Repertoire**

*Clonality in rejection:*
- Oligoclonal expansion in acute rejection
- Specific TCR Vβ usage
- Public TCR clonotypes across patients
- Biomarker potential

*Single-cell sequencing:*
- Identifies pathogenic clones
- Characterizes T cell states
- Guides personalized therapy
- Predicts rejection risk

**Non-HLA Antibodies**

*MICA antibodies:*
- MICA is induced by stress
- Expressed on endothelial cells
- Antibodies cause rejection
- Not detected by standard HLA testing

*Angiotensin II receptor antibodies:*
- Cause severe vascular rejection
- Associated with refractory rejection
- Require specialized testing

*Autoantibodies:*
- Anti-AT1R, anti-ETAR
- Contribute to chronic rejection
- May be triggered by inflammation

**Biomarkers of Rejection**

*Donor-derived cell-free DNA (dd-cfDNA):*
- Fragmented DNA from dying graft cells
- Detected in recipient blood
- Earlier than clinical dysfunction
- Quantitative marker of injury
- May distinguish rejection from other causes

*Gene expression profiling:*
- AlloMap: Heart transplant rejection rule-out
- kSORT: Kidney transplant rejection risk
- Peripheral blood monitoring
- Non-invasive

*Protein biomarkers:*
- Urinary CXCL9, CXCL10 (kidney)
- Serum amyloid A
- Troponin (heart)
- Donor-specific HLA antibodies

*Exosomes:*
- Carry proteins, RNA from cells
- Graft-derived exosomes in circulation
- Potential early marker of injury
- Characterize rejection type

**Computational Immunology**

*Systems biology approaches:*
- Network analysis of rejection pathways
- Identifies key nodes for intervention
- Predicts therapy response
- Personalizes immunosuppression

*Machine learning:*
- Predicts rejection risk
- Optimizes medication dosing
- Identifies patterns in complex data
- May enable tolerance prediction

**Future Directions**

*Gene therapy:*
- Promote tolerance (CTLA4-Ig expression)
- Block inflammation (IL-10, TGF-β)
- Local immunosuppression delivery

*Cellular therapies:*
- Treg expansion and infusion
- Mesenchymal stem cells (immunomodulatory)
- Tolerogenic dendritic cells
- Chimeric antigen receptor Tregs (CAR-Tregs)

*Nanotechnology:*
- Targeted drug delivery
- Reduced systemic toxicity
- Controlled release formulations

*Xenotransplantation:*
- Gene editing (CRISPR)
- Remove pig antigens
- Add human regulatory proteins
- Clinical trials underway`,
      keyTerms: [
        { term: 'DAMPs', definition: 'Damage-Associated Molecular Patterns - molecules released from damaged cells that trigger inflammation' },
        { term: 'Mixed Chimerism', definition: 'Coexistence of donor and recipient hematopoietic cells, associated with transplant tolerance' },
        { term: 'Anergy', definition: 'Functional unresponsiveness of T cells despite antigen recognition' },
        { term: 'Clonal Deletion', definition: 'Elimination of cells that react to specific antigens' },
        { term: 'Exhaustion', definition: 'Dysfunctional state of T cells after chronic antigen stimulation' }
      ],
      clinicalNotes: 'DAMPs from brain-dead donors enhance adaptive immunity. Long-lived plasma cells resist standard IS but respond to bortezomib. Mixed chimerism can enable tolerance. dd-cfDNA detects rejection earlier than clinical markers. Non-HLA antibodies (MICA, AT1R) cause refractory rejection.',
    },
  },

  media: [
    {
      id: 'rejection-mechanism',
      type: 'diagram',
      filename: 'transplant-rejection-mechanism.svg',
      title: 'Transplant Rejection Mechanisms',
      description: 'Diagram showing cellular and antibody-mediated rejection pathways',
    },
  ],
  citations: [
    {
      id: 'abbas-immunology',
      type: 'textbook',
      title: 'Cellular and Molecular Immunology',
      authors: ['Abbas AK', 'Lichtman AH', 'Pillai S'],
      source: 'Elsevier',
      chapter: 'Transplantation Immunology',
    },
  ],
  crossReferences: [
    { targetId: 'transplant-overview', targetType: 'concept', relationship: 'parent', label: 'Transplant Overview' },
    { targetId: 'donor-types', targetType: 'concept', relationship: 'related', label: 'Donor Types' },
  ],
  tags: {
    systems: ['immune', 'hematologic'],
    topics: ['immunology', 'transplantation', 'pathology'],
    keywords: ['rejection', 'HLA', 'antibodies', 'T cells', 'immunosuppression', 'tolerance'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
