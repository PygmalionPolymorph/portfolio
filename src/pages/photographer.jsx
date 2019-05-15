import { stream } from 'flyd';
import { graphql } from 'gatsby';
import React from 'react';
import {
  compose, map, head, path,
} from 'ramda';

import SEO from '../components/seo';
import { Photographer } from '../pagecomponents/photographer/index';

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
    allContentfulCategory(filter: { title: { eq: "photographer" }}) {
      edges {
        node {
          title
          items {
            ...on ContentfulImage {
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
  }
`;

const active = stream(0);

export default ({ data }) => {
  useStreamState(active);

  return (
    <section className="page">
      <SEO title="Photographer" keywords={['portfolio', 'homepage', 'photographer']} />
      <Photographer images={gallery(data)} active={active} />
      <Photographer images={[]} active={active} inverse />
    </section>
  );
};
