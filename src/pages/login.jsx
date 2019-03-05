import React from "react";
import api from "../../src/api";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Business from "@material-ui/icons/Business";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "../components/Header/Header.jsx";
import HeaderLinks from "../components/Header/HeaderLinks.jsx";
import Footer from "../components/Footer/Footer.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import Card from "../components/Card/Card.jsx";
import CardBody from "../components/Card/CardBody.jsx";
import CardHeader from "../components/Card/CardHeader.jsx";
import CardFooter from "../components/Card/CardFooter.jsx";
import CustomInput from "../components/CustomInput/CustomInput.jsx";
// redux
import { connect } from "react-redux";
import { setUser } from "../actions/user";

import { toast } from "react-toastify";
import loginPageStyle from "../assets/jss/material-kit-react/views/loginPage.jsx";
import image from "../assets/img/computers-circuit-board-and-microchips.jpg";

const mapStateToProps = state => state.user;
const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      signUp: false,
      email: "",
      name: "",
      password: "",
      phone: "",
      companyname: ""
    };
  }
  showError = message => toast.error(message);
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  setUser = user => {
    this.props.setUser(user);
  };
  toggleForm = () => {
    this.clearState();
    this.setState({ signUp: !this.state.signUp });
  };
  updateCompany = event => {
    this.setState({ companyname: event.target.value });
  };
  updatePhone = event => {
    this.setState({ phone: event.target.value });
  };
  updateEmail = event => {
    this.setState({ email: event.target.value });
  };
  updateName = event => {
    this.setState({ name: event.target.value });
  };
  updatePassword = event => {
    this.setState({ password: event.target.value });
  };
  clearState = () => {
    this.setState({
      email: "",
      name: "",
      password: "",
      phone: "",
      companyname: ""
    });
  };
  submitSignUp = () => {
    api
      .post("/user", {
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        companyname: this.state.companyname,
        phone: this.state.phone
      })
      .then(response => {
        this.setUser(response.data.User);
      })
      .catch(error => {
        this.showError(error.message);
      });
  };
  submitSignIn = () => {
    api
      .post("/auth", {
        name: this.state.name,
        password: this.state.password
      })
      .then(response => {
        this.setUser(response.data.User);
      })
      .catch(error => {
        this.showError(error.message);
      });
  };
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          brand="Quantum Emulation Engine"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  {!this.state.signUp && (
                    <form className={classes.form}>
                      <CardHeader
                        color="primary"
                        className={classes.cardHeader}
                      >
                        <h4>Sign In</h4>
                        <Button color="transparent" onClick={this.toggleForm}>
                          Or Sign Up
                        </Button>
                      </CardHeader>
                      <CardBody>
                        <CustomInput
                          labelText="User Name..."
                          id="first"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            value: this.state.name,
                            onChange: this.updateName,
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                        <CustomInput
                          labelText="Password"
                          id="pass"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            value: this.state.password,
                            onChange: this.updatePassword,
                            type: "password",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Icon className={classes.inputIconsColor}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            )
                          }}
                        />
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button
                          simple
                          color="primary"
                          size="lg"
                          onClick={this.submitSignIn}
                        >
                          Submit
                        </Button>
                      </CardFooter>
                    </form>
                  )}

                  {this.state.signUp && (
                    <form className={classes.form}>
                      <CardHeader
                        color="primary"
                        className={classes.cardHeader}
                      >
                        <h4>Sign Up</h4>
                        <Button color="transparent" onClick={this.toggleForm}>
                          Or Sign In
                        </Button>
                      </CardHeader>
                      <CardBody>
                        <CustomInput
                          labelText="User Name..."
                          id="first"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            value: this.state.name,
                            onChange: this.updateName,
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                        <CustomInput
                          labelText="Password"
                          id="pass"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            value: this.state.password,
                            onChange: this.updatePassword,
                            type: "password",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Icon className={classes.inputIconsColor}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            )
                          }}
                        />
                        <CustomInput
                          labelText="Email..."
                          id="email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            value: this.state.email,
                            onChange: this.updateEmail,
                            type: "email",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Email className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                        <CustomInput
                          labelText="Phone..."
                          id="phone"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            value: this.state.phone,
                            onChange: this.updatePhone,
                            type: "phone",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Phone className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                        <CustomInput
                          labelText="Company..."
                          id="company"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            value: this.state.companyname,
                            onChange: this.updateCompany,
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Business className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button
                          simple
                          color="primary"
                          size="lg"
                          onClick={this.submitSignUp}
                        >
                          Get Started
                        </Button>
                      </CardFooter>
                    </form>
                  )}
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(loginPageStyle)(Login));
