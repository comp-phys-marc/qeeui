import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectExecution } from './actions/executions'
import { Route, HashRouter } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing/landing'
import Results from './pages/results'
import Editor from './pages/editor'
import Login from './pages/login'
import Dashboard from './pages/dashboard'

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  selectExecution: () => dispatch(selectExecution())
})

class App extends Component {
  selectExecution = event => {
    this.props.selectExecution()
  }
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/stuff" component={Results} />
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
