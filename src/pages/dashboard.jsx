import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Build from '@material-ui/icons/Build'
// core components
import GridItem from '../components/Grid/GridItem.jsx'
import GridContainer from '../components/Grid/GridContainer.jsx'
import ExecutionCard from '../components/executionCard/executionCard.jsx'
import CircuitCard from '../components/circuitCard/circuitCard.jsx'
import CodeCard from '../components/codeCard/codeCard.jsx'
import Sidebar from '../components/Sidebar/Sidebar.jsx'
import TopologyCard from '../components/topologyCard/topologyCard.jsx'

import dashboardStyle from '../assets/jss/material-dashboard-react/views/dashboardStyle.jsx'

import logo from '../assets/img/blackboardLogo.png'
import blackboard from '../assets/img/blackboard.jpg'

import demoExperiment from '../config/demo/experimentConfig'

class Dashboard extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    experiment: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      experiment: this.props.experiment != null ? this.props.experiment : demoExperiment
    }
  }

  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <GridContainer>
          <GridItem xs={false} sm={false} md={3}>
            <Sidebar
              routes={[
                {
                  path: '/dashboard',
                  sidebarName: this.state.experiment.name,
                  icon: Build
                }
              ]}
              logoText={'EXPERIMENTS'}
              logo={logo}
              image={blackboard}
              handleDrawerToggle={this.handleDrawerToggle}
              open={false}
              {...rest}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <GridContainer className={classes.mainContainer}>
              <GridItem xs={12} sm={12} md={6}>
                <CodeCard code={this.state.experiment.code} />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TopologyCard topology={this.state.experiment.topology} />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <ExecutionCard executionData={this.state.experiment.executions} />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CircuitCard circuit={this.state.experiment.circuit} />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(dashboardStyle)(Dashboard)
