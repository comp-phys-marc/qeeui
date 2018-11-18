import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Build from '@material-ui/icons/Build'
import GraphicEq from '@material-ui/icons/GraphicEq'
import DataUsage from '@material-ui/icons/DataUsage'
// core components
import GridItem from '../components/Grid/GridItem.jsx'
import GridContainer from '../components/Grid/GridContainer.jsx'
import MeasurementCard from '../components/measurementCard/measurementCard.jsx'
import StateCard from '../components/stateCard/stateCard.jsx'
import OutputCard from '../components/outputCard/outputCard.jsx'
import ResultsCard from '../components/probableResultsCard/probableResultsCard.jsx'
import ResourcesCard from '../components/resourcesCard/resourcesCard.jsx'
import Sidebar from '../components/Sidebar/Sidebar.jsx'

import dashboardCardStyle from '../assets/jss/material-dashboard-react/views/dashboardCardStyle.jsx'

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
                },
                {
                  path: '/dashboard',
                  sidebarName: 'details',
                  icon: GraphicEq
                },
                {
                  path: '/results',
                  sidebarName: 'results',
                  icon: DataUsage
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
              <GridItem xs={12} sm={12} md={12}>
                <OutputCard outputs={this.state.experiment.results.outputs} />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <MeasurementCard measurements={this.state.experiment.results.measurements} />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <StateCard states={this.state.experiment.results.states} />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <ResultsCard results={this.state.experiment.results.states} />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <ResourcesCard resources={this.state.experiment.results.resources} />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(dashboardCardStyle)(Dashboard)
