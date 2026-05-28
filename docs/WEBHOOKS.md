# Webhook Verification

MakePay webhook deliveries are at-least-once. Consumers must make processing
idempotent by `deliveryId` and by the local payment/session identifier.

## Headers

- `X-MakePay-Event`
- `X-MakePay-Delivery-Id`
- `X-MakePay-Delivery-Group-Id`
- `X-MakePay-Delivery-Origin`
- `X-MakePay-Attempt`
- `X-MakePay-Signature`

## Signature Format

```text
t=<unix timestamp>,v1=<hex hmac sha256>
```

The signed payload is:

```text
<timestamp>.<raw body>
```

## Required Handling

1. Read the exact raw request body before JSON parsing.
2. Parse `t` and `v1` from `X-MakePay-Signature`.
3. Reject timestamps outside a short tolerance window, usually five minutes.
4. Compute HMAC-SHA256 using the MakePay webhook secret.
5. Compare the expected digest with `v1` in constant time.
6. Verify the event references a known payment link or session.
7. Deduplicate by `deliveryId`.
8. Treat `status_changed` with `session.status = complete` as terminal payment
   completion.

## Terminal and Attention States

Terminal success:

- `complete`

Terminal failure or follow-up:

- `failed`
- `expired`
- `underpaid`
- `cancelled`

Overpayments are represented by `session.settlementAmount.classification` and
can still have `session.status = complete`.
