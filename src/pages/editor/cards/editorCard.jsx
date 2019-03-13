import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// api
import api from "../../../api";
// core components
import GridItem from "../../../components/Grid/GridItem.jsx";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";
import RegularButton from "../../../components/CustomButtons/Button.jsx";
//redux
import { connect } from "react-redux";
import { saveExperiment } from "../../../actions/experiments";
// router
import { withRouter } from "react-router";
import { toast } from "react-toastify";
import AceEditor from "react-ace";

import "brace/mode/python";
import "brace/theme/solarized_dark";

import demoExperiment from "../../../config/demo/experimentConfig";
import editorCardStyle from "../../../assets/jss/material-dashboard-react/views/editorCardStyles.jsx";

const mapDispatchToProps = dispatch => ({
  saveExperiment: experiment => dispatch(saveExperiment(experiment))
});

class EditorCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      experiment:
        this.props.location &&
        this.props.location.state &&
        this.props.location.state &&
        this.props.location.state.experiment
          ? this.props.location.state.experiment
          : demoExperiment,
      result: "Results will appear here..."
    };
    this.state.experiment.code = this.state.experiment.code
      ? this.state.experiment.code
      : 'OPENQASM 2.0;include "qelib1.inc";'.replace(/;/g, ";\n");
  }
  onChange = code => {
    this.setState({ experiment: { ...this.state.experiment, code } });
  };
  goBack = () => {
    this.props.history.push({
      pathname: "/dashboard",
      state: { experiment: this.state.experiment }
    });
  };
  showDemoMessage = () => {
    this.showInfo("This feature is not enabled in demo mode.");
  };
  submitCode = () => {
    const token = window.localStorage.getItem("token");
    const refresh_token = window.localStorage.getItem("refresh_token");
    api
      .post("/experiments/update", {
        id: this.state.experiment.id,
        code: this.state.experiment.code,
        token,
        refresh_token
      })
      .then(response => {
        this.props.saveExperiment(response.data.experiment);
        this.showSuccess(response.data.message);
      })
      .catch(error => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          this.showError(error.response.data.message);
        } else {
          this.showError(error.message);
        }
      });
  };
  runCode = () => {
    const token = window.localStorage.getItem("token");
    const refresh_token = window.localStorage.getItem("refresh_token");
    api
      .post("/simulate", {
        user_id: this.state.experiment.user_id,
        code: this.state.experiment.code,
        name: this.state.experiment.name + new Date().getDate(),
        experiment_id: this.state.experiment.id,
        token,
        refresh_token
      })
      .then(response => {
        this.showSuccess(response.data.message);
        this.setState({
          result: response.data.result
            .replace(/\\n/g, "\n")
            .replace(/;/g, ";\n")
        });
      })
      .catch(error => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          this.showError(error.response.data.message);
        } else {
          this.showError(error.message);
        }
      });
  };
  showError = message => toast.error(message);
  showSuccess = message => toast.success(message);
  showInfo = message => toast.info(message);
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader color="primary">
          <GridContainer>
            <GridItem xs={10} sm={8} md={6}>
              <h4 className={classes.cardTitleWhite}>QASM Editor</h4>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <p className={classes.cardCategoryWhite}>
                {this.state.experiment.name}
              </p>
            </GridItem>
          </GridContainer>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <AceEditor
                mode="python"
                theme="solarized_dark"
                onChange={this.onChange}
                name="editordiv"
                editorProps={{ $blockScrolling: true }}
                value={this.state.experiment.code}
              />
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <pre className={classes.results}>{this.state.result}</pre>
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <RegularButton onClick={this.goBack}>Go Back</RegularButton>
          <RegularButton
            onClick={
              this.state.experiment.name !== "DEMO"
                ? this.submitCode
                : this.showDemoMessage
            }
            color="success"
          >
            Save
          </RegularButton>
          <RegularButton
            onClick={
              this.state.experiment.name !== "DEMO"
                ? this.runCode
                : this.showDemoMessage
            }
            color="danger"
          >
            New Execution >>
          </RegularButton>
        </CardFooter>
      </Card>
    );
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(withStyles(editorCardStyle)(EditorCard))
);
