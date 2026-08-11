import { describe, expect, it } from 'vitest';
import { computePolicyRisk } from '../logic-functions/calculate-renewals-risk';

describe('computePolicyRisk', () => {
  it('should score baseline low risk for future policies', () => {
    const futureDate = new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString();
    const result = computePolicyRisk({
      status: 'ACTIVE',
      nextRenewalDate: futureDate,
      premiumFrequency: 'ANNUAL',
      policyTerm: 20,
      premium: 25000,
    });

    expect(result.riskScore).toBeLessThan(50);
    expect(result.riskCategory).toBe('LOW');
  });

  it('should score CRITICAL risk for overdue monthly policies', () => {
    const pastDate = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString();
    const result = computePolicyRisk({
      status: 'PREMIUM_DUE',
      nextRenewalDate: pastDate,
      premiumFrequency: 'MONTHLY',
      policyTerm: 10,
      premium: 3000,
    });

    expect(result.riskScore).toBeGreaterThanOrEqual(75);
    expect(result.riskCategory).toBe('CRITICAL');
    expect(result.factors).toContain('Past renewal date (Lapsed risk)');
    expect(result.factors).toContain('High-frequency monthly payment friction');
    expect(result.factors).toContain('Payment currently overdue');
  });

  it('should score HIGH risk for revival pending policies', () => {
    const result = computePolicyRisk({
      status: 'REVIVAL_PENDING',
      premiumFrequency: 'ANNUAL',
    });

    expect(result.riskCategory).toBe('HIGH');
    expect(result.factors).toContain('Revival pending after lapse');
  });
});
