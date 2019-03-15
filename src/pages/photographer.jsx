import React from 'react';
import { stream } from 'flyd';
import { useStreamState } from '../utils/stream';

import SEO from '../components/seo';
import { Photographer } from '../pagecomponents/photographer/index';

import '../style/styles.styl';

const active = stream(0);

export default () => {
  useStreamState(active);

  return (
    <section className="page">
      <SEO title="Pygmalion Polymorph" keywords={['portfolio', 'homepage', 'artist']} />
      <Photographer active={active} />
      <Photographer active={active} inverse />
    </section>
  );
};
