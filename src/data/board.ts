/**
 * Executive Board page (src/pages/board.astro).
 *
 * Photos go in public/images/board/. Officers are shown as portrait tiles, so
 * a 3:4 headshot with the face in the upper half looks best; any size works
 * for group photos. Leave `photo` empty and the page shows the person's
 * initials instead.
 */
import type { Photo } from './types';

export const boardYear = '2026–2027';

/** TODO: add group photos, e.g. { src: '/images/board/group-1.jpg', alt: 'The 2026–2027 executive board' } */
export const groupPhotos: Photo[] = [];

export interface Officer {
  name: string;
  position: string;
  major: string;
  /** e.g. 'Junior', 'Senior', 'Graduate student' */
  year: string;
  /** e.g. '/images/board/jane-doe.jpg' */
  photo?: string;
}

/**
 * Officers, in the order they appear in the Fall 2026 announcement carousel.
 *
 * Every headshot is a 720x960 (3:4) JPEG named firstname-lastname.jpg, all
 * lowercase. Keep new ones to that pattern: the web host is case-sensitive, so
 * "Jane-Doe.JPG" would show up on a laptop and then break on the live site.
 * Leaving `photo` off shows the person's initials instead.
 */
export const officers: Officer[] = [
  {
    name: 'Yesenia Navarro',
    position: 'President',
    major: 'Data Science',
    year: 'Senior',
    photo: '/images/board/yesenia-navarro.jpg',
  },
  {
    name: 'Jasmine Do',
    position: 'Co-President',
    major: 'Data Science',
    year: 'Senior',
    photo: '/images/board/jasmine-do.jpg',
  },
  {
    name: 'Kimmy Empringham',
    position: 'Vice President',
    major: 'Data Science & Quantitative Economics',
    year: 'Senior',
    photo: '/images/board/kimmy-empringham.jpg',
  },
  {
    name: 'Nicolas Mendoza',
    position: 'Treasurer',
    major: 'Computer Science',
    year: 'Senior',
    photo: '/images/board/nicolas-mendoza.jpg',
  },
  {
    name: 'James Petropulos',
    position: 'Secretary',
    major: 'Data Science',
    year: 'Senior',
    photo: '/images/board/james-petropulos.jpg',
  },
  {
    name: 'Ethan Gerez',
    position: 'Graphic Design',
    major: 'Applied Math & Data Science',
    year: 'Junior',
    photo: '/images/board/ethan-gerez.jpg',
  },
  {
    name: 'Joel Spencer',
    position: 'Event Coordinator',
    major: 'Economics',
    year: 'Senior',
    photo: '/images/board/joel-spencer.jpg',
  },
  {
    name: 'Kaylen Wi',
    position: 'Event Coordinator',
    major: 'Data Science',
    year: 'Junior',
    photo: '/images/board/kaylen-wi.jpg',
  },
  {
    name: 'Keira McMurray',
    position: 'Recruitment Officer',
    major: 'Economics',
    year: 'Junior',
    photo: '/images/board/keira-mcmurray.jpg',
  },
  {
    name: 'Dom Brandes',
    position: 'Chief Technology Officer',
    major: 'Computer Engineering',
    year: 'Senior',
    photo: '/images/board/dom-brandes.jpg',
  },
];

export const advisor = {
  name: 'Kyle Hasenstab',
  title: 'Faculty Advisor',
  /** TODO: e.g. 'Department of Mathematics and Statistics'. Leave empty to hide. */
  department: '',
  /** TODO: e.g. '/images/board/kyle-hasenstab.jpg' */
  photo: '',
};
