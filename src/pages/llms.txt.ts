import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { services } from '../data/services';
import { priceCategories } from '../data/prices';
import { withBase } from '../lib/paths';

/** Steckbrief für KI-Assistenten (llms.txt) – aus denselben Daten wie die Website erzeugt. */
export const GET: APIRoute = ({ site: siteUrl }) => {
  const url = (path: string) => new URL(withBase(path), siteUrl).href;
  const time = (t: string) => t.replace(':', '.');

  const hours = site.hours
    .map((h) => `- ${h.day}: ${h.opens ? `${time(h.opens)}–${time(h.closes!)} Uhr` : 'geschlossen'}`)
    .join('\n');

  const leistungen = services
    .map((s) => `- [${s.title}](${url(`/services/#${s.slug}`)}): ${s.teaser} ${s.price}.`)
    .join('\n');

  const preise = priceCategories
    .map((c) => `### ${c.title}\n${c.rows.map((r) => `- ${r.name}: ${(r.prices ?? '').replace('*', '')}`).join('\n')}`)
    .join('\n\n');

  const body = `# ${site.name}

> Friseursalon von Friseurmeisterin ${site.owner} in Magdeburg-Salbke: Haarschnitt, Farbe, Balayage, Pflege, Event- und Brautfrisuren sowie Haarverlängerung und Haarverdichtung als zertifizierte Great-Lengths-Expertin.

## Kontakt

- Adresse: ${site.address.street}, ${site.address.zip} ${site.address.city}
- Telefon: ${site.phone}
- E-Mail: ${site.email}
- Termine nach Vereinbarung per Telefon, E-Mail oder [Kontaktformular](${url('/kontakt/')})
- Zahlung: bar oder EC-/Debitkarte

## Öffnungszeiten

${hours}

## Leistungen

${leistungen}

## Preise

${preise}

## Seiten

- [Startseite](${url('/')})
- [Leistungen](${url('/services/')})
- [Preisliste](${url('/preisliste/')})
- [Kontakt & Termin](${url('/kontakt/')})
- [Impressum](${url('/impressum/')})
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
