/**
 * Hematology Specialty Content Index
 *
 * Comprehensive physician-level educational content covering:
 * - Anemias (iron deficiency, B12, folate, hemolytic, aplastic)
 * - Leukemias (ALL, AML, CLL, CML)
 * - Lymphomas (Hodgkin's, Non-Hodgkin's)
 * - Multiple myeloma
 * - Bleeding disorders (hemophilia, von Willebrand)
 * - Thrombotic disorders and hypercoagulability
 * - Platelet disorders (ITP, TTP)
 * - Blood transfusion medicine
 * - Bone marrow evaluation
 * - Anticoagulation therapy
 */

// Anemias
export { ironDeficiencyAnemia } from './anemias/iron-deficiency-anemia';
export { vitaminB12DeficiencyAnemia } from './anemias/vitamin-b12-deficiency';
export { folateDeficiencyAnemia } from './anemias/folate-deficiency';
export { hemolyticAnemia } from './anemias/hemolytic-anemia';
export { aplasticAnemia } from './anemias/aplastic-anemia';
export { microcyticAnemia } from './anemias/microcytic-anemia';
export { normocyticAnemia } from './anemias/normocytic-anemia';
export { macrocyticAnemia } from './anemias/macrocytic-anemia';

// Leukemias
export { acuteLymphoblasticLeukemia } from './leukemias/acute-lymphoblastic-leukemia';
export { acuteMyeloidLeukemia } from './leukemias/acute-myeloid-leukemia';
export { chronicLymphocyticLeukemia } from './leukemias/chronic-lymphocytic-leukemia';
export { chronicMyeloidLeukemia } from './leukemias/chronic-myeloid-leukemia';
export { allAmlContent } from './leukemias/all-aml';
export { cllCmlContent } from './leukemias/cll-cml';
export { acuteLeukemiaWorkup } from './leukemias/acute-leukemia-workup';

// Lymphomas
export { hodgkinLymphoma } from './lymphomas/hodgkin-lymphoma';
export { nonHodgkinLymphoma } from './lymphomas/non-hodgkin-lymphoma';
export { hodgkinLymphoma as hodgkinLymphomaDetailed } from './lymphomas/hodgkin-lymphoma';
export { nhlTypes } from './lymphomas/nhl-types';
export { lymphomaStaging } from './lymphomas/lymphoma-staging';

// Plasma cell disorders
export { multipleMyeloma } from './plasma-cell-disorders/multiple-myeloma';

// Bleeding disorders
export { hemophilia } from './bleeding-disorders/hemophilia';
export { vonWillebrandDisease } from './bleeding-disorders/von-willebrand-disease';

// Thrombotic disorders
export { thrombophilia } from './thrombotic-disorders/thrombophilia';
export { deepVeinThrombosis } from './thrombotic-disorders/deep-vein-thrombosis';

// Platelet disorders
export { immuneThrombocytopenia } from './platelet-disorders/immune-thrombocytopenia';
export { thromboticThrombocytopenicPurpura } from './platelet-disorders/thrombotic-thrombocytopenic-purpura';

// Transfusion medicine
export { bloodTransfusionMedicine } from './transfusion/blood-transfusion-medicine';

// Bone marrow evaluation
export { boneMarrowEvaluation } from './diagnostics/bone-marrow-evaluation';

// Anticoagulation
export { anticoagulationTherapy } from './therapeutics/anticoagulation-therapy';

// Export all content as a collection
export const hematologyContent = {
  anemias: [
    'ironDeficiencyAnemia',
    'vitaminB12DeficiencyAnemia',
    'folateDeficiencyAnemia',
    'hemolyticAnemia',
    'aplasticAnemia',
    'microcyticAnemia',
    'normocyticAnemia',
    'macrocyticAnemia',
  ],
  leukemias: [
    'acuteLymphoblasticLeukemia',
    'acuteMyeloidLeukemia',
    'chronicLymphocyticLeukemia',
    'chronicMyeloidLeukemia',
    'allAmlContent',
    'cllCmlContent',
    'acuteLeukemiaWorkup',
  ],
  lymphomas: [
    'hodgkinLymphoma',
    'nonHodgkinLymphoma',
    'hodgkinLymphomaDetailed',
    'nhlTypes',
    'lymphomaStaging',
  ],
  plasmaCellDisorders: [
    'multipleMyeloma',
  ],
  bleedingDisorders: [
    'hemophilia',
    'vonWillebrandDisease',
  ],
  thromboticDisorders: [
    'thrombophilia',
    'deepVeinThrombosis',
  ],
  plateletDisorders: [
    'immuneThrombocytopenia',
    'thromboticThrombocytopenicPurpura',
  ],
  transfusion: [
    'bloodTransfusionMedicine',
  ],
  diagnostics: [
    'boneMarrowEvaluation',
  ],
  therapeutics: [
    'anticoagulationTherapy',
  ],
};
