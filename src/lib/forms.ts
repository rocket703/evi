/**
 * Ziel des Kontaktformulars – Versand über Mailtory (Server in Deutschland).
 *
 * Das Formular hat in Mailtory ein Gegenstück. Mailtory liest die Werte unter internen
 * Namen: „field_“ + Feldbezeichnung, jedes Byte außer A–Z, a–z, 0–9, _ wird zu „_“
 * (Umlaute zählen als zwei Bytes): „E-Mail“ → field_E_Mail.
 * Im Formular deshalb immer mt('Bezeichnung') verwenden – die Bezeichnung muss exakt der in Mailtory entsprechen.
 * Das Spam-Fallenfeld heißt bei Mailtory „website“.
 *
 * Solange KONTAKT_ENDPOINT leer ist, öffnet das Formular als Notlösung das E-Mail-Programm.
 */
export const KONTAKT_ENDPOINT = '';

/** Feldbezeichnungen – genau so im Mailtory-Formular anlegen. */
export const KONTAKT_FIELDS = {
  betreff: 'Betreff',
  name: 'Name',
  email: 'E-Mail',
  telefon: 'Telefon',
  wunschtermin: 'Wunschtermin',
  nachricht: 'Nachricht',
  datenschutz: 'Datenschutz',
} as const;

/** Interner Mailtory-Feldname zu einer Feldbezeichnung, z. B. mt('E-Mail') → 'field_E_Mail'. */
export function mt(label: string): string {
  const bytes = new TextEncoder().encode(label);
  let out = '';
  for (const b of bytes) out += (b >= 48 && b <= 57) || (b >= 65 && b <= 90) || (b >= 97 && b <= 122) || b === 95 ? String.fromCharCode(b) : '_';
  return `field_${out}`;
}

/** Name des unsichtbaren Fallenfelds – muss bei Menschen leer bleiben. */
export const HONEYPOT_FIELD = 'website';
