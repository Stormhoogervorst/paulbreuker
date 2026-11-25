import type { Lang } from '../routes';

interface CvEntry {
  period: string;
  label: string;
}

const portraitLink = { href: 'https://paulbreuker.nl/', label: 'paulbreuker.nl' };

const nl = {
  meta: {
    title: 'Paul Breuker | Fotograaf in Nijmegen',
    description:
      'Paul Breuker fotografeert promoties aan de Radboud Universiteit Nijmegen. Ervaren in protocol, Aula en Academiegebouw. Lid van Dupho. Vraag beschikbaarheid aan.',
  },
  schema: {
    jobTitle: 'Fotograaf en kunstenaar',
    description:
      'Kunstenaar en fotograaf in Nijmegen sinds 1984. Ervaren fotograaf van promoties aan de Radboud Universiteit.',
  },
  header: {
    eyebrow: 'Over',
    intro:
      'Kunstenaar en fotograaf in Nijmegen, sinds 1984. Ervaren in portret, reportage en promoties aan de Radboud Universiteit.',
  },
  practice: {
    alt: 'Paul Breuker, fotograaf in Nijmegen',
    eyebrow: 'Praktijk',
    title: 'Van schilder naar fotograaf.',
    paragraphs: [
      'Sinds 1984 werk ik als kunstenaar. Eerst als schilder, vanaf 1995 ook als fotograaf. Die twee disciplines voeden elkaar — schilders kijken naar licht, compositie en gebaar; fotografen leggen vast wat ze zien. In mijn werk komen ze samen.',
      'Mijn specialisatie ligt bij portret en fotoreportage. Bij promoties werk ik rustig en respectvol, maar ik neem je ook actief mee door het ritueel. Dat geeft houvast op een dag waarop veel tegelijk gebeurt.',
      "Mijn projecten 'Love & Marriage' en 'Take me to the river' werden geëxposeerd in Photoville (New York), de Kunsthal in Rotterdam, Museum het Valkhof, Museum de Bastei en op meer plekken in binnen- en buitenland. Publicaties verschenen onder meer in de Volkskrant, de Telegraaf, de Standaard en de Gelderlander.",
      'De Radboud-promotie is voor mij een terugkerende opdracht waarbij ik mijn ervaring met portret en reportage samenbreng. Ik ben lid van Dupho, Dutch Photographers, de beroepsorganisatie voor professionele fotografen.',
    ],
    portrait:
      'Heb je een professionele profielfoto nodig, bijvoorbeeld voor je LinkedIn of universiteitspagina? Mijn portretwerk vind je op',
    portraitLink,
  },
  work: {
    eyebrow: 'Werk',
    title: 'Een glimp uit recente projecten',
    alts: {
      foto6: 'Portret uit project Love & Marriage, expositie Photoville New York',
      foto7: 'Reportagebeeld uit Take me to the river, Volkskrant',
      foto8: 'Werk uit Het gezicht van Nijmegen, Museum het Valkhof',
      foto9: 'Portret in editorial stijl door Paul Breuker',
      foto10: 'Reportage in opdracht door Paul Breuker',
    },
  },
  approach: {
    eyebrow: 'Werkwijze',
    title: 'Hoe ik werk',
    items: [
      {
        title: 'Ik begeleid je door de dag',
        body: "Ik ben rustig aanwezig en ken het Radboud-ritueel. Vooraf neem ik je mee naar de Cella Sudatoria. Daarna help ik bij portretten, de groepsfoto en foto's met familie en promotoren.",
      },
      {
        title: 'Bestaand licht',
        body: 'Waar mogelijk werk ik met het licht dat er is. Omdat de aula slecht verlicht is, flits ik regelmatig. Met de juiste apparatuur is dat subtiel. De receptieruimte is te donker en van alle kanten tegenlicht. Om een heldere doortekening te krijgen flits ik daar ook.',
      },
      {
        title: 'Het echte gebaar',
        body: 'Groepsbeelden horen bij een promotie. Ik geef korte aanwijzingen als dat nodig is. Daarnaast let ik op het ongedwongen moment: de zenuwen voor de verdediging, de eerste omhelzing na de bul.',
      },
    ],
  },
  cv: {
    eyebrow: 'Curriculum',
    title: 'Hoogtepunten',
    selectionLabel: 'Selectie',
    selectionBody:
      'Een greep uit veertig jaar werken als kunstenaar en fotograaf. Het volledige overzicht is op aanvraag beschikbaar.',
    groups: [
      {
        label: 'Solo-exposities (selectie)',
        entries: [
          { period: '2014–2018', label: 'Photoville, New York' },
          { period: '2014–2018', label: 'Kunsthal, Rotterdam' },
          { period: '2018–2021', label: 'Museum de Bastei, Nijmegen' },
          { period: '2018–2021', label: 'Radboud Universiteit, Nijmegen' },
          { period: '2020', label: 'Museum het Valkhof, Nijmegen' },
          { period: '2022', label: 'St. Stevenskerk (750 jaar), Nijmegen' },
          { period: '2022', label: 'Klimaatexpo Grote Kerk, Zwolle' },
        ] as CvEntry[],
      },
      {
        label: 'Publicaties',
        entries: [
          { period: 'n.v.t.', label: 'de Volkskrant' },
          { period: 'n.v.t.', label: 'de Telegraaf' },
          { period: 'n.v.t.', label: 'de Standaard' },
          { period: 'n.v.t.', label: 'de Gelderlander' },
          { period: 'n.v.t.', label: 'EenVandaag (TV)' },
        ] as CvEntry[],
      },
      {
        label: 'Lidmaatschappen',
        entries: [
          { period: '1997–heden', label: 'GKF (Gebonden Kunstenaars Federatie)' },
          { period: '2015–heden', label: 'Dupho (Dutch Photographers)' },
        ] as CvEntry[],
      },
    ],
  },
  closing: {
    title: 'Een promotie in de agenda?',
    body: 'Vul het aanvraagformulier in met je datum en eventuele wensen. Binnen 5 werkdagen reactie.',
  },
};

const en: typeof nl = {
  meta: {
    title: 'Paul Breuker | Photographer in Nijmegen',
    description:
      'Paul Breuker photographs PhD defences at Radboud University Nijmegen. Experienced with the protocol, the Aula and the Academiegebouw. Member of Dupho.',
  },
  schema: {
    jobTitle: 'Photographer and artist',
    description:
      'Artist and photographer in Nijmegen since 1984. Experienced photographer of PhD defences at Radboud University.',
  },
  header: {
    eyebrow: 'About',
    intro:
      'Artist and photographer in Nijmegen since 1984. Experienced in portraiture, reportage and PhD defences at Radboud University.',
  },
  practice: {
    alt: 'Paul Breuker, photographer in Nijmegen',
    eyebrow: 'Practice',
    title: 'From painter to photographer.',
    paragraphs: [
      'I have worked as an artist since 1984. First as a painter, and from 1995 also as a photographer. The two disciplines feed each other — painters look at light, composition and gesture; photographers capture what they see. In my work they come together.',
      'I specialise in portraiture and photo reportage. At PhD defences I work calmly and respectfully, but I also actively guide you through the ritual. That gives you something to hold on to on a day when a lot happens at once.',
      "My projects 'Love & Marriage' and 'Take me to the river' have been exhibited at Photoville (New York), the Kunsthal in Rotterdam, Museum het Valkhof, Museum de Bastei and other venues in the Netherlands and abroad. My work has been published in de Volkskrant, de Telegraaf, de Standaard and de Gelderlander, among others.",
      'Photographing Radboud PhD defences is a recurring assignment in which I bring together my experience in portraiture and reportage. I am a member of Dupho, Dutch Photographers, the professional association for professional photographers.',
    ],
    portrait:
      'Need a professional headshot, for example for LinkedIn or your university profile? You can find my portrait work at',
    portraitLink,
  },
  work: {
    eyebrow: 'Work',
    title: 'A glimpse of recent projects',
    alts: {
      foto6: 'Portrait from the Love & Marriage project, exhibited at Photoville New York',
      foto7: 'Reportage image from Take me to the river, de Volkskrant',
      foto8: 'Work from Het gezicht van Nijmegen, Museum het Valkhof',
      foto9: 'Editorial-style portrait by Paul Breuker',
      foto10: 'Commissioned reportage by Paul Breuker',
    },
  },
  approach: {
    eyebrow: 'Approach',
    title: 'How I work',
    items: [
      {
        title: 'I guide you through the day',
        body: 'I am a calm presence and know the Radboud ritual. Beforehand I take you to the Cella Sudatoria. Afterwards I help with portraits, the group photo and photos with family and promotors.',
      },
      {
        title: 'Available light',
        body: 'Where possible I work with the light that is there. Because the Aula is poorly lit, I regularly use flash. With the right equipment that stays subtle. The reception room is too dark and backlit from all sides, so I use flash there too to get clear, well-defined images.',
      },
      {
        title: 'The genuine gesture',
        body: 'Group photos are part of a PhD defence. I give brief directions when needed. I also look out for the unguarded moment: the nerves before the defence, the first embrace after receiving the diploma.',
      },
    ],
  },
  cv: {
    eyebrow: 'Curriculum',
    title: 'Highlights',
    selectionLabel: 'Selection',
    selectionBody:
      'A selection from forty years of working as an artist and photographer. The full overview is available on request.',
    groups: [
      {
        label: 'Solo exhibitions (selection)',
        entries: [
          { period: '2014–2018', label: 'Photoville, New York' },
          { period: '2014–2018', label: 'Kunsthal, Rotterdam' },
          { period: '2018–2021', label: 'Museum de Bastei, Nijmegen' },
          { period: '2018–2021', label: 'Radboud University, Nijmegen' },
          { period: '2020', label: 'Museum het Valkhof, Nijmegen' },
          { period: '2022', label: 'St. Stevenskerk (750th anniversary), Nijmegen' },
          { period: '2022', label: 'Climate expo Grote Kerk, Zwolle' },
        ],
      },
      {
        label: 'Publications',
        entries: [
          { period: 'n/a', label: 'de Volkskrant' },
          { period: 'n/a', label: 'de Telegraaf' },
          { period: 'n/a', label: 'de Standaard' },
          { period: 'n/a', label: 'de Gelderlander' },
          { period: 'n/a', label: 'EenVandaag (TV)' },
        ],
      },
      {
        label: 'Memberships',
        entries: [
          { period: '1997–present', label: 'GKF (Federation of Professional Artists)' },
          { period: '2015–present', label: 'Dupho (Dutch Photographers)' },
        ],
      },
    ],
  },
  closing: {
    title: 'A PhD defence coming up?',
    body: "Fill in the request form with your date and any wishes. You'll hear from me within 5 working days.",
  },
};

export const about: Record<Lang, typeof nl> = { nl, en };
