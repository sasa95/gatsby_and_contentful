import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from '../styles/header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={header}>
      <h1>
        <Link className={title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={navList}>
          <li>
            <Link to="/" className={navItem} activeClassName={activeNavItem}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={navItem}
              activeClassName={activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={navItem}
              activeClassName={activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={navItem}
              activeClassName={activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const { navItem, activeNavItem, header, navList, title } = headerStyles

export default Header
