with open("index.ts", "w") as f:
  content = """
/**
 * Medication Interaction Checker
 */
import type { DrugInput, PatientContext, DrugInteraction, DrugPair, InteractionAnalysisResult, GroupedInteractions, InteractionSummary, OverallRiskAssessment, Recommendation } from "./types.js";
import { getUserFriendlyExplanation } from "./explanations.js";
export type * from "./types.js"; export { getUserFriendlyExplanation };
const SEVERITY_SCORES = { contraindicated: 100, major: 50, moderate: 20, minor: 5, none: 0 };
const SEVERITY_COLORS = { contraindicated: "#dc2626", major: "#f97316", moderate: "#eab308", minor: "#22c55e", none: "#6b7280" };
interface DCI { e: string; r: "sub" | "inh" | "ind"; st?: "w" | "m" | "s"; }
const DM: Map<string, DCI[]> = new Map();
const SUBS = ["simvastatin","atorvastatin","amlodipine","diltiazem","verapamil","fentanyl","oxycodone","alprazolam","triazolam"];
const INHS = ["clarithromycin","itraconazole","ketoconazole","ritonavir","erythromycin","fluconazole","verapamil","diltiazem"];
const INDS = ["carbamazepine","phenytoin","rifampin","st john wort"];
for (const d of SUBS) DM.set(d, [{e: "CYP3A4", r: "sub"}]);
for (const d of INHS) { const m = DM.get(d) || []; m.push({e: "CYP3A4", r: "inh", st: "s"}); DM.set(d, m); }
for (const d of INDS) { const m = DM.get(d) || []; m.push({e: "CYP3A4", r: "ind", st: "s"}); DM.set(d, m); }
interface PR { d1: string[]; d2: string[]; sv: "c" | "m" | "md"; ef: string; me: string; mg: string; }
const PD: PR[] = [
  {d1:["opioid","morphine","codeine","oxycodone"], d2:["benzodiazepine","lorazepam","diazepam"], sv:"m", ef:"CNS/respiratory depression", me:"Additive CNS depression", mg:"Avoid concurrent use"},
  {d1:["ssri","fluoxetine","paroxetine"], d2:["maoi","phenelzine"], sv:"c", ef:"Serotonin syndrome", me:"Additive serotonergic effects", mg:"Do NOT use together"},
  {d1:["anticoagulant","warfarin","apixaban"], d2:["nsaid","ibuprofen","naproxen"], sv:"m", ef:"Increased bleeding", me:"Additive hemostasis impairment", mg:"Avoid if possible, monitor"},
  {d1:["ace inhibitor","lisinopril"], d2:["potassium","spironolactone"], sv:"m", ef:"Hyperkalemia", me:"Reduced potassium excretion", mg:"Monitor potassium"},
];
export class MIC {
  private cfg = DEFAULT_CONFIG;
  check(drugs, ctx) {
    if (drugs.length < 2) return this.empty();
    const ix = [], safe = [];
    for (let i = 0; i < drugs.length; i++) {
      for (let j = i + 1; j < drugs.length; j++) {
        const x = this.find(drugs[i], drugs[j], ctx);
        if (x) ix.push(x); else safe.push({d1: drugs[i], d2: drugs[j]});
      }
    }
    return {risk: this.risk(ix), ix, bySev: this.group(ix), safe, sum: this.sum(ix), rec: this.rec(ix)};
  }
  find(d1, d2, ctx) {
    const pk = this.pk(d1, d2); if (pk) return this.ctx(pk, ctx);
    const pd = this.pd(d1, d2); if (pd) return this.ctx(pd, ctx);
    return null;
  }
  private pk(d1, d2) {
    const n1 = d1.name.toLowerCase(), n2 = d2.name.toLowerCase();
    const c1 = DM.get(n1), c2 = DM.get(n2);
    if (!c1 || !c2) return null;
    for (const i1 of c1) { for (const i2 of c2) {
      if (i1.e === i2.e && ((i1.r === "inh" && i2.r === "sub") || (i2.r === "inh" && i1.r === "sub"))) {
        return {id: "cyp", d1, d2, sv: "m", type: "pharmacokinetic", ev: "prob", ot: "delayed", me: "CYP interaction", ce: "Increased levels", mg: "Monitor", mon:[], as:[], doc: "CYP"};
      }
    }}
    return null;
  }
  private pd(d1, d2) {
    const n1 = d1.name.toLowerCase(), n2 = d2.name.toLowerCase();
    for (const r of PD) {
      if (this.match(n1, r.d1) && this.match(n2, r.d2))
        return {id: "pd", d1, d2, sv: r.sv === "c" ? "contraindicated" : r.sv === "m" ? "major" : "moderate", type: "pharmacodynamic", ev: "est", ot: "rapid", me: r.me, ce: r.ef, mg: r.mg, mon:[], as:[], doc: "PD"};
    }
    return null;
  }
  private match(n, c) { for (const x of c) if (n.includes(x.toLowerCase())) return true; return false; }
  private ctx(ix, c) {
    if (!c) return ix;
    let s = ix.severity;
    if (c.age && c.age >= 65) {
      if (ix.severity === "moderate") s = "major";
      else if (ix.severity === "minor") s = "moderate";
    }
    if (s != ix.severity) return {...ix, patientSpecificModifications: {severity: s, reason: "Age"}};
    return ix;
  }
  private group(ix) {
    return {
      contraindicated: ix.filter(i => (i.patientSpecificModifications?.severity || i.severity) === "contraindicated"),
      major: ix.filter(i => (i.patientSpecificModifications?.severity || i.severity) === "major"),
      moderate: ix.filter(i => (i.patientSpecificModifications?.severity || i.severity) === "moderate"),
      minor: ix.filter(i => (i.patientSpecificModifications?.severity || i.severity) === "minor")
    };
  }
  private risk(ix) {
    if (ix.length === 0) return {level: "none", score: 0, summary: "No interactions", color: SEVERITY_COLORS.none};
    let score = 0;
    let max: "contraindicated" | "major" | "moderate" | "minor" = "minor";
    for (const i of ix) {
      const s = i.patientSpecificModifications?.severity || i.severity;
      score += SEVERITY_SCORES[s];
      if (s === "contraindicated") max = "contraindicated";
      else if (s === "major" && max != "contraindicated") max = "major";
      else if (s === "moderate" && max === "minor") max = "moderate";
    }
    let l, sum, col;
    if (max === "contraindicated") {l = "critical"; sum = "Dangerous"; col = SEVERITY_COLORS.contraindicated;}
    else if (max === "major") {l = "high"; sum = "Major"; col = SEVERITY_COLORS.major;}
    else if (max === "moderate") {l = "moderate"; sum = "Moderate"; col = SEVERITY_COLORS.moderate;}
    else {l = "low"; sum = "Minor"; col = SEVERITY_COLORS.minor;}
    return {level: l, score: Math.min(score, 100), summary: sum, color: col};
  }
  private sum(ix) {
    const c = {contraindicated: 0, major: 0, moderate: 0, minor: 0};
    for (const i of ix) {const s = i.patientSpecificModifications?.severity || i.severity; if (s in c) c[s]++;}
    return {totalPairs: 0, totalInteractions: ix.length, countsBySeverity: c};
  }
  private rec(ix) {
    const rs = [];
    for (const i of ix) {
      const s = i.patientSpecificModifications?.severity || i.severity;
      let p, cat;
      if (s === "contraindicated") {p = "urgent"; cat = "avoid-combination";}
      else if (s === "major") {p = "high"; cat = "consult-provider";}
      else {p = "low"; cat = "monitor";}
      rs.push({priority: p, category: cat, recommendation: i.management, applicableDrugs: [i.d1.name, i.d2.name], rationale: i.me});
    }
    return rs;
  }
  private empty() {
    return {
      overallRisk: {level: "none", score: 0, summary: "No drugs", color: SEVERITY_COLORS.none},
      interactions: [],
      interactionsBySeverity: {contraindicated: [], major: [], moderate: [], minor: []},
      safeCombinations: [],
      summary: {totalPairs: 0, totalInteractions: 0, countsBySeverity: {contraindicated: 0, major: 0, moderate: 0, minor: 0}},
      recommendations: []
    };
  }
}
export function checkTwo(d1, d2, ctx) { return new MIC().find(d1, d2, ctx); }
export function checkMany(drugs, ctx) { return new MIC().check(drugs, ctx); }
export function explain(ix) { return getUserFriendlyExplanation(ix); }
export function getColor(s) { return SEVERITY_COLORS[s] || SEVERITY_COLORS.none; }
  """")
  f.write(content)
