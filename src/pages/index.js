import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Gianni</h1>
    <p>O skoutelonas gamei</p>
    <p>This is a draft. It's gonna be badass. </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
