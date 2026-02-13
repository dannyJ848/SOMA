/**
 * ACC (American College of Cardiology) Guidelines Reference
 * Cardiovascular disease diagnosis, treatment, and prevention guidelines
 */

export const ACCGuidelines = {
  version: "2024",
  lastUpdated: "2024-03-15",
  organization: "American College of Cardiology",
  partnerOrganization: "American Heart Association",

  guidelines: {
    heartFailure: {
      title: "2023 ACC/AHA Guideline for the Management of Heart Failure",
      classification: "Stage A (At Risk)",

      stages: {
        stageA: {
          description: "At risk for heart failure but without structural heart disease or HF symptoms",
          patients: "Hypertension, diabetes, obesity, metabolic syndrome, exposure to cardiotoxic agents",
          recommendations: [
            "Treat hypertension per ACC hypertension guidelines",
            "Treat diabetes per ADA guidelines",
            "SGLT2 inhibitors for patients with type 2 diabetes and CKD or HF risk factors",
            "ACE inhibitors/ARBs for patients at high risk of developing HF"
          ]
        },
        stageB: {
          description: "Structural heart disease without symptoms of HF",
          recommendations: [
            "ACE inhibitors/ARBs/ARNIs for all patients with reduced LVEF",
            "Beta-blockers for all patients with reduced LVEF",
            "SGLT2 inhibitors for patients with LVEF ≤40%",
            "Consider ICD for patients with LVEF ≤35% and ischemic cardiomyopathy"
          ]
        },
        stageC: {
          description: "Structural heart disease with prior or current symptoms of HF",
          gdmT: [
            "ARNI (sacubitril/valsartan) preferred over ACE/ARB",
            "Evidence-based beta-blockers (bisoprolol, carvedilol, metoprolol succinate)",
            "MRA (spironolactone, eplerenone)",
            "SGLT2 inhibitors (dapagliflozin, empagliflozin)"
          ],
          additionalTherapies: [
            "Ivabradine for LVEF ≤35% in sinus rhythm with HR ≥70 bpm",
            "Hydralazine/isosorbide dinitrate in African American patients with HFrEF",
            "Digoxin may be considered to reduce hospitalizations",
            "Vericiguat for high-risk patients with recent decompensation"
          ]
        },
        stageD: {
          description: "Refractory HF requiring specialized interventions",
          interventions: [
            "Heart transplantation evaluation",
            "LVAD (left ventricular assist device)",
            "Palliative care consultation",
            "Inotropic support (bridge to decision/recovery/transplant)"
          ]
        }
      }
    },

    hypertension: {
      title: "2017 ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults",
      classification: {
        normal: { sbp: "<120", dbp: "<80", category: "Normal" },
        elevated: { sbp: "120-129", dbp: "<80", category: "Elevated" },
        stage1: { sbp: "130-139", dbp: "80-89", category: "Stage 1 Hypertension" },
        stage2: { sbp: "≥140", dbp: "≥90", category: "Stage 2 Hypertension" }
      },
      treatmentThresholds: {
        "ASCVD risk ≥10%": "Initiate medication at 130/80",
        "ASCVD risk <10%": "Lifestyle modification at 130/80, consider medication at 140/90",
        "Diabetes or CKD": "Target <130/80"
      }
    },

    lipidManagement: {
      title: "2018 ACC/AHA Guideline on the Management of Blood Cholesterol",
      riskGroups: [
        "Age 40-75 with LDL 70-189 and ASCVD risk ≥7.5%",
        "Age 40-75 with diabetes and LDL 70-189",
        "Clinical ASCVD",
        "Severe hypercholesterolemia (LDL ≥190)"
      ],
      statinIntensity: {
        high: ["Atorvastatin 40-80mg", "Rosuvastatin 20-40mg"],
        moderate: ["Atorvastatin 10-20mg", "Rosuvastatin 5-10mg", "Simvastatin 20-40mg"]
      }
    },

    atrialFibrillation: {
      title: "2023 ACC/AHA/HRS Guideline for the Management of Atrial Fibrillation",
      strokePrevention: {
        cha2ds2Vasc: {
          factors: ["C: Congestive HF (1 pt)", "H: Hypertension (1 pt)", "A: Age ≥75 (2 pts)", "D: Diabetes (1 pt)", "S: Stroke/TIA (2 pts)", "V: Vascular disease (1 pt)", "A: Age 65-74 (1 pt)", "Sc: Sex category female (1 pt)"],
          recommendations: {
            score0: "No anticoagulation",
            score1_male: "Consider no anticoagulation or antiplatelet",
            score1_female: "No anticoagulation",
            score2: "Consider anticoagulation",
            score3_plus: "Anticoagulation recommended"
          }
        },
        hasBled: {
          factors: ["H: Hypertension", "A: Abnormal renal/liver function", "S: Stroke history", "B: Bleeding history", "L: Labile INR", "E: Elderly >65", "D: Drugs/alcohol concomitant"],
          highRisk: "Score ≥3 requires careful risk/benefit assessment"
        }
      }
    },

    chestPain: {
      title: "2021 ACC/AHA Guideline for the Evaluation and Diagnosis of Chest Pain",
      pathways: {
        stable: ["ECG within 10 minutes", "Troponin at 0 and 2-3 hours", "Risk stratification with TIMI/HEART"],
        unstable: ["Immediate ECG", "Serial troponins", "Consider early invasive strategy if high risk"]
      },
      diagnosticTesting: {
        "Low likelihood CAD": "Functional testing (stress ECG, stress echo, nuclear)",
        "Intermediate likelihood": "Coronary CTA or functional testing",
        "High likelihood": "Invasive coronary angiography"
      }
    },

    valvularDisease: {
      title: "2020 ACC/AHA Guideline for the Management of Valvular Heart Disease",
      severeAS: {
        symptoms: "AVR recommended (TAVR or SAVR)",
        asymptomatic: {
          LVEF_less_50: "AVR recommended",
          "valve_area <1.0 + gradient >40": "AVR reasonable",
          "BNP >3x normal + exercise gradient >20": "AVR reasonable"
        }
      },
      severeMR: {
        primary: "Surgery recommended if symptomatic or LVEF 30-60% or LVESD >40mm",
        secondary: "GDMT + consider surgery or transcatheter repair"
      }
    },

    pci: {
      title: "2021 ACC/AHA/SCAI Guideline for Coronary Artery Revascularization",
      indications: {
        stableCAD: "Medical therapy first, PCI for refractory symptoms or ischemia",
        stemi: "Primary PCI within 120 minutes of first medical contact",
        nstemi: "Early invasive strategy within 24 hours for high risk"
      },
      dualAntiplatelet: {
        stable: "DAPT 6 months after DES",
        acs: "DAPT 12 months minimum",
        "high bleeding risk": "Consider 1-3 months DAPT after DES"
      }
    }
  },

  algorithms: {
    syncope: ["Assess for concerning features", "ECG", "Echo if structural disease suspected", "Tilt table or monitoring if recurrent"],
    palpitations: ["ECG", "Holter/event monitor", "Echo if structural disease", "EP study if symptomatic and high risk"],
    pericardialDisease: ["ECG (diffuse ST elevation, PR depression)", "Echo (pericardial effusion)", "Inflammatory markers", "NSAIDs for uncomplicated"]
  },

  references: [
    "https://www.acc.org/guidelines",
    "https://professional.heart.org/guidelines"
  ]
};

export default ACCGuidelines;
