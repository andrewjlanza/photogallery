import React, { Component } from 'react'
import Data from './Data.json'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class CategoryList extends Component {
  state = {}
  render() {
    return (
      <main>
        {Object.keys(Data).map(category => {
          return (
            <aside className="panda">
              <h2>
                <Link to={`/${category}`}>{Data[category].title} </Link>
              </h2>
              <p>{Data[category].description}</p>
              <img src={Data[category].photos[0].imageURL} />
            </aside>
          )
        })}
      </main>
    )
  }
}

export default CategoryList
