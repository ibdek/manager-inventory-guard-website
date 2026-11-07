# Manager.io Inventory Guard Marketing Site

Public marketing domain:

**https://go-inventoryguard.adib.com.ng**

This repository hosts the static GitHub Pages marketing site for **Manager.io Inventory Guard**. It is intentionally separate from the production Inventory Guard application hosted on Cloudflare.

Current production baseline: **v2.3.5**.

## Production application

Production application:

- Start / registration: https://inventoryguard.adib.com.ng/start
- Inventory Setup & Synchronisation: https://inventoryguard.adib.com.ng/extension/location-sync
- Inventory Guard Control Centre: https://inventoryguard.adib.com.ng/extension/control-centre
- User Access Setup: https://inventoryguard.adib.com.ng/extension/access-control-setup
- Bypass & Integrity Monitor: https://inventoryguard.adib.com.ng/extension/integrity-monitor
- Subscription: https://inventoryguard.adib.com.ng/extension/subscription

The old workers.dev production address should not be used in customer-facing website links. The branded production domain is the canonical application origin.

## Onboarding model

The public site reflects the current simplified onboarding flow:

1. Customer registers a Manager.io business.
2. The business obtains its one-time linking code during registration/onboarding.
3. The administrator manually creates only the bootstrap **Inventory Setup & Synchronisation** Custom Button under Manager Settings.
4. The administrator links the correct Manager business with the one-time code.
5. The administrator creates an authorised Manager Access Token and saves the Manager API2/base URL and token in Inventory Guard.
6. The administrator clicks **Complete Setup**.
7. Inventory Guard automatically secures the business binding, detects inventory mode, synchronises inventory and locations, creates or refreshes today's **Inventory Quantity by Location** report where needed, and creates or updates the required controlled Custom Buttons.
8. The integrity baseline is initialised after existing Manager records are reviewed.
9. Where restricted Manager users are used, an authorised/full-access Manager administrator opens User Access Setup from inside the Manager business, refreshes active users and Divisions, assigns allowed Divisions and Inventory Locations, and enables User Access Control when ready.
10. Users operate through the controlled transaction buttons.

## Ongoing structural changes

Routine structural reconciliation is automatic.

When Inventory Locations, Divisions or Manager users change, an authorised/full-access Manager administrator normally only needs to open the **Inventory Guard Control Centre**. Inventory Guard then reconciles the current structure.

Important rules:

- existing restricted-user assignments are preserved;
- only active Manager users are presented in User Access Setup; removed/inactive users are excluded;
- newly discovered Divisions or Locations are not silently granted to restricted users;
- a later SINGLE_LOCATION → MULTI_LOCATION transition automatically introduces the Inventory Transfer workflow;
- restricted operational users stay inside the controlled transaction pages and do not receive a Back to Inventory Guard Control Centre navigation route;
- **Synchronise & Repair Setup** is a recovery/maintenance tool and should not be presented as the routine process.

## Trial and annual plan

- Trial: **10 successful controlled transactions per Manager business**
- Annual plan: **US$37 per business for 365 days**
- Validation failures, refreshes, integrity scans, unsuccessful submissions and duplicate reconciliation of already-counted transactions do not consume trial usage.
- Annual access is administered from inside the linked Manager business through the configured subscription/payment process.
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
- Inventory Guard administrator credentials
- tenant installation-binding secrets
- secure business-specific Custom Button bindings
- Cloudflare secrets
- production D1 exports or backups

The public marketing website should link only to the canonical public production routes listed above.

## Screenshot note

Older anonymised screenshots remain in `assets/` for reference, but the main onboarding content is intentionally text-led because the setup and in-business administration workflow changed materially from the earlier process. New screenshots should only be published after they have been anonymised and checked against the current production UI.
