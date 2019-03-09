import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../../components/Grid/GridItem.jsx";
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import Card from "../../../components/Card/Card.jsx";
import CardHeader from "../../../components/Card/CardHeader.jsx";
import CardBody from "../../../components/Card/CardBody.jsx";
import CardFooter from "../../../components/Card/CardFooter.jsx";
import RegularButton from "../../../components/CustomButtons/Button.jsx";
import Table from "../../../components/Table/Table.jsx";
//redux
import { connect } from "react-redux";
import {
  selectExperiment,
  clearExperimentSelection,
  setCreating
} from "../../../actions/experiments";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

import dashboardCardStyle from "../../../assets/jss/material-dashboard-react/views/dashboardCardStyle.jsx";

const mapStateToProps = state => state.experiments;
const mapDispatchToProps = dispatch => ({
  selectExperiment: selected => dispatch(selectExperiment(selected)),
  clearExperimentSelection: () => dispatch(clearExperimentSelection()),
  setCreating: () => dispatch(setCreating())
});

class ExperimentCard extends React.Component {
  selectExperiment = selected => {
    this.props.selectExperiment(selected);
  };

  constructor(props) {
    super(props);

    this.state = {
      experimentData: this.props.experiments
    };
  }

  componentWillMount() {
    this.props.clearExperimentSelection();
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader color="primary">
          <GridContainer>
            <GridItem xs={10} sm={8} md={6}>
              <h4 className={classes.cardTitleWhite}>Your Experiments</h4>
            </GridItem>
          </GridContainer>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="primary"
            tableHead={["Name", "Type"]}
            tableData={this.state.experimentData.map(experiment => [
              experiment.name,
              experiment.type
            ])}
            selectOne={true}
            selectable={true}
            onSelect={selected => this.selectExperiment(selected)}
          />
        </CardBody>
        <CardFooter>
          <RegularButton onClick={this.props.setCreating} color="primary">
            New Experiment
          </RegularButton>
          {this.props.selected &&
            this.props.selected.length > 0 && (
              <Link
                to={{
                  pathname: "/dashboard",
                  state: {
                    experiment: this.props.selected.map(
                      index => this.state.experimentData[index]
                    )[0]
                  }
                }}
              >
                <RegularButton color="primary">Open</RegularButton>
              </Link>
            )}
          {!(this.props.selected && this.props.selected.length > 0) && (
            <RegularButton color="primary" disabled={true}>
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
)(withStyles(dashboardCardStyle)(ExperimentCard));
