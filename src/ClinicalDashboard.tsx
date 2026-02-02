/**
 * Clinical Dashboard - Physician Grade Interface
 * 
 * A dense, information-rich dashboard designed for medical professionals.
 * Every pixel serves a clinical purpose. No wasted space.
 */

import React, { useState, useEffect, useCallback } from 'react';
import { useMedicalKnowledge, type ClinicalContext } from './unifiedMedicalKnowledge';
import type { ContentDocument } from './ContentViewer';

// Patient data interfaces
interface PatientVitals {
  timestamp: Date;
  bp: { systolic: number; diastolic: number; };
  heartRate: number;
  respiratoryRate: number;
  temperature: number;
  spo2: number;
  weight?: number;
  bmi?: number;
}

interface LabResult {
  test: string;
  value: number | string;
  unit: string;
  referenceRange: string;
  status: 'normal' | 'abnormal' | 'critical';
  trend?: 'improving' | 'worsening' | 'stable';
  previousValue?: number;
  clinicalSignificance?: string;
}

interface Medication {
  name: string;
  dose: string;
  route: string;
  frequency: string;
  indication: string;
  startDate: Date;
  monitoring?: string[];
  interactions?: string[];
}

interface Condition {
  name: string;
  icd10: string;
  status: 'active' | 'resolved' | 'chronic' | 'acute';
  severity: 'mild' | 'moderate' | 'severe';
  onsetDate: Date;
  managingProvider: string;
  lastAssessment: Date;
  complications?: string[];
}

// Dashboard props
interface ClinicalDashboardProps {
  patientId: string;
  onContentRequest: (content: ContentDocument) => void;
  onAnatomyRequest: (structureId: string) => void;
}

// Vital sign card with clinical context
const VitalCard: React.FC<{
  title: string;
  value: string | number;
  unit: string;
  status: 'normal' | 'abnormal' | 'critical';
  trend?: 'up' | 'down' | 'stable';
  previousValue?: string | number;
  onClick: () => void;
  clinicalNote?: string;
}> = ({ title, value, unit, status, trend, previousValue, onClick, clinicalNote }) => {
  const statusColors = {
    normal: '#4caf50',
    abnormal: '#ff9800',
    critical: '#f44336',
  };

  return (
    <div 
      className="vital-card"
      onClick={onClick}
      style={{
        borderLeft: `4px solid ${statusColors[status]}`,
        padding: '12px',
        background: '#1e1e2e',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>{title}</span>
        {trend && (
          <span style={{ 
            fontSize: '0.7rem', 
            color: trend === 'up' ? '#4caf50' : trend === 'down' ? '#f44336' : '#888'
          }}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'}
          </span>
        )}
      </div>
      <div style={{ marginTop: '4px' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>{value}</span>
        <span style={{ fontSize: '0.875rem', color: '#888', marginLeft: '4px' }}>{unit}</span>
      </div>
      {previousValue && (
        <div style={{ fontSize: '0.7rem', color: '#666', marginTop: '2px' }}>
          Prev: {previousValue} {unit}
        </div>
      )}
      {clinicalNote && (
        <div style={{ 
          fontSize: '0.65rem', 
          color: statusColors[status], 
          marginTop: '4px',
          fontStyle: 'italic'
        }}>
          {clinicalNote}
        </div>
      )}
    </div>
  );
};

// Lab result with interpretation
const LabResultCard: React.FC<{
  result: LabResult;
  onClick: () => void;
}> = ({ result, onClick }) => {
  const statusColors = {
    normal: '#4caf50',
    abnormal: '#ff9800',
    critical: '#f44336',
  };

  return (
    <div 
      className="lab-card"
      onClick={onClick}
      style={{
        padding: '10px',
        background: result.status === 'critical' ? 'rgba(244, 67, 54, 0.1)' : '#1e1e2e',
        borderRadius: '6px',
        cursor: 'pointer',
        border: `1px solid ${statusColors[result.status]}`,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#fff' }}>{result.test}</span>
        <span style={{ 
          fontSize: '0.7rem', 
          padding: '2px 6px',
          borderRadius: '4px',
          background: statusColors[result.status],
          color: '#fff',
          textTransform: 'uppercase'
        }}>
          {result.status}
        </span>
      </div>
      <div style={{ marginTop: '6px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <span style={{ fontSize: '1.1rem', color: '#fff' }}>{result.value} {result.unit}</span>
        <span style={{ fontSize: '0.7rem', color: '#666' }}>Ref: {result.referenceRange}</span>
      </div>
      {result.trend && (
        <div style={{ 
          fontSize: '0.7rem', 
          marginTop: '4px',
          color: result.trend === 'improving' ? '#4caf50' : 
                 result.trend === 'worsening' ? '#f44336' : '#888'
        }}>
          Trend: {result.trend}
        </div>
      )}
      {result.clinicalSignificance && (
        <div style={{ fontSize: '0.7rem', color: '#ff9800', marginTop: '4px', fontStyle: 'italic' }}>
          ⚠ {result.clinicalSignificance}
        </div>
      )}
    </div>
  );
};

// Medication card with monitoring
const MedicationCard: React.FC<{
  medication: Medication;
  onClick: () => void;
}> = ({ medication, onClick }) => {
  return (
    <div 
      className="medication-card"
      onClick={onClick}
      style={{
        padding: '10px',
        background: '#1e1e2e',
        borderRadius: '6px',
        cursor: 'pointer',
        borderLeft: '3px solid #2196f3',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fff' }}>{medication.name}</span>
          <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '2px' }}>
            {medication.dose} {medication.route} {medication.frequency}
          </div>
        </div>
        <span style={{ fontSize: '0.65rem', color: '#666' }}>
          {medication.startDate.toLocaleDateString()}
        </span>
      </div>
      
      <div style={{ fontSize: '0.7rem', color: '#aaa', marginTop: '6px' }}>
        <strong>Indication:</strong> {medication.indication}
      </div>
      
      {medication.monitoring && medication.monitoring.length > 0 && (
        <div style={{ fontSize: '0.7rem', color: '#4caf50', marginTop: '4px' }}>
          <strong>Monitor:</strong> {medication.monitoring.join(', ')}
        </div>
      )}
      
      {medication.interactions && medication.interactions.length > 0 && (
        <div style={{ fontSize: '0.7rem', color: '#f44336', marginTop: '4px' }}>
          ⚠ <strong>Interactions:</strong> {medication.interactions.join(', ')}
        </div>
      )}
    </div>
  );
};

// Condition card with complications
const ConditionCard: React.FC<{
  condition: Condition;
  onClick: () => void;
}> = ({ condition, onClick }) => {
  const severityColors = {
    mild: '#4caf50',
    moderate: '#ff9800',
    severe: '#f44336',
  };

  const statusLabels = {
    active: 'Active',
    resolved: 'Resolved',
    chronic: 'Chronic',
    acute: 'Acute',
  };

  return (
    <div 
      className="condition-card"
      onClick={onClick}
      style={{
        padding: '10px',
        background: '#1e1e2e',
        borderRadius: '6px',
        cursor: 'pointer',
        borderLeft: `3px solid ${severityColors[condition.severity]}`,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#fff' }}>{condition.name}</span>
          <div style={{ fontSize: '0.7rem', color: '#666', marginTop: '2px' }}>
            ICD-10: {condition.icd10}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ 
            fontSize: '0.65rem', 
            padding: '2px 6px',
            borderRadius: '4px',
            background: severityColors[condition.severity],
            color: '#fff',
          }}>
            {condition.severity}
          </span>
          <div style={{ fontSize: '0.65rem', color: '#888', marginTop: '4px' }}>
            {statusLabels[condition.status]}
          </div>
        </div>
      </div>
      
      <div style={{ fontSize: '0.7rem', color: '#888', marginTop: '6px' }}>
        Provider: {condition.managingProvider}
      </div>
      
      {condition.complications && condition.complications.length > 0 && (
        <div style={{ fontSize: '0.7rem', color: '#f44336', marginTop: '4px' }}>
          ⚠ <strong>Complications:</strong> {condition.complications.join(', ')}
        </div>
      )}
    </div>
  );
};

// Main Clinical Dashboard Component
export const ClinicalDashboard: React.FC<ClinicalDashboardProps> = ({
  patientId,
  onContentRequest,
  onAnatomyRequest,
}) => {
  const { queryKnowledge, stats } = useMedicalKnowledge();
  const [vitals, setVitals] = useState<PatientVitals | null>(null);
  const [labs, setLabs] = useState<LabResult[]>([]);
  const [medications, setMedications] = useState<Medication[]>([]);
  const [conditions, setConditions] = useState<Condition[]>([]);

  // Load patient data (mock for now)
  useEffect(() => {
    // This would fetch from your actual data store
    setVitals({
      timestamp: new Date(),
      bp: { systolic: 142, diastolic: 88 },
      heartRate: 78,
      respiratoryRate: 16,
      temperature: 37.1,
      spo2: 97,
      weight: 78.5,
      bmi: 26.2,
    });

    setLabs([
      {
        test: 'HbA1c',
        value: 7.2,
        unit: '%',
        referenceRange: '4.0-5.6%',
        status: 'abnormal',
        trend: 'worsening',
        previousValue: 6.8,
        clinicalSignificance: 'Poor glycemic control',
      },
      {
        test: 'LDL Cholesterol',
        value: 156,
        unit: 'mg/dL',
        referenceRange: '<100 mg/dL',
        status: 'abnormal',
        clinicalSignificance: 'Above target for diabetes',
      },
    ]);

    setMedications([
      {
        name: 'Metformin',
        dose: '1000mg',
        route: 'PO',
        frequency: 'BID',
        indication: 'Type 2 Diabetes',
        startDate: new Date('2023-06-15'),
        monitoring: ['Renal function', 'Vitamin B12'],
      },
    ]);

    setConditions([
      {
        name: 'Type 2 Diabetes Mellitus',
        icd10: 'E11.9',
        status: 'chronic',
        severity: 'moderate',
        onsetDate: new Date('2023-06-15'),
        managingProvider: 'Dr. Sarah Chen',
        lastAssessment: new Date(),
        complications: ['Diabetic neuropathy'],
      },
    ]);
  }, [patientId]);

  const handleVitalClick = useCallback((vitalType: string) => {
    // Query medical knowledge for this vital sign
    const results = queryKnowledge(vitalType);
    if (results.length > 0) {
      onContentRequest(results[0].content);
    }
  }, [queryKnowledge, onContentRequest]);

  const handleLabClick = useCallback((labTest: string) => {
    const results = queryKnowledge(labTest);
    if (results.length > 0) {
      onContentRequest(results[0].content);
    }
  }, [queryKnowledge, onContentRequest]);

  const handleMedicationClick = useCallback((medication: string) => {
    const results = queryKnowledge(medication);
    if (results.length > 0) {
      onContentRequest(results[0].content);
    }
  }, [queryKnowledge, onContentRequest]);

  const handleConditionClick = useCallback((condition: string) => {
    const results = queryKnowledge(condition);
    if (results.length > 0) {
      onContentRequest(results[0].content);
    }
  }, [queryKnowledge, onContentRequest]);

  return (
    <div className="clinical-dashboard" style={{ padding: '20px', background: '#0f0f1e', minHeight: '100vh' }}>
      {/* Header with knowledge stats */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px',
        padding: '15px',
        background: '#1e1e2e',
        borderRadius: '8px',
      }}>
        <div>
          <h1 style={{ margin: 0, color: '#fff', fontSize: '1.5rem' }}>Clinical Dashboard</h1>
          <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '4px' }}>
            Patient ID: {patientId} | Last Updated: {new Date().toLocaleString()}
          </div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.7rem', color: '#666' }}>
          <div>Knowledge Base: {stats.totalNodes} nodes</div>
          <div>Clinical Terms: {stats.clinicalTerms} indexed</div>
        </div>
      </div>

      {/* Main grid layout */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
      }}>
        {/* Vitals Section */}
        <div className="dashboard-section">
          <h2 style={{ color: '#fff', fontSize: '1rem', marginBottom: '12px', borderBottom: '2px solid #333', paddingBottom: '8px' }}>
            Vital Signs
          </h2>
          {vitals && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              <VitalCard
                title="Blood Pressure"
                value={`${vitals.bp.systolic}/${vitals.bp.diastolic}`}
                unit="mmHg"
                status={vitals.bp.systolic > 140 ? 'abnormal' : 'normal'}
                onClick={() => handleVitalClick('blood pressure')}
                clinicalNote={vitals.bp.systolic > 140 ? 'Stage 1 Hypertension' : undefined}
              />
              <VitalCard
                title="Heart Rate"
                value={vitals.heartRate}
                unit="bpm"
                status="normal"
                onClick={() => handleVitalClick('heart rate')}
              />
              <VitalCard
                title="Temperature"
                value={vitals.temperature.toFixed(1)}
                unit="°C"
                status="normal"
                onClick={() => handleVitalClick('temperature')}
              />
              <VitalCard
                title="SpO2"
                value={vitals.spo2}
                unit="%"
                status="normal"
                onClick={() => handleVitalClick('oxygen saturation')}
              />
            </div>
          )}
        </div>

        {/* Lab Results Section */}
        <div className="dashboard-section">
          <h2 style={{ color: '#fff', fontSize: '1rem', marginBottom: '12px', borderBottom: '2px solid #333', paddingBottom: '8px' }}>
            Recent Labs
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {labs.map((lab, idx) => (
              <LabResultCard
                key={idx}
                result={lab}
                onClick={() => handleLabClick(lab.test)}
              />
            ))}
          </div>
        </div>

        {/* Medications Section */}
        <div className="dashboard-section">
          <h2 style={{ color: '#fff', fontSize: '1rem', marginBottom: '12px', borderBottom: '2px solid #333', paddingBottom: '8px' }}>
            Active Medications
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {medications.map((med, idx) => (
              <MedicationCard
                key={idx}
                medication={med}
                onClick={() => handleMedicationClick(med.name)}
              />
            ))}
          </div>
        </div>

        {/* Conditions Section */}
        <div className="dashboard-section">
          <h2 style={{ color: '#fff', fontSize: '1rem', marginBottom: '12px', borderBottom: '2px solid #333', paddingBottom: '8px' }}>
            Active Conditions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {conditions.map((condition, idx) => (
              <ConditionCard
                key={idx}
                condition={condition}
                onClick={() => handleConditionClick(condition.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalDashboard;
