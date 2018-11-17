import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridItem from '../Grid/GridItem.jsx'
import GridContainer from '../Grid/GridContainer.jsx'
import Card from '../Card/Card.jsx'
import CardHeader from '../Card/CardHeader.jsx'
import CardBody from '../Card/CardBody.jsx'
import NestedTreeMap from '../nestedTreeMap/nestedTreeMap.jsx'
import CardFooter from '../Card/CardFooter.jsx'
import RegularButton from '../CustomButtons/Button.jsx'

import dashboardCardStyle from '../../assets/jss/material-dashboard-react/views/dashboardCardStyle.jsx'

class ResourceCard extends React.Component {
  static propTypes = {
    resources: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      resources: this.props.resources
    }
  }

  render() {
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <CardHeader color="danger">
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <h4 className={classes.cardTitleWhite}>Resources</h4>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <p className={classes.cardCategoryWhite}>Used in computation</p>
            </GridItem>
          </GridContainer>
        </CardHeader>
        <CardBody>
          <NestedTreeMap dataSeries={this.state.resources} dataTitle={'Runs'} />
        </CardBody>
        <CardFooter>
          <RegularButton color="danger">Export</RegularButton>
        </CardFooter>
      </Card>
    )
  }
}

export default withStyles(dashboardCardStyle)(ResourceCard)
