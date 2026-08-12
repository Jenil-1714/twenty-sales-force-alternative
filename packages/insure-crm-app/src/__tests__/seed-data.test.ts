import { describe, expect, it } from 'vitest';
import insurers from '../seed-data/insurers.json';
import products from '../seed-data/products.json';

describe('InsureCRM Seed Data Validation', () => {
  it('should contain at least 40 valid Indian insurers', () => {
    expect(insurers.length).toBeGreaterThanOrEqual(40);

    insurers.forEach((insurer) => {
      expect(insurer.name).toBeDefined();
      expect(insurer.shortName).toBeDefined();
      expect(['Life', 'General', 'Health', 'StandaloneHealth']).toContain(insurer.category);
      expect(insurer.irdaiLicenseNumber).toBeDefined();
      expect(insurer.claimSettlementRatio).toBeGreaterThan(50);
      expect(insurer.claimSettlementRatio).toBeLessThanOrEqual(100);
    });
  });

  it('should contain at least 50 valid insurance products', () => {
    expect(products.length).toBeGreaterThanOrEqual(50);

    products.forEach((product) => {
      expect(product.productName).toBeDefined();
      expect(product.insurerShortName).toBeDefined();
      expect(['Life', 'Health', 'Motor', 'Fire', 'Marine', 'Travel', 'PA', 'General', 'StandaloneHealth']).toContain(product.category);
      expect(product.commissionFirstYear).toBeGreaterThan(0);
      expect(product.commissionRenewal).toBeGreaterThanOrEqual(0);
    });
  });

  it('should cover major categories (Life, Health)', () => {
    const categories = new Set(products.map((p) => p.category));
    expect(categories.has('Life')).toBe(true);
    expect(categories.has('Health')).toBe(true);
  });
});

