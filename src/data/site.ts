import { withBase } from '../lib/paths';

export const site = {
  name: 'Atelier-Haarkunst',
  tagline: 'Dein Friseur im Süden von Magdeburg',
  email: 'info@atelier-haarkunst.de',
  phone: '0391 59769033',
  phoneHref: 'tel:+4939159769033',
  address: {
    street: 'Alt Salbke 69',
    zip: '39122',
    city: 'Magdeburg',
    mapsUrl:
      'https://www.google.com/maps/place/Atelier+Haarkunst/@52.0738465,11.6697913,17z/data=!3m1!4b1!4m6!3m5!1s0x47a5f7c61f1f98bd:0x473f96b2271e11f8!8m2!3d52.0738465!4d11.6697913!16s%2Fg%2F11ycj2d8jj',
  },
  owner: 'Evelyn Selbig',
  legal: {
    vatId: 'DE452752396',
  },

  social: {
    instagram:
      'https://www.instagram.com/atelierhaarkunst?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    facebook: 'https://www.facebook.com/AtelierHaarkunst',
    icons: {
      instagram: withBase('/images/social/instagram.webp'),
      facebook: withBase('/images/social/facebook.webp'),
    },
  },
  designer: {
    name: 'r³webdesign',
    url: 'https://r3webdesign.de/',
  },
  images: {
    logo: withBase('/images/logo.webp'),
    hero: withBase('/images/hero.webp'),
    salonBg: withBase('/images/salon-bg.webp'),
    greatLengths: withBase('/images/great-lengths.webp'),
    wappen: withBase('/images/wappen-sachsen-anhalt.webp'),
  },
  funding: {
    note: 'Die Gründung dieses Unternehmens wurde mit Mitteln des Landes Sachsen – Anhalt unterstützt.',
    pdfHref: withBase('/Plakat-mit-www.pdf'),
    wappen: withBase('/images/wappen-sachsen-anhalt.webp'),
  },
} as const;

export const nav = [
  { label: 'Meine Preise', href: withBase('/preisliste/') },
  { label: 'Meine Services', href: withBase('/services/') },
  { label: 'Kontakt', href: withBase('/kontakt/') },
] as const;
