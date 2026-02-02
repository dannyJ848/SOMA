/**
 * Gustatory System Anatomy - Educational Content
 *
 * Anatomical structures of the sense of taste.
 */

import { EducationalContent } from '../../types';

export const gustatorySystemAnatomy: EducationalContent = {
  id: 'anatomy-gustatory-system',
  type: 'system',
  name: 'Gustatory System Anatomy',
  nameEs: 'Anatomia del Sistema Gustativo',
  alternateNames: ['Taste System', 'Tongue Anatomy', 'Anatomia del Gusto'],
  fmaId: 'FMA:7195',

  levels: {
    1: {
      level: 1,
      summary: 'Your sense of taste comes from tiny taste buds on your tongue that detect sweet, sour, salty, bitter, and umami flavors.',
      explanation: `## Your Sense of Taste

Have you ever wondered how you can tell the difference between sweet candy and sour lemons? That is your sense of taste at work!

### Taste Buds

- Tiny bumps on your tongue that help you taste food
- You have about 10,000 taste buds
- Most are on your tongue, but some are on the roof of your mouth and throat
- Each taste bud has 50-100 taste cells

### Five Basic Tastes

1. **Sweet** - like sugar, candy, fruit
2. **Sour** - like lemons, vinegar
3. **Salty** - like potato chips, pretzels
4. **Bitter** - like coffee, dark chocolate
5. **Umami** - savory taste like meat, cheese, mushrooms

### Taste and Smell Work Together

Your sense of taste actually works with your sense of smell. When you have a cold and cannot smell, food tastes bland because you are missing the smell part!

### Fun Facts

- Taste buds live for about 10-14 days, then are replaced
- As you get older, you have fewer taste buds
- Some people are "supertasters" with more taste buds than others`,
      keyTerms: [
        { term: 'taste buds', definition: 'Small sensory organs on the tongue that detect flavors' },
        { term: 'umami', definition: 'Savory taste found in meat, cheese, and mushrooms' }
      ],
      patientCounselingPoints: [
        'Brush your tongue gently to keep taste buds healthy.',
        'Smoking can damage your sense of taste.',
        'If food tastes strange or you cannot taste, tell a doctor.'
      ]
    },
    2: {
      level: 2,
      summary: 'The gustatory system comprises taste buds within lingual papillae, gustatory receptor cells, cranial nerves VII (facial), IX (glossopharyngeal), and X (vagus), with projections to nucleus solitarius, thalamus, and gustatory cortex.',
      explanation: `## Gustatory System Anatomy

### Peripheral Gustatory Structures

**Tongue Anatomy:**
- Muscular organ: intrinsic and extrinsic muscles
- Papillae types:
  - Filiform (mechanical, no taste)
  - Fungiform (anterior tongue, 5 taste buds each)
  - Circumvallate (10-14 in V row, posterior, 250 taste buds each)
  - Foliate (lateral tongue, 1300 taste buds each)

**Taste Buds:**
- 50-100 cells per bud
- Types: Type I (supporting), Type II (receptor), Type III (receptor), Type IV (basal/stem)
- Life span: 10-14 days
- Total: 2000-5000 taste buds

**Gustatory Innervation:**
- **Chorda tympani (CN VII):** anterior two-thirds tongue
- **Glossopharyngeal (CN IX):** posterior one-third tongue
- **Vagus (CN X):** epiglottis, larynx, esophagus

### Central Gustatory Pathway

**Nucleus Solitarius:**
- Rostral portion: gustatory
- Caudal portion: visceral afferent
- First central synapse

**Thalamus:**
- Ventral posteromedial nucleus (VPM)
- Gustatory relay

**Primary Gustatory Cortex:**
- Insula and frontal operculum
- Conscious taste perception

**Secondary Areas:**
- Orbitofrontal cortex: taste-odor integration
- Amygdala: affective component
- Hypothalamus: feeding behavior`,
      keyTerms: [
        { term: 'chorda tympani', definition: 'Branch of facial nerve carrying taste from anterior two-thirds of tongue' },
        { term: 'nucleus solitarius', definition: 'Brainstem nucleus receiving gustatory and visceral afferent input' },
        { term: 'circumvallate papillae', definition: 'Large papillae in V-shaped row at back of tongue containing many taste buds' }
      ],
      examples: [
        'Bell palsy (facial nerve) can affect taste in anterior tongue due to chorda tympani involvement.',
        'Taste disorders (dysgeusia) can result from nerve damage, medications, or zinc deficiency.'
      ]
    },
    3: {
      level: 3,
      summary: 'El sistema gustativo periferico incluye papilas linguales con cuerpos gustativos, celulas receptoras gustativas, e inervacion craneal (VII, IX, X). Las vias centrales proyeccionan al nucleo solitario, talamo (VPM), e insula/corteza orbitofrontal.',
      explanation: `## Anatomia del Sistema Gustativo

### Estructuras Gustativas Perifericas

**Anatomia de la Lengua:**
- Organo muscular: musculos intrinsecos y extrinsecos
- Tipos de papilas:
  - Filiformes: mecanicas, sin sentido del gusto
  - Fungiformes: lengua anterior, 5 cuerpos gustativos cada una
  - Circumvaladas: 10-14 en fila V, posteriores, 250 cuerpos gustativos cada una
  - Foliadas: lengua lateral, 1300 cuerpos gustativos

**Cuerpos Gustativos:**
- 50-100 celulas por cuerpo
- Tipos: Tipo I (soporte), Tipo II (receptora), Tipo III (receptora), Tipo IV (basal/madre)
- Vida util: 10-14 dias
- Total: 2000-5000 cuerpos gustativos

**Inervacion Gustativa:**
- Cuerda del timpano (CN VII): dos tercios anteriores de la lengua
- Glosofaringeo (CN IX): tercio posterior de la lengua
- Vago (CN X): epiglotis, laringe, esofago

### Via Gustativa Central

**Nucleo Solitario:**
- Porcion rostral: gustativa
- Porcion caudal: aferente visceral
- Primera sinapsis central

**Talamo:**
- Nucleo ventral posteromedial (VPM)
- Relevo gustativo

**Corteza Gustativa Primaria:**
- Insula y operculo frontal
- Percepcion consciente del gusto

**Areas Secundarias:**
- Corteza orbitofrontal: integracion gusto-olor
- Amigdala: componente afectivo
- Hipotalamo: comportamiento alimentario`,
      keyTerms: [
        { term: 'cuerda del timpano', definition: 'Rama del nervio facial que lleva el gusto de los dos tercios anteriores de la lengua' },
        { term: 'nucleo solitario', definition: 'Nucleo del troncoencefalo que recibe aferencias gustativas y viscerales' },
        { term: 'papilas circumvaladas', definition: 'Papilas grandes en fila en V en la parte posterior de la lengua que contienen muchos cuerpos gustativos' }
      ],
      examples: [
        'La paralisis de Bell (nervio facial) puede afectar el gusto en la lengua anterior debido al compromiso de la cuerda del timpano.',
        'Los trastornos del gusto (disgeusia) pueden resultar de dano nervioso, medicamentos o deficiencia de zinc.'
      ]
    },
    4: {
      level: 4,
      summary: 'The gustatory system transduces chemical stimuli through taste receptor cells with specific signaling pathways for each taste quality, processed through brainstem and cortical circuits that integrate with homeostatic and hedonic feeding circuits.',
      explanation: `## Advanced Gustatory Anatomy

**Taste Transduction:**
- Type II cells: sweet, bitter, umami (GPCRs, PLCbeta2, IP3, TRPM5)
- Type III cells: sour (PKD2L1 channels, H+ detection)
- Sodium channels: salty (ENaC)

**Coding:**
- Labeled line: separate pathways for each quality
- Population coding: combination of responses
- Temporal patterns: firing rate and timing

**Clinical Correlations:**
- Ageusia: complete taste loss (rare)
- Hypogeusia: reduced taste
- Dysgeusia: distorted taste (metallic, bitter)
- Causes: medications, nerve injury, zinc deficiency, COVID-19

**Interactions:**
- Taste-smell integration in orbitofrontal cortex
- Texture and temperature effects
- Cognitive and affective modulation`,
      keyTerms: [
        { term: 'labeled line', definition: 'Neural coding scheme where specific pathways carry specific taste qualities' },
        { term: 'dysgeusia', definition: 'Distorted or altered taste perception' }
      ],
      clinicalNotes: `Clinical considerations:

1. **Taste dysfunction:** Often reported as "taste" but frequently smell loss (80% of "taste" is smell).

2. **Medication effects:** Common cause of dysgeusia. ACE inhibitors, antibiotics, anticonvulsants frequently implicated.

3. **Oral health:** Periodontal disease, oral infections affect taste.`
    },
    5: {
      level: 5,
      summary: 'El sistema gustativo transduce estimulos quimicos a traves de celulas receptoras con vias de senalizacion especificas para cada calidad gustativa, procesadas a traves de circuitos del troncoencefalico y corticales que se integran con circuitos de alimentacion homeostaticos y hedonicos.',
      explanation: `## Anatomia Gustativa Avanzada

**Transduccion Gustativa:**
- Celulas Tipo II: dulce, amargo, umami (GPCR, PLCbeta2, IP3, TRPM5)
- Celulas Tipo III: acido (canales PKD2L1, deteccion de H+)
- Canales de sodio: salado (ENaC)

**Codificacion:**
- Linea etiquetada: vias separadas para cada calidad
- Codificacion poblacional: combinacion de respuestas
- Patrones temporales: tasa de disparo y temporalizacion

**Correlaciones Clinicas:**
- Ageusia: perdida completa del gusto (rara)
- Hipogeusia: gusto reducido
- Disgeusia: gusto distorsionado (metalico, amargo)
- Causas: medicamentos, lesion nerviosa, deficiencia de zinc, COVID-19

**Interacciones:**
- Integracion gusto-olor en corteza orbitofrontal
- Efectos de textura y temperatura
- Modulacion cognitiva y afectiva`,
      keyTerms: [
        { term: 'linea etiquetada', definition: 'Esquema de codificacion neural donde vias especificas transportan calidades gustativas especificas' },
        { term: 'disgeusia', definition: 'Percepcion gustativa distorsionada o alterada' }
      ],
      clinicalNotes: `Consideraciones clinicas:

1. **Disfuncion gustativa:** Frecuentemente reportada como "gusto" pero frecuentemente es perdida del olfato (80% del "gusto" es olfato).

2. **Efectos de medicamentos:** Causa comun de disgeusia. IECAs, antibioticos, anticonvulsivos frecuentemente implicados.

3. **Salud oral:** Enfermedad periodontal, infecciones orales afectan el gusto.`
    },
  },

  media: [],

  citations: [
    {
      id: 'chaudhari-taste',
      type: 'article',
      title: 'The cells and peripheral representation of sodium taste in mice',
      authors: ['Chaudhari N', 'Roper SD'],
      source: 'Nature',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-sensory-system-overview', targetType: 'system', relationship: 'parent', label: 'Sensory Systems Overview' },
    { targetId: 'anatomy-olfactory-system', targetType: 'system', relationship: 'sibling', label: 'Olfactory System' },
  ],

  tags: {
    systems: ['sensory', 'nervous'],
    topics: ['anatomy', 'taste', 'neuroanatomy'],
    keywords: ['gustatory system', 'taste', 'taste buds', 'tongue', 'flavor'],
    clinicalRelevance: 'medium',
  },

  createdAt: '2026-01-30T12:00:00.000Z',
  updatedAt: '2026-01-30T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default gustatorySystemAnatomy;
