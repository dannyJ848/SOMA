/**
 * CasePresentation Component
 * 
 * Displays patient introduction, vitals, history, and physical exam.
 */

import React from 'react';
import type { PatientPresentation, LabResult, ImagingResult } from '../../../core/education/simulator/types';

interface CasePresentationProps {
  presentation: PatientPresentation;
  revealedLabs?: LabResult[];
  revealedImaging?: ImagingResult[];
}

export const CasePresentation: React.FC<CasePresentationProps> = ({
  presentation,
  revealedLabs = [],
  revealedImaging = [],
}) => {
  const vitals = presentation.vitals;

  return (
    <div className="case-presentation">
      {/* Patient Header */}
      <div className="patient-header">
        <h2>{presentation.name}</h2㸀
        <div className="patient-demographics">
          <span className="demo-tag">{presentation.age} years old</span>
          <span className="demo-tag">{presentation.sex}</span>
        </div>
      </div>

      {/* Chief Complaint */}
      <section className="presentation-section">
        <h3>Chief Complaint</h3>
        <p className="chief-complaint">{presentation.chiefComplaint}</p>
      </section>

      {/* History of Present Illness */}
      <section className="presentation-section">
        <h3>History of Present Illness</h3>
        <div className="hpi-text">{presentation.hpI}</div>
      </section>

      {/* Vital Signs */}
      <section className="presentation-section">
        <h3>Vital Signs</h3>
        <div className="vitals-grid">
          <div className="vital-item">
            <span className="vital-label">Temperature</span>
            <span className="vital-value">
              {vitals.temperature 
                ? `${vitals.temperature.value}°${vitals.temperature.unit}` 
                : 'N/A'}
            </span>
          </div>
          <div className="vital-item">
            <span className="vital-label">Heart Rate</span>
            <span className="vital-value">{vitals.heartRate} bpm</span>
          </div>
          <div className="vital-item">
            <span className="vital-label">Blood Pressure</span>
            <span className="vital-value">
              {vitals.bloodPressure.systolic}/{vitals.bloodPressure.diastolic} mmHg
            </span>
          </div>
          <div className="vital-item">
            <span className="vital-label">Respiratory Rate</span>
            <span className="vital-value">{vitals.respiratoryRate} /min</span>
          </div>
          <div className="vital-item">
            <span className="vital-label">Oxygen Saturation</span>
            <span className="vital-value">{vitals.oxygenSaturation}%</span>
          </div>
          {vitals.pain !== undefined && (
            <div className="vital-item">
              <span className="vital-label">Pain</span>
              <span className="vital-value">{vitals.pain}/10</span>
            </div>
          )}
          {vitals.weight && (
            <div className="vital-item">
              <span className="vital-label">Weight</span>
              <span className="vital-value">{vitals.weight.value} {vitals.weight.unit}</span>
            </div>
          )}
          {vitals.height && (
            <div className="vital-item">
              <span className="vital-label">Height</span>
              <span className="vital-value">{vitals.height.value} {vitals.height.unit}</span>
            </div>
          )}
        </div>
      </section>

      {/* Physical Exam */}
      <section className="presentation-section">
        <h3>Physical Examination</h3>
        <div className="exam-sections">
          <div className="exam-item">
            <strong>General Appearance:</strong> {presentation.physicalExam.generalAppearance}
          </div>
          {presentation.physicalExam.heent && (
            <div className="exam-item">
              <strong>HEENT:</strong> {presentation.physicalExam.heent}
            </div>
          )}
          {presentation.physicalExam.cardiovascular && (
            <div className="exam-item">
              <strong>Cardiovascular:</strong> {presentation.physicalExam.cardiovascular}
            </div>
          )}
          {presentation.physicalExam.respiratory && (
            <div className="exam-item">
              <strong>Respiratory:</strong> {presentation.physicalExam.respiratory}
            </div>
          )}
          {presentation.physicalExam.abdominal && (
            <div className="exam-item">
              <strong>Abdominal:</strong> {presentation.physicalExam.abdominal}
            </div>
          )}
          {presentation.physicalExam.neurological && (
            <div className="exam-item">
              <strong>Neurological:</strong> {presentation.physicalExam.neurological}
            </div>
          )}
          {presentation.physicalExam.musculoskeletal && (
            <div className="exam-item">
              <strong>Musculoskeletal:</strong> {presentation.physicalExam.musculoskeletal}
            </div>
          )}
          {presentation.physicalExam.skin && (
            <div className="exam-item">
              <strong>Skin:</strong> {presentation.physicalExam.skin}
            </div>
          )}
          {presentation.physicalExam.psychiatric && (
            <div className="exam-item">
              <strong>Psychiatric:</strong> {presentation.physicalExam.psychiatric}
            </div>
          )}
        </div>
      </section>

      {/* History */}
      <section className="presentation-section">
        <h3>History</h3>
        <div className="history-grid">
          <div className="history-item">
            <strong>Medical History:</strong>
            <ul>
              {presentation.medicalHistory.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="history-item">
            <strong>Medications:</strong>
            <ul>
              {presentation.medications.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="history-item">
            <strong>Allergies:</strong>
            <ul>
              {presentation.allergies.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="history-item">
            <strong>Social History:</strong>
            <p>{presentation.socialHistory}</p>
          </div>
          <div className="history-item">
            <strong>Family History:</strong>
            <ul>
              {presentation.familyHistory.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Available Labs */}
      {revealedLabs.length > 0 && (
        <section className="presentation-section">
          <h3>Laboratory Results</h3>
          <div className="lab-results">
            <table className="lab-table">
              <thead>
                <tr>
                  <th>Test</th>
                  <th>Result</th>
                  <th>Unit</th>
                  <th>Reference Range</th>
                  <th>Flag</th>
                </tr>
              </thead>
              <tbody>
                {revealedLabs.map((lab) => (
                  <tr key={lab.id} className={lab.flag && lab.flag !== 'normal' ? `flag-${lab.flag}` : ''}>
                    <td>{lab.name}</td>
                    <td className="lab-value">{lab.value}</td>
                    <td>{lab.unit}</td>
                    <td>{lab.referenceRange}</td>
                    <td>
                      {lab.flag && lab.flag !== 'normal' && (
                        <span className={`flag-badge ${lab.flag}`}>{lab.flag.toUpperCase()}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Available Imaging */}
      {revealedImaging.length > 0 && (
        <section className="presentation-section">
          <h3>Imaging Results</h3>
          <div className="imaging-results">
            {revealedImaging.map((image) => (
              <div key={image.id} className="imaging-item">
                <div className="imaging-header">
                  <span className="imaging-type">{image.type.toUpperCase()}</span>
                  <span className="imaging-region">{image.region}</span>
                </div>
                <p className="imaging-description">{image.description}</p>
                <div className="imaging-findings">
                  <strong>Findings:</strong>
                  <ul>
                    {image.findings.map((finding, idx) => (
                      <li key={idx}>{finding}</li>
                    ))}
                  </ul>
                </div>
                <div className="imaging-impression">
                  <strong>Impression:</strong> {image.impression}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
