# Privacy Checklist

Run this before publishing, sharing, or sending your assistant workspace to someone else.

Light Agent Kit is public-safe. Your real assistant workspace is personal. Keep that boundary clear.

## Public-Safe

These are safe to include in a public template:

- Folder structure.
- Blank templates.
- Fictional examples.
- Onboarding prompts.
- Skills.
- Setup guides.
- General product notes.

## Keep Private

Keep these in a local folder or private repo:

- Real profile notes.
- Goals that reveal sensitive personal context.
- Daily logs.
- Client names, client strategy, and private project details.
- Health, finance, relationship, or family notes.
- Email addresses, phone numbers, account IDs, and calendar IDs.
- API keys, tokens, passwords, recovery codes, and secrets.
- Private transcripts.
- Raw source notes from private calls, courses, communities, or client material.
- Research notes that include private screenshots, copied messages, or personal observations.
- Local machine paths that reveal personal folders.
- Anything you would feel uneasy seeing indexed by a search engine.

## Before You Publish

Check each file:

- Does it contain a real name that should stay private?
- Does it mention a client, employer, friend, family member, or private community?
- Does it include a phone number, email, address, account ID, token, or password?
- Does it expose health, money, relationship, legal, or family details?
- Does it include raw transcripts or private chat logs?
- Does a source, brief, or concept page reveal private context from a person, client, paid course, or community?
- Does it include local paths from your computer?
- Does the example data clearly say it is fictional?

## Secrets Check

Search for common secret words before publishing:

```text
api_key
apikey
token
secret
password
passwd
credential
private_key
client_secret
bot_token
webhook
```

If you find one, remove it from the repo and rotate the secret in the original service.

Rotate means: create a new key or token, then disable the exposed one.

## App Access Choices

Use the narrowest useful access level.

- No access: safest starting point.
- Read-only: useful for reminders and awareness.
- Write access: powerful, best used with clear approval rules.

Good approval rules:

- Ask before sending messages or email.
- Ask before changing calendar events.
- Ask before publishing.
- Ask before deleting.
- Ask before spending money.
- Ask before using private accounts or secrets.

## Public Repo Rule

Your public repo should show the method and keep your private life in your own workspace.

Use fictional examples. Keep real notes in your own workspace.

## Knowledge Base Rule

Public knowledge templates are fine.

Private research belongs in your private workspace when it includes:

- Personal notes.
- Client or company details.
- Paid course material.
- Private community posts.
- Chat transcripts.
- Screenshots.
- Anything copied from a source with sharing limits.

When in doubt, publish the structure and keep the source material private.

## If You Feel Unsure

Keep it private for now.

You can still get the value of Light Agent Kit with local files, a private folder, or a private repo.
