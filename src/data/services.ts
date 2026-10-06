import { withBase } from '../lib/paths';

export type Service = {
  slug: string;
  title: string;
  teaser: string;
  body: string;
  imageSrc: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
};

export const services: Service[] = [
  {
    slug: 'haarschnitt-styling',
    title: 'Haarschnitt & Styling',
    teaser:
      'Moderne Damen-, Herren- & Kinderhaarschnitte. Saubere Konturen, Styling & Föhnen.',
    body: 'Ein guter Haarschnitt verändert nicht nur dein Aussehen – er verändert, wie du dich fühlst. Ich schneide nicht nach Schema F, sondern so, dass Form, Bewegung und Stil zu dir passen. Ob lässig oder präzise, natürlich oder edgy – dein Look soll sich jeden Tag gut anfühlen.',
    imageSrc: withBase('/images/services/haarschnitt-styling.webp'),
  },
  {
    slug: 'farbe-highlights',
    title: 'Farbe & Highlights',
    teaser:
      'Balayage, Strähnen, Glossing – natürliche Nuancen bis Statement-Looks.',
    body: 'Farbe ist mehr als nur Tönung – sie ist Ausdruck. Gemeinsam finden wir den Ton, der dich zum Strahlen bringt. Ob Balayage, Glossing oder klassische Strähnen: Ich arbeite mit Techniken, die natürlich wirken und dein Haar gesund glänzen lassen – ohne künstlich zu wirken.',
    imageSrc: withBase('/images/services/farbe-highlights.webp'),
  },
  {
    slug: 'pflege-haarkuren',
    title: 'Pflege & Haarkuren',
    teaser: 'Tiefenwirksame Pflege, abgestimmt auf deinen Haartyp.',
    body: 'Dein Haar erzählt viel über dich – also bekommt es bei mir die Aufmerksamkeit, die es verdient. Ich setze auf tiefenwirksame Pflege, abgestimmt auf deinen Haartyp. So wird trockenes oder beanspruchtes Haar wieder weich, glänzend und stark – wie neu belebt.',
    imageSrc: withBase('/images/services/pflege-haarkuren.webp'),
  },
  {
    slug: 'eventfrisuren',
    title: 'Eventfrisuren',
    teaser: 'Hochsteck- & Brautfrisuren – haltbar und fototauglich.',
    body: 'Du willst, dass deine Frisur den ganzen Tag (und Abend) hält – egal ob Shooting, Party oder Business-Auftritt? Ich style dein Haar so, dass du dich rundum wohlfühlst. Von elegant bis undone – Hauptsache, du fühlst dich echt.',
    imageSrc: withBase('/images/services/eventfrisuren.webp'),
  },
  {
    slug: 'brautfrisuren',
    title: 'Brautfrisuren mit Make-up',
    teaser: 'Probetermin, Look & großer Tag – entspannt und persönlich.',
    body: 'Am Hochzeitstag soll alles perfekt sein – und du dich einfach schön fühlen. In einem Probetermin finden wir deinen Look: Frisur, Make-up, Stimmung. Am großen Tag musst du dich um nichts kümmern – außer darum, zu lächeln.',
    imageSrc: withBase('/images/services/brautfrisuren.webp'),
  },
  {
    slug: 'haarverlaengerungen',
    title: 'Haarverlängerungen von Great Lengths',
    teaser: 'Mehr Länge, mehr Volumen, mehr „Wow“ – natürlich und langlebig.',
    body: 'Mehr Länge, mehr Volumen, mehr „Wow“ – mit Extensions von Great Lengths bekommst du genau das. Natürlich, langlebig und perfekt auf dich abgestimmt. Ich berate dich ehrlich, damit das Ergebnis nicht nur schön aussieht, sondern sich auch richtig gut anfühlt.',
    imageSrc: withBase('/images/services/haarverlaengerungen.webp'),
  },
];

export const homeServiceCards = [
  services[0],
  services[1],
  services[3],
] as const;

export const galleryItems: GalleryItem[] = [
  {
    src: withBase('/images/gallery/01-naturlocken.webp'),
    alt: 'Naturlocken nach Farbauffrischung',
  },
  {
    src: withBase('/images/gallery/02-lange-locken.webp'),
    alt: 'Lange gelockte braune Haare',
  },
  {
    src: withBase('/images/gallery/03-hochzeit.webp'),
    alt: 'Hochzeitsfrisur',
  },
  {
    src: withBase('/images/gallery/04-waves.webp'),
    alt: 'Haar Waves',
  },
  {
    src: withBase('/images/gallery/05-straehnen.webp'),
    alt: 'Frische Strähnen',
  },
  {
    src: withBase('/images/gallery/06-bob.webp'),
    alt: 'Bob Haarschnitt',
  },
  {
    src: withBase('/images/gallery/07-blonde-dunkel.webp'),
    alt: 'Blonde Haare dunkel gefärbt',
  },
  {
    src: withBase('/images/gallery/08-balayage.webp'),
    alt: 'Balayage Frisur',
  },
];
