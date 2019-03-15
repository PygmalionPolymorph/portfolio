import React from 'react';
import { stream } from 'flyd';
import { useStreamState } from '../utils/stream';

import SEO from '../components/seo';
import { Musician } from '../pagecomponents/musician/index';

import '../style/styles.styl';

const active = stream(0);

export default () => {
  useStreamState(active);

  return (
    <section className="page">
      <SEO title="Musician" keywords={['portfolio', 'homepage', 'artist']} />
      <Musician active={active} />
      <Musician active={active} inverse />
    </section>
  );
};
