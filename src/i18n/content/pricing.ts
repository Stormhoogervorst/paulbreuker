import type { Lang } from '../routes';

const portraitLink = { href: 'https://paulbreuker.nl/', label: 'paulbreuker.nl' };

const nl = {
  meta: {
    title: 'Aanbod & Tarief | Fotograaf Promotie Radboud',
    description:
      "Promotiefotografie Radboud Universiteit: vast pakket voor €270 incl. btw. 3 uur fotografie, 130 rechtenvrije foto's, levering binnen 1 week.",
  },
  schema: {
    name: 'Promotiefotografie Radboud Universiteit',
    description:
      "Vast pakket voor de fotografie van een promotie aan de Radboud Universiteit Nijmegen: 3 uur aanwezigheid, 130 rechtenvrije foto's binnen 1 week.",
  },
  header: {
    eyebrow: 'Aanbod',
    title: 'Helder geprijsd.',
    intro: 'Geen pakketmatrix. Een helder aanbod voor de verdediging, felicitaties en receptie.',
    alt: 'Promovendus en paranimfen in het zweetkamertje vlak voor de verdediging aan de Radboud Universiteit',
  },
  package: {
    eyebrow: 'Wat je krijgt',
    items: [
      {
        title: '3 uur aanwezigheid',
        body: 'Vanaf 45 minuten voor aanvang van de verdediging tot en met de receptie.',
      },
      {
        title: 'Volledige promotiedag vastgelegd',
        body: 'Cella Sudatoria, instructies van de pedel, verdediging, hora est, bul, groepsfoto, felicitaties en receptie.',
      },
      {
        title: "130 zorgvuldig geselecteerde foto's",
        body: "Ik maak een selectie en bewerk de foto's op kleur en contrast. De foto's worden rechtenvrij geleverd.",
      },
      {
        title: 'Levering in kleur',
        body: 'Standaard in kleur. Zwart-wit is mogelijk tegen €50 meerprijs.',
      },
      {
        title: 'Levering via WeTransfer',
        body: "Je ontvangt de foto's in hoge resolutie via WeTransfer.",
      },
      {
        title: 'Heldere prijs',
        body: "€270 incl. btw. Je ontvangt de factuur per mail na ontvangst van de foto's.",
      },
    ],
    asideEyebrow: 'Investering',
    priceNote: "Inclusief btw. Je ontvangt de factuur per mail na ontvangst van de foto's.",
    noDeposit: 'Geen aanbetaling',
  },
  day: {
    eyebrow: 'De dag zelf',
    title: 'Een typische promotie',
    intro:
      'Geen promotie is hetzelfde, maar het ritueel is vertrouwd. Hieronder zie je hoe ik je door de dag meeneem.',
    timeline: [
      {
        time: '45 minuten voor aanvang',
        title: 'Cella Sudatoria',
        description:
          'Ik neem je mee naar het zweetkamertje. Daar zet je je handtekening op de muur en maak ik portretten van jou en je paranimfen.',
      },
      {
        time: 'Voor en tijdens de verdediging',
        title: 'Pedel en verdediging',
        description:
          'Daarna volgen de instructies van de pedel en de verdediging zelf. Ik ken de regels rond beweging, geluid en timing.',
      },
      {
        time: 'Hora est',
        title: 'Diploma en bul',
        description:
          "Na 'hora est' leg ik de handtekeningen van rector en promotoren vast. Als vaste fotograaf mag ik ook foto's maken van het ondertekenen van het diploma.",
      },
      {
        time: 'Op de trap',
        title: 'Groepsfoto corona',
        description:
          'Op weg naar de felicitaties maken we een groepsfoto van de voltallige corona samen met jou en je paranimfen.',
      },
      {
        time: 'Na de verdediging',
        title: 'Felicitaties',
        description:
          "Daarna is er ruimte voor foto's met familie, vrienden en promotoren. Ik help om dat rustig te laten verlopen.",
      },
    ],
  },
  protocol: {
    eyebrow: 'Radboud protocol',
    title: 'Rustig aanwezig. Wel betrokken.',
    body:
      'Tijdens de ceremonie werk ik volgens het Radboud-protocol. Voor en na de verdediging begeleid ik je naar de vaste momenten, zodat je weet wat er komt.',
    alt: 'Klein kind aanwezig bij de promotie van een ouder aan de Radboud Universiteit',
  },
  delivery: {
    eyebrow: 'Levering',
    title: 'Binnen 1 week in je inbox',
    paragraphs: [
      "Ik selecteer de foto's zorgvuldig en bewerk ze op kleur en contrast. Binnen 1 week na de promotie ontvang je een mail van mij dat de bestanden onderweg zijn via WeTransfer.",
      "Je krijgt de foto's in hoge resolutie, geschikt voor afdrukken en digitaal delen.",
    ],
    tags: ['Hoge resolutie', 'Rechtenvrij'],
  },
  extra: {
    eyebrow: 'Extra mogelijk',
    title: 'Voor na de promotie',
    paragraphs: [
      "Wil je ook een feestje of diner laten fotograferen, 's avonds of op een ander moment? Dat kan op aanvraag.",
      'Afdrukken zijn mogelijk in elk gewenst formaat. Ik kan ook een strak vormgegeven fotoboek maken, in diverse formaten.',
    ],
    portrait:
      'Zoek je ook een professionele profielfoto, bijvoorbeeld voor LinkedIn, je universiteitspagina of een publicatie? Dan maak ik graag een portret in een aparte sessie. Meer over mijn portretwerk vind je op',
    portraitLink,
  },
  closing: {
    eyebrow: 'Beschikbaarheid',
    title: 'Klaar om je datum vast te leggen?',
    body: 'Stuur me de details van je promotie. Binnen 5 werkdagen reactie.',
  },
};

const en: typeof nl = {
  meta: {
    title: 'Package & Pricing | PhD Defence Photographer Radboud',
    description:
      'PhD defence photography at Radboud University: fixed package for €270 incl. VAT. 3 hours of photography, 130 royalty-free photos, delivered within 1 week.',
  },
  schema: {
    name: 'PhD defence photography Radboud University',
    description:
      'Fixed package for photographing a PhD defence at Radboud University Nijmegen: 3 hours of coverage, 130 royalty-free photos within 1 week.',
  },
  header: {
    eyebrow: 'Pricing',
    title: 'Clearly priced.',
    intro: 'No package matrix. One clear offer covering the defence, congratulations and reception.',
    alt: 'PhD candidate and paranymphs in the Cella Sudatoria just before the defence at Radboud University',
  },
  package: {
    eyebrow: 'What you get',
    items: [
      {
        title: '3 hours of coverage',
        body: 'From 45 minutes before the defence starts up to and including the reception.',
      },
      {
        title: 'Your entire defence day captured',
        body: "Cella Sudatoria, the beadle's instructions, the defence, hora est, the diploma, group photo, congratulations and reception.",
      },
      {
        title: '130 carefully selected photos',
        body: 'I make a selection and edit the photos for colour and contrast. The photos are delivered royalty-free.',
      },
      {
        title: 'Delivered in colour',
        body: 'Colour as standard. Black and white is available for an additional €50.',
      },
      {
        title: 'Delivery via WeTransfer',
        body: 'You receive the photos in high resolution via WeTransfer.',
      },
      {
        title: 'Clear price',
        body: "€270 incl. VAT. You'll receive the invoice by email after receiving the photos.",
      },
    ],
    asideEyebrow: 'Investment',
    priceNote: "Including VAT. You'll receive the invoice by email after receiving the photos.",
    noDeposit: 'No deposit',
  },
  day: {
    eyebrow: 'The day itself',
    title: 'A typical PhD defence',
    intro:
      'No two defences are the same, but the ritual is familiar. Below you can see how I guide you through the day.',
    timeline: [
      {
        time: '45 minutes before the start',
        title: 'Cella Sudatoria',
        description:
          "I take you to the 'sweat room'. There you sign your name on the wall and I take portraits of you and your paranymphs.",
      },
      {
        time: 'Before and during the defence',
        title: 'Beadle and defence',
        description:
          "Next come the beadle's instructions and the defence itself. I know the rules on movement, sound and timing.",
      },
      {
        time: 'Hora est',
        title: 'Diploma',
        description:
          "After 'hora est' I capture the signatures of the rector and your promotors. As a regular photographer, I am also allowed to photograph the signing of the diploma.",
      },
      {
        time: 'On the stairs',
        title: 'Committee group photo',
        description:
          'On the way to the congratulations, we take a group photo of the full committee together with you and your paranymphs.',
      },
      {
        time: 'After the defence',
        title: 'Congratulations',
        description:
          'Then there is time for photos with family, friends and promotors. I help keep things calm and relaxed.',
      },
    ],
  },
  protocol: {
    eyebrow: 'Radboud protocol',
    title: 'Quietly present. Fully engaged.',
    body:
      "During the ceremony I work according to the Radboud protocol. Before and after the defence I guide you to the key moments, so you know what's coming.",
    alt: "Young child attending a parent's PhD defence at Radboud University",
  },
  delivery: {
    eyebrow: 'Delivery',
    title: 'In your inbox within 1 week',
    paragraphs: [
      "I carefully select the photos and edit them for colour and contrast. Within 1 week of the defence I'll email you to let you know the files are on their way via WeTransfer.",
      'You receive the photos in high resolution, suitable for printing and sharing online.',
    ],
    tags: ['High resolution', 'Royalty-free'],
  },
  extra: {
    eyebrow: 'Also available',
    title: 'After the defence',
    paragraphs: [
      'Would you also like a party or dinner photographed, in the evening or at another time? That is available on request.',
      'Prints are available in any size. I can also design a clean, well-crafted photo book in various formats.',
    ],
    portrait:
      'Also looking for a professional headshot, for example for LinkedIn, your university profile or a publication? I would be happy to take a portrait in a separate session. You can find more of my portrait work at',
    portraitLink,
  },
  closing: {
    eyebrow: 'Availability',
    title: 'Ready to book your date?',
    body: "Send me the details of your defence. You'll hear from me within 5 working days.",
  },
};

export const pricing: Record<Lang, typeof nl> = { nl, en };
