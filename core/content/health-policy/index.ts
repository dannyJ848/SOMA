// Health Policy Database
export type { HealthPolicyCategory, HealthPolicyEntry } from './health-policy-database';
export {
  HEALTH_POLICY_ENTRIES,
  getAllHealthPolicyEntries,
  searchHealthPolicyEntries,
  filterByHealthPolicyCategory,
  getHealthPolicyEntryById,
  getHighYieldEntries,
  getHealthPolicyCategoryCounts,
} from './health-policy-database';
