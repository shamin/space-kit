import React, { FunctionComponent } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';

interface SyntaxHighlighterProps {
  children: string;
}

const SyntaxHighlighter: FunctionComponent<SyntaxHighlighterProps> = (props) => (
  <Highlight
    {...defaultProps}
    code={props.children.trim()}
    language="jsx"
    theme={github}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <div className={`${className} syntax-highlight`} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </div>
    )}
  </Highlight>
);

export default SyntaxHighlighter;
