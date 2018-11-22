import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons
import CloudDone from '@material-ui/icons/CloudDone'
import CloudUpload from '@material-ui/icons/CloudUpload'
import Functions from '@material-ui/icons/Functions'
import ScatterPlot from '@material-ui/icons/ScatterPlot'
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import InfoArea from '../../../components/InfoArea/InfoArea.jsx'

import productStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx'

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Bridging the Gap</h2>
            <h5 className={classes.description}>
              The goals of the Quantum Emulation Engine project are multifaceted. We aim to address the gap between
              theoretical quantum research and the practical experimental implementation of quantum computing systems by
              bringing the most powerful and versatile current technologies to bear... but we know that won't be enough.
            </h5>
          </GridItem>
        </GridContainer>
        <div justify="center">
          <h3 className={classes.title}>Some problems we can address now</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="High Fideility Actualization"
                description="This isn't a true quantum computer so you shouldn't be limited by the obervability of intermediate states. Immediately see the steps in involved and all the intermediate states of an experiment in bra-ket notation. No one else is providing this transparency."
                icon={Functions}
                iconColor="warning"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="Analysis and Interpretation"
                description="Slice and dice numerical and computational results in an interactive user interface. Make use of extrapolations made from an interpretive AI to find new insights. Don't let any modern analysis tool go to waste."
                icon={ScatterPlot}
                iconColor="danger"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="Computing Resources"
                description="The Quantum Emulation Engine is built on a high-available, scalable microservices infrastructure of simulation nodes, each capable of simulating a quantum experiment in its fullness ad providing stochastic outcomes."
                icon={CloudDone}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="Compatibility"
                description="The Quantum Emulation Engine is OPEN QASM compatible. This means you can write an experiment in IBM's open-source language and uplaod it to be emulated in our powerful simulation environment."
                icon={CloudUpload}
                iconColor="primary"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(productStyle)(ProductSection)
