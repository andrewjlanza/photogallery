import React, { Component } from 'react'
import Data from './Data.json'

class PhotoDetail extends Component {
  state = {}
  render() {
    return (
      <article>
        <h1> {Data['teamName'].photos[0].title}</h1>
        <img src={Data['teamName'].photos[0].imageURL} />
        <a href={Data['teamName'].photos[0].sourceURL}> Source</a>
      </article>
    )
  }
}

export default PhotoDetail
