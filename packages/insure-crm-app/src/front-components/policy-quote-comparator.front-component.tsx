import { type CSSProperties, useState } from 'react';
import { defineFrontComponent } from 'twenty-sdk/define';
import { enqueueSnackbar } from 'twenty-sdk/front-component';

export const POLICY_QUOTE_COMPARATOR_UNIVERSAL_IDENTIFIER = '7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d';

const styles: Record<string, CSSProperties> = {
  container: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, sans-serif",
    padding: '24px',
    background: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '16px',
  },
  title: { fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: 0 },
  subtitle: { fontSize: '13px', color: '#64748b', margin: '4px 0 0' },
  tabs: {
    display: 'flex',
    gap: '8px',
  },
  tabBtn: {
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    border: '1px solid #cbd5e1',
    background: '#f8fafc',
    color: '#475569',
  },
  activeTab: {
    background: '#2563eb',
    color: '#ffffff',
    borderColor: '#2563eb',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  },
  quoteCard: {
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    background: '#ffffff',
    position: 'relative',
  },
  recommendBadge: {
    position: 'absolute',
    top: '-12px',
    right: '16px',
    background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
    color: '#ffffff',
    fontSize: '11px',
    fontWeight: 700,
    padding: '4px 10px',
    borderRadius: '12px',
  },
  insurerName: { fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' },
  productName: { fontSize: '16px', fontWeight: 700, color: '#0f172a' },
  priceTag: { fontSize: '22px', fontWeight: 800, color: '#1e293b' },
  featureList: {
    fontSize: '12px',
    color: '#475569',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    paddingLeft: '16px',
    margin: 0,
  },
  button: {
    height: '36px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    background: '#0f172a',
    color: '#ffffff',
  },
};

type Quote = {
  insurer: string;
  product: string;
  premium: number;
  csr: number;
  recommended?: boolean;
  features: string[];
};

const PolicyQuoteComparator = () => {
  const [category, setCategory] = useState<'Life' | 'Health' | 'Motor'>('Health');

  const quotes: Record<string, Quote[]> = {
    Health: [
      {
        insurer: 'HDFC ERGO',
        product: 'Optima Secure',
        premium: 18450,
        csr: 97.2,
        recommended: true,
        features: ['4X Coverage Multiplier', 'Zero Deductible on Renewal', '100% Restore Benefit'],
      },
      {
        insurer: 'Star Health',
        product: 'Comprehensive Health',
        premium: 16900,
        csr: 99.1,
        features: ['No Capping on Room Rent', 'Cover for Pre-existing after 36 mo', 'Air Ambulance Cover'],
      },
      {
        insurer: 'Care Health',
        product: 'Care Supreme',
        premium: 15200,
        csr: 95.8,
        features: ['Cumulative Bonus Super 500%', 'Unlimited Recharge', 'Wellness Rewards Discount'],
      },
    ],
    Life: [
      {
        insurer: 'HDFC Life',
        product: 'Click 2 Protect Life',
        premium: 24500,
        csr: 99.3,
        recommended: true,
        features: ['₹1.5 Cr Cover to Age 85', 'Terminal Illness Payout', 'Waiver of Premium Option'],
      },
      {
        insurer: 'ICICI Prudential',
        product: 'iProtect Smart',
        premium: 23800,
        csr: 99.1,
        features: ['Accelerated Critical Illness 34 diseases', 'Accidental Death Double Benefit'],
      },
      {
        insurer: 'Max Life',
        product: 'Smart Secure Plus',
        premium: 22900,
        csr: 99.5,
        features: ['Special Discount for Non-Smokers', 'Return of Premium Option'],
      },
    ],
    Motor: [
      {
        insurer: 'ICICI Lombard',
        product: 'Motor Comprehensive + Zero Dep',
        premium: 8900,
        csr: 98.4,
        recommended: true,
        features: ['Nil Depreciation Cover', 'Engine Protect', '24x7 Roadside Assistance'],
      },
      {
        insurer: 'Bajaj Allianz',
        product: 'DriveSmart Package',
        premium: 8200,
        csr: 97.5,
        features: ['Key & Lock Replacement', 'Consumables Cover', 'Cashless Repairs in 6500+ Garages'],
      },
      {
        insurer: 'Go Digit',
        product: 'Car Super Shield',
        premium: 7800,
        csr: 96.2,
        features: ['Self-inspection Claim via App', 'Pickup and Drop for Repairs'],
      },
    ],
  };

  const currentQuotes = quotes[category] ?? [];

  const handleShareQuote = (productName: string) => {
    enqueueSnackbar({ message: `Quote comparison link for ${productName} copied to clipboard!`, variant: 'success' });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>⚡ Instant Multi-Insurer Quote Comparator</h2>
          <p style={styles.subtitle}>Compare premiums, IRDAI CSR rates, and features side-by-side</p>
        </div>
        <div style={styles.tabs}>
          {(['Health', 'Life', 'Motor'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              style={{ ...styles.tabBtn, ...(category === cat ? styles.activeTab : {}) }}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.grid}>
        {currentQuotes.map((q, index) => (
          <div key={index} style={styles.quoteCard}>
            {q.recommended && <span style={styles.recommendBadge}>★ BEST VALUE</span>}
            <span style={styles.insurerName}>{q.insurer} • CSR {q.csr}%</span>
            <div style={styles.productName}>{q.product}</div>
            <div style={styles.priceTag}>₹{q.premium.toLocaleString('en-IN')}<span style={{ fontSize: '13px', color: '#64748b', fontWeight: 400 }}>/yr</span></div>
            <ul style={styles.featureList}>
              {q.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button type="button" style={styles.button} onClick={() => handleShareQuote(q.product)}>
              📤 Share Quote with Client
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default defineFrontComponent({
  universalIdentifier: POLICY_QUOTE_COMPARATOR_UNIVERSAL_IDENTIFIER,
  name: 'policy-quote-comparator',
  description: 'Side-by-side product quote comparison matrix for Life, Health, and Motor insurance.',
  component: PolicyQuoteComparator,
});
