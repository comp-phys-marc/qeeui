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

import TensorFlowDetails from "../sections/tensorDetails.jsx";
import EmulatorDetails from "../sections/emulatorDetails.jsx";
import IbmqDetails from "../sections/ibmqDetails.jsx";
import CirqDetails from "../sections/cirqDetails.jsx";
import PythonDetails from "../sections/pythonDetails.jsx";
import RustDetails from "../sections/rustDetails.jsx";

import tensorType from "../../../assets/img/tensor_type.png";
import ibmType from "../../../assets/img/ibmq_type.png";
import emulatorType from "../../../assets/img/emulator_type.png";
import cirqType from "../../../assets/img/cirq_type.png";
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
      maxQubits: 5,
      emulatorId: ""
    };
  }
  showError = message => toast.error(message);
  validate = () => {
    return !(
      this.state.type !== "python" ||
      (this.state.type === "python" &&
        (this.state.name === "" || this.state.type === ""))
    );
  };
  componentWillMount() {
    this.props.clearExperimentSelection();
  }
  updateName = event => {
    this.setState({ name: event.target.value });
  };
  updateEmulatorId = event => {
    this.setState({ emulatorId: event.target.value });
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
    this.setState({ type: "emulator", maxQubits: 10 });
    slider.updateOptions({
      range: {
        min: 0,
        max: 10
      }
    });
    if (this.state.qubits > 2054) {
      this.setState({ qubits: 2054 });
    }
  };
  updateTypePython = () => {
    const slider = this.refs.qubits.slider;
    this.setState({ type: "python", maxQubits: 50 });
    slider.updateOptions({
      range: {
        min: 0,
        max: 50
      }
    });
    if (this.state.qubits > 50) {
      this.setState({ qubits: 50 });
    }
  };
  updateTypeRust = () => {
    const slider = this.refs.qubits.slider;
    this.setState({ type: "rust", maxQubits: 50 });
    slider.updateOptions({
      range: {
        min: 0,
        max: 50
      }
    });
    if (this.state.qubits > 50) {
      this.setState({ qubits: 50 });
    }
  };
  updateTypeCirq = () => {
    const slider = this.refs.qubits.slider;
    this.setState({ type: "cirq", maxQubits: 50 });
    slider.updateOptions({
      range: {
        min: 0,
        max: 50
      }
    });
    if (this.state.qubits > 50) {
      this.setState({ qubits: 50 });
    }
  };
  updateTypeTensor = () => {
    const slider = this.refs.qubits.slider;
    this.setState({ type: "tensor", maxQubits: 50 });
    slider.updateOptions({
      range: {
        min: 0,
        max: 50
      }
    });
    if (this.state.qubits > 50) {
      this.setState({ qubits: 50 });
    }
  };
  updateQubits = event => {
    this.setState({ qubits: event[0] });
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
        emulatorId: this.state.emulatorId,
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
          console.log(error.message);
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
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <br />
                <h3>Hardware</h3>
                <br />
                <hr />
                <br />
                <GridContainer>
                  {/* <GridItem xs={12} sm={4} md={4}>
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
                        Educational Emulator
                      </GridItem>
                    </GridContainer>
                  </GridItem> */}
                  <GridItem xs={12} sm={12} md={12}>
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
                  {/* <GridItem xs={12} sm={4} md={4}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <img
                          className={classes.responsiveImage}
                          src={tensorType}
                          alt="tensor"
                          onClick={this.updateTypeTensor}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        TensorFlow Emulator
                      </GridItem>
                    </GridContainer>
                  </GridItem> */}
                </GridContainer>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <br />
                <h3>Software</h3>
                <br />
                <hr />
                <br />
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
                        Python Simulator
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
                        Rust Simulator
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  {/* <GridItem xs={12} sm={4} md={4}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <img
                          className={classes.responsiveImage}
                          src={cirqType}
                          alt="cirq"
                          onClick={this.updateTypeCirq}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        Cirq Simulator
                      </GridItem>
                    </GridContainer>
                  </GridItem> */}
                </GridContainer>
              </GridItem>
            </GridContainer>
            <div className={classes.detailContainer}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  {this.state.type === "tensor" && <TensorFlowDetails />}
                  {this.state.type === "ibmq" && <IbmqDetails />}
                  {this.state.type === "emulator" && <EmulatorDetails />}
                  {this.state.type === "cirq" && <CirqDetails />}
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
              {this.state.type === "emulator" && (
                <CustomInput
                  labelText="Emulator ID..."
                  id="emulator-id"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    value: this.state.emulatorId,
                    onChange: this.updateEmulatorId,
                    type: "text"
                  }}
                />
              )}
            </div>
          </form>
        </CardBody>
        <CardFooter>
          <RegularButton
            disabled={!this.validate()}
            onClick={this.submitCreateExperiment}
            color="primary"
          >
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
