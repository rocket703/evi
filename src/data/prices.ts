export type PriceRow = {
  name: string;
  prices?: string;
  note?: string;
};

export type PriceCategory = {
  id: string;
  title: string;
  intro?: string;
  rows: PriceRow[];
};

export const priceCategories: PriceCategory[] = [
  {
    id: 'damen',
    title: 'Damen',
    rows: [
      {
        name: 'Waschen, Schneiden, Föhnen',
        prices: 'kurz 46,00 € · mittel 56,00 € · lang 66,00 €',
      },
      {
        name: 'Waschen / Föhnen',
        prices: 'kurz 32,00 € · mittel 37,00 € · lang 47,00 €',
      },
    ],
  },
  {
    id: 'herren-kids',
    title: 'Herren & Kids',
    rows: [
      {
        name: 'Herren – Waschen & Schneiden',
        prices: 'kurz 32,00 € · mittel 37,00 €',
      },
      { name: 'Trockenhaarschnitt', prices: '25,00 €' },
      { name: 'Maschinenhaarschnitt', prices: '18,00 €' },
      { name: 'Bart schneiden', prices: '10,00 €' },
      { name: 'Kids 0–8 Jahre', prices: 'ab 15,00 €' },
      { name: 'Kids 8–15 Jahre', prices: 'ab 25,00 €' },
    ],
  },
  {
    id: 'farbe',
    title: 'Farbe',
    rows: [
      { name: 'Ansatzfarbe', prices: 'ab 38,00 €' },
      { name: 'Globalhaarfarbe', prices: 'ab 43,00 €' },
      { name: 'Strähnen', prices: 'ab 65,00 €' },
      { name: 'Highlights', prices: 'ab 30,00 €' },
      { name: 'Balayage', prices: 'ab 150,00 €' },
      { name: 'Freehand Painting', prices: 'ab 40,00 €' },
      { name: 'Veredelung', prices: 'ab 30,00 €' },
      { name: 'Blondieren mit Veredelung', prices: 'ab 80,00 €' },
    ],
  },
  {
    id: 'beauty-specials',
    title: 'Beautys & Specials',
    rows: [
      { name: 'Intensiv Haarkur', prices: '15,00 €' },
      { name: 'Augenbrauen zupfen', prices: '8,00 €' },
      { name: 'Augenbrauen färben', prices: '8,00 €' },
      { name: 'Wimpern färben', prices: '10,00 €' },
      {
        name: 'Haarverlängerung',
        prices: 'auf Anfrage*',
      },
      {
        name: 'Haarverdichtung',
        prices: 'auf Anfrage*',
      },
      { name: 'Steckfrisuren', prices: 'ab 50,00 €' },
      { name: 'Brautfrisuren mit Make-up', prices: 'ab 120,00 €' },
    ],
  },
];

export const priceDisclaimer = [
  '* Beratungsgebühr 20,00 € wird mit dem Gesamtpreis verrechnet.',
  'Alle Preise sind abhängig von Zeit und Materialaufwand und können sich ändern.',
] as const;
