
export const SECTION_IDS = {
    about: "about",
    product: "product",
    pricing: "pricing",
    faq: "faq",
    cta: "cta",
    template: 'template',
    hero: 'hero',
    feature: 'feature',
} as const;

export type Target = keyof typeof SECTION_IDS;
