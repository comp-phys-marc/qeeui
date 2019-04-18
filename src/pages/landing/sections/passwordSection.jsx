import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import CustomInput from "../../../components/CustomInput/CustomInput.jsx";
//redux
import { connect } from "react-redux";
import { setPassed } from "../../../actions/access";

import exampleStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/exampleStyle.jsx";

const mapDispatchToProps = dispatch => ({
  setPassed: () => dispatch(setPassed())
});

class PasswordSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ""
    };

    this.setPassword = this.setPassword.bind(this);
  }

  setPassword(event) {
    this.setState({ password: event.target.value });
    if (this.state.password === "accessQuantumEnvPass") {
      this.props.setPassed();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Access the Quantum Cloud</h2>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Password"
                id="password"
                formControlProps={{
                  fullWidth: true,
                  value: this.state.password,
                  onChange: this.setPassword
                }}
              />
            </GridItem>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(withStyles(exampleStyle)(PasswordSection));
