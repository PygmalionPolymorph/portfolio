import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import './styles.styl';

export const Home = ({ image, inverse }) => (
  <main className={`home ${inverse ? 'inverse' : ''}`}>
    <section className="home__section home__head">
      <Img fluid={image.photo.src} className="home__statue" alt={image.photo.description} />
      <h1 className="home__pygmalionpolymorph">
        <span className="home__pygmalion">Πυγμαλιων</span>
        <span className="home__polymorph">Πολυμορφ</span>
      </h1>
    </section>
    <nav className="home__nav">
      <Link to="/artist">ARTIST</Link>
      <Link to="/musician">MUSICIAN</Link>
      <Link to="/photographer">PHOTOGRAPHER</Link>
      <Link to="/programmer">PROGRAMMER</Link>
      <Link to="/musicenthusiast">MUSIC ENTHUSIAST</Link>
      <Link to="/filmlover">FILM LOVER</Link>
    </nav>
  </main>
);
