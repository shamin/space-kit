import React from "react"
import { MDXProvider } from "@mdx-js/react"
import SyntaxHighligther from "./syntaxHighlight"
import { FunctionComponent } from "react"

const Components = {
  code: SyntaxHighligther,
}

const MDXStyler: FunctionComponent = props => (
  <MDXProvider components={Components}>{props.children}</MDXProvider>
)

export default MDXStyler
