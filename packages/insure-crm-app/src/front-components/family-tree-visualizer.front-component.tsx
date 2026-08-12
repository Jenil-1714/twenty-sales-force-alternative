import { type CSSProperties, useState } from 'react';
import { defineFrontComponent } from 'twenty-sdk/define';

export const FAMILY_TREE_VISUALIZER_UNIVERSAL_IDENTIFIER = '6f7a8b9c-0d1e-2f3a-4b5c-6d7e8f9a0b1c';

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
  familyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat( auto-fit, minmax(220px, 1fr) )',
    gap: '16px',
  },
  memberCard: {
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  memberRole: {
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#2563eb',
    background: '#eff6ff',
    padding: '2px 8px',
    borderRadius: '4px',
    width: 'fit-content',
  },
  memberName: { fontSize: '15px', fontWeight: 600, color: '#0f172a' },
  policyPill: {
    fontSize: '12px',
    padding: '6px 10px',
    borderRadius: '6px',
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    display: 'flex',
    justifyContent: 'space-between',
  },
  gapSection: {
    background: 'linear-gradient(135deg, #fffbe6 0%, #fef3c7 100%)',
    border: '1px solid #fde68a',
    borderRadius: '10px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  gapTitle: { fontSize: '14px', fontWeight: 700, color: '#92400e' },
  gapText: { fontSize: '13px', color: '#78350f', margin: 0 },
};

type FamilyMember = {
  name: string;
  relation: string;
  age: number;
  existingCover: string;
  gapAlert?: string;
};

const FamilyTreeVisualizer = () => {
  const [members] = useState<FamilyMember[]>([
    { name: 'Rajesh Sharma', relation: 'Head of Family', age: 44, existingCover: '₹1.5 Cr Life (Term) + ₹10L Health' },
    { name: 'Sunita Sharma', relation: 'Spouse', age: 41, existingCover: '₹10L Health (Floater)', gapAlert: 'No Critical Illness Cover' },
    { name: 'Aarav Sharma', relation: 'Son', age: 14, existingCover: '₹10L Health (Floater)', gapAlert: 'Child Education Rider Needed' },
    { name: 'Ramesh Sharma', relation: 'Father (Senior Citizen)', age: 72, existingCover: 'None', gapAlert: 'Senior Citizen Health Protection Gap (₹15L needed)' },
  ]);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>👨‍👩‍👧‍👦 Household Protection & Gap Visualizer</h2>
          <p style={styles.subtitle}>Sharma Family (4 Members) — Total Annual Premium: ₹68,500</p>
        </div>
      </div>

      <div style={styles.familyGrid}>
        {members.map((member, index) => (
          <div key={index} style={styles.memberCard}>
            <span style={styles.memberRole}>{member.relation}</span>
            <div style={styles.memberName}>{member.name} ({member.age} yrs)</div>
            <div style={styles.policyPill}>
              <span>Existing Cover:</span>
              <strong>{member.existingCover}</strong>
            </div>
            {member.gapAlert && (
              <span style={{ fontSize: '11px', color: '#dc2626', fontWeight: 600 }}>
                ⚠️ {member.gapAlert}
              </span>
            )}
          </div>
        ))}
      </div>

      <div style={styles.gapSection}>
        <div style={styles.gapTitle}>💡 AI Recommended Cross-Sell Opportunities</div>
        <p style={styles.gapText}>
          1. <strong>Senior Citizen Health Cover</strong> for Ramesh Sharma (72 yrs) — Star Health Senior Red Carpet / Care Freedom (Est. Premium ₹34,000/yr).<br />
          2. <strong>Critical Illness Rider</strong> for Sunita Sharma (41 yrs) — HDFC ERGO Optima Secure Top-Up (Est. Premium ₹6,200/yr).
        </p>
      </div>
    </div>
  );
};

export default defineFrontComponent({
  universalIdentifier: FAMILY_TREE_VISUALIZER_UNIVERSAL_IDENTIFIER,
  name: 'family-tree-visualizer',
  description: 'Household relationship & coverage gap interactive visualizer component.',
  component: FamilyTreeVisualizer,
});
