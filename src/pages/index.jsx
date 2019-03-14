import React from "react"

import SEO from "../components/seo"
import { Home } from "../components/home/index";

import '../style/styles.css';

const IndexPage = () => (
  <section class="page">
    <SEO title="Pygmalion Polymorph" keywords={[`portfolio`, `homepage`, `artist`]} />
    <Home />
    <Home inverse />
  </section>
)

export default IndexPage
