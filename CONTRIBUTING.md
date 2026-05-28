# Contributing

Thanks for helping improve the MakePay API artifacts.

## Development

```bash
npm install
npm run validate
```

## Pull Requests

- Keep OpenAPI operation IDs stable unless an endpoint is intentionally
  replaced.
- Add or update a Postman request when adding a new endpoint group.
- Use example values only. Never commit live merchant credentials, webhook
  secrets, wallet private keys, customer data, or production payload dumps.
- Keep compatibility with generators that consume OpenAPI 3.1.

## Release Checklist

- `npm run validate` passes.
- The Postman collection imports without JSON errors.
- New endpoint descriptions include authentication, idempotency, and webhook
  behavior where relevant.
- Branch protection and required validation checks are enabled for `main`.
