import React from 'react';
import { LinkBar } from '../components/linkBar';
import { Gallery } from '../components/gallery';

import witches from '../assets/musician/witches.jpg';
import dearestAudio from '../assets/musician/dearest.mp3';

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
    title: 'Witches',
    src: witches,
    alt: 'Albumcover for the album "Witches": A black and white portrait of a woman screaming in pain. There is white smoke rising up from out of her mouth.',
    audio: dearestAudio,
  },
];

export default () => (
  <>
    <Gallery elements={elements} detailView={TrackDetail} listView={TrackListItem} />
    <LinkBar links={['soundcloud']} />
  </>
);
