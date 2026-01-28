/**
 * Red Flags Content
 *
 * Warning signs and symptoms that indicate serious underlying pathology
 * requiring urgent evaluation across various clinical presentations.
 */

export * from "./chest-pain-red-flags";
export * from "./neurological-red-flags";
export * from "./abdominal-red-flags";
export * from "./pediatric-red-flags";

export const RED_FLAGS_TOPICS = [
  "chest-pain-red-flags",
  "neurological-red-flags",
  "abdominal-red-flags",
  "pediatric-red-flags",
] as const;

export type RedFlagsTopic = (typeof RED_FLAGS_TOPICS)[number];
