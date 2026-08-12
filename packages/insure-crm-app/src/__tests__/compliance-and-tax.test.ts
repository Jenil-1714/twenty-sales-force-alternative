import { describe, expect, it } from 'vitest';
import { calculateCommissionTax } from '../utils/gst-tds-calculator';
import { calculatePersistencyRatios, type PolicyCohortEntry } from '../utils/irdai-report-generator';

describe('GST & Section 194D TDS Calculator', () => {
  it('should calculate 5% TDS for individual agents under Section 194D', () => {
    const result = calculateCommissionTax({
      grossCommission: 100000,
      entityType: 'INDIVIDUAL_AGENT',
      isInterState: false,
    });

    expect(result.tdsRate).toBe(5);
    expect(result.tdsAmount).toBe(5000);
    expect(result.netPayoutAmount).toBe(95000);
    expect(result.cgstAmount).toBe(9000);
    expect(result.sgstAmount).toBe(9000);
    expect(result.totalInvoiceAmount).toBe(118000);
  });

  it('should calculate 10% TDS for corporate brokers', () => {
    const result = calculateCommissionTax({
      grossCommission: 200000,
      entityType: 'CORPORATE_BROKER',
      isInterState: true,
    });

    expect(result.tdsRate).toBe(10);
    expect(result.tdsAmount).toBe(20000);
    expect(result.netPayoutAmount).toBe(180000);
    expect(result.igstAmount).toBe(36000);
  });
});

describe('IRDAI Persistency Ratio Calculator', () => {
  it('should compute 13th month persistency ratio accurately', () => {
    const cohort: PolicyCohortEntry[] = [
      { policyId: '1', issueDate: '2025-01-01', status: 'ACTIVE', premium: 10000, monthsActive: 14 },
      { policyId: '2', issueDate: '2025-01-01', status: 'ACTIVE', premium: 15000, monthsActive: 14 },
      { policyId: '3', issueDate: '2025-01-01', status: 'ACTIVE', premium: 20000, monthsActive: 14 },
      { policyId: '4', issueDate: '2025-01-01', status: 'LAPSED', premium: 12000, monthsActive: 14 },
    ];

    const result = calculatePersistencyRatios(cohort);

    expect(result.totalPoliciesInCohort).toBe(4);
    expect(result.month13PersistencyRatio).toBe(75);
    expect(result.persistencyGrade).toBe('GOOD');
  });
});
