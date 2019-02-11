import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons

// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import Card from '../../../components/Card/Card.jsx'

import softwareStyle from '../../../assets/jss/material-kit-react/views/softwarePageSections/softwareStyle.jsx'

import xanadu from '../../../assets/img/xanadu.png'
import github from '../../../assets/img/github.png'
import photonicdevice from '../../../assets/img/photonic.png'
import sciapi from '../../../assets/img/sciapi.png'

class SoftwareSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Creating The Future</h2>
            <h5 className={classes.description}>
              The future of quantum computing will be decided by the most widely accepted and community driven
              technology. We contribute to excellent software like Xanadu's Strawberry Fields, and also create our own
              open source software.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                  <a href="https://www.xanadu.ai/">
                    <img src={xanadu} alt="..." />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Xanadu AI
                  <br />
                  <small className={classes.smallTitle}>We contribute to Xanadu's Strawberry Fields.</small>
                </h4>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                  <a href="http://www.quantumdevices.ca">
                    <img src={photonicdevice} alt="..." />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Open Photonic Hardware
                  <br />
                  <small className={classes.smallTitle}>Our open photonic hardware for learning quantum.</small>
                </h4>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                  <a href="http://www.sciapi.ca/">
                    <img src={sciapi} alt="..." />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  SciAPI
                  <br />
                  <small className={classes.smallTitle}>An open web API for physics.</small>
                </h4>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                  <a href="https://github.com/MackEdweise/QuantumTools">
                    <img src={github} alt="..." />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Open Quantum Tools
                  <br />
                  <small className={classes.smallTitle}>Handy software we have authored.</small>
                </h4>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(softwareStyle)(SoftwareSection)
