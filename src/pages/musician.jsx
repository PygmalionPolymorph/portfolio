import React from 'react';
import { LinkBar } from '../components/linkBar';

import witches from '../images/witches.jpg';
import dearestAudio from '../assets/dearest.mp3';

export default () => (
  <>
    <section className="album">
      <img alt="Albumcover: Witches" src={witches} />
      <audio>
        <source type="audio/mp3" src={dearestAudio} />
      </audio>
    </section>
    <LinkBar links={['soundcloud']} />
  </>
);
