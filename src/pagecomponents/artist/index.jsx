import React from 'react';

import afloat from '../../assets/artist/afloat.jpg';
import haunting from '../../assets/artist/haunting.jpg';
import neondemon from '../../assets/artist/neondemon.jpg';
import ballerina from '../../assets/artist/ballerina.jpg';
import figure from '../../assets/artist/figure.jpg';
import porcelainii from '../../assets/artist/porcelainii.jpg';
import tetris from '../../assets/artist/tetris.jpg';

import { Gallery } from '../../components/gallery';

import { LinkBar } from '../../components/linkBar';
import './styles.styl';

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
    title: 'Figure',
    src: figure,
    alt: 'A woman hangs from a rope, holding her body with her hands and feet, her back forming a tear shape.',
  },
  {
    title: 'Ballerina',
    src: ballerina,
    alt: 'Black and white painting of a dancing ballerina. She is standing on one toe and her eyes are closed in ecstasy.',
  },
  {
    title: 'Tetris',
    src: tetris,
    alt: 'A naked woman lying upside down, her crotch exposed. Where her genitalia would be, there is an empty rectangle with a tetris bar close to it.',
  },
  {
    title: 'Porcelain II',
    src: porcelainii,
    alt: 'A pencil portrait of a woman with short hair and a sharp eyeline. Her expression is between shocked and curious.',
  },
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
    alt: 'A woman in a long red gown is walking towards the viewer. Under the coat she wears nothing, so you can see her bare body. The atmosphere is dark and haunting.',
  },
];

export const Artist = ({ inverse, active }) => (
  <main className={`artist ${inverse ? 'inverse' : null}`}>
    <Gallery
      active={active}
      detailView={ImageDetail}
      listView={ImageListItem}
      elements={images}
    />
    <LinkBar links={['instagram']} />
  </main>
);
