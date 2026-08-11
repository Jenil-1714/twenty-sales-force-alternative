# Phase 1: Core Data Model & Seed Engine Documentation

> **Status**: ✅ Completed
> **Package**: [`packages/insure-crm-app/`](file:///Users/jenu/Desktop/projects/my-products/Build-10x-Version/twenty-sales-force-alternative/packages/insure-crm-app)

---

## Executive Summary
Phase 1 established the foundation for InsureCRM as a Twenty App package. It defines the core domain model for Indian insurance agents and brokerages, extending the standard Twenty CRM schema with 7 custom insurance objects, 15 Person fields, 12 entity relations, 5 roles, 8 table views, 8 nav items, 2 AI agents, 2 skills, and seed data for 45 Indian insurance companies and 62 products.

---

## 🏛️ Custom Object Definitions

### 1. Insurer (`insurer.object.ts`)
- **Universal Identifier**: `3fbd550a-8a62-4f38-9cf7-4f6c1251910a`
- **Label Identifier**: `name`
- **Fields**:
  - `name` (TEXT) — Full legal name of insurer
  - `shortName` (TEXT) — Common abbreviation (e.g., LIC, HDFC Life)
  - `irdaiLicenseNumber` (TEXT) — IRDAI registration number
  - `category` (SELECT) — `Life`, `General`, `Health`, `StandaloneHealth`
  - `logo` (FILES) — Insurer brand mark
  - `contactEmail` (EMAILS) — Agency helpdesk email
  - `contactPhone` (PHONES) — Toll-free / portal support phone
  - `portalUrl` (LINKS) — Agent portal login URL
  - `commissionRates` (RAW_JSON) — Default rate matrices
  - `claimSettlementRatio` (NUMBER) — Published IRDAI CSR %
  - `address` (ADDRESS) — Corporate headquarters address
  - `paymentCycle` (SELECT) — `Monthly`, `Quarterly`

### 2. Insurance Product (`insurance-product.object.ts`)
- **Universal Identifier**: `f9d3a7ea-ff1a-4c92-acbb-bfd5494d4d68`
- **Label Identifier**: `productName`
- **Fields**:
  - `productName` (TEXT) — Product title
  - `productCode` (TEXT) — IRDAI product code (UIN)
  - `category` (SELECT) — `Life`, `Health`, `Motor`, `Fire`, `Marine`, `Travel`, `PA`
  - `subCategory` (SELECT) — `Term`, `Endowment`, `ULIP`, `Mediclaim`, `TopUp`, `CriticalIllness`, `Comprehensive`, `ThirdParty`
  - `commissionFirstYear` (NUMBER) — First-year commission % (e.g. 25-35%)
  - `commissionRenewal` (NUMBER) — Renewal commission % (e.g. 5-7.5%)
  - `minEntryAge` (NUMBER) — Minimum entry age
  - `maxEntryAge` (NUMBER) — Maximum entry age
  - `minSumAssured` (CURRENCY) — Minimum coverage limit
  - `maxSumAssured` (CURRENCY) — Maximum coverage limit
  - `features` (RICH_TEXT) — Product brochure summary and highlights
  - `brochureUrl` (LINKS) — Downloadable marketing brochure
  - `isActive` (BOOLEAN) — Active sales status

### 3. Policy (`policy.object.ts`)
- **Universal Identifier**: `e50c4bb2-ccbf-49f3-8fbb-5ba60f0cb8bc`
- **Label Identifier**: `policyNumber`
- **Fields (27 Total)**:
  - `policyNumber` (TEXT)
  - `policyType` (SELECT): `Life`, `Health`, `Motor`, `Fire`, `Marine`, `Travel`, `Liability`, `Crop`
  - `policySubType` (SELECT): `Term`, `Endowment`, `ULIP`, `WholeLife`, `Mediclaim`, `TopUp`, `CriticalIllness`, `Comprehensive`, `ThirdParty`, `PA`
  - `status` (SELECT): `PROPOSAL`, `PENDING_ISSUANCE`, `ACTIVE`, `PREMIUM_DUE`, `LAPSED`, `REVIVAL_PENDING`, `PAID_UP`, `SURRENDERED`, `MATURED`, `CLAIMED`, `CANCELLED`
  - `sumAssured` (CURRENCY)
  - `premium` (CURRENCY)
  - `premiumFrequency` (SELECT): `Monthly`, `Quarterly`, `HalfYearly`, `Annual`, `Single`
  - `startDate`, `endDate`, `maturityDate`, `nextPremiumDueDate`, `nextRenewalDate`, `proposalDate` (DATE_TIME)
  - `policyTerm`, `premiumPayingTerm` (NUMBER)
  - `nominees`, `riders`, `vehicleDetails`, `healthDetails` (RAW_JSON)
  - `sourceChannel` (SELECT): `Direct`, `Referral`, `Online`, `WalkIn`, `POSP`, `Bancassurance`, `DSA`
  - `commissionRate` (NUMBER)
  - `paymentMode` (SELECT): `Online`, `Offline`, `UPI`, `AutoDebit`, `NACH`
  - `loginNumber` (TEXT)
  - `documents` (FILES)
  - `priority` (SELECT): `High`, `Medium`, `Low`

### 4. Commission (`commission.object.ts`)
- **Fields**: `statementReference`, `commissionType`, `policyYear`, `expectedAmount`, `receivedAmount`, `variance`, `varianceStatus` (`Match`, `Shortfall`, `Excess`, `Pending`), `commissionRate`, `premiumBase`, `expectedPaymentDate`, `paymentDate`, `tdsAmount`, `gstOnCommission`, `netAmount`, `subAgentShare`, `status`.

### 5. Claim (`claim.object.ts`)
- **Fields**: `claimNumber`, `claimType`, `incidentDate`, `intimationDate`, `claimAmount`, `settledAmount`, `status` (`INTIMATED`, `DOCS_PENDING`, `DOCS_SUBMITTED`, `UNDER_SURVEY`, `UNDER_ASSESSMENT`, `APPROVED`, `REJECTED`, `SETTLED`, `APPEAL`), `rejectionReason`, `requiredDocuments`, `surveyorDetails`, `tpaDetails`, `hospitalDetails`, `tatDays`, `settlementDate`, `documents`, `notes`.

### 6. KYC Record (`kyc-record.object.ts`)
- **Fields**: `documentNumber`, `kycType`, `verificationStatus`, `verifiedDate`, `expiryDate`, `ckycNumber`, `verificationMethod`, `documentFront`, `documentBack`, `dpdpConsentCaptured`, `dpdpConsentDate`.

### 7. Family Group (`family-group.object.ts`)
- **Fields**: `familyName`, `members`, `totalAnnualIncome`, `totalCoverLife`, `totalCoverHealth`, `coverageGapLife`, `coverageGapHealth`, `totalAnnualPremium`, `crossSellOpportunities`, `address`.

---

## 👤 Extended Person Schema
Implemented as individual field manifests in `src/fields/person-*.field.ts` targeting `STANDARD_OBJECT.person.universalIdentifier`:
1. `personDateOfBirth` (DATE_TIME)
2. `personGender` (SELECT: Male, Female, Other)
3. `personMaritalStatus` (SELECT: Single, Married, Divorced, Widowed)
4. `personAnnualIncome` (CURRENCY)
5. `personOccupation` (TEXT)
6. `personSmokerStatus` (SELECT: Smoker, NonSmoker, Former)
7. `personPanNumber` (TEXT)
8. `personAadhaarLastFour` (TEXT)
9. `personKycStatus` (SELECT: Pending, Verified, Expired)
10. `personPreferredLanguage` (SELECT: English, Hindi, Tamil, Telugu, Marathi, Bengali, Kannada, Gujarati, Malayalam)
11. `personCommunicationPref` (MULTI_SELECT: WhatsApp, SMS, Email, Phone)
12. `personPinCode` (TEXT)
13. `personCustomerSince` (DATE_TIME)
14. `personDpdpConsentStatus` (SELECT: NotRequested, Consented, Withdrawn)
15. `personDpdpConsentDate` (DATE_TIME)

---

## 🔗 Entity Relations (12 Fields)
- `policy-insurer.relation.ts` & `insurer-policies.relation.ts`: Policy (M:1) $\leftrightarrow$ Insurer (1:M)
- `policy-product.relation.ts` & `product-policies.relation.ts`: Policy (M:1) $\leftrightarrow$ InsuranceProduct (1:M)
- `commission-policy.relation.ts` & `policy-commissions.relation.ts`: Commission (M:1) $\leftrightarrow$ Policy (1:M)
- `commission-insurer.relation.ts` & `insurer-commissions.relation.ts`: Commission (M:1) $\leftrightarrow$ Insurer (1:M)
- `claim-policy.relation.ts` & `policy-claims.relation.ts`: Claim (M:1) $\leftrightarrow$ Policy (1:M)
- `product-insurer.relation.ts` & `insurer-products.relation.ts`: InsuranceProduct (M:1) $\leftrightarrow$ Insurer (1:M)

---

## 🔐 Roles & RBAC
Defined in `src/roles/`:
1. `default-role.ts`: Full read/update, tool access, file upload, agent assignment.
2. `agent-role.ts`: Lead & policy owner access.
3. `sub-agent-role.ts`: Restricted POSP sub-agent access.
4. `back-office-role.ts`: Read/update all records, commission & claim settlement ops.
5. `viewer-role.ts`: Read-only access.

---

## 📊 Seed Engine Data
- `src/seed-data/insurers.json`: 45 top Indian insurers (LIC, HDFC Life, ICICI Pru, SBI Life, Max Life, Star Health, Care Health, Niva Bupa, Go Digit, Acko, etc.).
- `src/seed-data/products.json`: 62 popular products across Life, Health, Motor, Fire, Marine, Travel.
