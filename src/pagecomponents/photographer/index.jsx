import React from 'react';
import Img from 'gatsby-image';

import { Gallery } from '../../components/gallery';

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
    alt={`Photo #${i}: ${image.title}`}
    className="gallery__list-image"
  />
);

export const Photographer = ({ images, inverse, active }) => (
  <main className={`photographer ${inverse ? 'inverse' : null}`}>
    <Gallery
      active={active}
      detailView={ImageDetail}
      listView={ImageListItem}
      elements={images}
    />
  </main>
);
