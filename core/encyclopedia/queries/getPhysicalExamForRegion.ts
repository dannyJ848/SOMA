/**
 * Get Physical Exam Content for Region
 *
 * Query physical examination content from core/physical-exam/
 * and core/content/ that relates to a specific anatomical region.
 */

import { PhysicalExamContent, AbnormalFindingSummary, AnatomicalRegion, BodySystemId, RegionalContentOptions } from './types';
import { ComplexityLevel } from '../../content/types';
import { getRegion, findRegionsByKeywords } from './getAnatomyForRegion';

// ============================================
// Physical Exam Content by Region
// ============================================

/**
 * Physical examination techniques and findings by region
 */
const REGION_PHYSICAL_EXAM: Record<string, {
  examComponents: Array<{
    name: string;
    technique: 'inspection' | 'palpation' | 'percussion' | 'auscultation' | 'special-test';
    procedure: string;
    normalFindings: string;
    abnormalFindings: AbnormalFindingSummary[];
    clinicalPearls?: string[];
  }>;
}> = {
  heart: {
    examComponents: [
      {
        name: 'Cardiac auscultation',
        technique: 'auscultation',
        procedure: 'Listen at aortic (right 2nd ICS), pulmonic (left 2nd ICS), tricuspid (left lower sternal border), and mitral (apex) areas with both bell and diaphragm.',
        normalFindings: 'S1 and S2 present, regular rhythm, no murmurs/rubs/gallops',
        abnormalFindings: [
          { finding: 'Systolic murmur', significance: 'May indicate valvular stenosis or regurgitation', associatedConditions: ['Aortic stenosis', 'Mitral regurgitation', 'VSD'] },
          { finding: 'Diastolic murmur', significance: 'Often pathological - suggests valvular disease', associatedConditions: ['Aortic regurgitation', 'Mitral stenosis'] },
          { finding: 'S3 gallop', significance: 'Associated with volume overload or heart failure', associatedConditions: ['Heart failure', 'Cardiomyopathy'] },
          { finding: 'S4 gallop', significance: 'Suggests stiff/noncompliant ventricle', associatedConditions: ['LVH', 'Ischemia', 'Hypertension'] },
        ],
        clinicalPearls: [
          'Use bell for low-pitched sounds (S3, S4, mitral stenosis)',
          'Use diaphragm for high-pitched sounds (S1, S2, aortic regurgitation)',
          'Have patient lean forward and exhale for aortic regurgitation',
        ],
      },
      {
        name: 'Point of maximal impulse (PMI)',
        technique: 'palpation',
        procedure: 'Palpate the apex at 5th ICS, midclavicular line, with patient supine or in left lateral decubitus position.',
        normalFindings: 'PMI at 5th ICS MCL, <2cm diameter, brief tap',
        abnormalFindings: [
          { finding: 'Displaced PMI', significance: 'Suggests cardiomegaly or volume overload', associatedConditions: ['Heart failure', 'Cardiomyopathy'] },
          { finding: 'Sustained PMI', significance: 'Indicates pressure overload/LVH', associatedConditions: ['Hypertension', 'Aortic stenosis'] },
          { finding: 'Diffuse PMI', significance: 'Suggests dilated cardiomyopathy', associatedConditions: ['Dilated cardiomyopathy'] },
        ],
        clinicalPearls: [
          'Left lateral decubitus position brings heart closer to chest wall',
          'PMI displacement is more specific for cardiomegaly than sensitivity',
        ],
      },
      {
        name: 'Jugular venous pressure (JVP)',
        technique: 'inspection',
        procedure: 'With patient at 45 degrees, identify right internal jugular vein pulsations and measure height above sternal angle.',
        normalFindings: 'JVP <3-4cm above sternal angle at 45 degrees',
        abnormalFindings: [
          { finding: 'Elevated JVP', significance: 'Indicates elevated right atrial pressure', associatedConditions: ['Heart failure', 'Tricuspid regurgitation', 'Pericardial disease'] },
          { finding: 'Kussmaul sign', significance: 'JVP rises with inspiration - constrictive pericarditis', associatedConditions: ['Constrictive pericarditis'] },
          { finding: 'Large V waves', significance: 'Suggests tricuspid regurgitation', associatedConditions: ['Tricuspid regurgitation'] },
        ],
        clinicalPearls: [
          'Add 5cm to height above sternal angle to estimate RA pressure',
          'Hepatojugular reflux confirms volume overload',
        ],
      },
    ],
  },
  lungs: {
    examComponents: [
      {
        name: 'Chest inspection',
        technique: 'inspection',
        procedure: 'Observe chest wall shape, symmetry, respiratory pattern, accessory muscle use, and tracheal position.',
        normalFindings: 'Symmetric chest expansion, normal respiratory rate, no accessory muscle use, midline trachea',
        abnormalFindings: [
          { finding: 'Barrel chest', significance: 'Hyperinflation from air trapping', associatedConditions: ['COPD', 'Asthma'] },
          { finding: 'Accessory muscle use', significance: 'Respiratory distress', associatedConditions: ['COPD exacerbation', 'Asthma', 'Pneumonia'] },
          { finding: 'Tracheal deviation', significance: 'Mass effect or volume loss', associatedConditions: ['Tension pneumothorax', 'Large effusion', 'Atelectasis'] },
        ],
        clinicalPearls: [
          'Count respiratory rate when patient is unaware',
          'Note pursed-lip breathing (COPD) or tripod positioning',
        ],
      },
      {
        name: 'Chest auscultation',
        technique: 'auscultation',
        procedure: 'Listen systematically to all lung zones anteriorly, laterally, and posteriorly, comparing side to side.',
        normalFindings: 'Vesicular breath sounds throughout, equal bilaterally',
        abnormalFindings: [
          { finding: 'Crackles/rales', significance: 'Fluid in airways or alveoli', associatedConditions: ['Pulmonary edema', 'Pneumonia', 'Pulmonary fibrosis'] },
          { finding: 'Wheezing', significance: 'Airway narrowing', associatedConditions: ['Asthma', 'COPD', 'Bronchitis'] },
          { finding: 'Decreased breath sounds', significance: 'Reduced air movement', associatedConditions: ['Pleural effusion', 'Pneumothorax', 'COPD'] },
          { finding: 'Bronchial breath sounds', significance: 'Consolidation transmitting sounds', associatedConditions: ['Pneumonia', 'Atelectasis'] },
        ],
        clinicalPearls: [
          'Fine crackles suggest fibrosis; coarse crackles suggest secretions',
          'Inspiratory wheezes suggest upper airway; expiratory suggest lower',
        ],
      },
      {
        name: 'Chest percussion',
        technique: 'percussion',
        procedure: 'Percuss systematically comparing sides. Note resonance quality.',
        normalFindings: 'Resonant throughout lung fields, dull over heart and liver',
        abnormalFindings: [
          { finding: 'Dullness', significance: 'Fluid or solid tissue', associatedConditions: ['Pleural effusion', 'Pneumonia', 'Mass'] },
          { finding: 'Hyperresonance', significance: 'Increased air', associatedConditions: ['Pneumothorax', 'COPD', 'Asthma'] },
        ],
        clinicalPearls: [
          'Percuss to assess diaphragm excursion',
          'Dullness that shifts with position suggests effusion',
        ],
      },
    ],
  },
  abdomen: {
    examComponents: [
      {
        name: 'Abdominal inspection',
        technique: 'inspection',
        procedure: 'Observe contour, symmetry, visible pulsations, masses, or distension with patient supine and knees bent.',
        normalFindings: 'Flat or slightly rounded, symmetric, no visible masses or pulsations',
        abnormalFindings: [
          { finding: 'Distension', significance: 'Fluid, fat, fetus, flatus, or feces', associatedConditions: ['Ascites', 'Bowel obstruction', 'Pregnancy'] },
          { finding: 'Visible peristalsis', significance: 'Bowel obstruction', associatedConditions: ['Small bowel obstruction'] },
          { finding: 'Caput medusae', significance: 'Portal hypertension', associatedConditions: ['Cirrhosis'] },
        ],
        clinicalPearls: [
          'Flank fullness suggests ascites',
          'Note surgical scars for history clues',
        ],
      },
      {
        name: 'Abdominal auscultation',
        technique: 'auscultation',
        procedure: 'Listen in all four quadrants for bowel sounds. Listen for bruits over aorta and renal arteries.',
        normalFindings: 'Normal bowel sounds (5-30/min), no bruits',
        abnormalFindings: [
          { finding: 'Absent bowel sounds', significance: 'Ileus or late obstruction', associatedConditions: ['Paralytic ileus', 'Peritonitis'] },
          { finding: 'High-pitched/hyperactive', significance: 'Early obstruction or gastroenteritis', associatedConditions: ['Bowel obstruction', 'Gastroenteritis'] },
          { finding: 'Abdominal bruit', significance: 'Vascular stenosis', associatedConditions: ['Renal artery stenosis', 'AAA'] },
        ],
        clinicalPearls: [
          'Listen for at least 2 minutes before declaring absent bowel sounds',
          'Auscultate before palpation to avoid stimulating bowel sounds',
        ],
      },
      {
        name: 'Abdominal palpation',
        technique: 'palpation',
        procedure: 'Start with light palpation, then deep palpation in all quadrants. Assess for tenderness, guarding, masses, organomegaly.',
        normalFindings: 'Soft, non-tender, no masses, no organomegaly',
        abnormalFindings: [
          { finding: 'Rebound tenderness', significance: 'Peritoneal irritation', associatedConditions: ['Appendicitis', 'Peritonitis'] },
          { finding: 'Guarding', significance: 'Abdominal wall muscle contraction', associatedConditions: ['Acute abdomen'] },
          { finding: 'Murphy sign positive', significance: 'Acute cholecystitis', associatedConditions: ['Cholecystitis'] },
          { finding: 'Hepatomegaly', significance: 'Liver enlargement', associatedConditions: ['Cirrhosis', 'Hepatitis', 'CHF'] },
        ],
        clinicalPearls: [
          'Watch patient face during palpation for signs of pain',
          'Palpate tender areas last',
        ],
      },
    ],
  },
  head: {
    examComponents: [
      {
        name: 'Head inspection and palpation',
        technique: 'inspection',
        procedure: 'Inspect head shape, symmetry, scalp condition. Palpate for tenderness, masses.',
        normalFindings: 'Normocephalic, atraumatic, no masses or tenderness',
        abnormalFindings: [
          { finding: 'Scalp tenderness', significance: 'Temporal arteritis if localized to temples', associatedConditions: ['Temporal arteritis', 'Tension headache'] },
          { finding: 'Facial asymmetry', significance: 'Cranial nerve or stroke', associatedConditions: ['Bell palsy', 'Stroke'] },
        ],
        clinicalPearls: [
          'Palpate temporal arteries in patients >50 with new headache',
        ],
      },
    ],
  },
  neck: {
    examComponents: [
      {
        name: 'Thyroid examination',
        technique: 'palpation',
        procedure: 'Palpate thyroid from behind or front, have patient swallow. Assess size, nodules, tenderness.',
        normalFindings: 'Thyroid not enlarged, smooth, no nodules, moves with swallowing',
        abnormalFindings: [
          { finding: 'Goiter', significance: 'Thyroid enlargement', associatedConditions: ['Hyperthyroidism', 'Hypothyroidism', 'Iodine deficiency'] },
          { finding: 'Thyroid nodule', significance: 'Requires evaluation', associatedConditions: ['Thyroid adenoma', 'Thyroid cancer', 'Cyst'] },
          { finding: 'Thyroid tenderness', significance: 'Thyroiditis', associatedConditions: ['Subacute thyroiditis'] },
        ],
        clinicalPearls: [
          'Have patient drink water while you palpate',
          'Note if nodule moves with swallowing',
        ],
      },
      {
        name: 'Lymph node examination',
        technique: 'palpation',
        procedure: 'Systematically palpate cervical lymph node chains: submental, submandibular, anterior/posterior cervical, supraclavicular.',
        normalFindings: 'Small (<1cm), mobile, non-tender lymph nodes may be normal',
        abnormalFindings: [
          { finding: 'Lymphadenopathy', significance: 'Infection, inflammation, or malignancy', associatedConditions: ['Infection', 'Lymphoma', 'Metastatic cancer'] },
          { finding: 'Supraclavicular node', significance: 'Often indicates malignancy', associatedConditions: ['Lung cancer', 'GI malignancy'] },
        ],
        clinicalPearls: [
          'Supraclavicular nodes (Virchow node) concerning for malignancy',
          'Tender nodes suggest infection; hard, fixed nodes suggest malignancy',
        ],
      },
    ],
  },
};

// ============================================
// Helper Functions
// ============================================

/**
 * Get procedure description for complexity level
 */
function getProcedureForLevel(
  procedure: string,
  level: ComplexityLevel
): string {
  if (level <= 2) {
    // Simplify for lower levels
    return procedure.split('.')[0] + '.';
  }
  return procedure;
}

/**
 * Get clinical pearls for level
 */
function getClinicalPearlsForLevel(
  pearls: string[] | undefined,
  level: ComplexityLevel
): string[] | undefined {
  if (level < 4 || !pearls) return undefined;
  return pearls;
}

// ============================================
// Main Query Function
// ============================================

/**
 * Get physical examination content for a specific region
 *
 * @param regionId - The ID of the anatomical region
 * @param options - Query options
 * @returns Array of physical exam content items
 */
export async function getPhysicalExamForRegion(
  regionId: string,
  options: RegionalContentOptions = {}
): Promise<PhysicalExamContent[]> {
  const {
    complexityLevel = 3,
    maxItemsPerType = 15,
    searchQuery,
  } = options;

  const region = getRegion(regionId);
  if (!region) {
    // Try keyword matching
    const matchingRegions = findRegionsByKeywords([regionId]);
    if (matchingRegions.length === 0) {
      return [];
    }
    return getPhysicalExamForRegion(matchingRegions[0].id, options);
  }

  const results: PhysicalExamContent[] = [];

  // Get region-specific exam content
  const regionExam = REGION_PHYSICAL_EXAM[regionId];

  if (regionExam) {
    for (const component of regionExam.examComponents) {
      const content: PhysicalExamContent = {
        id: `physical-exam-${regionId}-${component.name.replace(/\s+/g, '-').toLowerCase()}`,
        name: component.name,
        technique: component.technique,
        summary: `${component.technique.charAt(0).toUpperCase() + component.technique.slice(1)} technique for ${region.name} examination`,
        procedure: getProcedureForLevel(component.procedure, complexityLevel),
        normalFindings: component.normalFindings,
        abnormalFindings: component.abnormalFindings,
        clinicalPearls: getClinicalPearlsForLevel(component.clinicalPearls, complexityLevel),
        sourceId: `${regionId}-${component.name}`,
        sourcePath: 'core/physical-exam',
        complexityLevel,
      };

      // Apply search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !content.name.toLowerCase().includes(query) &&
          !content.procedure.toLowerCase().includes(query) &&
          !content.normalFindings.toLowerCase().includes(query) &&
          !content.abnormalFindings.some(
            (f) =>
              f.finding.toLowerCase().includes(query) ||
              f.associatedConditions.some((c) => c.toLowerCase().includes(query))
          )
        ) {
          continue;
        }
      }

      results.push(content);
    }
  }

  return results.slice(0, maxItemsPerType);
}

/**
 * Get physical exam by technique
 */
export async function getPhysicalExamByTechnique(
  technique: 'inspection' | 'palpation' | 'percussion' | 'auscultation' | 'special-test',
  options: RegionalContentOptions = {}
): Promise<PhysicalExamContent[]> {
  const results: PhysicalExamContent[] = [];

  for (const regionId of Object.keys(REGION_PHYSICAL_EXAM)) {
    const regionContent = await getPhysicalExamForRegion(regionId, options);
    const filtered = regionContent.filter((c) => c.technique === technique);
    results.push(...filtered);
  }

  return results.slice(0, options.maxItemsPerType || 20);
}

/**
 * Search physical exam content
 */
export async function searchPhysicalExamContent(
  query: string,
  options: RegionalContentOptions = {}
): Promise<PhysicalExamContent[]> {
  const results: PhysicalExamContent[] = [];

  for (const regionId of Object.keys(REGION_PHYSICAL_EXAM)) {
    const regionContent = await getPhysicalExamForRegion(regionId, {
      ...options,
      searchQuery: query,
    });
    results.push(...regionContent);
  }

  return results.slice(0, options.maxItemsPerType || 20);
}

/**
 * Get abnormal findings for a region
 */
export async function getAbnormalFindingsForRegion(
  regionId: string,
  options: RegionalContentOptions = {}
): Promise<AbnormalFindingSummary[]> {
  const examContent = await getPhysicalExamForRegion(regionId, options);
  const allFindings: AbnormalFindingSummary[] = [];

  for (const exam of examContent) {
    allFindings.push(...exam.abnormalFindings);
  }

  return allFindings;
}
