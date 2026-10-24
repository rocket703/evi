# Atelier Haarkunst

Website für Evelyn Selbig / Atelier Haarkunst, Magdeburg-Salbke – [Astro](https://astro.build) (statisch), gehostet auf einem eigenen vServer (Caddy, siehe `deploy/Caddyfile`); Nameserver, Formulare und E-Mail-Versand über Mailtory. Ersetzt die alte WordPress-Seite unter `atelier-haarkunst.de`.

## Lokal entwickeln

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statischer Build nach dist/ (+ CSP per scripts/csp.mjs)
npm run preview  # Build ansehen
```

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `src/data/site.ts` | Name, Adresse, Telefon, **Öffnungszeiten**, Koordinaten, Social Links – gilt überall (Footer, Kontakt, FAQ, Schema, llms.txt) |
| `src/data/services.ts` | Leistungen (Texte, Preise, Bilder) für Startseite und Services-Seite, Galerie-Bilder |
| `src/data/prices.ts` | Preisliste |
| `src/data/seo.ts` | Title/Description je Seite, Social-Media-Vorschaubild |
| `src/lib/forms.ts` | Mailtory-Endpoint und Feldbezeichnungen des Kontaktformulars |
| `src/pages/llms.txt.ts` | Steckbrief für KI-Assistenten, automatisch aus den Daten erzeugt |
| `public/images/` | Bilder (WebP), siehe `public/images/README.md` |
| `deploy/Caddyfile` | Webserver: Sicherheits-Header, Caching, Weiterleitungen alter WordPress-URLs, 404 |
| `scripts/csp.mjs` | Content-Security-Policy als `<meta>` in jede Seite (nach dem Build) |

Icons kommen aus `lucide-static` (Version **0.469.0** festhalten – neuere Versionen enthalten die Instagram-/Facebook-Icons nicht mehr) und werden beim Build als SVG ins HTML geschrieben. Schriften liegen lokal (`@fontsource`). Es werden keine externen Ressourcen geladen, keine Cookies gesetzt, kein Tracking – deshalb kein Cookie-Banner.

## Kontaktformular (Mailtory)

Das Formular sendet per `POST` an Mailtory – der Endpoint steht in `src/lib/forms.ts` (`KONTAKT_ENDPOINT`). **Solange er leer ist, öffnet das Formular als Notlösung das E-Mail-Programm.**

In Mailtory ein Formular mit genau diesen Feldbezeichnungen anlegen:

`Betreff`, `Name`, `E-Mail`, `Telefon`, `Wunschtermin`, `Nachricht`, `Datenschutz` – Fallenfeld `website` (muss leer bleiben).

Danach den Endpoint (`https://app.mailtory.de/form/…`) in `KONTAKT_ENDPOINT` eintragen. Die CSP erlaubt das Formularziel automatisch.

## Deploy

- **Vorschau:** Jeder Push auf `master` baut nach GitHub Pages (`https://rocket703.github.io/evi/`, Workflow `deploy.yml`, Unterordner `/evi`).
- **Live-Server:** Workflow `deploy-server.yml` (vorerst nur von Hand: Actions → *Deploy to Server* → Run workflow). Kopiert `dist/` per rsync nach `/var/www/atelier-haarkunst/releases/<Zeit>/` und stellt den Symlink `current` um; die letzten 5 Versionen bleiben liegen.
  Repo-Secrets: `SSH_PRIVATE_KEY`, `SSH_HOST`, `SSH_KNOWN_HOSTS` (Benutzer `deploy-atelier`).

### Go-live-Checkliste

1. Mailtory-Formular anlegen, Endpoint in `src/lib/forms.ts` eintragen.
2. Auf dem Server Benutzer `deploy-atelier` und `/var/www/atelier-haarkunst/` anlegen, `deploy/Caddyfile` einbinden, Secrets im Repo setzen, Workflow einmal starten.
3. Nameserver von `atelier-haarkunst.de` auf Mailtory umstellen, A/AAAA-Records für `atelier-haarkunst.de` und `www` auf den Server.
4. In `deploy-server.yml` den Auslöser `push` auf `master` ergänzen.
5. Google Search Console: Domain-Property prüfen, `https://atelier-haarkunst.de/sitemap.xml` einreichen.
6. Google-Unternehmensprofil: Website-Link und Öffnungszeiten abgleichen.

## Domain

Kanonisch ist `https://atelier-haarkunst.de` (ohne `www`, so ist die Seite bei Google bekannt). `www` leitet per 301 um (Caddy).
