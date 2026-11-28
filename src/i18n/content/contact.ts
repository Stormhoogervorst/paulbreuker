import type { Lang } from '../routes';

const nl = {
  meta: {
    title: 'Contact | Fotograaf Promotie Radboud',
    description:
      'Boek je promotiefotograaf voor de Radboud Universiteit. Reactie binnen 5 werkdagen, geen aanbetaling. €270 incl. btw voor 3 uur fotografie.',
  },
  header: {
    eyebrow: 'Contact',
    title: 'Doe een aanvraag',
    intro:
      'Vul hieronder de details van je promotie in. Ik check je datum in de agenda en reageer binnen 5 werkdagen.',
  },
  form: {
    errorBefore: 'Er ging iets mis. Probeer het opnieuw, of mail rechtstreeks naar',
    subject: 'Nieuwe boekingsaanvraag — fotograafpromotiesradboud.nl',
    name: 'Naam',
    email: 'E-mail',
    phone: 'Telefoonnummer',
    date: 'Datum promotie',
    time: 'Tijdstip aanvang verdediging',
    message: 'Bijzonderheden of vragen',
    optional: '(optioneel)',
    placeholder: 'Bijvoorbeeld: paranimfen, specifieke wensen, of vragen die je hebt.',
    submit: 'Verstuur aanvraag',
    submitting: 'Versturen...',
    captchaMissing: 'Bevestig eerst dat je geen robot bent.',
    successTitle: 'Bedankt voor je aanvraag.',
    successBody: 'Ik neem binnen 5 werkdagen contact met je op.',
  },
  aside: {
    directTitle: 'Liever direct contact?',
    directBody:
      'Voor een korte vraag of een snelle check op beschikbaarheid kun je ook bellen, mailen of appen.',
    email: 'E-mail',
    phone: 'Telefoon',
    responseTitle: 'Reactietijd',
    responseBody:
      'Ik reageer binnen 5 werkdagen. Op vakantiedagen kan dit langer duren — dan vermeld ik dat hier.',
    portraitTitle: 'Een profielfoto nodig?',
    portraitBefore:
      'Voor een professioneel portret, bijvoorbeeld voor LinkedIn of je universiteitspagina, kijk op',
  },
  after: {
    title: 'Wat er gebeurt na je aanvraag',
    steps: [
      {
        title: 'Reactie binnen 5 werkdagen',
        body: 'Ik bevestig je aanvraag en stel een paar korte vragen als ik die heb.',
      },
      {
        title: 'Datum check',
        body: 'Ik kijk of je datum nog vrij is en stem eventuele details af, per mail of telefoon.',
      },
      {
        title: 'Reservering en betaling',
        body: "Datum staat vast, geen aanbetaling. Je betaalt €270 incl. btw via factuur na ontvangst van de foto's.",
      },
    ],
  },
};

const en: typeof nl = {
  meta: {
    title: 'Contact | PhD Defence Photographer Radboud',
    description:
      'Book your PhD defence photographer for Radboud University. Reply within 5 working days, no deposit. €270 incl. VAT for 3 hours of photography.',
  },
  header: {
    eyebrow: 'Contact',
    title: 'Send a request',
    intro:
      "Fill in the details of your PhD defence below. I'll check your date in my calendar and reply within 5 working days.",
  },
  form: {
    errorBefore: 'Something went wrong. Please try again, or email me directly at',
    subject: 'New booking request (English) — fotograafpromotiesradboud.nl',
    name: 'Name',
    email: 'Email',
    phone: 'Phone number',
    date: 'Date of defence',
    time: 'Start time of the defence',
    message: 'Details or questions',
    optional: '(optional)',
    placeholder: 'For example: paranymphs, specific wishes, or any questions you have.',
    submit: 'Send request',
    submitting: 'Sending...',
    captchaMissing: 'Please confirm that you are not a robot first.',
    successTitle: 'Thank you for your request.',
    successBody: "I'll get back to you within 5 working days.",
  },
  aside: {
    directTitle: 'Prefer direct contact?',
    directBody:
      'For a quick question or a fast availability check, you can also call, email or send a WhatsApp message.',
    email: 'Email',
    phone: 'Phone',
    responseTitle: 'Response time',
    responseBody:
      "I reply within 5 working days. During holidays this may take longer — I'll mention that here.",
    portraitTitle: 'Need a headshot?',
    portraitBefore:
      'For a professional portrait, for example for LinkedIn or your university profile, visit',
  },
  after: {
    title: 'What happens after your request',
    steps: [
      {
        title: 'Reply within 5 working days',
        body: 'I confirm your request and ask a few short questions if I have any.',
      },
      {
        title: 'Date check',
        body: 'I check whether your date is still available and agree on any details, by email or phone.',
      },
      {
        title: 'Booking and payment',
        body: 'Your date is fixed, no deposit. You pay €270 incl. VAT by invoice after receiving the photos.',
      },
    ],
  },
};

export const contact: Record<Lang, typeof nl> = { nl, en };
