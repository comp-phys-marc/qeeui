import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'

import { ForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force'

import mu from '../../../assets/img/mu.png'
import bloch from '../../../assets/img/bloch.png'

import advantageStyle from '../../../assets/jss/material-kit-react/views/hardwarePageSections/advantageStyle.jsx'

class AdvantageSection extends React.Component {
  static propTypes = {
    isMobile: PropTypes.bool
  }

  constructor(props) {
    super(props)

    this.state = {
      isMobile: this.props.isMobile
    }
  }

  generateGraphNodes(nodes) {
    let allNodes = []
    const colours = ['#6ec3f2', '#c63f38', '#434c92', '#349c51']
    for (let i = 0; i < nodes; i++) {
      allNodes.push(<ForceGraphNode node={{ id: i.toString() }} fill={colours[i % 4]} />)
    }

    return allNodes
  }

  generateGraphLinks(nodes) {
    let allLinks = []
    for (let i = 0; i < nodes; i++) {
      allLinks.push(
        Array(nodes)
          .fill()
          .map((_, idx) => idx)
          .map(qubit => {
            return <ForceGraphLink link={{ source: qubit.toString(), target: i.toString() }} />
          })
      )
    }

    return allLinks
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.section}>
        <GridContainer className={classes.spaced} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h1 className={classes.title}>Coming Soon...</h1>
          </GridItem>
        </GridContainer>
        <GridContainer className={classes.spaced} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Advantages</h2>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <p className={classes.description}>
              Scale up to <b>2540 qubits</b> without any additional overhead or delay. All qubits maintained and
              operated simultaneously without any limiations on their interactivity, including entanglement. Quantum
              states maintained to within <b>1% precision</b>.
            </p>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <ForceGraph simulationOptions={{ height: 400, width: 300, animate: 1, strength: { charge: -500 } }}>
              {this.generateGraphNodes(20)}
              {this.generateGraphLinks(20)}
            </ForceGraph>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <p className={classes.description}>
              Any product of Pauli operators, and all finite quantum operators belonging to the Clifford groups applied
              in under <b>10 micro seconds</b>.
            </p>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <img src={mu} alt="micro" className={classes.image} />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <p className={classes.description}>
              Analyze quantum states without disturbing them using <b>superior state tomography</b> techniques made
              possible by artificial intelligence.
            </p>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <img src={bloch} alt="bloch" className={classes.image} />
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(advantageStyle)(AdvantageSection)
