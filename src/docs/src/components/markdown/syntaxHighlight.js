import React from "react"
import PropTypes from "prop-types"
import Highlight, { defaultProps } from "prism-react-renderer"
import github from 'prism-react-renderer/themes/github';

export default class SyntaxHighlighter extends React.PureComponent {
  static propTypes = {
    children: PropTypes.string,
  }

  render() {
    return (
      <Highlight
        {...defaultProps}
        code={this.props.children.trim()}
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
    )
  }
}
