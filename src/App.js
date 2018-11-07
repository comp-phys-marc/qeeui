import React, { Component } from 'react'
import { connect } from 'react-redux'
import { simpleAction } from './actions/simpleAction'
import { Route, HashRouter } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing/landing'
import Simulations from './pages/simulations'
import Editor from './pages/editor'
import Login from './pages/login'
import Dashboard from './pages/dashboard'

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction()
  }
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/stuff" component={Simulations} />
            <Route path="/contact" component={Editor} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
