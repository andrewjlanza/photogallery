import React, { Component } from 'react'

class PhotoDetail extends Component {
  state = {}
  render() {
    return (
      <article>
        <h1> Kicking </h1>
        <img src="https://images.unsplash.com/photo-1518604964608-053f9db26a16?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00c22484c3cf0700c9754ae3002160ab&auto=format&fit=crop&w=2250&q=80" />
        <a href=""> Source</a>
      </article>
    )
  }
}

export default PhotoDetail
