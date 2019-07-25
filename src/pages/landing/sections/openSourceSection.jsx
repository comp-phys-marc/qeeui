import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";

import openSourceStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/openSourceStyle.jsx";
import gitlab from "../../../assets/img/gitlab.png";

class OpenSourceSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Contribution and Collaboration</h2>
            <h5 className={classes.description}>
              Anyone can request access to our codebase through{" "}
              <a href="https://gitlab.com/QuantumEmulator/distributedemulator">
                GitLab
              </a>
              !
            </h5>
            <a href="https://gitlab.com/QuantumEmulator/distributedemulator">
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                <img src={gitlab} alt="gitlab" />
              </GridItem>
            </a>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(openSourceStyle)(OpenSourceSection);
