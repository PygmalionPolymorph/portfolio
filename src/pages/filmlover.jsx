import React from 'react';

import SEO from '../components/seo';
import { FilmLover } from '../pagecomponents/filmlover/index';

import '../style/styles.styl';

export default () => (
  <section className="page">
    <SEO title="Filmlover" keywords={['portfolio', 'homepage', 'artist']} />
    <FilmLover />
    <FilmLover inverse />
  </section>
);
