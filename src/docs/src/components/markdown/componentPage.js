import React, { Component } from "react"
import Layout from "../layout"
import MDXStyler from "./mdxStyler"

export default class ComponentPage extends Component {
  render() {
    return (
      <Layout>
        <div className="markdown">
          <MDXStyler>{this.props.children}</MDXStyler>
        </div>
      </Layout>
    )
  }
}
