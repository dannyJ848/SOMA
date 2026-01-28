// Medication Interaction Checker
import type { DrugInput, PatientContext, DrugInteraction } from "./types.js";
import { getUserFriendlyExplanation } from "./explanations.js";
export type * from "./types.js";
export { getUserFriendlyExplanation };
const SEVERITY_SCORES = { contraindicated: 100, major: 50, moderate: 20, minor: 5, none: 0 };
const SEVERITY_COLORS = { contraindicated: "#dc2626", major: "#f97316", moderate: "#eab308", minor: "#22c55e", none: "#6b7280" };
