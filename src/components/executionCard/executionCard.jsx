import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import CardFooter from "../Card/CardFooter.jsx";
import RegularButton from "../CustomButtons/Button.jsx";
import Table from "../Table/Table.jsx";
//redux
import { connect } from "react-redux";
import {
  selectExecution,
  clearExecutionSelection
} from "../../actions/executions";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

import dashboardCardStyle from "../../assets/jss/material-dashboard-react/views/dashboardCardStyle.jsx";

const mapStateToProps = state => state.executions;
const mapDispatchToProps = dispatch => ({
  selectExecution: selected => dispatch(selectExecution(selected)),
  clearExecutionSelection: () => dispatch(clearExecutionSelection())
});

class ExecutionCard extends React.Component {
  selectExecution = selected => {
    this.props.selectExecution(selected);
  };

  clearExecutionSelection = () => {
    this.props.clearExecutionSelection();
  };

  static propTypes = {
    executionData: PropTypes.array.isRequired,
    experiment: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      executionData: this.props.executionData,
      experiment: this.props.experiment
    };
  }

  componentWillMount() {
    this.clearExecutionSelection();
  }

  render() {
    const { classes } = this.props;
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
            tableHead={["Runs", "Speed", "Date"]}
            tableData={this.state.executionData.map(execution => [
              execution.runs,
              execution.speed,
              execution.time
            ])}
            selectable={true}
            onSelect={selected => this.selectExecution(selected)}
          />
        </CardBody>
        <CardFooter>
          <RegularButton color="danger">New Execution</RegularButton>
          {this.props.selected &&
            this.props.selected.length > 0 && (
              <Link
                to={{
                  pathname: "/results",
                  state: {
                    experiment: {
                      name: this.state.experiment.name,
                      executions: this.props.selected.map(
                        index => this.state.executionData[index]
                      )
                    }
                  }
                }}
              >
                <RegularButton color="danger">Open</RegularButton>
              </Link>
            )}
          {!(this.props.selected && this.props.selected.length > 0) && (
            <RegularButton color="danger" disabled={true}>
              Open
            </RegularButton>
          )}
        </CardFooter>
      </Card>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(dashboardCardStyle)(ExecutionCard));
