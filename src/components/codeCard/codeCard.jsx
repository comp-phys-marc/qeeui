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
import CodeBlock from "../Code/Code.jsx";
// router
import { withRouter } from "react-router";

import dashboardCardStyle from "../../assets/jss/material-dashboard-react/views/dashboardCardStyle.jsx";

class CodeCard extends React.Component {
  static propTypes = {
    experiment: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      experiment: this.props.experiment
    };
  }

  editCode = () => {
    this.props.history.push({
      pathname: "/editor",
      state: { experiment: this.state.experiment }
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader color="primary">
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <h4 className={classes.cardTitleWhite}>QASM Code</h4>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <p className={classes.cardCategoryWhite}>Circuit Definition</p>
            </GridItem>
          </GridContainer>
        </CardHeader>
        <CardBody>
          <CodeBlock
            className={classes.smallBlock}
            title={this.state.experiment.name}
            code={this.state.experiment.code}
          />
        </CardBody>
        <CardFooter>
          <RegularButton onClick={this.editCode} color="primary">
            Edit
          </RegularButton>
        </CardFooter>
      </Card>
    );
  }
}

export default withRouter(withStyles(dashboardCardStyle)(CodeCard));
