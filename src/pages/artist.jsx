import React from 'react';

import { LinkBar } from '../components/linkBar';

import SEO from '../components/seo';
import Gallery from '../components/gallery/index';

import afloat from '../images/afloat.jpg';
import neondemon from '../images/neondemon.jpg';
import haunting from '../images/haunting.jpg';

const images = [
  {
    title: 'Afloat',
    src: afloat,
    alt: 'Black and white painting of a bare-chested woman in a foggy field. Her head is bent backwards and her eyes closed. She is surrounded by white lights.',
  },
  {
    title: 'The Neon Demon',
    src: neondemon,
    alt: 'Neon-colored portrait of a woman looking at the viewer. Her head is inside a pink glowing triangle. Her throat seems to be cut with blood running down her throat.',
  },
  {
    title: 'Haunting',
    src: haunting,
    alt: 'A woman in a long red gown is walking towards the viewer. Under the coat, she wears nothing, so you can see her bare body. The atmosphere is dark and haunting.'
  },
];

export default () => (
  <main className="page">
    <SEO title="Artist | PygmalionPolymorph" />
    <Gallery images={images} />
    <LinkBar links={['instagram']} />
  </main>
);
