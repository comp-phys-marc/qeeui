import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import CardFooter from "../Card/CardFooter.jsx";
import RegularButton from "../CustomButtons/Button.jsx";

import dashboardCardStyle from "../../assets/jss/material-dashboard-react/views/dashboardCardStyle.jsx";

class CircuitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circuit: this.props.circuit
    };
  }

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
        <CardBody>
          <img
            className={classes.responsiveImage}
            src={this.state.circuit}
            alt="circuit"
          />
        </CardBody>
        <CardFooter>
          <RegularButton color="warning">Save</RegularButton>
        </CardFooter>
      </Card>
    );
  }
}

export default withStyles(dashboardCardStyle)(CircuitCard);
