# MakePay OpenAPI and Postman

Canonical OpenAPI and Postman artifacts for MakePay partner, hosted checkout,
webhook, Simple Shop, subscription, POS, product, branding, and bookkeeping
APIs.

## Contents

- `openapi/makepay.openapi.yaml` - OpenAPI 3.1 description for MakePay.
- `postman/makepay.postman_collection.json` - Postman collection with common
  merchant, checkout, and bookkeeping workflows.
- `postman/makepay.postman_environment.json` - Postman environment variables.
- `docs/ROADMAP.md` - planning and ownership notes for this integration.
- `docs/REPOSITORY_PROTECTION.md` - required GitHub repository settings.

## Quick Start

```bash
npm install
npm run validate
```

Import the collection and environment into Postman, then set:

- `makepayKeyId`
- `makepayKeySecret`
- `paymentLinkUid` after creating a test payment link
- `sessionId` after quoting a public checkout session

## Authentication

Server-side partner API calls use API key headers:

```http
X-MakeCrypto-Key-Id: <key id>
X-MakeCrypto-Key-Secret: <key secret>
```

The API also accepts `X-MakePay-Key-Id` / `X-MakePay-Key-Secret` and
`X-Api-Key` / `X-Api-Secret` aliases for compatible integrations.

Never expose key secrets in browser code, mobile apps, public repositories, or
client-side logs.

## Webhooks

MakePay sends signed webhook events with:

```http
X-MakePay-Signature: t=<unix timestamp>,v1=<hmac sha256 hex digest>
```

Verify the signature against:

```text
<timestamp>.<raw request body>
```

using the merchant webhook secret. Reject stale timestamps, compare signatures
in constant time, and deduplicate deliveries by `deliveryId`.

## Publishing

This repository is intended to be published as `makecryptoio/makepay-openapi`.
The `main` branch should require the `validate` GitHub Actions workflow before
merge.

Maintainer: Ethan Carter (`makepayio`).
