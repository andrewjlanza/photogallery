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
          <header> Thank you for visiting this eyesore! </header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/:category" component={PhotoList} />
            <Route path="/:category/:index" component={PhotoDetail} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
