import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";

import softwareStyle from "../../../assets/jss/material-kit-react/views/hlqPage.jsx";

class SoftwareSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>What Is It?</h2>
            <h5 className={classes.description}>
              Unlike languages and frameworks for quantum programming being
              developed by other companies, HLQ focuses on giving the power of
              choice and control to the user. HLQ is a cloud native programming
              language, which means that it expects to be executed in a
              distributed cloud network environment. HLQ brings the various
              quantum technologies that exist together to from a Quantum Cloud,
              where a user can take advantage of each type of quantum device at
              once, and orchestrate them to achieve hybrid quantum algorithms.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(softwareStyle)(SoftwareSection);
