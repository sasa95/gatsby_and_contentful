import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Head from '../components/head'

export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            img
          }
        }
      }
    }
  }
`

const PortfolioItem = ({ data }) => {
  return (
    <Layout>
      <Head title="Portfolio" />
      <h1>{data.allSitePage.edges[0].node.context.name}</h1>
      <img src={data.allSitePage.edges[0].node.context.img} alt="" />
    </Layout>
  )
}

export default PortfolioItem
