import React from 'react';

import SEO from '../components/seo';
import { Programmer } from '../pagecomponents/programmer/index';

import '../style/styles.styl';

const IndexPage = () => (
  <section className="page">
    <SEO title="Pygmalion Polymorph" keywords={['portfolio', 'homepage', 'artist']} />
    <Programmer />
    <Programmer inverse />
  </section>
);

export default IndexPage;
