import React, { Component } from 'react'
import { Route, HashRouter } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing/landing'
import Technical from './pages/technical/technical'
import Results from './pages/results'
import Editor from './pages/editor'
import Login from './pages/login'
import Dashboard from './pages/dashboard'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/results" component={Results} />
            <Route path="/editor" component={Editor} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/technical" component={Technical} />
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App
