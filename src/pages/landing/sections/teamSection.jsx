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

import teamStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import ghose from "../../../assets/img/shohini-ghose.png";
import edwards from "../../../assets/img/marcus-edwards.png";
import church from "../../../assets/img/mchurch.png";
import bacso from "../../../assets/img/sbacso.png";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>The Team</h2>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card plain>
                <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                  <img src={edwards} alt="..." />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Marcus Edwards
                  <br />
                  <small className={classes.smallTitle}>
                    Author, Researcher, Developer
                  </small>
                </h4>
                <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                  <a href="https://mackedweise.github.io/">
                    <RegularButton>Portfolio</RegularButton>
                  </a>
                </GridItem>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>Advisors</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={ghose} alt="..." />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Dr. Shohini Ghose
                  <br />
                  <small className={classes.smallTitle}>
                    Scientific Advisor
                  </small>
                </h4>
                <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                  <a href="https://www.wlu.ca/academics/faculties/faculty-of-science/faculty-profiles/shohini-ghose/index.html">
                    <RegularButton>Portfolio</RegularButton>
                  </a>
                </GridItem>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={church} alt="..." />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Mark Church
                  <br />
                  <small className={classes.smallTitle}>
                    Technical Advisor
                  </small>
                </h4>
                <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                  <a href="https://www.linkedin.com/in/mark-church-4142b97/">
                    <RegularButton>Portfolio</RegularButton>
                  </a>
                </GridItem>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={bacso} alt="..." />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Stephen Bacso
                  <br />
                  <small className={classes.smallTitle}>
                    Technical Advisor
                  </small>
                </h4>
                <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                  <a href="https://www.linkedin.com/in/stephenbacso/">
                    <RegularButton>Portfolio</RegularButton>
                  </a>
                </GridItem>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
