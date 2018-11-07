import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// @material-ui/icons

// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import CustomInput from '../../../components/CustomInput/CustomInput.jsx'
import Button from '../../../components/CustomButtons/Button.jsx'

import workStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx'

class WorkSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      content: '',
      email: ''
    }

    this.setEmail = this.setEmail.bind(this)
    this.setBody = this.setBody.bind(this)
    this.setName = this.setName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  setEmail(event) {
    this.setState({ email: event.target.value })
  }

  setBody(event) {
    this.setState({ content: event.target.value })
  }

  setName(event) {
    this.setState({ name: event.target.value })
  }

  handleSubmit() {
    const subject = `Hi from ${this.state.name} @ ${this.state.email}`
    window.open(`mailto:marcus@quantumemulation.com?subject=${subject}&body=${this.state.content}`, '_blank')
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.section} id="work">
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Access the Alpha</h2>
            <h4 className={classes.description}>
              Interested in access to the Alpha? Let us know why you are a good candidate for a free subcription.
            </h4>
            <form onSubmit={this.handleSubmit}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true,
                      value: this.state.name,
                      onChange: this.setName
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                      value: this.state.email,
                      onChange: this.setEmail
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                    value: this.state.content,
                    onChange: this.setBody
                  }}
                />
                <GridContainer justify="center">
                  <GridItem xs={10} sm={10} md={10} className={classes.textCenter}>
                    <Button type="submit" value="Submit" color="primary">
                      Send Message
                    </Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(workStyle)(WorkSection)
