import React from 'react';

import { LinkBar } from '../components/linkBar';
import SEO from '../components/seo';


export default () => (
  <main className="page">
    <SEO title="Programmer | PygmalionPolymorph" />
    <section className="listing">
      <ul>
        <li>
          <span className="program-link">
            <span className="program-link__title">JavaScript</span>
            <small className="program-link__subline">Mithril / React / GraphQL / Typescript</small>
          </span>
        </li>
        <li>
          <span className="program-link">
            <span className="program-link__title">Functional Programming</span>
            <small className="program-link__subline">Haskell / Ramda / Flyd</small>
          </span>
        </li>
      </ul>
    </section>
    <section className="listing">
      <ul>
        <li>
          <a className="program-link" href="https://github.com/PygmalionPolymorph/kaleido">
            <span className="program-link__title">Kaleido</span>
            <small className="program-link__subline">State management with streams and lenses</small>
          </a>
        </li>
        <li>
          <a className="program-link" href="https://github.com/PygmalionPolymorph/irisrss">
            <span className="program-link__title">IrisRSS</span>
            <small className="program-link__subline">Lightweight self-hosted RSS-Reader</small>
          </a>
        </li>
        <li>
          <a className="program-link" href="https://github.com/PygmalionPolymorph/kanakyoushi">
            <span className="program-link__title">かな教師 Kanakyoushi</span>
            <small className="program-link__subline">Webapp for learning the japanese alphabets</small>
          </a>
        </li>
      </ul>
    </section>
    <LinkBar links={['github']} />
  </main>
);
