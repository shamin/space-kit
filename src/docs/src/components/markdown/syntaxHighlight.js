import React from "react"
import PropTypes from "prop-types"
import Highlight, { defaultProps } from "prism-react-renderer"

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
