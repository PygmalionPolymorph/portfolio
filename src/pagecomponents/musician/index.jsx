import React from 'react';
import Img from 'gatsby-image';
import { LinkBar } from '../../components/linkBar';
import { Gallery } from '../../components/gallery';

import './styles.styl';

const TrackDetail = track => (
  <>
    <Img
      className="gallery__active"
      fluid={track.cover.src}
      alt={`${track.title}: ${track.description}`}
      imgStyle={{
        objectFit: 'contain',
      }}
    />
    <audio controls src={track.audio} />
  </>
);

const TrackListItem = (track, i) => (
  <Img
    fixed={track.cover.thumb}
    alt={`Track #${i}: ${track.title}`}
    className="gallery__list-image"
  />
);

export const Musician = ({ elements, inverse, active }) => (
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
