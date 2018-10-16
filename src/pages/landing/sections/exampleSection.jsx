import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Badge from '../../../components/Badge/Badge.jsx'
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import SimpleBarChart from '../../../components/simpleBarChart/simpleBarChart.jsx'
import ZoomableChart from '../../../components/zoomableChart/zoomableChart.jsx'
import NestedTreeMap from '../../../components/nestedTreeMap/nestedTreeMap.jsx'

import teleportation from '../../../assets/img/teleportationcircuit.png'
import productStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/exampleStyle.jsx'

const resultDataSeries = [
  {
    data: [{ x: 'Sim 1', y: 1 }, { x: 'Sim 2', y: 1 }, { x: 'Sim 3', y: 1 }],
    title: 'p(Q0 == 1)'
  },
  {
    data: [{ x: 'Sim 1', y: 0.01 }, { x: 'Sim 2', y: 0.01 }, { x: 'Sim 3', y: 0.01 }],
    title: 'p(Q0 == 0)'
  },
  {
    data: [{ x: 'Sim 1', y: 0.01 }, { x: 'Sim 2', y: 0.01 }, { x: 'Sim 3', y: 0.01 }],
    title: 'p(Q1 == 1)'
  },
  {
    data: [{ x: 'Sim 1', y: 1 }, { x: 'Sim 2', y: 1 }, { x: 'Sim 3', y: 1 }],
    title: 'p(Q1 == 0)'
  },
  {
    data: [{ x: 'Sim 1', y: 0.01 }, { x: 'Sim 2', y: 0.01 }, { x: 'Sim 3', y: 0.01 }],
    title: 'p(Q2 == 1)'
  },
  {
    data: [{ x: 'Sim 1', y: 1 }, { x: 'Sim 2', y: 1 }, { x: 'Sim 3', y: 1 }],
    title: 'p(Q2 == 0)'
  }
]

const qubitDataSeries = [
  {
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 0.5 },
      { x: 2, y: 0.5 },
      { x: 3, y: 0.5 },
      { x: 4, y: 1 },
      { x: 5, y: 1 },
      { x: 6, y: 1 }
    ],
    disabled: false,
    title: 'Qubit 0'
  },
  {
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0.5 },
      { x: 3, y: 0.5 },
      { x: 4, y: 0 },
      { x: 5, y: 1 },
      { x: 6, y: 0 }
    ],
    disabled: false,
    title: 'Qubit 1'
  },
  {
    data: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0.5 },
      { x: 4, y: 0 },
      { x: 5, y: 0 },
      { x: 6, y: 0 }
    ],
    disabled: false,
    title: 'Qubit 2'
  }
]

const resourcesDataSeries = {
  title: 'Runs per Computation Node',
  color: 1,
  children: [
    {
      name: 'Sim 1',
      size: 100,
      color: Math.random(),
      style: {
        border: 'thin solid blue'
      }
    },
    {
      name: 'Sim 2',
      size: 100,
      color: Math.random(),
      style: {
        border: 'thin solid blue'
      }
    },
    {
      name: 'Sim 3',
      size: 100,
      color: Math.random(),
      style: {
        border: 'thin solid blue'
      }
    }
  ]
}

class ProductSection extends React.Component {
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
    const { isMobile } = this.state

    return (
      <div classname="classes.section">
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Example Experiment</h2>
            <h3 className={classes.title}>Quantum teleportation emulation</h3>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <b className={classes.explanation}>teleportation.qasm</b>
            <pre className={classes.codeblock}>{`
        OPENQASM 2.0;
        include "qelib1.inc";
        
        qreg q[3];
        creg c[1];
        
        h q[0];
        cx q[0],q[1];
        cx q[2],q[0];
        h q[2];
        measure q[1] -> c[0];
        `}</pre>
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
            <b className={classes.explanation}>Output</b>
            <pre className={classes.codeblock}>{`
        State to transmit: 0
        h (0) + 1.000|000> = + 1.000|000> + 1.000|100>
        normalizing factor: 0.7071067811865475
        |Ψ> = + 0.707|000> + 0.707|100>
        cx (0 -> 1) + 0.707|000> = + 0.707|000>
        cx (0 -> 1) + 0.707|100> = + 0.707|110>
        normalizing factor: 1.0000000000000002
        |Ψ> = + 0.707|000> + 0.707|110>
        cx (2 -> 0) + 0.707|000> = + 0.707|000>
        cx (2 -> 0) + 0.707|110> = + 0.707|110>
        normalizing factor: 1.0
        |Ψ> = + 0.707|000> + 0.707|110>
        h (2) + 0.707|000> = + 0.707|000> + 0.707|001>
        h (2) + 0.707|110> = + 0.707|110> + 0.707|111>
        normalizing factor: 0.7071067811865475
        |Ψ> = + 0.500|000> + 0.500|001> + 0.500|110> + 0.500|111>
        normalizing factor: 1.414213562373095
        |Ψ> = + 0.707|000> + 0.707|110>
        normalizing factor: 1.4142135623730951
        |Ψ> = + 1.000|110>
        Alice measures 0, 1
        x (1) + 1.000|110> = + 1.000|100>
        normalizing factor: 1.0
        |Ψ> = + 1.000|100>
        State received: 0
        
        `}</pre>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <b className={classes.explanation}>Exlporable data</b>
            <h5 className={classes.explanation}>
              The output calculation goes further than alternative simulators, but still has many limitations.
              Physicists are often not interested only in the circuit model of a quantum information processing task and
              its description in Dirac notation.
            </h5>
            <h5 className={classes.explanation}>
              So, a graph with zoom capabilities is generated that maps out the probabilistic state transitions between
              being fully 0 and fully 1 that each qubit experienced during an emulation.
            </h5>
            {isMobile === false && <b className={classes.explanation}>Intermediate qubit states</b>}
            {isMobile === false && <ZoomableChart dataSeries={qubitDataSeries} />}
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <b className={classes.explanation}>The basics</b>
            <h5 className={classes.explanation}>
              Detailed data is helpful, but sometimes it is the simple end result that inspires or validates an
              algorithm.
            </h5>
            {isMobile === false && (
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <b className={classes.explanation}>Circuit diagram</b>
                  <img src={teleportation} alt="circuit" />
                </GridItem>
              </GridContainer>
            )}
            <b className={classes.explanation}>Most probable measurement results</b>
            <GridContainer justify="center" className={classes.paddedContainer}>
              <GridItem xs={6} sm={6} md={6} className={classes.titleBlock}>
                <h4 className={classes.centered}>Qubit 0</h4>
              </GridItem>
              <GridItem xs={6} sm={6} md={6} className={classes.badgeBlock}>
                <Badge color="success">
                  <h4>1</h4>
                </Badge>
              </GridItem>
              <GridItem xs={6} sm={6} md={6} className={classes.titleBlock}>
                <h4 className={classes.centered}>Qubit 1</h4>
              </GridItem>
              <GridItem xs={6} sm={6} md={6} className={classes.badgeBlock}>
                <Badge color="danger">
                  <h4>0</h4>
                </Badge>
              </GridItem>
              <GridItem xs={6} sm={6} md={6} className={classes.titleBlock}>
                <h4 className={classes.centered}>Qubit 2</h4>
              </GridItem>
              <GridItem xs={6} sm={6} md={6} className={classes.badgeBlock}>
                <Badge color="danger">
                  <h4>0</h4>
                </Badge>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <b className={classes.explanation}>Resources</b>
            <h5 className={classes.explanation}>
              The platform provides insight into the results generated by each emulation node, not
              just the overal stochastic result.
            </h5>
            {isMobile === false && (
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <b className={classes.explanation}>Simulator measurement outputs</b>
                  <SimpleBarChart dataSeries={resultDataSeries} />
                </GridItem>
              </GridContainer>
            )}
            <b className={classes.explanation}>Computatonal resources used</b>
            <NestedTreeMap dataSeries={resourcesDataSeries} dataTitle={'Runs'} />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <b className={classes.explanation}>Density matrices</b>
            <h5 className={classes.explanation}>
              Get into the math. We are doing linear algebra under the hood, and you are a certified mechanic. Just
              change a setting to have a look for yourself.
            </h5>
            <pre className={classes.codeblock}>{`
              ...

              h (0) + 1.000|000> = + 1.000|000> + 1.000|100>
              
              normalizing factor: 0.7071067811865475
              
              |Ψ> = + 0.707|000> + 0.707|100>
              
              qubit 0 density matrix:
              
               _         _
              |0.5     0.5|
              |0.5     0.5|
               -         -
              qubit 1 density matrix:
              
               _         _
              |2.0     0.0|
              |0.0     0.0|
               -         -
              qubit 2 density matrix:
              
               _         _
              |2.0     0.0|
              |0.0     0.0|
               -         -
              ...
            `}</pre>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(productStyle)(ProductSection)
