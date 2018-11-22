import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import Code from '../../../components/Code/Code.jsx'
import RegularButton from '../../../components/CustomButtons/Button.jsx'

import exampleStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/exampleStyle.jsx'

import ui from '../../../assets/img/ui.png'
import dash from '../../../assets/img/dash.png'

import demoExperiment from '../../../config/demo/experimentConfig'
import densityExample from './constants'

class ExampleSection extends React.Component {
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
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Example Experiment</h2>
            <h3 className={classes.title}>Quantum teleportation emulation</h3>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Code title={demoExperiment.code.name} code={demoExperiment.code.qasm} />
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <b className={classes.explanation}>I / O</b>
            <h5 className={classes.explanation}>
              To initiaite an emulation, an OPEN QASM script can be uplaoded. The Quantum Emulation Engine will then
              provision the resources necessary to acheive a emulation with the requested output resolution.
            </h5>
            <h5 className={classes.explanation}>
              One result that is provided after an experiment is a set of calculations like the output below. A number
              of such calculations may be produced; one for each emulation node that attempted the problem. Since
              results are sometimes based on the measurement of an emulated superposition, the set of calculations from
              any one experiment trial may contain various answers.
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Code title="Output" code={densityExample} />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <b className={classes.explanation}>Exlporable data</b>
            <h5 className={classes.explanation}>
              The output calculation goes further than alternative emulators, but still has many limitations. Physicists
              are often not interested only in the circuit model of a quantum information processing task and its
              description in Dirac notation.
            </h5>
            <h5 className={classes.explanation}>
              So, a graph with zoom capabilities is generated that maps out the probabilistic state transitions between
              being fully 0 and fully 1 that each qubit experienced during an emulation.
            </h5>
            <b className={classes.explanation}>Density matrices</b>
            <h5 className={classes.explanation}>
              Get into the math. We are doing linear algebra under the hood, and you are a certified mechanic. Just
              change a setting to have a look for yourself.
            </h5>
          </GridItem>
        </GridContainer>
        <div className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} className={classes.centered}>
              <h3 className={classes.title}>Interested in UI?</h3>
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <img src={ui} alt="..." className={classes.uiImg} />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <img src={dash} alt="..." className={classes.uiImg} />
                  </GridItem>
                </GridContainer>
              </GridItem>
              <NavLink to="/dashboard">
                <RegularButton className={classes.spaced}>Try a demo</RegularButton>
              </NavLink>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(exampleStyle)(ExampleSection)
