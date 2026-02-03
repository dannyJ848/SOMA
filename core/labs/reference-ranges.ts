/**
 * Lab Reference Ranges
 *
 * Comprehensive reference ranges for lab tests
 * stratified by age, sex, pregnancy status, and other factors.
 */

import type { LabReferenceRanges, ReferenceRange, UserDemographics, Sex } from './types';

// ============================================
// Reference Range Database
// ============================================

export const REFERENCE_RANGES: Map<string, LabReferenceRanges> = new Map();

// ============================================
// Complete Blood Count (CBC)
// ============================================

REFERENCE_RANGES.set('wbc', {
  testId: 'wbc',
  defaultUnit: 'K/uL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 4.5, high: 11.0, unit: 'K/uL', criticalLow: 2.0, criticalHigh: 30.0 },
    { condition: { ageMin: 12, ageMax: 17, ageUnit: 'years' }, low: 4.5, high: 13.0, unit: 'K/uL' },
    { condition: { ageMin: 2, ageMax: 11, ageUnit: 'years' }, low: 5.0, high: 15.5, unit: 'K/uL' },
    { condition: { ageMin: 1, ageMax: 23, ageUnit: 'months' }, low: 6.0, high: 17.5, unit: 'K/uL' },
    { condition: { ageMax: 1, ageUnit: 'months' }, low: 9.0, high: 30.0, unit: 'K/uL', notes: 'Neonates have higher WBC' },
  ],
});

REFERENCE_RANGES.set('rbc', {
  testId: 'rbc',
  defaultUnit: 'M/uL',
  ranges: [
    { condition: { sex: 'male', ageMin: 18, ageUnit: 'years' }, low: 4.5, high: 5.5, unit: 'M/uL' },
    { condition: { sex: 'female', ageMin: 18, ageUnit: 'years' }, low: 4.0, high: 5.0, unit: 'M/uL' },
    { condition: { sex: 'female', pregnancy: true }, low: 3.5, high: 4.5, unit: 'M/uL', notes: 'Physiologic anemia of pregnancy' },
    { condition: { ageMin: 12, ageMax: 17, ageUnit: 'years', sex: 'male' }, low: 4.5, high: 5.3, unit: 'M/uL' },
    { condition: { ageMin: 12, ageMax: 17, ageUnit: 'years', sex: 'female' }, low: 4.1, high: 5.1, unit: 'M/uL' },
    { condition: { ageMin: 2, ageMax: 11, ageUnit: 'years' }, low: 4.0, high: 5.2, unit: 'M/uL' },
  ],
});

REFERENCE_RANGES.set('hemoglobin', {
  testId: 'hemoglobin',
  defaultUnit: 'g/dL',
  unitConversions: { 'g/L': { factor: 0.1, toUnit: 'g/dL' } },
  ranges: [
    { condition: { sex: 'male', ageMin: 18, ageUnit: 'years' }, low: 13.5, high: 17.5, unit: 'g/dL', optimalLow: 14.0, optimalHigh: 17.0, criticalLow: 7.0, criticalHigh: 20.0 },
    { condition: { sex: 'female', ageMin: 18, ageUnit: 'years' }, low: 12.0, high: 16.0, unit: 'g/dL', optimalLow: 12.5, optimalHigh: 15.5, criticalLow: 7.0, criticalHigh: 20.0 },
    { condition: { sex: 'female', pregnancy: true, trimester: 1 }, low: 11.0, high: 14.5, unit: 'g/dL', notes: 'First trimester' },
    { condition: { sex: 'female', pregnancy: true, trimester: 2 }, low: 10.5, high: 14.0, unit: 'g/dL', notes: 'Second trimester' },
    { condition: { sex: 'female', pregnancy: true, trimester: 3 }, low: 11.0, high: 14.0, unit: 'g/dL', notes: 'Third trimester' },
    { condition: { ageMin: 65, ageUnit: 'years', sex: 'male' }, low: 12.5, high: 17.0, unit: 'g/dL', notes: 'Elderly men may have slightly lower values' },
    { condition: { ageMin: 12, ageMax: 17, ageUnit: 'years', sex: 'male' }, low: 13.0, high: 16.0, unit: 'g/dL' },
    { condition: { ageMin: 12, ageMax: 17, ageUnit: 'years', sex: 'female' }, low: 12.0, high: 16.0, unit: 'g/dL' },
    { condition: { ageMin: 2, ageMax: 11, ageUnit: 'years' }, low: 11.5, high: 15.5, unit: 'g/dL' },
    { condition: { ageMin: 6, ageMax: 23, ageUnit: 'months' }, low: 10.5, high: 13.5, unit: 'g/dL' },
    { condition: { ageMax: 6, ageUnit: 'months' }, low: 9.5, high: 14.0, unit: 'g/dL', notes: 'Physiologic nadir at 6-8 weeks' },
  ],
});

REFERENCE_RANGES.set('hematocrit', {
  testId: 'hematocrit',
  defaultUnit: '%',
  ranges: [
    { condition: { sex: 'male', ageMin: 18, ageUnit: 'years' }, low: 40, high: 52, unit: '%', criticalLow: 21, criticalHigh: 65 },
    { condition: { sex: 'female', ageMin: 18, ageUnit: 'years' }, low: 36, high: 48, unit: '%', criticalLow: 21, criticalHigh: 65 },
    { condition: { sex: 'female', pregnancy: true }, low: 33, high: 44, unit: '%' },
    { condition: { ageMin: 2, ageMax: 17, ageUnit: 'years' }, low: 35, high: 45, unit: '%' },
  ],
});

REFERENCE_RANGES.set('mcv', {
  testId: 'mcv',
  defaultUnit: 'fL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 80, high: 100, unit: 'fL' },
    { condition: { ageMin: 12, ageMax: 17, ageUnit: 'years' }, low: 78, high: 98, unit: 'fL' },
    { condition: { ageMin: 2, ageMax: 11, ageUnit: 'years' }, low: 75, high: 87, unit: 'fL' },
    { condition: { ageMin: 6, ageMax: 23, ageUnit: 'months' }, low: 70, high: 86, unit: 'fL' },
    { condition: { ageMax: 6, ageUnit: 'months' }, low: 95, high: 121, unit: 'fL', notes: 'Neonatal MCV is higher' },
  ],
});

REFERENCE_RANGES.set('mch', {
  testId: 'mch',
  defaultUnit: 'pg',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 27, high: 33, unit: 'pg' },
    { condition: { ageMin: 2, ageMax: 17, ageUnit: 'years' }, low: 25, high: 33, unit: 'pg' },
  ],
});

REFERENCE_RANGES.set('mchc', {
  testId: 'mchc',
  defaultUnit: 'g/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 32, high: 36, unit: 'g/dL' },
  ],
});

REFERENCE_RANGES.set('rdw', {
  testId: 'rdw',
  defaultUnit: '%',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 11.5, high: 14.5, unit: '%' },
  ],
});

REFERENCE_RANGES.set('platelets', {
  testId: 'platelets',
  defaultUnit: 'K/uL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 150, high: 400, unit: 'K/uL', criticalLow: 20, criticalHigh: 1000 },
    { condition: { ageMax: 17, ageUnit: 'years' }, low: 150, high: 450, unit: 'K/uL' },
  ],
});

REFERENCE_RANGES.set('mpv', {
  testId: 'mpv',
  defaultUnit: 'fL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 7.5, high: 11.5, unit: 'fL' },
  ],
});

// WBC Differential
REFERENCE_RANGES.set('neutrophils', {
  testId: 'neutrophils',
  defaultUnit: '%',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 40, high: 70, unit: '%' },
    { condition: { ageMin: 2, ageMax: 17, ageUnit: 'years' }, low: 30, high: 60, unit: '%' },
  ],
});

REFERENCE_RANGES.set('neutrophils-absolute', {
  testId: 'neutrophils-absolute',
  defaultUnit: 'K/uL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 1.8, high: 7.7, unit: 'K/uL', criticalLow: 0.5 },
  ],
});

REFERENCE_RANGES.set('lymphocytes', {
  testId: 'lymphocytes',
  defaultUnit: '%',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 20, high: 40, unit: '%' },
    { condition: { ageMin: 2, ageMax: 17, ageUnit: 'years' }, low: 30, high: 50, unit: '%', notes: 'Children have lymphocyte predominance' },
  ],
});

REFERENCE_RANGES.set('monocytes', {
  testId: 'monocytes',
  defaultUnit: '%',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 2, high: 10, unit: '%' },
  ],
});

REFERENCE_RANGES.set('eosinophils', {
  testId: 'eosinophils',
  defaultUnit: '%',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 1, high: 6, unit: '%' },
  ],
});

REFERENCE_RANGES.set('basophils', {
  testId: 'basophils',
  defaultUnit: '%',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 2, unit: '%' },
  ],
});

// ============================================
// Comprehensive Metabolic Panel (CMP)
// ============================================

REFERENCE_RANGES.set('glucose', {
  testId: 'glucose',
  defaultUnit: 'mg/dL',
  unitConversions: { 'mmol/L': { factor: 18.02, toUnit: 'mg/dL' } },
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years', fasting: true }, low: 70, high: 100, unit: 'mg/dL', optimalLow: 70, optimalHigh: 85, criticalLow: 50, criticalHigh: 400, notes: 'Fasting glucose' },
    { condition: { ageMin: 18, ageUnit: 'years', fasting: false }, low: 70, high: 140, unit: 'mg/dL', notes: 'Random glucose' },
    { condition: { ageMin: 2, ageMax: 17, ageUnit: 'years', fasting: true }, low: 70, high: 100, unit: 'mg/dL' },
    { condition: { ageMax: 2, ageUnit: 'years' }, low: 60, high: 100, unit: 'mg/dL' },
    { condition: { sex: 'female', pregnancy: true, fasting: true }, low: 60, high: 95, unit: 'mg/dL', notes: 'Gestational diabetes screening threshold' },
  ],
});

REFERENCE_RANGES.set('bun', {
  testId: 'bun',
  defaultUnit: 'mg/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 7, high: 20, unit: 'mg/dL' },
    { condition: { ageMin: 65, ageUnit: 'years' }, low: 8, high: 23, unit: 'mg/dL', notes: 'Slightly higher in elderly' },
    { condition: { ageMin: 2, ageMax: 17, ageUnit: 'years' }, low: 7, high: 18, unit: 'mg/dL' },
    { condition: { sex: 'female', pregnancy: true }, low: 5, high: 12, unit: 'mg/dL', notes: 'Lower in pregnancy due to increased GFR' },
  ],
});

REFERENCE_RANGES.set('creatinine', {
  testId: 'creatinine',
  defaultUnit: 'mg/dL',
  unitConversions: { 'umol/L': { factor: 0.0113, toUnit: 'mg/dL' } },
  ranges: [
    { condition: { sex: 'male', ageMin: 18, ageUnit: 'years' }, low: 0.7, high: 1.3, unit: 'mg/dL' },
    { condition: { sex: 'female', ageMin: 18, ageUnit: 'years' }, low: 0.6, high: 1.1, unit: 'mg/dL' },
    { condition: { sex: 'female', pregnancy: true }, low: 0.4, high: 0.9, unit: 'mg/dL', notes: 'Lower in pregnancy' },
    { condition: { ageMin: 12, ageMax: 17, ageUnit: 'years', sex: 'male' }, low: 0.5, high: 1.0, unit: 'mg/dL' },
    { condition: { ageMin: 12, ageMax: 17, ageUnit: 'years', sex: 'female' }, low: 0.5, high: 1.0, unit: 'mg/dL' },
    { condition: { ageMin: 2, ageMax: 11, ageUnit: 'years' }, low: 0.3, high: 0.7, unit: 'mg/dL' },
  ],
});

REFERENCE_RANGES.set('egfr', {
  testId: 'egfr',
  defaultUnit: 'mL/min/1.73m2',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 90, high: 120, unit: 'mL/min/1.73m2', optimalLow: 90, notes: '>90 is generally normal' },
    { condition: { ageMin: 65, ageUnit: 'years' }, low: 60, high: 100, unit: 'mL/min/1.73m2', notes: 'Mild decline with age is normal' },
  ],
});

REFERENCE_RANGES.set('sodium', {
  testId: 'sodium',
  defaultUnit: 'mEq/L',
  unitConversions: { 'mmol/L': { factor: 1, toUnit: 'mEq/L' } },
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 136, high: 145, unit: 'mEq/L', criticalLow: 120, criticalHigh: 160 },
    { condition: { ageMax: 17, ageUnit: 'years' }, low: 135, high: 145, unit: 'mEq/L' },
  ],
});

REFERENCE_RANGES.set('potassium', {
  testId: 'potassium',
  defaultUnit: 'mEq/L',
  unitConversions: { 'mmol/L': { factor: 1, toUnit: 'mEq/L' } },
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 3.5, high: 5.0, unit: 'mEq/L', criticalLow: 2.5, criticalHigh: 6.5 },
    { condition: { ageMax: 17, ageUnit: 'years' }, low: 3.5, high: 5.5, unit: 'mEq/L' },
  ],
});

REFERENCE_RANGES.set('chloride', {
  testId: 'chloride',
  defaultUnit: 'mEq/L',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 98, high: 106, unit: 'mEq/L', criticalLow: 80, criticalHigh: 120 },
  ],
});

REFERENCE_RANGES.set('co2', {
  testId: 'co2',
  defaultUnit: 'mEq/L',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 23, high: 29, unit: 'mEq/L', criticalLow: 15, criticalHigh: 40 },
  ],
});

REFERENCE_RANGES.set('calcium', {
  testId: 'calcium',
  defaultUnit: 'mg/dL',
  unitConversions: { 'mmol/L': { factor: 4.0, toUnit: 'mg/dL' } },
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 8.5, high: 10.5, unit: 'mg/dL', criticalLow: 6.0, criticalHigh: 13.0 },
    { condition: { ageMax: 17, ageUnit: 'years' }, low: 8.8, high: 10.8, unit: 'mg/dL' },
  ],
});

REFERENCE_RANGES.set('total-protein', {
  testId: 'total-protein',
  defaultUnit: 'g/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 6.0, high: 8.3, unit: 'g/dL' },
  ],
});

REFERENCE_RANGES.set('albumin', {
  testId: 'albumin',
  defaultUnit: 'g/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 3.5, high: 5.0, unit: 'g/dL' },
    { condition: { ageMin: 65, ageUnit: 'years' }, low: 3.2, high: 4.8, unit: 'g/dL', notes: 'May be slightly lower in elderly' },
  ],
});

REFERENCE_RANGES.set('bilirubin-total', {
  testId: 'bilirubin-total',
  defaultUnit: 'mg/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0.1, high: 1.2, unit: 'mg/dL' },
    { condition: { ageMax: 14, ageUnit: 'days' }, low: 0.1, high: 12.0, unit: 'mg/dL', notes: 'Neonatal jaundice thresholds vary by age in hours' },
  ],
});

REFERENCE_RANGES.set('bilirubin-direct', {
  testId: 'bilirubin-direct',
  defaultUnit: 'mg/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0.0, high: 0.3, unit: 'mg/dL' },
  ],
});

REFERENCE_RANGES.set('alp', {
  testId: 'alp',
  defaultUnit: 'U/L',
  ranges: [
    { condition: { ageMin: 18, ageMax: 64, ageUnit: 'years' }, low: 44, high: 147, unit: 'U/L' },
    { condition: { ageMin: 65, ageUnit: 'years' }, low: 50, high: 165, unit: 'U/L', notes: 'Slightly higher in elderly' },
    { condition: { ageMin: 12, ageMax: 17, ageUnit: 'years' }, low: 50, high: 400, unit: 'U/L', notes: 'Much higher during growth spurts' },
    { condition: { ageMin: 2, ageMax: 11, ageUnit: 'years' }, low: 150, high: 450, unit: 'U/L', notes: 'Elevated due to bone growth' },
    { condition: { sex: 'female', pregnancy: true, trimester: 3 }, low: 50, high: 250, unit: 'U/L', notes: 'Placental ALP causes elevation' },
  ],
});

REFERENCE_RANGES.set('ast', {
  testId: 'ast',
  defaultUnit: 'U/L',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 10, high: 40, unit: 'U/L' },
    { condition: { ageMax: 17, ageUnit: 'years' }, low: 15, high: 40, unit: 'U/L' },
  ],
});

REFERENCE_RANGES.set('alt', {
  testId: 'alt',
  defaultUnit: 'U/L',
  ranges: [
    { condition: { sex: 'male', ageMin: 18, ageUnit: 'years' }, low: 10, high: 40, unit: 'U/L', optimalHigh: 30 },
    { condition: { sex: 'female', ageMin: 18, ageUnit: 'years' }, low: 7, high: 35, unit: 'U/L', optimalHigh: 25 },
    { condition: { ageMax: 17, ageUnit: 'years' }, low: 10, high: 35, unit: 'U/L' },
  ],
});

// ============================================
// Lipid Panel
// ============================================

REFERENCE_RANGES.set('total-cholesterol', {
  testId: 'total-cholesterol',
  defaultUnit: 'mg/dL',
  unitConversions: { 'mmol/L': { factor: 38.67, toUnit: 'mg/dL' } },
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 200, unit: 'mg/dL', optimalHigh: 180, notes: '<200 desirable, 200-239 borderline, >240 high' },
    { condition: { ageMax: 17, ageUnit: 'years' }, low: 0, high: 170, unit: 'mg/dL', notes: 'Pediatric guidelines' },
  ],
});

REFERENCE_RANGES.set('ldl', {
  testId: 'ldl',
  defaultUnit: 'mg/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 100, unit: 'mg/dL', optimalHigh: 70, notes: '<100 optimal, <70 for high CV risk' },
    { condition: { ageMax: 17, ageUnit: 'years' }, low: 0, high: 110, unit: 'mg/dL' },
  ],
});

REFERENCE_RANGES.set('hdl', {
  testId: 'hdl',
  defaultUnit: 'mg/dL',
  ranges: [
    { condition: { sex: 'male', ageMin: 18, ageUnit: 'years' }, low: 40, high: 100, unit: 'mg/dL', optimalLow: 50, notes: '>40 acceptable, >60 protective' },
    { condition: { sex: 'female', ageMin: 18, ageUnit: 'years' }, low: 50, high: 100, unit: 'mg/dL', optimalLow: 60, notes: '>50 acceptable, >60 protective' },
    { condition: { ageMax: 17, ageUnit: 'years' }, low: 45, high: 100, unit: 'mg/dL' },
  ],
});

REFERENCE_RANGES.set('triglycerides', {
  testId: 'triglycerides',
  defaultUnit: 'mg/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years', fasting: true }, low: 0, high: 150, unit: 'mg/dL', optimalHigh: 100, notes: '<150 normal, 150-199 borderline, 200-499 high, >500 very high' },
    { condition: { ageMin: 18, ageUnit: 'years', fasting: false }, low: 0, high: 175, unit: 'mg/dL', notes: 'Non-fasting threshold' },
    { condition: { ageMax: 17, ageUnit: 'years' }, low: 0, high: 90, unit: 'mg/dL' },
  ],
});

REFERENCE_RANGES.set('vldl', {
  testId: 'vldl',
  defaultUnit: 'mg/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 30, unit: 'mg/dL' },
  ],
});

REFERENCE_RANGES.set('non-hdl-cholesterol', {
  testId: 'non-hdl-cholesterol',
  defaultUnit: 'mg/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 130, unit: 'mg/dL', optimalHigh: 100, notes: 'Total cholesterol minus HDL' },
  ],
});

// ============================================
// Thyroid Panel
// ============================================

REFERENCE_RANGES.set('tsh', {
  testId: 'tsh',
  defaultUnit: 'mIU/L',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0.4, high: 4.0, unit: 'mIU/L', optimalLow: 0.5, optimalHigh: 2.5 },
    { condition: { ageMin: 65, ageUnit: 'years' }, low: 0.5, high: 5.0, unit: 'mIU/L', notes: 'Upper limit may be higher in elderly' },
    { condition: { sex: 'female', pregnancy: true, trimester: 1 }, low: 0.1, high: 2.5, unit: 'mIU/L', notes: 'Lower in first trimester' },
    { condition: { sex: 'female', pregnancy: true, trimester: 2 }, low: 0.2, high: 3.0, unit: 'mIU/L' },
    { condition: { sex: 'female', pregnancy: true, trimester: 3 }, low: 0.3, high: 3.0, unit: 'mIU/L' },
    { condition: { ageMax: 17, ageUnit: 'years' }, low: 0.7, high: 5.5, unit: 'mIU/L' },
  ],
});

REFERENCE_RANGES.set('free-t4', {
  testId: 'free-t4',
  defaultUnit: 'ng/dL',
  unitConversions: { 'pmol/L': { factor: 0.0777, toUnit: 'ng/dL' } },
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0.8, high: 1.8, unit: 'ng/dL' },
    { condition: { sex: 'female', pregnancy: true }, low: 0.6, high: 1.6, unit: 'ng/dL', notes: 'May be lower in pregnancy' },
  ],
});

REFERENCE_RANGES.set('free-t3', {
  testId: 'free-t3',
  defaultUnit: 'pg/mL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 2.3, high: 4.2, unit: 'pg/mL' },
  ],
});

REFERENCE_RANGES.set('t3-uptake', {
  testId: 't3-uptake',
  defaultUnit: '%',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 24, high: 39, unit: '%' },
  ],
});

REFERENCE_RANGES.set('tpo-antibody', {
  testId: 'tpo-antibody',
  defaultUnit: 'IU/mL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 35, unit: 'IU/mL', notes: '<35 negative' },
  ],
});

REFERENCE_RANGES.set('thyroglobulin-antibody', {
  testId: 'thyroglobulin-antibody',
  defaultUnit: 'IU/mL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 4, unit: 'IU/mL', notes: '<4 negative' },
  ],
});

// ============================================
// Cardiac Markers
// ============================================

REFERENCE_RANGES.set('troponin-i', {
  testId: 'troponin-i',
  defaultUnit: 'ng/mL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 0.04, unit: 'ng/mL', criticalHigh: 0.4, notes: '>0.04 suggests myocardial injury' },
  ],
});

REFERENCE_RANGES.set('troponin-t', {
  testId: 'troponin-t',
  defaultUnit: 'ng/mL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 0.01, unit: 'ng/mL', notes: '>0.01 suggests myocardial injury' },
  ],
});

REFERENCE_RANGES.set('bnp', {
  testId: 'bnp',
  defaultUnit: 'pg/mL',
  ranges: [
    { condition: { ageMin: 18, ageMax: 74, ageUnit: 'years' }, low: 0, high: 100, unit: 'pg/mL', notes: '<100 heart failure unlikely' },
    { condition: { ageMin: 75, ageUnit: 'years' }, low: 0, high: 125, unit: 'pg/mL', notes: 'Higher threshold in elderly' },
  ],
});

REFERENCE_RANGES.set('nt-probnp', {
  testId: 'nt-probnp',
  defaultUnit: 'pg/mL',
  ranges: [
    { condition: { ageMin: 18, ageMax: 49, ageUnit: 'years' }, low: 0, high: 125, unit: 'pg/mL' },
    { condition: { ageMin: 50, ageMax: 74, ageUnit: 'years' }, low: 0, high: 450, unit: 'pg/mL' },
    { condition: { ageMin: 75, ageUnit: 'years' }, low: 0, high: 900, unit: 'pg/mL' },
  ],
});

REFERENCE_RANGES.set('ck-mb', {
  testId: 'ck-mb',
  defaultUnit: 'ng/mL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 5.0, unit: 'ng/mL' },
  ],
});

REFERENCE_RANGES.set('d-dimer', {
  testId: 'd-dimer',
  defaultUnit: 'ng/mL',
  ranges: [
    { condition: { ageMin: 18, ageMax: 50, ageUnit: 'years' }, low: 0, high: 500, unit: 'ng/mL', notes: 'Age-adjusted cutoff = age x 10 for patients >50' },
    { condition: { ageMin: 51, ageUnit: 'years' }, low: 0, high: 500, unit: 'ng/mL', notes: 'Age-adjusted cutoff recommended' },
    { condition: { sex: 'female', pregnancy: true, trimester: 3 }, low: 0, high: 1000, unit: 'ng/mL', notes: 'Elevated in pregnancy' },
  ],
});

REFERENCE_RANGES.set('fibrinogen', {
  testId: 'fibrinogen',
  defaultUnit: 'mg/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 200, high: 400, unit: 'mg/dL', criticalLow: 100 },
  ],
});

// ============================================
// Diabetes Markers
// ============================================

REFERENCE_RANGES.set('hba1c', {
  testId: 'hba1c',
  defaultUnit: '%',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 4.0, high: 5.6, unit: '%', optimalHigh: 5.4, notes: '<5.7 normal, 5.7-6.4 prediabetes, >=6.5 diabetes' },
  ],
});

REFERENCE_RANGES.set('fasting-glucose', {
  testId: 'fasting-glucose',
  defaultUnit: 'mg/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years', fasting: true }, low: 70, high: 100, unit: 'mg/dL', notes: '100-125 prediabetes, >=126 diabetes' },
  ],
});

REFERENCE_RANGES.set('fructosamine', {
  testId: 'fructosamine',
  defaultUnit: 'umol/L',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 200, high: 285, unit: 'umol/L', notes: 'Reflects glucose control over 2-3 weeks' },
  ],
});

REFERENCE_RANGES.set('c-peptide', {
  testId: 'c-peptide',
  defaultUnit: 'ng/mL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years', fasting: true }, low: 0.8, high: 3.1, unit: 'ng/mL' },
  ],
});

REFERENCE_RANGES.set('insulin', {
  testId: 'insulin',
  defaultUnit: 'uU/mL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years', fasting: true }, low: 2.6, high: 24.9, unit: 'uU/mL' },
  ],
});

// ============================================
// Iron Studies
// ============================================

REFERENCE_RANGES.set('iron', {
  testId: 'iron',
  defaultUnit: 'ug/dL',
  ranges: [
    { condition: { sex: 'male', ageMin: 18, ageUnit: 'years' }, low: 65, high: 175, unit: 'ug/dL' },
    { condition: { sex: 'female', ageMin: 18, ageUnit: 'years' }, low: 50, high: 170, unit: 'ug/dL' },
    { condition: { ageMax: 17, ageUnit: 'years' }, low: 50, high: 120, unit: 'ug/dL' },
  ],
});

REFERENCE_RANGES.set('tibc', {
  testId: 'tibc',
  defaultUnit: 'ug/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 250, high: 370, unit: 'ug/dL' },
  ],
});

REFERENCE_RANGES.set('ferritin', {
  testId: 'ferritin',
  defaultUnit: 'ng/mL',
  ranges: [
    { condition: { sex: 'male', ageMin: 18, ageUnit: 'years' }, low: 30, high: 400, unit: 'ng/mL', optimalLow: 50, optimalHigh: 300 },
    { condition: { sex: 'female', ageMin: 18, ageMax: 49, ageUnit: 'years' }, low: 15, high: 150, unit: 'ng/mL', optimalLow: 30, notes: 'Lower in menstruating women' },
    { condition: { sex: 'female', ageMin: 50, ageUnit: 'years' }, low: 30, high: 300, unit: 'ng/mL', notes: 'Increases after menopause' },
    { condition: { sex: 'female', pregnancy: true }, low: 10, high: 150, unit: 'ng/mL', notes: 'Lower cutoffs in pregnancy' },
  ],
});

REFERENCE_RANGES.set('transferrin-saturation', {
  testId: 'transferrin-saturation',
  defaultUnit: '%',
  ranges: [
    { condition: { sex: 'male', ageMin: 18, ageUnit: 'years' }, low: 20, high: 50, unit: '%' },
    { condition: { sex: 'female', ageMin: 18, ageUnit: 'years' }, low: 15, high: 50, unit: '%' },
  ],
});

// ============================================
// Inflammatory Markers
// ============================================

REFERENCE_RANGES.set('crp', {
  testId: 'crp',
  defaultUnit: 'mg/L',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 3.0, unit: 'mg/L', optimalHigh: 1.0, notes: '<1 low CV risk, 1-3 moderate, >3 high' },
  ],
});

REFERENCE_RANGES.set('hs-crp', {
  testId: 'hs-crp',
  defaultUnit: 'mg/L',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 3.0, unit: 'mg/L', optimalHigh: 1.0 },
  ],
});

REFERENCE_RANGES.set('esr', {
  testId: 'esr',
  defaultUnit: 'mm/hr',
  ranges: [
    { condition: { sex: 'male', ageMin: 18, ageMax: 49, ageUnit: 'years' }, low: 0, high: 15, unit: 'mm/hr' },
    { condition: { sex: 'male', ageMin: 50, ageUnit: 'years' }, low: 0, high: 20, unit: 'mm/hr' },
    { condition: { sex: 'female', ageMin: 18, ageMax: 49, ageUnit: 'years' }, low: 0, high: 20, unit: 'mm/hr' },
    { condition: { sex: 'female', ageMin: 50, ageUnit: 'years' }, low: 0, high: 30, unit: 'mm/hr' },
    { condition: { sex: 'female', pregnancy: true }, low: 0, high: 70, unit: 'mm/hr', notes: 'Elevated in pregnancy' },
  ],
});

REFERENCE_RANGES.set('procalcitonin', {
  testId: 'procalcitonin',
  defaultUnit: 'ng/mL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 0.1, unit: 'ng/mL', notes: '<0.1 bacterial infection unlikely, 0.1-0.5 possible, 0.5-2 likely, >2 severe sepsis' },
  ],
});

// ============================================
// Urinalysis
// ============================================

REFERENCE_RANGES.set('urine-ph', {
  testId: 'urine-ph',
  defaultUnit: '',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 4.5, high: 8.0, unit: '', optimalLow: 5.5, optimalHigh: 7.0 },
  ],
});

REFERENCE_RANGES.set('urine-specific-gravity', {
  testId: 'urine-specific-gravity',
  defaultUnit: '',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 1.003, high: 1.030, unit: '', notes: '1.010 is isosthenuric' },
  ],
});

REFERENCE_RANGES.set('urine-protein', {
  testId: 'urine-protein',
  defaultUnit: 'mg/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 14, unit: 'mg/dL', notes: 'Trace or negative is normal' },
  ],
});

REFERENCE_RANGES.set('urine-glucose', {
  testId: 'urine-glucose',
  defaultUnit: 'mg/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 0, unit: 'mg/dL', notes: 'Should be negative' },
  ],
});

REFERENCE_RANGES.set('urine-ketones', {
  testId: 'urine-ketones',
  defaultUnit: 'mg/dL',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 0, unit: 'mg/dL', notes: 'Should be negative' },
  ],
});

REFERENCE_RANGES.set('urine-blood', {
  testId: 'urine-blood',
  defaultUnit: '',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 0, unit: '', notes: 'Should be negative' },
  ],
});

REFERENCE_RANGES.set('urine-wbc', {
  testId: 'urine-wbc',
  defaultUnit: '/hpf',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 5, unit: '/hpf' },
  ],
});

REFERENCE_RANGES.set('urine-bacteria', {
  testId: 'urine-bacteria',
  defaultUnit: '',
  ranges: [
    { condition: { ageMin: 18, ageUnit: 'years' }, low: 0, high: 0, unit: '', notes: 'Should be none or few' },
  ],
});

// ============================================
// Helper Functions
// ============================================

/**
 * Get the best matching reference range for a patient
 */
export function getApplicableReferenceRange(
  testId: string,
  demographics: UserDemographics
): ReferenceRange | null {
  const rangeSet = REFERENCE_RANGES.get(testId);
  if (!rangeSet) return null;

  const ageInYears = demographics.ageUnit === 'years'
    ? demographics.age
    : demographics.ageUnit === 'months'
    ? demographics.age / 12
    : demographics.age / 365;

  // Sort ranges by specificity (more conditions = more specific)
  const scoredRanges = rangeSet.ranges
    .map(range => {
      let score = 0;
      let matches = true;

      const cond = range.condition;

      // Check sex
      if (cond.sex) {
        if (demographics.sex === cond.sex) score += 10;
        else if (cond.sex !== 'other') matches = false;
      }

      // Check age
      if (cond.ageMin !== undefined) {
        const ageMinYears = cond.ageUnit === 'years'
          ? cond.ageMin
          : cond.ageUnit === 'months'
          ? cond.ageMin / 12
          : cond.ageMin / 365;

        if (ageInYears >= ageMinYears) score += 5;
        else matches = false;
      }

      if (cond.ageMax !== undefined) {
        const ageMaxYears = cond.ageUnit === 'years'
          ? cond.ageMax
          : cond.ageUnit === 'months'
          ? cond.ageMax / 12
          : cond.ageMax / 365;

        if (ageInYears <= ageMaxYears) score += 5;
        else matches = false;
      }

      // Check pregnancy
      if (cond.pregnancy !== undefined) {
        if (cond.pregnancy === demographics.pregnant) score += 15;
        else if (cond.pregnancy) matches = false;
      }

      // Check trimester
      if (cond.trimester !== undefined) {
        if (demographics.trimester === cond.trimester) score += 5;
        else if (demographics.pregnant) matches = false;
      }

      return { range, score, matches };
    })
    .filter(r => r.matches)
    .sort((a, b) => b.score - a.score);

  return scoredRanges.length > 0 ? scoredRanges[0].range : rangeSet.ranges[0];
}

/**
 * Get all reference ranges for a test
 */
export function getReferenceRanges(testId: string): LabReferenceRanges | undefined {
  return REFERENCE_RANGES.get(testId);
}

/**
 * List all available tests
 */
export function listTestsWithRanges(): string[] {
  return Array.from(REFERENCE_RANGES.keys());
}

/**
 * Convert value between units
 */
export function convertUnit(
  testId: string,
  value: number,
  fromUnit: string,
  toUnit: string
): number | null {
  const rangeSet = REFERENCE_RANGES.get(testId);
  if (!rangeSet?.unitConversions) return null;

  const conversion = rangeSet.unitConversions[fromUnit];
  if (!conversion || conversion.toUnit !== toUnit) return null;

  return value * conversion.factor;
}
