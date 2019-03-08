import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";

import Loader from "react-loader-spinner";

import topologyStyle from "../../assets/jss/material-dashboard-react/components/topologyStyle.jsx";

class Topology extends React.Component {
  static propTypes = {
    qubits: PropTypes.number,
    simulators: PropTypes.number,
    emulators: PropTypes.number
  };

  constructor(props) {
    super(props);

    this.state = {
      qubits: this.props.qubits,
      simulators: this.props.simulators,
      emulators: this.props.emulators
    };
  }
  render() {
    const { classes } = this.props;
    const { qubits, simulators, emulators } = this.state;
    return (
      <GridContainer>
        <GridItem xs={6} sm={6} md={6} className={classes.animationLabel}>
          <h2 className={classes.dataSizeLabel}>{qubits}</h2>
          <p className={classes.dataSizeLabel}>
            {qubits !== 1 ? "qubits" : "qubit"}
          </p>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} className={classes.animation}>
          <Loader type="MutatingDot" height={100} width={100} />
        </GridItem>
        <GridItem xs={6} sm={6} md={6} className={classes.animationLabel}>
          <h2 className={classes.dataSizeLabel}>{simulators}</h2>
          <p className={classes.dataSizeLabel}>
            {simulators !== 1 ? "simulators" : "simulator"}
          </p>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} className={classes.animation}>
          <Loader type="Grid" color="grey" height={40} width={40} />
        </GridItem>
        <GridItem xs={6} sm={6} md={6} className={classes.animationLabel}>
          <h2 className={classes.dataSizeLabel}>{emulators}</h2>
          <p className={classes.dataSizeLabel}>
            {emulators !== 1 ? "emulators" : "emulator"}
          </p>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} className={classes.animation}>
          <Loader type="RevolvingDot" color="grey" height={40} width={40} />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(topologyStyle)(Topology);
