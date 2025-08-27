export enum Likelihood {
  IMPOSSIBLE = 'Impossible',
  REMOTE = 'Remote',
  UNLIKELY = 'Unlikely',
  POSSIBLE = 'Possible',
  UNUSUAL = 'Unusual',
  KNOWN = 'Known',
  LIKELY = 'Likely',
  USUAL = 'Usual',
  CERTAIN = 'Certain'
}

export enum Severity {
  INSIGNIFICANT = 'Insignificant',
  MINOR_INCIDENT = 'Minor incident',
  MINOR_INJURY = 'Minor injury',
  HEALTH_DAMAGE = 'Health damage',
  INJURY = 'Injury',
  MULTIPLE_INJURIES = 'Multiple injuries',
  SERIOUS_INJURY = 'Serious injury',
  FATAL = 'Fatal',
  MULTIPLE_FATALITIES = 'Multiple fatalities'
}

export enum RiskLevel {
  VERY_LOW = 'Very Low',
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  VERY_HIGH = 'Very High'
}

export interface Risk {
  id: number;
  hazard: string;
  likelihood: Likelihood;
  severity: Severity;
  riskScore: number;
  riskLevel: RiskLevel;
  createdAt: string;
  updatedAt: string;
}

export interface CreateRiskDto {
  hazard: string;
  likelihood: Likelihood;
  severity: Severity;
}
