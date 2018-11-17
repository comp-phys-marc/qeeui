import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import GridItem from '../Grid/GridItem.jsx'
import GridContainer from '../Grid/GridContainer.jsx'
import Card from '../Card/Card.jsx'
import CardHeader from '../Card/CardHeader.jsx'
import CardBody from '../Card/CardBody.jsx'
import CardFooter from '../Card/CardFooter.jsx'
import RegularButton from '../CustomButtons/Button.jsx'
import Table from '../Table/Table.jsx'
//redux
import { connect } from 'react-redux'
import { selectExecution } from '../../actions/executions'

import dashboardStyle from '../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx'

const mapStateToProps = state => state.executions
const mapDispatchToProps = dispatch => ({
  selectExecution: selected => dispatch(selectExecution(selected))
})

class ExecutionCard extends React.Component {
  selectExecution = selected => {
    this.props.selectExecution(selected)
  }

  static propTypes = {
    executionData: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      executionData: this.props.executionData
    }
  }

  render() {
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <CardHeader color="danger">
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <h4 className={classes.cardTitleWhite}>Executions</h4>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <p className={classes.cardCategoryWhite}>Experimental Results</p>
            </GridItem>
          </GridContainer>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="danger"
            tableHead={['Runs', 'Speed', 'Date']}
            tableData={this.state.executionData.map(execution => [execution.runs, execution.speed, execution.time])}
            selectable={true}
            onSelect={selected => this.selectExecution(selected)}
          />
        </CardBody>
        <CardFooter>
          <RegularButton color="danger">New Execution</RegularButton>
          <RegularButton color="danger" disabled={this.props.selected && this.props.selected.length > 0 ? false : true}>
            Open
          </RegularButton>
        </CardFooter>
      </Card>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(dashboardStyle)(ExecutionCard))
