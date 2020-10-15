import React, { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import SyntaxHighligther from './syntaxHighlight';

const Components = {
  code: SyntaxHighligther,
};

interface MDXStylerProps {
  children: ReactNode;
}

const MDXStyler: React.FC<MDXStylerProps> = (props: MDXStylerProps) => (
  <MDXProvider components={Components}>{props.children}</MDXProvider>
);

export default MDXStyler;
