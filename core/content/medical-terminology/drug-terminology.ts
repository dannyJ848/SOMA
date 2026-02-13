/**
 * Drug Terminology Content
 *
 * Medical vocabulary for pharmacological terms:
 * - Drug naming conventions
 * - Drug classifications by suffix
 * - Pharmacokinetic terms
 * - Pharmacodynamic terms
 * - Route of administration terms
 */

import { EducationalContent } from "../types";

// ============================================================================
// DRUG SUFFIX EDUCATIONAL CONTENT
// ============================================================================

export const drugSuffixContent: EducationalContent = {
  id: "drug-suffix-content",
  type: "concept",
  name: "Drug Naming Suffixes",
  alternateNames: ["Medication Suffixes", "Pharmacological Naming Conventions"],

  levels: {
    1: {
      level: 1,
      summary: "Drug names often end with special letters that tell us what kind of medicine it is.",
      explanation:
        "Just like how words like \"running\" and \"jumping\" end in \"-ing\" to show action, drug names have special endings too. These endings help doctors and pharmacists know what kind of medicine it is. For example, medicines ending in \"-cillin\" are antibiotics that fight germs, like penicillin and amoxicillin. Medicines ending in \"-olol\" help slow down your heart if it beats too fast.",
      keyTerms: [
        {
          term: "-cillin",
          definition: "Ending for antibiotics in the penicillin family",
        },
        {
          term: "-olol",
          definition: "Ending for heart medicines called beta blockers",
        },
        {
          term: "-statin",
          definition: "Ending for cholesterol-lowering medicines",
        },
      ],
      analogies: [
        "Drug suffixes are like last names for medicine families - they tell you which family the drug belongs to.",
        "It is similar to how animals have family names: lions, tigers, and leopards are all cats.",
      ],
    },
    2: {
      level: 2,
      summary: "Drug suffixes indicate the drug class, mechanism, or therapeutic category.",
      explanation:
        "Pharmaceutical naming follows conventions established by organizations like the World Health Organization. The suffix (ending) of a generic drug name usually indicates its drug class. For instance, \"-pril\" drugs like lisinopril and enalapril are ACE inhibitors used for blood pressure. \"-azole\" drugs like fluconazole and ketoconazole are antifungal medications. Learning these suffixes helps you quickly identify what a medication does.",
      keyTerms: [
        {
          term: "-pril",
          definition: "ACE inhibitors for blood pressure",
        },
        {
          term: "-sartan",
          definition: "Angiotensin receptor blockers for blood pressure",
        },
        {
          term: "-azole",
          definition: "Antifungal medications",
        },
        {
          term: "-mycin",
          definition: "Antibiotics derived from Streptomyces bacteria",
        },
      ],
      analogies: [
        "Drug suffixes work like file extensions on a computer - .jpg means image, .mp3 means audio, and -statin means cholesterol medicine.",
      ],
    },
    3: {
      level: 3,
      summary: "Drug nomenclature uses systematic suffixes to classify medications by mechanism of action and therapeutic class.",
      explanation:
        "The United States Adopted Names (USAN) Council establishes drug naming conventions. Suffixes reflect pharmacological mechanisms: \"-olol\" indicates beta-adrenergic blockers, \"-dipine\" indicates calcium channel blockers, and \"-prazole\" indicates proton pump inhibitors. Some suffixes have subsegments: \"-mab\" indicates monoclonal antibodies, with further prefixes indicating the target (e.g., \"-ximab\" for chimeric antibodies, \"-umab\" for fully human antibodies). Understanding these conventions aids in medication identification and pharmacology education.",
      keyTerms: [
        {
          term: "-dipine",
          definition: "Dihydropyridine calcium channel blockers (amlodipine, nifedipine)",
        },
        {
          term: "-prazole",
          definition: "Proton pump inhibitors (omeprazole, pantoprazole)",
        },
        {
          term: "-mab",
          definition: "Monoclonal antibodies",
        },
        {
          term: "-vir",
          definition: "Antiviral medications",
        },
      ],
      analogies: [
        "Drug suffixes are like chemical family trees - they show lineage and relationship between medications.",
      ],
    },
    4: {
      level: 4,
      summary: "Pharmaceutical nomenclature systems use structured naming conventions with stems indicating mechanism, target, and origin.",
      explanation:
        "Drug naming follows international nomenclature systems (INN, USAN, BAN). Stems are assigned based on pharmacological activity, chemical structure, or therapeutic indication. Monoclonal antibody nomenclature includes subsegments: target (-o- for bone, -li- for immunomodulatory, -tu- for tumor), source (-xi- chimeric, -zu- humanized, -u- human), and suffix (-mab). Small molecule kinase inhibitors use \"-tinib\" with prefixes indicating target kinase. These systematic approaches facilitate drug identification, reduce medication errors, and support pharmacovigilance.",
      keyTerms: [
        {
          term: "-tinib",
          definition: "Tyrosine kinase inhibitors (imatinib, erlotinib)",
        },
        {
          term: "-ciclib",
          definition: "Cyclin-dependent kinase inhibitors",
        },
        {
          term: "-parib",
          definition: "PARP inhibitors for cancer therapy",
        },
        {
          term: "-glumide",
          definition: "GLP-1 receptor agonists for diabetes",
        },
      ],
      clinicalNotes: "Recognizing drug suffixes aids in anticipating side effects, drug interactions, and therapeutic monitoring requirements.",
    },
    5: {
      level: 5,
      summary: "International nonproprietary names utilize systematic stems reflecting pharmacodynamic targets, biosynthetic origins, and structural classifications.",
      explanation:
        "The WHO INN Programme coordinates global drug naming. Stem assignment considers mechanism specificity, structural features, and therapeutic application. Biologics nomenclature includes complex subsegments: for monoclonal antibodies, the target subsegment (-ba- bacterial, -ci- cardiovascular, -ki- interleukin, -ne- neural, -so- bone), source subsegment reflecting chimerism and humanization, and glycosylation considerations. Biosimilar naming includes unique suffixes for traceability. Emerging stem categories address novel mechanisms: \"-tide\" for peptides, \"-mer\" for polymers, \"-gene\" for gene therapy products. International harmonization efforts address nomenclature for cell therapies and combination products.",
      keyTerms: [
        {
          term: "-gene",
          definition: "Gene therapy products (e.g., voretigene)",
        },
        {
          term: "-cel",
          definition: "Cell therapy products (e.g., tisagenlecleucel)",
        },
        {
          term: "-tide",
          definition: "Peptide-based therapeutics",
        },
        {
          term: "-mer",
          definition: "Polymeric therapeutics",
        },
      ],
      clinicalNotes: "Nomenclature evolution reflects therapeutic innovation; pharmacovigilance systems use naming conventions for signal detection and safety monitoring.",
    },
  },

  media: [],
  citations: [
    {
      id: "who-inn",
      type: "website",
      title: "WHO International Nonproprietary Names Programme",
      source: "World Health Organization",
      url: "https://www.who.int/teams/health-product-and-policy-standards/inn",
    },
  ],
  crossReferences: [],
  tags: {
    topics: ["pharmacology", "drug naming", "nomenclature"],
    keywords: ["drug suffix", "medication naming", "pharmaceutical nomenclature"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// PHARMACOKINETICS EDUCATIONAL CONTENT
// ============================================================================

export const pharmacokineticsContent: EducationalContent = {
  id: "pharmacokinetics-content",
  type: "concept",
  name: "Pharmacokinetics",
  alternateNames: ["Drug Absorption and Distribution", "ADME"],

  levels: {
    1: {
      level: 1,
      summary: "Pharmacokinetics is how your body handles medicine - how it gets in, moves around, and leaves.",
      explanation:
        "When you take medicine, your body does four things with it: it absorbs the medicine (takes it in), distributes it (moves it around to where it is needed), metabolizes it (breaks it down), and eliminates it (gets rid of it). Think of it like food - your body takes in food, sends nutrients where they are needed, processes it, and then removes what is left over. Different medicines work at different speeds because of how your body handles them.",
      keyTerms: [
        {
          term: "Absorption",
          definition: "How medicine gets into your blood",
        },
        {
          term: "Distribution",
          definition: "How medicine travels through your body",
        },
        {
          term: "Elimination",
          definition: "How your body gets rid of medicine",
        },
      ],
      analogies: [
        "Medicine moving through your body is like a letter being delivered: it gets picked up (absorbed), sorted and transported (distributed), and eventually delivered or returned (eliminated).",
      ],
    },
    2: {
      level: 2,
      summary: "Pharmacokinetics describes ADME: Absorption, Distribution, Metabolism, and Elimination of drugs.",
      explanation:
        "ADME is a helpful acronym for remembering the four pharmacokinetic processes. Absorption describes how a drug enters the bloodstream - pills must dissolve and cross the intestinal wall, while injections go directly into blood. Distribution explains how drugs travel to tissues throughout the body. Metabolism (mainly in the liver) converts drugs into different forms. Elimination removes drugs through the kidneys (urine) or liver (bile). The half-life tells us how long it takes for half the drug to be eliminated.",
      keyTerms: [
        {
          term: "Half-life",
          definition: "Time for drug concentration to decrease by half",
        },
        {
          term: "Metabolism",
          definition: "Chemical transformation of drugs, mainly in liver",
        },
        {
          term: "Bioavailability",
          definition: "Percentage of drug that reaches the bloodstream",
        },
      ],
      analogies: [
        "The liver is like a recycling center - it breaks down drugs into smaller pieces that can be eliminated.",
      ],
    },
    3: {
      level: 3,
      summary: "Pharmacokinetics quantifies drug concentration changes over time through absorption, distribution, metabolism, and excretion.",
      explanation:
        "Pharmacokinetic parameters describe drug behavior mathematically. Bioavailability (F) represents the fraction of administered dose reaching systemic circulation; IV drugs have 100% bioavailability while oral drugs undergo first-pass metabolism. Volume of distribution (Vd) indicates tissue binding; high Vd drugs are extensively distributed. Clearance (CL) measures the volume of plasma cleared per unit time. Half-life relates to Vd and CL by the equation: t1/2 = 0.693 x Vd/CL. These parameters guide dosing regimens to achieve therapeutic concentrations.",
      keyTerms: [
        {
          term: "First-pass metabolism",
          definition: "Drug metabolism before reaching systemic circulation",
        },
        {
          term: "Volume of distribution",
          definition: "Theoretical volume containing total drug at plasma concentration",
        },
        {
          term: "Clearance",
          definition: "Volume of plasma cleared of drug per unit time",
        },
        {
          term: "Steady state",
          definition: "Equilibrium when drug input equals elimination",
        },
      ],
      analogies: [
        "Volume of distribution is like asking how big a room would need to be if the drug were evenly spread at its blood concentration.",
      ],
    },
    4: {
      level: 4,
      summary: "Pharmacokinetic modeling describes drug disposition using compartmental analysis, enabling therapeutic drug monitoring and individualized dosing.",
      explanation:
        "Compartmental models represent the body as one or more kinetically homogeneous compartments. One-compartment models assume instantaneous distribution; two-compartment models include a peripheral (tissue) compartment with slower equilibration. Nonlinear (Michaelis-Menten) kinetics occur when metabolic enzymes saturate. Population pharmacokinetics uses mixed-effects modeling to identify sources of variability. Therapeutic drug monitoring applies PK principles to adjust doses, particularly for drugs with narrow therapeutic indices like vancomycin, aminoglycosides, and phenytoin.",
      keyTerms: [
        {
          term: "Compartmental model",
          definition: "Mathematical representation of drug distribution in body compartments",
        },
        {
          term: "Michaelis-Menten kinetics",
          definition: "Saturable (nonlinear) drug metabolism",
        },
        {
          term: "Therapeutic drug monitoring",
          definition: "Measuring drug levels to optimize dosing",
        },
        {
          term: "AUC",
          definition: "Area under the concentration-time curve",
        },
      ],
      clinicalNotes: "Renal and hepatic impairment alter pharmacokinetics; dose adjustments based on eGFR and Child-Pugh scores are essential for affected drugs.",
    },
    5: {
      level: 5,
      summary: "Advanced pharmacokinetic analysis employs physiologically-based models, population approaches, and model-informed precision dosing for individualized therapeutics.",
      explanation:
        "Physiologically-based pharmacokinetic (PBPK) models incorporate anatomical, physiological, and biochemical parameters to predict drug disposition. These models integrate tissue-specific blood flow, partition coefficients, transporter expression, and enzyme ontogeny. Population PK (PopPK) identifies covariates explaining interindividual variability; Bayesian approaches incorporate prior information with patient-specific data. Model-informed precision dosing (MIPD) uses real-time PK data to optimize individual regimens. Emerging applications include prediction of drug-drug interactions, pediatric extrapolation, and pharmacokinetics in special populations (obesity, critical illness, ECMO).",
      keyTerms: [
        {
          term: "PBPK modeling",
          definition: "Physiologically-based pharmacokinetic modeling using tissue-specific parameters",
        },
        {
          term: "Population pharmacokinetics",
          definition: "Statistical modeling of PK variability across populations",
        },
        {
          term: "Bayesian forecasting",
          definition: "Probabilistic dose optimization using prior and observed data",
        },
        {
          term: "Target attainment",
          definition: "Probability of achieving therapeutic PK/PD targets",
        },
      ],
      clinicalNotes: "PBPK models support regulatory submissions for DDI prediction, pediatric extrapolation, and formulation development; MIPD improves outcomes for antimicrobials and immunosuppressants.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ["pharmacology", "pharmacokinetics", "drug metabolism"],
    keywords: ["ADME", "half-life", "bioavailability", "clearance"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// ROUTES OF ADMINISTRATION EDUCATIONAL CONTENT
// ============================================================================

export const routesOfAdministrationContent: EducationalContent = {
  id: "routes-administration-content",
  type: "concept",
  name: "Routes of Drug Administration",
  alternateNames: ["Drug Delivery Routes", "Administration Routes"],

  levels: {
    1: {
      level: 1,
      summary: "Medicines can be given in different ways - by mouth, by injection, on your skin, or other routes.",
      explanation:
        "There are many ways to get medicine into your body. The most common way is by mouth (swallowing pills or liquid). Injections put medicine directly into your body using a needle. Creams and patches put medicine through your skin. Inhalers let you breathe medicine into your lungs. Eye drops put medicine in your eyes. The way you take medicine depends on what it is treating and how fast it needs to work.",
      keyTerms: [
        {
          term: "Oral",
          definition: "Taking medicine by mouth",
        },
        {
          term: "Injection",
          definition: "Giving medicine with a needle",
        },
        {
          term: "Topical",
          definition: "Putting medicine on the skin",
        },
      ],
      analogies: [
        "Different routes are like different doors to enter a building - the front door (oral), the side door (injection), or through the window (topical).",
      ],
    },
    2: {
      level: 2,
      summary: "Drug administration routes include enteral (through the GI tract), parenteral (by injection), and topical (on body surfaces).",
      explanation:
        "Enteral routes include oral (by mouth), sublingual (under the tongue), and rectal. Parenteral routes bypass the GI tract and include intravenous (IV, into a vein), intramuscular (IM, into muscle), and subcutaneous (SC, under the skin). Topical routes include transdermal (through skin), ophthalmic (eyes), otic (ears), and inhalation (into lungs). The route affects how quickly and completely the drug is absorbed. IV gives the fastest effect while oral is most convenient but has variable absorption.",
      keyTerms: [
        {
          term: "Intravenous (IV)",
          definition: "Injection directly into a vein for immediate effect",
        },
        {
          term: "Intramuscular (IM)",
          definition: "Injection into muscle for slower absorption",
        },
        {
          term: "Subcutaneous (SC)",
          definition: "Injection under the skin",
        },
        {
          term: "Sublingual",
          definition: "Under the tongue for rapid absorption",
        },
      ],
      analogies: [
        "IV is like express delivery - the drug goes straight into circulation. Oral is like regular mail - it takes longer and some might get lost along the way.",
      ],
    },
    3: {
      level: 3,
      summary: "Administration routes are selected based on drug properties, desired onset, bioavailability requirements, and patient factors.",
      explanation:
        "Route selection depends on drug physicochemical properties (solubility, stability), pharmacokinetic goals (rapid vs. sustained effect), and clinical context. Oral administration offers convenience but subjects drugs to first-pass metabolism, reducing bioavailability. Sublingual and buccal routes avoid first-pass for lipophilic drugs. Parenteral routes ensure complete bioavailability: IV for emergency situations requiring immediate effect, IM for depot formulations, SC for self-administration of biologics. Inhalation delivers drugs directly to the respiratory system for local or systemic effects. Transdermal patches provide sustained drug delivery avoiding GI issues.",
      keyTerms: [
        {
          term: "Buccal",
          definition: "Administration through the cheek mucosa",
        },
        {
          term: "Transdermal",
          definition: "Drug delivery through the skin for systemic effect",
        },
        {
          term: "Inhalation",
          definition: "Drug delivery to or through the lungs",
        },
        {
          term: "Depot injection",
          definition: "Formulation designed for slow, prolonged release from injection site",
        },
      ],
      analogies: [
        "Choosing a route is like choosing transportation - plane (IV) is fastest, car (oral) is convenient, bicycle (transdermal) is slow but steady.",
      ],
    },
    4: {
      level: 4,
      summary: "Route optimization considers pharmacokinetic profiles, formulation technology, patient adherence, and therapeutic objectives.",
      explanation:
        "Advanced formulations modify drug release kinetics: extended-release oral preparations reduce dosing frequency, liposomal formulations alter tissue distribution, and prodrugs improve absorption or targeting. Specialized routes include intrathecal (into spinal fluid for CNS delivery), intraosseous (emergency vascular access), and intranasal (for systemic or CNS effect). Implantable devices provide long-term controlled release. Patient factors affecting route selection include NPO status, GI function, cognitive ability, and self-administration capability. Route-specific complications include injection site reactions, infusion-related reactions, and local tissue damage.",
      keyTerms: [
        {
          term: "Intrathecal",
          definition: "Injection into the cerebrospinal fluid",
        },
        {
          term: "Intraosseous",
          definition: "Emergency infusion into bone marrow",
        },
        {
          term: "Prodrug",
          definition: "Inactive precursor converted to active drug in body",
        },
        {
          term: "Extended-release",
          definition: "Formulation designed for prolonged drug release",
        },
      ],
      clinicalNotes: "Route conversion requires bioavailability adjustment; IV to oral conversion often uses different doses due to first-pass metabolism.",
    },
    5: {
      level: 5,
      summary: "Novel delivery systems leverage nanotechnology, targeted delivery, and programmable release to optimize therapeutic indices and enable precision medicine.",
      explanation:
        "Advanced drug delivery employs nanoparticles, liposomes, and polymer conjugates for targeted delivery and altered pharmacokinetics. Antibody-drug conjugates combine targeting specificity with cytotoxic payloads. Implantable pump systems enable programmable intrathecal or intravenous delivery. Gene therapy requires specialized vectors (viral, lipid nanoparticle) for cellular delivery. Microencapsulation technologies enable oral delivery of biologics by protecting against GI degradation. Stimuli-responsive systems release drugs in response to pH, temperature, or enzyme presence. These technologies address challenges of poor bioavailability, off-target toxicity, and patient adherence while enabling new therapeutic modalities.",
      keyTerms: [
        {
          term: "Nanoparticle delivery",
          definition: "Drug encapsulation in nanoscale carriers for targeted delivery",
        },
        {
          term: "Antibody-drug conjugate",
          definition: "Targeted delivery of cytotoxic agents via antibody binding",
        },
        {
          term: "Lipid nanoparticle",
          definition: "Carrier system for nucleic acid therapeutics",
        },
        {
          term: "Stimuli-responsive release",
          definition: "Drug release triggered by environmental conditions",
        },
      ],
      clinicalNotes: "mRNA vaccines utilize lipid nanoparticle delivery; CAR-T cells represent ex vivo modified cell therapy; emerging implantable systems enable closed-loop drug delivery.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ["pharmacology", "drug administration", "drug delivery"],
    keywords: ["routes of administration", "IV", "oral", "injection"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// EXPORT MODULE
// ============================================================================

export const drugTerminologyModule = {
  id: "drug-terminology",
  name: "Drug Terminology",
  description:
    "Educational content for pharmacological terminology including drug naming conventions, pharmacokinetics, and routes of administration",
  content: [drugSuffixContent, pharmacokineticsContent, routesOfAdministrationContent],
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
};

export default drugTerminologyModule;
