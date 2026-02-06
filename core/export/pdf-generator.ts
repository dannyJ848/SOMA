/**
 * PDF Report Generator
 * 
 * Generates professional health summary reports in HTML format
 * ready for PDF conversion. Includes charts, medication lists,
 * lab history with trends, condition timeline, and emergency card.
 */

import type { 
  CompleteHealthRecord, 
  PDFReportOptions, 
  LabResult,
  Medication,
  Condition,
  PatientProfile,
  VitalSigns,
} from './types';
import type { TimelineEvent } from '../timeline/events';

// ============================================================================
// Templates
// ============================================================================

const TEMPLATES = {
  full: generateFullReport,
  summary: generateSummaryReport,
  provider: generateProviderReport,
  emergency: generateEmergencyCard,
};

// ============================================================================
// Main Generator
// ============================================================================

/**
 * Generate PDF report HTML
 */
export function generatePDFReport(
  data: CompleteHealthRecord,
  options: PDFReportOptions
): string {
  const generator = TEMPLATES[options.template];
  return generator(data, options);
}

// ============================================================================
// Full Report Template
// ============================================================================

function generateFullReport(
  data: CompleteHealthRecord,
  options: PDFReportOptions
): string {
  const { profile, labs, medications, conditions, vitals, timeline } = data;
  const lang = options.language;
  const isSpanish = lang === 'es';
  
  const t = {
    title: isSpanish ? 'Resumen de Salud Completo' : 'Complete Health Summary',
    generated: isSpanish ? 'Generado el' : 'Generated on',
    emergencyInfo: isSpanish ? 'Información de Emergencia' : 'Emergency Information',
    personalInfo: isSpanish ? 'Información Personal' : 'Personal Information',
    medications: isSpanish ? 'Medicamentos' : 'Medications',
    allergies: isSpanish ? 'Alergias' : 'Allergies',
    conditions: isSpanish ? 'Condiciones Médicas' : 'Medical Conditions',
    labs: isSpanish ? 'Resultados de Laboratorio' : 'Laboratory Results',
    vitals: isSpanish ? 'Signos Vitales' : 'Vital Signs',
    timeline: isSpanish ? 'Línea de Tiempo de Salud' : 'Health Timeline',
    disclaimer: isSpanish 
      ? 'Este resumen es solo para fines informativos y no constituye asesoramiento médico.'
      : 'This summary is for informational purposes only and does not constitute medical advice.',
  };
  
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>${t.title}</title>
  <style>
    ${getBaseStyles()}
    ${getFullReportStyles()}
  </style>
</head>
<body>
  ${generateHeader(t.title, options)}
  
  ${options.includeEmergencyCard ? generateEmergencySection(data, lang) : ''}
  
  ${generatePersonalSection(profile, lang)}
  
  ${generateConditionsSection(conditions, lang)}
  
  ${generateMedicationsSection(medications, lang)}
  
  ${generateAllergiesSection(data.allergies, lang)}
  
  ${generateLabsSection(labs, lang, options.includeCharts)}
  
  ${generateVitalsSection(vitals, lang)}
  
  ${generateTimelineSection(timeline.slice(0, 20), lang)}
  
  ${generateFooter(t.disclaimer, options)}
</body>
</html>`;
}

// ============================================================================
// Summary Report Template
// ============================================================================

function generateSummaryReport(
  data: CompleteHealthRecord,
  options: PDFReportOptions
): string {
  const { profile, conditions, medications, labs } = data;
  const lang = options.language;
  const isSpanish = lang === 'es';
  
  const t = {
    title: isSpanish ? 'Resumen de Salud' : 'Health Summary',
    quickStats: isSpanish ? 'Estadísticas Rápidas' : 'Quick Stats',
    activeConditions: isSpanish ? 'Condiciones Activas' : 'Active Conditions',
    currentMeds: isSpanish ? 'Medicamentos Actuales' : 'Current Medications',
    recentLabs: isSpanish ? 'Laboratorios Recientes' : 'Recent Labs',
  };
  
  const activeConditions = conditions.filter(c => c.status === 'active');
  const activeMeds = medications.filter(m => m.status === 'active');
  const recentLabs = labs.slice(0, 5);
  
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>${t.title}</title>
  <style>
    ${getBaseStyles()}
    ${getSummaryStyles()}
  </style>
</head>
<body>
  ${generateHeader(t.title, options)}
  
  <div class="summary-grid">
    <div class="stat-card">
      <div class="stat-value">${conditions.length}</div>
      <div class="stat-label">${isSpanish ? 'Condiciones Totales' : 'Total Conditions'}</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${activeMeds.length}</div>
      <div class="stat-label">${isSpanish ? 'Medicamentos Activos' : 'Active Medications'}</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${labs.length}</div>
      <div class="stat-label">${isSpanish ? 'Resultados de Lab' : 'Lab Results'}</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${data.timeline.length}</div>
      <div class="stat-label">${isSpanish ? 'Eventos' : 'Events'}</div>
    </div>
  </div>
  
  <section class="section">
    <h2>${t.activeConditions}</h2>
    ${activeConditions.length > 0 ? `
      <ul class="simple-list">
        ${activeConditions.map(c => `
          <li>
            <strong>${c.name}</strong>
            ${c.icd10Code ? `(${c.icd10Code})` : ''}
            <span class="tag">${c.severity || (isSpanish ? 'No especificado' : 'Not specified')}</span>
          </li>
        `).join('')}
      </ul>
    ` : `<p class="empty">${isSpanish ? 'Sin condiciones activas' : 'No active conditions'}</p>`}
  </section>
  
  <section class="section">
    <h2>${t.currentMeds}</h2>
    ${activeMeds.length > 0 ? `
      <div class="med-grid">
        ${activeMeds.map(m => `
          <div class="med-card">
            <div class="med-name">${m.name}</div>
            <div class="med-dose">${m.dose} - ${m.frequency}</div>
            ${m.indication ? `<div class="med-indication">${m.indication}</div>` : ''}
          </div>
        `).join('')}
      </div>
    ` : `<p class="empty">${isSpanish ? 'Sin medicamentos activos' : 'No active medications'}</p>`}
  </section>
  
  ${generateFooter('', options)}
</body>
</html>`;
}

// ============================================================================
// Provider Report Template
// ============================================================================

function generateProviderReport(
  data: CompleteHealthRecord,
  options: PDFReportOptions
): string {
  const { conditions, medications, labs, procedures } = data;
  const lang = options.language;
  const isSpanish = lang === 'es';
  
  const t = {
    title: isSpanish ? 'Resumen para Proveedor de Salud' : 'Healthcare Provider Summary',
    patientReported: isSpanish ? 'Datos Reportados por el Paciente' : 'Patient-Reported Data',
    activeConditions: isSpanish ? 'Condiciones Activas' : 'Active Conditions',
    currentMeds: isSpanish ? 'Medicamentos Actuales' : 'Current Medications',
    allergies: isSpanish ? 'Alergias e Intolerancias' : 'Allergies & Intolerances',
    recentProcedures: isSpanish ? 'Procedimientos Recientes' : 'Recent Procedures',
    labTrends: isSpanish ? 'Tendencias de Laboratorio' : 'Laboratory Trends',
  };
  
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>${t.title}</title>
  <style>
    ${getBaseStyles()}
    ${getProviderStyles()}
  </style>
</head>
<body>
  ${generateHeader(t.title, options)}
  
  <div class="warning-banner">
    <strong>${t.patientReported}</strong> — 
    ${isSpanish 
      ? 'Por favor verifique toda la información con el paciente.'
      : 'Please verify all information with the patient.'}
  </div>
  
  <section class="section">
    <h2>${t.activeConditions}</h2>
    <table class="data-table">
      <thead>
        <tr>
          <th>${isSpanish ? 'Condición' : 'Condition'}</th>
          <th>${isSpanish ? 'Código ICD-10' : 'ICD-10 Code'}</th>
          <th>${isSpanish ? 'Diagnosticado' : 'Diagnosed'}</th>
          <th>${isSpanish ? 'Severidad' : 'Severity'}</th>
        </tr>
      </thead>
      <tbody>
        ${conditions.filter(c => c.status === 'active').map(c => `
          <tr>
            <td>${c.name}</td>
            <td>${c.icd10Code || '-'}</td>
            <td>${c.diagnosedAt ? formatDate(c.diagnosedAt) : '-'}</td>
            <td>${c.severity || '-'}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </section>
  
  <section class="section">
    <h2>${t.currentMeds}</h2>
    <table class="data-table">
      <thead>
        <tr>
          <th>${isSpanish ? 'Medicamento' : 'Medication'}</th>
          <th>${isSpanish ? 'Dosis' : 'Dose'}</th>
          <th>${isSpanish ? 'Frecuencia' : 'Frequency'}</th>
          <th>${isSpanish ? 'Indicación' : 'Indication'}</th>
        </tr>
      </thead>
      <tbody>
        ${medications.filter(m => m.status === 'active').map(m => `
          <tr>
            <td>${m.name}</td>
            <td>${m.dose}</td>
            <td>${m.frequency}</td>
            <td>${m.indication || '-'}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </section>
  
  <section class="section">
    <h2>${t.allergies}</h2>
    <table class="data-table">
      <thead>
        <tr>
          <th>${isSpanish ? 'Alergeno' : 'Allergen'}</th>
          <th>${isSpanish ? 'Reacción' : 'Reaction'}</th>
          <th>${isSpanish ? 'Severidad' : 'Severity'}</th>
        </tr>
      </thead>
      <tbody>
        ${data.allergies.map(a => `
          <tr class="severity-${a.severity}">
            <td>${a.allergen}</td>
            <td>${a.reaction}</td>
            <td>${a.severity}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </section>
  
  ${generateFooter('', options)}
</body>
</html>`;
}

// ============================================================================
// Emergency Card Template
// ============================================================================

function generateEmergencyCard(
  data: CompleteHealthRecord,
  options: PDFReportOptions
): string {
  const { profile, conditions, medications, allergies } = data;
  const lang = options.language;
  const isSpanish = lang === 'es';
  
  const t = {
    emergencyCard: isSpanish ? 'TARJETA DE EMERGENCIA' : 'EMERGENCY CARD',
    call: isSpanish ? 'EN EMERGENCIA LLAME A' : 'IN EMERGENCY CALL',
    allergies: isSpanish ? 'ALERGIAS' : 'ALLERGIES',
    conditions: isSpanish ? 'CONDICIONES' : 'CONDITIONS',
    medications: isSpanish ? 'MEDICAMENTOS' : 'MEDICATIONS',
    bloodType: isSpanish ? 'Tipo Sanguíneo' : 'Blood Type',
    emergencyContact: isSpanish ? 'Contacto de Emergencia' : 'Emergency Contact',
  };
  
  const criticalAllergies = allergies.filter(a => 
    a.severity === 'severe' || a.severity === 'life-threatening'
  );
  
  const activeConditions = conditions.filter(c => c.status === 'active');
  const activeMeds = medications.filter(m => m.status === 'active');
  
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>${t.emergencyCard}</title>
  <style>
    ${getEmergencyCardStyles()}
  </style>
</head>
<body class="emergency-card">
  <div class="card-front">
    <div class="emergency-header">
      <div class="emergency-icon">🚨</div>
      <h1>${t.emergencyCard}</h1>
    </div>
    
    <div class="patient-info-large">
      <div class="patient-name">${profile?.firstName} ${profile?.lastName}</div>
      <div class="patient-dob">
        ${profile?.dateOfBirth ? formatDate(profile.dateOfBirth) : ''}
        ${profile?.bloodType ? `• ${t.bloodType}: ${profile.bloodType}` : ''}
      </div>
    </div>
    
    ${criticalAllergies.length > 0 ? `
      <div class="critical-section allergy-section">
        <div class="section-header">⚠️ ${t.allergies}</div>
        <div class="critical-list">
          ${criticalAllergies.map(a => `
            <div class="critical-item">
              <strong>${a.allergen}</strong> — ${a.reaction}
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
    
    ${activeConditions.length > 0 ? `
      <div class="critical-section">
        <div class="section-header">${t.conditions}</div>
        <div class="condition-list">
          ${activeConditions.slice(0, 5).map(c => `
            <span class="condition-tag">${c.name}</span>
          `).join('')}
        </div>
      </div>
    ` : ''}
    
    ${activeMeds.length > 0 ? `
      <div class="critical-section">
        <div class="section-header">${t.medications}</div>
        <div class="med-list">
          ${activeMeds.slice(0, 5).map(m => `
            <div class="med-item">
              <strong>${m.name}</strong> ${m.dose}
            </div>
          `).join('')}
          ${activeMeds.length > 5 ? `<div class="med-more">+${activeMeds.length - 5} more</div>` : ''}
        </div>
      </div>
    ` : ''}
    
    ${profile?.emergencyContact ? `
      <div class="emergency-contact-box">
        <div class="section-header">${t.emergencyContact}</div>
        <div class="contact-info">
          <strong>${profile.emergencyContact.name}</strong><br>
          ${profile.emergencyContact.relationship}<br>
          <span class="phone">${profile.emergencyContact.phone}</span>
        </div>
      </div>
    ` : ''}
    
    <div class="generated-footer">
      ${isSpanish ? 'Generado por Biological Self' : 'Generated by Biological Self'}
      • ${formatDate(new Date())}
    </div>
  </div>
</body>
</html>`;
}

// ============================================================================
// Section Generators
// ============================================================================

function generateHeader(title: string, options: PDFReportOptions): string {
  const patientName = options.patientName || '';
  const generatedAt = formatDate(options.generatedAt);
  
  return `
    <header class="report-header">
      <div class="header-content">
        <h1>${title}</h1>
        ${patientName ? `<div class="patient-name">${patientName}</div>` : ''}
        <div class="generated-date">${generatedAt}</div>
      </div>
      <div class="logo">🧬 Biological Self</div>
    </header>
  `;
}

function generateFooter(disclaimer: string, options: PDFReportOptions): string {
  return `
    <footer class="report-footer">
      ${disclaimer ? `<p class="disclaimer">${disclaimer}</p>` : ''}
      <p class="footer-info">
        Biological Self Health Summary • ${options.patientId || 'Patient ID'}
        • ${formatDate(options.generatedAt)}
      </p>
    </footer>
  `;
}

function generateEmergencySection(data: CompleteHealthRecord, lang: 'es' | 'en'): string {
  const isSpanish = lang === 'es';
  const { profile, allergies } = data;
  
  const criticalAllergies = allergies.filter(a => 
    a.severity === 'severe' || a.severity === 'life-threatening'
  );
  
  return `
    <section class="section emergency-section">
      <h2>🚨 ${isSpanish ? 'Información de Emergencia' : 'Emergency Information'}</h2>
      <div class="emergency-grid">
        ${profile?.bloodType ? `
          <div class="emergency-item">
            <span class="label">${isSpanish ? 'Tipo Sanguíneo' : 'Blood Type'}</span>
            <span class="value">${profile.bloodType}</span>
          </div>
        ` : ''}
        ${profile?.emergencyContact ? `
          <div class="emergency-item">
            <span class="label">${isSpanish ? 'Contacto de Emergencia' : 'Emergency Contact'}</span>
            <span class="value">${profile.emergencyContact.name} — ${profile.emergencyContact.phone}</span>
          </div>
        ` : ''}
      </div>
      ${criticalAllergies.length > 0 ? `
        <div class="critical-allergies">
          <strong>${isSpanish ? 'Alergias Críticas:' : 'Critical Allergies:'}</strong>
          ${criticalAllergies.map(a => `${a.allergen} (${a.reaction})`).join(', ')}
        </div>
      ` : ''}
    </section>
  `;
}

function generatePersonalSection(profile: PatientProfile | undefined, lang: 'es' | 'en'): string {
  const isSpanish = lang === 'es';
  
  if (!profile) {
    return `
      <section class="section">
        <h2>${isSpanish ? 'Información Personal' : 'Personal Information'}</h2>
        <p class="empty">${isSpanish ? 'No hay información de perfil disponible' : 'No profile information available'}</p>
      </section>
    `;
  }
  
  return `
    <section class="section">
      <h2>${isSpanish ? 'Información Personal' : 'Personal Information'}</h2>
      <div class="info-grid">
        <div class="info-item">
          <span class="label">${isSpanish ? 'Nombre' : 'Name'}</span>
          <span class="value">${profile.firstName} ${profile.lastName}</span>
        </div>
        ${profile.dateOfBirth ? `
          <div class="info-item">
            <span class="label">${isSpanish ? 'Fecha de Nacimiento' : 'Date of Birth'}</span>
            <span class="value">${formatDate(profile.dateOfBirth)}</span>
          </div>
        ` : ''}
        ${profile.gender ? `
          <div class="info-item">
            <span class="label">${isSpanish ? 'Género' : 'Gender'}</span>
            <span class="value">${profile.gender}</span>
          </div>
        ` : ''}
        ${profile.height ? `
          <div class="info-item">
            <span class="label">${isSpanish ? 'Altura' : 'Height'}</span>
            <span class="value">${profile.height.value} ${profile.height.unit}</span>
          </div>
        ` : ''}
        ${profile.weight ? `
          <div class="info-item">
            <span class="label">${isSpanish ? 'Peso' : 'Weight'}</span>
            <span class="value">${profile.weight.value} ${profile.weight.unit}</span>
          </div>
        ` : ''}
      </div>
    </section>
  `;
}

function generateConditionsSection(conditions: Condition[], lang: 'es' | 'en'): string {
  const isSpanish = lang === 'es';
  
  return `
    <section class="section">
      <h2>${isSpanish ? 'Condiciones Médicas' : 'Medical Conditions'}</h2>
      ${conditions.length > 0 ? `
        <table class="data-table">
          <thead>
            <tr>
              <th>${isSpanish ? 'Condición' : 'Condition'}</th>
              <th>${isSpanish ? 'Estado' : 'Status'}</th>
              <th>${isSpanish ? 'Diagnosticado' : 'Diagnosed'}</th>
              <th>${isSpanish ? 'Severidad' : 'Severity'}</th>
            </tr>
          </thead>
          <tbody>
            ${conditions.map(c => `
              <tr class="status-${c.status}">
                <td>
                  <strong>${c.name}</strong>
                  ${c.icd10Code ? `<small>(${c.icd10Code})</small>` : ''}
                </td>
                <td><span class="badge badge-${c.status}">${c.status}</span></td>
                <td>${c.diagnosedAt ? formatDate(c.diagnosedAt) : '-'}</td>
                <td>${c.severity || '-'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      ` : `<p class="empty">${isSpanish ? 'No hay condiciones registradas' : 'No conditions recorded'}</p>`}
    </section>
  `;
}

function generateMedicationsSection(medications: Medication[], lang: 'es' | 'en'): string {
  const isSpanish = lang === 'es';
  
  return `
    <section class="section">
      <h2>${isSpanish ? 'Medicamentos' : 'Medications'}</h2>
      ${medications.length > 0 ? `
        <div class="medication-list">
          ${medications.map(m => `
            <div class="medication-card status-${m.status}">
              <div class="med-header">
                <strong class="med-name">${m.name}</strong>
                <span class="badge badge-${m.status}">${m.status}</span>
              </div>
              <div class="med-details">
                <span class="med-dose">${m.dose}</span>
                <span class="med-freq">${m.frequency}</span>
              </div>
              ${m.indication ? `<div class="med-indication">${isSpanish ? 'Para:' : 'For:'} ${m.indication}</div>` : ''}
              ${m.prescribedBy ? `<div class="med-provider">${isSpanish ? 'Recetado por:' : 'Prescribed by:'} ${m.prescribedBy}</div>` : ''}
            </div>
          `).join('')}
        </div>
      ` : `<p class="empty">${isSpanish ? 'No hay medicamentos registrados' : 'No medications recorded'}</p>`}
    </section>
  `;
}

function generateAllergiesSection(allergies: CompleteHealthRecord['allergies'], lang: 'es' | 'en'): string {
  const isSpanish = lang === 'es';
  
  return `
    <section class="section">
      <h2>${isSpanish ? 'Alergias e Intolerancias' : 'Allergies & Intolerances'}</h2>
      ${allergies.length > 0 ? `
        <div class="allergy-grid">
          ${allergies.map(a => `
            <div class="allergy-card severity-${a.severity}">
              <div class="allergy-header">
                <strong>${a.allergen}</strong>
                <span class="severity-badge">${a.severity}</span>
              </div>
              <div class="allergy-reaction">${a.reaction}</div>
              <div class="allergy-type">${a.allergenType}</div>
            </div>
          `).join('')}
        </div>
      ` : `<p class="empty">${isSpanish ? 'No hay alergias registradas' : 'No allergies recorded'}</p>`}
    </section>
  `;
}

function generateLabsSection(labs: LabResult[], lang: 'es' | 'en', includeCharts: boolean = false): string {
  const isSpanish = lang === 'es';
  
  // Group by test name for trends
  const grouped = labs.reduce((acc, lab) => {
    if (!acc[lab.testName]) acc[lab.testName] = [];
    acc[lab.testName].push(lab);
    return acc;
  }, {} as Record<string, LabResult[]>);
  
  return `
    <section class="section">
      <h2>${isSpanish ? 'Resultados de Laboratorio' : 'Laboratory Results'}</h2>
      ${labs.length > 0 ? `
        <div class="labs-container">
          ${Object.entries(grouped).slice(0, 10).map(([testName, results]) => {
            const latest = results[0];
            const trend = results.length > 1 ? calculateTrend(results) : null;
            
            return `
              <div class="lab-result-card">
                <div class="lab-test-header">
                  <strong>${testName}</strong>
                  ${latest.loincCode ? `<small>${latest.loincCode}</small>` : ''}
                </div>
                <div class="lab-latest">
                  <span class="lab-value ${latest.status}">${latest.value} ${latest.unit}</span>
                  ${trend ? `<span class="lab-trend">${trend}</span>` : ''}
                  <span class="lab-date">${formatDate(latest.collectedAt)}</span>
                </div>
                ${latest.referenceRange ? `
                  <div class="lab-range">
                    ${isSpanish ? 'Referencia:' : 'Reference:'} ${latest.referenceRange.low}-${latest.referenceRange.high}
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      ` : `<p class="empty">${isSpanish ? 'No hay resultados de laboratorio' : 'No laboratory results'}</p>`}
    </section>
  `;
}

function generateVitalsSection(vitals: VitalSigns[], lang: 'es' | 'en'): string {
  const isSpanish = lang === 'es';
  
  if (vitals.length === 0) {
    return '';
  }
  
  const latest = vitals[0];
  
  return `
    <section class="section">
      <h2>${isSpanish ? 'Signos Vitales Recientes' : 'Recent Vital Signs'}</h2>
      <div class="vitals-grid">
        ${latest.bloodPressure ? `
          <div class="vital-card">
            <span class="vital-icon">🫀</span>
            <span class="vital-label">${isSpanish ? 'Presión Arterial' : 'Blood Pressure'}</span>
            <span class="vital-value">${latest.bloodPressure.systolic}/${latest.bloodPressure.diastolic}</span>
          </div>
        ` : ''}
        ${latest.heartRate ? `
          <div class="vital-card">
            <span class="vital-icon">💓</span>
            <span class="vital-label">${isSpanish ? 'Pulso' : 'Heart Rate'}</span>
            <span class="vital-value">${latest.heartRate} bpm</span>
          </div>
        ` : ''}
        ${latest.temperature ? `
          <div class="vital-card">
            <span class="vital-icon">🌡️</span>
            <span class="vital-label">${isSpanish ? 'Temperatura' : 'Temperature'}</span>
            <span class="vital-value">${latest.temperature.value}°${latest.temperature.unit}</span>
          </div>
        ` : ''}
        ${latest.oxygenSaturation ? `
          <div class="vital-card">
            <span class="vital-icon">🫁</span>
            <span class="vital-label">${isSpanish ? 'Oxígeno' : 'Oxygen'}</span>
            <span class="vital-value">${latest.oxygenSaturation}%</span>
          </div>
        ` : ''}
        ${latest.weight ? `
          <div class="vital-card">
            <span class="vital-icon">⚖️</span>
            <span class="vital-label">${isSpanish ? 'Peso' : 'Weight'}</span>
            <span class="vital-value">${latest.weight.value} ${latest.weight.unit}</span>
          </div>
        ` : ''}
        ${latest.bmi ? `
          <div class="vital-card">
            <span class="vital-icon">📊</span>
            <span class="vital-label">IMC</span>
            <span class="vital-value">${latest.bmi.toFixed(1)}</span>
          </div>
        ` : ''}
      </div>
    </section>
  `;
}

function generateTimelineSection(events: TimelineEvent[], lang: 'es' | 'en'): string {
  const isSpanish = lang === 'es';
  
  return `
    <section class="section">
      <h2>${isSpanish ? 'Eventos Recientes' : 'Recent Events'}</h2>
      ${events.length > 0 ? `
        <div class="timeline">
          ${events.map(e => `
            <div class="timeline-item severity-${e.severity}">
              <div class="timeline-date">${formatDate(e.date)}</div>
              <div class="timeline-content">
                <strong>${e.title}</strong>
                <p>${e.description}</p>
                <span class="badge badge-${e.category}">${e.category}</span>
              </div>
            </div>
          `).join('')}
        </div>
      ` : `<p class="empty">${isSpanish ? 'No hay eventos registrados' : 'No events recorded'}</p>`}
    </section>
  `;
}

// ============================================================================
// Helper Functions
// ============================================================================

function calculateTrend(results: LabResult[]): string {
  if (results.length < 2) return '';
  
  const latest = results[0];
  const previous = results[1];
  
  if (typeof latest.value !== 'number' || typeof previous.value !== 'number') {
    return '';
  }
  
  const diff = (latest.value as number) - (previous.value as number);
  const percent = ((diff / (previous.value as number)) * 100);
  
  if (percent > 10) return '↑';
  if (percent < -10) return '↓';
  return '→';
}

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// ============================================================================
// CSS Styles
// ============================================================================

function getBaseStyles(): string {
  return `
    * { box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #1a202c;
      max-width: 210mm;
      margin: 0 auto;
      padding: 20px;
      background: white;
    }
    
    .report-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-bottom: 20px;
      border-bottom: 3px solid #3182ce;
      margin-bottom: 30px;
    }
    
    .header-content h1 {
      color: #1a365d;
      margin: 0 0 8px 0;
      font-size: 28px;
    }
    
    .patient-name {
      font-size: 18px;
      color: #2d3748;
      margin-bottom: 4px;
    }
    
    .generated-date {
      color: #718096;
      font-size: 14px;
    }
    
    .logo {
      font-size: 24px;
      font-weight: bold;
      color: #3182ce;
    }
    
    .section {
      margin: 30px 0;
      page-break-inside: avoid;
    }
    
    .section h2 {
      color: #2c5282;
      font-size: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e2e8f0;
      margin-bottom: 20px;
    }
    
    .empty {
      color: #718096;
      font-style: italic;
      padding: 20px;
      background: #f7fafc;
      border-radius: 8px;
    }
    
    .badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }
    
    .badge-active { background: #c6f6d5; color: #276749; }
    .badge-resolved { background: #e2e8f0; color: #4a5568; }
    .badge-chronic { background: #feebc8; color: #c05621; }
    .badge-discontinued { background: #fed7d7; color: #c53030; }
    .badge-medical { background: #fed7d7; color: #c53030; }
    .badge-lifestyle { background: #c6f6d5; color: #276749; }
    
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
    }
    
    .data-table th {
      background: #edf2f7;
      padding: 12px;
      text-align: left;
      font-weight: 600;
      color: #4a5568;
    }
    
    .data-table td {
      padding: 12px;
      border-bottom: 1px solid #e2e8f0;
    }
    
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
    }
    
    .info-item {
      display: flex;
      flex-direction: column;
    }
    
    .info-item .label {
      font-size: 12px;
      color: #718096;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .info-item .value {
      font-size: 16px;
      font-weight: 500;
      color: #2d3748;
    }
    
    .report-footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      text-align: center;
      color: #718096;
      font-size: 12px;
    }
    
    .disclaimer {
      background: #fffaf0;
      border: 1px solid #ed8936;
      padding: 12px;
      border-radius: 6px;
      margin-bottom: 16px;
    }
    
    @media print {
      body { padding: 0; }
      .section { page-break-inside: avoid; }
    }
  `;
}

function getFullReportStyles(): string {
  return `
    .emergency-section {
      background: #fff5f5;
      border: 2px solid #fc8181;
      border-radius: 8px;
      padding: 20px;
    }
    
    .emergency-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
      margin-bottom: 16px;
    }
    
    .emergency-item {
      display: flex;
      flex-direction: column;
    }
    
    .emergency-item .label {
      font-size: 12px;
      color: #c53030;
      font-weight: 600;
    }
    
    .emergency-item .value {
      font-size: 16px;
      font-weight: 500;
    }
    
    .critical-allergies {
      background: #fed7d7;
      padding: 12px;
      border-radius: 6px;
      color: #c53030;
    }
    
    .medication-list {
      display: grid;
      gap: 12px;
    }
    
    .medication-card {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      border-left: 4px solid #3182ce;
    }
    
    .medication-card.status-discontinued {
      border-left-color: #fc8181;
      opacity: 0.7;
    }
    
    .med-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    
    .med-name {
      font-size: 16px;
    }
    
    .med-details {
      display: flex;
      gap: 16px;
      color: #4a5568;
      font-size: 14px;
    }
    
    .med-indication {
      margin-top: 8px;
      font-size: 14px;
      color: #718096;
    }
    
    .med-provider {
      margin-top: 4px;
      font-size: 12px;
      color: #a0aec0;
    }
    
    .allergy-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 12px;
    }
    
    .allergy-card {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
      border-left: 4px solid #48bb78;
    }
    
    .allergy-card.severity-severe,
    .allergy-card.severity-life-threatening {
      border-left-color: #e53e3e;
      background: #fff5f5;
    }
    
    .allergy-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    
    .severity-badge {
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
    }
    
    .severity-severe .severity-badge { background: #fed7d7; color: #c53030; }
    .severity-life-threatening .severity-badge { background: #c53030; color: white; }
    
    .labs-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    
    .lab-result-card {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px;
    }
    
    .lab-test-header {
      margin-bottom: 8px;
    }
    
    .lab-test-header small {
      color: #718096;
      margin-left: 8px;
    }
    
    .lab-latest {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 4px;
    }
    
    .lab-value {
      font-size: 24px;
      font-weight: bold;
    }
    
    .lab-value.normal { color: #38a169; }
    .lab-value.low { color: #d69e2e; }
    .lab-value.high { color: #dd6b20; }
    .lab-value.critical { color: #e53e3e; }
    
    .lab-trend {
      font-size: 20px;
    }
    
    .lab-date {
      color: #718096;
      font-size: 12px;
      margin-left: auto;
    }
    
    .lab-range {
      font-size: 12px;
      color: #718096;
    }
    
    .vitals-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 16px;
    }
    
    .vital-card {
      background: #f7fafc;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
    }
    
    .vital-icon {
      font-size: 32px;
      display: block;
      margin-bottom: 8px;
    }
    
    .vital-label {
      font-size: 12px;
      color: #718096;
      display: block;
      margin-bottom: 4px;
    }
    
    .vital-value {
      font-size: 20px;
      font-weight: bold;
      color: #2d3748;
    }
    
    .timeline {
      position: relative;
      padding-left: 24px;
    }
    
    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #e2e8f0;
    }
    
    .timeline-item {
      position: relative;
      padding-bottom: 20px;
    }
    
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -28px;
      top: 4px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #3182ce;
    }
    
    .timeline-item.severity-critical::before { background: #e53e3e; }
    .timeline-item.severity-high::before { background: #dd6b20; }
    
    .timeline-date {
      font-size: 12px;
      color: #718096;
      margin-bottom: 4px;
    }
    
    .timeline-content p {
      margin: 4px 0;
      color: #4a5568;
    }
  `;
}

function getSummaryStyles(): string {
  return `
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 16px;
      margin-bottom: 30px;
    }
    
    .stat-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      padding: 24px;
      text-align: center;
      color: white;
    }
    
    .stat-value {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 4px;
    }
    
    .stat-label {
      font-size: 14px;
      opacity: 0.9;
    }
    
    .simple-list {
      list-style: none;
      padding: 0;
    }
    
    .simple-list li {
      padding: 12px 0;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .tag {
      padding: 4px 8px;
      background: #edf2f7;
      border-radius: 4px;
      font-size: 12px;
      color: #4a5568;
    }
    
    .med-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 12px;
    }
    
    .med-card {
      background: #f7fafc;
      border-radius: 8px;
      padding: 16px;
    }
    
    .med-name {
      font-weight: 600;
      color: #2d3748;
    }
    
    .med-dose {
      color: #718096;
      font-size: 14px;
    }
    
    .med-indication {
      margin-top: 8px;
      font-size: 12px;
      color: #a0aec0;
    }
  `;
}

function getProviderStyles(): string {
  return `
    .warning-banner {
      background: #fffaf0;
      border: 2px solid #ed8936;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 30px;
      text-align: center;
    }
    
    .severity-severe { background: #fff5f5; }
    .severity-life-threatening { background: #fed7d7; font-weight: bold; }
  `;
}

function getEmergencyCardStyles(): string {
  return `
    * { box-sizing: border-box; }
    
    body.emergency-card {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 400px;
      margin: 0 auto;
      padding: 0;
      background: white;
    }
    
    .card-front {
      border: 3px solid #e53e3e;
      border-radius: 12px;
      padding: 20px;
      background: white;
    }
    
    .emergency-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid #fc8181;
    }
    
    .emergency-icon {
      font-size: 32px;
    }
    
    .emergency-header h1 {
      color: #c53030;
      font-size: 18px;
      margin: 0;
    }
    
    .patient-info-large {
      text-align: center;
      margin-bottom: 20px;
      padding: 16px;
      background: #fff5f5;
      border-radius: 8px;
    }
    
    .patient-name {
      font-size: 24px;
      font-weight: bold;
      color: #1a202c;
      margin-bottom: 4px;
    }
    
    .patient-dob {
      color: #718096;
      font-size: 14px;
    }
    
    .critical-section {
      margin-bottom: 16px;
    }
    
    .section-header {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      color: #c53030;
      margin-bottom: 8px;
      letter-spacing: 0.5px;
    }
    
    .allergy-section {
      background: #fff5f5;
      padding: 12px;
      border-radius: 8px;
      border-left: 4px solid #e53e3e;
    }
    
    .critical-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .critical-item {
      font-size: 14px;
    }
    
    .condition-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .condition-tag {
      background: #edf2f7;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
    }
    
    .med-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .med-item {
      font-size: 14px;
    }
    
    .med-more {
      font-size: 12px;
      color: #718096;
      font-style: italic;
    }
    
    .emergency-contact-box {
      background: #ebf8ff;
      padding: 16px;
      border-radius: 8px;
      margin-top: 16px;
    }
    
    .contact-info {
      font-size: 14px;
    }
    
    .phone {
      font-size: 18px;
      font-weight: bold;
      color: #2b6cb0;
    }
    
    .generated-footer {
      margin-top: 20px;
      padding-top: 12px;
      border-top: 1px solid #e2e8f0;
      font-size: 10px;
      color: #a0aec0;
      text-align: center;
    }
    
    @media print {
      .card-front {
        page-break-inside: avoid;
      }
    }
  `;
}

// ============================================================================
// Export
// ============================================================================

export {
  TEMPLATES,
  formatDate,
  calculateTrend,
};
