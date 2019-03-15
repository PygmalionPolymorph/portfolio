import React from 'react';
import { LinkBar } from '../../components/linkBar';
import { Gallery } from '../../components/gallery';

import dearest from '../../assets/musician/witches.jpg';
import dearestAudio from '../../assets/musician/dearest.mp3';

import zerotwentynine from '../../assets/musician/0-29.jpg';
import zerotwentynineAudio from '../../assets/musician/0-29.mp3';

import './styles.styl';

const TrackDetail = track => (
  <>
    <img
      alt={`${track.title}: ${track.alt}`}
      src={track.src}
      className="gallery__active"
    />
    <audio controls src={track.audio} />
  </>
);

const TrackListItem = (track, i) => (
  <img
    alt={`Track #${i}: ${track.title}`}
    className="gallery__list-image"
    src={track.src}
  />
);

const elements = [
  {
    title: 'Dearest',
    src: dearest,
    alt: 'Pencil drawing of a female hip with a rope tied around it. The genitalia are covered by a sakura blossom.',
    audio: dearestAudio,
  },
  {
    title: '0-29',
    src: zerotwentynine,
    alt: 'Drawing of a woman\'s body lying on the ground, the ground shattered beneath her. Her hair and shadow are emphasized by black watercolor.',
    audio: zerotwentynineAudio,
  },
];

export const Musician = ({ inverse, active }) => (
  <main className={`musician ${inverse ? 'inverse' : null}`}>
    <Gallery
      active={active}
      elements={elements}
      detailView={TrackDetail}
      listView={TrackListItem}
    />
    <LinkBar links={['soundcloud']} />
  </main>
);
