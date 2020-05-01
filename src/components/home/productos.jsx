import React, { Component } from "react"

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      elemItems: props.items.edges,
    }
  }

  render() {
    console.log("thisstate", this.state.items)
    return <div></div>
  }
}

export default Products
