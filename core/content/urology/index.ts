/**
 * Urology Educational Content Module
 *
 * Comprehensive patient education content covering:
 * - Anatomy (urinary system, male reproductive, female pelvic)
 * - Common conditions (UTIs, stones, BPH, OAB, incontinence)
 * - Kidney conditions (stones, infections, hydronephrosis)
 * - Male health (prostate, ED, infertility, testicular)
 * - Procedures (cystoscopy, urodynamics, lithotripsy, TURP, vasectomy)
 * - Cancer (bladder, kidney, prostate, testicular)
 * - Prevention (UTI, stone, prostate health)
 */

// Anatomy
export { urinarySystemAnatomy } from './anatomy/urinary-system';
export { maleReproductiveAnatomy } from './anatomy/male-reproductive';
export { femalePelvicAnatomy } from './anatomy/female-pelvic';

// Common Conditions
export { urinaryTractInfections } from './conditions/urinary-tract-infections';
export { kidneyStones } from './conditions/kidney-stones';
export { benignProstaticHyperplasia } from './conditions/bph';
export { overactiveBladder } from './conditions/overactive-bladder';
export { urinaryIncontinence } from './conditions/urinary-incontinence';
export { interstitialCystitis } from './conditions/interstitial-cystitis';

// Kidney Conditions
export { kidneyStoneTypes } from './kidney/kidney-stone-types';
export { kidneyInfections } from './kidney/kidney-infections';
export { hydronephrosis } from './kidney/hydronephrosis';

// Male Health
export { prostateConditions } from './male-health/prostate-conditions';
export { erectileDysfunction } from './male-health/erectile-dysfunction';
export { maleInfertility } from './male-health/male-infertility';
export { testicularConditions } from './male-health/testicular-conditions';

// Procedures
export { cystoscopy } from './procedures/cystoscopy';
export { urodynamics } from './procedures/urodynamics';
export { lithotripsy } from './procedures/lithotripsy';
export { turp } from './procedures/turp';
export { vasectomy } from './procedures/vasectomy';

// Cancer
export { bladderCancer } from './cancer/bladder-cancer';
export { kidneyCancer } from './cancer/kidney-cancer';
export { prostateCancer } from './cancer/prostate-cancer';
export { testicularCancer } from './cancer/testicular-cancer';

// Prevention
export { utiPrevention } from './prevention/uti-prevention';
export { stonePrevention } from './prevention/stone-prevention';
export { prostateHealth } from './prevention/prostate-health';
