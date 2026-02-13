import type { EducationalContent } from '../../../types';

export const allergicRhinitis: EducationalContent = {
  id: 'allergic-rhinitis-education',
  type: 'condition',
  name: 'Allergic Rhinitis',
  alternateNames: ['Hay Fever', 'Seasonal Allergies', 'Perennial Rhinitis', 'Nasal Allergies'],
  levels: {
    1: {
      level: 1,
      summary: 'Allergic rhinitis is a common condition where the nose becomes irritated and inflamed due to allergies to things like pollen, dust, or pet dander.',
      explanation: `Allergic rhinitis, often called hay fever, is when your nose gets stuffy, runny, and itchy because your body overreacts to things in the air. Common triggers include pollen from trees, grass, and weeds, as well as dust mites, pet dander from cats and dogs, and mold.

When someone with allergies breathes in these triggers, their immune system thinks they are harmful and releases chemicals like histamine. This causes symptoms such as sneezing, a runny or stuffy nose, itchy eyes, and an itchy throat.

Seasonal allergies happen at certain times of year when pollen counts are high, like spring for tree pollen or fall for ragweed. Perennial allergies happen year-round and are usually caused by indoor allergens like dust mites or pets.

Treatment includes avoiding triggers when possible, taking over-the-counter antihistamines, using nasal sprays, and in some cases, getting allergy shots to help the body become less sensitive to allergens.`,
      keyTerms: [
        { term: 'allergen', definition: 'A substance that causes an allergic reaction, like pollen or pet dander' },
        { term: 'histamine', definition: 'A chemical released by the body during an allergic reaction that causes symptoms' },
        { term: 'pollen', definition: 'Fine powder from plants that can cause seasonal allergies' },
        { term: 'antihistamine', definition: 'Medicine that blocks histamine to reduce allergy symptoms' }
      ],
      analogies: [
        'Allergic rhinitis is like a security system that goes off when a harmless person walks by - the body overreacts to safe substances',
        'Think of histamine like an alarm bell that rings too loudly when allergens are present'
      ],
      examples: [
        'A child who sneezes and has watery eyes every spring when oak trees bloom',
        'Someone who has a stuffy nose year-round that gets worse when they visit homes with cats'
      ]
    },
    2: {
      level: 2,
      summary: 'Allergic rhinitis is an IgE-mediated inflammatory condition of the nasal mucosa triggered by allergens, classified as seasonal or perennial based on timing and triggers.',
      explanation: `Allergic rhinitis is the most common allergic disease, affecting up to 30% of adults and 40% of children worldwide. It is an IgE-mediated type I hypersensitivity reaction affecting the nasal mucous membranes.

Pathophysiology:
The allergic response occurs in two phases:

Early phase (minutes):
- Allergen exposure and binding to allergen-specific IgE on mast cells
- Mast cell degranulation releasing preformed mediators
- Histamine causes vasodilation, increased vascular permeability, mucus secretion, and sensory nerve stimulation
- Symptoms: Sneezing, rhinorrhea, nasal itching, congestion

Late phase (hours):
- Cytokine and chemokine release (IL-4, IL-5, IL-13, TNF-alpha)
- Recruitment of eosinophils, basophils, and T-cells
- Sustained inflammation and nasal hyperresponsiveness
- Persistent congestion and mucus production

Classification:

Seasonal (intermittent):
- Symptoms during specific pollen seasons
- Tree pollen: Spring
- Grass pollen: Late spring to summer
- Weed pollen: Late summer to fall

Perennial (persistent):
- Year-round symptoms
- Triggers: Dust mites, animal dander, cockroaches, indoor molds
- Often less severe but more chronic

Mixed:
- Both seasonal and perennial components

Clinical features:
- Nasal: Sneezing, rhinorrhea (clear, watery), nasal congestion, itching, postnasal drip
- Ocular: Itchy, watery, red eyes (allergic conjunctivitis)
- Other: Itchy throat, ears, palate; cough from postnasal drip; fatigue
- Physical exam: Pale, boggy nasal turbinates; clear rhinorrhea; allergic shiners (dark circles under eyes); nasal crease from frequent nose rubbing

Associated conditions:
- Allergic conjunctivitis (common comorbidity)
- Asthma ("united airway disease" - 40% of rhinitis patients have asthma)
- Atopic dermatitis
- Eustachian tube dysfunction, otitis media with effusion
- Sinusitis (acute or chronic)
- Sleep disturbance
- Decreased quality of life and work/school performance`,
      keyTerms: [
        { term: 'IgE', definition: 'Immunoglobulin E; antibody type responsible for allergic reactions' },
        { term: 'mast cell', definition: 'Immune cell containing histamine and other mediators; central to allergic reactions' },
        { term: 'eosinophil', definition: 'White blood cell type associated with allergic inflammation and late-phase reactions' },
        { term: 'allergic shiners', definition: 'Dark discoloration under eyes from venous congestion in allergic rhinitis' },
        { term: 'united airway disease', definition: 'Concept that upper and lower airways are linked; rhinitis and asthma often coexist' }
      ],
      analogies: [
        'The two-phase allergic reaction is like a flash flood followed by lingering high water levels',
        'IgE is like a loaded gun waiting for the allergen trigger to pull it'
      ],
      examples: [
        'A college student with springtime sneezing fits, itchy eyes, and exam performance decline during peak pollen season',
        'An office worker with year-round nasal congestion that improves on vacation but returns at home - likely dust mite allergy'
      ]
    },
    3: {
      level: 3,
      summary: 'Allergic rhinitis involves T-helper 2 cell activation, IgE production, mast cell sensitization, and eosinophilic inflammation, with diagnosis based on history, exam, and specific IgE testing.',
      explanation: `The immunopathogenesis of allergic rhinitis involves a complex interplay of innate and adaptive immune responses leading to sustained inflammation of the nasal mucosa.

Immunologic mechanisms:

Sensitization phase:
- Allergen presentation by dendritic cells to naive T-cells
- T-cell differentiation to Th2 phenotype under influence of IL-4, IL-33, TSLP
- Th2 cells produce IL-4, IL-5, IL-13
- IL-4 and IL-13 promote B-cell class switching to IgE production
- IgE binds to high-affinity Fc epsilon RI receptors on mast cells and basophils
- Nasal mucosa now sensitized to specific allergen

Effector phase:
- Re-exposure to allergen cross-links IgE on mast cells
- Mast cell activation and degranulation
- Release of preformed mediators: Histamine, tryptase, chymase, heparin
- Synthesis of newly generated mediators: Prostaglandins, leukotrienes, platelet-activating factor
- Cytokine cascade recruits inflammatory cells

Cellular players:
- Eosinophils: Release cationic proteins, leukotrienes; hallmark of allergic inflammation
- Basophils: Similar to mast cells, recruited to tissues in late phase
- Neutrophils: Present in some severe or chronic cases
- Th2 cells: Drive and perpetuate allergic inflammation
- Treg cells: Deficient function may contribute to allergic disease

Neural mechanisms:
- Sensory nerve activation causes sneezing and itching
- Reflex arcs contribute to nasal hyperresponsiveness
- Autonomic imbalance (parasympathetic overactivity)

Diagnosis:

History:
- Temporal pattern (seasonal vs perennial)
- Trigger identification
- Family history of atopy
- Response to previous treatments
- Impact on sleep, work, school
- Associated conditions (asthma, eczema)

Physical examination:
- Nasal mucosa: Pale, boggy, edematous turbinates with clear discharge
- Conjunctiva: Injection, chemosis, tearing
- Facial features: Allergic shiners, Dennie-Morgan lines (infraorbital folds), nasal crease
- Oropharynx: "Cobblestoning" of posterior pharynx from lymphoid hyperplasia

Diagnostic testing:

Skin prick testing:
- Most sensitive and specific for IgE-mediated allergy
- Commercial allergen extracts applied to skin
- Wheal and flare response indicates sensitization
- Positive and negative controls required
- Contraindicated with severe eczema, antihistamine use

Specific IgE blood testing:
- Radioallergosorbent test (RAST) or ImmunoCAP
- Measures allergen-specific IgE in serum
- Useful when skin testing contraindicated
- Slightly less sensitive than skin testing
- Component-resolved diagnostics available for some allergens

Nasal cytology:
- Nasal smear showing >5% eosinophils supports allergic rhinitis
- Can help distinguish from nonallergic rhinitis

Nasal endoscopy:
- Evaluates for structural abnormalities, polyps
- Assess for complicating sinusitis`,
      keyTerms: [
        { term: 'Th2 cells', definition: 'T-helper cells producing IL-4, IL-5, IL-13 that drive allergic responses' },
        { term: 'Fc epsilon RI', definition: 'High-affinity IgE receptor on mast cells and basophils' },
        { term: 'leukotrienes', definition: 'Inflammatory mediators causing bronchoconstriction and mucus secretion' },
        { term: 'component-resolved diagnostics', definition: 'Testing for specific allergen components to distinguish true allergy from cross-reactivity' },
        { term: 'Dennie-Morgan lines', definition: 'Prominent infraorbital skin folds associated with atopic dermatitis and allergy' }
      ]
    },
    4: {
      level: 4,
      summary: 'Allergic rhinitis management follows a stepwise approach including allergen avoidance, pharmacotherapy (intranasal corticosteroids, antihistamines, leukotriene antagonists), and allergen immunotherapy for refractory cases.',
      explanation: `Management of allergic rhinitis requires a comprehensive approach tailored to symptom severity, trigger identification, patient preferences, and comorbidities. The ARIA (Allergic Rhinitis and its Impact on Asthma) guidelines provide evidence-based recommendations.

Stepwise treatment approach:

Mild intermittent symptoms:
- Second-generation oral antihistamine OR
- Intranasal antihistamine

Moderate-severe or persistent symptoms:
- Intranasal corticosteroid (first-line)
- Add oral or intranasal antihistamine if needed
- Consider combination therapy for optimal control

Pharmacotherapy:

Intranasal corticosteroids (most effective single therapy):
- Mechanism: Reduce inflammation by inhibiting cytokine production, eosinophil recruitment, and mast cell activity
- Examples: Fluticasone, mometasone, budesonide, triamcinolone
- Onset: Some effect within hours; maximal benefit after 1-2 weeks
- Side effects: Epistaxis, nasal irritation, rarely growth suppression in children
- Preferred for moderate-severe or persistent symptoms

Second-generation antihistamines:
- Mechanism: H1 receptor antagonists without significant sedation
- Oral: Cetirizine, levocetirizine, loratadine, desloratadine, fexofenadine
- Intranasal: Azelastine, olopatadine (faster onset than oral)
- Ocular: Ketotifen, olopatadine drops for allergic conjunctivitis
- Side effects: Generally minimal; cetirizine may cause some drowsiness

Leukotriene receptor antagonists:
- Montelukast blocks cysteinyl leukotriene receptor
- Less effective than intranasal corticosteroids
- Useful for patients with concurrent asthma
- FDA black box warning for neuropsychiatric effects

Decongestants:
- Oral pseudoephedrine: Systemic vasoconstriction, hypertension risk
- Topical oxymetazoline: Rapid relief but limit to 3 days (rhinitis medicamentosa)
- Use with caution in cardiovascular disease

Intranasal ipratropium bromide:
- Reduces rhinorrhea (particularly gustatory rhinitis)
- Minimal effect on congestion or sneezing

Cromolyn sodium:
- Mast cell stabilizer
- Very safe but requires frequent dosing (4-6 times daily)
- Best for prophylaxis

Combination therapies:
- Azelastine/fluticasone nasal spray (Dymista)
- Superior to either agent alone for moderate-severe disease

Allergen immunotherapy:

Indications:
- Inadequate response to pharmacotherapy
- Desire to reduce long-term medication use
- Allergic rhinitis with concurrent allergic asthma
- Significant side effects from medications

Routes:
- Subcutaneous immunotherapy (SCIT): Weekly build-up to maintenance, then every 2-4 weeks
- Sublingual immunotherapy (SLIT): Daily self-administered tablets or drops

Duration: 3-5 years typically
Efficacy: Reduces symptoms and medication needs; may prevent new sensitizations and asthma development

Allergen avoidance:

Dust mites:
- Encase mattress and pillows in allergen-impermeable covers
- Wash bedding in hot water (>130F) weekly
- Reduce indoor humidity <50%
- Remove carpets, upholstered furniture

Pollen:
- Monitor pollen counts; stay indoors during peak times
- Keep windows closed; use HEPA air filtration
- Shower and change clothes after outdoor exposure

Animal dander:
- Remove pet from home (most effective)
- If keeping pet: HEPA filtration, restrict pet from bedroom, frequent bathing

Special populations:

Children:
- Intranasal corticosteroids safe; monitor growth with high doses
- Second-generation antihistamines preferred over first-generation
- Consider impact on school performance

Pregnancy:
- Intranasal budesonide (category B) preferred
- Cetirizine, loratadine considered safe
- Avoid oral decongestants in first trimester

Elderly:
- Avoid first-generation antihistamines (anticholinergic effects)
- Caution with decongestants (hypertension, BPH)
- Intranasal corticosteroids generally safe`,
      keyTerms: [
        { term: 'intranasal corticosteroid', definition: 'Nasal spray reducing local inflammation; most effective rhinitis medication' },
        { term: 'ARIA guidelines', definition: 'Allergic Rhinitis and its Impact on Asthma; evidence-based treatment guidelines' },
        { term: 'allergen immunotherapy', definition: 'Desensitization through controlled exposure to allergens; modifies immune response' },
        { term: 'rhinitis medicamentosa', definition: 'Rebound nasal congestion from prolonged topical decongestant use' },
        { term: 'gustatory rhinitis', definition: 'Watery rhinorrhea triggered by eating, especially spicy foods' }
      ],
      clinicalNotes: `Clinical pearls for allergic rhinitis:

1. Intranasal corticosteroids are the most effective monotherapy for moderate-severe disease - start with these
2. Treat the nose and eyes together - many patients have concurrent allergic conjunctivitis
3. First-generation antihistamines (diphenhydramine, chlorpheniramine) are NOT recommended due to sedation and anticholinergic effects
4. Montelukast is inferior to intranasal corticosteroids for rhinitis; reserve for patients with concurrent asthma

Differential diagnosis:
- Nonallergic/vasomotor rhinitis: No eosinophils, negative allergy testing, triggers are irritants
- Infectious rhinitis: Discolored discharge, shorter duration, systemic symptoms
- Chronic rhinosinusitis: Facial pressure, decreased smell, longer duration
- Rhinitis medicamentosa: History of decongestant overuse
- Hormonal rhinitis: Pregnancy, hypothyroidism
- Drug-induced: Alpha-blockers, phosphodiesterase inhibitors, cocaine

Complications and comorbidities:
- Otitis media with effusion in children
- Sleep-disordered breathing, OSA
- Dental malocclusion (mouth breathing)
- Poor asthma control
- Anosmia from chronic inflammation

When to refer:
- Diagnostic uncertainty
- Need for allergy testing
- Consideration of immunotherapy
- Failure of appropriate medical therapy
- Suspected complications (sinusitis, polyps)
- Concurrent asthma requiring optimization

Quality of life:
- Assess impact on sleep, work, school
- Allergic rhinitis significantly impairs quality of life
- Effective treatment improves cognitive function and productivity
- Consider cost of medications vs. immunotherapy long-term`
    },
    5: {
      level: 5,
      summary: 'Advanced concepts include biologic therapies for severe disease, local allergic rhinitis, epithelial barrier dysfunction, microbiome influences, and precision medicine approaches to allergen immunotherapy.',
      explanation: `Contemporary research in allergic rhinitis focuses on novel therapeutic targets, understanding local allergic responses, microbiome interactions, and personalized treatment approaches.

Biologic therapies:

For severe allergic disease not controlled with standard therapy:

Anti-IgE (omalizumab):
- Monoclonal antibody binding free IgE
- Reduces IgE-mediated mast cell activation
- Primarily for asthma and chronic urticaria
- Limited use in rhinitis alone due to cost

Anti-IL-4/IL-13 (dupilumab):
- Blocks shared receptor component
- Approved for asthma, atopic dermatitis, chronic rhinosinusitis with nasal polyps
- Effective for severe allergic rhinitis in polyposis patients

Anti-IL-5/IL-5R (mepolizumab, reslizumab, benralizumab):
- Depletes eosinophils
- Approved for eosinophilic asthma and nasal polyps
- May benefit severe eosinophilic rhinitis

Anti-TSLP (tezepelumab):
- Blocks epithelial cytokine upstream of Th2 response
- Approved for severe asthma
- Potential role in allergic airway disease

Local allergic rhinitis (entopy):
- Patients with typical allergic rhinitis symptoms but negative skin tests and serum IgE
- Local production of specific IgE in nasal mucosa
- Positive nasal allergen challenge
- Responds to nasal corticosteroids and antihistamines
- May represent early stage of allergic disease

Epithelial barrier dysfunction:
- Disruption of tight junctions in nasal epithelium
- Allows allergen penetration and immune activation
- Thymic stromal lymphopoietin (TSLP), IL-33, IL-25 released by damaged epithelium
- "Alarmins" drive type 2 inflammation
- Therapeutic targets: Barriers restoration, alarmins blockade

Microbiome and allergy:
- Reduced microbial diversity associated with allergic disease
- "Hygiene hypothesis" - early microbial exposure protective
- Probiotics: Mixed results for rhinitis prevention/treatment
- Intranasal probiotics under investigation
- Role of Staphylococcus aureus superantigens in severe disease

Precision medicine in immunotherapy:

Predictors of immunotherapy response:
- Specific IgE levels and skin test wheal size
- Basophil activation tests
- Component-resolved diagnostics
- Genetic polymorphisms (IL10, TGF-beta)

Biomarkers:
- Changes in specific IgG4 during immunotherapy
- IgE-facilitated allergen binding inhibition
- Basophil reactivity changes

Dosing optimization:
- Cluster and rush immunotherapy protocols for rapid build-up
- Dose-adjustment based on local reactions
- Epicutaneous immunotherapy for food allergy being explored for aeroallergens

Novel immunotherapy approaches:

Intralymphatic immunotherapy:
- Direct injection into lymph nodes
- Requires fewer injections, faster response
- Limited availability, specialized training required

Peptide immunotherapy:
- Short allergen-derived peptides
- T-cell epitope specific
- Reduced risk of anaphylaxis
- Less effective than whole allergen

Recombinant allergen vaccines:
- Standardized, purified allergen proteins
- Hypoallergenic variants
- Enhanced with adjuvants (MPL, CpG)

Adjuvants:
- Monophosphoryl lipid A (MPL)
- CpG oligonucleotides (TLR9 agonists)
- Enhance Th1 response, reduce Th2

Gene and cellular therapy:
- CAR-Treg cells for tolerance induction (experimental)
- Gene editing of allergen-specific B-cells (preclinical)

Environmental interventions:

Air pollution and allergy:
- Diesel exhaust particles enhance allergic responses
- Climate change extending pollen seasons
- Urbanization associated with higher allergy prevalence

Prevention strategies:
- Early introduction of allergenic foods in infancy
- Maternal/prenatal interventions (probiotics, omega-3)
- Farm exposure (endotoxin, diverse microbiome) protective

Future directions:
- Microbiome modulation
- Epithelial barrier restoration
- Combination biologics targeting multiple pathways
- Tolerance-inducing vaccines
- Improved allergen avoidance technologies`,
      keyTerms: [
        { term: 'local allergic rhinitis', definition: 'Entopy; allergic inflammation confined to nasal mucosa without systemic IgE' },
        { term: 'alarmins', definition: 'Epithelial cytokines (TSLP, IL-33, IL-25) released with barrier disruption' },
        { term: 'intralymphatic immunotherapy', definition: 'Injection of allergen directly into lymph nodes; accelerated protocol' },
        { term: 'hygiene hypothesis', definition: 'Theory that reduced early microbial exposure increases allergic disease risk' },
        { term: 'component-resolved diagnostics', definition: 'Molecular allergy testing distinguishing primary sensitization from cross-reactivity' }
      ],
      clinicalNotes: `Advanced clinical considerations:

Refractory allergic rhinitis:
- Confirm diagnosis (consider local allergic rhinitis, nonallergic rhinitis, sinusitis)
- Verify medication adherence and technique
- Evaluate for structural abnormalities (polyps, septal deviation)
- Consider aspirin-exacerbated respiratory disease (Samter triad)
- Trial of combination intranasal antihistamine/corticosteroid
- Biologics for selected severe cases

Aspirin-exacerbated respiratory disease (AERD/Samter triad):
- Asthma, nasal polyps, sensitivity to COX-1 inhibitors
- Severe rhinitis component
- Cysteinyl leukotriene overproduction
- Desensitization to aspirin beneficial

Occupational allergic rhinitis:
- High-molecular-weight allergens: Flour, latex, enzymes, animals
- Low-molecular-weight: Diisocyanates, aldehydes (often irritant, not true allergy)
- Early identification and avoidance critical
- May progress to occupational asthma

Allergic rhinitis in athletes:
- Impairs performance through nasal obstruction
- Some medications restricted (check WADA list)
- Intranasal corticosteroids generally permitted
- Consider non-sedating antihistamines

Pediatric considerations:
- Early allergic sensitization predicts persistent disease
- Allergic march: Atopic dermatitis -> food allergy -> allergic rhinitis -> asthma
- Early intervention may modify disease trajectory
- Impact on learning and behavior

Research frontiers:
- Peanut oral immunotherapy success informing aeroallergen approaches
- Epigenetic modifications in allergic disease
- Exosomes and extracellular vesicles in immune modulation
- Artificial intelligence for pollen forecasting and symptom prediction`
    }
  },
  media: [],
  citations: [
    { id: '1', type: 'textbook', title: 'Middleton\'s Allergy: Principles and Practice', authors: ['Burks AW', 'Holgate ST', 'O\'Hehir RE'], source: 'Elsevier', chapter: 'Chapter 42: Allergic Rhinitis' },
    { id: '2', type: 'article', title: 'Allergic Rhinitis and its Impact on Asthma (ARIA) Guidelines', authors: ['Bousquet J', 'Khaltaev N', 'Cruz AA'], source: 'Allergy', chapter: '2008;2019 Revision' }
  ],
  crossReferences: [
    { targetId: 'asthma-allergy', targetType: 'condition', relationship: 'related' },
    { targetId: 'allergic-conjunctivitis', targetType: 'condition', relationship: 'related' },
    { targetId: 'immunotherapy', targetType: 'concept', relationship: 'related' }
  ],
  tags: {
    systems: ['allergy-immunology', 'respiratory'],
    topics: ['allergy', 'rhinitis', 'IgE-mediated disease'],
    keywords: ['allergic rhinitis', 'hay fever', 'pollen', 'dust mite', 'intranasal corticosteroid', 'antihistamine'],
    clinicalRelevance: 'high'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
