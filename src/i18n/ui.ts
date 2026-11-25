import type { Lang } from './routes';

/** Teksten die op elke pagina terugkomen: header, footer en gedeelde componenten. */
const nl = {
  nav: {
    pricing: 'Aanbod',
    about: 'Over',
    contact: 'Contact',
    ariaMain: 'Hoofdnavigatie',
  },
  cta: 'Vraag beschikbaarheid aan',
  menu: { open: 'Menu', close: 'Sluit', ariaOpen: 'Menu openen', ariaClose: 'Menu sluiten' },
  langSwitch: { group: 'Taal kiezen', names: { nl: 'Nederlands', en: 'English' } },
  footer: {
    title: ['Promotie', 'Radboud'],
    tagline: 'Promotiefotografie aan de Radboud Universiteit Nijmegen.',
    portraitBefore: 'Zoek je een portret of professionele profielfoto? Kijk op',
    pages: "Pagina's",
    contact: 'Contact',
    copyright: 'Fotograaf Promotie Radboud',
    bottomLine: 'Nijmegen · Radboud Universiteit · Website door',
  },
  schema: {
    name: 'Fotograaf Promotie Radboud',
    description: 'Gespecialiseerde fotografie van promoties aan de Radboud Universiteit Nijmegen',
    jobTitle: 'Fotograaf',
    offer: "Vast pakket: 3 uur fotografie, 130 rechtenvrije foto's binnen 1 week, €270 incl. btw",
  },
  carousel: {
    roledescription: 'carrousel',
    slide: 'dia',
    of: 'van',
    prevPhotos: "Vorige foto's",
    nextPhotos: "Volgende foto's",
    prevReviews: 'Vorige reviews',
    nextReviews: 'Volgende reviews',
  },
  reviews: {
    eyebrow: 'Ervaringen',
    heading: 'Wat promovendi zeggen',
    carouselLabel: 'Reviews',
    stars: (rating: number) => `${rating} van 5 sterren`,
    fallbackName: 'Promovendus',
    university: 'Radboud Universiteit',
    note: '',
  },
};

const en: typeof nl = {
  nav: {
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
    ariaMain: 'Main navigation',
  },
  cta: 'Check availability',
  menu: { open: 'Menu', close: 'Close', ariaOpen: 'Open menu', ariaClose: 'Close menu' },
  langSwitch: { group: 'Choose language', names: { nl: 'Nederlands', en: 'English' } },
  footer: {
    title: ['PhD defence', 'Radboud'],
    tagline: 'PhD defence photography at Radboud University Nijmegen.',
    portraitBefore: 'Looking for a portrait or professional headshot? Visit',
    pages: 'Pages',
    contact: 'Contact',
    copyright: 'Fotograaf Promotie Radboud',
    bottomLine: 'Nijmegen · Radboud University · Website by',
  },
  schema: {
    name: 'Fotograaf Promotie Radboud',
    description: 'Specialised photography of PhD defences at Radboud University Nijmegen',
    jobTitle: 'Photographer',
    offer: 'Fixed package: 3 hours of photography, 130 royalty-free photos within 1 week, €270 incl. VAT',
  },
  carousel: {
    roledescription: 'carousel',
    slide: 'slide',
    of: 'of',
    prevPhotos: 'Previous photos',
    nextPhotos: 'Next photos',
    prevReviews: 'Previous reviews',
    nextReviews: 'Next reviews',
  },
  reviews: {
    eyebrow: 'Experiences',
    heading: 'What PhD candidates say',
    carouselLabel: 'Reviews',
    stars: (rating: number) => `${rating} out of 5 stars`,
    fallbackName: 'PhD candidate',
    university: 'Radboud University',
    note: 'Translated from Dutch',
  },
};

export const ui: Record<Lang, typeof nl> = { nl, en };
