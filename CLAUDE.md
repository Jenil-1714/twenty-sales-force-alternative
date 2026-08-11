# InsureCRM (Twenty CRM Monorepo) — Claude Guidelines & Project Rules

## Project Overview
InsureCRM is an AI-native Insurance Growth OS designed for Indian insurance agents, POSPs, and brokerages. Built as a Twenty SDK App inside the Twenty CRM monorepo at `packages/insure-crm-app/`.

---

## Required Session Start Routine
At the start of every session or when analyzing project state:
1. **Read Project Memory**: Read `docs/MEMORY.md` to get the latest architecture, state, and index of completed phases.
2. **Consult Phase Docs**: Read specific phase documentation in `docs/phase-*.md` relevant to your current task.
3. **Check Task Tracker**: Inspect `.agents/task.md` or artifact `task.md` for active checklists.

---

## Mandatory Post-Phase / Feature Documentation Rule
> ⚠️ **CRITICAL DIRECTIVE**: Upon completing ANY phase, feature, functionality, API integration, or business logic implementation:
> 1. **Create or Update Phase Doc**: Write a dedicated, comprehensive documentation markdown file in `docs/` (e.g., `docs/phase-1-core-data-model.md`, `docs/phase-2-logic-functions.md`, `docs/feature-<name>.md`).
> 2. **Summarize Everything**: Include detailed data schemas, function signatures, workflow triggers, edge cases, integration contracts, and developer usage examples.
> 3. **Update MEMORY.md**: Record the completion, summarize key decisions, and add clickable file links to the new doc in `docs/MEMORY.md`.

---

## Coding & Architectural Standards

### 1. Twenty SDK Conventions
- **App Location**: All InsureCRM code lives inside `packages/insure-crm-app/src/`.
- **SDK Imports**: Import define utilities from `twenty-sdk/define` and logic function types from `twenty-sdk/logic-function`.
- **Universal Identifiers**:
  - EVERY entity (object, field, view, nav item, role, agent, skill, logic function) MUST have a valid, unique `UUID v4` universalIdentifier.
  - Store shared UUIDs in `src/constants/universal-identifiers.ts`.
- **Field Definitions**:
  - Use camelCase for field names.
  - For `SELECT` / `MULTI_SELECT` fields, ALWAYS provide `options` array with `{ id: UUID, value: 'STRING', label: 'Label', color: 'colorName', position: N }`.
  - Wrap string default values in single quotes (e.g., `'PROPOSAL'`).
- **Icons**: Use valid Tabler Icon names (e.g., `IconShieldCheck`, `IconCurrencyRupee`, `IconUsers`).

### 2. General Engineering Principles
- **No Guessing**: Inspect authoritative source files before writing code consuming schemas or types.
- **Error Tracebacks**: Base diagnostic hypotheses strictly on empirical error logs.
- **No Symptom Masking**: Fix underlying root causes instead of adding silent try/except fallbacks or swallowing errors.
- **Verification**: Run `npx vitest run` or type checks to verify changes before declaring success.

---

## Commands & Scripts
```bash
# App Directory: packages/insure-crm-app
yarn twenty dev            # Launch Twenty dev mode with app sync
npx vitest run             # Run unit test suite
```
