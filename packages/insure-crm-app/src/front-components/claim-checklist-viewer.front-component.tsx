import { type CSSProperties, useState } from 'react';
import { defineFrontComponent } from 'twenty-sdk/define';
import { enqueueSnackbar } from 'twenty-sdk/front-component';

export const CLAIM_CHECKLIST_VIEWER_UNIVERSAL_IDENTIFIER = '67d0ba84-cee7-4917-956d-d3b634b149b7';

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
  stepper: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '12px 0',
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    zIndex: 1,
  },
  stepIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 700,
  },
  stepDone: { background: '#16a34a', color: '#ffffff' },
  stepActive: { background: '#2563eb', color: '#ffffff', ring: '4px solid #bfdbfe' },
  stepPending: { background: '#e2e8f0', color: '#64748b' },
  stepLabel: { fontSize: '12px', fontWeight: 600, color: '#1e293b' },
  checklistCard: {
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  checkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '13px',
    color: '#334155',
  },
  button: {
    height: '36px',
    padding: '0 16px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    background: '#16a34a',
    color: '#ffffff',
    alignSelf: 'flex-start',
  },
};

type DocCheck = {
  title: string;
  required: boolean;
  uploaded: boolean;
};

const ClaimChecklistViewer = () => {
  const [docs, setDocs] = useState<DocCheck[]>([
    { title: 'Claim Intimation Form (Signed)', required: true, uploaded: true },
    { title: 'Original Hospital Discharge Summary', required: true, uploaded: true },
    { title: 'Itemized Hospital Final Bill & Receipts', required: true, uploaded: true },
    { title: 'Doctor Prescription & Diagnostic Test Reports', required: true, uploaded: false },
    { title: 'KYC Documents (Aadhaar & PAN)', required: true, uploaded: true },
    { title: 'Cancelled Cheque for NEFT Payout', required: true, uploaded: false },
  ]);

  const toggleDoc = (index: number) => {
    const updated = [...docs];
    updated[index].uploaded = !updated[index].uploaded;
    setDocs(updated);
    enqueueSnackbar({ message: `Document status updated for "${updated[index].title}"`, variant: 'info' });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>🏥 Claim Process & Document Checklist</h2>
          <p style={styles.subtitle}>Claim #CLM-2026-90412 — Health Cashless Claim (Star Health) • TAT: Day 3 of 7</p>
        </div>
      </div>

      <div style={styles.stepper}>
        <div style={styles.step}>
          <div style={{ ...styles.stepIcon, ...styles.stepDone }}>✓</div>
          <span style={styles.stepLabel}>Intimated</span>
        </div>
        <div style={styles.step}>
          <div style={{ ...styles.stepIcon, ...styles.stepActive }}>2</div>
          <span style={styles.stepLabel}>Docs Review</span>
        </div>
        <div style={styles.step}>
          <div style={{ ...styles.stepIcon, ...styles.stepPending }}>3</div>
          <span style={styles.stepLabel}>TPA Approval</span>
        </div>
        <div style={styles.step}>
          <div style={{ ...styles.stepIcon, ...styles.stepPending }}>4</div>
          <span style={styles.stepLabel}>Settlement</span>
        </div>
      </div>

      <div style={styles.checklistCard}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px' }}>
          Mandatory Document Checklist (4 of 6 Uploaded)
        </h3>
        {docs.map((doc, i) => (
          <label key={i} style={styles.checkItem}>
            <input
              type="checkbox"
              checked={doc.uploaded}
              onChange={() => toggleDoc(i)}
              style={{ cursor: 'pointer', width: '16px', height: '16px' }}
            />
            <span style={{ textDecoration: doc.uploaded ? 'line-through' : 'none', color: doc.uploaded ? '#64748b' : '#0f172a' }}>
              {doc.title} {doc.required && <strong style={{ color: '#dc2626' }}>*</strong>}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default defineFrontComponent({
  universalIdentifier: CLAIM_CHECKLIST_VIEWER_UNIVERSAL_IDENTIFIER,
  name: 'claim-checklist-viewer',
  description: 'Interactive claim stage stepper, document checklist viewer, and TAT timeline component.',
  component: ClaimChecklistViewer,
});
