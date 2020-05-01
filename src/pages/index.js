import React from "react"
import { Link, graphql } from "gatsby" // de aqui viene data

import Layout from "../components/layout"
import BackgroundSection from "../components/global/backgroundSection"
import Info from "../components/home/info"
import Menu from "../components/home/menu"
import Products from "../components/home/productos"

import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Plants place"
      styledClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Products items={data.product} />
  </Layout>
)

/* ...GatsbyImageSharpFluid_tracedSVG era src en busqueda en visual graphql */
export let query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allMongodbMarketplaceCoffeItem {
      edges {
        node {
          id
          title
          description
          price
          category
          image
        }
      }
    }
    product: allMongodbMarketplaceCoffeProduct {
      edges {
        node {
          id
          image
          price
          title
        }
      }
    }
  }
`

export default IndexPage
