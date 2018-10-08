import React, { Component } from 'react'
import Data from './Data.json'

class PhotoList extends Component {
  state = {}
  render() {
    return (
      <article>
        <h1> {Data['teamName'].title} </h1>
        <h2>{Data['teamName'].description}</h2>
        {Data['teamName'].photos.map(photo => {
          return (
            <figure>
              <img src={photo.imageURL} />
              <a href="">{photo.title} </a>
            </figure>
          )
        })}
      </article>
    )
  }
}

export default PhotoList
