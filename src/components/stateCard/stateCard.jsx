import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridItem from '../Grid/GridItem.jsx'
import GridContainer from '../Grid/GridContainer.jsx'
import Card from '../Card/Card.jsx'
import CardHeader from '../Card/CardHeader.jsx'
import CardBody from '../Card/CardBody.jsx'
import ZoomableChart from '../zoomableChart/zoomableChart.jsx'
import CardFooter from '../Card/CardFooter.jsx'
import RegularButton from '../CustomButtons/Button.jsx'

import sizeMe from 'react-sizeme'

import dashboardCardStyle from '../../assets/jss/material-dashboard-react/views/dashboardCardStyle.jsx'

class StateCard extends React.Component {
  static propTypes = {
    states: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      states: this.props.states
    }
  }

  render() {
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <CardHeader color="info">
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <h4 className={classes.cardTitleWhite}>Probabilities</h4>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <p className={classes.cardCategoryWhite}>Intermediate States</p>
            </GridItem>
          </GridContainer>
        </CardHeader>
        <CardBody>
          <ZoomableChart
            height={this.props.size.width * 0.5}
            width={this.props.size.width * 0.9}
            dataSeries={this.state.states}
          />
        </CardBody>
        <CardFooter>
          <RegularButton color="info">Export</RegularButton>
        </CardFooter>
      </Card>
    )
  }
}

export default sizeMe()(withStyles(dashboardCardStyle)(StateCard))
