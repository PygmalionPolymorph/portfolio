import React from 'react';
import { graphql } from 'gatsby';
import { stream } from 'flyd';
import {
  map, compose, head, path,
} from 'ramda';
import { useStreamState } from '../utils/stream';

import SEO from '../components/seo';
import { Musician } from '../pagecomponents/musician/index';

import '../style/styles.styl';

const gallery = compose(
  map(n => ({
    ...n,
    audio: n.audio.file.url,
  })),
  path(['node', 'items']),
  head,
  path(['allContentfulCategory', 'edges']),
);

export const query = graphql`
  {
    allContentfulCategory(filter: { title: { eq: "musician" }}) {
      edges {
        node {
          items {
            ... on ContentfulAudioTrack {
              title
              audio: track {
                file {
                  url
                }
              }
              description
              cover {
                src: fluid(maxWidth: 1000, quality:100) {
                  ...GatsbyContentfulFluid
                }
                thumb: fixed(height: 150, width: 150) {
                  ...GatsbyContentfulFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;

const active = stream(0);

export default ({ data }) => {
  useStreamState(active);

  return (
    <section className="page">
      <SEO title="Musician" keywords={['portfolio', 'homepage', 'artist']} />
      <Musician elements={gallery(data)} active={active} />
      <Musician elements={gallery(data)} active={active} inverse />
    </section>
  );
};
