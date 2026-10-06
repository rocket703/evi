import { withBase } from '../lib/paths';
import { site } from './site';

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
};

/** Aus WordPress/AIOSEO übernommen und bereinigt */
export const seoPages = {
  home: {
    path: withBase('/'),
    title: 'Friseur Magdeburg - Atelier Haarkunst in Salbke',
    description:
      'Atelier Haarkunst: Willkommen bei Deinem neuen Friseur in Magdeburg-Salbke. Schnitt, Farbe und Pflege mit Liebe zum Detail – komm vorbei und lern uns kennen!',
    ogTitle: 'Atelier Haarkunst – Dein Friseur im Süden von Magdeburg',
  },
  services: {
    path: withBase('/services/'),
    title: 'Leistungen & Services | Atelier Haarkunst Magdeburg',
    description:
      'Von Haarschnitt bis Balayage: typgerechte Beratung, hochwertige Produkte, präzises Styling. Entdecke unsere Leistungen bei Atelier Haarkunst in Magdeburg.',
  },
  preisliste: {
    path: withBase('/preisliste/'),
    title: 'Preise & Angebote | Atelier Haarkunst Magdeburg',
    description:
      'Alle Leistungen mit Preis: Schnitt, Farbe, Pflege, Extensions. Faire Konditionen bei Atelier Haarkunst in Magdeburg. Preisliste ansehen und Termin sichern.',
  },
  kontakt: {
    path: withBase('/kontakt/'),
    title: 'Kontakt & Termin | Atelier Haarkunst Magdeburg',
    description:
      'Termin anfragen bei Atelier Haarkunst in Magdeburg-Salbke. Adresse, Telefon, E-Mail und Kontaktformular – wir freuen uns auf dich.',
  },
  impressum: {
    path: withBase('/impressum/'),
    title: 'Impressum | Atelier Haarkunst',
    description: `Impressum von Atelier Haarkunst, ${site.address.street}, ${site.address.zip} ${site.address.city}. Inhaberin: ${site.owner}.`,
  },
  datenschutz: {
    path: withBase('/datenschutz/'),
    title: 'Datenschutz | Atelier Haarkunst',
    description:
      'Datenschutzerklärung von Atelier Haarkunst Magdeburg – Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
  },
} as const satisfies Record<string, PageSeo>;

export const defaultOgImage = withBase('/images/hero.webp');
