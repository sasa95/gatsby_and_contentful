import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import '../styles/index.scss'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Welcome to Care by Kreativ!</h1>
      <p>
        Need a service? <Link to="/contact">Contact us.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
