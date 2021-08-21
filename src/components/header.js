import * as React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
// import gatsby from '../images/gatsby-icon.png'

const Header = ({ siteTitle }) => {
  const site = useStaticQuery(
    graphql`
   query{
  site {
    siteMetadata {
      title
      author
      description
      siteUrl
     
    }
  }
}`
  )
  console.log("site", site)

  return (

    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {siteTitle}
            {/*<img src={gatsby} alt="gatsby image" />*/}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
