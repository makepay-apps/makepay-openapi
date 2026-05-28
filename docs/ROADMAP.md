# MakePay OpenAPI Roadmap

## Purpose

This repository is priority rank 1 in the MakePay integration roadmap. It
provides the shared contract used by SDKs, platform plugins, automation apps,
agent tools, and partner implementations.

## Current Scope

- Payment links and donation links.
- Public hosted checkout flow.
- Customers and customer portal links.
- Subscriptions.
- POS terminals.
- Products and Simple Shop.
- Branding and custom domains.
- Operational settings, destination assets, and webhook request logs.
- Bookkeeping invoices, expenses, documents, OCR, and reconciliation links.
- MakePay webhook event schema.

## Near-Term Milestones

1. Publish repository and enable branch protection.
2. Add generated HTML documentation through Redocly or Scalar.
3. Add SDK generator smoke tests for C#/.NET, Kotlin, Dart, Ruby, and PHP.
4. Add Postman examples for refunds and manual resolution once public routes are
   finalized.
5. Version releases with GitHub tags and changelog entries.

## Acceptance Criteria

- `npm run validate` passes locally and in GitHub Actions.
- The Postman collection and environment parse as JSON.
- Every endpoint exposed by the current public SDKs has an OpenAPI path.
- No committed artifact contains live API credentials or private merchant data.
- `main` requires pull requests and validation before direct updates.

## Integration Roadmap Dependency

This repo should be completed before building the next integration repositories:

- C#/.NET SDK.
- MCP server.
- Laravel package.
- ASP.NET Core starter.
- Kotlin JVM SDK.
- Android Kotlin SDK.
- Dart/Flutter package.
- Zapier, Make.com, and n8n integrations.
