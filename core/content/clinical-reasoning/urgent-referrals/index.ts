/**
 * Urgent Referrals Content
 *
 * Guidelines for when to refer patients to specialists urgently or emergently
 * based on clinical presentation and risk stratification.
 */

export * from "./cardiac-referral-criteria";
export * from "./neurological-referrals";
export * from "./oncologic-urgencies";
export * from "./psychiatric-emergencies";

export const URGENT_REFERRAL_TOPICS = [
  "cardiac-referral-criteria",
  "neurological-referrals",
  "oncologic-urgencies",
  "psychiatric-emergencies",
] as const;

export type UrgentReferralTopic = (typeof URGENT_REFERRAL_TOPICS)[number];
