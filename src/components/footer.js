import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer
    style={{
      background: '#1E1E24',
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        position: 'relative',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Copyright@2018
        </Link>
      </p>
    </div>
  </footer>
)

export default Footer
