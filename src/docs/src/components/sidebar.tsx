import React, { FunctionComponent } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

interface SidebarTypes {
  siteTitle: string;
}

const Sidebar: FunctionComponent<SidebarTypes> = ({ siteTitle }: SidebarTypes) => {
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
  `);

  return (
    <div className="sidebar" role="navigation" aria-label="sidebar">
      <div>
        <h1 className="logo">
          <Link
            to="/"
            style={{
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <nav>
        <ul>
          {data.allMdx.edges.map((edge) => (
            <li key={edge.node.id}>
              <Link to={edge.node.frontmatter.path}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
