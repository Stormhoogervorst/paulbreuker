import type { Lang } from '../routes';

interface FaqItem {
  question: string;
  answer: string;
  link?: { href: string; label: string };
}

interface Review {
  quote: string;
  name?: string;
}

const portraitLink = { href: 'https://paulbreuker.nl/', label: 'paulbreuker.nl' };

const nl = {
  meta: {
    title: 'Promotiefotograaf Radboud Nijmegen | Paul Breuker',
    description:
      'Paul Breuker fotografeert je promotie aan de Radboud Universiteit. Honderden promoties ervaring, rustige begeleiding op de dag zelf. Vraag beschikbaarheid aan.',
  },
  hero: {
    eyebrow: 'Promotiefotografie · Radboud Universiteit Nijmegen',
    title: 'De fotograaf voor je promotie.',
    intro: 'Ik begeleid je rustig door de dag en leg de vaste momenten zorgvuldig vast.',
    alt: 'Warme omhelzing na de promotie in de Aula van de Radboud Universiteit, terwijl gasten glimlachend toekijken',
  },
  statement: {
    eyebrow: 'Specialisme',
    title: "Fotografie van Radboud promoties, oraties en afscheidsrede's.",
    body:
      "Een promotie laat zich niet overdoen. De handtekening in de Cella Sudatoria, het moment van 'hora est', de groepsfoto op de trap en de receptie volgen elkaar snel op. Ik ken dat ritueel en neem je er rustig doorheen.",
  },
  work: {
    title: 'Recent werk',
    carouselLabel: 'Uitgelicht werk',
    alts: {
      promovendusTrap:
        'Promovendus heft zijn bul omhoog op de trap van de Aula, met paranimfen en hoogleraren achter zich',
      promovendaMetBul:
        'Promovenda loopt stralend met haar bul uit de Aula van de Radboud Universiteit, gevolgd door de cortège',
      ondertekeningBul:
        'Hoogleraar in toga met ambtsketen ondertekent de promotiebul aan de Radboud Universiteit',
      promovendusLachend:
        'Lachende promovendus in rokkostuum met bul en proefschrift, terwijl de cortège volgt',
      verdedigingAula:
        'Overzicht van de Aula tijdens een promotieverdediging, met de commissie in toga achter de tafel',
      publiekAula:
        'Familie en gasten volgen de verdediging vanaf de banken in de Aula van de Radboud Universiteit',
      gastenLuisteren: 'Gasten luisteren geconcentreerd naar de verdediging in de Aula',
      zweetkamertje:
        'Promovendus in het zweetkamertje vlak voor de verdediging aan de Radboud Universiteit',
      shotje: "Promovendus en collega's heffen het glas na een geslaagde promotie aan de Radboud",
    },
  },
  about: {
    eyebrow: 'Over mij',
    title: 'Een fotograaf die het ritueel kent.',
    /** Optioneel: vaste regels; de kop schaalt dan mee zodat elke regel past. */
    titleLines: undefined as string[] | undefined,
    paragraphs: [
      'Ik fotografeer promoties aan de Radboud Universiteit met aandacht voor rust, timing en duidelijke begeleiding. Veel promovendi ervaren dat als prettig op een drukke dag.',
      'Na honderden promoties gefotografeerd te hebben, ken ik het ritueel en begeleid ik je door de dag heen.',
    ],
    readMore: 'Lees meer',
    alt: 'Stil moment van voorbereiding voor de promotieceremonie in het Academiegebouw van de Radboud',
  },
  reviews: [
    {
      quote:
        "Alles is goed aangekomen. Ik heb ze de afgelopen dagen veel bekeken, het zijn hele mooie foto's. Het was een mooie dag die ik me, mede dankzij al het materiaal, nog lang zal heugen.",
    },
    {
      quote:
        "Ik heb ze net bekeken. Het zijn fantastische foto's. Heel erg bedankt dat je deze onvergetelijke dag hebt willen vastleggen.",
    },
    {
      quote: "Hele leuke foto's geworden! Bedankt voor de foto's, het fijne contact en de goede sfeer.",
    },
    {
      quote:
        "Bedankt voor de foto's, wat super snel! Heel erg bedankt dat je foto's wilde maken. Ik heb zojuist een LinkedIn-post gemaakt en je getagd.",
    },
    {
      quote: "Heel erg bedankt, ik ben super blij met de foto's!",
      name: 'Kari',
    },
    {
      quote:
        "Ik heb van verschillende (oud-)collega's lovende woorden over jou en jouw fotografie gehoord. Die verwachtingen heb je helemaal waargemaakt.",
    },
    {
      quote:
        'Bedankt voor je snelle en positieve reactie. Klinkt goed, ik ben nu al benieuwd naar het zweetkamertje.',
    },
  ] as Review[],
  process: {
    eyebrow: 'Het proces',
    title: 'Van eerste contact tot levering',
    steps: [
      {
        title: 'Aanvraag',
        body: 'Een korte mailwisseling om datum, locatie en eventuele wensen af te stemmen. Geen verplicht gesprek vooraf.',
      },
      {
        title: 'Bevestiging',
        body: 'Datum vast, details afgestemd. Geen aanbetaling vooraf.',
      },
      {
        title: 'De dag zelf',
        body: 'Ik ben 45 minuten voor aanvang aanwezig en werk 3 uur door, van Cella Sudatoria tot en met de receptie.',
      },
      {
        title: 'Levering',
        body: "Binnen 1 week ontvang je rond de 130 zorgvuldig geselecteerde foto's via WeTransfer, in hoge resolutie.",
      },
    ],
  },
  pricing: {
    eyebrow: 'Investering',
    title: 'Helder geprijsd.',
    body:
      "Ik werk met een vast aanbod, zodat je vooraf precies weet wat je krijgt. 3 uur aanwezigheid op je promotiedag, rond de 130 rechtenvrije foto's in kleur, geleverd binnen 1 week via WeTransfer. Zwart-wit is mogelijk tegen €50 meerprijs.",
    priceNote: 'incl. btw · factuur per mail',
    link: 'Bekijk het volledige aanbod',
  },
  faq: {
    eyebrow: 'Veelgestelde vragen',
    title: 'Goed om vooraf te weten',
    items: [
      {
        question: 'Hoe lang ben je aanwezig op de promotiedag?',
        answer: '3 uur, vanaf 45 minuten voor aanvang van de verdediging tot en met de receptie.',
      },
      {
        question: "Wanneer ontvang ik de foto's?",
        answer:
          "Binnen 1 week. Je ontvangt een mail van mij zodra de foto's via WeTransfer onderweg zijn.",
      },
      {
        question: "Hoeveel foto's krijg ik?",
        answer:
          "Rond de 130 zorgvuldig geselecteerde foto's, standaard in kleur. Zwart-wit kan tegen €50 meerprijs.",
      },
      {
        question: 'Mag je in de Aula fotograferen tijdens de verdediging?',
        answer:
          "Ja. Ik ken het Radboud-protocol. Als vaste fotograaf mag ik ook foto's maken van het ondertekenen van het diploma.",
      },
      {
        question: 'Hoe ver van tevoren kan ik boeken?',
        answer: 'Liefst twee tot zes maanden vooraf. Populaire data zijn vroeg vergeven.',
      },
      {
        question: 'Wat gebeurt er als mijn promotie verplaatst wordt?',
        answer: 'Geen probleem. Ik plan kosteloos met je om naar de nieuwe datum.',
      },
      {
        question: 'Wat kost het?',
        answer: "€270 incl. btw. Je ontvangt de factuur per mail na ontvangst van de foto's.",
      },
      {
        question: "Maak je ook foto's van de receptie of het diner?",
        answer:
          "Ja. De receptie zit in het pakket. Feestjes en diners 's avonds of op een ander moment zijn op aanvraag mogelijk.",
      },
      {
        question: 'Maak je ook een professionele profielfoto?',
        answer:
          'Ja, een portret voor LinkedIn, je universiteitspagina of een publicatie maak ik in een aparte sessie. Mijn portretwerk vind je op',
        link: portraitLink,
      },
    ] as FaqItem[],
  },
  closing: {
    title: 'Klaar om je datum te reserveren?',
    body: 'Vul het aanvraagformulier in. Binnen 5 werkdagen reactie.',
  },
};

const en: typeof nl = {
  meta: {
    title: 'PhD Defence Photographer Radboud Nijmegen | Paul Breuker',
    description:
      'Paul Breuker photographs your PhD defence at Radboud University. Hundreds of ceremonies photographed, calm guidance on the day itself. Check availability.',
  },
  hero: {
    eyebrow: 'PhD defence photography · Radboud University Nijmegen',
    title: 'The photographer for your PhD defence.',
    intro: 'I calmly guide you through the day and carefully capture every key moment.',
    alt: 'Warm embrace after the PhD ceremony in the Aula of Radboud University, as guests look on smiling',
  },
  statement: {
    eyebrow: 'Specialism',
    title: 'Photography of Radboud PhD defences, inaugural and farewell lectures.',
    body:
      "A PhD defence only happens once. The signature in the Cella Sudatoria, the moment of 'hora est', the group photo on the stairs and the reception follow each other quickly. I know the ritual and calmly take you through it.",
  },
  work: {
    title: 'Recent work',
    carouselLabel: 'Featured work',
    alts: {
      promovendusTrap:
        'PhD candidate raising his doctoral diploma on the stairs of the Aula, with paranymphs and professors behind him',
      promovendaMetBul:
        'PhD candidate walking out of the Aula of Radboud University beaming with her diploma, followed by the academic procession',
      ondertekeningBul:
        'Professor in gown and chain of office signing the doctoral diploma at Radboud University',
      promovendusLachend:
        'Laughing PhD candidate in tailcoat holding his diploma and thesis, as the procession follows',
      verdedigingAula:
        'Overview of the Aula during a PhD defence, with the committee in gowns behind the table',
      publiekAula:
        'Family and guests following the defence from the seats in the Aula of Radboud University',
      gastenLuisteren: 'Guests listening attentively to the defence in the Aula',
      zweetkamertje:
        'PhD candidate in the Cella Sudatoria just before the defence at Radboud University',
      shotje: 'PhD candidate and colleagues raising a glass after a successful defence at Radboud',
    },
  },
  about: {
    eyebrow: 'About me',
    title: 'A photographer who knows the ritual.',
    titleLines: ['A photographer', 'who knows', 'the ritual.'],
    paragraphs: [
      'I photograph PhD defences at Radboud University with attention to calm, timing and clear guidance. Many PhD candidates find that reassuring on a busy day.',
      'Having photographed hundreds of ceremonies, I know the ritual and guide you through the day.',
    ],
    readMore: 'Read more',
    alt: 'Quiet moment of preparation before the PhD ceremony in the Academiegebouw of Radboud University',
  },
  reviews: [
    {
      quote:
        "Everything arrived safely. I've looked at them a lot over the past few days, they're really beautiful photos. It was a wonderful day that I'll remember for a long time, partly thanks to all the material.",
    },
    {
      quote:
        "I've just looked at them. They're fantastic photos. Thank you so much for capturing this unforgettable day.",
    },
    {
      quote: 'Lovely photos! Thanks for the photos, the pleasant contact and the good atmosphere.',
    },
    {
      quote:
        "Thanks for the photos, that was super quick! Thank you so much for taking them. I've just made a LinkedIn post and tagged you.",
    },
    {
      quote: "Thank you so much, I'm really happy with the photos!",
      name: 'Kari',
    },
    {
      quote:
        "I'd heard glowing words about you and your photography from several (former) colleagues. You fully lived up to those expectations.",
    },
    {
      quote:
        "Thanks for your quick and positive reply. Sounds good, I'm already curious about the Cella Sudatoria.",
    },
  ],
  process: {
    eyebrow: 'The process',
    title: 'From first contact to delivery',
    steps: [
      {
        title: 'Request',
        body: 'A short email exchange to agree on the date, location and any wishes. No mandatory meeting beforehand.',
      },
      {
        title: 'Confirmation',
        body: 'Date fixed, details agreed. No deposit required.',
      },
      {
        title: 'The day itself',
        body: 'I arrive 45 minutes before the start and work for 3 hours, from the Cella Sudatoria up to and including the reception.',
      },
      {
        title: 'Delivery',
        body: 'Within 1 week you receive around 130 carefully selected high-resolution photos via WeTransfer.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Investment',
    title: 'Clearly priced.',
    body:
      'I work with a fixed package, so you know exactly what you get in advance. 3 hours of coverage on your defence day, around 130 royalty-free colour photos, delivered within 1 week via WeTransfer. Black and white is available for an additional €50.',
    priceNote: 'incl. VAT · invoice by email',
    link: 'View the full package',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Good to know in advance',
    items: [
      {
        question: 'How long are you present on the day of the defence?',
        answer: '3 hours, from 45 minutes before the defence starts up to and including the reception.',
      },
      {
        question: 'When will I receive the photos?',
        answer: "Within 1 week. I'll email you as soon as the photos are on their way via WeTransfer.",
      },
      {
        question: 'How many photos will I get?',
        answer:
          'Around 130 carefully selected photos, in colour as standard. Black and white is available for an additional €50.',
      },
      {
        question: 'Are you allowed to photograph in the Aula during the defence?',
        answer:
          'Yes. I know the Radboud protocol. As a regular photographer, I am also allowed to photograph the signing of the diploma.',
      },
      {
        question: 'How far in advance should I book?',
        answer: 'Preferably two to six months ahead. Popular dates are taken early.',
      },
      {
        question: 'What happens if my defence is rescheduled?',
        answer: "No problem. I'll reschedule to the new date free of charge.",
      },
      {
        question: 'What does it cost?',
        answer: "€270 incl. VAT. You'll receive the invoice by email after receiving the photos.",
      },
      {
        question: 'Do you also photograph the reception or dinner?',
        answer:
          'Yes. The reception is included in the package. Parties and dinners in the evening or at another time are available on request.',
      },
      {
        question: 'Do you also take professional headshots?',
        answer:
          'Yes, I take portraits for LinkedIn, your university profile or a publication in a separate session. You can find my portrait work at',
        link: portraitLink,
      },
    ],
  },
  closing: {
    title: 'Ready to reserve your date?',
    body: "Fill in the request form. You'll hear from me within 5 working days.",
  },
};

export const home: Record<Lang, typeof nl> = { nl, en };
