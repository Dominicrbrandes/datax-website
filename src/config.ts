/**
 * Single source of truth for club info.
 *
 * If you are a new officer updating this site: almost everything you need to
 * change is in this file, plus src/data/board.ts (officers) and
 * src/data/events.ts (calendar and past events). Edit the values, commit, and
 * the site rebuilds itself. You should not need to touch any HTML.
 *
 * Values marked TODO are placeholders — replace them with the real thing.
 */

export const club = {
  /** Short name, used in the nav and page titles. */
  name: 'DataX',
  /** Full name, used in the footer. */
  fullName: 'DataX',
  school: 'San Diego State University',
  /** Logo shown top-left in the header, relative to public/. Leave empty to show the name alone. */
  logo: '/images/logo.png',
  /**
   * Photo shown in the preview card when someone shares a link to the site
   * (iMessage, Slack, Discord, LinkedIn). Relative to public/. A wide photo
   * works best. Leave empty for a text-only preview.
   */
  shareImage: '/images/events/fall-2026-qualcomm-finance-panel.jpg',
  /** One line, shown under the club name in the hero. Keep it short. */
  tagline: 'Students from every major, working with data together.',
  /** A sentence or two. Used for the hero body and search/social previews. */
  description:
    'DataX is an interdisciplinary student organization at San Diego State University that brings together students interested in working with data. Our members come from a variety of majors, experience levels, and backgrounds, including data science, analytics, statistics, econometrics, machine learning, business intelligence, and related fields.',
};

/**
 * Inclusion line. Shown in the hero and the footer, because "do I belong here?"
 * is the question most people have before they walk in. Keep it one short line.
 */
export const welcome = 'All majors welcome. No application, no dues.';

export const meeting = {
  day: 'Wednesday',
  time: '6:00 PM',
  location: 'GMCS 421',
};

/**
 * Leave a link as an empty string and it will be hidden automatically —
 * nothing breaks, the link just does not render.
 */
export const links = {
  /** No mailto: — the site adds it. */
  email: 'dataxsdsu@gmail.com',
  /** Every sign-up and form in one place. The "Join us" button in the top bar. */
  linktree: 'https://linktr.ee/dataxsdsu',
  linkedin: 'https://www.linkedin.com/company/sdsu-datax',
  /** Where event updates are posted first. The main button on the home page. */
  instagram: 'https://www.instagram.com/dataxsdsu/',
  /** Discord invite. Shown with the next meeting and at the bottom of the home page. */
  discord: 'https://discord.gg/WA9GrxgGSA',
};

/**
 * Nav items. Add a page here when you add one to src/pages/.
 *
 * Home is listed as a tab like the others, so it is obvious you can click it.
 * There is no separate contact page: the social links live in the footer of
 * every page, and the "Join us" button goes to Linktree.
 */
export const nav: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Executive Board', href: '/board' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'Past Events', href: '/past-events' },
];

/** What we do — the three cards on the home page. */
export const highlights = [
  {
    title: 'Guest Speakers',
    body: 'We invite professionals, alumni, and industry experts to share their experiences, career advice, and insights into the many fields that work with data.',
  },
  {
    title: 'Workshops',
    body: 'Hands-on sessions where you build technical, professional, and analytical skills you can use in coursework, internships, research, and your career. No prior experience needed.',
  },
  {
    title: 'Community and Collaboration',
    body: 'Socials, collaborations, and shared learning that connect students across disciplines. DataX is open to students of all majors and experience levels.',
  },
];
