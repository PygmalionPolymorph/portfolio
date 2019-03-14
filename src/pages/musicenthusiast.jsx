import React from 'react';
import { LinkBar } from '../components/linkBar';

export default () => (
  <>
    <section className="listing">
      <ul>
        <li>Prog</li>
        <li>Harsh Noise</li>
        <li>Ambient</li>
        <li>Krautrock</li>
        <li>Progmetal</li>
        <li>Hardcore</li>
        <li>Synth</li>
        <li>J-POP</li>
      </ul>
    </section>
    <LinkBar links={['lastfm', 'discogs']} />
  </>
);
