import React from "react"
import { Link } from "gatsby"
import Title from "../global/title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="leadltext-muted mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              itaque at quod odit! Id et nam tenetur ducimus, aliquam sed
              dolores quisquam, consequuntur, tempore repellat laboriosam in quo
              non repudiandae. Deserunt atque sunt iusto reprehenderit quasi
              dolore, veniam quia adipisci eos culpa nemo repudiandae molestias
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
