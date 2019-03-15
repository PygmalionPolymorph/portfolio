import React from 'react';
import { stream } from 'flyd';
import { useStreamState } from '../utils/stream';

import SEO from '../components/seo';
import { Artist } from '../pagecomponents/artist/index';

import '../style/styles.styl';

const active = stream(0);

export default () => {
  useStreamState(active);

  return (
    <section className="page">
      <SEO title="Artist" keywords={['portfolio', 'homepage', 'artist']} />
      <Artist active={active} />
      <Artist active={active} inverse />
    </section>
  );
};
