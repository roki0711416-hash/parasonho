import type ja from "./ja";

export type Dictionary = typeof ja;

export type JourneyItem = Dictionary["home"]["plans"]["journey"][number];
export type PlanItem = Dictionary["home"]["plans"]["items"][number];
export type FaqItem = Dictionary["home"]["faq"]["items"][number];
export type ReasonItem = Dictionary["home"]["why"]["reasons"][number];
