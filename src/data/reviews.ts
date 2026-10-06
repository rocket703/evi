export type Review = {
  quote: string;
  author: string;
  rating: 5;
};

/** Ausgewählte öffentliche Google-Bewertungen für die Startseite */
export const reviews: Review[] = [
  {
    quote:
      'Evi geht komplett auf die Wünsche der Kunden ein und kann diese perfekt umsetzen. Für mich ist sie die beste Friseurin – uneingeschränkt weiterzuempfehlen.',
    author: 'Stella Langbein',
    rating: 5,
  },
  {
    quote:
      'Absolut empfehlenswert! Beratung, Farbe und Schnitt erstklassig. Kompetent, freundlich und zuverlässig – Ambiente zum Wohlfühlen.',
    author: 'Stefanie Teßmer',
    rating: 5,
  },
  {
    quote:
      'Wohlfühlatmosphäre, hervorragende Beratung und Haarkunst. Absolute Weiterempfehlung.',
    author: 'Nicole Halla',
    rating: 5,
  },
];
