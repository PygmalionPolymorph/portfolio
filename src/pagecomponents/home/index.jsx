import React from 'react';
import { Link } from 'gatsby';

import galatea from '../../assets/home/galatea.png';

import './styles.styl';

export const Home = ({ inverse }) => (
  <main className={`home ${inverse ? 'inverse' : ''}`}>
    <section className="home__section home__head">
      <img className="home__statue" src={galatea} alt="A statue of a black haired and black eyed woman, with a man kneeling behind it, hugging the woman's foot in humility." />
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
