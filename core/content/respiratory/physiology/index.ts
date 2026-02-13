/**
 * Respiratory Physiology Index
 *
 * Physiological principles of the respiratory system including
 * ventilation, gas exchange, oxygen transport, and control of breathing.
 */

export { ventilationMechanicsContent as ventilationMechanics } from './ventilation-mechanics';
export { gasExchangeContent as gasExchange } from './gas-exchange';
export { oxygenTransportContent as oxygenTransport } from './oxygen-transport';
export { respiratoryControlContent as respiratoryControl } from './respiratory-control';

import { ventilationMechanicsContent } from './ventilation-mechanics';
import { gasExchangeContent } from './gas-exchange';
import { oxygenTransportContent } from './oxygen-transport';
import { respiratoryControlContent } from './respiratory-control';

export const respiratoryPhysiology = [
  ventilationMechanicsContent,
  gasExchangeContent,
  oxygenTransportContent,
  respiratoryControlContent,
];

export default respiratoryPhysiology;
