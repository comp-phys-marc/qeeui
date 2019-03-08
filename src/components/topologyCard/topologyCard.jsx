import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import CardFooter from "../Card/CardFooter.jsx";
import RegularButton from "../CustomButtons/Button.jsx";
import Topology from "../Topology/Topology.jsx";

import dashboardCardStyle from "../../assets/jss/material-dashboard-react/views/dashboardCardStyle.jsx";

class TopologyCard extends React.Component {
  static propTypes = {
    topology: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      topology: this.props.topology
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader color="success">
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <h4 className={classes.cardTitleWhite}>Emulation Topology</h4>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <p className={classes.cardCategoryWhite}>Data Type Densities</p>
            </GridItem>
          </GridContainer>
        </CardHeader>
        <CardBody>
          <Topology
            qubits={this.state.topology.qubits}
            simulators={this.state.topology.simulators}
            emulators={this.state.topology.emulators}
          />
        </CardBody>
        <CardFooter>
          <RegularButton color="success">Explanation</RegularButton>
        </CardFooter>
      </Card>
    );
  }
}

export default withStyles(dashboardCardStyle)(TopologyCard);
