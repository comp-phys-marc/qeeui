import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";

import architectureStyle from "../../../assets/jss/material-kit-react/views/technicalPageSections/architectureStyle.jsx";

import architecture from "../../../assets/img/architecture.png";

class ArchitectureSection extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title}>Experiment Engine Architecture</h2>
            <img
              src={architecture}
              alt="architecture"
              className={classes.archImage}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(architectureStyle)(ArchitectureSection);
