import React from 'react';

import { Gallery } from '../../components/gallery';

import SEO from '../../components/seo';

import asylum from '../../assets/photographer/asylum.jpg';
import belonging from '../../assets/photographer/belonging.jpg';
import barrier from '../../assets/photographer/barrier.jpg';
import dawn from '../../assets/photographer/dawn.jpg';
import suche from '../../assets/photographer/suche.jpg';

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
    title: 'Barrier',
    src: barrier,
    alt: 'Black and white photograph of two chains with a dark atmosphere',
  },
  {
    title: 'Suche',
    src: suche,
    alt: 'Portrait of a young man that is reflected multiple times in mirror shards. In every shard there is a different variation of the man\'s face',
  },
  {
    title: 'Asylum',
    src: asylum,
    alt: 'Worn out sepia photograph of the front of an old building. The door is open and there are withered trees in front of it.',
  },
  {
    title: 'Reached the point of belonging',
    src: belonging,
    alt: 'A dark, yellow-lit corridor of an abandoned building. There is graffiti on the walls and dirt on the ground. The corridor leads to an open doorway.',
  },
  {
    title: 'Dawn of a new day',
    src: dawn,
    alt: 'View of a tranquil pond in foggy weather. A path with two park benches leads around it. It is fall, so the trees are losing their red and orange leaves. Some ducks are swimming in the water.',
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
