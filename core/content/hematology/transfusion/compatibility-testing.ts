import { EducationalContent } from '../types';

export const compatibilityTesting: EducationalContent = {
  id: 'hematology-compatibility-testing',
  type: 'procedure',
  name: 'Blood Compatibility Testing',
  alternateNames: ['Type and Screen', 'Type and Crossmatch', 'Blood Banking', 'Pretransfusion Testing'],
  levels: {
    1: {
      level: 1,
      summary: 'Blood compatibility testing ensures that donated blood is safe and matches the person receiving it.',
      explanation: 'Blood compatibility testing is a set of laboratory tests that make sure blood is safe to transfuse and will work properly in the person receiving it. The most important test is blood typing, which determines your ABO blood type (A, B, AB, or O) and Rh factor (positive or negative). Another important test looks for antibodies - proteins in your blood that might react against donated blood. Crossmatching mixes your blood with donor blood to check for reactions before transfusion. These tests are done before surgery, during emergencies, or when you need a transfusion for medical reasons. The process takes time, so doctors order type and screen tests ahead of time when possible. In emergencies, O-negative blood (universal donor) can be used while testing is completed. These safety steps help prevent serious reactions and ensure transfusion success.',
      keyTerms: [
        { term: 'ABO blood type', definition: 'Blood classification system based on antigens A and B' },
        { term: 'Rh factor', definition: 'Protein on red blood cells; positive if present, negative if absent' },
        { term: 'Antibodies', definition: 'Proteins in blood that can attack foreign substances' },
        { term: 'Crossmatch', definition: 'Test mixing donor and recipient blood to check compatibility' },
      ],
      analogies: [
        'Blood compatibility is like matching puzzle pieces - they need to fit together correctly',
        'Think of antibodies as security guards that check IDs before letting cells enter',
      ],
      examples: [
        'A person with type A blood can receive type A or O blood safely',
        'Someone who had previous transfusions may have developed antibodies requiring special matching',
      ],
    },
    2: {
      level: 2,
      summary: 'Pretransfusion testing includes ABO/Rh typing, antibody screen, and crossmatch to ensure compatible blood transfusion and prevent hemolytic reactions.',
      explanation: 'ABO/Rh typing: determines ABO group (A, B, AB, O) based on antigens on red cells and antibodies in plasma; Rh(D) typing determines Rh status. Type A has A antigen, anti-B antibodies; Type B has B antigen, anti-A; Type AB has both antigens, no antibodies; Type O has no antigens, both antibodies. Rh-negative individuals can make anti-D if exposed to Rh-positive blood. Antibody screen (indirect antiglobulin test): detects unexpected antibodies against red cell antigens using screening cells with known antigen profiles; positive screen requires antibody identification. Type and screen: ABO/Rh plus antibody screen; appropriate when transfusion possible but not immediate. Type and crossmatch: includes compatibility testing; crossmatch can be immediate-spin (room temperature, detects ABO incompatibility) or antiglobulin (37°C, detects IgG antibodies). Electronic crossmatch: computer verification of ABO compatibility when patient has negative antibody screen and no history of antibodies; faster than serologic crossmatch.',
      keyTerms: [
        { term: 'Indirect antiglobulin test', definition: 'Test detecting antibodies in patient serum against red cell antigens' },
        { term: 'Antigen', definition: 'Protein or carbohydrate on red cells that can trigger antibody response' },
        { term: 'Electronic crossmatch', definition: 'Computer verification of ABO compatibility' },
        { term: 'Screening cells', definition: 'Type O red cells with known antigen profile for antibody detection' },
        { term: 'Immediate-spin', definition: 'Quick crossmatch at room temperature for ABO compatibility' },
      ],
      analogies: [
        'ABO antigens are like flags on cells - antibodies recognize foreign flags and attack',
        'An antibody screen is like checking a security database for known threats',
      ],
      examples: [
        'A patient with anti-K antibody requires K-negative blood for transfusion',
        'Type and screen before surgery allows blood bank to prepare compatible units if needed',
      ],
    },
    3: {
      level: 3,
      summary: 'Blood bank testing encompasses extended antigen typing, antibody identification panels, direct antiglobulin testing, and specialized procedures for complex patients.',
      explanation: 'Antibody identification: when screen positive, panel of 8-16 cells with known antigen patterns tested against patient serum; pattern of reactivity identifies antibody specificity. Common clinically significant antibodies: anti-D, -C, -c, -E, -e (Rh system); anti-K, -k (Kell); anti-Fya, -Fyb (Duffy); anti-Jka, -Jkb (Kidd); anti-S, -s (MNS). Antibodies are IgM (room temperature reactive, usually clinically insignificant) or IgG (37°C reactive, clinically significant). Direct antiglobulin test (DAT/Coombs): detects antibody or complement on patient\'s red cells; positive in autoimmune hemolytic anemia, hemolytic disease of newborn, transfusion reactions. Adsorption studies: autologous (removes autoantibody) vs allogeneic (removes specific antibody) to identify underlying alloantibodies. Elution: removing antibody from red cells for identification. Special situations: neonates have maternal antibodies - type from cord blood, screen using mother\'s serum; elderly may have weak antigens; recently transfused patients have mixed cell populations. Extended typing: molecular methods for patients with transfused or reactive RBCs; useful for sickle cell patients requiring chronic transfusion.',
      keyTerms: [
        { term: 'Direct antiglobulin test', definition: 'Test detecting antibodies attached to patient\'s red cells' },
        { term: 'Adsorption', definition: 'Technique removing unwanted antibodies from serum' },
        { term: 'Elution', definition: 'Removing antibodies from red cell surface for identification' },
        { term: 'Molecular typing', definition: 'DNA-based blood typing when serologic typing unreliable' },
        { term: 'Clinically significant antibody', definition: 'Antibody capable of causing transfusion reaction or hemolytic disease' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced compatibility testing addresses complex antibody problems, massive transfusion protocols, rare blood needs, and quality assurance in transfusion medicine.',
      explanation: 'Complex antibody problems: multiple antibodies require antigen-negative blood for all specificities; rare phenotypes may require regional/national rare donor files; autologous donation for difficult patients. Warm autoantibodies (WAIHA): all screening cells reactive; autologous adsorption to remove autoantibody and detect underlying alloantibodies essential; transfuse least incompatible blood if life-threatening. Cold autoagglutinins: room temperature reactivity causing ABO typing difficulties; prewarming techniques used. Massive transfusion: type O blood (Rh-negative for women of childbearing age, Rh-positive acceptable for others) while crossmatching; switch to type-specific when available; MTP activates blood bank procedures for rapid product provision. Hemolytic disease of fetus and newborn (HDFN): monitor maternal antibody titers; amniocentesis or MCA Doppler for fetal anemia; intrauterine transfusions with O, Rh-negative, irradiated, CMV-negative, antigen-negative blood. Quality assurance: two-sample rule (two separate collections for ABO verification); positive patient identification; specimen integrity; turnaround time monitoring; proficiency testing.',
      keyTerms: [
        { term: 'Warm autoantibody', definition: 'Antibody against own red cells reactive at body temperature' },
        { term: 'Least incompatible', definition: 'Most compatible blood available for patient with autoantibodies' },
        { term: 'HDFN', definition: 'Hemolytic disease of fetus and newborn from maternal antibodies' },
        { term: 'MCA Doppler', definition: 'Middle cerebral artery Doppler to detect fetal anemia' },
        { term: 'Two-sample rule', definition: 'Requirement for two separate specimens for ABO verification' },
      ],
      clinicalNotes: 'Always check for previous transfusion records - history of antibodies critical even if current screen negative. Prenatal antibody screening essential for detecting at-risk pregnancies. In emergency, type O blood can be given while crossmatching - Rh-negative for women <50 years. Document all antigen typings for chronically transfused patients. Warm autologous adsorption may take 24-48 hours - communicate urgency to blood bank.',
    },
    5: {
      level: 5,
      summary: 'Expert blood banking encompasses molecular genomics, international rare donor registries, automated testing platforms, and specialized protocols for complex transfusion scenarios.',
      explanation: 'Molecular blood group genotyping: DNA-based testing predicts antigen expression; essential for multiply transfused patients, determining Rh variants (weak D, partial D), identifying variant alleles in diverse populations, predicting fetal blood type from maternal blood; high-throughput platforms available. International rare donor registries: International Rare Donor Panel (IRDP) for finding rare blood; AABB rare donor database; European Blood Alliance rare blood program; coordination for international shipping. Automated platforms: gel technology, solid-phase red cell adherence, automated pipetting and reading; improve standardization and reduce errors; interfaced with laboratory information systems. Specialized protocols: sickle cell disease extended phenotype matching (C, E, K) to prevent alloimmunization; intrauterine and neonatal transfusion protocols; HLA-matched platelet selection; granulocyte crossmatching; ABO-incompatible solid organ and stem cell transplant support. Therapeutic apheresis support: plasma exchange product selection (ABO considerations); red cell exchange antigen matching; photopheresis.',
      keyTerms: [
        { term: 'Molecular genotyping', definition: 'DNA testing to predict blood group antigens' },
        { term: 'IRDP', definition: 'International Rare Donor Panel for finding rare blood types' },
        { term: 'Partial D', definition: 'Variant RhD antigen with altered epitopes' },
        { term: 'Solid-phase adherence', definition: 'Automated testing methodology using microplates' },
        { term: 'Extended phenotype matching', definition: 'Matching multiple antigens to prevent alloimmunization' },
      ],
      clinicalNotes: 'Molecular typing recommended for patients with positive DAT or recent transfusion precluding serologic typing. Rare donor blood frozen for long-term storage. Sickle cell patients benefit from extended matching (C, E, K) from first transfusion. Document all antibodies and transfusion reactions permanently. Cord blood typing determines need for RhIG in Rh-negative mothers.',
    },
  },
  media: [],
  citations: [
    'Daniels G. Human Blood Groups. 3rd ed. Oxford: Wiley-Blackwell; 2013.',
    'Fung MK, Eder AF, Spitalnik SL, Westhoff CM, eds. Technical Manual. 20th ed. Bethesda, MD: AABB; 2020.',
    'Sandler SG, Flegel WA, Westhoff CM, et al. It\'s time to phase in RHD genotyping for patients with a serological weak D phenotype. Transfusion. 2015;55(3):680-689.',
  ],
  crossReferences: ['hematology-blood-products', 'hematology-transfusion-reactions', 'hematology-hemolytic-anemia'],
  tags: {
    systems: ['hematology'],
    topics: ['blood banking', 'compatibility testing', 'blood typing', 'antibodies'],
    keywords: ['ABO', 'Rh', 'crossmatch', 'antibody screen', 'blood typing', 'compatibility'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
