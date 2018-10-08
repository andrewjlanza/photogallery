import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CategoryList from './CategoryList.js'
import PhotoList from './PhotoList.js'
import PhotoDetail from './PhotoDetail.js'
import Players from './Players.js'
import Home from './Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header> Here's My Photo Gallery, Y'all! </header>
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
        <CategoryList />
        <PhotoList />
        <PhotoDetail />
      </div>
    )
  }
}

export default App
