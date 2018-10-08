import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import CategoryList from './CategoryList.js'
import PhotoList from './PhotoList.js'
import PhotoDetail from './PhotoDetail.js'

class App extends Component {
  render() {
    return (
      <Router>
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
      </Router>
    )
  }
}

export default App
