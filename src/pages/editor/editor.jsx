import React from "react";
import PropTypes from "prop-types";
// api
import api from "../../api";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import EditorCard from "./cards/editorCard.jsx";

//redux
import { connect } from "react-redux";
import { setExperiments, clearCreating } from "../../actions/experiments";

import { toast } from "react-toastify";
import editorCardStyle from "../../assets/jss/material-dashboard-react/views/editorCardStyles.jsx";
import image from "../../assets/img/slate-background.jpg";

const mapStateToProps = state => {
  return {
    user: state.user,
    experiments: state.experiments.all,
    creating: state.experiments.creating
  };
};
const mapDispatchToProps = dispatch => ({
  setExperiments: experiments => dispatch(setExperiments(experiments)),
  clearCreating: () => dispatch(clearCreating())
});

class Experiments extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    experiment: PropTypes.object
  };

  constructor(props) {
    super(props);

    let userProps = null;
    let hasData = false;

    this.props.clearCreating();

    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.user
    ) {
      userProps = this.props.location.state.user;
      this.loadExperiments(userProps);
      hasData = true;
    }

    this.state = {
      ready: hasData
    };
  }
  showError = message => toast.error(message);
  componentWillReceiveProps(newProps) {
    const userProps = newProps["user"];
    this.loadExperiments(userProps);
  }
  loadExperiments = userProps => {
    if (!this.props.experiments && userProps.user != null) {
      const token = window.localStorage.getItem("token");
      const refresh_token = window.localStorage.getItem("refresh_token");
      api
        .post("/experiments", {
          user_id: userProps.user.id,
          token,
          refresh_token
        })
        .then(response => {
          this.props.setExperiments(response.data.experiments);
          this.setState({ ready: true });
        })
        .catch(error => {
          if (error.response.data.message) {
            this.showError(error.response.data.message);
          } else {
            this.showError(error.message);
          }
          if (error.response.status === 404) {
            this.setState({ ready: true });
          }
        });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          height: "100vh",
          overflow: "scroll"
        }}
      >
        <div className={classes.cardContainer}>
          <EditorCard />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(editorCardStyle)(Experiments));
