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

class OutputCard extends React.Component {
  static propTypes = {
    outputs: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      outputs: this.props.outputs
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader color="primary">
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <h4 className={classes.cardTitleWhite}>Computation Output</h4>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <p className={classes.cardCategoryWhite}>Math</p>
            </GridItem>
          </GridContainer>
        </CardHeader>
        <CardBody>
          {this.state.outputs.map((output, index) => {
            return (
              <CodeBlock
                key={index}
                className={classes.smallBlock}
                title={`Output ${output.id}`}
                code={output.content}
              />
            );
          })}
        </CardBody>
        <CardFooter>
          <RegularButton color="primary">Export</RegularButton>
        </CardFooter>
      </Card>
    );
  }
}

export default withStyles(dashboardCardStyle)(OutputCard);
