/**
 * Mental Health Conditions Educational Content
 *
 * Exports all mental health condition content modules including
 * anxiety disorders, mood disorders, psychotic disorders,
 * obsessive-compulsive spectrum, eating disorders, and
 * personality disorders.
 */

import { adhdContent } from './adhd';
import { anxietyDisordersContent } from './anxiety-disorders';
import { bipolarDisorderContent } from './bipolar-disorder';
import { depressionContent } from './depression';
import { eatingDisordersContent } from './eating-disorders';
import { ocdContent } from './ocd';
import { personalityDisordersContent } from './personality-disorders';
import { ptsdContent } from './ptsd';
import { schizophreniaContent } from './schizophrenia';

export { adhdContent as adhd } from './adhd';
export { anxietyDisordersContent as anxietyDisorders } from './anxiety-disorders';
export { bipolarDisorderContent as bipolarDisorder } from './bipolar-disorder';
export { depressionContent as depression } from './depression';
export { eatingDisordersContent as eatingDisorders } from './eating-disorders';
export { ocdContent as ocd } from './ocd';
export { personalityDisordersContent as personalityDisorders } from './personality-disorders';
export { ptsdContent as ptsd } from './ptsd';
export { schizophreniaContent as schizophrenia } from './schizophrenia';

export default {
  adhd: adhdContent,
  anxietyDisorders: anxietyDisordersContent,
  bipolarDisorder: bipolarDisorderContent,
  depression: depressionContent,
  eatingDisorders: eatingDisordersContent,
  ocd: ocdContent,
  personalityDisorders: personalityDisordersContent,
  ptsd: ptsdContent,
  schizophrenia: schizophreniaContent,
};
