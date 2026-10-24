// Fügt nach dem Build in jede Seite eine Content-Security-Policy als <meta>-Tag ein (wie bei alcartron-hifi):
// - eingebettete Skripte werden per SHA-256-Prüfsumme erlaubt (kein pauschales 'unsafe-inline')
// - Formularziele (Mailtory) werden automatisch aus den Seiten gelesen
// Als <meta> statt als Server-Header, damit Caddy nach einem Deploy nicht neu geladen werden muss.
// „frame-ancestors“ ist in <meta> nicht erlaubt – das setzt Caddy als festen Header (deploy/Caddyfile).
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

const DIST = 'dist';
const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
})(DIST);

const hashes = new Set();
const formOrigins = new Set();
let mailtoForm = false;
const pages = files.map((file) => ({ file, html: readFileSync(file, 'utf8') }));
for (const { html } of pages) {
  for (const m of html.matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (/type="application\/ld\+json"/.test(m[1]) || !m[2].trim()) continue; // Daten, kein Code
    hashes.add(`'sha256-${createHash('sha256').update(m[2]).digest('base64')}'`);
  }
  for (const m of html.matchAll(/<form[^>]*\baction="(https:\/\/[^"/]+)/g)) formOrigins.add(m[1]);
  // Notlösung ohne Mailtory-Endpoint: Formular öffnet das E-Mail-Programm
  if (/<form[^>]*\baction="mailto:/.test(html)) mailtoForm = true;
}

const forms = [...formOrigins].join(' ');
const policy = [
  "default-src 'self'",
  `script-src 'self' ${[...hashes].join(' ')}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  `connect-src 'self' ${forms}`.trim(),
  ['form-action', "'self'", forms, mailtoForm ? 'mailto:' : ''].filter(Boolean).join(' '),
  "base-uri 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

for (const { file, html } of pages) {
  if (!html.includes('<meta charset="UTF-8">')) throw new Error(`${file}: <meta charset> nicht gefunden`);
  const meta = `<meta http-equiv="Content-Security-Policy" content="${policy}">`;
  writeFileSync(file, html.replace('<meta charset="UTF-8">', `<meta charset="UTF-8">${meta}`));
}
console.log(`✓ CSP in ${pages.length} Seiten: ${hashes.size} Skript-Prüfsummen, Formularziele: ${forms || '–'}`);
