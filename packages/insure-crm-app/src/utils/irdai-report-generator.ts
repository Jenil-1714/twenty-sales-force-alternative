export type PolicyCohortEntry = {
  policyId: string;
  issueDate: string; // ISO date string
  status: 'ACTIVE' | 'PREMIUM_DUE' | 'LAPSED' | 'PAID_UP' | 'SURRENDERED' | 'MATURED';
  premium: number;
  monthsActive: number;
};

export type PersistencyMetrics = {
  totalPoliciesInCohort: number;
  totalPremiumInCohort: number;
  month13PersistencyRatio: number; // %
  month25PersistencyRatio: number; // %
  month37PersistencyRatio: number; // %
  month61PersistencyRatio: number; // %
  persistencyGrade: 'EXCELLENT' | 'GOOD' | 'NEEDS_ATTENTION' | 'CRITICAL';
};

export const calculatePersistencyRatios = (cohort: PolicyCohortEntry[]): PersistencyMetrics => {
  if (cohort.length === 0) {
    return {
      totalPoliciesInCohort: 0,
      totalPremiumInCohort: 0,
      month13PersistencyRatio: 0,
      month25PersistencyRatio: 0,
      month37PersistencyRatio: 0,
      month61PersistencyRatio: 0,
      persistencyGrade: 'CRITICAL',
    };
  }

  const totalPolicies = cohort.length;
  const totalPremium = cohort.reduce((acc, p) => acc + p.premium, 0);

  const activeStatusSet = new Set(['ACTIVE', 'PREMIUM_DUE', 'PAID_UP', 'MATURED']);

  const activeAtMonth13 = cohort.filter((p) => p.monthsActive >= 13 && activeStatusSet.has(p.status)).length;
  const activeAtMonth25 = cohort.filter((p) => p.monthsActive >= 25 && activeStatusSet.has(p.status)).length;
  const activeAtMonth37 = cohort.filter((p) => p.monthsActive >= 37 && activeStatusSet.has(p.status)).length;
  const activeAtMonth61 = cohort.filter((p) => p.monthsActive >= 61 && activeStatusSet.has(p.status)).length;

  const m13Ratio = (activeAtMonth13 / totalPolicies) * 100;
  const m25Ratio = (activeAtMonth25 / totalPolicies) * 100;
  const m37Ratio = (activeAtMonth37 / totalPolicies) * 100;
  const m61Ratio = (activeAtMonth61 / totalPolicies) * 100;

  let grade: PersistencyMetrics['persistencyGrade'] = 'NEEDS_ATTENTION';
  if (m13Ratio >= 85) grade = 'EXCELLENT';
  else if (m13Ratio >= 75) grade = 'GOOD';
  else if (m13Ratio >= 65) grade = 'NEEDS_ATTENTION';
  else grade = 'CRITICAL';

  return {
    totalPoliciesInCohort: totalPolicies,
    totalPremiumInCohort: totalPremium,
    month13PersistencyRatio: Math.round(m13Ratio * 10) / 10,
    month25PersistencyRatio: Math.round(m25Ratio * 10) / 10,
    month37PersistencyRatio: Math.round(m37Ratio * 10) / 10,
    month61PersistencyRatio: Math.round(m61Ratio * 10) / 10,
    persistencyGrade: grade,
  };
};

export type IRDAIReturnRegister = {
  quarter: string;
  agencyLicenseNumber: string;
  totalPoliciesBooked: number;
  totalPremiumCollected: number;
  totalCommissionReceived: number;
  totalGrievancesLogged: number;
  totalGrievancesResolved: number;
  persistency13MonthPct: number;
  complianceStatus: 'COMPLIANT' | 'AUDIT_FLAGGED';
};

export const generateIRDAIQuarterlyReturn = (
  quarter: string,
  licenseNo: string,
  cohort: PolicyCohortEntry[],
  totalCommission: number,
): IRDAIReturnRegister => {
  const persistency = calculatePersistencyRatios(cohort);

  return {
    quarter,
    agencyLicenseNumber: licenseNo,
    totalPoliciesBooked: cohort.length,
    totalPremiumCollected: persistency.totalPremiumInCohort,
    totalCommissionReceived: totalCommission,
    totalGrievancesLogged: 0,
    totalGrievancesResolved: 0,
    persistency13MonthPct: persistency.month13PersistencyRatio,
    complianceStatus: persistency.month13PersistencyRatio >= 65 ? 'COMPLIANT' : 'AUDIT_FLAGGED',
  };
};
