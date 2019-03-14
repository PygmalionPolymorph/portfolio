import React from 'react';
import { Link } from 'gatsby';

import statue from '../../images/statue.png';

import './styles.css';

export const Home = ({ inverse }) => (
  <main className={`home ${inverse ? 'home--inverse' : ''}`}>
    <section className="home__section home__head">
      <img className="home__statue" src={statue} alt="A greek statue of a woman, with a man kneeling behind it, hugging the woman's foot in humility." />
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
      <Link to="/japanophile">JAPANOPHILE</Link>
    </nav>
  </main>
);
