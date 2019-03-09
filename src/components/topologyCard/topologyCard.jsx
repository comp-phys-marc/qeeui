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
// material-ui
import Modal from "@material-ui/core/Modal";

import dashboardCardStyle from "../../assets/jss/material-dashboard-react/views/dashboardCardStyle.jsx";

class TopologyCard extends React.Component {
  static propTypes = {
    topology: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      topology: this.props.topology,
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleRequestResources = () => {
    const subject = "Resource Access Request";
    window.open(
      `mailto:marcus@quantumemulation.com?subject=${subject}`,
      "_blank"
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader color="success">
            <GridContainer>
              <GridItem xs={6} sm={6} md={6}>
                <h4 className={classes.cardTitleWhite}>Emulation Topology</h4>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <p className={classes.cardCategoryWhite}>Processor Types</p>
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
            <RegularButton color="success" onClick={this.handleOpen}>
              Add Resources
            </RegularButton>
          </CardFooter>
        </Card>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div className={classes.modal}>
            <h4>Scale Up!</h4>
            <p>
              To scale your resources, please contact us with your requirements
              and request early access to our resource management system.
            </p>
            <p>Contact: marcus@quantumemulation.com</p>
            <RegularButton
              color="success"
              onClick={this.handleRequestResources}
            >
              Contact Us
            </RegularButton>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(dashboardCardStyle)(TopologyCard);
