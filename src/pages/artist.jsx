import { stream } from 'flyd';
import { graphql } from 'gatsby';
import React from 'react';
import {
  compose, map, head, path,
} from 'ramda';

import SEO from '../components/seo';
import { Artist } from '../pagecomponents/artist/index';

import '../style/styles.styl';
import { useStreamState } from '../utils/stream';

const gallery = compose(
  map(n => ({
    title: n.title,
    description: n.photo.description,
    thumb: n.photo.thumb,
    src: n.photo.src,
  })),
  path(['node', 'items']),
  head,
  path(['allContentfulCategory', 'edges']),
);

export const query = graphql`
{
  allContentfulCategory(filter: { title: { eq: "artist" }}) {
    edges {
      node {
        items {
          title
          photo {
            description
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
`;

const active = stream(0);

export default ({ data }) => {
  console.log(data);
  useStreamState(active);

  return (
    <section className="page">
      <SEO title="Artist" keywords={['portfolio', 'homepage', 'artist']} />
      <Artist images={gallery(data)} active={active} />
      <Artist images={gallery(data)} active={active} inverse />
    </section>
  );
};
