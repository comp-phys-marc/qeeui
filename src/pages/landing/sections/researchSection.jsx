import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import RegularButton from "../../../components/CustomButtons/Button.jsx";

import researchStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/researchStyle.jsx";

import research1 from "../../../assets/img/qcircuit.png";
import research2 from "../../../assets/img/ccircuit.png";

class ResearchSection extends React.Component {
  render() {
    const { classes } = this.props;
    const scrollToBottom = () => {
      window.scrollTo(0, document.body.scrollHeight);
    };
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Driving Research Forward</h2>
            <h5 className={classes.description}>
              With help of cutting-edge tools, we aim to enable the advancement of
              our more ambitious research efforts, and provide better tools to
              the research commuity.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={research1} alt="..." />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Quantum Hardware
                  <br />
                  <small className={classes.smallTitle}>
                    Truly Quantum Backend Integrations
                  </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    We integrate with third party quantum hardware
                    backends to provide you insight into the quantum world.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={research2} alt="..." />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Classical Hardware
                  <br />
                  <small className={classes.smallTitle}>
                    Novel Simulators and Emulators
                  </small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    We provide software and hardware simulators designed
                    to perform educational experiments.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <h3 className={classes.title}>Doing research of your own?</h3>
              <RegularButton onClick={scrollToBottom}>
                Use the Experiment Engine
              </RegularButton>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(researchStyle)(ResearchSection);
