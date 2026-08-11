# InsureCRM — Antigravity Agent Guidelines & Operating Rules

## Project Context
InsureCRM is an AI-native Insurance Growth OS designed for Indian insurance agents, POSPs, and brokerages. Built as a Twenty SDK App inside the Twenty CRM monorepo at `packages/insure-crm-app/`.

---

## ⚡ Session & Message Routine (Token-Optimized Context)
Whenever starting a turn or analyzing the codebase:
1. **Read Memory First**: Inspect `docs/MEMORY.md` to get a concise index of active context, database schemas, and phase status without loading massive files.
2. **Consult Target Documentation**: When working on specific modules, read the relevant phase doc in `docs/phase-*.md`.
3. **Check Active Task Tracker**: Review `.agents/task.md` or artifact `task.md`.

---

## 📜 Mandatory Documentation Rule for Completed Phases & Features
> ⚠️ **IMPORTANT**: At the end of every completed Phase, Feature, Functionality, Integration, or Business Logic implementation:
> 1. **Document the Work**: Create or update a dedicated summary file in `docs/` (e.g. `docs/phase-1-core-data-model.md`, `docs/phase-2-logic-functions.md`, `docs/phase-3-front-components.md`).
> 2. **Include Complete Details**: Provide data schemas, field types, SDK signatures, workflow triggers, edge-case handlers, and developer/agent usage examples.
> 3. **Sync Memory**: Update `docs/MEMORY.md` with links and high-level summaries so future agent turns and human developers have complete context.

---

## 🛠️ Twenty SDK Coding Guidelines

### Custom Objects & Fields
- All InsureCRM code lives in `packages/insure-crm-app/src/`.
- Every entity MUST have a valid, unique `UUID v4` for `universalIdentifier`.
- Export shared identifiers in `src/constants/universal-identifiers.ts`.
- Field names: `camelCase`. Object names: `nameSingular`, `namePlural` in `camelCase`.
- `SELECT` / `MULTI_SELECT` options MUST specify `{ id, value, label, color, position }`.
- Literal default values for `SELECT` MUST be single-quoted string literals (e.g., `'PROPOSAL'`).

### Logic Functions & Triggers
- Use `defineLogicFunction` from `twenty-sdk/define`.
- Supported triggers:
  - `cronTriggerSettings`: `{ pattern: '0 8 * * *' }`
  - `httpRouteTriggerSettings`: `{ path: '/renewals/...', httpMethod: 'POST', isAuthRequired: true }`
  - `databaseEventTriggerSettings`: `{ objectUniversalIdentifier: OBJ_ID, event: 'created' | 'updated' | 'deleted' }`

### Front Components
- Use `defineFrontComponent` with micro-frontend React components.
- Style with inlined theme tokens or standard CSS-in-JS.

---

## 🧪 Quality & Verification Rules
1. **Run Unit Tests**: Execute `npx vitest run` in `packages/insure-crm-app/` to verify logic before concluding.
2. **No Dummy Code / Symptom Masking**: Never comment out broken code or add empty fallback returns to pass tests.
3. **Preserve Documentation**: Maintain comments and docstrings in existing files.
