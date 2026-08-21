# Manager.io Inventory Guard Marketing Site

Target public domain:

**https://go-inventoryguard.adib.com.ng**

This is a static GitHub Pages site. It is separate from the production Inventory Guard application running on Cloudflare.

## Production application links

- Start / registration: https://mgr-inv-guard-production.uplight76.workers.dev/start
- Customer portal: https://mgr-inv-guard-production.uplight76.workers.dev/portal

## Recommended GitHub repository

Create a new repository such as:

`manager-inventory-guard-website`

Upload the contents of this package to the root of the repository.

## Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**.
5. Save.
6. In **Custom domain**, enter:

   `go-inventoryguard.adib.com.ng`

7. Save the custom domain.
8. When available, enable **Enforce HTTPS**.

A `CNAME` file is already included in this package.

## DomainKing DNS record

Because your DNS remains with DomainKing, create this DNS record there:

- **Type:** CNAME
- **Name / Host:** `go-inventoryguard`
- **Target / Value:** `ibdek.github.io`
- **TTL:** Default / Auto

Do not add `https://` to the CNAME value.

If your GitHub account username used for Pages is not `ibdek`, replace `ibdek.github.io` with your actual GitHub Pages hostname.

Do not create an A record for the same `go-inventoryguard` hostname.

## After DNS propagation

Open:

`https://go-inventoryguard.adib.com.ng`

The website's **Start Free Trial** buttons direct users to the live Cloudflare Inventory Guard onboarding page.

## Files

- `index.html` — main public website
- `styles.css` — all site styling
- `script.js` — mobile menu, FAQ and screenshot lightbox
- `terms.html`
- `privacy.html`
- `disclaimer.html`
- `CNAME` — GitHub Pages custom domain
- `.nojekyll`
- `robots.txt`
- `sitemap.xml`
- `assets/` — logo, favicon and product screenshots

## Important separation

This website does **not** contain Inventory Guard credentials, tenant tokens, secure `#igb` bindings or Worker source code.

Do not place secure Manager Custom Button URLs on the public website.


## Revised sequential customer workflow

The Customer Journey section now documents the production onboarding sequence in order,
including generation of the single-use Customer Portal linking code and creation of the
per-business Manager.io Access Token Secret under Settings → Access Tokens.

It also covers Manager API2 Service Connection, inventory-mode detection, required Custom
Buttons, Secure Business & Enable Multi-User Access, integrity baseline, controlled
transactions, the 10-successful-transaction trial and annual subscription.

Password recovery is an application feature and is intentionally not described on the marketing site until the secure recovery update is deployed.


## Workflow v3 correction

The public Customer Journey now explicitly includes the multi-location sequence:

1. First Detect & Synchronise Inventory check.
2. If MULTI_LOCATION: create or update Manager's standard Inventory Quantity by Location report using today's date and include every controlled active location.
3. Return to Inventory Setup & Synchronisation and run Detect & Synchronise Inventory again.
4. Proceed only after the current snapshot is successfully saved.
5. Return to the Customer Portal to install the business-specific controls, then secure multi-user access.

The Customer Portal copy-feedback change is an application update and is not advertised on the marketing site.


## Final production-aligned website update

This package reflects the tested v2.2.2 production behaviour:

- Forgot Password self-service is live and tested.
- Reset links are emailed from Inventory Guard and expire after 15 minutes.
- Customer Portal copy buttons visibly confirm success with `Copied ✓`.
- The Customer Journey contains the complete 12-step onboarding sequence, including
  creation/update of Manager's Inventory Quantity by Location report for MULTI_LOCATION
  businesses and the required return to Inventory Setup & Synchronisation afterward.
