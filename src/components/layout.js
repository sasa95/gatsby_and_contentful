import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import layoutStyles from '../styles/layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <div className={content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

const { container, content } = layoutStyles

export default Layout
