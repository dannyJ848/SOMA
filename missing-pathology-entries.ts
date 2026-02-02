/**
 * Missing Pathology Encyclopedia Entries
 * 
 * Educational content for neurodegenerative conditions.
 * This content is for educational purposes only and not medical advice.
 * 
 * Source: Aggregated from peer-reviewed medical literature
 * Last Updated: 2026-02-02
 */

export const MISSING_PATHOLOGY_ENTRIES = [
  {
    id: 'pathology-neurodegeneration',
    condition: 'Neurodegeneration',
    category: 'pathology',
    summary: 'Neurodegeneration refers to the progressive loss of structure or function of neurons, including death of neurons. It is a key feature of many central nervous system disorders and represents a major biomedical challenge due to the limited regenerative capacity of the central nervous system.',
    clinicalFeatures: [
      'Progressive cognitive decline',
      'Motor dysfunction (tremors, rigidity, bradykinesia)',
      'Memory impairment',
      'Behavioral and personality changes',
      'Loss of coordination and balance',
      'Speech and swallowing difficulties'
    ],
    pathophysiology: 'Neurodegeneration involves multiple interconnected mechanisms including protein misfolding and aggregation (amyloid-beta, tau, alpha-synuclein), mitochondrial dysfunction leading to oxidative stress and impaired energy metabolism, chronic neuroinflammation with microglial activation, synaptic dysfunction disrupting neural communication, and ultimately neuronal apoptosis or necrosis. The selective vulnerability of specific neuronal populations determines the clinical phenotype.',
    diagnosticCriteria: 'Diagnosis is based on clinical neurological examination, neuropsychological testing, neuroimaging (MRI showing atrophy patterns, PET demonstrating abnormal protein deposition), CSF biomarker analysis (elevated p-tau, reduced amyloid-beta 42), and exclusion of reversible causes. Post-mortem histopathological examination remains the gold standard for definitive diagnosis.',
    relatedRegions: ['brain', 'cns', 'spinal-cord'],
    severity: 'severe',
    prevalence: 'Affects over 50 million people globally across all neurodegenerative diseases',
    keywords: ['neurodegeneration', 'neuron loss', 'protein aggregation', 'cognitive decline', 'motor dysfunction']
  },
  {
    id: 'condition-multiple-sclerosis',
    condition: 'Multiple Sclerosis',
    category: 'pathology',
    summary: 'Multiple Sclerosis (MS) is a chronic autoimmune-mediated inflammatory demyelinating disease of the central nervous system characterized by focal areas of demyelination (plaques), axonal loss, and gliosis affecting the brain and spinal cord.',
    clinicalFeatures: [
      'Visual disturbances (optic neuritis, diplopia, nystagmus)',
      'Sensory deficits (paresthesia, numbness, Lhermitte sign)',
      'Motor weakness and spasticity',
      'Ataxia and tremor',
      'Bladder and bowel dysfunction',
      'Fatigue and cognitive impairment',
      'Relapsing-remitting or progressive course'
    ],
    pathophysiology: 'MS pathogenesis involves autoreactive T-cells (CD4+ and CD8+) targeting myelin basic protein and other myelin antigens, crossing the blood-brain barrier and triggering inflammatory cascades. B-cells produce autoantibodies against myelin oligodendrocyte glycoprotein (MOG). The immune attack destroys oligodendrocytes causing demyelination, exposing axons to injury. Over time, repeated demyelination leads to axonal transection and irreversible neurological disability. Four clinical courses: relapsing-remitting (85%), secondary progressive, primary progressive, and progressive-relapsing.',
    diagnosticCriteria: 'McDonald Criteria (2017 revision): Demonstration of dissemination of lesions in space (DIS) and time (DIT) using MRI. Required: ≥1 CNS lesions (periventricular, juxtacortical, infratentorial, or spinal cord) plus oligoclonal bands in CSF. MRI shows T2 hyperintense white matter lesions, gadolinium-enhancing active lesions, and black holes (T1 hypointensities indicating axonal loss). Evoked potential testing demonstrates slowed conduction.',
    relatedRegions: ['brain', 'cns', 'spinal-cord', 'optic-nerve'],
    severity: 'severe',
    prevalence: 'Approximately 2.8 million people worldwide; higher prevalence in temperate climates',
    keywords: ['multiple sclerosis', 'demyelination', 'autoimmune', 'oligodendrocyte', 'white matter lesions']
  },
  {
    id: 'condition-alzheimer-disease',
    condition: 'Alzheimer Disease',
    category: 'pathology',
    summary: 'Alzheimer Disease (AD) is the most common cause of dementia, characterized by progressive cognitive decline, memory impairment, and behavioral changes. Pathologically defined by extracellular amyloid-beta plaques and intracellular neurofibrillary tangles composed of hyperphosphorylated tau protein.',
    clinicalFeatures: [
      'Progressive episodic memory impairment (early sign)',
      'Executive dysfunction and impaired judgment',
      'Aphasia, apraxia, agnosia (cortical signs)',
      'Behavioral and psychological symptoms (agitation, apathy, psychosis)',
      'Disorientation to time and place',
      'Difficulty with complex tasks and problem-solving',
      'Personality changes and social withdrawal'
    ],
    pathophysiology: 'The amyloid cascade hypothesis posits that abnormal cleavage of amyloid precursor protein (APP) by beta and gamma secretases produces amyloid-beta 42, which oligomerizes and deposits as senile plaques. These trigger tau hyperphosphorylation via kinases (GSK-3β, CDK5), causing neurofibrillary tangles that disrupt microtubule stability. Synaptic dysfunction occurs before neuronal death. Neuroinflammation with microglial activation and complement cascade involvement accelerates neurodegeneration. Braak staging describes the stereotyped progression of tau pathology from entorhinal cortex to limbic areas to neocortex.',
    diagnosticCriteria: 'NIA-AA Criteria (2011/2018): Clinical diagnosis requires progressive cognitive decline interfering with daily function, with early and prominent episodic memory impairment. Biomarker confirmation: (A) Amyloid - reduced CSF Aβ42 or positive amyloid PET; (T) Tau - elevated CSF p-tau or tau PET; (N) Neurodegeneration - MRI hippocampal/medial temporal atrophy, FDG-PET hypometabolism in temporoparietal regions, or elevated CSF total tau. Definite AD requires neuropathological confirmation with CERAD score and Braak staging.',
    relatedRegions: ['brain', 'hippocampus', 'entorhinal-cortex', 'temporal-lobe', 'parietal-lobe'],
    severity: 'severe',
    prevalence: 'Affects over 55 million people worldwide; 60-80% of all dementia cases',
    keywords: ['alzheimer', 'dementia', 'amyloid plaques', 'neurofibrillary tangles', 'tau protein', 'memory loss']
  },
  {
    id: 'condition-parkinson-disease',
    condition: 'Parkinson Disease',
    category: 'pathology',
    summary: 'Parkinson Disease (PD) is a progressive neurodegenerative movement disorder characterized by degeneration of dopaminergic neurons in the substantia nigra pars compacta, leading to dopamine deficiency and the classic motor symptoms of tremor, bradykinesia, rigidity, and postural instability.',
    clinicalFeatures: [
      'Resting tremor (asymmetric, starting in one hand - pill-rolling)',
      'Bradykinesia (slowness of movement and initiation)',
      'Muscle rigidity (cogwheel or lead-pipe)',
      'Postural instability (late feature)',
      'Non-motor symptoms: depression, anxiety, anosmia',
      'REM sleep behavior disorder and daytime sleepiness',
      'Autonomic dysfunction (orthostatic hypotension, constipation)',
      'Cognitive impairment and dementia (late stage)'
    ],
    pathophysiology: 'The pathological hallmark is the presence of Lewy bodies (intracellular protein aggregates containing alpha-synuclein, ubiquitin, and other proteins) within surviving dopaminergic neurons of the substantia nigra. Loss of 60-80% of nigral neurons and 80% striatal dopamine leads to imbalance in the basal ganglia direct and indirect pathways. The Braak staging hypothesis proposes PD spreads from lower brainstem (dorsal motor nucleus of vagus) rostrally to substantia nigra, limbic areas, and finally cortex. Mitochondrial dysfunction (complex I inhibition), oxidative stress, and impaired protein degradation (ubiquitin-proteasome and autophagy-lysosome systems) contribute to pathogenesis. Genetic factors (LRRK2, PARK7, PINK1, PRKN, SNCA mutations) account for 10-15% of cases.',
    diagnosticCriteria: 'Clinical diagnosis per UK Parkinson Disease Society Brain Bank Criteria: Step 1 - Bradykinesia plus at least one of: resting tremor or rigidity. Step 2 - Exclusion of atypical features (early falls, vertical gaze palsy, cerebellar signs). Step 3 - Supportive features: unilateral onset, persistent asymmetry, excellent levodopa response. DaTscan shows reduced presynaptic dopamine transporter binding (asymmetric). MRI is primarily to exclude structural lesions. Post-mortem confirmation requires Lewy bodies and substantia nigra neuronal loss.',
    relatedRegions: ['brain', 'substantia-nigra', 'basal-ganglia', 'striatum', 'brainstem'],
    severity: 'severe',
    prevalence: 'Approximately 10 million people worldwide; 1-2% of population over 65',
    keywords: ['parkinson', 'dopamine', 'substantia nigra', 'lewy bodies', 'alpha-synuclein', 'bradykinesia', 'tremor']
  }
];

export default MISSING_PATHOLOGY_ENTRIES;
