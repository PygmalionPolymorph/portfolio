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
    alt: '',
  },
  {
    title: 'Alive',
    src: alive,
    alt: '',
  },
  {
    title: 'Fallen',
    src: fallen,
    alt: '',
  },
  {
    title: 'Way',
    src: way,
    alt: '',
  },
  {
    title: 'One in thousands',
    src: one,
    alt: '',
  },
  {
    title: 'Dawn of a new day',
    src: dawn,
    alt: 'View of a tranquil pond in foggy weather. A path with two park benches leads around it. It is fall, so the trees are losing their red and orange leaves. Some ducks are swimming in the water.',
  },
  {
    title: 'Blink',
    src: blink,
    alt: '',
  },
  {
    title: 'Custodian',
    src: custodian,
    alt: '',
  },
  {
    title: 'Akt',
    src: akt,
    alt: '',
  },
  {
    title: 'Way II',
    src: way2,
    alt: '',
  },
  {
    title: 'Suche',
    src: suche,
    alt: 'Portrait of a young man that is reflected multiple times in mirror shards. In every shard there is a different variation of the man\'s face',
  },
];

export const Photographer = ({ inverse, active }) => (
  <main className={`photographer ${inverse ? 'inverse' : null}`}>
    <SEO title="Artist | PygmalionPolymorph" />
    <Gallery
      active={active}
      detailView={ImageDetail}
      listView={ImageListItem}
      elements={images}
    />
  </main>
);
