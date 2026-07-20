export type UniverseId = 'A' | 'B' | 'C' | 'D' | 'E' | 'LOBBY';

export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface UXDecision {
  problem: string;
  optionsConsidered?: string[];
  finalDecision: string;
  reason: string;
}

// ============================================
// DIMENSION A — REALIST
// ============================================
export interface CaseStudyUniverseA {
  title: string;
  goal: string;
  outcome: string;
  timeframe: string;
  role: string;
  problemContext: {
    problem: string;
    constraints: string[];
  };
  insights: string[];
  designPrinciples: string[];
  uxDecisions: UXDecision[];
  metrics: Metric[];
  reflection: string;
}

// ============================================
// DIMENSION B — STORYTELLER
// ============================================
export interface StoryChapter {
  title: string;
  content: string[];
}

export interface CaseStudyUniverseB {
  title: string;
  hook: string;
  chapters: StoryChapter[];
  metrics: Metric[];
  narrativeReflection: string;
}

// ============================================
// PROJECT STRUCTURE
// ============================================
export interface Project {
  id: string;
  thumbnail?: string;
  universeContent: {
    A: CaseStudyUniverseA;
    B?: CaseStudyUniverseB;
  };
}

export interface ProcessStep {
  title: string;
  description: string;
}

// ============================================
// SITE DATA STRUCTURE
// ============================================
export interface SiteData {
  hero: {
    A: {
      headline: string;
      subtext: string;
    };
    B?: {
      headline: string;
      subtext: string;
    };
  };
  values: {
    title: string;
    description: string;
  }[];
  projects: Project[];
  process: {
    heading: string;
    steps: ProcessStep[];
  };
  processB?: {
    heading: string;
    steps: ProcessStep[];
  };
  about: {
    heading: string;
    content: string[];
  };
  aboutB?: {
    heading: string;
    content: string[];
  };
  contact: {
    heading: string;
    content: string;
    email: string;
    linkedin: string;
  };
  contactB?: {
    heading: string;
    content: string;
  };
  intro?: {
    content: string[];
  };
  footer: {
    copyright: string;
    dimension: string;
    perspective?: string;
    tagline: string;
  };
}
