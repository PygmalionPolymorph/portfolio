import React from 'react';

import SEO from '../components/seo';
import { MusicEnthusiast } from '../pagecomponents/musicenthusiast/index';

import '../style/styles.styl';

export default () => (
  <section className="page">
    <SEO title="Music enthusiast" keywords={['portfolio', 'homepage', 'artist']} />
    <MusicEnthusiast />
    <MusicEnthusiast inverse />
  </section>
);

