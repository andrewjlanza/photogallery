import React, { Component } from 'react'
import Data from './Data.json'

class CategoryList extends Component {
  state = {}
  render() {
    return (
      <main>
        {Object.keys(Data).map(category => {
          return (
            <aside className="Teams">
              <h2> {Data[category].team}</h2>
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
