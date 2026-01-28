import { EducationalContent } from '../types';

export const transfusionReactions: EducationalContent = {
  id: 'hematology-transfusion-reactions',
  type: 'condition',
  name: 'Transfusion Reactions',
  alternateNames: ['Blood Transfusion Complications', 'Transfusion Adverse Events', 'Transfusion-related Events'],
  levels: {
    1: {
      level: 1,
      summary: 'Transfusion reactions are problems that can occur when receiving blood products, ranging from mild to serious.',
      explanation: 'Transfusion reactions are adverse events that can happen when you receive a blood transfusion. Most reactions are mild, like fever or itching, but some can be serious or life-threatening. That\'s why healthcare providers carefully check blood types and monitor you during and after the transfusion. Common reactions include fever, allergic reactions causing hives or itching, and mild breathing problems. Serious reactions are rare but include reactions where red blood cells are destroyed (hemolysis), lung injury, or severe allergic reactions. If you feel any unusual symptoms during a transfusion - fever, chills, back pain, trouble breathing, or rash - tell your nurse immediately. The transfusion will be stopped, and treatment will be given. Safety measures like careful blood typing, crossmatching, and monitoring help prevent most serious reactions.',
      keyTerms: [
        { term: 'Transfusion reaction', definition: 'A problem or side effect from receiving blood products' },
        { term: 'Hemolysis', definition: 'Destruction of red blood cells' },
        { term: 'Allergic reaction', definition: 'Immune response causing hives, itching, or swelling' },
        { term: 'Crossmatch', definition: 'Test to ensure donor blood is compatible with recipient' },
      ],
      analogies: [
        'A transfusion reaction is like your body rejecting an incompatible donor organ',
        'Think of blood typing like matching keys to locks - wrong match won\'t work',
      ],
      examples: [
        'A patient develops hives during transfusion, treated with antihistamines',
        'A serious reaction occurs when mismatched blood causes red cell destruction',
      ],
    },
    2: {
      level: 2,
      summary: 'Transfusion reactions are classified as acute (within 24 hours) or delayed, with varying severity from mild febrile reactions to life-threatening acute hemolysis and TRALI.',
      explanation: 'Acute hemolytic transfusion reaction (AHTR): most serious, due to ABO incompatibility; intravascular hemolysis causes fever, chills, back/flank pain, hypotension, hemoglobinuria, DIC; mortality up to 10%. Prevention through strict identification procedures. Febrile non-hemolytic reaction: most common (0.5-1%), fever/chills without hemolysis, due to cytokines from donor leukocytes; reduced by leukoreduction. Allergic reactions: urticaria from plasma proteins (1-3%), treated with antihistamines; anaphylaxis rare but life-threatening (IgA deficiency most common cause). Transfusion-related acute lung injury (TRALI): leading cause of transfusion-related death, non-cardiogenic pulmonary edema within 6 hours, associated with donor anti-leukocyte antibodies; supportive care; plasma from male donors reduces incidence. Transfusion-associated circulatory overload (TACO): respiratory distress from fluid overload, especially in elderly or cardiac patients; prevented by slow rates, diuretics. Delayed hemolytic reaction: 2-14 days post-transfusion, extravascular hemolysis of previously alloimmunized antigen, milder than acute but important to recognize.',
      keyTerms: [
        { term: 'TRALI', definition: 'Transfusion-related acute lung injury, serious pulmonary reaction' },
        { term: 'TACO', definition: 'Transfusion-associated circulatory overload from fluid volume' },
        { term: 'Febrile reaction', definition: 'Fever without hemolysis from donor leukocyte cytokines' },
        { term: 'Alloimmunization', definition: 'Developing antibodies against foreign blood antigens' },
        { term: 'Hemoglobinuria', definition: 'Hemoglobin in urine from red cell destruction' },
      ],
      analogies: [
        'TRALI is like the lungs filling with fluid from an immune storm',
        'Febrile reactions are like getting a flu shot - immune response to foreign material',
      ],
      examples: [
        'A patient with previous transfusions develops delayed hemolysis from anti-K antibody',
        'An elderly patient with heart failure develops TACO during rapid transfusion',
      ],
    },
    3: {
      level: 3,
      summary: 'Transfusion reaction evaluation requires systematic assessment, laboratory workup, and immediate management to distinguish serious from benign reactions and prevent adverse outcomes.',
      explanation: 'Immediate response to suspected reaction: stop transfusion, maintain IV access with saline, check vital signs, notify physician, verify patient and product identification. Evaluation: clerical check (patient ID, product ID, paperwork), visual inspection of remaining blood (hemolysis), direct antiglobulin test (Coombs), plasma free hemoglobin, haptoglobin, urinalysis for hemoglobin, CBC, bilirubin, coagulation studies. Acute hemolysis: clerical error most common cause; treatment is supportive - fluids, diuresis, maintain urine output, treat DIC if present; notify blood bank immediately. Febrile reactions: rule out hemolysis and sepsis; acetaminophen; can resume transfusion if stable. Allergic: antihistamines for urticaria; epinephrine, steroids for anaphylaxis; washed products for future transfusions if severe. TRALI: supportive care, oxygen, mechanical ventilation if needed; report to blood center; implicated donor deferred from plasma donation. TACO: diuretics, slow future transfusion rates, consider split units.',
      keyTerms: [
        { term: 'Direct antiglobulin test', definition: 'Test detecting antibodies on red blood cells' },
        { term: 'Plasma free hemoglobin', definition: 'Hemoglobin released from destroyed red cells' },
        { term: 'Haptoglobin', definition: 'Protein that binds free hemoglobin, decreased in hemolysis' },
        { term: 'Clerical check', definition: 'Verification of patient and blood product identification' },
        { term: 'Washed products', definition: 'Blood products with plasma removed to reduce allergic reactions' },
      ],
    },
    4: {
      level: 4,
      summary: 'Clinical management of transfusion reactions involves rapid recognition, appropriate diagnostic workup, evidence-based treatment, and preventive strategies for future transfusions.',
      explanation: 'Delayed complications: delayed hemolytic reaction (2-14 days) - falling hemoglobin, jaundice, positive DAT, new alloantibody identified; usually self-limited; document for future transfusions. Post-transfusion purpura (PTP): severe thrombocytopenia 5-12 days post-transfusion, usually in previously sensitized women; anti-platelet antibodies; treat with IVIG; high mortality if untreated. TA-GVHD: rare, fatal, donor T-cells attack recipient; fever, rash, diarrhea, pancytopenia, liver dysfunction; occurs in immunocompromised; prevented by irradiation. Infection risks: bacterial contamination (platelets > RBCs due to storage temperature); viral (HIV, hepatitis B/C extremely rare with current testing); parasites (malaria, Chagas, babesia); prions (vCJD). Preventive strategies: leukoreduction reduces febrile reactions and CMV risk; irradiation prevents TA-GVHD; CMV-negative products for at-risk; washing reduces allergic reactions and plasma proteins; pathogen reduction technology for platelets. Reporting: all reactions reported to blood bank; serious reactions to FDA.',
      keyTerms: [
        { term: 'Post-transfusion purpura', definition: 'Severe thrombocytopenia occurring 5-12 days after transfusion' },
        { term: 'TA-GVHD', definition: 'Transfusion-associated graft-versus-host disease, fatal immune reaction' },
        { term: 'Irradiation', definition: 'Treatment preventing donor lymphocyte proliferation' },
        { term: 'Pathogen reduction', definition: 'Technology to inactivate pathogens in blood products' },
        { term: 'Alloantibody', definition: 'Antibody formed against foreign blood group antigens' },
      ],
      clinicalNotes: 'Any fever during transfusion requires stopping and evaluation - do not assume it\'s benign. Acute hemolysis is a medical emergency - notify blood bank immediately, maintain urine output with fluids. TRALI must be reported to blood collection facility; donor implicated may have anti-HLA or anti-granulocyte antibodies. TACO often underdiagnosed - consider in respiratory distress within 6 hours of transfusion, especially elderly.',
    },
    5: {
      level: 5,
      summary: 'Expert transfusion reaction management encompasses complex diagnostics, rare reaction types, transfusion-related immunomodulation, and hemovigilance systems for quality improvement.',
      explanation: 'Complex diagnostics: elution studies to identify antibody on patient\'s red cells; antibody panels for new alloantibody identification; HLA antibody testing for TRALI investigation; bacterial culture of implicated unit. Rare reactions: hypotensive reactions (bradykinin-mediated in ACE inhibitor patients receiving bedside leukoreduction filters); siderosis from chronic transfusions; iron overload with end-organ damage. Transfusion-related immunomodulation (TRIM): possible immunosuppressive effects of transfusion; concerns in cancer recurrence and post-operative infection though data conflicting; leukoreduction may reduce but not eliminate. Hemovigilance: systematic surveillance of transfusion adverse events; national systems (CDC NHSN Hemovigilance Module, SHOT in UK); root cause analysis of errors; process improvement. Massive transfusion complications: hypothermia, acidosis, coagulopathy (lethal triad); calcium depletion from citrate; hyperkalemia from stored blood; hypokalemia after transfusion (cellular uptake). Patient identification errors remain leading cause of acute hemolytic reactions; barcoding and electronic systems reduce risk.',
      keyTerms: [
        { term: 'Elution', definition: 'Technique removing antibodies from red cells for identification' },
        { term: 'Hemovigilance', definition: 'Systematic monitoring of transfusion adverse events' },
        { term: 'TRIM', definition: 'Transfusion-related immunomodulation' },
        { term: 'Siderosis', definition: 'Iron deposition in tissues from repeated transfusions' },
        { term: 'Bradykinin', definition: 'Vasodilator causing hypotension in some reactions' },
      ],
      clinicalNotes: 'Document all transfusion reactions in patient record with implicated unit numbers. New alloantibodies from delayed hemolytic reactions require antigen-negative blood for life. PTP is medical emergency requiring IVIG - consult hematology. Bacterial contamination suspected if fever with platelet transfusion - culture patient and unit. Continuous quality improvement through hemovigilance data analysis.',
    },
  },
  media: [],
  citations: [
    'Narick C, Triulzi DJ, Yazer MH. Transfusion-associated circulatory overload and transfusion-related acute lung injury. Blood. 2021;138(22):2310-2320.',
    'Delaney M, Wendel S, Bercovitz RS, et al. Transfusion reactions: prevention, diagnosis, and treatment. Lancet. 2016;388(10061):2825-2836.',
    'Treleaven J, Gennery A, Marsh J, et al. Guidelines on the use of irradiated blood components prepared by the British Committee for Standards in Haematology blood transfusion task force. Br J Haematol. 2011;152(1):35-51.',
  ],
  crossReferences: ['hematology-blood-products', 'hematology-blood-typing', 'hematology-hemolytic-anemia'],
  tags: {
    systems: ['hematology'],
    topics: ['transfusion', 'adverse reactions', 'blood safety', 'patient safety'],
    keywords: ['transfusion reaction', 'TRALI', 'TACO', 'hemolysis', 'febrile reaction'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
