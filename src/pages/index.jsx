import React from 'react';

import SEO from '../components/seo';
import { Home } from '../pagecomponents/home/index';

import '../style/styles.styl';

const IndexPage = () => (
  <section className="page">
    <SEO title="Pygmalion Polymorph" keywords={['portfolio', 'homepage', 'artist']} />
    <Home />
    <Home inverse />
  </section>
);

export default IndexPage;
