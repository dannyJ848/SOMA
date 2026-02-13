import { EducationalContent } from '../types';

export const neumoniaPneumonia: EducationalContent = {
  id: 'condition-neumonia-pneumonia',
  type: 'condition',
  name: 'Pneumonia',
  nameEs: 'Neumonia',
  alternateNames: ['Pulmonia', 'Lung infection', 'Infeccion pulmonar', 'Community-acquired pneumonia', 'Hospital-acquired pneumonia'],
  levels: {
    1: {
      level: 1,
      summary: 'La neumonia es una infeccion de los pulmones que hace que los pequenos sacos de aire se llenen de liquido o pus, dificultando la respiracion. Puede ser causada por bacterias, virus u hongos. | Pneumonia is an infection of the lungs that causes the tiny air sacs to fill with fluid or pus, making breathing difficult. It can be caused by bacteria, viruses, or fungi.',
      explanation: `## Explicacion

La neumonia es una infeccion que afecta uno o ambos pulmones. Tus pulmones tienen millones de pequenos sacos de aire llamados alveolos. Normalmente, estos sacos se llenan de aire cuando respiras, permitiendo que el oxigeno llegue a tu sangre. Cuando tienes neumonia, estos sacos se llenan de liquido, pus o mucosidad, lo que hace dificil respirar.

**Como se contrae la neumonia:**
- Respirar germenes que alguien mas tosio o estornudo
- Tener un resfriado o gripe que se complica y baja a los pulmones
- Aspirar comida, liquidos o vomito hacia los pulmones
- Estar en el hospital mucho tiempo (los germenes del hospital pueden ser mas fuertes)

**Senales de neumonia:**
- Tos con flema verde, amarilla o con sangre
- Fiebre alta con escalofrios
- Dificultad para respirar, sentir que falta el aire
- Dolor en el pecho al respirar o toser
- Sentirse muy cansado y sin energia
- Confusion (especialmente en personas mayores)

**Tipos simples de neumonia:**
- **Neumonia de la comunidad:** La que se adquiere en la vida diaria (la mas comun)
- **Neumonia del hospital:** La que se adquiere estando hospitalizado (mas dificil de tratar)
- **Neumonia por aspiracion:** Cuando alimento o liquido entra a los pulmones

**Tratamiento:**
- Antibioticos para neumonia bacteriana
- Reposo y muchos liquidos
- Medicinas para la fiebre y el dolor
- Casos graves pueden necesitar hospitalizacion y oxigeno

**Prevencion:**
- Vacunarse contra la gripe y el neumococo
- Lavarse las manos frecuentemente
- No fumar (el tabaco dana los pulmones)
- Mantener una buena higiene dental

---
## Explanation

Pneumonia is an infection that affects one or both lungs. Your lungs have millions of tiny air sacs called alveoli. Normally, these sacs fill with air when you breathe, allowing oxygen to reach your blood. When you have pneumonia, these sacs fill with fluid, pus, or mucus, making it hard to breathe.

**How you get pneumonia:**
- Breathing in germs that someone else coughed or sneezed
- Having a cold or flu that gets worse and moves down to the lungs
- Aspirating food, liquids, or vomit into the lungs
- Being in the hospital for a long time (hospital germs can be stronger)

**Signs of pneumonia:**
- Cough with green, yellow, or bloody phlegm
- High fever with chills
- Difficulty breathing, feeling short of breath
- Chest pain when breathing or coughing
- Feeling very tired and without energy
- Confusion (especially in elderly people)

**Simple types of pneumonia:**
- **Community-acquired pneumonia:** Caught in daily life (most common)
- **Hospital-acquired pneumonia:** Caught while hospitalized (harder to treat)
- **Aspiration pneumonia:** When food or liquid enters the lungs

**Treatment:**
- Antibiotics for bacterial pneumonia
- Rest and plenty of fluids
- Medicine for fever and pain
- Severe cases may need hospitalization and oxygen

**Prevention:**
- Get flu and pneumococcal vaccines
- Wash hands frequently
- Do not smoke (tobacco damages the lungs)
- Maintain good dental hygiene`,
      keyTerms: [
        { term: 'Neumonia / Pneumonia', definition: 'Infeccion de los pulmones que llena los sacos de aire con liquido o pus. | Infection of the lungs that fills the air sacs with fluid or pus.' },
        { term: 'Alveolos / Alveoli', definition: 'Los pequenos sacos de aire en los pulmones donde el oxigeno pasa a la sangre. | The tiny air sacs in the lungs where oxygen passes into the blood.' },
        { term: 'Flema / Phlegm', definition: 'Mucosidad espesa que se produce en los pulmones durante una infeccion. | Thick mucus produced in the lungs during an infection.' },
        { term: 'Antibioticos / Antibiotics', definition: 'Medicinas que matan las bacterias y ayudan a curar infecciones bacterianas. | Medicines that kill bacteria and help cure bacterial infections.' },
        { term: 'Vacuna / Vaccine', definition: 'Sustancia que prepara a tu cuerpo para defenderse de ciertos germenes. | Substance that prepares your body to defend against certain germs.' }
      ],
      analogies: [
        'Los alveolos son como pequenas burbujas de aire en una esponja. La neumonia llena esas burbujas con agua, haciendo que la esponja no pueda absorber aire. | Alveoli are like tiny air bubbles in a sponge. Pneumonia fills those bubbles with water, making the sponge unable to absorb air.',
        'Imagina tus pulmones como un arbol con millones de hojas. La neumonia es como si las hojas se cubrieran de barro, impidiendo que el arbol respire. | Imagine your lungs like a tree with millions of leaves. Pneumonia is like the leaves getting covered in mud, preventing the tree from breathing.'
      ],
      examples: [
        'Una abuela de 75 anos con fiebre, tos con flema verde y dolor en el lado derecho del pecho probablemente tiene neumonia y necesita ver al medico. | A 75-year-old grandmother with fever, cough with green phlegm, and pain on the right side of the chest probably has pneumonia and needs to see a doctor.',
        'Un nino de 5 anos que despues de un resfriado empieza a respirar rapido y tiene fiebre alta podria estar desarrollando neumonia. | A 5-year-old child who after a cold starts breathing rapidly and has high fever might be developing pneumonia.'
      ],
      patientCounselingPoints: [
        'Termine todo el curso de antibioticos aunque se sienta mejor. Dejar de tomarlos antes de tiempo puede hacer que la infeccion regrese mas fuerte. | Finish the entire course of antibiotics even if you feel better. Stopping them early can make the infection come back stronger.',
        'Si tiene dificultad para respirar, fiebre que no baja, o confusion, vaya a la sala de emergencias inmediatamente. | If you have difficulty breathing, fever that will not go down, or confusion, go to the emergency room immediately.',
        'Las personas mayores de 65 anos deben vacunarse contra el neumococo. Pregunte a su medico sobre las vacunas PCV15/PCV20. | People over 65 should get vaccinated against pneumococcus. Ask your doctor about PCV15/PCV20 vaccines.',
        'Dejar de fumar es una de las mejores cosas que puede hacer para proteger sus pulmones de la neumonia. | Quitting smoking is one of the best things you can do to protect your lungs from pneumonia.'
      ]
    },
    2: {
      level: 2,
      summary: 'La neumonia es una infeccion del parenquima pulmonar que causa consolidacion alveolar. Se clasifica en neumonia adquirida en la comunidad (NAC), neumonia adquirida en el hospital (NAH) y neumonia asociada al ventilador (NAV), cada una con diferentes patogenos y tratamientos. | Pneumonia is an infection of the lung parenchyma causing alveolar consolidation. It is classified into community-acquired pneumonia (CAP), hospital-acquired pneumonia (HAP), and ventilator-associated pneumonia (VAP), each with different pathogens and treatments.',
      explanation: `## Explicacion

La neumonia es una infeccion del tejido pulmonar que causa inflamacion y acumulacion de liquido en los alveolos. Es una de las principales causas de muerte por infeccion a nivel mundial.

**Clasificacion por lugar de adquisicion:**

*Neumonia Adquirida en la Comunidad (NAC):*
- Se desarrolla fuera del hospital
- Patogenos mas comunes:
  - Streptococcus pneumoniae (neumococo) — el mas frecuente
  - Haemophilus influenzae
  - Mycoplasma pneumoniae (neumonia "atipica")
  - Virus respiratorios (influenza, SARS-CoV-2, VSR)
  - Legionella pneumophila
- Generalmente responde bien al tratamiento

*Neumonia Adquirida en el Hospital (NAH):*
- Se desarrolla 48 horas o mas despues del ingreso hospitalario
- Patogenos mas comunes:
  - MRSA (Staphylococcus aureus resistente a meticilina)
  - Pseudomonas aeruginosa
  - Enterobacterias (Klebsiella, E. coli)
  - Acinetobacter baumannii
- Requiere antibioticos mas fuertes

*Neumonia Asociada al Ventilador (NAV):*
- Se desarrolla 48 horas o mas despues de la intubacion
- Mismos patogenos que NAH pero con mayor resistencia
- Alta mortalidad (20-50%)

**Clasificacion por patron radiologico:**
- **Neumonia lobar:** Consolida un lobulo completo (clasica de S. pneumoniae)
- **Bronconeumonia:** Patron parcheado en multiples areas (comun en ancianos)
- **Neumonia intersticial:** Patron difuso reticular (comun en virus y Mycoplasma)

**Diagnostico:**
- Historia clinica y examen fisico: fiebre, tos, estertores (crepitantes)
- Radiografia de torax: infiltrados o consolidacion
- Laboratorios: biometria hematica, PCR, procalcitonina
- En casos severos: hemocultivos, cultivo de esputo, antigenos urinarios (neumococo, Legionella)

**Criterios de severidad (CURB-65):**
Un punto por cada uno:
- **C**onfusion
- **U**rea > 20 mg/dL (BUN > 7 mmol/L)
- **R**espiracion >= 30/min
- Blood pressure: sistolica < 90 o diastolica <= 60 mmHg
- Edad >= **65** anos

Puntaje:
- 0-1: Tratamiento ambulatorio
- 2: Considerar hospitalizacion
- 3-5: Hospitalizacion, considerar UCI si 4-5

**Tratamiento de NAC:**
- Ambulatorio sin comorbilidades: Amoxicilina o doxiciclina
- Ambulatorio con comorbilidades: Amoxicilina-clavulanato + azitromicina, o fluoroquinolona respiratoria
- Hospitalizado: Ceftriaxona + azitromicina, o fluoroquinolona respiratoria sola
- UCI: Ceftriaxona + azitromicina; agregar vancomicina si sospecha de MRSA

**Tratamiento de NAH/NAV:**
- Cobertura empirica anti-pseudomona + anti-MRSA
- Ejemplo: Piperacilina-tazobactam o meropenem + vancomicina o linezolid

---
## Explanation

Pneumonia is an infection of the lung tissue that causes inflammation and fluid accumulation in the alveoli. It is one of the leading causes of death from infection worldwide.

**Classification by place of acquisition:**

*Community-Acquired Pneumonia (CAP):*
- Develops outside the hospital
- Most common pathogens:
  - Streptococcus pneumoniae (pneumococcus) — most frequent
  - Haemophilus influenzae
  - Mycoplasma pneumoniae ("atypical" pneumonia)
  - Respiratory viruses (influenza, SARS-CoV-2, RSV)
  - Legionella pneumophila
- Generally responds well to treatment

*Hospital-Acquired Pneumonia (HAP):*
- Develops 48 hours or more after hospital admission
- Most common pathogens:
  - MRSA (methicillin-resistant Staphylococcus aureus)
  - Pseudomonas aeruginosa
  - Enterobacteriaceae (Klebsiella, E. coli)
  - Acinetobacter baumannii
- Requires stronger antibiotics

*Ventilator-Associated Pneumonia (VAP):*
- Develops 48 hours or more after intubation
- Same pathogens as HAP but with higher resistance
- High mortality (20-50%)

**Classification by radiological pattern:**
- **Lobar pneumonia:** Consolidates an entire lobe (classic for S. pneumoniae)
- **Bronchopneumonia:** Patchy pattern in multiple areas (common in elderly)
- **Interstitial pneumonia:** Diffuse reticular pattern (common in viruses and Mycoplasma)

**Diagnosis:**
- History and physical exam: fever, cough, crackles
- Chest X-ray: infiltrates or consolidation
- Labs: CBC, CRP, procalcitonin
- In severe cases: blood cultures, sputum culture, urinary antigens (pneumococcus, Legionella)

**Severity criteria (CURB-65):**
One point for each:
- **C**onfusion
- **U**rea > 20 mg/dL (BUN > 7 mmol/L)
- **R**espiratory rate >= 30/min
- **B**lood pressure: systolic < 90 or diastolic <= 60 mmHg
- Age >= **65** years

Score:
- 0-1: Outpatient treatment
- 2: Consider hospitalization
- 3-5: Hospitalize, consider ICU if 4-5

**CAP Treatment:**
- Outpatient without comorbidities: Amoxicillin or doxycycline
- Outpatient with comorbidities: Amoxicillin-clavulanate + azithromycin, or respiratory fluoroquinolone
- Inpatient: Ceftriaxone + azithromycin, or respiratory fluoroquinolone alone
- ICU: Ceftriaxone + azithromycin; add vancomycin if MRSA suspected

**HAP/VAP Treatment:**
- Empiric anti-pseudomonal + anti-MRSA coverage
- Example: Piperacillin-tazobactam or meropenem + vancomycin or linezolid`,
      keyTerms: [
        { term: 'NAC / CAP', definition: 'Neumonia Adquirida en la Comunidad: infeccion pulmonar que se desarrolla fuera del hospital. | Community-Acquired Pneumonia: lung infection that develops outside the hospital.' },
        { term: 'NAH / HAP', definition: 'Neumonia Adquirida en el Hospital: infeccion pulmonar que se desarrolla 48+ horas despues del ingreso. | Hospital-Acquired Pneumonia: lung infection developing 48+ hours after admission.' },
        { term: 'NAV / VAP', definition: 'Neumonia Asociada al Ventilador: infeccion pulmonar que se desarrolla 48+ horas despues de la intubacion. | Ventilator-Associated Pneumonia: lung infection developing 48+ hours after intubation.' },
        { term: 'Consolidacion / Consolidation', definition: 'Area del pulmon que se llena de liquido/pus en vez de aire, visible en la radiografia. | Area of lung that fills with fluid/pus instead of air, visible on X-ray.' },
        { term: 'CURB-65', definition: 'Sistema de puntaje para evaluar la severidad de la neumonia: Confusion, Urea, Respiracion, Blood pressure, edad 65+. | Scoring system to evaluate pneumonia severity: Confusion, Urea, Respiratory rate, Blood pressure, age 65+.' },
        { term: 'Neumococo / Pneumococcus', definition: 'Streptococcus pneumoniae, la bacteria mas comun que causa neumonia de la comunidad. | Streptococcus pneumoniae, the most common bacteria causing community-acquired pneumonia.' },
        { term: 'Estertores crepitantes / Crackles', definition: 'Sonidos anormales escuchados con el estetoscopio que indican liquido en los alveolos. | Abnormal sounds heard with a stethoscope indicating fluid in the alveoli.' }
      ],
      analogies: [
        'El CURB-65 es como un semaforo para la neumonia: verde (0-1, a casa), amarillo (2, considerar hospital), rojo (3+, hospital seguro). | CURB-65 is like a traffic light for pneumonia: green (0-1, go home), yellow (2, consider hospital), red (3+, definitely hospital).',
        'La diferencia entre NAC y NAH es como la diferencia entre un ladron callejero y un ladron con entrenamiento militar — los germenes del hospital son mas dificiles de combatir. | The difference between CAP and HAP is like the difference between a street thief and a military-trained thief — hospital germs are harder to fight.'
      ],
      examples: [
        'Un hombre de 55 anos fumador con tos productiva, fiebre de 39°C y consolidacion en lobulo inferior derecho en la radiografia tiene una presentacion clasica de neumonia lobar por neumococo. | A 55-year-old male smoker with productive cough, fever of 39°C and right lower lobe consolidation on X-ray has a classic presentation of pneumococcal lobar pneumonia.',
        'Una mujer de 30 anos con tos seca, dolor de cabeza, fiebre leve y radiografia con infiltrado intersticial difuso sugiere neumonia atipica por Mycoplasma. | A 30-year-old woman with dry cough, headache, low-grade fever, and X-ray showing diffuse interstitial infiltrate suggests atypical Mycoplasma pneumonia.'
      ],
      patientCounselingPoints: [
        'Es importante tomar todos los antibioticos como se le indicaron, incluso si empieza a sentirse mejor antes de terminarlos. | It is important to take all antibiotics as directed, even if you start feeling better before finishing them.',
        'Si su tos, fiebre o dificultad para respirar empeoran despues de 48-72 horas de tratamiento, contacte a su medico inmediatamente. | If your cough, fever, or difficulty breathing worsens after 48-72 hours of treatment, contact your doctor immediately.'
      ]
    },
    3: {
      level: 3,
      summary: 'La neumonia es una infeccion del parenquima pulmonar con consolidacion alveolar causada por multiples patogenos. Su clasificacion (NAC, NAH, NAV), evaluacion de severidad (PSI/CURB-65), identificacion microbiologica y seleccion antimicrobiana apropiada son fundamentales para el manejo optimo. | Pneumonia is an infection of the lung parenchyma with alveolar consolidation caused by multiple pathogens. Its classification (CAP, HAP, VAP), severity assessment (PSI/CURB-65), microbiological identification, and appropriate antimicrobial selection are fundamental for optimal management.',
      explanation: `## Explicacion

**Fisiopatologia detallada:**

*Mecanismos de defensa pulmonar normal:*
- Filtrado nasofaringeo y tos como primera linea
- Aparato mucociliar para atrapar y eliminar particulas
- IgA secretoria en vias aereas
- Macrofagos alveolares como defensa primaria en alveolos
- Surfactante con propiedades antimicrobianas (SP-A, SP-D)

*Cuando fallan las defensas:*
- Microaspiracion de flora orofaringea (mecanismo mas comun en NAC)
- Inhalacion de aerosoles infecciosos
- Diseminacion hematogena (endocarditis, infecciones intravasculares)
- Extension por contigueidad (empiema, absceso subdiafragmatico)
- Inoculacion directa (intubacion, broncoscopia)

*Respuesta inflamatoria pulmonar:*
1. Reconocimiento del patogeno por macrofagos alveolares
2. Liberacion de citoquinas (TNF-alfa, IL-1, IL-8, IL-6)
3. Reclutamiento de neutrofilos con exudado inflamatorio
4. Consolidacion: alveolos llenos de neutrofilos, fibrina, eritrocitos y bacterias
5. Resolucion: macrofagos limpian detritus; regeneracion epitelial

*Fases clasicas de neumonia lobar (Laennec):*
1. Congestion (24 horas): hiperemia, edema alveolar serosanguinolento
2. Hepatizacion roja (2-3 dias): exudado con eritrocitos, fibrina
3. Hepatizacion gris (4-8 dias): degradacion de eritrocitos, predominio de neutrofilos
4. Resolucion (8+ dias): lisis enzimatica del exudado, reabsorcion

**Diagnostico avanzado:**

*Evaluacion clinica:*
- Triada clasica: fiebre, tos productiva, disnea
- Examen fisico: matidez a la percusion, frémito tactil aumentado, estertores crepitantes, egofonia, soplo tubario
- Neumonia atipica: presentacion insidiosa, tos seca, sintomas extrapulmonares

*Estudios de imagen:*
- Radiografia de torax PA y lateral: estandar inicial
  - Consolidacion lobar: S. pneumoniae, Klebsiella
  - Infiltrados intersticiales difusos: virus, Mycoplasma, Pneumocystis
  - Cavitacion: S. aureus, anaerobios, tuberculosis, Klebsiella
  - Derrame pleural: S. pneumoniae, S. aureus, anaerobios (empiema)
- TC de torax: mas sensible, util en diagnostico dudoso o complicaciones
- Ecografia pulmonar: consolidacion, derrame pleural, guia para toracocentesis

*Estudios microbiologicos:*
- Hemocultivos (2 sets): positivos en 5-14% de NAC hospitalizada
- Cultivo de esputo (antes de antibioticos): tincion de Gram + cultivo
  - Muestra adecuada: > 25 leucocitos PMN, < 10 celulas epiteliales por campo
- Antigeno urinario de S. pneumoniae: sensibilidad 50-80%, especificidad > 90%
- Antigeno urinario de Legionella (serotipo 1): sensibilidad 70%, especificidad > 95%
- PCR multiplex (panel respiratorio): detecta virus y bacterias atipicas
- Procalcitonina: > 0.25 ng/mL sugiere etiologia bacteriana

**Evaluacion de severidad:**

*PSI (Pneumonia Severity Index) / PORT Score:*
- Sistema de puntos basado en edad, comorbilidades, signos vitales y laboratorios
- Clase I-III: bajo riesgo (mortalidad < 3%), tratamiento ambulatorio
- Clase IV: riesgo moderado (mortalidad 8-9%), hospitalizacion
- Clase V: alto riesgo (mortalidad 27%), considerar UCI

*CURB-65:*
- Mas simple, util en urgencias
- 0-1: ambulatorio, 2: hospitalizacion, >= 3: considerar UCI

*Criterios ATS/IDSA para admision a UCI (NAC severa):*
Criterios mayores (1 = UCI):
- Choque septico requiriendo vasopresores
- Insuficiencia respiratoria requiriendo ventilacion mecanica

Criterios menores (>= 3 = UCI):
- FR >= 30/min
- PaO2/FiO2 <= 250
- Infiltrados multilobares
- Confusion/desorientacion
- BUN >= 20 mg/dL
- Leucopenia (< 4,000) por infeccion
- Trombocitopenia (< 100,000)
- Hipotermia (< 36°C)
- Hipotension requiriendo liquidos agresivos

**Tratamiento antimicrobiano por escenario:**

*NAC ambulatorio:*
- Sin comorbilidades: Amoxicilina 1g c/8h x 5 dias O doxiciclina 100 mg c/12h x 5 dias
- Con comorbilidades: Amoxicilina-clavulanato 875/125 mg c/12h + azitromicina 500 mg dia 1, luego 250 mg/dia x 4 dias
- Alternativa: Levofloxacino 750 mg/dia o moxifloxacino 400 mg/dia x 5 dias

*NAC hospitalizada (no UCI):*
- Ceftriaxona 1-2g IV/dia + azitromicina 500 mg IV/dia
- Alternativa: Levofloxacino 750 mg IV/dia como monoterapia
- Si sospecha de aspiracion: agregar cobertura anaerobia (ampicilina-sulbactam)

*NAC en UCI:*
- Ceftriaxona 2g IV/dia + azitromicina 500 mg IV/dia
- Si factores de riesgo para Pseudomonas: Piperacilina-tazobactam o cefepime o meropenem + fluoroquinolona
- Si factores de riesgo para MRSA: agregar vancomicina o linezolid

*NAH/NAV:*
- Anti-pseudomona: Piperacilina-tazobactam 4.5g IV c/6h O meropenem 1g IV c/8h O cefepime 2g IV c/8h
- Anti-MRSA: Vancomicina 15-20 mg/kg IV c/8-12h O linezolid 600 mg IV c/12h
- Desescalar segun cultivos a las 48-72 horas

---
## Explanation

**Detailed pathophysiology:**

*Normal pulmonary defense mechanisms:*
- Nasopharyngeal filtration and cough as first line
- Mucociliary apparatus to trap and clear particles
- Secretory IgA in airways
- Alveolar macrophages as primary defense in alveoli
- Surfactant with antimicrobial properties (SP-A, SP-D)

*When defenses fail:*
- Microaspiration of oropharyngeal flora (most common mechanism in CAP)
- Inhalation of infectious aerosols
- Hematogenous spread (endocarditis, intravascular infections)
- Contiguous extension (empyema, subdiaphragmatic abscess)
- Direct inoculation (intubation, bronchoscopy)

*Pulmonary inflammatory response:*
1. Pathogen recognition by alveolar macrophages
2. Cytokine release (TNF-alpha, IL-1, IL-8, IL-6)
3. Neutrophil recruitment with inflammatory exudate
4. Consolidation: alveoli filled with neutrophils, fibrin, erythrocytes, and bacteria
5. Resolution: macrophages clear debris; epithelial regeneration

*Classic phases of lobar pneumonia (Laennec):*
1. Congestion (24 hours): hyperemia, serosanguinous alveolar edema
2. Red hepatization (2-3 days): exudate with erythrocytes, fibrin
3. Gray hepatization (4-8 days): erythrocyte degradation, neutrophil predominance
4. Resolution (8+ days): enzymatic lysis of exudate, reabsorption

**Advanced diagnosis:**

*Clinical evaluation:*
- Classic triad: fever, productive cough, dyspnea
- Physical exam: dullness to percussion, increased tactile fremitus, crackles, egophony, bronchial breath sounds
- Atypical pneumonia: insidious onset, dry cough, extrapulmonary symptoms

*Imaging studies:*
- PA and lateral chest X-ray: initial standard
  - Lobar consolidation: S. pneumoniae, Klebsiella
  - Diffuse interstitial infiltrates: viruses, Mycoplasma, Pneumocystis
  - Cavitation: S. aureus, anaerobes, tuberculosis, Klebsiella
  - Pleural effusion: S. pneumoniae, S. aureus, anaerobes (empyema)
- Chest CT: more sensitive, useful in uncertain diagnosis or complications
- Lung ultrasound: consolidation, pleural effusion, thoracentesis guidance

*Microbiological studies:*
- Blood cultures (2 sets): positive in 5-14% of hospitalized CAP
- Sputum culture (before antibiotics): Gram stain + culture
  - Adequate sample: > 25 PMN leukocytes, < 10 epithelial cells per field
- S. pneumoniae urinary antigen: sensitivity 50-80%, specificity > 90%
- Legionella urinary antigen (serotype 1): sensitivity 70%, specificity > 95%
- Multiplex PCR (respiratory panel): detects viruses and atypical bacteria
- Procalcitonin: > 0.25 ng/mL suggests bacterial etiology

**Severity assessment:**

*PSI (Pneumonia Severity Index) / PORT Score:*
- Point system based on age, comorbidities, vital signs, and labs
- Class I-III: low risk (mortality < 3%), outpatient treatment
- Class IV: moderate risk (mortality 8-9%), hospitalization
- Class V: high risk (mortality 27%), consider ICU

*CURB-65:*
- Simpler, useful in emergency settings
- 0-1: outpatient, 2: hospitalization, >= 3: consider ICU

*ATS/IDSA criteria for ICU admission (severe CAP):*
Major criteria (1 = ICU):
- Septic shock requiring vasopressors
- Respiratory failure requiring mechanical ventilation

Minor criteria (>= 3 = ICU):
- RR >= 30/min
- PaO2/FiO2 <= 250
- Multilobar infiltrates
- Confusion/disorientation
- BUN >= 20 mg/dL
- Leukopenia (< 4,000) from infection
- Thrombocytopenia (< 100,000)
- Hypothermia (< 36°C)
- Hypotension requiring aggressive fluids

**Antimicrobial treatment by scenario:**

*Outpatient CAP:*
- No comorbidities: Amoxicillin 1g q8h x 5 days OR doxycycline 100 mg q12h x 5 days
- With comorbidities: Amoxicillin-clavulanate 875/125 mg q12h + azithromycin 500 mg day 1, then 250 mg/day x 4 days
- Alternative: Levofloxacin 750 mg/day or moxifloxacin 400 mg/day x 5 days

*Inpatient CAP (non-ICU):*
- Ceftriaxone 1-2g IV/day + azithromycin 500 mg IV/day
- Alternative: Levofloxacin 750 mg IV/day as monotherapy
- If aspiration suspected: add anaerobic coverage (ampicillin-sulbactam)

*ICU CAP:*
- Ceftriaxone 2g IV/day + azithromycin 500 mg IV/day
- If risk factors for Pseudomonas: Piperacillin-tazobactam or cefepime or meropenem + fluoroquinolone
- If risk factors for MRSA: add vancomycin or linezolid

*HAP/VAP:*
- Anti-pseudomonal: Piperacillin-tazobactam 4.5g IV q6h OR meropenem 1g IV q8h OR cefepime 2g IV q8h
- Anti-MRSA: Vancomycin 15-20 mg/kg IV q8-12h OR linezolid 600 mg IV q12h
- De-escalate based on cultures at 48-72 hours`,
      keyTerms: [
        { term: 'Hepatizacion / Hepatization', definition: 'Fases patologicas de la neumonia lobar donde el pulmon adquiere consistencia similar al higado por exudado inflamatorio. | Pathological phases of lobar pneumonia where the lung acquires liver-like consistency from inflammatory exudate.' },
        { term: 'PSI / Indice de Severidad de Neumonia', definition: 'Sistema de clasificacion en 5 clases basado en multiples variables para determinar el riesgo de mortalidad y guiar la decision de hospitalizacion. | 5-class scoring system based on multiple variables to determine mortality risk and guide hospitalization decisions.' },
        { term: 'Egofonia / Egophony', definition: 'Cambio del sonido "E" a "A" auscultado sobre una consolidacion pulmonar, causado por transmision alterada del sonido a traves del exudado. | Change from "E" to "A" sound auscultated over lung consolidation, caused by altered sound transmission through exudate.' },
        { term: 'Procalcitonina / Procalcitonin', definition: 'Biomarcador producido por celulas C de la tiroides en respuesta a infeccion bacteriana; util para diferenciar etiologia bacteriana de viral. | Biomarker produced by thyroid C cells in response to bacterial infection; useful for differentiating bacterial from viral etiology.' },
        { term: 'Surfactante / Surfactant', definition: 'Lipoproteina producida por neumocitos tipo II que reduce la tension superficial alveolar; SP-A y SP-D tienen funciones inmunes innatas. | Lipoprotein produced by type II pneumocytes that reduces alveolar surface tension; SP-A and SP-D have innate immune functions.' },
        { term: 'Desescalamiento / De-escalation', definition: 'Estrategia de cambiar de antibioticos de amplio espectro a uno de espectro mas estrecho basado en resultados de cultivos. | Strategy of switching from broad-spectrum to narrower-spectrum antibiotics based on culture results.' }
      ],
      clinicalNotes: `**Notas clinicas:**
- La duracion del tratamiento antibiotico para NAC debe ser minimo 5 dias; el paciente debe estar afebril 48-72 horas y clinicamente estable antes de suspender
- La respuesta a los antibioticos generalmente se observa en 48-72 horas; si no hay mejoria, reconsiderar diagnostico, patogeno o complicaciones
- Las complicaciones incluyen: derrame paraneumonico, empiema, absceso pulmonar, SDRA, sepsis
- Siempre evaluar la necesidad de profilaxis trombotica en pacientes hospitalizados
- La neumonia por aspiracion no siempre requiere antibioticos; la neumonitis quimica por aspiracion (sin infeccion) se trata con soporte
- Criterios de estabilidad clinica para alta: temperatura < 37.8°C, FC < 100, FR < 24, PAS >= 90, SaO2 >= 90%, tolerancia oral, estado mental basal

**Clinical notes:**
- Antibiotic treatment duration for CAP should be minimum 5 days; patient should be afebrile 48-72 hours and clinically stable before discontinuation
- Response to antibiotics generally observed in 48-72 hours; if no improvement, reconsider diagnosis, pathogen, or complications
- Complications include: parapneumonic effusion, empyema, lung abscess, ARDS, sepsis
- Always assess need for thromboprophylaxis in hospitalized patients
- Aspiration pneumonia does not always require antibiotics; chemical aspiration pneumonitis (without infection) is treated with supportive care
- Clinical stability criteria for discharge: temperature < 37.8°C, HR < 100, RR < 24, SBP >= 90, SaO2 >= 90%, oral tolerance, baseline mental status`
    },
    4: {
      level: 4,
      summary: 'La neumonia involucra una interaccion compleja entre virulencia del patogeno, respuesta inmune del huesped y factores del microambiente pulmonar. El manejo optimo requiere evaluacion multimodal de severidad, uso juicioso de herramientas diagnosticas avanzadas, seleccion antimicrobiana basada en factores de riesgo para patogenos resistentes, y manejo activo de complicaciones. | Pneumonia involves a complex interaction between pathogen virulence, host immune response, and pulmonary microenvironment factors. Optimal management requires multimodal severity assessment, judicious use of advanced diagnostic tools, antimicrobial selection based on risk factors for resistant pathogens, and active complication management.',
      explanation: `## Explicacion

**Mecanismos de virulencia especificos por patogeno:**

*Streptococcus pneumoniae:*
- Capsula polisacarida (93 serotipos): evade fagocitosis, base de vacunas
- Neumolisina: forma poros en membranas celulares, activa complemento
- Autolisina (LytA): causa lisis bacteriana, liberando componentes inflamatorios
- PspA y PspC: previenen deposito de C3b, inhiben fagocitosis mediada por complemento
- Biofilm: resistencia a antibioticos y persistencia en nasofaringe

*Staphylococcus aureus:*
- Proteina A: se une a Fc de IgG, evade opsonizacion
- Leucocidina Panton-Valentine (PVL): necrotizante, causa neumonia necrosante en jovenes
- Alfa-toxina: forma poros, causa destruccion epitelial
- MRSA: resistencia a todos los beta-lactamicos via gen mecA (PBP2a alterada)
- CA-MRSA vs. HA-MRSA: diferentes perfiles de resistencia y virulencia

*Pseudomonas aeruginosa:*
- Biopeliculas: proteccion contra antibioticos y fagocitosis
- Sistema de secrecion tipo III: inyecta toxinas directamente en celulas del huesped
- Elastasa y proteasa alcalina: destruccion tisular
- Piocianina: genera ROS, inhibe funcion ciliar
- Multiples mecanismos de resistencia: bombas de eflujo, porinas, beta-lactamasas

*Legionella pneumophila:*
- Parasito intracelular obligado de macrofagos alveolares
- Sistema de secrecion tipo IV (Dot/Icm): manipula trafico vesicular del huesped
- Evade fusion fagosoma-lisosoma
- Fuente: sistemas de agua contaminada (torres de enfriamiento, duchas)

*Mycoplasma pneumoniae:*
- Carece de pared celular (resistente a beta-lactamicos)
- Adhesina P1: se une al epitelio respiratorio
- Toxina CARDS: causa inflamacion y dano ciliar
- Mimetismo molecular: puede desencadenar autoinmunidad (sindrome de Stevens-Johnson, encefalitis)

**Diagnostico avanzado y biomarcadores:**

*Biomarcadores sericos:*
- Procalcitonina (PCT):
  - < 0.1 ng/mL: infeccion bacteriana muy improbable
  - 0.1-0.25: infeccion bacteriana poco probable
  - 0.25-0.5: infeccion bacteriana probable
  - > 0.5: infeccion bacteriana altamente probable
  - Guia para desescalar antibioticos (reduccion de duracion de tratamiento sin aumento de mortalidad)
- MR-proAdrenomedulina: predictor de complicaciones y mortalidad en NAC
- Proadrenomedulina media regional (MR-proADM) > 1.5 nmol/L: alto riesgo

*Diagnostico molecular:*
- PCR multiplex de panel respiratorio: detecta > 20 patogenos en 1-4 horas
- Film Array pneumonia panel: identifica patogenos y genes de resistencia directamente de muestras respiratorias
- Secuenciacion metagenomico de nueva generacion: identificacion de patogenos no cultivables

*Broncoscopia con lavado broncoalveolar (BAL):*
- Indicaciones: neumonia que no responde, inmunodeprimidos, sospecha de patogeno inusual
- Umbral cuantitativo para NAV: >= 10^4 UFC/mL en BAL
- Valoracion citologica: neutrofilos, eosinofilos, linfocitos, celulas malignas

**Manejo de complicaciones:**

*Derrame paraneumonico y empiema:*
- Derrame simple: no requiere drenaje
- Derrame complicado (pH < 7.2, glucosa < 60 mg/dL, LDH > 1,000, cultivo positivo): requiere drenaje con tubo de torax
- Empiema: pus en espacio pleural; drenaje + posible decorticacion/VATS si tabicado
- Fibrinoliticos intrapleurales (alteplasa + DNasa): alternativa a cirugia en empiema tabicado

*Absceso pulmonar:*
- Generalmente por anaerobios (Bacteroides, Peptostreptococcus, Fusobacterium)
- Tratamiento: antibioticos prolongados (4-6 semanas), clindamicina o amoxicilina-clavulanato
- Drenaje percutaneo si no responde a antibioticos

*Neumonia necrosante:*
- Necrosis del parenquima pulmonar con formacion de cavidades multiples
- Patogenos: CA-MRSA (PVL+), Klebsiella, S. pneumoniae serotipo 3
- Alta mortalidad, requiere manejo agresivo en UCI

**Poblaciones especiales:**

*Pacientes inmunodeprimidos:*
- VIH con CD4 < 200: Pneumocystis jirovecii (PCP) — trimetoprim-sulfametoxazol, considerar corticosteroides si PaO2 < 70
- Trasplante de organo solido: CMV, Aspergillus, Pneumocystis
- Neutropenia: hongos invasivos (Aspergillus), Pseudomonas
- Considerar siempre tuberculosis en areas endemicas

*Pacientes geriatricos:*
- Presentacion atipica: ausencia de fiebre, confusion como sintoma principal
- Mayor riesgo de complicaciones y mortalidad
- Considerar aspiracion como etiologia frecuente
- Fragilidad como factor pronostico independiente

---
## Explanation

**Pathogen-specific virulence mechanisms:**

*Streptococcus pneumoniae:*
- Polysaccharide capsule (93 serotypes): evades phagocytosis, vaccine basis
- Pneumolysin: forms pores in cell membranes, activates complement
- Autolysin (LytA): causes bacterial lysis, releasing inflammatory components
- PspA and PspC: prevent C3b deposition, inhibit complement-mediated phagocytosis
- Biofilm: antibiotic resistance and nasopharyngeal persistence

*Staphylococcus aureus:*
- Protein A: binds IgG Fc, evades opsonization
- Panton-Valentine Leukocidin (PVL): necrotizing, causes necrotizing pneumonia in young adults
- Alpha-toxin: pore-forming, causes epithelial destruction
- MRSA: resistance to all beta-lactams via mecA gene (altered PBP2a)
- CA-MRSA vs. HA-MRSA: different resistance and virulence profiles

*Pseudomonas aeruginosa:*
- Biofilms: protection against antibiotics and phagocytosis
- Type III secretion system: injects toxins directly into host cells
- Elastase and alkaline protease: tissue destruction
- Pyocyanin: generates ROS, inhibits ciliary function
- Multiple resistance mechanisms: efflux pumps, porins, beta-lactamases

*Legionella pneumophila:*
- Obligate intracellular parasite of alveolar macrophages
- Type IV secretion system (Dot/Icm): manipulates host vesicular trafficking
- Evades phagosome-lysosome fusion
- Source: contaminated water systems (cooling towers, showers)

*Mycoplasma pneumoniae:*
- Lacks cell wall (resistant to beta-lactams)
- P1 adhesin: binds to respiratory epithelium
- CARDS toxin: causes inflammation and ciliary damage
- Molecular mimicry: can trigger autoimmunity (Stevens-Johnson syndrome, encephalitis)

**Advanced diagnostics and biomarkers:**

*Serum biomarkers:*
- Procalcitonin (PCT):
  - < 0.1 ng/mL: bacterial infection very unlikely
  - 0.1-0.25: bacterial infection unlikely
  - 0.25-0.5: bacterial infection probable
  - > 0.5: bacterial infection highly probable
  - Guides antibiotic de-escalation (reduced treatment duration without increased mortality)
- MR-proAdrenomedullin: predictor of complications and mortality in CAP
- Mid-regional proadrenomedullin (MR-proADM) > 1.5 nmol/L: high risk

*Molecular diagnostics:*
- Multiplex PCR respiratory panel: detects > 20 pathogens in 1-4 hours
- FilmArray pneumonia panel: identifies pathogens and resistance genes directly from respiratory samples
- Next-generation metagenomic sequencing: identification of non-cultivable pathogens

*Bronchoscopy with bronchoalveolar lavage (BAL):*
- Indications: non-responding pneumonia, immunocompromised, suspected unusual pathogen
- Quantitative threshold for VAP: >= 10^4 CFU/mL in BAL
- Cytological assessment: neutrophils, eosinophils, lymphocytes, malignant cells

**Complication management:**

*Parapneumonic effusion and empyema:*
- Simple effusion: does not require drainage
- Complicated effusion (pH < 7.2, glucose < 60 mg/dL, LDH > 1,000, positive culture): requires chest tube drainage
- Empyema: pus in pleural space; drainage + possible decortication/VATS if loculated
- Intrapleural fibrinolytics (alteplase + DNase): alternative to surgery in loculated empyema

*Lung abscess:*
- Usually from anaerobes (Bacteroides, Peptostreptococcus, Fusobacterium)
- Treatment: prolonged antibiotics (4-6 weeks), clindamycin or amoxicillin-clavulanate
- Percutaneous drainage if not responding to antibiotics

*Necrotizing pneumonia:*
- Necrosis of lung parenchyma with multiple cavity formation
- Pathogens: CA-MRSA (PVL+), Klebsiella, S. pneumoniae serotype 3
- High mortality, requires aggressive ICU management

**Special populations:**

*Immunocompromised patients:*
- HIV with CD4 < 200: Pneumocystis jirovecii (PCP) — trimethoprim-sulfamethoxazole, consider corticosteroids if PaO2 < 70
- Solid organ transplant: CMV, Aspergillus, Pneumocystis
- Neutropenia: invasive fungi (Aspergillus), Pseudomonas
- Always consider tuberculosis in endemic areas

*Geriatric patients:*
- Atypical presentation: absence of fever, confusion as primary symptom
- Higher risk of complications and mortality
- Consider aspiration as frequent etiology
- Frailty as independent prognostic factor`,
      keyTerms: [
        { term: 'Leucocidina Panton-Valentine (PVL)', definition: 'Toxina necrotizante producida por ciertas cepas de S. aureus (especialmente CA-MRSA) que forma poros en leucocitos, causando neumonia necrosante en pacientes jovenes. | Necrotizing toxin produced by certain S. aureus strains (especially CA-MRSA) that forms pores in leukocytes, causing necrotizing pneumonia in young patients.' },
        { term: 'Film Array Pneumonia Panel', definition: 'Plataforma de PCR multiplex que identifica 33 patogenos y 7 genes de resistencia directamente de muestras respiratorias en aproximadamente 1 hora. | Multiplex PCR platform identifying 33 pathogens and 7 resistance genes directly from respiratory samples in approximately 1 hour.' },
        { term: 'Empiema / Empyema', definition: 'Acumulacion de pus en el espacio pleural, complicacion grave de neumonia que requiere drenaje con tubo toracico y posible intervencion quirurgica. | Pus collection in the pleural space, a serious pneumonia complication requiring chest tube drainage and possible surgical intervention.' },
        { term: 'MR-proAdrenomedulina / MR-proADM', definition: 'Biomarcador estable derivado de la adrenomedulina que predice complicaciones y mortalidad en neumonia; util para estratificacion de riesgo complementaria al CURB-65/PSI. | Stable biomarker derived from adrenomedullin that predicts complications and mortality in pneumonia; useful for risk stratification complementary to CURB-65/PSI.' },
        { term: 'Neumonia necrosante / Necrotizing pneumonia', definition: 'Forma grave de neumonia con destruccion del parenquima pulmonar y formacion de cavidades, asociada a PVL-MRSA, Klebsiella y S. pneumoniae serotipo 3. | Severe pneumonia with lung parenchyma destruction and cavity formation, associated with PVL-MRSA, Klebsiella, and S. pneumoniae serotype 3.' },
        { term: 'Lavado broncoalveolar (BAL) / Bronchoalveolar lavage', definition: 'Procedimiento diagnostico donde se instila solucion salina en un segmento pulmonar y se aspira para obtener muestras del espacio alveolar; umbral diagnostico >= 10^4 UFC/mL en NAV. | Diagnostic procedure where saline is instilled into a lung segment and aspirated to obtain alveolar space samples; diagnostic threshold >= 10^4 CFU/mL in VAP.' }
      ],
      clinicalNotes: `**Notas clinicas avanzadas:**
- La NAC por influenza puede complicarse con sobreinfeccion bacteriana (S. aureus, S. pneumoniae) — considerar cobertura dual si presentacion severa
- Oseltamivir (Tamiflu) debe iniciarse dentro de 48 horas para neumonia por influenza; beneficio aun posible despues en enfermedad severa
- La neumonia por Pneumocystis jirovecii en VIH tipicamente muestra infiltrado intersticial difuso bilateral en radiografia; LDH elevada es sugerente; diagnostico por BAL con tincion de plata o PCR
- Las fluoroquinolonas respiratorias (levofloxacino, moxifloxacino) deben reservarse para pacientes con alergia verdadera a beta-lactamicos o fallo terapeutico, dado el riesgo de tendinopatia, neuropatia y seleccion de resistencia
- En NAV, la aspiracion endotraqueal cuantitativa (umbral >= 10^5-10^6 UFC/mL) es alternativa aceptable al BAL
- Los corticosteroides adyuvantes (dexametasona 6 mg/dia x 4 dias) mostraron beneficio en mortalidad en NAC severa (estudio CAPE COD)

**Advanced clinical notes:**
- Influenza CAP can be complicated by bacterial superinfection (S. aureus, S. pneumoniae) — consider dual coverage if severe presentation
- Oseltamivir (Tamiflu) should be started within 48 hours for influenza pneumonia; benefit still possible later in severe illness
- Pneumocystis jirovecii pneumonia in HIV typically shows bilateral diffuse interstitial infiltrate on X-ray; elevated LDH is suggestive; diagnosis by BAL with silver stain or PCR
- Respiratory fluoroquinolones (levofloxacin, moxifloxacin) should be reserved for patients with true beta-lactam allergy or treatment failure, given tendinopathy, neuropathy, and resistance selection risk
- In VAP, quantitative endotracheal aspirate (threshold >= 10^5-10^6 CFU/mL) is an acceptable alternative to BAL
- Adjunctive corticosteroids (dexamethasone 6 mg/day x 4 days) showed mortality benefit in severe CAP (CAPE COD trial)`
    },
    5: {
      level: 5,
      summary: 'La neumonia es una entidad heterogenea cuyo manejo de precision requiere integracion de fenotipos clinico-biologicos, biomarcadores de respuesta del huesped, diagnosticos moleculares rapidos, farmacologia antimicrobiana optimizada (PK/PD), inmunomodulacion basada en evidencia y abordaje de la disbiosis del microbioma respiratorio, dentro del marco de las guias ATS/IDSA actualizadas. | Pneumonia is a heterogeneous entity whose precision management requires integration of clinical-biological phenotypes, host-response biomarkers, rapid molecular diagnostics, optimized antimicrobial pharmacology (PK/PD), evidence-based immunomodulation, and addressing respiratory microbiome dysbiosis, within the framework of updated ATS/IDSA guidelines.',
      explanation: `## Explicacion

**El microbioma pulmonar y la neumonia:**

*Microbioma del tracto respiratorio inferior:*
- Contrario al paradigma clasico, el pulmon sano alberga una comunidad microbiana de baja biomasa
- Generos predominantes: Prevotella, Streptococcus, Veillonella, Haemophilus
- Balance entre inmigracion microbiana (microaspiracion), eliminacion (tos, mucociliar, inmune) y crecimiento local
- La neumonia representa un desplazamiento hacia un estado de disbiosis con predominio de un patogeno unico

*Eje intestino-pulmon (gut-lung axis):*
- La disbiosis intestinal durante la hospitalizacion/antibioticoterapia altera la respuesta inmune pulmonar
- Metabolitos microbianos intestinales (acidos grasos de cadena corta) modulan la funcion de celulas inmunes alveolares
- La deplecion de bacterias comensales intestinales se asocia con mayor susceptibilidad a NAH/NAV
- Implicaciones terapeuticas: probioticos y transplante de microbiota fecal en investigacion

**Optimizacion farmacocinetica/farmacodinamica (PK/PD):**

*Principios PK/PD de antibioticos en neumonia:*
- Beta-lactamicos (tiempo-dependientes): fT > MIC (objetivo >= 40-70% del intervalo de dosis por encima de la MIC)
  - Infusion prolongada de piperacilina-tazobactam (4 horas) y meropenem (3 horas) mejora fT > MIC
  - Infusion continua: alternativa validada que maximiza exposicion
- Fluoroquinolonas (concentracion-dependientes): AUC/MIC objetivo >= 30-50 para Gram-negativos
- Vancomicina: AUC/MIC objetivo 400-600 (monitoreo mediante AUC, no niveles valle aislados — guias de consenso 2020)
- Aminoglucosidos (concentracion-dependientes con efecto post-antibiotico prolongado): Cmax/MIC >= 8-10
  - Dosis unica diaria extendida preferida para maximizar Cmax

*Penetracion al liquido de revestimiento epitelial (ELF):*
- Macrolidos: excelente penetracion a ELF (azitromicina ELF/plasma ratio > 10)
- Beta-lactamicos: penetracion baja a moderada (20-50% de niveles sericos)
- Fluoroquinolonas: excelente penetracion (ELF/plasma > 1)
- Vancomicina: penetracion pobre (ELF/plasma ~0.2), implicaciones para neumonia por MRSA
- Linezolid: mejor penetracion a ELF que vancomicina, posible ventaja en neumonia MRSA

**Fenotipos de neumonia y medicina de precision:**

*Endotipos de NAC basados en respuesta del huesped:*
- Fenotipo inflamatorio: IL-6, TNF-alfa, IL-8 elevados; mayor riesgo de SDRA y mortalidad
- Fenotipo hipoinflamatorio: inflamacion atenuada; mejor pronostico, puede no beneficiarse de corticosteroides
- Implicacion: los ensayos de corticosteroides (CAPE COD, Meduri) pueden mostrar beneficio diferencial segun fenotipo

*Biomarcadores de respuesta del huesped:*
- Ferritina: marcador de activacion macrofagica, elevada en neumonia severa
- suPAR (receptor soluble del activador de plasminogeno tipo uroquinasa): predictor de mortalidad a 30 dias
- sTREM-1 (receptor soluble de expresion en celulas mieloides tipo 1): diferencia neumonia de otras causas de infiltrado pulmonar
- Pentraxina 3 (PTX3): marcador de activacion inmune innata, predice falla organica

**Terapias emergentes y ensayos clinicos recientes:**

*Corticosteroides adyuvantes:*
- CAPE COD (2023): Hidrocortisona 200 mg/dia en NAC severa — reduccion significativa de mortalidad a 28 dias (6.2% vs. 11.9%)
- ESCAPe (2023): Metilprednisolona en NAC severa — reduccion de dias de estancia y falla de tratamiento
- Meta-analisis sugiere beneficio en NAC severa (NNT ~18-20 para mortalidad)
- Preocupaciones: hiperglucemia, sobreinfeccion, reactivacion de tuberculosis latente

*Nuevos antibioticos y terapias anti-infecciosas:*
- Ceftolozano-tazobactam: actividad contra Pseudomonas MDR (ensayo ASPECT-NP para NAH/NAV)
- Ceftazidima-avibactam: actividad contra Enterobacterales productores de KPC
- Meropenem-vaborbactam: contra carbapenemasas de clase A (KPC)
- Cefiderocol: cefalosporina sideroforica con actividad contra Gram-negativos MDR incluyendo productores de metalobeta-lactamasas
- Delafloxacina: fluoroquinolona con actividad mejorada en ambientes acidos (biofilm, empiema)
- Omadaciclina: tetraciclina de nueva generacion aprobada para NAC

*Terapias no antibioticas en investigacion:*
- Fagoterapia: bacteriofagos dirigidos contra bacterias MDR (ensayos compasivos)
- Anticuerpos monoclonales anti-toxina: suvratoxumab (anti-alfa toxina de S. aureus) — ensayo SAATELLITE
- Inmunoterapia: factor estimulante de colonias de granulocitos-macrofagos (GM-CSF) inhalado para restaurar defensa macrofagica alveolar
- Terapia con celulas madre mesenquimales (MSC): propiedades antiinflamatorias y reparadoras, en ensayos para SDRA asociado a neumonia

**Prevencion avanzada:**

*Vacunacion neumococica actual:*
- PCV20 (Prevnar 20): 20 serotipos conjugados, recomendada para todos >= 65 anos y adultos con factores de riesgo
- PCV15 (Vaxneuvance) + PPSV23: esquema alternativo secuencial
- Cobertura estimada de serotipos causantes de enfermedad invasiva: 60-70% con PCV20

*Prevencion de NAH/NAV:*
- Paquete de prevencion de NAV: elevacion de cabecera 30-45°, pausa diaria de sedacion, evaluacion diaria de extubacion, higiene oral con clorhexidina (evidencia reciente cuestiona beneficio vs. riesgo de clorhexidina)
- Descontaminacion digestiva selectiva (SDD): controversial, beneficio en poblaciones con baja resistencia

---
## Explanation

**The lung microbiome and pneumonia:**

*Lower respiratory tract microbiome:*
- Contrary to the classic paradigm, the healthy lung harbors a low-biomass microbial community
- Predominant genera: Prevotella, Streptococcus, Veillonella, Haemophilus
- Balance between microbial immigration (microaspiration), elimination (cough, mucociliary, immune), and local growth
- Pneumonia represents a shift toward a dysbiotic state with single pathogen dominance

*Gut-lung axis:*
- Intestinal dysbiosis during hospitalization/antibiotic therapy alters pulmonary immune response
- Gut microbial metabolites (short-chain fatty acids) modulate alveolar immune cell function
- Depletion of commensal gut bacteria is associated with greater HAP/VAP susceptibility
- Therapeutic implications: probiotics and fecal microbiota transplant under investigation

**Pharmacokinetic/pharmacodynamic (PK/PD) optimization:**

*PK/PD principles of antibiotics in pneumonia:*
- Beta-lactams (time-dependent): fT > MIC (target >= 40-70% of dosing interval above MIC)
  - Extended infusion piperacillin-tazobactam (4 hours) and meropenem (3 hours) improves fT > MIC
  - Continuous infusion: validated alternative that maximizes exposure
- Fluoroquinolones (concentration-dependent): AUC/MIC target >= 30-50 for Gram-negatives
- Vancomycin: AUC/MIC target 400-600 (monitoring via AUC, not trough levels alone — 2020 consensus guidelines)
- Aminoglycosides (concentration-dependent with prolonged post-antibiotic effect): Cmax/MIC >= 8-10
  - Extended-interval daily dosing preferred to maximize Cmax

*Epithelial lining fluid (ELF) penetration:*
- Macrolides: excellent ELF penetration (azithromycin ELF/plasma ratio > 10)
- Beta-lactams: low to moderate penetration (20-50% of serum levels)
- Fluoroquinolones: excellent penetration (ELF/plasma > 1)
- Vancomycin: poor penetration (ELF/plasma ~0.2), implications for MRSA pneumonia
- Linezolid: better ELF penetration than vancomycin, possible advantage in MRSA pneumonia

**Pneumonia phenotypes and precision medicine:**

*CAP endotypes based on host response:*
- Inflammatory phenotype: elevated IL-6, TNF-alpha, IL-8; higher risk of ARDS and mortality
- Hypoinflammatory phenotype: attenuated inflammation; better prognosis, may not benefit from corticosteroids
- Implication: corticosteroid trials (CAPE COD, Meduri) may show differential benefit by phenotype

*Host-response biomarkers:*
- Ferritin: marker of macrophage activation, elevated in severe pneumonia
- suPAR (soluble urokinase-type plasminogen activator receptor): predictor of 30-day mortality
- sTREM-1 (soluble triggering receptor expressed on myeloid cells type 1): differentiates pneumonia from other causes of pulmonary infiltrates
- Pentraxin 3 (PTX3): innate immune activation marker, predicts organ failure

**Emerging therapies and recent clinical trials:**

*Adjunctive corticosteroids:*
- CAPE COD (2023): Hydrocortisone 200 mg/day in severe CAP — significant reduction in 28-day mortality (6.2% vs. 11.9%)
- ESCAPe (2023): Methylprednisolone in severe CAP — reduced length of stay and treatment failure
- Meta-analysis suggests benefit in severe CAP (NNT ~18-20 for mortality)
- Concerns: hyperglycemia, superinfection, latent tuberculosis reactivation

*New antibiotics and anti-infective therapies:*
- Ceftolozane-tazobactam: activity against MDR Pseudomonas (ASPECT-NP trial for HAP/VAP)
- Ceftazidime-avibactam: activity against KPC-producing Enterobacterales
- Meropenem-vaborbactam: against class A carbapenemases (KPC)
- Cefiderocol: siderophore cephalosporin with activity against MDR Gram-negatives including metallo-beta-lactamase producers
- Delafloxacin: fluoroquinolone with enhanced activity in acidic environments (biofilm, empyema)
- Omadacycline: next-generation tetracycline approved for CAP

*Non-antibiotic therapies under investigation:*
- Phage therapy: bacteriophages directed against MDR bacteria (compassionate use trials)
- Anti-toxin monoclonal antibodies: suvratoxumab (anti-S. aureus alpha toxin) — SAATELLITE trial
- Immunotherapy: inhaled granulocyte-macrophage colony-stimulating factor (GM-CSF) to restore alveolar macrophage defense
- Mesenchymal stem cell (MSC) therapy: anti-inflammatory and reparative properties, in trials for pneumonia-associated ARDS

**Advanced prevention:**

*Current pneumococcal vaccination:*
- PCV20 (Prevnar 20): 20 conjugated serotypes, recommended for all >= 65 years and adults with risk factors
- PCV15 (Vaxneuvance) + PPSV23: alternative sequential regimen
- Estimated coverage of invasive disease-causing serotypes: 60-70% with PCV20

*HAP/VAP prevention:*
- VAP prevention bundle: head-of-bed elevation 30-45°, daily sedation pause, daily extubation readiness assessment, oral care with chlorhexidine (recent evidence questions benefit vs. risk of chlorhexidine)
- Selective digestive decontamination (SDD): controversial, benefit in populations with low resistance`,
      keyTerms: [
        { term: 'fT > MIC', definition: 'Parametro PK/PD para antibioticos tiempo-dependientes (beta-lactamicos): fraccion del intervalo de dosis donde la concentracion libre supera la concentracion minima inhibitoria. | PK/PD parameter for time-dependent antibiotics (beta-lactams): fraction of dosing interval where free concentration exceeds the minimum inhibitory concentration.' },
        { term: 'Liquido de revestimiento epitelial (ELF)', definition: 'Liquido que recubre el epitelio alveolar donde los antibioticos deben alcanzar concentraciones adecuadas para ser efectivos contra patogenos pulmonares. | Fluid lining the alveolar epithelium where antibiotics must achieve adequate concentrations to be effective against pulmonary pathogens.' },
        { term: 'Cefiderocol', definition: 'Cefalosporina sideroforica que utiliza los transportadores de hierro bacterianos para penetrar la membrana externa; activa contra Gram-negativos MDR incluyendo productores de metalobeta-lactamasas. | Siderophore cephalosporin that uses bacterial iron transporters to penetrate the outer membrane; active against MDR Gram-negatives including metallo-beta-lactamase producers.' },
        { term: 'Endotipos de neumonia / Pneumonia endotypes', definition: 'Subgrupos biologicos de neumonia definidos por patrones de respuesta del huesped (inflamatorio vs. hipoinflamatorio) que predicen diferente respuesta al tratamiento. | Biological subgroups of pneumonia defined by host response patterns (inflammatory vs. hypoinflammatory) that predict different treatment response.' },
        { term: 'Eje intestino-pulmon / Gut-lung axis', definition: 'Comunicacion bidireccional entre el microbioma intestinal y la inmunidad pulmonar mediada por metabolitos microbianos, celulas inmunes y senalizacion neural. | Bidirectional communication between the gut microbiome and pulmonary immunity mediated by microbial metabolites, immune cells, and neural signaling.' },
        { term: 'suPAR', definition: 'Receptor soluble del activador de plasminogeno tipo uroquinasa: biomarcador de activacion inmune que predice mortalidad y complicaciones en neumonia. | Soluble urokinase-type plasminogen activator receptor: immune activation biomarker predicting mortality and complications in pneumonia.' },
        { term: 'Descontaminacion digestiva selectiva (SDD)', definition: 'Estrategia preventiva de NAV que consiste en antibioticos topicos y sistemicos profilacticos para reducir la carga bacteriana del tracto digestivo; controversial por riesgo de resistencia. | VAP prevention strategy using prophylactic topical and systemic antibiotics to reduce bacterial burden in the digestive tract; controversial due to resistance risk.' }
      ],
      clinicalNotes: `**Notas clinicas de nivel experto:**

*Perlas clinicas:*
- El ensayo CAPE COD cambio la practica: considerar hidrocortisona 200 mg/dia en NAC severa con PCR > 150 mg/L (criterio de inclusion del estudio)
- La infusion prolongada de beta-lactamicos reduce mortalidad en infecciones graves por Gram-negativos (meta-analisis de Roberts et al.): implementar como practica estandar en UCI
- Linezolid puede ser superior a vancomicina para neumonia por MRSA basado en mejor penetracion a ELF y datos observacionales; sin embargo, el ensayo ZEPHyR tuvo limitaciones metodologicas
- En NAV temprana (< 5 dias de ventilacion), la microbiologia se asemeja a NAC; la cobertura anti-MRSA y anti-pseudomona puede no ser necesaria si no hay factores de riesgo adicionales
- La ecografia pulmonar point-of-care tiene sensibilidad > 90% para neumonia y es superior a la radiografia de torax portatil, especialmente en UCI

*Inteligencia artificial y neumonia:*
- Algoritmos de deep learning para deteccion automatica de consolidacion en radiografia de torax (rendimiento comparable a radiologos)
- Modelos predictivos de resistencia antimicrobiana basados en datos locales de antibiograma y factores del paciente
- AI para prediccion de deterioro clinico en NAC hospitalizada: identificacion temprana de pacientes que necesitaran UCI

*Desafios globales:*
- La resistencia antimicrobiana es la mayor amenaza para el tratamiento de la neumonia a nivel mundial
- La neumonia es la principal causa de muerte infecciosa en ninos < 5 anos globalmente
- Disparidades en acceso a diagnostico molecular y antibioticos de nueva generacion entre paises de altos y bajos ingresos

**Expert-level clinical notes:**

*Clinical pearls:*
- The CAPE COD trial was practice-changing: consider hydrocortisone 200 mg/day in severe CAP with CRP > 150 mg/L (study inclusion criterion)
- Extended infusion of beta-lactams reduces mortality in severe Gram-negative infections (Roberts et al. meta-analysis): implement as standard ICU practice
- Linezolid may be superior to vancomycin for MRSA pneumonia based on better ELF penetration and observational data; however, the ZEPHyR trial had methodological limitations
- In early VAP (< 5 days of ventilation), microbiology resembles CAP; anti-MRSA and anti-pseudomonal coverage may not be necessary without additional risk factors
- Point-of-care lung ultrasound has > 90% sensitivity for pneumonia and is superior to portable chest X-ray, especially in ICU

*Artificial intelligence and pneumonia:*
- Deep learning algorithms for automated consolidation detection on chest X-ray (comparable performance to radiologists)
- Predictive models of antimicrobial resistance based on local antibiogram data and patient factors
- AI for clinical deterioration prediction in hospitalized CAP: early identification of patients who will need ICU

*Global challenges:*
- Antimicrobial resistance is the greatest threat to pneumonia treatment worldwide
- Pneumonia is the leading cause of infectious death in children < 5 years globally
- Disparities in access to molecular diagnostics and new-generation antibiotics between high- and low-income countries`
    }
  },
  media: [],
  citations: [
    { id: 'ref-1', type: 'article', title: 'Diagnosis and Treatment of Adults with Community-acquired Pneumonia: ATS/IDSA Clinical Practice Guideline 2019', authors: ['Metlay JP', 'Waterer GW', 'Long AC', 'et al.'], source: 'American Journal of Respiratory and Critical Care Medicine. 2019;200(7):e45-e67', license: 'CC BY 4.0' },
    { id: 'ref-2', type: 'article', title: 'Management of Adults With Hospital-acquired and Ventilator-associated Pneumonia: ATS/IDSA Clinical Practice Guideline 2016', authors: ['Kalil AC', 'Metersky ML', 'Klompas M', 'et al.'], source: 'Clinical Infectious Diseases. 2016;63(5):e61-e111', license: 'CC BY 4.0' },
    { id: 'ref-3', type: 'textbook', title: 'Harrison\'s Principles of Internal Medicine, 21st Edition', authors: ['Loscalzo J', 'Fauci AS', 'Kasper DL', 'et al.'], source: 'McGraw-Hill Education', chapter: 'Pneumonia', license: 'CC BY 4.0' },
    { id: 'ref-4', type: 'article', title: 'Effect of Hydrocortisone on 28-Day Mortality in Severe Community-Acquired Pneumonia (CAPE COD)', authors: ['Dequin PF', 'Meziani F', 'Quenot JP', 'et al.'], source: 'New England Journal of Medicine. 2023;388(21):1931-1941', license: 'CC BY 4.0' },
    { id: 'ref-5', type: 'article', title: 'The Lung Microbiome: New Principles for Respiratory Bacteriology in Health and Disease', authors: ['Dickson RP', 'Erb-Downward JR', 'Huffnagle GB'], source: 'PLoS Pathogens. 2015;11(7):e1004923', license: 'CC BY 4.0' }
  ],
  crossReferences: [
    { targetId: 'condition-sepsis-septicemia', targetType: 'condition', relationship: 'related', label: 'Sepsis - Common complication of pneumonia' },
    { targetId: 'condition-tuberculosis-tb', targetType: 'condition', relationship: 'related', label: 'Tuberculosis - Differential diagnosis' },
    { targetId: 'infectious-disease-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis (Serious Infections module)' }
  ],
  tags: {
    systems: ['respiratory', 'immune'],
    topics: ['infectious-disease', 'pulmonology', 'critical-care'],
    keywords: ['neumonia', 'pneumonia', 'NAC', 'CAP', 'NAH', 'HAP', 'NAV', 'VAP', 'consolidacion', 'CURB-65', 'PSI', 'antibioticos', 'neumococo', 'atipica'],
    clinicalRelevance: 'critical'
  },
  createdAt: '2026-02-05',
  updatedAt: '2026-02-05',
  version: 1,
  status: 'published',
  contributors: ['SOMA AI Content Team']
};
