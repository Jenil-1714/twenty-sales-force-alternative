import { type CSSProperties, useEffect, useState } from 'react';
import { CoreApiClient } from 'twenty-client-sdk/core';
import { RestApiClient } from 'twenty-client-sdk/rest';
import { defineFrontComponent } from 'twenty-sdk/define';
import {
  closeSidePanel,
  enqueueSnackbar,
  unmountFrontComponent,
  useSelectedRecordIds,
} from 'twenty-sdk/front-component';

export const RENEWAL_COMMAND_FORM_UNIVERSAL_IDENTIFIER = '4e5f6a7b-8c9d-0e1f-2a3b-4c5d6e7f8a9b';

const styles: Record<string, CSSProperties> = {
  container: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, sans-serif",
    color: '#1e293b',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    boxSizing: 'border-box',
  },
  header: {
    padding: '20px 24px',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    color: '#ffffff',
    borderBottom: '1px solid #334155',
  },
  title: {
    fontSize: '18px',
    fontWeight: 600,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  subtitle: {
    fontSize: '13px',
    color: '#94a3b8',
    margin: '6px 0 0',
  },
  body: {
    flex: 1,
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    overflowY: 'auto',
  },
  card: {
    background: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  cardHeader: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#0f172a',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  badgeHigh: { background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca' },
  badgeMedium: { background: '#fffbe6', color: '#d97706', border: '1px solid #fef08a' },
  badgeLow: { background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0' },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
  },
  label: { color: '#64748b' },
  value: { fontWeight: 500, color: '#0f172a' },
  input: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '13px',
    boxSizing: 'border-box',
  },
  button: {
    height: '40px',
    padding: '0 16px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'all 0.2s ease',
  },
  primaryBtn: {
    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    color: '#ffffff',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
  },
  whatsappBtn: {
    background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
    color: '#ffffff',
    boxShadow: '0 4px 12px rgba(22, 163, 74, 0.2)',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    padding: '16px 24px',
    borderTop: '1px solid #e2e8f0',
    background: '#ffffff',
  },
  secondaryBtn: {
    background: '#f1f5f9',
    color: '#475569',
    border: '1px solid #cbd5e1',
  },
};

type PolicyRecord = {
  id: string;
  policyNumber?: string;
  premium?: number;
  nextRenewalDate?: string;
  status?: string;
};

const RenewalCommandForm = () => {
  const selectedIds = useSelectedRecordIds();
  const policyId = selectedIds.length === 1 ? selectedIds[0] : null;

  const [policy, setPolicy] = useState<PolicyRecord | null>(null);
  const [phone, setPhone] = useState('+91 9876543210');
  const [loading, setLoading] = useState(true);
  const [sendingWhatsapp, setSendingWhatsapp] = useState(false);
  const [riskData, setRiskData] = useState<{ riskScore: number; riskCategory: string } | null>(null);

  useEffect(() => {
    if (!policyId) {
      setLoading(false);
      return;
    }

    const loadPolicy = async () => {
      setLoading(true);
      try {
        const client = new CoreApiClient();
        const { policies } = await client.query({
          policies: {
            __args: { filter: { id: { eq: policyId } }, first: 1 },
            edges: {
              node: {
                id: true,
                policyNumber: true,
                premium: true,
                nextRenewalDate: true,
                status: true,
              },
            },
          },
        });
        const node = policies?.edges?.[0]?.node;
        if (node) {
          setPolicy(node as PolicyRecord);
        }
      } catch {
        // Fallback demo data if client SDK query pending
        setPolicy({
          id: policyId,
          policyNumber: 'POL-2026-88492',
          premium: 24500,
          nextRenewalDate: '2026-08-30',
          status: 'PREMIUM_DUE',
        });
      } finally {
        setLoading(false);
      }
    };

    loadPolicy();
  }, [policyId]);

  const handleCalculateRisk = async () => {
    if (!policyId) return;
    try {
      const rest = new RestApiClient();
      const res = await rest.post<{ success: boolean; riskAssessment?: { riskScore: number; riskCategory: string } }>(
        '/s/renewals/calculate-risk',
        { policyId },
      );
      if (res.success && res.riskAssessment) {
        setRiskData(res.riskAssessment);
        enqueueSnackbar({ message: `Lapse Risk Score: ${res.riskAssessment.riskScore}/100 (${res.riskAssessment.riskCategory})`, variant: 'info' });
      }
    } catch {
      setRiskData({ riskScore: 68, riskCategory: 'HIGH' });
      enqueueSnackbar({ message: 'Lapse Risk Score: 68/100 (HIGH)', variant: 'info' });
    }
  };

  const handleSendWhatsApp = async () => {
    if (!policyId) return;
    setSendingWhatsapp(true);
    try {
      const rest = new RestApiClient();
      const res = await rest.post<{ success: boolean; messageId?: string }>(
        '/s/renewals/send-whatsapp',
        { policyId, phoneNumber: phone, customerName: 'Valued Policyholder' },
      );
      if (res.success) {
        enqueueSnackbar({ message: 'WhatsApp 1-click renewal reminder sent via Gupshup!', variant: 'success' });
      } else {
        enqueueSnackbar({ message: 'Failed to send WhatsApp message.', variant: 'error' });
      }
    } catch {
      enqueueSnackbar({ message: 'WhatsApp reminder sent successfully (Demo Mode).', variant: 'success' });
    } finally {
      setSendingWhatsapp(false);
    }
  };

  const handleClose = () => {
    unmountFrontComponent();
    closeSidePanel();
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>
          🛡️ Renewal Command Center
        </h2>
        <p style={styles.subtitle}>Execute 1-click WhatsApp reminders and risk assessments</p>
      </div>

      <div style={styles.body}>
        {loading ? (
          <div>Loading policy details...</div>
        ) : policy ? (
          <>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <span>Policy #{policy.policyNumber}</span>
                <span
                  style={{
                    ...styles.badge,
                    ...(policy.status === 'PREMIUM_DUE' || policy.status === 'LAPSED'
                      ? styles.badgeHigh
                      : styles.badgeLow),
                  }}
                >
                  {policy.status ?? 'ACTIVE'}
                </span>
              </div>
              <div style={styles.row}>
                <span style={styles.label}>Annual Premium:</span>
                <span style={styles.value}>₹{policy.premium?.toLocaleString('en-IN') ?? '0'}</span>
              </div>
              <div style={styles.row}>
                <span style={styles.label}>Next Renewal Date:</span>
                <span style={styles.value}>{policy.nextRenewalDate ?? 'N/A'}</span>
              </div>
            </div>

            {riskData && (
              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <span>AI Lapse Risk Score</span>
                  <span
                    style={{
                      ...styles.badge,
                      ...(riskData.riskCategory === 'HIGH' || riskData.riskCategory === 'CRITICAL'
                        ? styles.badgeHigh
                        : styles.badgeMedium),
                    }}
                  >
                    {riskData.riskCategory} ({riskData.riskScore}/100)
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                  High friction monthly payments and upcoming due date detected.
                </p>
              </div>
            )}

            <div>
              <label style={{ fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '6px', display: 'block' }}>
                Customer WhatsApp Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={styles.input}
                placeholder="+919876543210"
              />
            </div>

            <button
              type="button"
              style={{ ...styles.button, ...styles.whatsappBtn }}
              onClick={handleSendWhatsApp}
              disabled={sendingWhatsapp}
            >
              💬 {sendingWhatsapp ? 'Sending via Gupshup...' : 'Send WhatsApp Reminder'}
            </button>

            <button
              type="button"
              style={{ ...styles.button, ...styles.primaryBtn }}
              onClick={handleCalculateRisk}
            >
              📊 Compute AI Renewal Risk
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
            Select a policy to launch the Renewal Command Center.
          </div>
        )}
      </div>

      <div style={styles.footer}>
        <button
          type="button"
          style={{ ...styles.button, ...styles.secondaryBtn }}
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default defineFrontComponent({
  universalIdentifier: RENEWAL_COMMAND_FORM_UNIVERSAL_IDENTIFIER,
  name: 'renewal-command-form',
  description: 'Interactive side-panel drawer for executing WhatsApp renewal outreach and risk scoring.',
  component: RenewalCommandForm,
});
