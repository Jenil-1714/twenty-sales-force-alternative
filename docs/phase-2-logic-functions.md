# Phase 2: Logic Functions & Compliance Integrations Documentation

> **Status**: ✅ Completed
> **Package**: [`packages/insure-crm-app/`](file:///Users/jenu/Desktop/projects/my-products/Build-10x-Version/twenty-sales-force-alternative/packages/insure-crm-app)

---

## Executive Summary
Phase 2 implemented the serverless backend logic, automation routines, and regulatory compliance handlers for InsureCRM using Twenty SDK `defineLogicFunction`. These 7 functions cover automated renewal tracking, WhatsApp integration, renewal risk scoring, commission payout reconciliation, payout shortfall alerting, CKYC lookup simulation, and DPDP Act 2023 consent auditing.

---

## ⚙️ Logic Functions & Triggers

### 1. `check-expiring-policies.ts`
- **Universal Identifier**: `7f8a9b0c-1d2e-3f4a-5b6c-7d8e9f0a1b2c`
- **Trigger**: `cronTriggerSettings` (`0 8 * * *` — Daily at 8:00 AM IST)
- **Timeout**: 60s
- **Handler Logic**:
  1. Queries all policies with status `ACTIVE` or `PREMIUM_DUE` where `nextRenewalDate` is within 60 days.
  2. Categorizes policies into urgency buckets: `dueIn7Days`, `dueIn15Days`, `dueIn30Days`, `dueIn60Days`.
  3. Automatically updates policy status to `PREMIUM_DUE` and priority to `HIGH` for policies expiring within 7 days.
  4. Returns summary counts per bucket.

```typescript
// Sample Execution Result
{
  "success": true,
  "totalProcessed": 42,
  "buckets": {
    "dueIn7Days": 5,
    "dueIn15Days": 8,
    "dueIn30Days": 14,
    "dueIn60Days": 15
  }
}
```

---

### 2. `send-whatsapp-reminder.ts`
- **Universal Identifier**: `8a9b0c1d-2e3f-4a5b-6c7d-8e9f0a1b2c3d`
- **Trigger**: `httpRouteTriggerSettings` (`POST /renewals/send-whatsapp`, Auth Required)
- **Timeout**: 30s
- **Handler Logic**:
  1. Receives `policyId`, `phoneNumber`, `customerName`, and `templateName`.
  2. Queries policy data to verify premium amount and due date.
  3. Formulates interactive WhatsApp message via Gupshup API with a 1-click renewal payment link (`https://pay.insurecrm.in/r/{policyId}`).
  4. Returns WhatsApp message ID (`wamid.*`).

---

### 3. `calculate-renewals-risk.ts`
- **Universal Identifier**: `9b0c1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e`
- **Trigger**: `httpRouteTriggerSettings` (`POST /renewals/calculate-risk`, Auth Required)
- **Timeout**: 15s
- **Handler Logic**:
  - Calculates a numerical lapse risk score ($0 \le S \le 100$) based on:
    - Days remaining to renewal ($+40$ score if past due, $+30$ if $\le 7$ days)
    - Payment frequency ($+15$ score for monthly payments due to high friction)
    - Current status ($+20$ score if `PREMIUM_DUE`, $+35$ if `REVIVAL_PENDING`)
  - Categorizes risk into `LOW` ($<30$), `MEDIUM` ($30-49$), `HIGH` ($50-74$), or `CRITICAL` ($\ge 75$).
  - Exports helper `computePolicyRisk()` for unit testing.

---

### 4. `reconcile-commission-statement.ts`
- **Universal Identifier**: `0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d`
- **Trigger**: `httpRouteTriggerSettings` (`POST /commissions/reconcile`, Auth Required)
- **Timeout**: 45s
- **Handler Logic**:
  1. Accepts an array of statement entries containing `statementReference`, `policyNumber`, `payoutAmount`, `paymentDate`, `tdsAmount`, `gstAmount`.
  2. Matches statement references against expected commission records.
  3. Calculates variance ($\text{Variance} = \text{Received} - \text{Expected}$).
  4. Sets variance status:
     - `Match` if $|\text{Variance}| \le \text{₹10}$
     - `Shortfall` if $\text{Variance} < -\text{₹10}$
     - `Excess` if $\text{Variance} > \text{₹10}$
  5. Updates commission record with net amount after TDS (5%).

---

### 5. `flag-commission-discrepancy.ts`
- **Universal Identifier**: `1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e`
- **Trigger**: `databaseEventTriggerSettings` (`commission` object `updated` event)
- **Timeout**: 15s
- **Handler Logic**:
  - Listens to real-time updates on commission records.
  - If `varianceStatus` becomes `Shortfall`, logs an urgent back-office alert for review.

---

### 6. `verify-ckyc.ts`
- **Universal Identifier**: `2c3d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f`
- **Trigger**: `httpRouteTriggerSettings` (`POST /kyc/verify-ckyc`, Auth Required)
- **Timeout**: 20s
- **Handler Logic**:
  - Simulates CKYC registry lookup using PAN/Aadhaar number.
  - Returns CKYC number (`CKYC-xxxxxxxxxxxx`), verification timestamp, and updates Person `kycStatus` to `Verified`.

---

### 7. `dpdp-consent-handler.ts`
- **Universal Identifier**: `3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a`
- **Trigger**: `httpRouteTriggerSettings` (`POST /kyc/dpdp-consent`, Auth Required)
- **Timeout**: 15s
- **Handler Logic**:
  1. Captures DPDP Act 2023 actions (`GIVE_CONSENT`, `WITHDRAW_CONSENT`, `REQUEST_DATA_EXPORT`, `REQUEST_DATA_ERASURE`).
  2. Updates Person `dpdpConsentStatus` (`Consented` or `Withdrawn`) and `dpdpConsentDate`.
  3. Generates immutable audit reference (`DPDP-AUDIT-{timestamp}`).

---

## 🧪 Unit Testing Suite
Unit tests located in `src/__tests__/`:
- `renewals-risk.test.ts`: Validates baseline risk scoring, overdue monthly policy critical scoring, and revival pending categorization.
- `seed-data.test.ts`: Verifies 45+ insurers and 62+ products against IRDAI schema requirements.

```bash
# Run tests
npx vitest run
```
