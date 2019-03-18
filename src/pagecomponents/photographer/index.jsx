import React from 'react';

import { Gallery } from '../../components/gallery';

import SEO from '../../components/seo';

import asylum from '../../assets/photographer/asylum.jpg';
import alive from '../../assets/photographer/alive.jpg';
import akt from '../../assets/photographer/akt.jpg';
import blink from '../../assets/photographer/blink.jpg';
import custodian from '../../assets/photographer/custodian.jpg';
import dawn from '../../assets/photographer/dawn-of-a-new-day.jpg';
import existence from '../../assets/photographer/existence.jpg';
import fallen from '../../assets/photographer/fallen.jpg';
import one from '../../assets/photographer/one-in-thousands.jpg';
import reached from '../../assets/photographer/reached-the-point-of-belonging.jpg';
import suche from '../../assets/photographer/suche.jpg';
import way from '../../assets/photographer/way.jpg';
import way2 from '../../assets/photographer/way2.jpg';

import './styles.styl';

const ImageDetail = image => (
  <img
    alt={`${image.title}: ${image.alt}`}
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
    title: 'Asylum',
    src: asylum,
    alt: 'Worn out sepia photograph of the front of an old building. The door is open and there are withered trees in front of it.',
  },
  {
    title: 'Reached the point of belonging',
    src: reached,
    alt: 'A dark, yellow-lit corridor of an abandoned building. There is graffiti on the walls and dirt on the ground. The corridor leads to an open doorway.',
  },
  {
    title: 'Existence',
    src: existence,
    alt: 'A black and white photograph of the front of a church, from a frog\'s eye view. In front of the church there is a beggar sitting.',
  },
  {
    title: 'Alive',
    src: alive,
    alt: 'Black and white photograph of tree branches forming a twisted shape.',
  },
  {
    title: 'Fallen',
    src: fallen,
    alt: 'Dark and moody view of a needle forest. One tree has fallen down and lies in the front.',
  },
  {
    title: 'Way',
    src: way,
    alt: 'Very dark forest with a path leading off into the darkness.',
  },
  {
    title: 'One in thousands',
    src: one,
    alt: 'Autumn forest view with very saturated reds and oranges in the lush leaves. There is one tree with very yellow moss growing on it standing out.',
  },
  {
    title: 'Dawn of a new day',
    src: dawn,
    alt: 'View of a tranquil pond in foggy weather. A path with two park benches leads around it. It is fall, so the trees are losing their red and orange leaves. Some ducks are swimming in the water.',
  },
  {
    title: 'Blink',
    src: blink,
    alt: 'A young man\'s naked torso with clock fingers sticking out of his belly button. The time runs quickly and he\'s trying to hold them back with all his power.',
  },
  {
    title: 'Custodian',
    src: custodian,
    alt: 'A pale figure in a black coat stands amidst a field of fog. A diffuse light shines in the top right corner. The figure has a grim look on his face.'
  },
  {
    title: 'Akt',
    src: akt,
    alt: 'A nude woman\'s back in black and white. Her head is in the shadow, so you cannot see her face.',
  },
  {
    title: 'Way II',
    src: way2,
    alt: 'A green forest path leading off into the distance.',
  },
  {
    title: 'Suche',
    src: suche,
    alt: 'Portrait of a young man that is reflected multiple times in mirror shards. In every shard there is a different variation of the man\'s face',
  },
];

export const Photographer = ({ inverse, active }) => (
  <main className={`photographer ${inverse ? 'inverse' : ''}`}>
    <Gallery
      active={active}
      detailView={ImageDetail}
      listView={ImageListItem}
      elements={images}
    />
  </main>
);
