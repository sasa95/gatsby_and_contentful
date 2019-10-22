import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Head from '../components/head'

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allPortfolioJson {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  const items = data.allPortfolioJson.edges

  return (
    <Layout>
      <Head title="Portfolio" />
      <h1>Portfolio Projects</h1>
      <ol>
        {items.map(item => (
          <li key={item.node.name}>
            <Link to={`/${item.node.name}`}>{item.node.name}</Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default PortfolioPage
