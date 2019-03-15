import React from 'react';
import { LinkBar } from '../../components/linkBar';

import './styles.styl';

export const FilmLover = ({ inverse }) => (
  <main className={`filmlover ${inverse ? 'inverse' : null}`}>
    <section className="listing">
      <ul>
        <li>Park-Chan Wook</li>
        <li>Nicholas Winding Refn</li>
        <li>Wong Kar-Wai</li>
        <li>Denis Villeneuve</li>
        <li>Darren Arronofsky</li>
      </ul>
    </section>
    <section className="listing">
      <ul>
        <li>The Handmaiden</li>
        <li>The Neon Demon</li>
        <li>In the mood for love</li>
        <li>Blade Runner 2049</li>
        <li>mother!</li>
        <li>Seven Samurai</li>
        <li>Raw</li>
      </ul>
    </section>
    <LinkBar links={['letterboxd']} />
  </main>
);
