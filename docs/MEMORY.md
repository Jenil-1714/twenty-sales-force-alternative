# InsureCRM — Project Memory & Index

> **Primary Memory Document**: This file provides an immediate, token-efficient index of the InsureCRM project state, architecture, custom object schemas, logic functions, and phase documentation for AI agents and human developers.

---

## 📌 Project Quick Reference
- **App Location**: [`packages/insure-crm-app/`](file:///Users/jenu/Desktop/projects/my-products/Build-10x-Version/twenty-sales-force-alternative/packages/insure-crm-app)
- **Monorepo**: Twenty CRM (`twenty-sales-force-alternative`)
- **Target Market**: Indian Insurance Agents, POSPs, and Brokerages (Life, Health, Motor, General)
- **Architecture**: Twenty App built using `twenty-sdk` with custom schema-per-tenant objects, logic functions, and front components.

---

## 📑 Completed Phases & Detailed Documentation Index

| Phase | Description | Detailed Documentation Link | Status |
|:------|:------------|:----------------------------|:-------|
| **Phase 1** | Core Data Model, Extended Schema, Seed Engine & Roles | [`docs/phase-1-core-data-model.md`](file:///Users/jenu/Desktop/projects/my-products/Build-10x-Version/twenty-sales-force-alternative/docs/phase-1-core-data-model.md) | ✅ Complete |
| **Phase 2** | Logic Functions, Automations & Compliance Integrations | [`docs/phase-2-logic-functions.md`](file:///Users/jenu/Desktop/projects/my-products/Build-10x-Version/twenty-sales-force-alternative/docs/phase-2-logic-functions.md) | ✅ Complete |
| **Phase 3** | Front Components, Micro-Frontends & UI Dashboards | `docs/phase-3-front-components.md` | ⏳ Planned |
| **Phase 4** | Advanced Workflows & Multilingual Localization | `docs/phase-4-workflows-and-i18n.md` | ⏳ Planned |

---

## 🏛️ Custom Data Model Summary

### 7 Core Custom Objects
1. **Insurer** (`insurer`): Directory of 45+ Indian insurance companies with claim settlement ratios and portal URLs.
2. **Insurance Product** (`insuranceProduct`): Catalog of 62+ products with FY and renewal commission rates, entry age limits, and features.
3. **Policy** (`policy`): Central policy entity with 27 fields and 11-stage status lifecycle (`PROPOSAL` $\rightarrow$ `ACTIVE` $\rightarrow$ `PREMIUM_DUE` $\rightarrow$ `LAPSED` $\rightarrow$ `MATURED` $\rightarrow$ `CLAIMED`).
4. **Commission** (`commission`): Statement tracking, expected vs received payouts, TDS (5%), GST (18%), and variance statuses.
5. **Claim** (`claim`): Intimation, survey, hospital/vehicle detail tracking, and document checklists.
6. **KYC Record** (`kycRecord`): CKYC/eKYC records and DPDP consent tracking.
7. **Family Group** (`familyGroup`): Household grouping with aggregated life and health coverage gap metrics.

### 15 Extended Person Fields
- Date of Birth, Gender, Marital Status, Annual Income, Occupation, Smoker Status, PAN Number, Aadhaar Last 4, KYC Status, Preferred Language, Communication Preferences, PIN Code, Customer Since, DPDP Consent Status, DPDP Consent Date.

### 5 Application Roles
- `Default Admin Role`, `Agent Role`, `Sub-Agent / POSP Role`, `Back-Office Role`, `Viewer Role`.

---

## ⚙️ Logic Functions & Integrations Summary

1. **`check-expiring-policies`**: Daily 8 AM CRON scanner for policies expiring in 60/30/15/7 days.
2. **`send-whatsapp-reminder`**: Gupshup WhatsApp API integration endpoint for 1-click renewal payment links.
3. **`calculate-renewals-risk`**: Renewal lapse risk scoring engine (0-100 score + risk factors).
4. **`reconcile-commission-statement`**: Automated payout reconciliation matching received insurer statements against calculated expectations.
5. **`flag-commission-discrepancy`**: Real-time database event trigger alerting shortfall variances.
6. **`verify-ckyc`**: CKYC registry lookup simulation.
7. **`dpdp-consent-handler`**: DPDP Act 2023 compliance consent grant/withdrawal tracking with audit log references.

---

## 🔑 Key Engineering Rules
- **Constant Identifiers**: All entity UUIDs MUST be referenced from [`packages/insure-crm-app/src/constants/universal-identifiers.ts`](file:///Users/jenu/Desktop/projects/my-products/Build-10x-Version/twenty-sales-force-alternative/packages/insure-crm-app/src/constants/universal-identifiers.ts).
- **Testing**: Run `npx vitest run` in `packages/insure-crm-app/` to execute the test suite.
- **Documentation**: Whenever completing a feature/phase, update the corresponding `docs/phase-*.md` file and log it in this `MEMORY.md`.
