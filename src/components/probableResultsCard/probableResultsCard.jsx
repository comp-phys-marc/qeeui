import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridItem from '../Grid/GridItem.jsx'
import GridContainer from '../Grid/GridContainer.jsx'
import Card from '../Card/Card.jsx'
import CardHeader from '../Card/CardHeader.jsx'
import CardBody from '../Card/CardBody.jsx'
import Badge from '../Badge/Badge.jsx'
import CardFooter from '../Card/CardFooter.jsx'
import RegularButton from '../CustomButtons/Button.jsx'

import probableResultsCardStyle from '../../assets/jss/material-kit-react/components/probableResultsCardStlye.jsx'

class ResultsCard extends React.Component {
  static propTypes = {
    results: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      results: this.props.results.map(state => {
        return { p: state.data[state.data.length - 1].y, name: state.title }
      })
    }
  }

  render() {
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <CardHeader color="success">
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <h4 className={classes.cardTitleWhite}>Results</h4>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <p className={classes.cardCategoryWhite}>Most probable</p>
            </GridItem>
          </GridContainer>
        </CardHeader>
        <CardBody>
          {this.state.results.map((result, index) => {
            return (
              <GridContainer key={index} justify="center" className={classes.paddedContainer}>
                <GridItem xs={6} sm={6} md={6} className={classes.titleBlock}>
                  <h4 className={classes.centered}>{result.name}</h4>
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.badgeBlock}>
                  <Badge color={result.p > 0.5 ? 'success' : 'danger'}>
                    <h4>{result.p > 0.5 ? '1' : '0'}</h4>
                  </Badge>
                </GridItem>
              </GridContainer>
            )
          })}
        </CardBody>
        <CardFooter>
          <RegularButton color="success">Export</RegularButton>
        </CardFooter>
      </Card>
    )
  }
}

export default withStyles(probableResultsCardStyle)(ResultsCard)
