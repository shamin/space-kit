import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div
      style={{ display: "flex", justifyContent: "flex-end", padding: "20px 0" }}
    >
      <p style={{ margin: 0 }}>
        <a
          href="https://github.com/shamin/space-kit"
          style={{
            textDecoration: `none`,
          }}
          target="_blank"
        >
          Github
        </a>
      </p>
    </div>
  </header>
)

export default Header
