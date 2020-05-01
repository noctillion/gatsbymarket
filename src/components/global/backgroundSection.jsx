import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ img, styledClass, title, children }) => {
  return (
    <BackgroundImage className={styledClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styledClass: "default-background",
}

export default BackgroundSection
