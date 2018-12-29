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
  render() {
    const { classes } = this.props

    return (
      <div className={classes.section}>
        <GridContainer className={classes.spaced} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Largest Number of Qubits Ever Achieved</h2>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <p className={classes.description}>
              2540 qubits maintained and operated simultaneously without any limiations on their interactivity,
              including entanglement. Quantum states are maintained to within 1% precision in every measureable basis.
            </p>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <ForceGraph simulationOptions={{ height: 300, width: 300, animate: 1, strength: { charge: -500 } }}>
              <ForceGraphNode node={{ id: '0' }} fill="#6ec3f2" />
              <ForceGraphNode node={{ id: '1' }} fill="#c63f38" />
              <ForceGraphNode node={{ id: '2' }} fill="#434c92" />
              <ForceGraphNode node={{ id: '3' }} fill="#349c51" />
              <ForceGraphNode node={{ id: '4' }} fill="#6ec3f2" />
              <ForceGraphNode node={{ id: '5' }} fill="#c63f38" />
              <ForceGraphNode node={{ id: '6' }} fill="#434c92" />
              <ForceGraphNode node={{ id: '7' }} fill="#349c51" />
              <ForceGraphNode node={{ id: '8' }} fill="#6ec3f2" />
              <ForceGraphNode node={{ id: '9' }} fill="#c63f38" />
              <ForceGraphNode node={{ id: '10' }} fill="#434c92" />
              <ForceGraphNode node={{ id: '11' }} fill="#349c51" />
              <ForceGraphNode node={{ id: '12' }} fill="#6ec3f2" />
              <ForceGraphNode node={{ id: '13' }} fill="#c63f38" />
              <ForceGraphNode node={{ id: '14' }} fill="#434c92" />
              <ForceGraphNode node={{ id: '15' }} fill="#349c51" />
              <ForceGraphNode node={{ id: '16' }} fill="#6ec3f2" />
              <ForceGraphNode node={{ id: '17' }} fill="#c63f38" />
              <ForceGraphNode node={{ id: '18' }} fill="#434c92" />
              <ForceGraphNode node={{ id: '19' }} fill="#349c51" />
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '0' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '1' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '2' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '3' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '4' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '5' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '6' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '7' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '8' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '9' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '10' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '11' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '12' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '13' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '14' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '15' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '16' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '17' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '18' }} />
                })}
              {Array(20)
                .fill()
                .map((_, idx) => idx)
                .map(qubit => {
                  return <ForceGraphLink link={{ source: qubit.toString(), target: '19' }} />
                })}
            </ForceGraph>
          </GridItem>
        </GridContainer>
        <GridContainer className={classes.spaced} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Groundbreaking Efficiency</h2>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <p className={classes.description}>
              Any product of Pauli operators, and all finite quantum operators belonging to the Clifford groups can be
              applied in under 10 micro seconds.
            </p>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <img src={mu} alt="micro" className={classes.image} />
          </GridItem>
        </GridContainer>
        <GridContainer className={classes.spaced} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Superior State Tomography</h2>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <p className={classes.description}>
              Analyze quantum states without disturbing them using superior state tomography techniques made possible by
              artificial intelligence.
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
