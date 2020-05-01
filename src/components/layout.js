/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./global/navbar"
import Footer from "../components/global/footer"

import "./layout.css"

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <Footer />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
