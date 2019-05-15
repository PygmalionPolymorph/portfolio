import React from 'react';
import { graphql } from 'gatsby';
import {
  compose, prop, head, path,
} from 'ramda';

import SEO from '../components/seo';
import { Home } from '../pagecomponents/home/index';

import '../style/styles.styl';

const extract = compose(
  prop('node'),
  head,
  path(['allContentfulImage', 'edges']),
);

export const query = graphql`
  {
    allContentfulImage(filter: { title: { eq: "Galatea" }}) {
      edges {
        node {
          title
          photo {
            description
            src: fluid(maxWidth: 350, quality:100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default ({ data }) => (
  <section className="page">
    <SEO title="Portfolio" keywords={['portfolio', 'homepage', 'artist']} />
    <Home image={extract(data)} />
    <Home image={extract(data)} inverse />
  </section>
);
