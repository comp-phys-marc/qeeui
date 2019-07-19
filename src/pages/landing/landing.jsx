import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./sections/productSection.jsx";
import ResearchSection from "./sections/researchSection.jsx";
import WorkSection from "./sections/workSection.jsx";
import ExampleSection from "./sections/exampleSection.jsx";
// import TeamSection from "./sections/teamSection.jsx";
import PasswordSection from "./sections/passwordSection.jsx";

//redux
import { connect } from "react-redux";

const landingRoutes = [];

const mapStateToProps = state => {
  return { passed: state.access.passed };
};

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { classes, ...rest } = this.props;
    const { width } = this.state;
    let isMobile = width <= 900;
    return (
      <div>
        <Header
          color="transparent"
          routes={landingRoutes}
          brand="Quantum Experiment Engine"
          rightLinks={this.props.passed && <HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        {isMobile === false && (
          <Parallax
            filter
            image={require("../../assets/img/landing-background.png")}
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h1 className={classes.title}>
                    Take quantum research to the next level.
                  </h1>
                  <h4>
                    Harness cloud infrastructure and AI to emulate, exectue,
                    analyze and interpret quantum computing experiments.
                  </h4>
                  <br />
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
        )}
        {isMobile === true && (
          <Parallax
            filter
            image={require("../../assets/img/mobile-landing-background.png")}
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h1 className={classes.title}>
                    Take quantum research to the next level.
                  </h1>
                  <br />
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
        )}
        <div className={classNames(classes.main, classes.mainRaised)}>
          {this.props.passed && (
            <div className={classes.container}>
              <ProductSection />
              <ResearchSection />
              <ExampleSection isMobile={isMobile} />
              {/* <TeamSection /> */}
              <WorkSection />
            </div>
          )}
          {!this.props.passed && (
            <div className={classes.container}>
              <PasswordSection />
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(withStyles(landingPageStyle)(LandingPage));
