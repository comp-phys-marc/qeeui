import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons

// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import Card from '../../../components/Card/Card.jsx'
import CardBody from '../../../components/Card/CardBody.jsx'
import researchStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/researchStyle.jsx'

import research1 from '../../../assets/img/qcircuit.png'
import research2 from '../../../assets/img/ccircuit.png'

class ResearchSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Driving Research Forward</h2>
            <h5 className={classes.description}>
              With help of cutting-edge tools, we will enable the advancement of our more ambitious research efforts,
              and provide better tools to the research commuity.
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
                  <small className={classes.smallTitle}>Developing a description language</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    A novel descriptive model for quantum information systems that is an ideal input to an unsupervised
                    AI is being developed by researchers at the Institute for Quantum Computing at the University of
                    Waterloo.
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
                  Acheivable Classical Emulators
                  <br />
                  <small className={classes.smallTitle}>Optimizing for maximum acheivability</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    A transformation from this new quantum descriptive language to electrical hardware description
                    languages is being developed using data and conclusions generated using the Quantum Emulation
                    Engine.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(researchStyle)(ResearchSection)
