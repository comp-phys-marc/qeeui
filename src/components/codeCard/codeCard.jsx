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

import dashboardCardStyle from "../../assets/jss/material-dashboard-react/views/dashboardCardStyle.jsx";

class CodeCard extends React.Component {
  static propTypes = {
    code: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      code: this.props.code
    };
  }

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
            title={this.state.code.name}
            code={this.state.code.qasm}
          />
        </CardBody>
        <CardFooter>
          <RegularButton color="primary">Upload New Code</RegularButton>
          <RegularButton color="primary">Edit</RegularButton>
        </CardFooter>
      </Card>
    );
  }
}

export default withStyles(dashboardCardStyle)(CodeCard);
