import React from 'react';

import { LinkBar } from '../components/linkBar';
import { Gallery } from '../components/gallery';

import SEO from '../components/seo';

import afloat from '../assets/artist/afloat.jpg';
import neondemon from '../assets/artist/neondemon.jpg';
import haunting from '../assets/artist/haunting.jpg';

const ImageDetail = image => (
  <img
    alt={`${image.name}: ${image.alt}`}
    src={image.src}
    className="gallery__active"
  />
);

const ImageListItem = (image, i) => (
  <img
    alt={`Painting #${i}: ${image.title}`}
    className="gallery__list-image"
    src={image.src}
  />
);

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
    alt: 'A woman in a long red gown is walking towards the viewer. Under the coat, she wears nothing, so you can see her bare body. The atmosphere is dark and haunting.',
  },
];

export default () => (
  <main className="page">
    <SEO title="Artist | PygmalionPolymorph" />
    <Gallery detailView={ImageDetail} listView={ImageListItem} elements={images} />
    <LinkBar links={['instagram']} />
  </main>
);
