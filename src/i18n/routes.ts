export const languages = ['nl', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'nl';

/**
 * Elke pagina met zijn URL per taal. Nederlands staat zonder prefix op de root,
 * Engels onder /en/ met Engelse slugs (beter vindbaar in Engelstalige zoekopdrachten).
 */
export const routes = {
  home: { nl: '/', en: '/en/' },
  pricing: { nl: '/aanbod', en: '/en/pricing' },
  about: { nl: '/over', en: '/en/about' },
  contact: { nl: '/contact', en: '/en/contact' },
} as const satisfies Record<string, Record<Lang, string>>;

export type PageKey = keyof typeof routes;

export const path = (page: PageKey, lang: Lang): string => routes[page][lang];

export const otherLang = (lang: Lang): Lang => (lang === 'nl' ? 'en' : 'nl');

/** Locale-codes voor Open Graph. */
export const ogLocale: Record<Lang, string> = { nl: 'nl_NL', en: 'en_GB' };
