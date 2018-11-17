import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridItem from '../Grid/GridItem.jsx'
import GridContainer from '../Grid/GridContainer.jsx'
import Card from '../Card/Card.jsx'
import CardHeader from '../Card/CardHeader.jsx'
import CardBody from '../Card/CardBody.jsx'
import SimpleBarChart from '../simpleBarChart/simpleBarChart.jsx'
import CardFooter from '../Card/CardFooter.jsx'
import RegularButton from '../CustomButtons/Button.jsx'

import sizeMe from 'react-sizeme'

import dashboardCardStyle from '../../assets/jss/material-dashboard-react/views/dashboardCardStyle.jsx'

class MeasurementCard extends React.Component {
  static propTypes = {
    measurements: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      measurements: this.props.measurements
    }
  }

  render() {
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <CardHeader color="warning">
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <h4 className={classes.cardTitleWhite}>Measurements</h4>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <p className={classes.cardCategoryWhite}>Emulator outputs</p>
            </GridItem>
          </GridContainer>
        </CardHeader>
        <CardBody>
          <SimpleBarChart
            height={this.props.size.width * 0.5}
            width={this.props.size.width * 0.9}
            dataSeries={this.state.measurements}
          />
        </CardBody>
        <CardFooter>
          <RegularButton color="warning">Export</RegularButton>
        </CardFooter>
      </Card>
    )
  }
}

export default sizeMe()(withStyles(dashboardCardStyle)(MeasurementCard))
