import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const PortafolioPage = () => {
  return (
    <Layout pageTitle="My Portafolio">
      <p>My projects will go in here</p>
    </Layout>
  )
}

export const Head = () => <Seo title="My Portafolio" />

export default PortafolioPage