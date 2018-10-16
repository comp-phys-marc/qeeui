import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons

// core components
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import GridContainer from '../../components/Grid/GridContainer.jsx'
import GridItem from '../../components/Grid/GridItem.jsx'
import HeaderLinks from '../../components/Header/HeaderLinks.jsx'
import Parallax from '../../components/Parallax/Parallax.jsx'

import landingPageStyle from '../../assets/jss/material-kit-react/views/landingPage.jsx'

// Sections for this page
import ProductSection from './sections/productSection.jsx'
import ResearchSection from './sections/researchSection.jsx'
import WorkSection from './sections/workSection.jsx'
import ExampleSection from './sections/exampleSection.jsx'

const dashboardRoutes = []

class LandingPage extends React.Component {
  constructor() {
    super()
    this.state = {
      width: window.innerWidth
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const { classes, ...rest } = this.props
    const { width } = this.state
    let isMobile = width <= 900
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Quantum Emulation Engine"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
          {...rest}
        />
        {isMobile === false && (
          <Parallax filter image={require('../../assets/img/landing-background.png')}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h1 className={classes.title}>Take quantum research to the next level.</h1>
                  <h4>
                    Harness Google's Cloud infrastructure and AI to emulate, analyze and interpret quantum computing
                    experiments.
                  </h4>
                  <br />
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
        )}
        {isMobile === true && (
          <Parallax filter image={require('../../assets/img/mobile-landing-background.png')}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h1 className={classes.title}>Take quantum research to the next level.</h1>
                  <h4>
                    Harness Google's Cloud infrastructure and AI to emulate, analyze and interpret qunatum computing
                    experiments.
                  </h4>
                  <br />
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
        )}
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <ResearchSection />
            <ExampleSection isMobile={isMobile} />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)
