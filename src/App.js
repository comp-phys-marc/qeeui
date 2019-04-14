import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import api from "./api";
import Landing from "./pages/landing/landing";
import Technical from "./pages/technical/technical";
import Results from "./pages/results";
import Editor from "./pages/editor/editor";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Experiments from "./pages/experiments/experiments";
import Hardware from "./pages/hardware/hardware";
import Tools from "./pages/tools/tools";
import Hlq from "./pages/hlq/hlq";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { setUser } from "./actions/user";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const mapStateToProps = state => {
  return { user: state.user };
};
const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});

class App extends Component {
  componentWillMount() {
    this.syncAuth();
  }
  showError = message => toast.error(message);
  clearAuth = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("refresh_token");
  };
  persistAuth = (token, refresh_token) => {
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("refresh_token", refresh_token);
  };
  syncAuth = () => {
    const token = window.localStorage.getItem("token");
    const refresh_token = window.localStorage.getItem("refresh_token");

    if (token != null && refresh_token != null) {
      api
        .put("/auth", {
          token,
          refresh_token
        })
        .then(response => {
          this.setUser(response.data.User);
          this.persistAuth(response.data.token, response.data.refresh_token);
        })
        .catch(error => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            this.showError(error.response.data.message);
          } else {
            console.log(error.message);
          }
          this.clearAuth();
          window.location.replace(
            `${window.location.origin.toString()}/#/login`
          );
        });
    }
  };
  setUser = user => {
    this.props.setUser(user);
  };
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
            <Route path="/experiments" component={Experiments} />
            <Route path="/technical" component={Technical} />
            <Route path="/hardware" component={Hardware} />
            <Route path="/tools" component={Tools} />
            <Route path="/hlq" component={Hlq} />
            <ToastContainer />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
