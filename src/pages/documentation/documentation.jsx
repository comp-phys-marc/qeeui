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

import documentationPageStyle from "../../assets/jss/material-kit-react/views/documentationPage.jsx";

const landingRoutes = [];

class DocumentationPage extends React.Component {
  constructor() {
    super();
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
      <div className={classes.content}>
        <Header
          color="white"
          routes={landingRoutes}
          brand="Quantum Experiment Engine"
          rightLinks={<HeaderLinks />}
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
            image={require("../../assets/img/documentation-background.png")}
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h1 className={classes.title}>Platform Documentation.</h1>
                  <h4>
                    A lot goes into the quantum experiment engine. Learn about
                    it here.
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
            image={require("../../assets/img/mobile-documentation-background.png")}
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h1 className={classes.title}>Platform Documentation.</h1>
                  <br />
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
        )}
        <div className={classNames(classes.main)}>
          <iframe
            title="sphinx"
            width="100%"
            height="2000px"
            frameborder="0"
            border="0"
            cellspacing="0"
            src={`${window.location.origin.toString()}/docs/index.html`}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(documentationPageStyle)(DocumentationPage);
