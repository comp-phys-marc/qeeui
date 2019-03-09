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
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
//redux
import { connect } from "react-redux";
import {
  selectExperiment,
  clearExperimentSelection,
  addExperiments
} from "../../../actions/experiments";
// router
import { withRouter } from "react-router";

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

import EmulatorDetails from "../sections/emulatorDetails.jsx";
import IbmqDetails from "../sections/ibmqDetails.jsx";
import PythonDetails from "../sections/pythonDetails.jsx";
import RustDetails from "../sections/rustDetails.jsx";

import ibmType from "../../../assets/img/ibmq_type.png";
import emulatorType from "../../../assets/img/emulator_type.png";
import pythonType from "../../../assets/img/python_type.png";
import rustType from "../../../assets/img/rust_type.png";

import { toast } from "react-toastify";

import experimentCardStyle from "../../../assets/jss/material-dashboard-react/views/experimentCardStyle.jsx";

const mapStateToProps = state => {
  return {
    experiments: state.experiments,
    user: state.user
  };
};
const mapDispatchToProps = dispatch => ({
  selectExperiment: selected => dispatch(selectExperiment(selected)),
  clearExperimentSelection: () => dispatch(clearExperimentSelection()),
  addExperiments: experiments => dispatch(addExperiments(experiments))
});

class CreateExperimentCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      experimentData: this.props.experiments,
      type: null,
      name: "",
      qubits: 5,
      maxQubits: 5
    };
  }
  showError = message => toast.error(message);
  componentWillMount() {
    this.props.clearExperimentSelection();
  }
  updateName = event => {
    this.setState({ name: event.target.value });
  };
  updateTypeIbmq = () => {
    const slider = this.refs.qubits.slider;
    this.setState({ type: "ibmq", maxQubits: 5 });
    slider.updateOptions({
      range: {
        min: 0,
        max: 5
      }
    });
    if (this.state.qubits > 5) {
      this.setState({ qubits: 5 });
    }
  };
  updateTypeEmulator = () => {
    const slider = this.refs.qubits.slider;
    this.setState({ type: "emulator", maxQubits: 2054 });
    slider.updateOptions({
      range: {
        min: 0,
        max: 2054
      }
    });
    if (this.state.qubits > 2054) {
      this.setState({ qubits: 2054 });
    }
  };
  updateTypePython = () => {
    const slider = this.refs.qubits.slider;
    this.setState({ type: "python", maxQubits: 100 });
    slider.updateOptions({
      range: {
        min: 0,
        max: 100
      }
    });
    if (this.state.qubits > 100) {
      this.setState({ qubits: 100 });
    }
  };
  updateTypeRust = () => {
    const slider = this.refs.qubits.slider;
    this.setState({ type: "rust", maxQubits: 100 });
    slider.updateOptions({
      range: {
        min: 0,
        max: 100
      }
    });
    if (this.state.qubits > 100) {
      this.setState({ qubits: 100 });
    }
  };
  updateQubits = event => {
    this.setState({ qubits: event[0] });
  };
  persistAuth = (token, refresh_token) => {
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("refresh_token", refresh_token);
  };
  submitCreateExperiment = () => {
    const { user } = this.props;
    const token = window.localStorage.getItem("token");
    const refresh_token = window.localStorage.getItem("refresh_token");
    api
      .post("/experiments/create", {
        user_id: user.user.id,
        name: this.state.name,
        type: this.state.type,
        qubits: parseInt(this.state.qubits),
        token,
        refresh_token
      })
      .then(response => {
        this.props.addExperiments([response.data.experiment]);
        this.props.history.push({
          pathname: "/dashboard",
          state: { experiment: response.data.experiment }
        });
      })
      .catch(error => {
        console.log(error);
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

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader color="primary">
          <GridContainer>
            <GridItem xs={10} sm={8} md={6}>
              <h4 className={classes.cardTitleWhite}>Create New Experiment</h4>
            </GridItem>
          </GridContainer>
        </CardHeader>
        <CardBody>
          <form className={classes.form}>
            <h4>Select Type</h4>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h5>Hardware</h5>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <img
                          className={classes.responsiveImage}
                          src={ibmType}
                          alt="ibmq"
                          onClick={this.updateTypeIbmq}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        IBM-QX4 5 Qubit Computer
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <img
                          className={classes.responsiveImage}
                          src={emulatorType}
                          alt="emulator"
                          onClick={this.updateTypeEmulator}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        Q.E.D. 2054 Qubit Electronic Emulator
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <h5>Software</h5>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <img
                          className={classes.responsiveImage}
                          src={pythonType}
                          alt="python"
                          onClick={this.updateTypePython}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        Q.E.D. Distributed Python Siumulator
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <img
                          className={classes.responsiveImage}
                          src={rustType}
                          alt="rust"
                          onClick={this.updateTypeRust}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        Q.E.D. Distributed Rust Simulator
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
            <div className={classes.detailContainer}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  {this.state.type === "ibmq" && <IbmqDetails />}
                  {this.state.type === "emulator" && <EmulatorDetails />}
                  {this.state.type === "python" && <PythonDetails />}
                  {this.state.type === "rust" && <RustDetails />}
                </GridItem>
              </GridContainer>
              <CustomInput
                labelText="Experiment Name..."
                id="name"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  value: this.state.name,
                  onChange: this.updateName,
                  type: "text"
                }}
              />
              <p>{`Qubits: ${parseInt(this.state.qubits)}`}</p>
              <Nouislider
                ref="qubits"
                className="slider-primary"
                onChange={this.updateQubits}
                range={{ min: 0, max: this.state.maxQubits }}
                start={5}
                step={1}
                connect
              />
            </div>
          </form>
        </CardBody>
        <CardFooter>
          <RegularButton onClick={this.submitCreateExperiment} color="primary">
            Create
          </RegularButton>
        </CardFooter>
      </Card>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(experimentCardStyle)(CreateExperimentCard))
);
