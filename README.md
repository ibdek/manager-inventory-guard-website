# Manager.io Inventory Guard Marketing Site

Public marketing domain:

**https://go-inventoryguard.adib.com.ng**

This repository hosts the static GitHub Pages marketing site for **Manager.io Inventory Guard**. It is intentionally separate from the production Inventory Guard application hosted on Cloudflare.

Current production baseline: **v2.3.6**.

## Production application

Canonical production application:

- Inventory Setup & Synchronisation: https://inventoryguard.adib.com.ng/extension/location-sync
- Inventory Guard Control Centre: https://inventoryguard.adib.com.ng/extension/control-centre
- User Access Setup: https://inventoryguard.adib.com.ng/extension/access-control-setup
- Bypass & Integrity Monitor: https://inventoryguard.adib.com.ng/extension/integrity-monitor
- Subscription: https://inventoryguard.adib.com.ng/extension/subscription

The old workers.dev production address must not be used in customer-facing website links.

## v2.3.6 self-start onboarding model

The normal new-business path no longer requires an Inventory Guard linking code first.

1. In the target Manager.io business, create one bootstrap Custom Button named **Inventory Setup & Synchronisation** pointing to:
   https://inventoryguard.adib.com.ng/extension/location-sync
2. Open that button inside the correct Manager business.
3. Enter:
   - Manager API2 endpoint;
   - administrator-level Manager Access Token Secret;
   - contact name;
   - contact email;
   - contact phone.
4. Click **Register Business & Start Free Trial**.
5. Inventory Guard verifies the Manager API2 connection, creates the tenant, creates the secure installation binding and starts the 10-successful-transaction trial automatically.
6. Continue with **Complete Setup**.
7. Inventory Guard detects SINGLE_LOCATION or MULTI_LOCATION operation, synchronises inventory and locations, creates or refreshes the required stock report where necessary, and creates/repairs the controlled Custom Buttons.
8. Review the print-theme selections.
9. Initialise the Bypass & Integrity Monitor baseline after reviewing existing Manager records.
10. If restricted Manager users are used, configure User Access Setup and then enable enforcement when assignments are ready.

### Existing business / Assisted Onboarding fallback

The one-time linking-code flow remains available for:

- an already-registered Inventory Guard business;
- Assisted Onboarding;
- recovery cases where the tenant already exists.

The linking code is entered under **Already registered or using Assisted Onboarding? → Link Existing Business**.

## Inventory behaviour

### SINGLE_LOCATION

Inventory Guard uses Manager's built-in **Default/Unspecified** location automatically.

Where direct API2 inventory quantity is unavailable or unreliable, Inventory Guard uses the Manager stock-report path automatically so a missing API quantity is not treated as zero stock.

### MULTI_LOCATION

Inventory Guard synchronises active custom Inventory Locations and maintains the **Inventory Quantity by Location** reporting/control path.

A later SINGLE_LOCATION → MULTI_LOCATION transition is reconciled automatically and introduces the Controlled Inventory Transfer workflow.

## Ongoing structural changes

When Inventory Locations, Divisions or Manager users change, an authorised/full-access Manager administrator normally opens the **Inventory Guard Control Centre**. Inventory Guard reconciles the current structure.

Rules:

- existing restricted-user assignments are preserved;
- removed/inactive Manager users are excluded from User Access Setup;
- newly discovered Divisions or Locations are not silently granted to restricted users;
- restricted operational users stay inside the controlled transaction pages and do not receive a Back to Inventory Guard Control Centre route;
- **Synchronise & Repair Setup** is a recovery/maintenance tool, not a routine operating step.

## Trial and annual subscription

- Trial: **10 successful controlled transactions per Manager business**
- Annual plan: **US$37 per business for 365 days**
- Validation failures, refreshes, integrity scans, unsuccessful submissions and duplicate reconciliation of already-counted transactions do not consume trial usage.

### Selar payment workflow

1. Customer opens **Subscription** inside the linked Manager business.
2. Customer clicks **Subscribe Now** and pays through the configured Selar checkout.
3. After payment, the customer returns to Inventory Guard and submits the genuine Selar receipt/order/payment reference.
4. A customer-submitted Selar claim receives provisional annual access while administrator verification is pending.
5. The administrator verifies the payment against the Selar dashboard.
6. If the customer paid but did not submit the return form, or submitted an incorrect reference, the customer can notify support by WhatsApp/email. After independently confirming the payment in Selar, the administrator can use the audited **Selar administrator override**.
7. The override bypasses the missed/incorrect return form only; it does not bypass payment verification.
8. Verified Selar records remain visible in **Selar payment verification queue / history**.

The current pending-verification grace period for customer-submitted Selar claims is **72 hours**.

### Replacement business

Where eligible, unused annual access can be transferred from a permanently replaced Manager business to a fully onboarded replacement business without extending the original paid-through date.

## Administrator UI notes

Current v2.3.6 administration includes:

- Selar payment verification queue / history;
- Selar administrator override;
- Offline / direct payments;
- replacement business / subscription transfer;
- Customers & onboarding with business count plus Expand / Collapse.

These administrator-only controls should be described publicly only at a workflow level. Never publish administrator credentials, tenant secrets or production database information.

## GitHub Pages

The repository is configured for the custom domain:

**go-inventoryguard.adib.com.ng**

The `CNAME` file must remain in the repository root.

Expected DNS record:

- Type: CNAME
- Host: `go-inventoryguard`
- Target: `ibdek.github.io`

Do not place `https://` in the DNS CNAME value.

## Security separation

This public repository must never contain:

- Manager.io Access Token Secrets;
- Inventory Guard administrator credentials;
- tenant installation-binding secrets;
- secure business-specific Custom Button bindings;
- Cloudflare secrets;
- production D1 exports or backups.

## Release note

The public site must identify the current production baseline as **v2.3.6** and must not describe linking-code onboarding as the normal new-business workflow.
