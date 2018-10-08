import React, { Component } from 'react'

class PhotoList extends Component {
  state = {}
  render() {
    return (
      <article>
        <h1> Teams </h1>
        <h2>
          These are the heavyweight teams that are comprised of the most talent
          soccer players in the world
        </h2>
        <img src="https://images.unsplash.com/photo-1518604964608-053f9db26a16?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00c22484c3cf0700c9754ae3002160ab&auto=format&fit=crop&w=2250&q=80" />
        <a href=""> Kicking</a>
        <img src="https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e2e94705996b10309bc88a058d97cfe&auto=format&fit=crop&w=1489&q=80" />
        <a href=""> Trophy</a>
      </article>
    )
  }
}

export default PhotoList
