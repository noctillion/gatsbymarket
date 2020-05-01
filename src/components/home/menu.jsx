import React, { Component } from "react"
import Title from "../global/title"

let getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

class Menu extends Component {
  constructor(props) {
    super(props)
    //console.log(props.items.edges)
    this.state = {
      items: props.items.edges,
      elemItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }

  handleItems = category => {
    let tempItems = [...this.state.items] // almacena todo
    if (category === "all") {
      this.setState(() => {
        return { elemItems: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState(() => {
        return { elemItems: items }
      })
    }
  }

  render() {
    console.log("categories", this.state.categories)
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best of our market"></Title>

            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow text-capitalize m-3"
                      onClick={() => {
                        this.handleItems(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="row">
              {this.state.elemItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <img
                        src={node.image}
                        alt={node.id}
                        width="80px"
                        height="80px"
                      ></img>
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">
                          <small>{node.title}</small>
                        </h6>
                        <h6 className="mb-0 text-yellow">
                          <small>${node.price}</small>
                        </h6>
                      </div>
                      <p className="text-muted text-justify">
                        <small>{node.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our market"></Title>
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize"></div>
              <h1>there are no items to display</h1>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default Menu
