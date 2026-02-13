import { EducationalContent } from '../types';

export const bloodTyping: EducationalContent = {
  id: 'hematology-blood-typing',
  type: 'concept',
  name: 'Blood Typing',
  alternateNames: ['ABO Blood Group', 'Rh Factor', 'Blood Group Testing', 'Type and Screen'],
  levels: {
    1: {
      level: 1,
      summary: 'Blood typing identifies what type of blood you have—A, B, AB, or O—and whether you are Rh positive or negative, which is important for safe blood transfusions.',
      explanation: 'Your blood type is determined by special markers (called antigens) on the surface of your red blood cells. The main blood types are A, B, AB, and O. If you have A markers, you\'re type A; B markers means type B; both means type AB; neither means type O. There\'s also a marker called Rh factor—if you have it, you\'re "positive" (like A+), and if you don\'t, you\'re "negative" (like A-). Knowing your blood type is important because if you receive the wrong type of blood, your body might attack the new blood cells and make you very sick. Type O negative blood can be given to almost anyone in an emergency, which is why it\'s called the "universal donor." Type AB positive people can receive blood from anyone, making them "universal recipients."',
      keyTerms: [
        { term: 'Blood type', definition: 'The classification of blood based on markers on red blood cells' },
        { term: 'Antigen', definition: 'A marker on blood cells that identifies them as a certain type' },
        { term: 'Rh factor', definition: 'Another blood marker that makes you positive (+) or negative (-)' },
        { term: 'Universal donor', definition: 'Type O negative blood that can be given to most people safely' },
      ],
    },
    2: {
      level: 2,
      summary: 'Blood typing determines ABO and Rh(D) antigens on red blood cells and corresponding antibodies in plasma, essential for transfusion compatibility and prevention of hemolytic reactions.',
      explanation: 'The ABO system is based on A and B antigens on red cells and naturally occurring anti-A and anti-B antibodies (isohemagglutinins) in plasma. Type A has A antigen and anti-B antibody; type B has B antigen and anti-A; type AB has both antigens and no ABO antibodies; type O has neither antigen but both antibodies. ABO incompatibility causes immediate severe hemolytic reactions. The Rh system includes multiple antigens, with D being most immunogenic; Rh-positive individuals have D antigen, Rh-negative do not. Rh-negative individuals can develop anti-D antibodies after exposure (transfusion or pregnancy). Blood typing uses forward typing (testing cells with anti-A and anti-B reagents) and reverse typing (testing serum against A and B cells) to confirm ABO. The antibody screen detects unexpected antibodies against other blood group antigens. A crossmatch tests donor cells against recipient serum to confirm compatibility. "Type and screen" prepares for possible transfusion; "type and crossmatch" reserves specific compatible units.',
      keyTerms: [
        { term: 'Isohemagglutinins', definition: 'Naturally occurring ABO antibodies in plasma' },
        { term: 'Forward typing', definition: 'Testing patient cells to determine ABO type' },
        { term: 'Reverse typing', definition: 'Testing patient serum against known cells to confirm ABO type' },
        { term: 'Antibody screen', definition: 'Test detecting unexpected red cell antibodies' },
        { term: 'Crossmatch', definition: 'Final compatibility test between donor cells and recipient serum' },
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive blood typing encompasses ABO/Rh determination, antibody screening and identification, extended phenotyping for at-risk populations, and management of discrepancies requiring investigation.',
      explanation: 'ABO typing discrepancies require investigation: weakened antigens (elderly, leukemia), acquired B antigen, cold autoantibodies causing polyagglutination, or recent transfusion creating mixed-field reactions. Rh typing identifies D antigen; weak D testing may be performed when initial testing is ambiguous. The antibody screen uses 2-3 screening cells with known antigen profiles; positive screens require antibody identification using panels of 10+ cells with various antigen combinations to identify specificity. Clinically significant antibodies (anti-D, -E, -c, -K, -Fy, -Jk, -S) can cause hemolytic transfusion reactions and must be respected in crossmatch. Extended phenotyping (Rh: C, E, c, e; Kell; Kidd; Duffy; MNS) is performed for chronically transfused patients to minimize alloimmunization; genotyping offers advantages in recently transfused patients. Compatibility testing includes immediate spin crossmatch (detects ABO incompatibility) and antiglobulin (Coombs) crossmatch (detects IgG antibodies). Electronic crossmatch can replace serologic crossmatch when antibody screen is negative and validated computer systems are in place.',
      keyTerms: [
        { term: 'Weak D', definition: 'Variant D antigen expression requiring additional testing' },
        { term: 'Antibody identification panel', definition: 'Multiple cells with known antigens used to identify antibody specificity' },
        { term: 'Antiglobulin test', definition: 'Coombs test detecting IgG antibodies on red cells or in serum' },
        { term: 'Extended phenotype', definition: 'Testing for antigens beyond ABO/Rh to prevent alloimmunization' },
        { term: 'Electronic crossmatch', definition: 'Computer verification of compatibility when no antibodies detected' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced blood typing practice addresses complex serologic problems including multiple alloantibodies, autoantibodies, and genotyping applications, while managing special populations and emergency scenarios.',
      explanation: 'Complex antibody situations: multiple antibodies require careful panel analysis and potentially rare donor units; antibodies to high-prevalence antigens (anti-U, anti-Kp(b), anti-Js(b)) necessitate rare donor registry contact. Autoimmune hemolytic anemia with warm autoantibodies complicates testing; adsorption techniques remove autoantibody to detect underlying alloantibodies; autologous adsorption if patient not recently transfused, allogeneic adsorption if transfused. Cold agglutinins may interfere with testing at room temperature; warming samples resolves. Molecular typing (genotyping) determines blood group antigens from DNA when serologic typing is unreliable (recently transfused, DAT positive, rare antigens); increasingly used for sickle cell patients to provide prophylactically matched blood. Hemolytic disease of fetus and newborn (HDFN): maternal antibodies (most commonly anti-D, also -K, -c) cross placenta and destroy fetal red cells; RhD typing and antibody screening in pregnancy; RhIG prophylaxis prevents D alloimmunization in Rh-negative women. Massive transfusion and emergency release: type-specific blood preferred; O-negative for unknown female patients, O-positive acceptable for males when supply limited.',
      keyTerms: [
        { term: 'Allogeneic adsorption', definition: 'Using donor cells to remove autoantibodies from serum' },
        { term: 'Rare donor registry', definition: 'Database of donors with uncommon blood types/phenotypes' },
        { term: 'RhIG', definition: 'Rh immune globulin preventing D alloimmunization' },
        { term: 'HDFN', definition: 'Hemolytic disease of fetus and newborn from maternal antibodies' },
        { term: 'Molecular blood typing', definition: 'DNA-based determination of blood group antigens' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert blood typing practice integrates serologic and molecular techniques, manages the most complex compatibility challenges, and applies specialized knowledge to transplantation, pregnancy, and rare phenotype scenarios.',
      explanation: 'Clinical expertise in blood typing addresses challenging scenarios. Antibody investigation: rule-outs require antigen-negative cells; if cannot rule out, treat as possibly present; dosage effects may miss heterozygous expression; enzyme-treated cells enhance Rh, Kidd detection but destroy Duffy, MNS. Kidd antibodies are notoriously evanescent—may be undetectable then cause delayed hemolytic reaction; anamnestic response occurs rapidly. Direct antiglobulin test (DAT) interpretation: polyspecific positive leads to monospecific testing (IgG, C3d); drug-induced (immune complex, drug adsorption, autoantibody induction); cold agglutinin disease (C3d positive); AIHA (IgG ± C3d). Transfusion in ABO-incompatible transplant: organ transplant may be ABO-incompatible (desensitization protocols); stem cell transplant crosses ABO barriers (major, minor, bidirectional incompatibility); requires adjusted product selection during engraftment. Neonatal transfusion: use O cells/AB plasma if mother\'s type unknown; crossmatch using maternal serum if available. Pretransfusion testing turnaround: type and screen valid 3 days if pregnant or recently transfused (antibody development risk); electronic crossmatch enables rapid product release; massive hemorrhage protocols bypass standard testing timelines.',
      keyTerms: [
        { term: 'Evanescent antibody', definition: 'Antibody that becomes undetectable over time but can cause reactions' },
        { term: 'DAT monospecific', definition: 'Testing distinguishing IgG from complement on red cells' },
        { term: 'Dosage effect', definition: 'Stronger antibody reaction with homozygous than heterozygous cells' },
        { term: 'ABO-incompatible transplant', definition: 'Transplant crossing ABO barriers with special protocols' },
        { term: 'Anamnestic response', definition: 'Rapid antibody rise upon re-exposure to antigen' },
      ],
      clinicalNotes: 'Never release ABO-incompatible RBCs except in extreme emergency with documentation. Two specimens for initial ABO/Rh reduces clerical error (not always required but good practice). Weak D testing: consider RhD-positive for transfusion recipients (can receive D+ blood); consider RhD-negative for donors and pregnant women (receive RhIG). Historical antibody records critical—previous antibodies may not be detectable but can cause rapid anamnestic reactions. Chronically transfused sickle cell: phenotype/genotype before or very early in transfusion history; prophylactically match C, E, K minimum. Warm AIHA: least incompatible may be safest option; transfuse slowly with close monitoring. Emergency release documentation must include clinical indication and that type-specific blood unavailable. Post-transfusion samples 15-30 minutes after completion plus next day for delayed reaction monitoring if clinically indicated.',
    },
  },
  media: [],
  citations: [
    'Fung MK, et al. Technical Manual, 20th edition. AABB; 2020.',
    'Daniels G. Human Blood Groups, 3rd edition. Wiley-Blackwell; 2013.',
    'Chou ST, et al. High prevalence of red blood cell alloimmunization in sickle cell disease despite transfusion from Rh-matched minority donors. Blood. 2013;122(6):1062-1071.',
  ],
  crossReferences: ['hematology-blood-transfusion', 'hematology-transfusion-reactions', 'hematology-hemophilia'],
  tags: {
    systems: ['hematology'],
    topics: ['blood typing', 'transfusion medicine', 'compatibility testing', 'immunohematology'],
    keywords: ['ABO', 'Rh', 'blood type', 'crossmatch', 'antibody screen', 'compatibility'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
