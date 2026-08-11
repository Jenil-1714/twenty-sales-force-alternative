# InsureCRM

![InsureCRM Logo Placeholder](#)

**AI-native Insurance Growth OS for Indian agents & brokers**

InsureCRM is built on top of [Twenty](https://twenty.com) and tailored for the unique needs of the Indian insurance sector. It empowers insurance agents, brokers, and agencies to manage clients, track policies, handle claims, calculate commissions, and automate renewals all in one place.

## Core Modules

1. **Client Management (CRM)**: Track individual clients, corporate clients, leads, and follow-ups.
2. **Policy Management**: Store policy details across Life, General, and Health categories with accurate dates, premium amounts, and insurer data.
3. **Product Catalog**: A comprehensive database of Indian insurance products with default commission rates.
4. **Commission Tracking**: Calculate and track first-year (FYC) and renewal commissions automatically.
5. **Claims Management**: Log claims, track claim statuses, and assist clients in quick settlements.
6. **Task & Renewal Automation**: Automated reminders for premium due dates, policy expirations, and follow-ups.

## Getting Started

1. **Install Dependencies**:
   ```bash
   yarn install
   ```

2. **Setup Environment**:
   Copy `.env.example` to `.env` (if provided) and fill in the required variables.

3. **Start Development Server**:
   ```bash
   yarn dev
   ```

4. **Run Tests**:
   ```bash
   yarn test
   ```

## Architecture Overview

InsureCRM is developed as an application within the Twenty ecosystem. It defines custom objects, fields, views, and automated logic functions to manage insurance workflows seamlessly. The core objects include:
- `Client`
- `Policy`
- `Insurer`
- `Product`
- `Claim`
- `Commission`

## Tech Stack

- **Framework**: Twenty SDK
- **Language**: TypeScript
- **Testing**: Vitest

## License

This project is licensed under the AGPL-3.0 License. See the [LICENSE](LICENSE) file for more details.
