import React from 'react';

import { Github } from '../../icons/github';
import { LastFM } from '../../icons/lastfm';
import { Discogs } from '../../icons/discogs';
import { Soundcloud } from '../../icons/soundcloud';
import { Letterboxd } from '../../icons/letterboxd';
import { Instagram } from '../../icons/instagram';

import './styles.styl';

const linkComponents = {
  instagram: (
    <a href="https://instagram.com/pygmalion_polymorph">
      <Instagram />
    </a>
  ),
  letterboxd: (
    <a href="https://letterboxd.com/Pygmalimorph/">
      <Letterboxd />
    </a>
  ),
  soundcloud: (
    <a href="https://soundcloud.com/user-855988947">
      <Soundcloud />
    </a>
  ),
  github: (
    <a href="https://github.com/PygmalionPolymorph">
      <Github />
    </a>
  ),
  lastfm: (
    <a href="https://www.last.fm/user/Murmox">
      <LastFM />
    </a>
  ),
  discogs: (
    <a href="https://www.discogs.com/de/user/PygmalionPolymorph/collection/covers?sort_by=artists_sort">
      <Discogs />
    </a>
  ),
};

export const LinkBar = ({ links }) => (
  <nav className="linkbar">
    {
      links.map(l => <span key={l}>{linkComponents[l]}</span> || null)
    }
  </nav>
);
