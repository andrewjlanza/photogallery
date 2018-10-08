import React, { Component } from 'react'

class CategoryList extends Component {
  state = {}
  render() {
    return (
      <main>
        <aside className="Teams">
          Teams
          <p>
            These are the heavyweight teams that are comprised of the most
            talent soccer players in the world
          </p>
          <img src="https://images.unsplash.com/photo-1518604964608-053f9db26a16?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00c22484c3cf0700c9754ae3002160ab&auto=format&fit=crop&w=2250&q=80" />
        </aside>
        <aside className="Players">
          Players
          <p>
            These are the incredibly talented men who make the best teams in the
            world what they are, and who keep the fans coming back for more,
            time and time again.
          </p>
          <img src="https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e2e94705996b10309bc88a058d97cfe&auto=format&fit=crop&w=1489&q=80" />
        </aside>
      </main>
    )
  }
}

export default CategoryList