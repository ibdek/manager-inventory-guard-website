# Manager.io Inventory Guard Marketing Site

Public marketing domain:

**https://go-inventoryguard.adib.com.ng**

This repository hosts the static GitHub Pages marketing site for **Manager.io Inventory Guard**. It is intentionally separate from the production Inventory Guard application hosted on Cloudflare.

## Production application

Production application:

- Start / registration: https://inventoryguard.adib.com.ng/start
- Customer Portal: https://inventoryguard.adib.com.ng/portal
- Inventory Setup & Synchronisation: https://inventoryguard.adib.com.ng/extension/location-sync
- Inventory Guard Control Centre: https://inventoryguard.adib.com.ng/extension/control-centre
- User Access Setup: https://inventoryguard.adib.com.ng/extension/access-control-setup
- Bypass & Integrity Monitor: https://inventoryguard.adib.com.ng/extension/integrity-monitor
- Subscription: https://inventoryguard.adib.com.ng/extension/subscription

The old workers.dev production address should not be used in customer-facing website links. The branded production domain is the canonical application origin.

## Onboarding model

The public site reflects the current simplified onboarding flow:

1. Customer registers a Manager.io business.
2. Customer signs in to the Customer Portal and generates the one-time linking code.
3. Customer manually creates only the bootstrap **Inventory Setup & Synchronisation** Custom Button under Manager Settings.
4. Customer links the correct Manager business with the one-time code.
5. Customer creates an authorised Manager Access Token and saves the Manager API2/base URL and token in Inventory Guard.
6. Customer clicks **Complete Setup**.
7. Inventory Guard automatically secures the business binding, detects inventory mode, synchronises inventory and locations, creates or refreshes today's **Inventory Quantity by Location** report where needed, and creates or updates the required controlled Custom Buttons.
8. The integrity baseline is initialised after existing Manager records are reviewed.
9. Where restricted Manager users are used, an authorised/full-access Manager administrator opens the Control Centre to refresh users and Divisions. The Customer Portal OWNER then assigns allowed Divisions and Inventory Locations before enabling User Access Control.
10. Users operate through the controlled transaction buttons.

## Ongoing structural changes

Routine structural reconciliation is automatic.

When Inventory Locations, Divisions or Manager users change, an authorised/full-access Manager administrator normally only needs to open the **Inventory Guard Control Centre**. Inventory Guard then reconciles the current structure.

Important rules:

- existing restricted-user assignments are preserved;
- newly discovered Divisions or Locations are not silently granted to restricted users;
- a later SINGLE_LOCATION → MULTI_LOCATION transition automatically introduces the Inventory Transfer workflow;
- **Synchronise & Repair Setup** is a recovery/maintenance tool and should not be presented as the routine process.

## Trial and annual plan

- Trial: **10 successful controlled transactions per Manager business**
- Annual plan: **US$37 per business for 365 days**
- Validation failures, refreshes, integrity scans, unsuccessful submissions and duplicate reconciliation of already-counted transactions do not consume trial usage.
- Selar payment claims can receive provisional annual access while administrator verification is pending.
- Current payment-verification grace period: **72 hours**.
- Assisted/direct onboarding and offline payment activation are also supported.

## GitHub Pages

The repository is configured for the custom domain:

**go-inventoryguard.adib.com.ng**

The `CNAME` file should remain in the repository root.

Expected DNS record:

- Type: CNAME
- Host: `go-inventoryguard`
- Target: `ibdek.github.io`

Do not place `https://` in the DNS CNAME value.

## Files

- `index.html` — main public website
- `styles.css` — site styling
- `script.js` — mobile navigation and FAQ/lightbox behaviour
- `terms.html`
- `privacy.html`
- `disclaimer.html`
- `CNAME`
- `robots.txt`
- `sitemap.xml`
- `assets/` — logo, favicon and historical/anonymised product screenshots

## Security separation

This public repository must never contain:

- Manager.io Access Token Secrets
- customer passwords
- Inventory Guard administrator credentials
- tenant installation-binding secrets
- secure business-specific Custom Button bindings
- Cloudflare secrets
- production D1 exports or backups

The public marketing website should link only to the canonical public production routes listed above.

## Screenshot note

Older anonymised screenshots remain in `assets/` for reference, but the main onboarding content is intentionally text-led because the Customer Portal and setup workflow changed materially from the earlier process. New screenshots should only be published after they have been anonymised and checked against the current production UI.
