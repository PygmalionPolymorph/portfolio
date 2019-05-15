import React from 'react';
import Img from 'gatsby-image';

import { Gallery } from '../../components/gallery';

import { LinkBar } from '../../components/linkBar';
import './styles.styl';

const ImageDetail = image => (
  <Img
    className="gallery__active"
    fluid={image.src}
    alt={`${image.title}: ${image.description}`}
    imgStyle={{
      objectFit: 'contain',
    }}
  />
);

const ImageListItem = (image, i) => (
  <Img
    fixed={image.thumb}
    alt={`Painting #${i}: ${image.title}`}
    className="gallery__list-image"
  />
);

export const Artist = ({ images, inverse, active }) => (
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
