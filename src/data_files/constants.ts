import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "ThatcherTechnologies",
  tagline: "Top-quality Hardware Tools",
  description: "ThatcherTechnologies offers top-tier hardware tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short: "ThatcherTechnologies offers top-tier hardware tools and expert construction services to meet all your project needs.",
  url: "https://thatchertechnologies.com",
  author: "Emil Gulamov",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Restore Your Devices with Thatcher Technologies' Expert Repair Services and Top-Quality Tools. Trusted by Industry Leaders, Thatcher Technologies Offers Simple, Affordable, and Reliable Electronics Repairs. Experience the Difference with Cutting-Edge Solutions and Customer-Focused Care. Start Exploring Now!",
  image: ogImageSrc,
};
