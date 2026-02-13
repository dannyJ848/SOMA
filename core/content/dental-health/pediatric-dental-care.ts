/**
 * Pediatric Dental Care - Comprehensive Educational Content
 *
 * Covers dental health specific to children from infancy through adolescence,
 * including teething, primary teeth care, orthodontic development, and
 * age-appropriate preventive strategies.
 */

import { EducationalContent } from "../types";

export const pediatricDentalCare: EducationalContent = {
  id: "topic-pediatric-dental-care",
  type: "topic",
  name: "Pediatric Dental Care",
  nameEs: 'Cuidado Dental Pediatrico',
  alternateNames: [
    "Children's Dental Health",
    "Pediatric Dentistry",
    "Kids Dental Care",
  ],

  levels: {
    1: {
      level: 1,
      summary: "Taking care of children's teeth starts before the first tooth even appears. Baby teeth are important for eating, speaking, and making room for adult teeth.",
      explanation: `**Why Baby Teeth Matter**

Even though baby teeth fall out, they are super important! Here is why:

**Baby teeth help kids:**
- Chew food properly so they get good nutrition
- Learn to speak clearly
- Hold space for adult teeth that come later
- Smile with confidence

**When Do Teeth Come In?**

**Baby teeth (also called primary teeth):**
- First tooth usually appears around 6 months old
- All 20 baby teeth usually appear by age 3
- Front teeth come first, then side teeth, then back teeth

**Adult teeth:**
- Start coming in around age 6
- Replace baby teeth over several years
- All 32 adult teeth (including wisdom teeth) by late teens

**How to Care for Children's Teeth**

**For babies (before teeth appear):**
- Wipe gums gently with a soft, damp cloth after feeding

**For babies and toddlers (first teeth):**
- Use a tiny smear of fluoride toothpaste (size of a grain of rice)
- Brush twice a day with a soft baby toothbrush
- Never put a baby to bed with a bottle of milk or juice

**For young children:**
- Use a pea-sized amount of toothpaste
- Help them brush until they can tie their shoes by themselves (around age 6-7)
- Start flossing when two teeth touch each other

**First Dentist Visit**
- Children should see a dentist by their first birthday or within 6 months of getting their first tooth`,
      keyTerms: [
        { term: "baby teeth", definition: "The first set of 20 teeth that children get, also called primary teeth" },
        { term: "teething", definition: "When baby teeth push through the gums, which can be uncomfortable" },
        { term: "cavity", definition: "A hole in the tooth caused by germs and sugar" },
        { term: "fluoride", definition: "A mineral that makes teeth stronger and helps prevent cavities" },
        { term: "pediatric dentist", definition: "A dentist who specializes in caring for children's teeth" },
      ],
      analogies: [
        "Baby teeth are like placeholders in a line - they save the spot for the bigger adult teeth that come later.",
        "Think of fluoride like a shield that protects teeth from cavity-causing germs.",
        "Teething is like a plant sprouting through soil - the tooth has to push through the gum to come out.",
      ],
      examples: [
        "A 2-year-old needs help brushing because they do not have the coordination to do it well themselves.",
        "Giving a baby a bottle of juice at bedtime can cause baby bottle tooth decay because the sugar sits on teeth all night.",
      ],
    },
    2: {
      level: 2,
      summary: "Pediatric dental care encompasses the management of primary dentition, guidance of eruption patterns, prevention of early childhood caries, and establishment of lifelong oral health habits.",
      explanation: `## Tooth Development Timeline

**Primary (Baby) Teeth:**
| Tooth Type | Eruption Age | Shedding Age |
|------------|--------------|--------------|
| Central incisors | 6-12 months | 6-7 years |
| Lateral incisors | 9-16 months | 7-8 years |
| Canines | 16-23 months | 9-12 years |
| First molars | 13-19 months | 9-11 years |
| Second molars | 23-33 months | 10-12 years |

**Permanent Teeth:**
| Tooth Type | Eruption Age |
|------------|--------------|
| First molars | 6-7 years |
| Central incisors | 6-8 years |
| Lateral incisors | 7-9 years |
| Canines | 9-12 years |
| Premolars | 10-12 years |
| Second molars | 11-13 years |
| Third molars | 17-21 years |

## Common Pediatric Dental Conditions

**Early Childhood Caries (ECC):**
- Previously called "baby bottle tooth decay"
- Caused by frequent exposure to sugary liquids
- Often affects upper front teeth first
- Preventable with proper feeding practices and oral hygiene

**Teething Discomfort:**
- Symptoms: drooling, irritability, gum rubbing, mild fever
- Management: cold teething rings, gentle gum massage
- Teething does NOT cause high fever, diarrhea, or rashes

## Preventive Care

**Fluoride:**
- Strengthens enamel through remineralization
- Topical fluoride (toothpaste, rinses) more effective than systemic
- Professional fluoride varnish applications every 3-6 months

**Dental Sealants:**
- Protective coating applied to chewing surfaces of molars
- Reduces cavity risk by up to 80%
- Recommended when permanent molars erupt (ages 6 and 12)

**Diet and Nutrition:**
- Limit sugary snacks and drinks
- Avoid frequent snacking
- Encourage water as the primary beverage

## First Dental Visit

- American Academy of Pediatric Dentistry recommends by age 1
- Establishes dental home
- Early detection of problems
- Parent education on oral hygiene`,
      keyTerms: [
        { term: "primary dentition", definition: "The first set of 20 deciduous (baby) teeth", pronunciation: "PRY-mary den-TI-shun" },
        { term: "early childhood caries (ECC)", definition: "Tooth decay in children under age 6; often caused by prolonged bottle feeding with sugary liquids" },
        { term: "dental sealant", definition: "Protective plastic coating applied to occlusal surfaces of molars to prevent decay" },
        { term: "fluoride varnish", definition: "Concentrated topical fluoride applied by dental professionals to strengthen enamel" },
        { term: "mixed dentition", definition: "Period when both primary and permanent teeth are present (approximately ages 6-12)" },
        { term: "eruption", definition: "The process of a tooth emerging through the gum tissue" },
      ],
      analogies: [
        "Dental sealants work like a raincoat for teeth - they keep out the bacteria and food particles that cause decay.",
        "The mixed dentition period is like a construction zone where old buildings (baby teeth) are being replaced with new ones (permanent teeth).",
      ],
    },
    3: {
      level: 3,
      summary: "Pediatric dentistry addresses the unique anatomical, developmental, and behavioral aspects of treating children, including management of the developing dentition, prevention and treatment of dental caries, and guidance of orofacial growth.",
      explanation: `## Anatomy of Primary vs. Permanent Teeth

**Structural Differences:**
| Feature | Primary Teeth | Permanent Teeth |
|---------|---------------|-----------------|
| Enamel thickness | 0.5-1.0 mm | 2.0-2.5 mm |
| Dentin thickness | Thinner | Thicker |
| Pulp chamber | Larger, closer to surface | Smaller relative to crown |
| Root length | Shorter | Longer |
| Root morphology | More divergent | Less divergent |

**Clinical Implications:**
- Caries progresses faster in primary teeth (thinner enamel)
- Pulp exposure occurs more easily
- Local anesthetic diffuses more readily through bone
- Resorption of primary roots allows for exfoliation

## Early Childhood Caries Pathophysiology

**Etiology:**
1. **Cariogenic bacteria**: Streptococcus mutans colonization (often vertical transmission from caregivers)
2. **Fermentable carbohydrates**: Frequent exposure to sugars
3. **Susceptible tooth surface**: Newly erupted teeth more vulnerable
4. **Time**: Prolonged acid exposure

**Patterns:**
- Maxillary anterior teeth affected first
- Progresses to maxillary and mandibular molars
- Mandibular incisors often spared (protected by tongue and saliva)

**Severe Early Childhood Caries (S-ECC):**
- Any smooth surface caries under age 3
- Missing or filled tooth surfaces due to caries under age 3
- More than 4 decayed/missing/filled surfaces in primary teeth at ages 3-5

## Behavior Management in Pediatric Dentistry

**Basic Techniques:**
- Tell-Show-Do: Explain procedure in age-appropriate terms
- Positive reinforcement
- Voice control
- Nonverbal communication
- Distraction

**Advanced Techniques:**
- Protective stabilization (when necessary for safety)
- Nitrous oxide sedation
- Oral conscious sedation
- General anesthesia (for extensive treatment or uncooperative patients)

## Pulp Therapy in Primary Teeth

**Indirect Pulp Treatment:**
- Remove caries close to pulp, leave layer of affected dentin
- Place liner and restoration
- Indicated when no pulp exposure

**Direct Pulp Cap:**
- Place biocompatible material directly on exposed pulp
- Limited success in primary teeth due to large pulp chambers

**Pulpotomy:**
- Remove coronal pulp, preserve radicular pulp
- Medicaments: MTA, ferric sulfate, formocresol
- Most common pulp treatment in primary molars

**Pulpectomy:**
- Complete removal of pulp tissue
- Resorbable filling material (ZOE paste)
- Indicated when radicular pulp is necrotic

## Space Maintenance

**Importance:**
- Premature loss of primary teeth can cause space loss
- Leads to crowding and malocclusion
- Adjacent teeth tip into extraction space

**Types of Space Maintainers:**
- Band and loop: Loss of single posterior tooth
- Distal shoe: Loss of primary second molar before first permanent molar eruption
- Lingual holding arch: Bilateral loss in mandible
- Nance appliance: Bilateral loss in maxilla
- Transpalatal arch: Bilateral maxillary anchorage`,
      keyTerms: [
        { term: "S. mutans", definition: "Streptococcus mutans; primary cariogenic bacterium transmitted from caregivers to children", pronunciation: "strep-toe-KOK-us MEW-tanz" },
        { term: "pulpotomy", definition: "Removal of coronal pulp tissue while preserving vital radicular pulp; treatment of choice for carious pulp exposures in primary teeth" },
        { term: "space maintainer", definition: "Fixed or removable appliance to preserve arch length after premature loss of primary teeth" },
        { term: "S-ECC", definition: "Severe Early Childhood Caries; aggressive pattern of decay in young children requiring comprehensive treatment" },
        { term: "MTA", definition: "Mineral trioxide aggregate; biocompatible material used for pulp therapy and root repairs" },
        { term: "exfoliation", definition: "Natural shedding of primary teeth as roots resorb and permanent successors erupt" },
      ],
      clinicalNotes: "Primary teeth have larger pulp chambers relative to crown size, making carious pulp exposure more likely even with moderate-appearing lesions. Always assess radiographically before assuming a lesion is superficial. S. mutans colonization can be delayed by reducing parental transmission (avoid sharing utensils, treat parental caries).",
    },
    4: {
      level: 4,
      summary: "Advanced pediatric dentistry integrates developmental biology, caries risk assessment protocols, evidence-based restorative approaches, and orthodontic considerations to optimize oral health outcomes from infancy through adolescence.",
      explanation: `## Developmental Biology of the Dentition

**Molecular Regulation:**
- Tooth development controlled by epithelial-mesenchymal interactions
- Key signaling pathways: Shh, Wnt, BMP, FGF
- Transcription factors: PAX9, MSX1, MSX2, RUNX2

**Congenital Dental Anomalies:**

| Condition | Prevalence | Genetics | Clinical Significance |
|-----------|------------|----------|----------------------|
| Hypodontia | 3-8% | PAX9, MSX1, AXIN2 | Space management, prosthetic planning |
| Supernumerary teeth | 1-3% | Often sporadic | Crowding, impaction, cysts |
| Dens invaginatus | 0.3-10% | Unknown | Pulp necrosis risk, need for prophylactic treatment |
| Amelogenesis imperfecta | 1:700-14,000 | AMELX, ENAM, MMP20 | Full-mouth rehabilitation |
| Dentinogenesis imperfecta | 1:6,000-8,000 | DSPP, COL1A1/A2 | Root fracture risk, crown therapy |

**Molar-Incisor Hypomineralization (MIH):**
- Prevalence: 2.5-40% globally
- Etiology: Multifactorial (illness, medications, environmental)
- Affects first permanent molars and permanent incisors
- Management: Fluoride, remineralization, sealants, restorations, extractions

## Caries Risk Assessment

**CAMBRA (Caries Management by Risk Assessment) Pediatric Protocol:**

**Risk Factors:**
- Previous caries experience (strongest predictor)
- High S. mutans/Lactobacillus counts
- Visible plaque on teeth
- Frequent snacking (>3x/day between meals)
- Low socioeconomic status
- Special healthcare needs

**Protective Factors:**
- Fluoride exposure (water, toothpaste, professional)
- Regular dental care
- Xylitol use
- Dental sealants
- Adequate salivary flow

**Risk Categories and Management:**

| Risk Level | Clinical Indicators | Recommended Interventions |
|------------|--------------------|-----------------------|
| Low | No caries history, good home care | Standard fluoride toothpaste, 6-month recall |
| Moderate | 1-2 restorations, some plaque | Fluoride varnish q3-6mo, dietary counseling |
| High | Active caries, poor hygiene | Fluoride varnish q3mo, chlorhexidine, sealants |
| Extreme | S-ECC, special needs | Aggressive intervention, possible sedation/GA for treatment |

## Evidence-Based Restorative Approaches

**Minimal Intervention Dentistry:**
- Selective/stepwise caries removal
- Atraumatic Restorative Treatment (ART)
- Hall Technique for primary molars
- Silver Diamine Fluoride (SDF) for caries arrest

**Silver Diamine Fluoride (SDF):**
- 38% SDF solution applied topically
- Arrests carious lesions through silver antimicrobial action and fluoride remineralization
- Advantages: Noninvasive, no anesthesia, inexpensive
- Disadvantages: Black staining, multiple applications needed
- FDA cleared; evidence supports efficacy

**Hall Technique:**
- Stainless steel crown cemented over carious primary molar
- No caries removal, no anesthesia
- Seals bacteria under crown; caries arrests
- Success rates comparable to conventional restorations
- Especially useful for anxious or very young patients

## Orthodontic Considerations

**Early Orthodontic Assessment:**
- American Association of Orthodontists recommends evaluation by age 7
- Identify developing problems: Crossbites, crowding, open bites
- Phase I (interceptive) treatment for select cases

**Interceptive Orthodontics:**
- Space maintenance/regaining
- Crossbite correction
- Habit appliances (thumb sucking)
- Serial extractions

**Growth Modification:**
- Functional appliances for Class II malocclusion
- Reverse-pull headgear for Class III
- Palatal expansion for maxillary constriction
- Timing based on growth velocity (prepubertal peak)

## Trauma Management in Children

**Epidemiology:**
- Peak incidence: 1-3 years (learning to walk) and 8-10 years (sports)
- Boys affected more than girls (2:1)
- Maxillary central incisors most commonly injured

**Primary Teeth Trauma:**
- Displacement injuries can damage developing permanent teeth
- Avulsion: Do NOT replant primary teeth (risk to permanent successor)
- Intrusion: Often "wait and see" for re-eruption
- Follow-up essential to monitor permanent tooth development

**Permanent Teeth Trauma:**
- Avulsion: Replant immediately if possible; transport in milk
- Splinting: Flexible splint for 2 weeks (avulsion/luxation)
- Root fractures: Prognosis depends on location
- Follow-up: Long-term monitoring for pulp necrosis, root resorption`,
      keyTerms: [
        { term: "MIH", definition: "Molar-Incisor Hypomineralization; developmental enamel defect affecting first permanent molars and incisors of systemic origin" },
        { term: "CAMBRA", definition: "Caries Management by Risk Assessment; evidence-based protocol for individualized caries prevention" },
        { term: "SDF", definition: "Silver Diamine Fluoride; topical agent that arrests caries through antimicrobial and remineralizing actions" },
        { term: "Hall Technique", definition: "Biological approach placing preformed metal crown over carious primary molar without caries removal or anesthesia" },
        { term: "ART", definition: "Atraumatic Restorative Treatment; using hand instruments and glass ionomer for caries management in resource-limited settings" },
        { term: "interceptive orthodontics", definition: "Early intervention to correct or improve developing malocclusion during mixed dentition" },
      ],
      clinicalNotes: "Silver Diamine Fluoride has transformed caries management for young, anxious, or special needs patients. While staining is a limitation, parental acceptance increases with education. The Hall Technique offers excellent outcomes for primary molars with minimal intervention. MIH patients require proactive management - hypomineralized first molars may need extraction with orthodontic closure if severely affected.",
    },
    5: {
      level: 5,
      summary: "Contemporary pediatric dentistry integrates precision medicine approaches, advanced behavior guidance modalities, regenerative techniques, and systemic health considerations to deliver comprehensive, evidence-based care throughout childhood development.",
      explanation: `## Precision Medicine in Pediatric Dentistry

**Caries Risk Genomics:**
- GWAS studies identifying caries susceptibility loci
- Gene variants affecting enamel formation (AMELX, TUFT1)
- Salivary protein gene variants (MUC7, CA6)
- Taste receptor genes influencing dietary preferences (TAS2R38)
- Future: Personalized prevention based on genetic profile

**Salivary Diagnostics:**
- S. mutans quantification (chairside tests available)
- Lactobacillus counts
- Salivary buffering capacity
- Flow rate assessment
- Biomarkers for systemic disease screening

**Microbiome Research:**
- Caries as ecological dysbiosis, not single pathogen infection
- Keystone pathogen hypothesis
- Prebiotics/probiotics for microbiome modulation
- L. reuteri, L. rhamnosus studied for caries prevention
- Microbiome transplantation research (early stages)

## Advanced Behavior Guidance

**Pharmacological Management:**

| Modality | Indications | Considerations |
|----------|-------------|----------------|
| Nitrous oxide | Mild-moderate anxiety | Safe, rapidly reversible, no fasting required |
| Oral sedation | Moderate anxiety, longer procedures | Requires training, monitoring, variable response |
| IV sedation | Extensive treatment, failed oral sedation | Requires sedation training/certification |
| General anesthesia | S-ECC, special needs, extreme anxiety | Operating room setting, anesthesiologist required |

**Evidence for Sedation:**
- Cochrane reviews: Insufficient evidence to recommend specific oral sedation agents
- Midazolam most studied; ketamine adjunct for painful procedures
- Dexmedetomidine emerging as alternative
- AAP/AAPD guidelines for monitoring standards

**Non-Pharmacological Advances:**
- Virtual reality distraction
- Hypnosis/guided imagery
- Music therapy
- Acupuncture (limited evidence)

## Regenerative Pediatric Dentistry

**Regenerative Endodontics:**

*Revascularization/Revitalization Protocol:*
1. Access, irrigation with NaOCl and EDTA
2. Triple antibiotic paste (metronidazole, ciprofloxacin, minocycline) or calcium hydroxide
3. Blood clot induction past apex
4. MTA barrier
5. Composite restoration

*Outcomes:*
- Root lengthening: 60-80%
- Apical closure: 80-90%
- Wall thickening: Variable
- True pulp regeneration: Debated (likely reparative tissue)

*Patient Selection:*
- Necrotic immature permanent teeth
- Open apex (>1mm)
- Adequate crown for restoration
- Compliant patient/family

**Stem Cell Banking:**
- SHED (Stem cells from Human Exfoliated Deciduous teeth)
- Higher proliferative capacity than DPSCs
- Multipotent differentiation potential
- Commercial banking services available
- Future applications: Tissue engineering, regenerative medicine

## Systemic Health Connections

**Oral Manifestations of Systemic Disease:**

| Condition | Oral Findings | Dental Implications |
|-----------|---------------|---------------------|
| Type 1 diabetes | Increased gingivitis, delayed healing | Optimize glycemic control, periodontal monitoring |
| Childhood cancer | Mucositis, developmental defects | Pre-treatment evaluation, fluoride, protocol-based care |
| Cystic fibrosis | Enamel defects, altered saliva | High caries risk, aggressive prevention |
| Epilepsy | Gingival overgrowth (phenytoin) | Oral hygiene emphasis, alternative medications |
| Asthma | Increased caries (medications, mouth breathing) | Rinse after inhaler use, fluoride |

**Childhood Obesity and Oral Health:**
- Bidirectional relationship with caries
- Shared risk factors: Sugar consumption, SES
- Inflammatory state may affect periodontium
- Dental visit as opportunity for nutritional counseling

**Adverse Childhood Experiences (ACEs):**
- Strong association with adult oral health problems
- Dental neglect component of child maltreatment
- Trauma-informed care approaches
- Dentists as mandated reporters

## Special Healthcare Needs

**Intellectual Disabilities:**
- Increased caries and periodontal disease prevalence
- Behavior management challenges
- Need for desensitization, caregiver training
- Sedation/GA often required for comprehensive treatment

**Autism Spectrum Disorder:**
- Sensory sensitivities to sounds, lights, textures
- Need for predictability, visual schedules
- Desensitization protocols
- Consider sensory-adapted dental environments

**Cleft Lip and Palate:**
- Multidisciplinary team approach
- Staged orthodontic treatment
- Alveolar bone grafting timing
- Speech therapy coordination

## Quality Measures and Outcomes

**Core Measures:**
- Dental caries experience (dmft/DMFT)
- Sealant prevalence
- Fluoride varnish application rates
- Emergency department utilization for dental pain
- Dental care utilization (preventive vs. restorative)

**Disparities:**
- Caries prevalence 2x higher in low-income children
- Access barriers: Insurance, transportation, workforce
- Medical-dental integration initiatives
- School-based sealant programs

**Future Directions:**
- Teledentistry for underserved populations
- AI for caries detection
- Precision prevention protocols
- Integration with medical homes`,
      keyTerms: [
        { term: "SHED", definition: "Stem cells from Human Exfoliated Deciduous teeth; multipotent cells with regenerative medicine potential" },
        { term: "revascularization", definition: "Regenerative endodontic procedure using blood clot scaffold to enable continued root development in necrotic immature teeth" },
        { term: "trauma-informed care", definition: "Healthcare approach recognizing impact of ACEs on behavior and health; emphasizes safety, trust, and patient autonomy" },
        { term: "MIH", definition: "Molar-Incisor Hypomineralization; systemically derived developmental defect requiring proactive management" },
        { term: "dysbiosis", definition: "Microbial imbalance; caries understood as ecological shift rather than single-pathogen infection" },
        { term: "AAP/AAPD guidelines", definition: "Joint American Academy of Pediatrics/Pediatric Dentistry sedation monitoring guidelines requiring specific training and equipment" },
      ],
      clinicalNotes: `Advanced clinical considerations:
1. Regenerative endodontics is now standard of care for necrotic immature permanent teeth - outcomes superior to traditional apexification
2. SHED banking: Discuss with parents of exfoliating teeth; scientific basis exists though clinical applications still emerging
3. SDF has revolutionized management of ECC and special needs patients; document informed consent regarding staining
4. Children with special healthcare needs have significantly worse oral health outcomes - proactive recall intervals essential
5. Screen for ACEs in context of dental neglect; understand trauma-informed approaches
6. MIH prevalence increasing; early identification allows for preventive sealants before breakdown
7. Medical-dental integration improves outcomes - communicate with pediatricians about oral health`,
    },
  },

  media: [
    {
      id: "primary-tooth-eruption-chart",
      type: "diagram",
      filename: "primary-tooth-eruption-timeline.svg",
      title: "Primary Tooth Eruption Chart",
      description: "Timeline showing sequence and ages of primary tooth eruption",
    },
    {
      id: "pediatric-caries-pattern",
      type: "image",
      filename: "ecc-pattern-clinical.jpg",
      title: "Early Childhood Caries Pattern",
      description: "Clinical presentation of typical ECC affecting maxillary anterior teeth",
    },
  ],

  citations: [
    {
      id: "aapd-reference-manual",
      type: "website",
      title: "AAPD Reference Manual",
      authors: ["American Academy of Pediatric Dentistry"],
      source: "AAPD",
      url: "https://www.aapd.org/research/oral-health-policies--recommendations/",
    },
    {
      id: "casamassimo-pediatric-dentistry",
      type: "textbook",
      title: "Pediatric Dentistry: Infancy Through Adolescence",
      authors: ["Casamassimo, P.S.", "Fields, H.W.", "McTigue, D.J.", "Nowak, A.J."],
      source: "Elsevier",
    },
  ],

  crossReferences: [
    { targetId: "structure-tooth-anatomy", targetType: "structure", relationship: "related", label: "Tooth Anatomy" },
    { targetId: "condition-cavities-decay", targetType: "condition", relationship: "related", label: "Cavities and Decay" },
    { targetId: "topic-dental-emergencies", targetType: "topic", relationship: "see-also", label: "Dental Emergencies" },
  ],

  tags: {
    systems: ["digestive", "dental"],
    structures: ["teeth", "gums", "oral cavity"],
    topics: ["pediatrics", "prevention", "development"],
    keywords: ["pediatric dentistry", "baby teeth", "children", "ECC", "teething", "primary teeth"],
    clinicalRelevance: "high",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["pediatrics"],
    },
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default pediatricDentalCare;
