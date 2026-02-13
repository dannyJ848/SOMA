import { EducationalContent } from '../types';

export const hemolyticAnemia: EducationalContent = {
  id: 'hematology-hemolytic-anemia',
  type: 'condition',
  name: 'Hemolytic Anemia',
  alternateNames: ['Hemolysis', 'Premature Red Cell Destruction', 'Hemolytic Disease'],
  levels: {
    1: {
      level: 1,
      summary: 'Hemolytic anemia is when red blood cells are destroyed faster than your body can make new ones.',
      explanation: 'Normally, red blood cells live about 120 days before being naturally removed by your body. In hemolytic anemia, they are destroyed too early. This can happen inside blood vessels (intravascular) or in the liver and spleen (extravascular). When red cells break down, they release hemoglobin which makes the skin look yellow (jaundice) and can turn urine dark. Your body tries to make more red cells, so the bone marrow works extra hard. Common causes include inherited conditions like sickle cell disease, autoimmune problems where the body attacks its own cells, infections, and reactions to certain medicines. Treatment depends on the cause - some cases need medicine to suppress the immune system, others may need special treatments or blood transfusions.',
      keyTerms: [
        { term: 'Hemolysis', definition: 'The breakdown and destruction of red blood cells' },
        { term: 'Jaundice', definition: 'Yellowing of skin and eyes from buildup of bilirubin when red cells break down' },
        { term: 'Intravascular', definition: 'Destruction of red cells inside blood vessels' },
        { term: 'Extravascular', definition: 'Destruction of red cells in the spleen and liver' },
      ],
      analogies: [
        'Hemolysis is like having leaky tires that go flat before they should',
        'Think of the spleen as a quality control inspector that removes defective red cells',
      ],
      examples: [
        'A person with sickle cell disease has red cells that break apart easily due to abnormal shape',
        'Some people develop hemolytic anemia after getting a blood transfusion with incompatible blood',
      ],
    },
    2: {
      level: 2,
      summary: 'Hemolytic anemia results from premature destruction of red blood cells through immune-mediated, mechanical, inherited membrane or enzyme defects, or hemoglobin abnormalities.',
      explanation: 'Hemolysis is classified by location (intravascular vs extravascular), mechanism (immune vs non-immune), and timing (acute vs chronic). Intravascular hemolysis releases free hemoglobin into plasma, causing hemoglobinuria and hemosiderinuria. Extravascular hemolysis occurs when macrophages in spleen and liver recognize abnormal cells. Lab findings include elevated lactate dehydrogenase (LDH), indirect bilirubin, and reticulocyte count; decreased haptoglobin (binds free hemoglobin). Peripheral smear shows characteristic findings: spherocytes (immune, hereditary spherocytosis), schistocytes (microangiopathic), sickle cells, bite cells (G6PD deficiency), Heinz bodies (denatured hemoglobin). Causes include autoimmune hemolytic anemia (warm antibody IgG, cold antibody IgM), hereditary spherocytosis, G6PD deficiency, sickle cell disease, thalassemia, microangiopathic hemolytic anemias (TTP, HUS, DIC), and drug-induced hemolysis. Direct antiglobulin test (Coombs test) identifies immune causes. Treatment depends on etiology: steroids for warm AIHA, avoidance of triggers for G6PD, splenectomy for refractory hereditary spherocytosis.',
      keyTerms: [
        { term: 'Reticulocyte', definition: 'Immature red blood cells, increased when bone marrow compensates for hemolysis' },
        { term: 'Haptoglobin', definition: 'Protein that binds free hemoglobin, decreased in hemolysis' },
        { term: 'Direct antiglobulin test', definition: 'Coombs test detecting antibodies on red blood cell surface' },
        { term: 'Spherocytes', definition: 'Small, spherical red cells seen in immune and hereditary hemolysis' },
        { term: 'Schistocytes', definition: 'Fragmented red cells seen in mechanical/microangiopathic hemolysis' },
      ],
      analogies: [
        'Haptoglobin is like a cleanup crew that removes free hemoglobin from blood' ,
        'Reticulocytes are like overtime workers the bone marrow calls in to replace destroyed cells',
      ],
      examples: [
        'A patient with penicillin-induced hemolytic anemia where drug triggers immune attack on red cells',
        'A young man with favism who develops hemolysis after eating fava beans due to G6PD deficiency',
      ],
    },
    3: {
      level: 3,
      summary: 'Hemolytic anemia diagnosis requires systematic evaluation of laboratory markers, peripheral smear morphology, hemolysis mechanism identification, and specific testing for underlying etiology.',
      explanation: 'The hemolytic workup begins with evidence of increased destruction (elevated LDH, indirect bilirubin, low haptoglobin) and increased production (reticulocytosis). The direct antiglobulin test (DAT) distinguishes immune from non-immune causes. Warm AIHA (IgG, 37°C) responds to steroids, splenectomy, rituximab; Evans syndrome includes AIHA with ITP. Cold agglutinin disease (IgM, cold-reactive) requires avoiding cold; rituximab or complement inhibitors may help. Drug-induced immune hemolysis mechanisms include hapten (penicillin), immune complex (quinidine), and autoantibody (methyldopa) types. Hereditary causes: hereditary spherocytosis (spectrin/ankyrin defects), hereditary elliptocytosis, G6PD deficiency (X-linked, episodic hemolysis with oxidative stress), pyruvate kinase deficiency. Acquired non-immune: MAHA from TTP (ADAMTS13 deficiency), HUS (complement dysregulation or Shiga toxin), DIC, HELLP syndrome, mechanical valves. Paroxysmal nocturnal hemoglobinuria (PNH) is an acquired stem cell disorder causing complement-mediated hemolysis and thrombosis.',
      keyTerms: [
        { term: 'Warm AIHA', definition: 'Autoimmune hemolysis mediated by IgG antibodies active at body temperature' },
        { term: 'Cold agglutinin', definition: 'IgM antibodies causing hemolysis at cold temperatures' },
        { term: 'ADAMTS13', definition: 'Enzyme that cleaves von Willebrand factor, deficiency causes TTP' },
        { term: 'Paroxysmal nocturnal hemoglobinuria', definition: 'Acquired clonal stem cell disorder with complement-mediated hemolysis' },
        { term: 'MAHA', definition: 'Microangiopathic hemolytic anemia with schistocytes and thrombocytopenia' },
      ],
    },
    4: {
      level: 4,
      summary: 'Comprehensive hemolytic anemia management requires precise etiologic diagnosis, understanding of pathophysiologic mechanisms, and selection of appropriate targeted therapies.',
      explanation: 'Warm AIHA treatment: prednisone 1-2 mg/kg with taper over months; rituximab as second-line; splenectomy for refractory cases; immunosuppressants (azathioprine, cyclosporine, mycophenolate). Cold agglutinin disease: keep patient warm; rituximab effective; complement C5 inhibitors (eculizumab) for severe cases; treat underlying lymphoproliferative disorder if present. TTP is a medical emergency requiring urgent plasma exchange; steroids and rituximab as adjuncts. HUS management: STEC-HUS supportive; complement-mediated HUS requires eculizumab. Hereditary spherocytosis: folate supplementation, splenectomy for severe cases (postsplenectomy sepsis risk). G6PD deficiency: avoid triggers (fava beans, sulfa drugs, primaquine, nitrofurantoin). PNH: eculizumab or ravulizumab blocks complement, dramatically improving survival; treat thrombosis aggressively; allogeneic stem cell transplant is curative. DAT-negative AIHA occurs when antibody levels are below detection threshold or IgA-mediated; specialized testing may be needed.',
      keyTerms: [
        { term: 'Eculizumab', definition: 'Monoclonal antibody blocking complement C5, used in PNH and aHUS' },
        { term: 'Evans syndrome', definition: 'Autoimmune hemolytic anemia plus immune thrombocytopenia' },
        { term: 'HELLP syndrome', definition: 'Hemolysis, Elevated Liver enzymes, Low Platelets in pregnancy' },
        { term: 'Osmotic fragility', definition: 'Test measuring red cell resistance to hemolysis in hypotonic solution' },
        { term: 'Plasma exchange', definition: 'Procedure removing patient plasma and replacing with donor plasma' },
      ],
      clinicalNotes: 'Suspect hemolysis with elevated LDH, indirect bilirubin, and reticulocytosis. Check DAT to distinguish immune from non-immune. TTP/HUS is an emergency - do not wait for ADAMTS13 results to start plasma exchange. PNH patients on eculizumab need meningococcal vaccination and prophylaxis. Splenectomy increases infection risk with encapsulated organisms - vaccinate before procedure. Cold agglutinins can cause severe hemolysis with cold exposure or cardiopulmonary bypass. Transfuse with caution in AIHA - least incompatible blood if needed.',
    },
    5: {
      level: 5,
      summary: 'Expert hemolytic anemia care integrates advanced diagnostic techniques, novel biologic and complement-directed therapies, and specialized management of complex cases including refractory disease and pregnancy.',
      explanation: 'Advanced diagnostics include flow cytometry for PNH clone detection, osmotic fragility testing with incubation for hereditary spherocytosis, G6PD enzyme assay (avoid testing during acute hemolysis when false negatives occur), hemoglobin electrophoresis, red cell enzyme panels, and genetic testing for membrane disorders. Novel therapies: sutimlimab (C1s inhibitor) for cold agglutinin disease; pegcetacoplan (C3 inhibitor) for PNH; fostamatinib for warm AIHA. Refractory AIHA management: consider alemtuzumab, bortezomib, or clinical trials. Pregnancy management: physiologic anemia plus hemolysis requires careful monitoring; steroids generally safe; IVIG for ITP component; avoid splenectomy if possible. TTP relapse: monitor ADAMTS13 activity; preemptive rituximab if levels falling. Long-term PNH management: thrombosis prophylaxis, monitoring for bone marrow failure evolution, bone marrow transplant evaluation for severe cytopenias. Complement inhibitor breakthrough hemolysis requires dose adjustment or switching agents.',
      keyTerms: [
        { term: 'Sutimlimab', definition: 'C1s complement inhibitor approved for cold agglutinin disease' },
        { term: 'Pegcetacoplan', definition: 'C3 complement inhibitor for PNH' },
        { term: 'Fostamatinib', definition: 'Syk inhibitor for warm autoimmune hemolytic anemia' },
        { term: 'ALE', definition: 'Acute limbic encephalitis, rare complication of PNH' },
        { term: 'DAT-negative AIHA', definition: 'Autoimmune hemolysis with negative direct antiglobulin test' },
      ],
      clinicalNotes: 'Flow cytometry for PNH is highly sensitive - even small clones matter. G6PD assay best done when patient stable; reticulocytes have higher enzyme activity causing false negatives during hemolysis. TTP: ADAMTS13 <10% confirms diagnosis; inhibitors present in acquired cases. Warm AIHA with transfusions: use least incompatible blood if life-threatening; may need exchange transfusion in severe cases. Document cold agglutinin titer and thermal amplitude in CAD. Consider bone marrow transplant for PNH with severe cytopenias or transformation to MDS/AML.',
    },
  },
  media: [],
  citations: [
    'Packman CH. Hemolytic anemia due to warm autoantibodies. Blood Rev. 2008;22(1):1-15.',
    'Brodsky RA. Paroxysmal nocturnal hemoglobinuria. Blood. 2014;124(18):2804-2811.',
    'Barcellini W, Fattizzo B. How I treat warm autoimmune hemolytic anemia. Blood. 2021;137(10):1283-1294.',
  ],
  crossReferences: ['hematology-iron-deficiency-anemia', 'hematology-b12-folate-deficiency', 'hematology-sickle-cell', 'hematology-thalassemia'],
  tags: {
    systems: ['hematology'],
    topics: ['anemia', 'hemolysis', 'autoimmune', 'red cell disorders'],
    keywords: ['hemolysis', 'AIHA', 'Coombs', 'spherocytes', 'schistocytes', 'TTP'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
