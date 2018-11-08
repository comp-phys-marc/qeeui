import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridItem from '../Grid/GridItem.jsx'
import GridContainer from '../Grid/GridContainer.jsx'

import Loader from 'react-loader-spinner'

import topologyStyle from '../../assets/jss/material-dashboard-react/components/topologyStyle.jsx'

class Topology extends React.Component {
  static propTypes = {
    qubits: PropTypes.number,
    bits: PropTypes.number,
    signals: PropTypes.number
  }

  constructor(props) {
    super(props)

    this.state = {
      qubits: this.props.qubits,
      bits: this.props.bits,
      signals: this.props.signals
    }
  }
  render() {
    const { classes } = this.props
    const { qubits, bits, signals } = this.state
    return (
      <GridContainer>
        <GridItem xs={6} sm={6} md={6} className={classes.animationLabel}>
          <h2 className={classes.dataSizeLabel}>{qubits}</h2>
          <p className={classes.dataSizeLabel}>{qubits > 1 ? 'qubits' : 'qubit'}</p>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} className={classes.animation}>
          <Loader type="MutatingDot" height={100} width={100} />
        </GridItem>
        <GridItem xs={6} sm={6} md={6} className={classes.animationLabel}>
          <h2 className={classes.dataSizeLabel}>{bits}</h2>
          <p className={classes.dataSizeLabel}>{bits > 1 ? 'bits' : 'bit'}</p>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} className={classes.animation}>
          <Loader type="Grid" color="grey" height={40} width={40} />
        </GridItem>
        <GridItem xs={6} sm={6} md={6} className={classes.animationLabel}>
          <h2 className={classes.dataSizeLabel}>{signals}</h2>
          <p className={classes.dataSizeLabel}>{signals > 1 ? 'signals' : 'signal'}</p>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} className={classes.animation}>
          <Loader type="RevolvingDot" color="grey" height={40} width={40} />
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(topologyStyle)(Topology)
