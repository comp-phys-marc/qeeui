import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
//quantum circuit
import QuantumCircuit from "quantum-circuit";
//toast
import { toast } from "react-toastify";

import circuitCardStyle from "../../assets/jss/material-dashboard-react/views/circuitCardStyle.jsx";

class CircuitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiment: this.props.experiment
    };
  }
  showError = message => toast.error(message);
  create_circuit = () => {
    if (this.state.experiment.code) {
      var circuit = new QuantumCircuit();
      const errorMethod = this.showError;
      circuit.importQASM(this.state.experiment.code, function(errors) {
        errorMethod(errors);
      });
      return circuit.exportSVG(true);
    } else {
      return "<h2>No code avaiable.</h2>";
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader color="warning">
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <h4 className={classes.cardTitleWhite}>Circuit Diagram</h4>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <p className={classes.cardCategoryWhite}>Unitary Operations</p>
            </GridItem>
          </GridContainer>
        </CardHeader>
        <CardBody
          className={classes.circuit}
          dangerouslySetInnerHTML={{ __html: this.create_circuit() }}
        />
      </Card>
    );
  }
}

export default withStyles(circuitCardStyle)(CircuitCard);
