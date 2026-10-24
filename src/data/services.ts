import { withBase } from '../lib/paths';

export type Service = {
  slug: string;
  title: string;
  teaser: string;
  body: string;
  /** SEO-Überschrift auf der Services-Seite (Leistung + Ort) */
  heading: string;
  /** Zweiter Absatz für die Services-Seite */
  more: string;
  /** „Das erwartet dich“ – Stichpunkte */
  details: string[];
  /** Preis-Hinweis, Werte aus der Preisliste */
  price: string;
  /** Bild für die Hover-Reveal-Sektion auf der Startseite */
  revealSrc: string;
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
    heading: 'Haarschnitt & Styling in Magdeburg-Salbke',
    more: 'Bevor die Schere ansetzt, nehme ich mir Zeit für dich: Wie fällt dein Haar, wie viel Zeit willst du morgens investieren, was soll sich verändern? Daraus entsteht ein Schnitt, der auch nach Wochen noch gut aussieht und sich leicht stylen lässt – für Damen, Herren und Kinder.',
    details: [
      'Damen-, Herren- & Kinderhaarschnitte',
      'Trocken- und Maschinenhaarschnitt, Bart schneiden',
      'Waschen, Föhnen & Styling',
      'Ehrliche Beratung zu Form und Pflege',
    ],
    price: 'Damen ab 51 € · Herren ab 35 € · Kids ab 18 €',
    revealSrc: withBase('/images/services/reveal/haarschnitt-styling.webp'),
  },
  {
    slug: 'farbe-highlights',
    title: 'Farbe & Highlights',
    teaser:
      'Balayage, Strähnen, Glossing – natürliche Nuancen bis Statement-Looks.',
    body: 'Farbe ist mehr als nur Tönung – sie ist Ausdruck. Gemeinsam finden wir den Ton, der dich zum Strahlen bringt. Ob Balayage, Glossing oder klassische Strähnen: Ich arbeite mit Techniken, die natürlich wirken und dein Haar gesund glänzen lassen – ohne künstlich zu wirken.',
    heading: 'Haarfarbe, Strähnen & Balayage in Magdeburg',
    more: 'Ob du nur den Ansatz auffrischen möchtest, dir sanfte Highlights wünschst oder Lust auf eine echte Veränderung hast: Ich schaue mir deinen Hautton, deine Ausgangsfarbe und den Zustand deines Haares genau an und mische die Farbe passend für dich. So entstehen Nuancen, die lebendig wirken und schön herauswachsen.',
    details: [
      'Ansatz- & Globalfarbe',
      'Strähnen, Highlights & Balayage',
      'Blondieren mit Veredelung',
      'Glossing für Glanz und frische Nuancen',
    ],
    price: 'Ansatzfarbe ab 43 € · Strähnen ab 80 € · Balayage ab 150 €',
    revealSrc: withBase('/images/services/reveal/farbe-highlights.webp'),
  },
  {
    slug: 'pflege-haarkuren',
    title: 'Pflege & Haarkuren',
    teaser: 'Tiefenwirksame Pflege, abgestimmt auf deinen Haartyp.',
    body: 'Dein Haar erzählt viel über dich – also bekommt es bei mir die Aufmerksamkeit, die es verdient. Ich setze auf tiefenwirksame Pflege, abgestimmt auf deinen Haartyp. So wird trockenes oder beanspruchtes Haar wieder weich, glänzend und stark – wie neu belebt.',
    heading: 'Pflege & Haarkuren für gesundes Haar',
    more: 'Gerade nach dem Färben, Blondieren oder bei trockenem Haar macht eine gezielte Pflege den Unterschied. Ich wähle die Kur passend zu deinem Haartyp und gebe dir Tipps mit, wie du den Glanz zu Hause erhältst. Auf Wunsch kümmere ich mich auch um Augenbrauen und Wimpern.',
    details: [
      'Intensiv-Haarkur nach Haartyp',
      'Pflegetipps für zu Hause',
      'Augenbrauen zupfen & färben',
      'Wimpern färben',
    ],
    price: 'Intensiv-Haarkur 15 € · Augenbrauen & Wimpern ab 10 €',
    revealSrc: withBase('/images/services/reveal/pflege-haarkuren.webp'),
  },
  {
    slug: 'eventfrisuren',
    title: 'Eventfrisuren',
    teaser: 'Hochsteck- & Brautfrisuren – haltbar und fototauglich.',
    body: 'Du willst, dass deine Frisur den ganzen Tag (und Abend) hält – egal ob Shooting, Party oder Business-Auftritt? Ich style dein Haar so, dass du dich rundum wohlfühlst. Von elegant bis undone – Hauptsache, du fühlst dich echt.',
    heading: 'Event- & Hochsteckfrisuren',
    more: 'Abschlussball, Geburtstag, Fotoshooting oder ein wichtiger Termin: Ich style dein Haar so, dass es den ganzen Tag hält und auf Fotos genauso gut aussieht wie in echt. Bring gern ein Bild von deinem Outfit oder deiner Inspiration mit – dann finden wir gemeinsam den passenden Look.',
    details: [
      'Hochsteckfrisuren & Flechtfrisuren',
      'Locken, Wellen & glamouröse Stylings',
      'Haarschmuck wird eingearbeitet',
      'Hält den ganzen Tag – und Abend',
    ],
    price: 'Steckfrisuren ab 70 €',
    revealSrc: withBase('/images/services/reveal/eventfrisuren.webp'),
  },
  {
    slug: 'brautfrisuren',
    title: 'Brautfrisuren mit Make-up',
    teaser: 'Probetermin, Look & großer Tag – entspannt und persönlich.',
    body: 'Am Hochzeitstag soll alles perfekt sein – und du dich einfach schön fühlen. In einem Probetermin finden wir deinen Look: Frisur, Make-up, Stimmung. Am großen Tag musst du dich um nichts kümmern – außer darum, zu lächeln.',
    heading: 'Brautfrisur & Braut-Make-up in Magdeburg',
    more: 'Damit am großen Tag alles sitzt, probieren wir deinen Look vorher in Ruhe aus: Frisur, Make-up und Haarschmuck passend zu Kleid und Stimmung. Am Hochzeitsmorgen bist du dann einfach nur Braut – ich kümmere mich um den Rest.',
    details: [
      'Probetermin vor der Hochzeit',
      'Brautfrisur & Make-up aus einer Hand',
      'Schleier, Blumen & Haarschmuck',
      'Ruhige, entspannte Atmosphäre im Salon',
    ],
    price: 'Brautfrisur mit Make-up ab 120 €',
    revealSrc: withBase('/images/services/reveal/brautfrisuren.webp'),
  },
  {
    slug: 'haarverlaengerungen',
    title: 'Haarverlängerungen von Great Lengths',
    teaser: 'Mehr Länge, mehr Volumen, mehr „Wow“ – natürlich und langlebig.',
    body: 'Mehr Länge, mehr Volumen, mehr „Wow“ – mit Extensions von Great Lengths bekommst du genau das. Natürlich, langlebig und perfekt auf dich abgestimmt. Ich berate dich ehrlich, damit das Ergebnis nicht nur schön aussieht, sondern sich auch richtig gut anfühlt.',
    heading:
      'Haarverlängerung & Haarverdichtung mit Great Lengths in Magdeburg',
    more: 'Als zertifizierte Great-Lengths-Expertin arbeite ich ausschließlich mit hochwertigem Echthaar von Great Lengths. Die feinen Bondings werden Strähne für Strähne eingearbeitet, sind kaum sichtbar und fühlen sich natürlich an – ob für mehr Länge, mehr Fülle oder einfach mehr Volumen an den richtigen Stellen.',
    details: [
      '100 % Echthaar von Great Lengths',
      'Haarverlängerung & Haarverdichtung',
      'Passend zu Farbe und Struktur – auch für Naturlocken',
      'Zertifizierte Great-Lengths-Expertin',
    ],
    price:
      'Preis nach Beratung · Beratungsgebühr 20 €, wird mit dem Gesamtpreis verrechnet',
    revealSrc: withBase('/images/services/reveal/haarverlaengerungen.webp'),
  },
];

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
    src: withBase('/images/gallery/04-waves.webp'),
    alt: 'Haar Waves',
  },
  {
    src: withBase('/images/gallery/05-straehnen.webp'),
    alt: 'Frische Strähnen',
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
