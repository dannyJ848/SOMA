/**
 * Common Abbreviations Content
 *
 * Medical abbreviations and acronyms:
 * - Prescription abbreviations
 * - Documentation abbreviations
 * - Laboratory abbreviations
 * - Clinical abbreviations
 * - Do-not-use abbreviations
 */

import { EducationalContent } from "../types";

// ============================================================================
// PRESCRIPTION ABBREVIATIONS EDUCATIONAL CONTENT
// ============================================================================

export const prescriptionAbbreviationsContent: EducationalContent = {
  id: "prescription-abbreviations-content",
  type: "concept",
  name: "Prescription Abbreviations",
  alternateNames: ["Rx Abbreviations", "Medication Abbreviations"],

  levels: {
    1: {
      level: 1,
      summary: "Doctors use short letters and symbols on prescriptions to tell the pharmacist how to prepare your medicine.",
      explanation:
        "When doctors write prescriptions, they use special shortcuts called abbreviations. These save time and space. \"Rx\" means prescription. \"PO\" means by mouth. \"BID\" means twice a day. \"PRN\" means take only when needed. Pharmacists learn these abbreviations so they can give you the right medicine with the right instructions. Some abbreviations can be confusing, so doctors are encouraged to write things out clearly.",
      keyTerms: [
        {
          term: "Rx",
          definition: "Prescription",
        },
        {
          term: "PO",
          definition: "By mouth (per os)",
        },
        {
          term: "PRN",
          definition: "As needed (pro re nata)",
        },
      ],
      analogies: [
        "Prescription abbreviations are like texting shortcuts - LOL means laugh out loud, and BID means twice a day.",
      ],
    },
    2: {
      level: 2,
      summary: "Prescription abbreviations indicate dosing frequency, route of administration, and timing.",
      explanation:
        "Prescription abbreviations come from Latin words. Frequency abbreviations: QD (once daily), BID (twice daily), TID (three times daily), QID (four times daily), Q4H (every 4 hours). Route abbreviations: PO (by mouth), IV (intravenous), IM (intramuscular), SC/SQ (subcutaneous), PR (rectally). Timing abbreviations: AC (before meals), PC (after meals), HS (at bedtime). Some abbreviations are on the \"do not use\" list because they cause errors - for example, QD can be confused with QID.",
      keyTerms: [
        {
          term: "QD",
          definition: "Once daily (quaque die) - on do-not-use list",
        },
        {
          term: "BID",
          definition: "Twice daily (bis in die)",
        },
        {
          term: "TID",
          definition: "Three times daily (ter in die)",
        },
        {
          term: "AC/PC",
          definition: "Before meals / After meals (ante cibum / post cibum)",
        },
      ],
      analogies: [
        "Frequency abbreviations count doses like clock chimes - BID is two chimes a day, TID is three.",
      ],
    },
    3: {
      level: 3,
      summary: "Standardized prescription abbreviations follow conventions with known error-prone abbreviations flagged for avoidance.",
      explanation:
        "The Joint Commission and ISMP (Institute for Safe Medication Practices) maintain lists of error-prone abbreviations. Prohibited abbreviations include: U (write \"units\"), IU (write \"international units\"), QD/QOD (write \"daily\" or \"every other day\"), trailing zero (write \"1 mg\" not \"1.0 mg\"), lack of leading zero (write \"0.1 mg\" not \".1 mg\"). MS, MSO4, MgSO4 are prohibited because morphine sulfate and magnesium sulfate can be confused. Using computerized provider order entry (CPOE) with standard terminology reduces abbreviation-related errors.",
      keyTerms: [
        {
          term: "Error-prone abbreviation",
          definition: "Abbreviation known to cause medication errors",
        },
        {
          term: "Leading zero",
          definition: "Zero before decimal point (0.5 mg) - required for safety",
        },
        {
          term: "Trailing zero",
          definition: "Zero after decimal (1.0 mg) - prohibited, write as 1 mg",
        },
        {
          term: "ISMP",
          definition: "Institute for Safe Medication Practices",
        },
      ],
      analogies: [
        "The do-not-use list is like a recall notice - these abbreviations were found to be dangerous and taken out of circulation.",
      ],
    },
    4: {
      level: 4,
      summary: "Medication safety initiatives promote standardized terminology while balancing efficiency with error prevention.",
      explanation:
        "Medication error prevention extends beyond abbreviation avoidance to include tall man lettering (HYDROmorphone vs HYDROcodone), barcode scanning, and clinical decision support. Sig codes in pharmacy systems translate abbreviations into patient-friendly directions. E-prescribing reduces handwriting-related errors but introduces new risks (wrong patient selection, auto-complete errors). High-alert medications require additional safeguards regardless of abbreviation use. International variation in abbreviations exists; travelers and international medical graduates must learn local conventions.",
      keyTerms: [
        {
          term: "Tall man lettering",
          definition: "Capital letters highlighting differences between look-alike drug names",
        },
        {
          term: "Sig code",
          definition: "Standardized instruction code translated to patient directions",
        },
        {
          term: "High-alert medication",
          definition: "Drug with heightened risk of harm if used in error",
        },
        {
          term: "E-prescribing",
          definition: "Electronic prescription transmission to pharmacy",
        },
      ],
      clinicalNotes: "Verbal orders should include spelling and indication; read-back verification reduces transcription errors. CPOE with embedded decision support is the standard for safe prescribing.",
    },
    5: {
      level: 5,
      summary: "Standardized medication terminology integrates with clinical informatics infrastructure to support safe prescribing across care transitions.",
      explanation:
        "RxNorm provides normalized drug naming conventions linking brand names, generic names, and ingredients. National Drug Code (NDC) numbers uniquely identify drug products. Structured sig implementation translates prescriber intent into discrete data elements rather than free text, enabling clinical decision support. Medication reconciliation across transitions requires terminology mapping between systems. SMART on FHIR applications enable portable clinical decision support. Natural language processing extracts medication information from unstructured notes. International standards (IDMP, ISO medication standards) support global pharmacovigilance.",
      keyTerms: [
        {
          term: "RxNorm",
          definition: "Standardized nomenclature for clinical drugs",
        },
        {
          term: "NDC",
          definition: "National Drug Code - unique product identifier",
        },
        {
          term: "Structured sig",
          definition: "Discrete data representation of medication instructions",
        },
        {
          term: "IDMP",
          definition: "Identification of Medicinal Products standards",
        },
      ],
      clinicalNotes: "Interoperability standards enable medication history exchange; clinical pharmacist review at transitions identifies discrepancies. Precision dosing uses structured data for individualized regimens.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ["abbreviations", "prescriptions", "medication safety"],
    keywords: ["prescription abbreviations", "medication errors", "safe prescribing"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// CLINICAL DOCUMENTATION ABBREVIATIONS EDUCATIONAL CONTENT
// ============================================================================

export const documentationAbbreviationsContent: EducationalContent = {
  id: "documentation-abbreviations-content",
  type: "concept",
  name: "Clinical Documentation Abbreviations",
  alternateNames: ["Chart Abbreviations", "Medical Record Abbreviations"],

  levels: {
    1: {
      level: 1,
      summary: "Healthcare workers use abbreviations when writing notes about patients to save time.",
      explanation:
        "When doctors and nurses write about patients, they use short forms for common words. \"Pt\" means patient. \"Hx\" means history (your past health information). \"Dx\" means diagnosis (what is wrong). \"Tx\" means treatment. \"SOB\" means shortness of breath (not a bad word!). \"N/V\" means nausea and vomiting. These abbreviations help healthcare workers communicate quickly when writing notes.",
      keyTerms: [
        {
          term: "Pt",
          definition: "Patient",
        },
        {
          term: "Hx",
          definition: "History",
        },
        {
          term: "Dx",
          definition: "Diagnosis",
        },
        {
          term: "Tx",
          definition: "Treatment",
        },
      ],
      analogies: [
        "Medical abbreviations are like the shorthand reporters use - they capture information quickly so it can be reviewed later.",
      ],
    },
    2: {
      level: 2,
      summary: "Clinical abbreviations cover history, physical exam findings, assessments, and plans.",
      explanation:
        "Documentation abbreviations serve different purposes. History abbreviations: CC (chief complaint), HPI (history of present illness), PMH (past medical history), PSH (past surgical history), FH (family history), SH (social history). Physical exam: HEENT (head, eyes, ears, nose, throat), RRR (regular rate and rhythm for heart), CTA (clear to auscultation for lungs), NKDA (no known drug allergies). Assessment/Plan: A&P (assessment and plan), f/u (follow up), RTC (return to clinic).",
      keyTerms: [
        {
          term: "HPI",
          definition: "History of present illness",
        },
        {
          term: "PMH",
          definition: "Past medical history",
        },
        {
          term: "HEENT",
          definition: "Head, eyes, ears, nose, and throat exam",
        },
        {
          term: "NKDA",
          definition: "No known drug allergies",
        },
      ],
      analogies: [
        "The medical note structure is like a recipe format - there are standard sections (ingredients, steps) with their own abbreviations.",
      ],
    },
    3: {
      level: 3,
      summary: "Standardized documentation abbreviations support efficient communication while institution-specific conventions require local learning.",
      explanation:
        "Common abbreviations are generally understood across healthcare settings, but variation exists. Some abbreviations have multiple meanings: \"MS\" could mean morphine sulfate, magnesium sulfate, mental status, multiple sclerosis, or mitral stenosis - context determines meaning. Specialty-specific abbreviations may be unfamiliar outside that specialty. Quality improvement initiatives promote expanded abbreviations to reduce ambiguity. Electronic health records often expand abbreviations automatically. Documentation serves legal, communication, and billing purposes - clarity supports all three functions.",
      keyTerms: [
        {
          term: "Context-dependent abbreviation",
          definition: "Abbreviation with different meanings in different situations",
        },
        {
          term: "WNL",
          definition: "Within normal limits (may also mean \"we never looked\")",
        },
        {
          term: "NAD",
          definition: "No acute distress (or no apparent distress)",
        },
        {
          term: "A&Ox3",
          definition: "Alert and oriented to person, place, and time",
        },
      ],
      analogies: [
        "Context-dependent abbreviations are like homonyms in language - \"bank\" means different things when talking about rivers versus money.",
      ],
    },
    4: {
      level: 4,
      summary: "Documentation quality initiatives balance abbreviation efficiency with standardization and electronic health record capabilities.",
      explanation:
        "Meaningful use and documentation improvement programs have influenced abbreviation practices. Problem lists use standardized terminology (SNOMED CT) rather than abbreviations. Clinical note templates incorporate structured data entry reducing reliance on free-text abbreviations. Copy-forward and cloned documentation raise quality concerns. Natural language processing can extract clinical meaning from abbreviated text but may misinterpret ambiguous abbreviations. Audit trails document author identity and modification history. Medical-legal considerations favor clarity; expert witnesses may be asked to interpret ambiguous documentation.",
      keyTerms: [
        {
          term: "SNOMED CT",
          definition: "Systematized Nomenclature of Medicine - Clinical Terms",
        },
        {
          term: "Copy-forward",
          definition: "Carrying documentation from previous note (quality concern)",
        },
        {
          term: "Structured data entry",
          definition: "Documentation using discrete, coded elements",
        },
        {
          term: "Audit trail",
          definition: "Record of documentation access and modifications",
        },
      ],
      clinicalNotes: "Attendings must personally document key elements; resident notes require attestation. Copy-forward documentation must be updated to reflect current findings.",
    },
    5: {
      level: 5,
      summary: "Clinical documentation informatics integrates natural language processing with standardized terminologies for quality measurement and secondary use.",
      explanation:
        "NLP pipelines extract clinical concepts from narrative text, mapping abbreviations to standard terminologies. Clinical concept extraction enables electronic clinical quality measures (eCQMs), population health analytics, and research. The UMLS (Unified Medical Language System) provides terminology mapping across vocabularies. Documentation burden reduction initiatives explore ambient clinical intelligence (speech-to-text with clinical understanding), smart phrases, and AI-assisted documentation. Regulatory requirements (21st Century Cures Act information blocking rules) influence documentation accessibility. International documentation standards support care coordination across borders.",
      keyTerms: [
        {
          term: "NLP",
          definition: "Natural language processing - extracting meaning from text",
        },
        {
          term: "UMLS",
          definition: "Unified Medical Language System - terminology integration",
        },
        {
          term: "eCQM",
          definition: "Electronic clinical quality measure",
        },
        {
          term: "Ambient clinical intelligence",
          definition: "AI-assisted documentation from clinical conversations",
        },
      ],
      clinicalNotes: "Clinician well-being initiatives address documentation burden; efficient documentation supports rather than detracts from patient care. Scribes and AI assistance reduce but do not eliminate physician documentation responsibility.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ["abbreviations", "documentation", "medical records"],
    keywords: ["chart abbreviations", "clinical documentation", "medical notes"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// LABORATORY ABBREVIATIONS EDUCATIONAL CONTENT
// ============================================================================

export const laboratoryAbbreviationsContent: EducationalContent = {
  id: "laboratory-abbreviations-content",
  type: "concept",
  name: "Laboratory Abbreviations",
  alternateNames: ["Lab Abbreviations", "Test Abbreviations"],

  levels: {
    1: {
      level: 1,
      summary: "Blood tests and other lab tests have short names that doctors and nurses use.",
      explanation:
        "When you get blood drawn, many different tests can be done. Each test has an abbreviation. \"CBC\" means complete blood count - it measures your blood cells. \"BMP\" means basic metabolic panel - it measures chemicals in your blood like sodium and potassium. \"UA\" means urinalysis - a test of your urine. \"LFTs\" means liver function tests. These abbreviations help healthcare workers quickly talk about test results.",
      keyTerms: [
        {
          term: "CBC",
          definition: "Complete blood count - measures blood cells",
        },
        {
          term: "BMP",
          definition: "Basic metabolic panel - measures blood chemicals",
        },
        {
          term: "UA",
          definition: "Urinalysis - tests urine",
        },
      ],
      analogies: [
        "Lab abbreviations are like menu codes at a restaurant - CBC is like ordering a combo meal that includes several items.",
      ],
    },
    2: {
      level: 2,
      summary: "Laboratory test abbreviations identify specific panels, individual tests, and result values.",
      explanation:
        "Laboratory panels are groups of related tests. BMP (basic metabolic panel) includes sodium, potassium, chloride, CO2, BUN, creatinine, and glucose. CMP (comprehensive metabolic panel) adds liver tests. CBC includes WBC (white blood cells), RBC (red blood cells), Hgb (hemoglobin), Hct (hematocrit), and Plt (platelets). Coagulation tests include PT (prothrombin time), INR, and PTT. Cardiac markers include troponin and BNP (brain natriuretic peptide). A1c (hemoglobin A1c) measures average blood sugar over months.",
      keyTerms: [
        {
          term: "CMP",
          definition: "Comprehensive metabolic panel - BMP plus liver tests",
        },
        {
          term: "WBC",
          definition: "White blood cell count",
        },
        {
          term: "Hgb/Hct",
          definition: "Hemoglobin and hematocrit (related red cell measures)",
        },
        {
          term: "A1c",
          definition: "Hemoglobin A1c - long-term blood sugar measure",
        },
      ],
      analogies: [
        "Lab panels are like diagnostic packages - the CMP is a premium package including everything in the basic BMP plus extras.",
      ],
    },
    3: {
      level: 3,
      summary: "Laboratory nomenclature follows LOINC standards with institution-specific order sets and result reporting conventions.",
      explanation:
        "LOINC (Logical Observation Identifiers Names and Codes) provides standardized test identifiers. Order entry systems use institution-specific abbreviations that may differ from standard terminology. Result reporting includes reference ranges that vary by age, sex, and method. Critical values trigger immediate notification regardless of abbreviation used. Point-of-care testing (POCT) uses the same abbreviations as central laboratory tests. Reflexive testing automatically adds tests based on initial results. Delta checks compare results to previous values for the same patient.",
      keyTerms: [
        {
          term: "LOINC",
          definition: "Logical Observation Identifiers Names and Codes - test standards",
        },
        {
          term: "Critical value",
          definition: "Lab result requiring immediate clinician notification",
        },
        {
          term: "POCT",
          definition: "Point-of-care testing - bedside or clinic testing",
        },
        {
          term: "Delta check",
          definition: "Comparison of current result to previous values",
        },
      ],
      analogies: [
        "LOINC codes are like universal product codes (UPC) - they identify the exact same test regardless of what local name is used.",
      ],
    },
    4: {
      level: 4,
      summary: "Laboratory informatics integrates standard terminologies with clinical decision support for test ordering and result interpretation.",
      explanation:
        "Laboratory information systems (LIS) interface with EHRs using HL7 messaging standards. Compendium management maintains accurate test menus with appropriate utilization guidance. Clinical decision support at order entry reduces inappropriate testing (no repeat CBC within 24 hours, suggest iron studies with microcytic anemia). Reflex testing protocols automate additional testing (Hep B surface antibody if surface antigen positive). Interpretive comments contextualize results. Laboratory stewardship programs optimize utilization, addressing both underuse (missing indicated tests) and overuse (unnecessary repeat testing).",
      keyTerms: [
        {
          term: "LIS",
          definition: "Laboratory information system",
        },
        {
          term: "HL7",
          definition: "Health Level 7 - healthcare data exchange standard",
        },
        {
          term: "Laboratory stewardship",
          definition: "Programs optimizing appropriate test utilization",
        },
        {
          term: "Compendium",
          definition: "Comprehensive catalog of available laboratory tests",
        },
      ],
      clinicalNotes: "Proper test selection requires clinical context; bundled panels may include unnecessary tests while missing indicated ones. Pre-analytical variables (hemolysis, timing, collection technique) affect result validity.",
    },
    5: {
      level: 5,
      summary: "Laboratory medicine informatics advances include multi-omic integration, machine learning for result interpretation, and real-time analytics.",
      explanation:
        "Next-generation laboratory platforms integrate genomics, proteomics, and metabolomics data with traditional clinical chemistry. Machine learning algorithms support pattern recognition for complex data interpretation and automated morphology classification. Laboratory developed tests (LDTs) follow different regulatory pathways than FDA-cleared tests. Companion diagnostics link laboratory results to targeted therapy eligibility. Quality metrics extend beyond individual test performance to diagnostic outcomes. Direct-to-consumer testing raises interpretation challenges. International harmonization efforts address result comparability across methods and populations.",
      keyTerms: [
        {
          term: "Multi-omic integration",
          definition: "Combining genomic, proteomic, and metabolomic data",
        },
        {
          term: "LDT",
          definition: "Laboratory developed test - non-FDA cleared test",
        },
        {
          term: "Companion diagnostic",
          definition: "Test determining eligibility for specific therapy",
        },
        {
          term: "Harmonization",
          definition: "Standardizing results across methods and laboratories",
        },
      ],
      clinicalNotes: "Precision laboratory medicine tailors testing to individual patient characteristics; AI-assisted interpretation augments but does not replace clinical judgment. Transparent reporting of analytical uncertainty supports appropriate result interpretation.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ["abbreviations", "laboratory", "diagnostics"],
    keywords: ["lab abbreviations", "test abbreviations", "laboratory terminology"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// EXPORT MODULE
// ============================================================================

export const commonAbbreviationsModule = {
  id: "common-abbreviations",
  name: "Common Abbreviations",
  description:
    "Educational content for medical abbreviations including prescription, documentation, and laboratory abbreviations",
  content: [prescriptionAbbreviationsContent, documentationAbbreviationsContent, laboratoryAbbreviationsContent],
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
};

export default commonAbbreviationsModule;
