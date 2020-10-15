import React, { ReactNode } from 'react';
import Layout from '../layout';
import MDXStyler from './mdxStyler';

interface ComponentPageProps {
  children: ReactNode;
}

const ComponentPage: React.FC<ComponentPageProps> = (props: ComponentPageProps) => (
  <Layout>
    <div className="markdown">
      <MDXStyler>{props.children}</MDXStyler>
    </div>
  </Layout>
);

export default ComponentPage;
