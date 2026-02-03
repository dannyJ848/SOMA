/**
 * Congenital Anomalies - Index
 * Exports all congenital anomalies educational content
 */

export { malformationsContent as malformations } from './malformations';
export { syndromesContent as syndromes } from './syndromes';
export { teratogensContent as teratogens } from './teratogens';

export const congenitalAnomaliesModules = [
  'malformations',
  'syndromes',
  'teratogens'
] as const;

export type CongenitalAnomaliesModule = typeof congenitalAnomaliesModules[number];
