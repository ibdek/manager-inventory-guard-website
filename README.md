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
