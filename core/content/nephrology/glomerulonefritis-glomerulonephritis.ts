import { EducationalContent } from '../types';

export const glomerulonefritisGlomerulonephritis: EducationalContent = {
  id: 'condition-glomerulonefritis-glomerulonephritis',
  type: 'condition',
  name: 'Glomerulonephritis',
  nameEs: 'Glomerulonefritis',
  alternateNames: ['GN', 'Glomerular Disease', 'Enfermedad Glomerular', 'Nefritis', 'Nephritis', 'Nephritic Syndrome', 'Nephrotic Syndrome'],
  levels: {
    1: {
      level: 1,
      summary: 'La glomerulonefritis es una inflamacion de los filtros diminutos dentro de los rinones llamados glomérulos, lo cual impide que los rinones limpien la sangre correctamente. | Glomerulonephritis is inflammation of the tiny filters inside the kidneys called glomeruli, which prevents the kidneys from cleaning the blood properly.',
      explanation: `## Explicacion

### Que es la glomerulonefritis?

Dentro de cada rinon hay alrededor de un millon de filtros diminutos llamados **glomérulos**. Estos filtros son como pequenos coladores que dejan pasar los desechos y el exceso de agua para formar la orina, pero mantienen las cosas importantes en la sangre, como las proteinas y los globulos rojos.

La **glomerulonefritis** (GN) es cuando estos filtros se inflaman (se hinchan y danan). Cuando los glomérulos estan inflamados, no pueden hacer su trabajo correctamente. Esto puede causar dos tipos principales de problemas:

### El Problema tipo "Fuga" (Sindrome Nefrotico)
Los filtros se vuelven demasiado permeables y dejan escapar proteinas importantes hacia la orina:
- **Orina espumosa** (por las proteinas)
- **Hinchazon** severa en piernas, cara y alrededor de los ojos (edema)
- **Colesterol alto** en la sangre
- Mayor riesgo de coagulos de sangre

### El Problema tipo "Sangrado" (Sindrome Nefritico)
Los filtros se danan tanto que dejan pasar sangre:
- **Orina de color oscuro o rojizo** (sangre en la orina)
- **Presion arterial alta**
- **Menos orina** de lo normal
- Hinchazon leve

### Por que pasa?

La glomerulonefritis puede ocurrir por varias razones:
- **El sistema inmunologico ataca los rinones por error** (enfermedad autoinmune)
- **Despues de una infeccion** (como una infeccion de garganta por estreptococo)
- **Enfermedades como la diabetes o el lupus** que afectan los vasos sanguineos y rinones
- A veces **no se encuentra una causa clara**

### Es grave?

La glomerulonefritis puede variar mucho:
- Algunas formas son **leves** y se resuelven solas
- Otras pueden ser **cronicas** y progresar lentamente a enfermedad renal cronica
- Algunas son **graves y rapidas** y necesitan tratamiento urgente

---
## Explanation

### What is glomerulonephritis?

Inside each kidney there are about one million tiny filters called **glomeruli**. These filters are like small strainers that let waste and excess water pass through to form urine, but keep important things in the blood, like proteins and red blood cells.

**Glomerulonephritis** (GN) is when these filters become inflamed (swollen and damaged). When glomeruli are inflamed, they cannot do their job properly. This can cause two main types of problems:

### The "Leak" Problem (Nephrotic Syndrome)
The filters become too permeable and let important proteins escape into the urine:
- **Foamy urine** (from proteins)
- **Severe swelling** in legs, face, and around the eyes (edema)
- **High cholesterol** in the blood
- Higher risk of blood clots

### The "Bleeding" Problem (Nephritic Syndrome)
The filters are so damaged they let blood through:
- **Dark or reddish urine** (blood in urine)
- **High blood pressure**
- **Less urine** than normal
- Mild swelling

### Why does it happen?

Glomerulonephritis can occur for various reasons:
- **The immune system attacks the kidneys by mistake** (autoimmune disease)
- **After an infection** (like a strep throat infection)
- **Diseases like diabetes or lupus** that affect blood vessels and kidneys
- Sometimes **no clear cause is found**

### Is it serious?

Glomerulonephritis can vary greatly:
- Some forms are **mild** and resolve on their own
- Others can be **chronic** and slowly progress to chronic kidney disease
- Some are **severe and rapid** and need urgent treatment`,
      keyTerms: [
        { term: 'glomérulo / glomerulus', definition: 'Filtro diminuto dentro del rinon que limpia la sangre; cada rinon tiene alrededor de un millon. | Tiny filter inside the kidney that cleans the blood; each kidney has about one million.' },
        { term: 'glomerulonefritis / glomerulonephritis', definition: 'Inflamacion de los glomérulos que impide que los rinones filtren correctamente. | Inflammation of the glomeruli that prevents kidneys from filtering properly.' },
        { term: 'sindrome nefrotico / nephrotic syndrome', definition: 'Cuando los filtros dejan escapar muchas proteinas, causando orina espumosa y mucha hinchazon. | When the filters let many proteins escape, causing foamy urine and severe swelling.' },
        { term: 'sindrome nefritico / nephritic syndrome', definition: 'Cuando los filtros dejan pasar sangre, causando orina oscura y presion arterial alta. | When the filters let blood through, causing dark urine and high blood pressure.' },
        { term: 'edema', definition: 'Hinchazon causada por acumulacion de liquido en los tejidos del cuerpo. | Swelling caused by fluid buildup in body tissues.' },
        { term: 'autoinmune / autoimmune', definition: 'Cuando el sistema de defensa del cuerpo ataca sus propios tejidos por error. | When the body defense system attacks its own tissues by mistake.' },
      ],
      analogies: [
        'Los glomérulos son como los pequenos agujeros de un colador de cocina: la glomerulonefritis es como si el colador se danara y dejara pasar lo que deberia retener (proteinas y sangre). | Glomeruli are like the small holes in a kitchen strainer: glomerulonephritis is like the strainer getting damaged and letting through what it should retain (proteins and blood).',
        'Piensa en el sindrome nefrotico como un filtro con agujeros demasiado grandes (deja pasar proteinas) y el sindrome nefritico como un filtro roto que sangra (deja pasar sangre). | Think of nephrotic syndrome as a filter with holes too big (lets proteins through) and nephritic syndrome as a broken filter that bleeds (lets blood through).',
      ],
      examples: [
        'Un nino que tuvo una infeccion de garganta hace dos semanas y ahora tiene orina oscura e hinchazon puede tener glomerulonefritis post-estreptococica. | A child who had a throat infection two weeks ago and now has dark urine and swelling may have post-streptococcal glomerulonephritis.',
        'Una mujer joven con lupus puede desarrollar glomerulonefritis porque su sistema inmunologico esta atacando sus propios rinones. | A young woman with lupus may develop glomerulonephritis because her immune system is attacking her own kidneys.',
      ],
      patientCounselingPoints: [
        'Si nota que su orina esta oscura, rojiza o muy espumosa, consulte a su doctor pronto. | If you notice your urine is dark, reddish, or very foamy, see your doctor soon.',
        'La hinchazon rapida, especialmente alrededor de los ojos por la manana, puede ser una senal de problemas renales. | Rapid swelling, especially around the eyes in the morning, can be a sign of kidney problems.',
        'Si tiene lupus, diabetes u otra enfermedad que afecta los rinones, hagase revisiones renales regulares. | If you have lupus, diabetes, or another disease affecting the kidneys, get regular kidney checkups.',
        'Tome todos sus medicamentos segun las indicaciones y no los suspenda sin hablar con su doctor. | Take all your medications as directed and do not stop them without talking to your doctor.',
        'Reduzca la sal en su dieta para ayudar a controlar la hinchazon y la presion arterial. | Reduce salt in your diet to help control swelling and blood pressure.',
      ],
    },
    2: {
      level: 2,
      summary: 'Las enfermedades glomerulares se clasifican en sindromes nefritico y nefrotico segun la presentacion clinica; las causas incluyen enfermedades primarias del glomérulo y enfermedades sistemicas; el diagnostico requiere analisis de orina, serologias y frecuentemente biopsia renal. | Glomerular diseases are classified into nephritic and nephrotic syndromes by clinical presentation; causes include primary glomerular diseases and systemic diseases; diagnosis requires urinalysis, serologies, and often kidney biopsy.',
      explanation: `## Explicacion

### Sindrome Nefritico vs Sindrome Nefrotico

| Caracteristica | Sindrome Nefritico | Sindrome Nefrotico |
|---------------|-------------------|-------------------|
| Hallazgo principal | Hematuria (sangre en orina) | Proteinuria masiva (>3.5 g/dia) |
| Orina | Oscura, color "cola" | Espumosa |
| Presion arterial | Frecuentemente elevada | Normal o levemente elevada |
| Edema | Leve a moderado | Severo (anasarca) |
| Albumina serica | Normal o levemente baja | Muy baja (<3 g/dL) |
| Colesterol | Normal | Muy elevado |
| Funcion renal | Frecuentemente disminuida | Puede estar preservada inicialmente |
| Sedimento | Cilindros eritrocitarios | Cuerpos grasos ovales, cilindros grasos |

### Causas Principales del Sindrome Nefritico

#### Glomerulonefritis Post-Infecciosa (Post-Estreptococica)
- Ocurre 1-3 semanas despues de faringitis o 3-6 semanas despues de infeccion cutanea por Streptococcus grupo A
- Mas comun en ninos (6-10 anos)
- Depositos de complejos inmunes en los glomérulos
- Generalmente autolimitada con buen pronostico en ninos

#### Nefropatia por IgA (Enfermedad de Berger)
- La glomerulonefritis mas comun en el mundo
- Hematuria que aparece durante o poco despues de infecciones respiratorias superiores ("hematuria sinfaringitica")
- Deposito de IgA en el mesangio glomerular
- Curso variable: 30-40% progresan a ERC terminal en 20-30 anos

#### Vasculitis ANCA (Granulomatosis con Poliangeitis, Poliangeitis Microscopica)
- Vasculitis de vasos pequenos con glomerulonefritis rapidamente progresiva
- ANCA positivos: c-ANCA/PR3 (GPA) o p-ANCA/MPO (MPA)
- Emergencia nefrologica: puede progresar a falla renal en semanas

### Causas Principales del Sindrome Nefrotico

#### Enfermedad de Cambios Minimos
- Causa mas comun de sindrome nefrotico en ninos
- Microscopia optica normal; solo visible por microscopia electronica (borramiento de podocitos)
- Excelente respuesta a corticosteroides

#### Glomeruloesclerosis Focal y Segmentaria (GSFS)
- Causa mas comun de sindrome nefrotico en adultos afroamericanos
- Esclerosis que afecta parte (focal) de algunos (segmentaria) glomérulos
- Asociada con obesidad, VIH, heroina, variantes APOL1

#### Nefropatia Membranosa
- Causa mas comun de sindrome nefrotico en adultos caucasicos
- 70% tienen anticuerpos anti-PLA2R
- Puede ser primaria o secundaria (lupus, hepatitis B, medicamentos, cancer)

#### Nefritis Lupica
- Afecta hasta 50% de pacientes con lupus eritematoso sistemico
- Clasificacion ISN/RPS: Clases I-VI segun hallazgos de biopsia
- La biopsia es esencial para guiar el tratamiento

### Enfoque Diagnostico

1. **Analisis de orina completo**: Hematuria, proteinuria, cilindros
2. **Cuantificacion de proteinas**: Relacion proteina/creatinina en orina spot o recoleccion de 24 horas
3. **Serologias**:
   - Complemento (C3, C4): bajo en GN post-infecciosa, nefritis lupica, GN membranoproliferativa
   - ANA, anti-dsDNA: lupus
   - ANCA (PR3, MPO): vasculitis
   - Anti-PLA2R: nefropatia membranosa
   - Anti-GBM: enfermedad de Goodpasture
   - ASTO, anti-DNAsa B: GN post-estreptococica
4. **Biopsia renal**: Diagnostico definitivo con microscopia optica, inmunofluorescencia y microscopia electronica

---
## Explanation

### Nephritic vs Nephrotic Syndrome

| Feature | Nephritic Syndrome | Nephrotic Syndrome |
|---------|-------------------|-------------------|
| Main finding | Hematuria | Massive proteinuria (>3.5 g/day) |
| Urine | Dark, cola-colored | Foamy |
| Blood pressure | Often elevated | Normal or mildly elevated |
| Edema | Mild to moderate | Severe (anasarca) |
| Serum albumin | Normal or mildly low | Very low (<3 g/dL) |
| Cholesterol | Normal | Very elevated |

### Main Nephritic Causes
- Post-infectious GN: 1-3 weeks after strep pharyngitis; self-limited in children
- IgA nephropathy: Most common GN worldwide; synpharyngitic hematuria
- ANCA vasculitis: Rapidly progressive; nephrologic emergency

### Main Nephrotic Causes
- Minimal change disease: Most common in children; responds to steroids
- FSGS: Most common in African American adults; associated with APOL1
- Membranous nephropathy: Most common in Caucasian adults; anti-PLA2R in 70%
- Lupus nephritis: Affects 50% of SLE patients

### Diagnostic Approach
1. Complete urinalysis 2. Protein quantification 3. Serologies 4. Kidney biopsy`,
      keyTerms: [
        { term: 'hematuria', definition: 'Presencia de sangre en la orina; puede ser visible (macroscopica) o solo detectable en laboratorio (microscopica). | Presence of blood in urine; can be visible (gross) or only detectable in lab (microscopic).' },
        { term: 'proteinuria', definition: 'Presencia anormal de proteinas en la orina; >3.5 g/dia es rango nefrotico. | Abnormal presence of proteins in urine; >3.5 g/day is nephrotic range.' },
        { term: 'cilindros eritrocitarios / RBC casts', definition: 'Globulos rojos atrapados en cilindros en la orina; hallazgo patognomonico de enfermedad glomerular activa. | Red blood cells trapped in casts in urine; pathognomonic finding of active glomerular disease.' },
        { term: 'biopsia renal / kidney biopsy', definition: 'Procedimiento donde se toma una pequena muestra de tejido renal para examen microscopico; diagnostico definitivo. | Procedure taking a small kidney tissue sample for microscopic examination; definitive diagnosis.' },
        { term: 'nefropatia por IgA / IgA nephropathy', definition: 'La glomerulonefritis mas comun en el mundo; deposito de IgA en el mesangio con hematuria sinfaringitica. | Most common GN worldwide; IgA deposition in mesangium with synpharyngitic hematuria.' },
        { term: 'nefropatia membranosa / membranous nephropathy', definition: 'Causa comun de sindrome nefrotico en adultos; 70% tienen anticuerpos anti-PLA2R. | Common cause of nephrotic syndrome in adults; 70% have anti-PLA2R antibodies.' },
        { term: 'GSFS / FSGS', definition: 'Glomeruloesclerosis focal y segmentaria; esclerosis que afecta parte de algunos glomérulos; asociada con APOL1. | Focal segmental glomerulosclerosis; sclerosis affecting part of some glomeruli; associated with APOL1.' },
        { term: 'ANCA', definition: 'Anticuerpos anticitoplasma de neutrofilos; asociados con vasculitis de vasos pequenos que causan GN rapidamente progresiva. | Anti-neutrophil cytoplasmic antibodies; associated with small vessel vasculitis causing rapidly progressive GN.' },
        { term: 'complemento / complement', definition: 'Sistema de proteinas inmunologicas; niveles bajos de C3/C4 orientan hacia ciertas causas de GN. | Immune protein system; low C3/C4 levels point toward certain GN causes.' },
      ],
      clinicalNotes: 'La presencia de cilindros eritrocitarios es patognomonica de glomerulonefritis. Complemento bajo se ve en GN post-infecciosa, nefritis lupica y GN membranoproliferativa. La vasculitis ANCA es una emergencia nefrologica que requiere tratamiento inmunosupresor urgente. Anti-PLA2R negativo en nefropatia membranosa debe hacer buscar causas secundarias. | RBC casts are pathognomonic of glomerulonephritis. Low complement is seen in post-infectious GN, lupus nephritis, and MPGN. ANCA vasculitis is a nephrologic emergency. Negative anti-PLA2R in membranous should prompt search for secondary causes.',
    },
    3: {
      level: 3,
      summary: 'El manejo de la enfermedad glomerular incluye inmunosupresion segun el tipo histologico, tratamiento de soporte con bloqueo del SRAA, y terapias dirigidas emergentes; la biopsia renal con tres microscopias es esencial para el diagnostico. | Glomerular disease management includes immunosuppression based on histological type, supportive treatment with RAAS blockade, and emerging targeted therapies; kidney biopsy with three microscopies is essential for diagnosis.',
      explanation: `## Explicacion

### Patologia de la Biopsia Renal: Las Tres Microscopias

#### Microscopia Optica (MO)
- **Proliferacion**: Aumento de celulas glomerulares (mesangiales, endoteliales, epiteliales)
- **Esclerosis**: Cicatrizacion y perdida de estructura glomerular
- **Semilunas (crescents)**: Proliferacion de celulas epiteliales en la capsula de Bowman; indica GN rapidamente progresiva
- **Engrosamiento de membrana basal**: Visto en nefropatia membranosa

#### Inmunofluorescencia (IF)
- **IgA mesangial**: Nefropatia por IgA
- **IgG + C3 granular subepitelial**: Nefropatia membranosa
- **Full house (IgG, IgA, IgM, C3, C1q)**: Nefritis lupica
- **C3 dominante sin inmunoglobulinas**: Glomerulopatia C3
- **Lineal anti-GBM (IgG)**: Enfermedad de Goodpasture
- **Pauci-inmune (negativa)**: Vasculitis ANCA

#### Microscopia Electronica (ME)
- **Borramiento podocitario**: Cambios minimos, GSFS
- **Depositos subepiteliales**: Nefropatia membranosa, GN post-infecciosa (jorobas/humps)
- **Depositos subendoteliales**: Nefritis lupica clase IV
- **Depositos mesangiales**: Nefropatia por IgA
- **Engrosamiento laminar de MBG**: Sindrome de Alport (patron en cesta)

### Tratamiento por Tipo de Glomerulonefritis

#### Nefropatia por IgA
- **Soporte**: IECA/ARA-II para proteinuria; meta <1 g/dia
- **Inhibidor SGLT2**: Beneficio demostrado en DAPA-CKD
- **Ensayo TESTING**: Metilprednisolona redujo progresion de ERC pero aumento infecciones graves
- **NEFECON/Tarpeyo**: Budesonida de liberacion dirigida; aprobado por FDA
- **Atrasentan**: Ensayo ALIGN: 35.4% reduccion en proteinuria

#### Nefropatia Membranosa
- **Monitoreo con anti-PLA2R**: Titulos correlacionan con actividad
- **Rituximab**: Ensayo MENTOR: no inferior a ciclosporina, superior en remision sostenida a 24 meses
- **Alternativa**: Protocolo Ponticelli modificado (ciclofosfamida alternando con corticosteroides)

#### Vasculitis ANCA (GN Rapidamente Progresiva)
- **Induccion**: Rituximab (ensayo RAVE: no inferior a ciclofosfamida) + glucocorticoides
- **Avacopan** (inhibidor receptor C5a): Ensayo ADVOCATE: no inferior a prednisona + superior en remision sostenida; aprobado por FDA
- **Mantenimiento**: Rituximab cada 6 meses por 2 anos (ensayo MAINRITSAN)

#### Nefritis Lupica
- Clase III-IV: Induccion con micofenolato mofetil (MMF) o ciclofosfamida IV + glucocorticoides
- **Voclosporina**: Ensayo AURORA: anadido a MMF mejoro respuesta renal; aprobado por FDA
- **Belimumab**: Ensayo BLISS-LN: anadido a terapia estandar mejoro respuesta; aprobado por FDA

#### Enfermedad de Cambios Minimos
- Prednisona 1 mg/kg/dia por 4-16 semanas, con reduccion gradual
- Recaidas frecuentes: Rituximab, ciclofosfamida, ciclosporina, o tacrolimus

---
## Explanation

### Kidney Biopsy Pathology: The Three Microscopies
- Light: proliferation, sclerosis, crescents
- IF: IgA mesangial, full house lupus, pauci-immune ANCA, C3 dominant
- EM: podocyte effacement, deposit location

### Treatment by GN Type
- IgA: RAAS blockade, SGLT2i, steroids, NEFECON, atrasentan
- Membranous: Anti-PLA2R monitoring, rituximab (MENTOR), Ponticelli
- ANCA Vasculitis: Rituximab (RAVE) + avacopan (ADVOCATE)
- Lupus Nephritis: MMF, voclosporin (AURORA), belimumab (BLISS-LN)
- Minimal Change: Prednisone; rituximab for frequent relapsers`,
      keyTerms: [
        { term: 'semilunas / crescents', definition: 'Proliferacion de celulas epiteliales en capsula de Bowman; indica GN rapidamente progresiva. | Epithelial cell proliferation in Bowman capsule; indicates rapidly progressive GN.' },
        { term: 'anti-PLA2R', definition: 'Anticuerpo contra receptor de fosfolipasa A2; marcador diagnostico para nefropatia membranosa primaria (presente en ~70%). | Antibody against PLA2 receptor; diagnostic marker for primary membranous nephropathy (~70%).' },
        { term: 'rituximab', definition: 'Anticuerpo monoclonal anti-CD20 que depleta linfocitos B; usado en nefropatia membranosa, vasculitis ANCA, cambios minimos recidivante. | Anti-CD20 monoclonal antibody depleting B lymphocytes; used in membranous, ANCA vasculitis, relapsing MCD.' },
        { term: 'avacopan', definition: 'Inhibidor del receptor C5a del complemento; aprobado por FDA para vasculitis ANCA; reduce necesidad de glucocorticoides. | C5a complement receptor inhibitor; FDA-approved for ANCA vasculitis; reduces glucocorticoid need.' },
        { term: 'voclosporina / voclosporin', definition: 'Inhibidor de calcineurina aprobado por FDA para nefritis lupica (ensayo AURORA). | Calcineurin inhibitor FDA-approved for lupus nephritis (AURORA trial).' },
        { term: 'atrasentan', definition: 'Antagonista selectivo del receptor de endotelina A; ensayo ALIGN mostro 35.4% reduccion en proteinuria en nefropatia por IgA. | Selective ETA receptor antagonist; ALIGN trial showed 35.4% proteinuria reduction in IgA nephropathy.' },
        { term: 'NEFECON / Tarpeyo', definition: 'Budesonida de liberacion dirigida intestinal aprobada por FDA para nefropatia por IgA. | Targeted-release intestinal budesonide FDA-approved for IgA nephropathy.' },
        { term: 'pauci-inmune / pauci-immune', definition: 'Patron de inmunofluorescencia negativo (sin depositos inmunes significativos); caracteristico de vasculitis ANCA. | Negative IF pattern; characteristic of ANCA vasculitis.' },
        { term: 'micofenolato mofetil / mycophenolate mofetil', definition: 'Inmunosupresor de primera linea para induccion y mantenimiento de nefritis lupica proliferativa. | First-line immunosuppressant for proliferative lupus nephritis induction and maintenance.' },
        { term: 'belimumab', definition: 'Anticuerpo anti-BLyS aprobado por FDA para nefritis lupica como terapia anadida (ensayo BLISS-LN). | Anti-BLyS antibody FDA-approved for lupus nephritis as add-on therapy (BLISS-LN trial).' },
      ],
      clinicalNotes: 'La GN rapidamente progresiva (semilunas en biopsia) es una emergencia nefrologica; el retraso en tratamiento causa perdida irreversible de funcion renal. Rituximab ha reemplazado a ciclofosfamida como primera linea en vasculitis ANCA (RAVE) y nefropatia membranosa (MENTOR). Avacopan permite reduccion significativa de glucocorticoides. Anti-PLA2R negativo en membranosa debe hacer buscar causas secundarias. Voclosporina + MMF es la combinacion mas eficaz para nefritis lupica. | Rapidly progressive GN is a nephrologic emergency. Rituximab has replaced cyclophosphamide as first-line for ANCA vasculitis and membranous. Avacopan enables steroid reduction. Negative anti-PLA2R should prompt secondary cause search. Voclosporin + MMF is most efficacious for lupus nephritis.',
    },
    4: {
      level: 4,
      summary: 'La fisiopatologia glomerular avanzada abarca la biologia del podocito, mecanismos de deposito inmune, la via alternativa del complemento en glomerulopatias C3, y los mecanismos moleculares de la nefropatia por IgA. | Advanced glomerular pathophysiology encompasses podocyte biology, immune deposit mechanisms, the alternative complement pathway in C3 glomerulopathies, and molecular mechanisms of IgA nephropathy.',
      explanation: `## Explicacion

### Biologia del Podocito y Enfermedad Glomerular

#### Estructura y Funcion del Podocito
- Los podocitos son celulas epiteliales terminalmente diferenciadas que recubren la superficie exterior de los capilares glomerulares
- Sus prolongaciones (pedicelos) se interdigitan formando las ranuras de filtracion (slit diaphragm)
- La **nefrina** y la **podocina** son proteinas clave del diafragma de ranura
- Los podocitos no se dividen significativamente en adultos; su perdida es irreversible y conduce a esclerosis glomerular

#### Mecanismos de Lesion Podocitaria
- **Borramiento de pedicelos**: Retraccion y fusion de prolongaciones podocitarias; primer cambio ultraestructural; mediado por reorganizacion del citoesqueleto de actina (RhoA, Rac1, Cdc42)
- **Desprendimiento podocitario**: Los podocitos lesionados se desprenden de la membrana basal glomerular; detectable como podocituria
- **Factor de permeabilidad circulante**: En GSFS recurrente post-trasplante; suPAR y otros candidatos
- **APOL1**: Las variantes de riesgo G1/G2 forman canales cationicos en la membrana del podocito, causando hinchazon, disfuncion mitocondrial e inflamasoma NLRP3

#### Patogenesis de la GSFS - Clasificacion de Columbia
- **Tip lesion**: Mejor pronostico; responde a esteroides
- **Celular**: Buena respuesta
- **Perihiliar**: Asociada con hiperfiltracion (obesidad, perdida de masa renal)
- **Colapsante**: Peor pronostico; asociada con VIH, variantes APOL1, COVID-19
- **NOS (no especificada)**: La mas comun

### Mecanismos de Deposito Inmune Glomerular

#### Formacion de Complejos Inmunes In Situ
- Nefropatia membranosa con anti-PLA2R: PLA2R es un antigeno podocitario; anticuerpos IgG4 forman depositos subepiteliales
- Enfermedad de Goodpasture: anticuerpos anti-GBM se unen al colageno tipo IV alfa-3

#### Deposito de Complejos Inmunes Circulantes
- GN post-infecciosa con depositos subepiteliales
- Nefritis lupica con depositos subendoteliales (clase IV) y/o subepiteliales (clase V)

#### Activacion del Complemento
- **Via clasica**: Activada por complejos inmunes (C1q se une a Fc de IgG/IgM)
- **Via de las lectinas**: Activada por manosa en superficies patogenicas
- **Via alternativa**: Activacion continua a bajo nivel; amplificada por defectos en reguladores (factor H, factor I)

### Glomerulopatia C3 y Via Alternativa del Complemento

- Enfermedad glomerular mediada por desregulacion de la via alternativa del complemento
- IF muestra depositos dominantes de C3 sin inmunoglobulinas significativas
- Subtipos: Enfermedad por depositos densos (DDD) y GN C3
- **C3 nefriticos (C3NeF)**: Autoanticuerpos que estabilizan la C3 convertasa (C3bBb), causando activacion descontrolada
- **Mutaciones en reguladores**: Factor H, factor I, factor B, C3
- Tratamiento: eculizumab (resultados variables), iptacopan, pegcetacoplan, danicopan (en desarrollo)

### Mecanismos Moleculares de la Nefropatia por IgA - Hipotesis del Multi-Hit

1. **Golpe 1**: Produccion aumentada de IgA1 con deficiencia de galactosa (Gd-IgA1)
2. **Golpe 2**: Produccion de autoanticuerpos dirigidos contra Gd-IgA1
3. **Golpe 3**: Formacion de complejos inmunes que se depositan en el mesangio
4. **Golpe 4**: Activacion mesangial con inflamacion y fibrosis glomerular

#### Clasificacion de Oxford (MEST-C)
- **M**: Hipercelularidad mesangial (M0/M1)
- **E**: Hipercelularidad endocapilar (E0/E1)
- **S**: Esclerosis segmentaria (S0/S1)
- **T**: Atrofia tubular/fibrosis intersticial (T0/T1/T2)
- **C**: Semilunas (C0/C1/C2)

---
## Explanation

### Podocyte Biology
- Terminally differentiated cells with foot processes forming slit diaphragm
- Foot process effacement is first ultrastructural change
- APOL1 risk variants form cation channels causing podocyte injury
- FSGS Columbia classification: tip (best), cellular, perihilar, collapsing (worst), NOS

### Immune Deposit Mechanisms
- In situ formation (anti-PLA2R in membranous, anti-GBM in Goodpasture)
- Circulating immune complex deposition (post-infectious GN, lupus nephritis)

### C3 Glomerulopathy
- Dysregulated alternative complement pathway; C3NeF and factor H mutations
- Treatment: eculizumab (variable), iptacopan, pegcetacoplan (in development)

### IgA Nephropathy: 4-Hit Model
- Gd-IgA1 > autoantibodies > immune complexes > mesangial activation
- Oxford MEST-C classification predicts prognosis`,
      keyTerms: [
        { term: 'podocito / podocyte', definition: 'Celula epitelial terminalmente diferenciada del glomérulo; sus pedicelos forman la barrera de filtracion; su perdida es irreversible. | Terminally differentiated glomerular epithelial cell; foot processes form filtration barrier; their loss is irreversible.' },
        { term: 'nefrina / nephrin', definition: 'Proteina clave del diafragma de ranura del podocito; mutaciones causan sindrome nefrotico congenito. | Key protein of podocyte slit diaphragm; mutations cause congenital nephrotic syndrome.' },
        { term: 'suPAR', definition: 'Receptor soluble del activador de plasminogeno urokinasa; candidato a factor de permeabilidad circulante en GSFS. | Soluble urokinase plasminogen activator receptor; candidate circulating permeability factor in FSGS.' },
        { term: 'Gd-IgA1', definition: 'IgA1 con galactosilacion deficiente en regiones bisagra; primer golpe en la patogenesis de nefropatia por IgA. | Galactose-deficient IgA1 in hinge regions; first hit in IgA nephropathy pathogenesis.' },
        { term: 'C3 nefritico / C3 nephritic factor', definition: 'Autoanticuerpo que estabiliza la C3 convertasa, causando activacion descontrolada del complemento en glomerulopatia C3. | Autoantibody stabilizing C3 convertase, causing uncontrolled complement activation in C3 glomerulopathy.' },
        { term: 'factor H', definition: 'Principal regulador de la via alternativa del complemento; mutaciones causan glomerulopatia C3. | Main regulator of alternative complement pathway; mutations cause C3 glomerulopathy.' },
        { term: 'clasificacion de Oxford MEST-C', definition: 'Score histopatologico para nefropatia por IgA que predice pronostico. | Histopathologic score for IgA nephropathy predicting prognosis.' },
        { term: 'iptacopan', definition: 'Inhibidor del factor B del complemento; en ensayos fase 3 para glomerulopatia C3 y nefropatia por IgA. | Complement factor B inhibitor; in phase 3 trials for C3 glomerulopathy and IgA nephropathy.' },
        { term: 'clasificacion de Columbia / Columbia classification', definition: 'Clasificacion morfologica de la GSFS: tip, celular, perihiliar, colapsante y NOS; tiene implicaciones pronosticas. | Morphological FSGS classification: tip, cellular, perihilar, collapsing, and NOS; has prognostic implications.' },
        { term: 'colapsante / collapsing', definition: 'Variante mas agresiva de GSFS; asociada con VIH, APOL1, COVID-19. | Most aggressive FSGS variant; associated with HIV, APOL1, COVID-19.' },
      ],
      clinicalNotes: 'La GSFS colapsante tiene el peor pronostico y debe hacer pensar en VIH, APOL1 o COVID-19. Los niveles de Gd-IgA1 estan siendo validados como biomarcadores en nefropatia por IgA. La glomerulopatia C3 requiere evaluacion completa del complemento. El score MEST-C es un predictor independiente de progresion en nefropatia por IgA. | Collapsing FSGS has worst prognosis; test for HIV, APOL1, COVID-19. Gd-IgA1 levels are being validated as biomarkers. C3 glomerulopathy requires complete complement evaluation. MEST-C score independently predicts IgA nephropathy progression.',
    },
    5: {
      level: 5,
      summary: 'Temas expertos incluyen terapias dirigidas al complemento, la revolucion terapeutica en nefropatia por IgA, medicina de precision con biomarcadores moleculares, y enfoques genomicos para enfermedades glomerulares hereditarias. | Expert topics include complement-targeted therapies, the IgA nephropathy therapeutic revolution, precision medicine with molecular biomarkers, and genomic approaches for inherited glomerular diseases.',
      explanation: `## Explicacion

### La Revolucion Terapeutica en Nefropatia por IgA

La nefropatia por IgA ha pasado de tener opciones limitadas a una explosion de terapias dirigidas:

#### Terapias Aprobadas y en Desarrollo
- **NEFECON (Tarpeyo)**: Budesonida de liberacion dirigida intestinal; actua en las placas de Peyer para reducir la produccion de Gd-IgA1; aprobado por FDA; NefIgArd fase 3: 34% reduccion en riesgo de progresion
- **Atrasentan**: Antagonista selectivo ETA; ensayo ALIGN mostro 35.4% reduccion en proteinuria
- **Iptacopan** (inhibidor factor B): Ensayo APPLAUSE-IgAN fase 3
- **Sibeprenlimab** (anticuerpo anti-APRIL): Ensayo VISIONARY fase 3; bloquea la produccion de IgA al inhibir APRIL
- **Atacicept** (inhibidor TACI-Fc de APRIL/BLyS): Ensayo ORIGIN fase 3
- **Felzartamab** (anti-CD38): Depleta celulas plasmaticas productoras de IgA

#### Marco de Tratamiento Actual
1. Optimizar tratamiento de soporte (IECA/ARA-II + iSGLT2) por 3-6 meses
2. Si proteinuria persiste >0.75-1 g/dia: anadir terapia dirigida
3. Personalizacion basada en perfil de biomarcadores

### Terapias Dirigidas al Complemento en Enfermedad Glomerular

- **Eculizumab/ravulizumab** (anti-C5): SHU atipico (estandar); GN C3 (resultados variables)
- **Iptacopan** (inhibidor factor B): GN C3, nefropatia por IgA
- **Pegcetacoplan** (inhibidor C3): GN C3
- **Danicopan** (inhibidor factor D): GN C3
- **Avacopan** (inhibidor receptor C5a): Vasculitis ANCA
- **Narsoplimab** (anti-MASP-2): Nefropatia por IgA; bloquea la via de lectinas
- Riesgo de infecciones por organismos encapsulados; vacunacion meningococica previa obligatoria

### Medicina de Precision en Enfermedad Glomerular

#### Biomarcadores Moleculares Emergentes
- **TNFR1 y TNFR2 sericos**: Predicen progresion de nefropatia diabetica y nefropatia por IgA
- **KIM-1 urinario**: Marcador de lesion tubular predictor de progresion
- **MCP-1 urinario (CCL2)**: Marcador de inflamacion tubulo-intersticial; predictor de respuesta en nefritis lupica
- **Gd-IgA1 serica**: Biomarcador especifico de nefropatia por IgA
- **Anti-THSD7A**: Segundo antigeno identificado en nefropatia membranosa primaria (~5%); asociado con malignidad

#### Proteomica y Transcriptomica Urinaria
- CKD273: panel de 273 peptidos urinarios que predicen progresion de ERC
- Transcriptomica de biopsia renal: firmas de expresion genica para predecir respuesta a inmunosupresion
- Estudio NEPTUNE: Perfiles moleculares de biopsias de GSFS y nefropatia membranosa

### Enfermedades Glomerulares Hereditarias

#### Espectro Alport (Nefropatia COL4A)
- Mutaciones en COL4A3, COL4A4, COL4A5
- **X-ligado** (COL4A5, ~80%): Hematuria, proteinuria progresiva, sordera neurosensorial
- **Autosomico recesivo**: Similar severidad
- **Autosomico dominante**: Penetrancia variable; antes llamado membrana basal delgada benigna
- ME: Engrosamiento, adelgazamiento y laminacion de la membrana basal glomerular
- Tratamiento: IECA/ARA-II temprano; iSGLT2 en estudio; bardoxolona en ensayos

#### Nefropatia por APOL1
- Variantes G1 y G2 en individuos de ascendencia africana
- **Inaxaplin (VX-147)**: Primer tratamiento dirigido; ensayo AMPLITUDE: 47.6% reduccion en proteinuria
- Consideraciones eticas: genotipificacion APOL1 en evaluacion de donantes vivos

#### Sindrome Nefrotico Congenito
- Mutaciones en NPHS1 (nefrina), NPHS2 (podocina), WT1
- Resistente a inmunosupresion; tratamiento: nefrectomia bilateral + dialisis + trasplante

### Ensayos Clinicos Transformadores Recientes

| Ensayo | Enfermedad | Resultado Clave |
|--------|-----------|----------------|
| MENTOR (2019) | NM | Rituximab no inferior a ciclosporina |
| RAVE (2010) | Vasculitis ANCA | Rituximab no inferior a ciclofosfamida |
| ADVOCATE (2021) | Vasculitis ANCA | Avacopan superior en remision sostenida |
| AURORA (2021) | Nefritis lupica | Voclosporina + MMF superior |
| BLISS-LN (2020) | Nefritis lupica | Belimumab mejoro respuesta |
| NefIgArd (2023) | Nefropatia IgA | NEFECON redujo progresion 34% |
| ALIGN (2024) | Nefropatia IgA | Atrasentan redujo proteinuria 35.4% |
| AMPLITUDE (2024) | GSFS APOL1 | Inaxaplin redujo proteinuria 47.6% |

---
## Explanation

### IgA Nephropathy Therapeutic Revolution
- NEFECON, atrasentan, iptacopan, sibeprenlimab (anti-APRIL), atacicept, felzartamab (anti-CD38)
- Framework: optimize RAAS + SGLT2i first, then add targeted therapy

### Complement-Targeted Therapies
- Eculizumab (anti-C5), iptacopan (factor B), pegcetacoplan (C3), avacopan (C5aR)
- Mandatory meningococcal vaccination

### Precision Medicine
- Biomarkers: TNFR1/2, KIM-1, MCP-1, Gd-IgA1, anti-THSD7A
- Urinary proteomics (CKD273), biopsy transcriptomics

### Hereditary Glomerular Diseases
- Alport spectrum (COL4A3/4/5): early RAAS blockade
- APOL1: inaxaplin (AMPLITUDE trial)
- Congenital nephrotic syndrome: NPHS1/NPHS2; requires nephrectomy + transplant

### Transformative Trials
- MENTOR, RAVE, ADVOCATE, AURORA, BLISS-LN, NefIgArd, ALIGN, AMPLITUDE`,
      keyTerms: [
        { term: 'NEFECON / Tarpeyo', definition: 'Budesonida de liberacion dirigida intestinal para nefropatia por IgA; aprobada por FDA. | Targeted-release intestinal budesonide for IgA nephropathy; FDA-approved.' },
        { term: 'sibeprenlimab', definition: 'Anticuerpo monoclonal anti-APRIL para nefropatia por IgA; bloquea la produccion de IgA. | Anti-APRIL monoclonal antibody for IgA nephropathy; blocks IgA production.' },
        { term: 'APRIL', definition: 'Ligando de proliferacion y activacion; citoquina que estimula la produccion de IgA en las mucosas; diana terapeutica en nefropatia por IgA. | A proliferation-inducing ligand; cytokine stimulating mucosal IgA production; therapeutic target in IgA nephropathy.' },
        { term: 'espectro Alport / Alport spectrum', definition: 'Nefropatia hereditaria por mutaciones en COL4A3/4/5 con hematuria, sordera y anomalias oculares. | Hereditary nephropathy from COL4A3/4/5 mutations with hematuria, deafness, and ocular abnormalities.' },
        { term: 'inaxaplin', definition: 'Primer inhibidor de funcion de poro APOL1; ensayo AMPLITUDE: 47.6% reduccion en proteinuria en GSFS por APOL1. | First APOL1 pore function inhibitor; AMPLITUDE trial: 47.6% proteinuria reduction in APOL1-mediated FSGS.' },
        { term: 'CKD273', definition: 'Panel de 273 peptidos urinarios para prediccion de progresion de ERC mediante proteomica. | Panel of 273 urinary peptides for CKD progression prediction via proteomics.' },
        { term: 'anti-THSD7A', definition: 'Segundo autoantingeno en nefropatia membranosa primaria (~5%); asociado con riesgo de malignidad. | Second autoantigen in primary membranous nephropathy (~5%); associated with malignancy risk.' },
        { term: 'ensayo ADVOCATE', definition: 'Ensayo que demostro que avacopan es superior en remision sostenida en vasculitis ANCA. | Trial showing avacopan superior in sustained remission in ANCA vasculitis.' },
        { term: 'ensayo AURORA', definition: 'Ensayo que demostro superioridad de voclosporina + MMF en nefritis lupica. | Trial showing voclosporin + MMF superiority in lupus nephritis.' },
        { term: 'felzartamab', definition: 'Anticuerpo anti-CD38 que depleta celulas plasmaticas productoras de IgA; en desarrollo para nefropatia por IgA. | Anti-CD38 antibody depleting IgA-producing plasma cells; in development for IgA nephropathy.' },
      ],
      clinicalNotes: 'La nefropatia por IgA esta en una revolucion terapeutica con multiples agentes aprobados o en ensayos fase 3. La inhibicion de APRIL es una de las estrategias mas prometedoras. El espectro Alport ahora incluye formas heterocigotas previamente llamadas membrana basal delgada benigna. Inaxaplin para nefropatia APOL1 representa la primera terapia de precision genomica en nefrologia. La proteomica urinaria (CKD273) puede identificar pacientes que se beneficiaran de intervencion temprana. | IgA nephropathy is undergoing a therapeutic revolution with multiple agents approved or in phase 3 trials. APRIL inhibition is among the most promising strategies. Alport spectrum now includes previously benign thin basement membrane forms. Inaxaplin for APOL1 nephropathy is the first genomic precision therapy in nephrology. Urinary proteomics (CKD273) can identify patients who will benefit from early intervention.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases',
      authors: ['Kidney Disease: Improving Global Outcomes (KDIGO) Glomerular Diseases Work Group'],
      source: 'Kidney International',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Rituximab or Cyclosporine in the Treatment of Membranous Nephropathy (MENTOR)',
      authors: ['Fervenza FC', 'Appel GB', 'Barbour SJ', 'et al.'],
      source: 'New England Journal of Medicine 2019; 381:36-46',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-3',
      type: 'article',
      title: 'Avacopan for the Treatment of ANCA-Associated Vasculitis (ADVOCATE)',
      authors: ['Jayne DRW', 'Merkel PA', 'Schall TJ', 'et al.'],
      source: 'New England Journal of Medicine 2021; 384:599-609',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-4',
      type: 'article',
      title: 'Voclosporin versus Placebo for Lupus Nephritis (AURORA)',
      authors: ['Rovin BH', 'Teng YKO', 'Ginzler EM', 'et al.'],
      source: 'New England Journal of Medicine 2021; 384:117-128',
      license: 'CC BY 4.0',
    },
    {
      id: 'ref-5',
      type: 'article',
      title: 'Targeted-Release Budesonide versus Placebo in Patients with IgA Nephropathy (NefIgArd)',
      authors: ['Lafayette R', 'Kristensen J', 'Stone A', 'et al.'],
      source: 'Lancet 2023; 402:859-870',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    { targetId: 'condition-enfermedad-renal-cronica-ckd', targetType: 'condition', relationship: 'related', label: 'GN como causa de ERC / GN as CKD cause' },
    { targetId: 'condition-lesion-renal-aguda-aki', targetType: 'condition', relationship: 'related', label: 'GN rapidamente progresiva como causa de LRA / RPGN as AKI cause' },
    { targetId: 'condition-dialisis-dialysis', targetType: 'condition', relationship: 'related', label: 'Dialisis en GN con falla renal / Dialysis in GN with renal failure' },
  ],
  tags: {
    systems: ['renal'],
    topics: ['nephrology'],
    keywords: [
      'glomerulonefritis', 'glomerulonephritis', 'sindrome nefritico', 'nephritic syndrome',
      'sindrome nefrotico', 'nephrotic syndrome', 'nefropatia IgA', 'IgA nephropathy',
      'nefropatia membranosa', 'membranous nephropathy', 'GSFS', 'FSGS',
      'vasculitis ANCA', 'ANCA vasculitis', 'nefritis lupica', 'lupus nephritis',
      'cambios minimos', 'minimal change disease', 'complemento', 'complement',
      'glomerulopatia C3', 'podocito', 'podocyte', 'biopsia renal', 'kidney biopsy',
      'rituximab', 'avacopan', 'voclosporina', 'atrasentan', 'APOL1', 'Alport',
    ],
    clinicalRelevance: 'high',
  },
  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team'],
};
