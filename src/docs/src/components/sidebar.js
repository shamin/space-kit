import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Sidebar = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `)

  return (
    <div className="sidebar">
      <div>
        <h1>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div>
        <ul>
          {data.allMdx.edges.map(edge => (
            <li key={edge.node.id}>
              <Link to={edge.node.frontmatter.path}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
