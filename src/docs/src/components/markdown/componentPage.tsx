import React, { FunctionComponent } from "react"
import Layout from "../layout"
import MDXStyler from "./mdxStyler"

const ComponentPage: FunctionComponent = props => (
  <Layout>
    <div className="markdown">
      <MDXStyler>{props.children}</MDXStyler>
    </div>
  </Layout>
)

export default ComponentPage
