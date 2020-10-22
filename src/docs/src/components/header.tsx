import React from 'react';

const Header = () => (
  <header role="banner">
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px 0' }}>
      <p style={{ margin: 0 }}>
        <a
          href="https://github.com/shamin/space-kit"
          style={{
            textDecoration: 'none',
          }}
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
    </div>
  </header>
);

export default Header;
