import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Img1 from '../images/skoutelonas/26281e6f_original.webp'
import Img2 from '../images/skoutelonas/3a8d0e57_original.webp'
import Img3 from '../images/skoutelonas/73c7d1e7-8e91-4276-9f76-a0a9fc7d9868.webp'
import Img4 from '../images/skoutelonas/9121716f_original.webp'


const IndexPage = () => (
  <Layout>
    <h1>Gianni</h1>
    <p>O skoutelonas gamei</p>
    <p>This is a draft. It's gonna be badass. </p>
    <img src={Img1} />
    <img src={Img2} />
    <img src={Img3} />
    <img src={Img4} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
