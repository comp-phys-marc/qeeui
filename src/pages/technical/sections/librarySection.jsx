import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import CodeBlock from '../../../components/Code/Code.jsx'

import libraryStyle from '../../../assets/jss/material-kit-react/views/technicalPageSections/libraryStyle.jsx'

import library from '../../../assets/img/library.png'

import { stateInitCode, stateOpCode, diagnosticCode } from './constants'

class LibrarySection extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <img src={library} alt="library" className={classes.libImage} />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={7} md={7}>
            <CodeBlock title="Multi Qubit State Declaration" code={stateInitCode} language="Python" />
          </GridItem>
          <GridItem xs={12} sm={5} md={5}>
            <p className={classes.explanation}>
              The library API is written with the intent of reflecting the experience of solving a quantum circuit in
              Dirac notation. Therefore, what a user must provide to declare a quantum state are the coefficients of its
              composite pure states ( the square root of each pure state's probability of being observed ) and the bit
              string representing the vlaues of each qubit in that pure state.
            </p>
          </GridItem>
          <GridItem xs={12} sm={7} md={7}>
            <CodeBlock title="Quantum Circuit Operations" code={stateOpCode} language="Python" />
          </GridItem>
          <GridItem xs={12} sm={5} md={5}>
            <p className={classes.explanation}>
              A simple, expressive syntax for describing and executing quantum circuits yields an intuitive framework
              with which researchers can create experiments. Don't worry about the separation of declaration,
              instantiation and evaluation. When your code is executed, your circuit is run on the emulator. It's as
              simple as that.
            </p>
            <p className={classes.explanation}>
              Use supported operations including the Pauli matrices, controlled not gate, Hadamard gate, measurement
              operator and more. Since a circuit is built and state is mutated one step at a time during execution time,
              you can use classical measurement results to control subsequent quantum operations.
            </p>
          </GridItem>
          <GridItem xs={12} sm={7} md={7}>
            <CodeBlock title="Diagnostic Tools" code={diagnosticCode} language="Python" />
          </GridItem>
          <GridItem xs={12} sm={5} md={5}>
            <p className={classes.explanation}>
              Get insight into the how and why of your experiments' results. At any time, learn the matrix
              representations of your states and of any individual qubits.
            </p>
            <p className={classes.explanation}>
              Interested in complexity? Learn how many resources your algorithm required, and of what type.
            </p>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(libraryStyle)(LibrarySection)
