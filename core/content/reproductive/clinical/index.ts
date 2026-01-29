/**
 * Reproductive System Clinical Content
 *
 * Exports all clinical content modules for the reproductive system
 * including prenatal care, pelvic examination, fertility evaluation,
 * contraception methods, and menstrual disorders.
 */

// Clinical content imports
import { fertilityEvaluation } from './fertility-evaluation';
import { contraceptionMethods } from './contraception-methods';
import { menstrualDisorders } from './menstrual-disorders';
import { prenatalCare } from './prenatal-care';
import { pelvicExam } from './pelvic-exam';

// Named exports
export { fertilityEvaluation } from './fertility-evaluation';
export { contraceptionMethods } from './contraception-methods';
export { menstrualDisorders } from './menstrual-disorders';
export { prenatalCare } from './prenatal-care';
export { pelvicExam } from './pelvic-exam';

// Default export object with all clinical content
export default {
  fertilityEvaluation,
  contraceptionMethods,
  menstrualDisorders,
  prenatalCare,
  pelvicExam,
};
