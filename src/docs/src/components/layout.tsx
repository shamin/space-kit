import React, { FunctionComponent, ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './layout.css';

import Sidebar from './sidebar';
import Header from './header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container">
      <div className="content-grid">
        <Sidebar siteTitle={data.site.siteMetadata?.title || 'Title'} />
        <div className="content-main">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
