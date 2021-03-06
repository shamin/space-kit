/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx, css } from '@emotion/core';
import { graphql, Link, useStaticQuery } from 'gatsby';

const logoStyles = css`
  text-decoration: none;
`;

const navItemStyles = css`
  margin-bottom: 10px;
  a {
    text-decoration: none;
  }
`;

interface MdxEdge {
  node: {
    id: string;
    frontmatter: {
      path: string;
      title: string;
    };
  };
}

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
          <Link to="/" css={logoStyles}>
            <span role="img" aria-label="logo">
              🧑‍🎤
            </span>
            {siteTitle}
          </Link>
        </h1>
      </div>
      <nav>
        <ul>
          {data.allMdx.edges
            .filter((edge: MdxEdge) => edge.node.frontmatter.path)
            .map((edge: MdxEdge) => (
              <li key={edge.node.id} css={navItemStyles}>
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
