export type TaxCalculationInput = {
  grossCommission: number;
  entityType: 'INDIVIDUAL_AGENT' | 'CORPORATE_BROKER' | 'POSP';
  isInterState: boolean; // true = IGST, false = CGST + SGST
  tdsRateOverride?: number;
};

export type TaxCalculationResult = {
  grossCommission: number;
  gstRate: number; // 18%
  cgstAmount: number; // 9%
  sgstAmount: number; // 9%
  igstAmount: number; // 18%
  totalInvoiceAmount: number; // Gross + GST
  tdsSection: string; // 194D
  tdsRate: number; // 5% or 10%
  tdsAmount: number;
  netPayoutAmount: number; // Gross - TDS
};

export const calculateCommissionTax = (input: TaxCalculationInput): TaxCalculationResult => {
  const { grossCommission, entityType, isInterState, tdsRateOverride } = input;

  const gstRate = 0.18;
  const totalGst = grossCommission * gstRate;

  let cgstAmount = 0;
  let sgstAmount = 0;
  let igstAmount = 0;

  if (isInterState) {
    igstAmount = totalGst;
  } else {
    cgstAmount = totalGst / 2;
    sgstAmount = totalGst / 2;
  }

  const totalInvoiceAmount = grossCommission + totalGst;

  // Section 194D Insurance Commission TDS: 5% for Individual Agents/POSPs, 10% for Companies
  let tdsRate = entityType === 'CORPORATE_BROKER' ? 0.10 : 0.05;
  if (tdsRateOverride !== undefined) {
    tdsRate = tdsRateOverride;
  }

  // TDS is deducted on gross commission (excluding GST component)
  const tdsAmount = grossCommission * tdsRate;
  const netPayoutAmount = grossCommission - tdsAmount;

  return {
    grossCommission,
    gstRate: 18,
    cgstAmount,
    sgstAmount,
    igstAmount,
    totalInvoiceAmount,
    tdsSection: 'Section 194D (Insurance Commission)',
    tdsRate: tdsRate * 100,
    tdsAmount,
    netPayoutAmount,
  };
};
