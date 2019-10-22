const path = require('path')
const portfolioData = require('./src/data/portfolio.json')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const template = path.resolve('./src/templates/portfolio-item.js')

  portfolioData.forEach(item => {
    const path = item.name

    createPage({
      path,
      component: template,
      context: item,
    })
  })
}
