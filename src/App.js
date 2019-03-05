import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Technical from "./pages/technical/technical";
import Results from "./pages/results";
import Editor from "./pages/editor";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Hardware from "./pages/hardware/hardware";
import Tools from "./pages/tools/tools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

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
            <Route path="/hardware" component={Hardware} />
            <Route path="/tools" component={Tools} />
            <ToastContainer />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
