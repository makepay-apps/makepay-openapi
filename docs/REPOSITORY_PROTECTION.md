# Repository Protection

The repository should use these GitHub settings after the first push.

## General Settings

- Default branch: `main`.
- Visibility: public.
- Automatically delete head branches after merge.
- Enable vulnerability alerts and Dependabot alerts.
- Use squash merge by default.

## Branch Protection for `main`

Require:

- Pull request before merging.
- At least one approving review.
- Dismiss stale approvals when new commits are pushed.
- Conversation resolution before merge.
- Status check `validate` before merge.
- Branches to be up to date before merge.
- Linear history.
- Signed commits when organization policy supports it.
- Restrict force pushes and branch deletion.

## API Setup Commands

After pushing `main`, branch protection can be applied with GitHub's REST API.
The exact required status-check context may be adjusted after the first
workflow run reports its final check name.

```bash
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  /repos/makecryptoio/makepay-openapi/branches/main/protection \
  -f required_status_checks[strict]=true \
  -f required_pull_request_reviews[required_approving_review_count]=1 \
  -f required_pull_request_reviews[dismiss_stale_reviews]=true \
  -f enforce_admins=true \
  -f required_linear_history=true \
  -f allow_force_pushes=false \
  -f allow_deletions=false \
  -f required_conversation_resolution=true
```

Then add the concrete `validate` check context once the first run has completed.
