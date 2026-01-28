import { EducationalContent } from '../../types';

export const vaccinationBasics: EducationalContent = {
  id: 'infectious-disease-vaccination-basics',
  type: 'concept',
  name: 'Vaccination Fundamentals',
  alternateNames: ['Immunization', 'Vaccines', 'Vaccine Science'],

  levels: {
    1: {
      level: 1,
      summary: 'Vaccines are medicines that teach your body how to fight specific germs so you do not get sick from them in the future.',
      explanation: `Vaccines are one of the most important medical discoveries in history. They work by showing your immune system what a disease looks like without making you seriously ill, so your body can remember and fight it later.

**How Vaccines Work:**
1. A vaccine contains pieces of a germ (or a weakened/killed version)
2. Your immune system recognizes it as foreign and attacks it
3. Special memory cells remember how to fight this germ
4. If you encounter the real disease later, your body can fight it quickly

**Types of Vaccines:**

1. **Live Vaccines**
   - Use weakened (attenuated) germs
   - Examples: MMR (measles, mumps, rubella), chickenpox
   - Very effective, usually lifelong protection
   - Not for people with weak immune systems

2. **Killed/Inactivated Vaccines**
   - Use dead germs
   - Examples: Flu shot, polio (IPV), hepatitis A
   - Safe for most people
   - May need booster shots

3. **Protein/Subunit Vaccines**
   - Use pieces of germs
   - Examples: Hepatitis B, HPV, acellular pertussis
   - Very safe, minimal side effects

4. **mRNA Vaccines**
   - Give instructions to make a protein
   - Examples: Some COVID-19 vaccines
   - Newer technology, very effective

**Why Vaccines Are Important:**
- Prevent serious diseases
- Protect people who cannot get vaccinated (herd immunity)
- Save millions of lives worldwide
- Prevent disability and suffering

**Vaccine Safety:**
- Extensively tested before approval
- Continued monitoring after release
- Side effects are usually mild (sore arm, low fever)
- Benefits far outweigh risks`,
      keyTerms: [
        { term: 'vaccine', definition: 'A medicine that helps your body fight disease' },
        { term: 'immune system', definition: 'Your body\'s defense against germs' },
        { term: 'herd immunity', definition: 'When enough people are vaccinated to protect everyone' },
        { term: 'booster', definition: 'An extra vaccine dose to keep protection strong' },
      ],
      analogies: [
        'A vaccine is like giving your immune system a wanted poster of a criminal - it learns what the bad guy looks like without meeting the actual criminal, so it can recognize and stop them later.',
        'Think of vaccines as training exercises for your body\'s army - practice fighting a weak enemy so you can defeat the real one.',
      ],
      examples: [
        'Smallpox vaccine eradicated the disease worldwide.',
        'Polio vaccine prevents paralysis in children.',
        'Flu vaccine is given yearly to match changing viruses.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vaccines stimulate adaptive immunity through antigen presentation, generating memory B and T cells that provide rapid, specific protection upon subsequent pathogen exposure.',
      explanation: `Vaccination harnesses the adaptive immune system to create long-lasting protection against infectious diseases through controlled exposure to antigens without causing illness.

**Immunology of Vaccination:**

*Primary Immune Response (After Vaccination):*
- Antigen-presenting cells (APCs) capture vaccine antigens
- APCs migrate to lymph nodes
- Activation of naive T-helper cells
- B-cell activation and antibody production (primarily IgM initially)
- Generation of memory B and T cells
- Takes 1-2 weeks for full response

*Secondary Immune Response (Upon Re-exposure):*
- Memory cells recognize pathogen immediately
- Rapid proliferation and differentiation
- High-affinity antibody production (IgG, IgA)
- Faster and stronger than primary response
- Often prevents disease entirely

*Types of Adaptive Immunity:*

1. **Humoral Immunity (B-cell mediated)**
   - Antibodies neutralize toxins and viruses
   - Opsonization for phagocytosis
   - Complement activation
   - Critical for extracellular pathogens

2. **Cell-Mediated Immunity (T-cell mediated)**
   - CD8+ cytotoxic T cells kill infected cells
   - CD4+ helper T cells coordinate response
   - Critical for intracellular pathogens

**Vaccine Types by Technology:**

*Live Attenuated Vaccines (LAV):*
- Weakened pathogen replicates poorly
- Strong cellular and humoral immunity
- Single or few doses needed
- Contraindicated in severe immunodeficiency
- Examples: MMR, varicella, yellow fever, intranasal flu

*Inactivated Vaccines:*
- Whole killed pathogen
- Safe for immunocompromised
- May require adjuvants
- Multiple doses needed
- Examples: Polio (IPV), hepatitis A, rabies

*Subunit/Recombinant/Conjugate:*
- Purified antigens or proteins
- Highly specific immunity
- Very safe
- Examples: Hepatitis B (recombinant), HPV, acellular pertussis

*Toxoid Vaccines:*
- Inactivated bacterial toxins
- Induces antitoxin antibodies
- Examples: Tetanus, diphtheria

*mRNA/DNA Vaccines:*
- Genetic instructions for antigen production
- Cells produce antigen temporarily
- Strong cellular response
- Examples: COVID-19 mRNA vaccines

**Vaccine Efficacy vs Effectiveness:**
- Efficacy: Protection in clinical trial
- Effectiveness: Protection in real-world use
- Herd immunity threshold varies by disease`,
      keyTerms: [
        { term: 'antigen', definition: 'Substance that triggers immune response' },
        { term: 'antibody', definition: 'Protein produced by B cells that binds specific antigens' },
        { term: 'memory cells', definition: 'Long-lived immune cells that remember pathogens' },
        { term: 'adjuvant', definition: 'Substance added to enhance immune response' },
        { term: 'attenuated', definition: 'Weakened pathogen that cannot cause disease in healthy people' },
      ],
      analogies: [
        'Memory B cells are like librarians who catalog books - they remember exactly where to find information when you need it again.',
      ],
      examples: [
        'The measles vaccine is 97% effective after two doses.',
        'Tetanus toxoid induces antibodies that bind and neutralize tetanus toxin.',
        'Pneumococcal conjugate vaccine reduces invasive disease by 90% in children.',
      ],
    },
    3: {
      level: 3,
      summary: 'Vaccine development involves preclinical testing, phased clinical trials, and post-marketing surveillance, with formulation considerations including adjuvants, preservatives, and delivery systems to optimize immunogenicity and safety.',
      explanation: `Modern vaccinology integrates immunology, molecular biology, and clinical research to develop effective vaccines, with rigorous safety evaluation and manufacturing considerations.

**Vaccine Development Process:**

*Preclinical:*
- In vitro testing
- Animal models for immunogenicity and safety
- Formulation optimization

*Phase I:*
- 20-100 healthy volunteers
- Safety and dosing
- Immunogenicity

*Phase II:*
- Hundreds of participants
- Efficacy assessment
- Optimal dosing regimen
- Expanded safety data

*Phase III:*
- Thousands of participants
- Randomized controlled trials
- Efficacy against disease
- Safety in larger population

*Phase IV (Post-marketing):*
- Large population surveillance
- Rare adverse event detection
- Real-world effectiveness
- Long-term safety monitoring

**Vaccine Components:**

*Antigens:*
- Whole organism (live attenuated or killed)
- Subunits (proteins, polysaccharides)
- Conjugates (polysaccharide linked to protein carrier)
- Virus-like particles (VLPs)
- Genetic material (mRNA, DNA)

*Adjuvants:*
- Aluminum salts (most common)
- MF59 (oil-in-water emulsion)
- AS01B (Shingrix)
- CpG oligonucleotides
- Mechanism: Depot effect, APC activation, cytokine induction

*Stabilizers and Preservatives:*
- Stabilizers: Sugars, proteins (prevent degradation)
- Preservatives: Thimerosal (rare now), 2-phenoxyethanol
- Antibiotics: Prevent bacterial contamination (neomycin, polymyxin)

**Special Vaccine Considerations:**

*Conjugate Vaccines:*
- Polysaccharides alone poorly immunogenic in infants
- Conjugation to protein carrier provides T-cell help
- Examples: Hib, pneumococcal, meningococcal

*Multivalent Vaccines:*
- Multiple serotypes in one vaccine
- Examples: 13-valent pneumococcal, 9-valent HPV
- Provides broader protection

*Combination Vaccines:*
- Multiple antigens in one injection
- Examples: DTaP, MMR, MMRV
- Improves compliance, reduces injections

**Correlates of Protection:**
- Antibody levels that predict immunity
- Varies by vaccine type
- Used for licensure and booster recommendations
- May not capture cellular immunity

**Vaccine Hesitancy:**
- Defined by WHO as top 10 global health threat
- Address through education and building trust
- Understand specific concerns
- Evidence-based communication`,
      keyTerms: [
        { term: 'immunogenicity', definition: 'Ability to induce immune response' },
        { term: 'conjugate vaccine', definition: 'Vaccine linking polysaccharide to protein carrier' },
        { term: 'VLP', definition: 'Virus-like particle - empty viral capsid without genetic material' },
        { term: 'depot effect', definition: 'Slow release of antigen at injection site' },
        { term: 'correlate of protection', definition: 'Immune marker associated with vaccine efficacy' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced vaccination strategies address immunization in special populations, vaccine storage and handling, adverse event recognition, and emerging vaccine technologies including personalized and therapeutic vaccines.',
      explanation: `Comprehensive vaccine programs require understanding of special population considerations, cold chain maintenance, adverse event management, and next-generation vaccine platforms.

**Special Populations:**

*Immunocompromised:*
- Avoid live vaccines (contraindicated)
- May have reduced response to inactivated vaccines
- Household contacts should be vaccinated
- Timing around immunosuppression
- Higher valency pneumococcal vaccines recommended

*Pregnancy:*
- Tdap each pregnancy (27-36 weeks)
- Influenza (inactivated)
- COVID-19 vaccines
- Avoid live vaccines
- Protects mother and infant (transplacental antibodies)

*Elderly:*
- Immunosenescence reduces response
- High-dose influenza vaccine
- Adjuvanted vaccines (Shingrix)
- Pneumococcal vaccines

*Travelers:*
- Routine vaccines up to date
- Destination-specific requirements
- Yellow fever, typhoid, Japanese encephalitis
- Timing considerations (some require multiple doses)

**Cold Chain Management:**
- Temperature monitoring from manufacture to administration
- Refrigerator: 2-8C (most vaccines)
- Freezer: -15 to -50C (varicella, MMRV)
- Ultra-cold: -60 to -80C (some COVID-19)
- Excursion management protocols
- Vaccine storage units vs household refrigerators

**Adverse Event Recognition:**

*Common Mild Reactions:*
- Local: Pain, erythema, swelling
- Systemic: Fever, malaise, myalgia
- Self-limited, 1-3 days

*Serious Adverse Events (Rare):*
- Anaphylaxis: Immediate, treat with epinephrine
- Syncope: Adolescents, observation period
- Guillain-Barre syndrome (influenza - very rare)
- Intussusception (rotavirus - rare)
- Vaccine safety monitoring: VAERS, VSD

*Contraindications:*
- Severe allergic reaction to prior dose
- Encephalopathy within 7 days of pertussis vaccine
- Severe immunodeficiency (for live vaccines)
- Current moderate/severe illness

**Emerging Technologies:**

*Therapeutic Vaccines:*
- Treat existing disease rather than prevent
- Cancer vaccines (Sipuleucel-T)
- HIV therapeutic vaccines (investigational)
- Allergy immunotherapy

*Personalized Vaccines:*
- Neoantigen cancer vaccines
- Individual tumor sequencing
- Autologous vaccine production

*Universal Vaccines:*
- Target conserved regions
- Universal influenza vaccine (goal)
- Pan-coronavirus vaccines (research)

*Mucosal Vaccines:*
- Oral: Polio (Sabin), typhoid, cholera
- Nasal: FluMist
- Induce mucosal IgA
- Mimic natural infection route`,
      keyTerms: [
        { term: 'immunosenescence', definition: 'Age-related decline in immune function' },
        { term: 'cold chain', definition: 'Temperature-controlled supply chain for vaccines' },
        { term: 'anaphylaxis', definition: 'Severe, life-threatening allergic reaction' },
        { term: 'VAERS', definition: 'Vaccine Adverse Event Reporting System' },
        { term: 'neoantigen', definition: 'Tumor-specific antigen from mutations' },
      ],
      clinicalNotes: 'Always screen for contraindications before vaccination. The 15-minute observation period after vaccination is important to detect immediate hypersensitivity reactions. Document lot numbers and injection sites for all vaccines given. Report serious adverse events to VAERS.',
    },
    5: {
      level: 5,
      summary: 'Expert vaccine implementation encompasses global immunization policy, mathematical modeling of disease dynamics, pandemic preparedness, and cutting-edge platforms including nucleic acid vaccines and structure-based antigen design.',
      explanation: `Advanced vaccinology integrates epidemiology, systems biology, and global health policy to address emerging infectious threats and optimize population-level protection.

**Mathematical Modeling:**

*Transmission Dynamics:*
- Basic reproduction number (R0)
- Herd immunity threshold = 1 - 1/R0
- Vaccine coverage targets
- Impact of vaccine efficacy and durability

*Cost-Effectiveness Analysis:*
- Quality-adjusted life years (QALYs)
- Cost per DALY averted
- Budget impact models
- Value of information analysis

*Pandemic Modeling:*
- Vaccine allocation strategies
- Priority group identification
- Impact of non-pharmaceutical interventions
- Variant emergence and immune escape

**Global Vaccine Policy:**

*WHO Strategic Objectives:*
- Vaccine Equity
- Disease elimination/eradication
- Outbreak preparedness
- Life-course immunization

*Gavi, The Vaccine Alliance:*
- Vaccine access in low-income countries
- New vaccine introduction
- Health systems strengthening
- Market shaping for vaccine affordability

*Eradication Programs:*
- Smallpox: Success (1980)
- Polio: Near eradication (endemic in 2 countries)
- Measles: Elimination goals
- Challenges: Vaccine hesitancy, conflict zones, hard-to-reach populations

**Nucleic Acid Vaccine Advances:**

*mRNA Vaccines:*
- Rapid development capability
- No cold chain requirements (second generation)
- Modified nucleosides improve stability
- Self-amplifying mRNA
- Applications: COVID-19, influenza, HIV, cancer

*DNA Vaccines:*
- Stable, no cold chain
- Lower immunogenicity historically
- Electroporation improves delivery
- Zydus Cadila COVID-19 DNA vaccine

**Structure-Based Vaccine Design:**

*Rational Antigen Design:*
- Cryo-EM for structure determination
- Stabilized prefusion conformations (RSV F)
- Computational protein design
- Epitope-focused immunogens (HIV)

*Reverse Vaccinology:*
- Genome sequencing to identify antigens
- MenB vaccine developed this way
- Accelerates vaccine discovery

**Pandemic Preparedness:**

*Prototype Pathogen Approach:*
- Study representative viruses
- Platform technologies
- Preclinical/clinical data generation

*Rapid Response:*
- 100-day vaccine development goal
- Platform manufacturing flexibility
- Surge capacity agreements
- Global coordination mechanisms

**Regulatory Science:**

*Accelerated Approval Pathways:*
- Emergency use authorization
- Adaptive platform trials
- Immunobridging
- Real-world evidence

*Post-Market Surveillance:*
- Signal detection in large databases
- Causal inference methods
- Benefit-risk assessment
- Communication of emerging safety data`,
      keyTerms: [
        { term: 'R0', definition: 'Basic reproduction number - average secondary infections per case' },
        { term: 'herd immunity threshold', definition: 'Vaccination coverage needed to stop transmission' },
        { term: 'QALY', definition: 'Quality-adjusted life year - health economic measure' },
        { term: 'cryo-EM', definition: 'Cryo-electron microscopy for structure determination' },
        { term: 'immunobridging', definition: 'Inferring efficacy from immune response data' },
      ],
      clinicalNotes: 'The COVID-19 pandemic demonstrated both the power of modern vaccine platforms (mRNA) and global inequities in vaccine access. Future pandemic preparedness requires sustained investment in platform technologies, manufacturing capacity, and global distribution mechanisms. Structure-based vaccine design is transforming vaccinology, enabling rational development of previously difficult targets like RSV and potentially HIV.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['infectious', 'immune'],
    topics: ['vaccines', 'prevention', 'public-health'],
    keywords: ['vaccination', 'immunization', 'herd immunity', 'vaccine safety', 'mRNA vaccines'],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default vaccinationBasics;
