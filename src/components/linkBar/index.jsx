import React from 'react';

import { Soundcloud } from '../../icons/soundcloud';
import { Letterboxd } from '../../icons/letterboxd';
import { Instagram } from '../../icons/instagram';

import './styles.css';

const linkComponents = {
  instagram: (
    <a href="https://instagram.com/u/pygmalion_polymorph">
      <Instagram />
    </a>
  ),
  letterboxd: (
    <a href="https://letterboxd.com/user/pygmalimorph">
      <Letterboxd />
    </a>
  ),
  soundcloud: (
    <a href="https://soundcloud.com/user-855988947">
      <Soundcloud/>
    </a>
  )
};

export const LinkBar = ({ links }) => (
  <nav className="linkbar">
    {
      links.map(l => <span key={l}>{linkComponents[l]}</span> || null)
    }
  </nav>
);
