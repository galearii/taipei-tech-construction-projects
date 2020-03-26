import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import TaipeiTechLogo from "../images/taipei-tech-logo.svg"

function Header() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-blue-700 border-solid border-blue-800 border-t-8">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:px-8">
        <Link className="flex items-center no-underline text-white" to="/">
          <img
            className="fill-current h-12 mr-2 w-12"
            alt="Taipei Tech logo"
            src={TaipeiTechLogo}
          />
          <span className="text-xl tracking-tight">
            {site.siteMetadata.title}
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Header;
